import React, { useEffect, useMemo, useRef, useState } from 'react';
import { View, Text, ScrollView, type ITouchEvent } from '@tarojs/components';
import Taro from '@tarojs/taro';
import classnames from 'classnames';
import dayjs from 'dayjs';
import type { Occurrence } from '@/types/schedule';
import { CATEGORY_MAP } from '@/constants/categories';
import { DATE_FMT, DT_FMT, TIME_FMT, todayKey, WEEKDAY_NAMES } from '@/utils/datetime';
import styles from './index.module.scss';

interface TimeGridViewProps {
  dateKeys: string[];
  occurrences: Occurrence[];
  // 每小时高度（rpx）
  hourHeight?: number;
  onCreate: (start: string, end: string) => void;
  onTapOccurrence: (occ: Occurrence) => void;
  onMoveOccurrence: (occ: Occurrence, newStart: string) => void;
  onResizeOccurrence: (occ: Occurrence, newEnd: string) => void;
}

const GUTTER_RPX = 72;
const TOTAL_RPX = 750;
const HOURS = Array.from({ length: 24 }, (_, i) => i);

type DragMode = 'create' | 'move' | 'resize';

interface DragState {
  mode: DragMode;
  col: number;
  startX: number;
  startY: number;
  gridTop: number;
  gridLeft: number;
  colWidthPx: number;
  occ?: Occurrence;
  blockTopPx?: number;
  blockHeightPx?: number;
  moved: boolean;
  pendingTap: boolean;
}

interface Selection {
  col: number;
  startMin: number;
  endMin: number;
}

let rpxFactor = 0;
function getRpxFactor(): number {
  if (!rpxFactor) {
    if (process.env.TARO_ENV === 'h5') {
      // H5 端 CSS 中的 rpx 在构建时固定按 0.5 转 px，内联样式写 rpx 会失效，统一换算
      rpxFactor = 0.5;
    } else {
      try {
        rpxFactor = Taro.getSystemInfoSync().windowWidth / TOTAL_RPX;
      } catch (err) {
        console.error('[TimeGrid] system info failed:', err);
        rpxFactor = 0.5;
      }
    }
  }
  return rpxFactor;
}

// rpx 数值按平台因子转 px（内联样式无法使用 rpx 单位）
const toPx = (rpx: number, factor: number) => `${Math.round(rpx * factor * 100) / 100}px`;

const snap30 = (min: number) => Math.max(0, Math.floor(min / 30) * 30);
const snap15 = (min: number) => Math.round(min / 15) * 15;
const pad2 = (n: number) => String(n).padStart(2, '0');
const buildDT = (key: string, minutes: number) =>
  `${key} ${pad2(Math.floor(minutes / 60))}:${pad2(((minutes % 60) + 60) % 60)}`;

const TimeGridView: React.FC<TimeGridViewProps> = ({
  dateKeys,
  occurrences,
  hourHeight = 104,
  onCreate,
  onTapOccurrence,
  onMoveOccurrence,
  onResizeOccurrence
}) => {
  const factor = getRpxFactor();
  const pxPerHour = hourHeight * factor;
  const colWidthRpx = (TOTAL_RPX - GUTTER_RPX) / dateKeys.length;
  const totalHeightRpx = 24 * hourHeight;

  // 初始滚动到早上 8 点（scrollIntoView 锚点在 H5 端不稳定，用 scrollTop 兜底）
  const initialScrollTop = 8 * pxPerHour;

  const dragRef = useRef<DragState | null>(null);
  const [scrollEnabled, setScrollEnabled] = useState(true);
  const [selection, setSelection] = useState<Selection | null>(null);
  const [ghost, setGhost] = useState<{ key: string; tx: number; ty: number; hDeltaPx: number } | null>(null);
  const [nowMin, setNowMin] = useState(() => dayjs().hour() * 60 + dayjs().minute());

  useEffect(() => {
    const t = setInterval(() => {
      setNowMin(dayjs().hour() * 60 + dayjs().minute());
    }, 60 * 1000);
    return () => clearInterval(t);
  }, []);

  // 按列分组
  const { timedByCol, allDayByCol } = useMemo(() => {
    const timed: Record<number, Occurrence[]> = {};
    const allDay: Record<number, Occurrence[]> = {};
    dateKeys.forEach((_, i) => {
      timed[i] = [];
      allDay[i] = [];
    });
    occurrences.forEach((occ) => {
      const col = dateKeys.indexOf(occ.dateKey);
      if (col < 0) return;
      if (occ.event.allDay) allDay[col].push(occ);
      else timed[col].push(occ);
    });
    Object.keys(timed).forEach((k) => {
      timed[Number(k)].sort((a, b) => (a.start < b.start ? -1 : 1));
    });
    return { timedByCol: timed, allDayByCol: allDay };
  }, [dateKeys, occurrences]);

  const minutesFromY = (clientY: number, gridTop: number) =>
    ((clientY - gridTop) / pxPerHour) * 60;

  const queryRects = (ids: string[]): Promise<Array<{ top: number; left: number; height: number } | null>> =>
    new Promise((resolve) => {
      const query = Taro.createSelectorQuery();
      ids.forEach((id) => query.select(`#${id}`).boundingClientRect());
      query.exec((res) => resolve(res as Array<{ top: number; left: number; height: number } | null>));
    });

  // 点击 / 拖拽空白时间区
  const handleBgStart = (e: ITouchEvent) => {
    const touch = e.touches[0];
    const col = Number(e.currentTarget.dataset.col);
    dragRef.current = {
      mode: 'create',
      col,
      startX: touch.clientX,
      startY: touch.clientY,
      gridTop: 0,
      gridLeft: 0,
      colWidthPx: colWidthRpx * factor,
      moved: false,
      pendingTap: true
    };
    queryRects(['tgGrid']).then(([grid]) => {
      const drag = dragRef.current;
      if (!drag || !grid) return;
      drag.gridTop = grid.top;
      drag.gridLeft = grid.left;
      if (drag.pendingTap && !drag.moved) {
        // 快速点击：在该时刻创建 1 小时日程
        const anchor = snap30(minutesFromY(drag.startY, grid.top));
        onCreate(buildDT(dateKeys[drag.col], anchor), buildDT(dateKeys[drag.col], anchor + 60));
        dragRef.current = null;
      }
    });
  };

  // 点击 / 拖拽日程块
  const handleBlockStart = (e: ITouchEvent, occ: Occurrence) => {
    const touch = e.touches[0];
    const col = dateKeys.indexOf(occ.dateKey);
    const blockId = `tgB-${col}-${timedByCol[col].findIndex((o) => o.key === occ.key)}`;
    dragRef.current = {
      mode: 'move',
      col,
      startX: touch.clientX,
      startY: touch.clientY,
      gridTop: 0,
      gridLeft: 0,
      colWidthPx: colWidthRpx * factor,
      occ,
      moved: false,
      pendingTap: true
    };
    queryRects(['tgGrid', blockId]).then(([grid, block]) => {
      const drag = dragRef.current;
      if (!drag || !grid || !block) return;
      drag.gridTop = grid.top;
      drag.gridLeft = grid.left;
      drag.blockTopPx = block.top;
      drag.blockHeightPx = block.height;
      // 按住下边缘 → 缩放模式
      const offsetY = drag.startY - block.top;
      if (block.height - offsetY < 22) {
        drag.mode = 'resize';
      }
      // rect 回调晚于 touchend 时，在这里补发点击
      if (drag.pendingTap && !drag.moved) {
        dragRef.current = null;
        onTapOccurrence(drag.occ as Occurrence);
      }
    });
  };

  const handleMove = (e: ITouchEvent) => {
    const drag = dragRef.current;
    if (!drag || !drag.gridTop) return;
    const touch = e.touches[0];
    const dx = touch.clientX - drag.startX;
    const dy = touch.clientY - drag.startY;
    if (!drag.moved && Math.abs(dy) < 8 && Math.abs(dx) < 8) return;
    if (!drag.moved) {
      drag.moved = true;
      drag.pendingTap = false;
      setScrollEnabled(false);
    }

    if (drag.mode === 'create') {
      const anchor = snap30(minutesFromY(drag.startY, drag.gridTop));
      const cur = snap30(minutesFromY(touch.clientY, drag.gridTop));
      const startMin = Math.min(anchor, cur);
      const endMin = Math.max(anchor + 30, cur + 30);
      setSelection({
        col: drag.col,
        startMin: Math.max(0, startMin),
        endMin: Math.min(24 * 60, endMin)
      });
      return;
    }

    if (drag.mode === 'move' && drag.occ && drag.blockTopPx !== undefined) {
      setGhost({ key: drag.occ.key, tx: dx, ty: dy, hDeltaPx: 0 });
      return;
    }

    if (drag.mode === 'resize' && drag.occ) {
      setGhost({ key: drag.occ.key, tx: 0, ty: 0, hDeltaPx: dy });
    }
  };

  const handleEnd = () => {
    const drag = dragRef.current;
    if (!drag) return;

    if (!drag.moved) {
      // 点击事件块 → 详情（rect 已就绪时直接触发，否则等待 rect 回调补发）
      if ((drag.mode === 'move' || drag.mode === 'resize') && drag.occ && drag.blockTopPx !== undefined) {
        dragRef.current = null;
        setScrollEnabled(true);
        onTapOccurrence(drag.occ);
      }
      return;
    }

    if (drag.mode === 'create' && selection) {
      const sel = selection;
      const dur = Math.max(30, sel.endMin - sel.startMin);
      onCreate(buildDT(dateKeys[sel.col], sel.startMin), buildDT(dateKeys[sel.col], sel.startMin + dur));
    } else if (drag.mode === 'move' && drag.occ && drag.blockHeightPx !== undefined && ghost) {
      const occ = drag.occ;
      const occStart = dayjs(occ.start, DT_FMT);
      const startMinOfDay = occStart.hour() * 60 + occStart.minute();
      const durationMin = dayjs(occ.end, DT_FMT).diff(occStart, 'minute');
      const targetCol = Math.min(
        dateKeys.length - 1,
        Math.max(0, drag.col + Math.round(ghost.tx / drag.colWidthPx))
      );
      const newMin = snap15(startMinOfDay + (ghost.ty / pxPerHour) * 60);
      const clamped = Math.min(Math.max(0, newMin), 24 * 60 - durationMin);
      const newStart = dayjs(`${dateKeys[targetCol]} 00:00`, DT_FMT)
        .add(clamped, 'minute')
        .format(DT_FMT);
      onMoveOccurrence(occ, newStart);
    } else if (drag.mode === 'resize' && drag.occ && ghost) {
      const occStart = dayjs(occ.start, DT_FMT);
      const startMinOfDay = occStart.hour() * 60 + occStart.minute();
      const durationMin = dayjs(occ.end, DT_FMT).diff(occStart, 'minute');
      const newDuration = Math.min(
        24 * 60 - startMinOfDay,
        Math.max(15, snap15(durationMin + ghost.hDeltaPx / pxPerHour * 60))
      );
      const newEnd = occStart.add(newDuration, 'minute').format(DT_FMT);
      onResizeOccurrence(occ, newEnd);
    }

    dragRef.current = null;
    setScrollEnabled(true);
    setSelection(null);
    setGhost(null);
  };

  const renderBlock = (occ: Occurrence, col: number, idx: number) => {
    const cat = CATEGORY_MAP[occ.event.categoryId];
    const startD = dayjs(occ.start, DT_FMT);
    const startMin = startD.hour() * 60 + startD.minute();
    const durationMin = Math.max(20, dayjs(occ.end, DT_FMT).diff(startD, 'minute'));
    const topRpx = (startMin / 60) * hourHeight;
    const heightRpx = (durationMin / 60) * hourHeight;
    const isGhost = ghost && ghost.key === occ.key;
    const finalHeightRpx = isGhost && ghost.hDeltaPx
      ? heightRpx + ghost.hDeltaPx / factor
      : heightRpx;
    const compact = finalHeightRpx < 46;
    return (
      <View
        key={occ.key}
        id={`tgB-${col}-${idx}`}
        className={classnames(styles.block, occ.done && styles.blockDone)}
        style={{
          top: toPx(topRpx, factor),
          height: toPx(finalHeightRpx, factor),
          background: cat.bg,
          borderLeft: `${toPx(8, factor)} solid ${occ.done ? '#c4cad6' : cat.color}`,
          transform: isGhost ? `translate(${ghost.tx}px, ${ghost.ty}px)` : 'none',
          zIndex: isGhost ? 20 : 10
        }}
        catchTouchStart={(e) => handleBlockStart(e, occ)}
        catchTouchMove={handleMove}
        catchTouchEnd={handleEnd}
      >
        <Text className={styles.blockTitle} style={{ color: occ.done ? '#8a93a6' : cat.color }}>
          {occ.done ? '✓ ' : ''}
          {occ.event.title}
        </Text>
        {!compact ? (
          <Text className={styles.blockTime}>{startD.format(TIME_FMT)}</Text>
        ) : null}
        <View className={styles.resizeHandle} />
      </View>
    );
  };

  return (
    <View className={styles.wrap}>
      {/* 全天事件条 + 日期表头 */}
      <View className={styles.dayHeader}>
        <View className={styles.gutterHead} />
        {dateKeys.map((key) => {
          const d = dayjs(key, DATE_FMT);
          const isToday = key === todayKey();
          return (
            <View key={key} className={styles.dayHead} style={{ width: toPx(colWidthRpx, factor) }}>
              <Text className={classnames(styles.weekday, isToday && styles.weekdayToday)}>
                周{WEEKDAY_NAMES[d.day()]}
              </Text>
              <View className={classnames(styles.dateBadge, isToday && styles.dateBadgeToday)}>
                <Text className={classnames(styles.dateText, isToday && styles.dateTextToday)}>
                  {d.date()}
                </Text>
              </View>
              <View className={styles.allDayBox}>
                {allDayByCol[dateKeys.indexOf(key)].map((occ) => {
                  const cat = CATEGORY_MAP[occ.event.categoryId];
                  return (
                    <View
                      key={occ.key}
                      className={styles.allDayChip}
                      style={{ background: cat.bg, borderLeft: `${toPx(6, factor)} solid ${cat.color}` }}
                      onClick={() => onTapOccurrence(occ)}
                    >
                      <Text className={styles.allDayText} style={{ color: cat.color }}>
                        {occ.event.title}
                      </Text>
                    </View>
                  );
                })}
              </View>
            </View>
          );
        })}
      </View>

      <ScrollView
        scrollY={scrollEnabled}
        className={styles.scroll}
        enhanced
        showScrollbar={false}
        scrollIntoView='tgAnchor'
        scrollTop={initialScrollTop}
      >
        <View className={styles.gridInner} id="tgGrid" style={{ height: toPx(totalHeightRpx, factor) }}>
          <View className={styles.gutter} style={{ width: toPx(GUTTER_RPX, factor) }}>
            {HOURS.map((h) => (
              <View key={h} className={styles.hourCell} style={{ height: toPx(hourHeight, factor) }}>
                <Text className={styles.hourText}>{pad2(h)}:00</Text>
                {h === 8 ? <View id="tgAnchor" className={styles.anchor} /> : null}
              </View>
            ))}
          </View>
          <View className={styles.columns}>
            {dateKeys.map((key, col) => {
              const isToday = key === todayKey();
              return (
                <View
                  key={key}
                  className={styles.column}
                  style={{ width: toPx(colWidthRpx, factor), height: toPx(totalHeightRpx, factor) }}
                  data-col={col}
                  onTouchStart={handleBgStart}
                  onTouchMove={handleMove}
                  onTouchEnd={handleEnd}
                >
                  {HOURS.map((h) => (
                    <View key={h} className={styles.hourLine} style={{ top: toPx(h * hourHeight, factor) }} />
                  ))}
                  {isToday ? (
                    <View
                      className={styles.nowLine}
                      style={{ top: toPx((nowMin / 60) * hourHeight, factor) }}
                    />
                  ) : null}
                  {selection && selection.col === col ? (
                    <View
                      className={styles.selection}
                      style={{
                        top: toPx((selection.startMin / 60) * hourHeight, factor),
                        height: toPx(((selection.endMin - selection.startMin) / 60) * hourHeight, factor)
                      }}
                    />
                  ) : null}
                  {timedByCol[col].map((occ, idx) => renderBlock(occ, col, idx))}
                </View>
              );
            })}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default TimeGridView;
