import React, { useMemo, useState } from 'react';
import { View, Text, ScrollView, Input } from '@tarojs/components';
import Taro from '@tarojs/taro';
import dayjs from 'dayjs';
import classnames from 'classnames';
import { useScheduleStore } from '@/store/scheduleStore';
import type { CategoryId, Occurrence } from '@/types/schedule';
import { CATEGORIES } from '@/constants/categories';
import {
  expandAll,
  todayKey,
  weekDates,
  DATE_FMT,
  DT_FMT,
  formatDT
} from '@/utils/datetime';
import EventLine, { DateGroupHeader } from '@/components/EventLine';
import SegmentedControl, { type SegmentOption } from '@/components/SegmentedControl';
import EmptyState from '@/components/EmptyState';
import styles from './index.module.scss';

type RangeKey = 'all' | 'today' | 'tomorrow' | 'week';

const RANGE_OPTIONS: SegmentOption<RangeKey>[] = [
  { value: 'all', label: '全部' },
  { value: 'today', label: '今天' },
  { value: 'tomorrow', label: '明天' },
  { value: 'week', label: '本周' }
];

const TasksPage: React.FC = () => {
  const events = useScheduleStore((s) => s.events);
  const toggleDone = useScheduleStore((s) => s.toggleDone);

  const [keyword, setKeyword] = useState('');
  const [range, setRange] = useState<RangeKey>('tomorrow');
  const [activeCats, setActiveCats] = useState<CategoryId[]>([]);
  const [loading, setLoading] = useState(true);

  React.useEffect(() => {
    const t = setTimeout(() => setLoading(false), 400);
    return () => clearTimeout(t);
  }, []);

  const tk = todayKey();
  const tomorrowKey = dayjs().add(1, 'day').format(DATE_FMT);

  // 明天聚焦
  const tomorrowOccs = useMemo(
    () =>
      expandAll(events, tomorrowKey, tomorrowKey).sort((a, b) => (a.start < b.start ? -1 : 1)),
    [events, tomorrowKey]
  );
  const tomorrowDone = tomorrowOccs.filter((o) => o.done).length;
  const tomorrowPct = tomorrowOccs.length
    ? Math.round((tomorrowDone / tomorrowOccs.length) * 100)
    : 0;

  // 筛选结果
  const rangeResult = useMemo(() => {
    let start = tk;
    let end = dayjs().add(60, 'day').format(DATE_FMT);
    if (range === 'today') end = tk;
    if (range === 'tomorrow') {
      start = tomorrowKey;
      end = tomorrowKey;
    }
    if (range === 'week') {
      const wk = weekDates(tk);
      start = wk[0];
      end = wk[6];
    }
    const kw = keyword.trim().toLowerCase();
    return expandAll(events, start, end)
      .filter((o) => activeCats.length === 0 || activeCats.includes(o.event.categoryId))
      .filter(
        (o) =>
          !kw ||
          o.event.title.toLowerCase().includes(kw) ||
          (o.event.remark || '').toLowerCase().includes(kw)
      )
      .sort((a, b) => (a.start < b.start ? -1 : 1));
  }, [events, range, keyword, activeCats, tk, tomorrowKey]);

  // 按日期分组
  const groups = useMemo(() => {
    const list: { key: string; occs: Occurrence[] }[] = [];
    rangeResult.forEach((occ) => {
      const g = list.find((x) => x.key === occ.dateKey);
      if (g) g.occs.push(occ);
      else list.push({ key: occ.dateKey, occs: [occ] });
    });
    return list;
  }, [rangeResult]);

  const isOverdue = (occ: Occurrence) =>
    !occ.done && dayjs(occ.end, DT_FMT).isBefore(dayjs());

  const toggleCat = (id: CategoryId) => {
    setActiveCats((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const goCreate = () => {
    const date = range === 'today' ? tk : range === 'all' || range === 'week' ? tk : tomorrowKey;
    Taro.navigateTo({ url: `/pages/event-edit/index?date=${encodeURIComponent(date)}` });
  };

  return (
    <View className={styles.page}>
      {/* 明天任务聚焦 */}
      <View className={styles.focusCard}>
        <View className={styles.focusTop}>
          <View>
            <Text className={styles.focusLabel}>明天要做的事 · {formatDT(`${tomorrowKey} 00:00`, 'M月D日')}</Text>
            <Text className={styles.focusDate}>
              {tomorrowOccs.length ? `${tomorrowDone}/${tomorrowOccs.length} 已完成` : '暂无安排'}
            </Text>
          </View>
          <Text className={styles.focusEmoji}>🌅</Text>
        </View>
        <View className={styles.progressRow}>
          <View className={styles.progressTrack}>
            <View className={styles.progressFill} style={{ width: `${tomorrowPct}%` }} />
          </View>
          <Text className={styles.progressText}>{tomorrowPct}%</Text>
        </View>
        <View className={styles.focusList}>
          {tomorrowOccs.length === 0 ? (
            <View className={styles.focusEmpty}>
              <Text>明天还没有任务，点击右下角 + 添加吧</Text>
            </View>
          ) : (
            tomorrowOccs.slice(0, 4).map((occ) => (
              <View key={occ.key} className={styles.focusItem}>
                <View
                  className={classnames(styles.focusCheck, occ.done && styles.focusCheckDone)}
                  onClick={() => toggleDone(occ.event.id, occ.dateKey)}
                >
                  {occ.done ? <Text className={styles.focusCheckIcon}>✓</Text> : null}
                </View>
                <Text
                  className={classnames(
                    styles.focusItemTitle,
                    occ.done && styles.focusItemTitleDone
                  )}
                >
                  {occ.event.title}
                </Text>
                <Text className={styles.focusItemTime}>
                  {occ.event.allDay ? '全天' : formatDT(occ.start, 'HH:mm')}
                </Text>
              </View>
            ))
          )}
        </View>
      </View>

      {/* 搜索 */}
      <View className={styles.searchBar}>
        <Text className={styles.searchIcon}>🔍</Text>
        <Input
          className={styles.searchInput}
          placeholder='搜索任务标题或备注'
          placeholderStyle='color:#8a93a6'
          value={keyword}
          onInput={(e) => setKeyword(e.detail.value)}
          confirmType='search'
        />
        {keyword ? (
          <View className={styles.clearBtn} onClick={() => setKeyword('')}>
            <Text className={styles.clearText}>✕</Text>
          </View>
        ) : null}
      </View>

      {/* 时间范围 */}
      <View className={styles.rangeSeg}>
        <SegmentedControl options={RANGE_OPTIONS} value={range} onChange={setRange} />
      </View>

      {/* 分类筛选 */}
      <ScrollView scrollX className={styles.filterScroll} enhanced showScrollbar={false}>
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

      {loading ? (
        <View className={styles.loading}>
          <Text>⏳</Text>
          <Text className={styles.loadingText}>任务加载中…</Text>
        </View>
      ) : groups.length === 0 ? (
        <EmptyState
          emoji='🗒️'
          title={keyword ? '没有找到相关任务' : '这个时间段还没有任务'}
          subtitle={keyword ? '换个关键词试试' : '点击右下角 + 安排一个新任务'}
        />
      ) : (
        <View>
          <Text className={styles.resultMeta}>共 {rangeResult.length} 项任务</Text>
          {groups.map((g) => (
            <View key={g.key}>
              <DateGroupHeader dateKey={g.key} extra={`${g.occs.length} 项`} />
              {g.occs.map((occ) => (
                <EventLine
                  key={occ.key}
                  occ={occ}
                  overdue={isOverdue(occ)}
                  onToggle={() => toggleDone(occ.event.id, occ.dateKey)}
                  onTap={() =>
                    Taro.navigateTo({
                      url: `/pages/event-edit/index?id=${occ.event.id}&key=${encodeURIComponent(occ.dateKey)}&view=1`
                    })
                  }
                />
              ))}
            </View>
          ))}
        </View>
      )}

      <View className={styles.fab} onClick={goCreate}>
        <Text className={styles.fabText}>+</Text>
      </View>
    </View>
  );
};

export default TasksPage;
