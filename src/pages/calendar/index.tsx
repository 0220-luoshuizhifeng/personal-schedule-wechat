import React, { useMemo, useState } from 'react';
import { View, Text, ScrollView } from '@tarojs/components';
import Taro from '@tarojs/taro';
import dayjs from 'dayjs';
import classnames from 'classnames';
import { useScheduleStore } from '@/store/scheduleStore';
import type { CategoryId, EventFormData, Occurrence } from '@/types/schedule';
import { CATEGORIES } from '@/constants/categories';
import {
  buildMonthCells,
  expandAll,
  expandOccurrences,
  friendlyDate,
  todayKey,
  weekDates,
  DATE_FMT,
  DT_FMT
} from '@/utils/datetime';
import MonthView from '@/components/MonthView';
import TimeGridView from '@/components/TimeGridView';
import EventLine from '@/components/EventLine';
import EventDetailModal from '@/components/EventDetailModal';
import SegmentedControl, { type SegmentOption } from '@/components/SegmentedControl';
import YearMonthPicker from '@/components/YearMonthPicker';
import EmptyState from '@/components/EmptyState';
import styles from './index.module.scss';

type CalendarView = 'month' | 'week' | 'day' | 'list';

const VIEW_OPTIONS: SegmentOption<CalendarView>[] = [
  { value: 'month', label: '月' },
  { value: 'week', label: '周' },
  { value: 'day', label: '日' },
  { value: 'list', label: '列表' }
];

const CalendarPage: React.FC = () => {
  const events = useScheduleStore((s) => s.events);
  const updateEvent = useScheduleStore((s) => s.updateEvent);
  const deleteEvent = useScheduleStore((s) => s.deleteEvent);
  const toggleDone = useScheduleStore((s) => s.toggleDone);

  const [view, setView] = useState<CalendarView>('month');
  const [selectedKey, setSelectedKey] = useState<string>(todayKey());
  const [activeCats, setActiveCats] = useState<CategoryId[]>([]);
  const [pickerVisible, setPickerVisible] = useState(false);
  const [detailKey, setDetailKey] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  React.useEffect(() => {
    const t = setTimeout(() => setLoading(false), 400);
    return () => clearTimeout(t);
  }, []);

  const catFilter = (occ: Occurrence) =>
    activeCats.length === 0 || activeCats.includes(occ.event.categoryId);

  const selectedDay = dayjs(selectedKey, DATE_FMT);

  // 月视图格子与当日日程映射
  const monthCells = useMemo(() => buildMonthCells(selectedKey), [selectedKey]);
  const monthOccMap = useMemo(() => {
    const start = monthCells[0].key;
    const end = monthCells[monthCells.length - 1].key;
    const map: Record<string, Occurrence[]> = {};
    expandAll(events, start, end)
      .filter(catFilter)
      .forEach((occ) => {
        (map[occ.dateKey] ||= []).push(occ);
      });
    return map;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [events, monthCells, activeCats]);

  const selectedOccs = useMemo(
    () =>
      expandAll(events, selectedKey, selectedKey)
        .filter(catFilter)
        .sort((a, b) => (a.start < b.start ? -1 : 1)),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [events, selectedKey, activeCats]
  );

  const weekKeys = useMemo(() => weekDates(selectedKey), [selectedKey]);
  const gridKeys = view === 'day' ? [selectedKey] : weekKeys;
  const gridRange = useMemo(
    () => ({ start: gridKeys[0], end: gridKeys[gridKeys.length - 1] }),
    [gridKeys]
  );
  const gridOccs = useMemo(
    () => expandAll(events, gridRange.start, gridRange.end).filter(catFilter),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [events, gridRange, activeCats]
  );

  // 列表视图：未来 60 天分组
  const listGroups = useMemo(() => {
    const end = dayjs().add(60, 'day').format(DATE_FMT);
    const all = expandAll(events, todayKey(), end)
      .filter(catFilter)
      .sort((a, b) => (a.start < b.start ? -1 : 1));
    const groups: { key: string; occs: Occurrence[] }[] = [];
    all.forEach((occ) => {
      const g = groups.find((x) => x.key === occ.dateKey);
      if (g) g.occs.push(occ);
      else groups.push({ key: occ.dateKey, occs: [occ] });
    });
    return groups;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [events, activeCats]);

  // 详情弹窗实例（随 store 更新保持最新）
  const detailOcc = useMemo<Occurrence | null>(() => {
    if (!detailKey) return null;
    const at = detailKey.indexOf('@');
    const eventId = detailKey.slice(0, at);
    const dk = detailKey.slice(at + 1);
    const ev = events.find((e) => e.id === eventId);
    if (!ev) return null;
    return expandOccurrences(ev, dk, dk).find((o) => o.key === detailKey) || null;
  }, [detailKey, events]);

  // 标题
  const headerTitle = useMemo(() => {
    if (view === 'month') return `${selectedDay.year()}年${selectedDay.month() + 1}月`;
    if (view === 'week') {
      const s = dayjs(weekKeys[0], DATE_FMT);
      const e = dayjs(weekKeys[6], DATE_FMT);
      return `${s.month() + 1}月${s.date()}日 - ${e.month() + 1}月${e.date()}日`;
    }
    if (view === 'day') return friendlyDate(selectedKey);
    return '日程列表';
  }, [view, selectedDay, selectedKey, weekKeys]);

  const shift = (delta: number) => {
    const unit = view === 'month' || view === 'list' ? 'month' : view === 'week' ? 'week' : 'day';
    setSelectedKey(selectedDay.add(delta, unit).format(DATE_FMT));
  };

  const goEdit = (params: string) => {
    Taro.navigateTo({ url: `/pages/event-edit/index?${params}` });
  };

  const quickCreate = (key: string) => {
    Taro.vibrateShort && Taro.vibrateShort({ type: 'light' });
    goEdit(`date=${encodeURIComponent(key)}`);
  };

  // 拖拽移动 / 缩放：重复日程按「仅本次」落地
  const toFormData = (occ: Occurrence, start: string, end: string): EventFormData => ({
    title: occ.event.title,
    categoryId: occ.event.categoryId,
    start,
    end,
    allDay: false,
    repeat: { type: 'none', interval: 1 },
    location: occ.event.location,
    remark: occ.event.remark,
    reminders: occ.event.reminders,
    participants: occ.event.participants
  });

  const handleMove = (occ: Occurrence, newStart: string) => {
    const duration = dayjs(occ.end, DT_FMT).diff(dayjs(occ.start, DT_FMT), 'minute');
    const newEnd = dayjs(newStart, DT_FMT).add(duration, 'minute').format(DT_FMT);
    const isRepeat = occ.event.repeat.type !== 'none';
    updateEvent(occ.event.id, toFormData(occ, newStart, newEnd), isRepeat ? 'this' : 'all', occ.dateKey);
    Taro.showToast({ title: '已调整时间', icon: 'none', duration: 800 });
  };

  const handleResize = (occ: Occurrence, newEnd: string) => {
    const isRepeat = occ.event.repeat.type !== 'none';
    updateEvent(occ.event.id, toFormData(occ, occ.start, newEnd), isRepeat ? 'this' : 'all', occ.dateKey);
  };

  const handleDelete = (occ: Occurrence) => {
    const isRepeat = occ.event.repeat.type !== 'none';
    if (isRepeat) {
      Taro.showActionSheet({
        itemList: ['仅删除本次', '删除全部重复事件'],
        success: (res) => {
          deleteEvent(occ.event.id, res.tapIndex === 0 ? 'this' : 'all', occ.dateKey);
          setDetailKey(null);
          Taro.showToast({ title: '已删除', icon: 'none' });
        },
        fail: (err) => console.error('[Calendar] action sheet failed:', err)
      });
      return;
    }
    Taro.showModal({
      title: '删除日程',
      content: `确定删除「${occ.event.title}」吗？删除后不可恢复。`,
      confirmText: '删除',
      confirmColor: '#dc2626',
      cancelText: '取消',
      success: (res) => {
        if (res.confirm) {
          deleteEvent(occ.event.id, 'all');
          setDetailKey(null);
          Taro.showToast({ title: '已删除', icon: 'none' });
        }
      }
    });
  };

  const toggleCat = (id: CategoryId) => {
    setActiveCats((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  return (
    <View className={styles.page}>
      <View className={styles.header}>
        <View className={styles.navRow}>
          <View className={styles.navSide}>
            <View className={styles.navBtn} onClick={() => shift(-1)}>
              <Text className={styles.navArrow}>‹</Text>
            </View>
          </View>
          <View className={styles.titleBtn} onClick={() => setPickerVisible(true)}>
            <Text className={styles.titleText}>{headerTitle}</Text>
            <Text className={styles.caret}>▾</Text>
          </View>
          <View className={classnames(styles.navSide, styles.navSideRight)}>
            <View className={styles.todayBtn} onClick={() => setSelectedKey(todayKey())}>
              <Text className={styles.todayText}>今天</Text>
            </View>
            <View className={styles.navBtn} onClick={() => shift(1)}>
              <Text className={styles.navArrow}>›</Text>
            </View>
          </View>
        </View>
        <View className={styles.segmented}>
          <SegmentedControl options={VIEW_OPTIONS} value={view} onChange={setView} />
        </View>
        <ScrollView scrollX className={styles.filterScroll} enhanced showScrollbar={false}>
          <View
            className={classnames(styles.filterChip, activeCats.length === 0 && styles.filterChipActive)}
            onClick={() => setActiveCats([])}
          >
            <Text
              className={classnames(
                styles.filterChipText,
                activeCats.length === 0 && styles.filterChipTextActive
              )}
            >
              全部
            </Text>
          </View>
          {CATEGORIES.map((c) => {
            const active = activeCats.includes(c.id);
            return (
              <View
                key={c.id}
                className={classnames(styles.filterChip, active && styles.filterChipActive)}
                onClick={() => toggleCat(c.id)}
              >
                <Text
                  className={classnames(
                    styles.filterChipText,
                    active && styles.filterChipTextActive
                  )}
                >
                  {c.emoji} {c.name}
                </Text>
              </View>
            );
          })}
        </ScrollView>
      </View>

      {loading ? (
        <View className={styles.loading}>
          <Text className={styles.loadingSpinner}>⏳</Text>
          <Text className={styles.loadingText}>日程加载中…</Text>
        </View>
      ) : (
        <View className={styles.content}>
          {view === 'month' ? (
            <ScrollView scrollY className={styles.monthScroll} enhanced showScrollbar={false}>
              <MonthView
                cells={monthCells}
                selectedKey={selectedKey}
                occMap={monthOccMap}
                onSelect={setSelectedKey}
                onQuickCreate={quickCreate}
              />
              <View className={styles.dayPanel}>
                <View className={styles.dayPanelHeader}>
                  <View>
                    <Text className={styles.dayPanelTitle}>{friendlyDate(selectedKey)}</Text>
                    <Text className={styles.dayPanelCount}>
                      {' '}
                      {selectedOccs.length} 项安排
                    </Text>
                  </View>
                  <View
                    className={styles.addMiniBtn}
                    onClick={() => goEdit(`date=${encodeURIComponent(selectedKey)}`)}
                  >
                    <Text className={styles.addMiniText}>+</Text>
                  </View>
                </View>
                {selectedOccs.length === 0 ? (
                  <EmptyState
                    emoji='🌤️'
                    title='这天还没有安排'
                    subtitle='点击右上角 + 或长按日历格子，快速添加任务'
                  />
                ) : (
                  selectedOccs.map((occ) => (
                    <EventLine
                      key={occ.key}
                      occ={occ}
                      onToggle={() => toggleDone(occ.event.id, occ.dateKey)}
                      onTap={() => setDetailKey(occ.key)}
                    />
                  ))
                )}
              </View>
            </ScrollView>
          ) : null}

          {view === 'week' || view === 'day' ? (
            <TimeGridView
              key={view + gridRange.start}
              dateKeys={gridKeys}
              occurrences={gridOccs}
              hourHeight={view === 'week' ? 96 : 116}
              onCreate={(start, end) =>
                goEdit(`start=${encodeURIComponent(start)}&end=${encodeURIComponent(end)}`)
              }
              onTapOccurrence={(occ) => setDetailKey(occ.key)}
              onMoveOccurrence={handleMove}
              onResizeOccurrence={handleResize}
            />
          ) : null}

          {view === 'list' ? (
            <ScrollView scrollY className={styles.monthScroll} enhanced showScrollbar={false}>
              {listGroups.length === 0 ? (
                <EmptyState emoji='🗂️' title='没有符合条件的日程' subtitle='试试切换分类筛选，或新建一个任务' />
              ) : (
                listGroups.map((g) => (
                  <View key={g.key}>
                    <View className={styles.groupHeader}>
                      <Text className={styles.groupHeaderText}>{friendlyDate(g.key)}</Text>
                      <Text className={styles.groupHeaderCount}>{g.occs.length} 项</Text>
                    </View>
                    {g.occs.map((occ) => (
                      <EventLine
                        key={occ.key}
                        occ={occ}
                        showDate={false}
                        onToggle={() => toggleDone(occ.event.id, occ.dateKey)}
                        onTap={() => setDetailKey(occ.key)}
                      />
                    ))}
                  </View>
                ))
              )}
            </ScrollView>
          ) : null}
        </View>
      )}

      <View
        className={styles.fab}
        onClick={() =>
          goEdit(`date=${encodeURIComponent(view === 'list' ? todayKey() : selectedKey)}`)
        }
      >
        <Text className={styles.fabText}>+</Text>
      </View>

      <EventDetailModal
        occ={detailOcc}
        onClose={() => setDetailKey(null)}
        onEdit={(occ) => {
          setDetailKey(null);
          goEdit(`id=${occ.event.id}&key=${encodeURIComponent(occ.dateKey)}`);
        }}
        onDelete={handleDelete}
        onToggleDone={(occ) => toggleDone(occ.event.id, occ.dateKey)}
      />

      <YearMonthPicker
        visible={pickerVisible}
        year={selectedDay.year()}
        month={selectedDay.month()}
        onClose={() => setPickerVisible(false)}
        onSelect={(y, m) => {
          const day = Math.min(selectedDay.date(), dayjs().year(y).month(m).date(1).daysInMonth());
          setSelectedKey(dayjs().year(y).month(m).date(day).format(DATE_FMT));
          setPickerVisible(false);
        }}
      />
    </View>
  );
};

export default CalendarPage;
