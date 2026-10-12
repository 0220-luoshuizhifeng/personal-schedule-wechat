import React, { useMemo } from 'react';
import { View, Text, Switch } from '@tarojs/components';
import Taro from '@tarojs/taro';
import dayjs from 'dayjs';
import { useScheduleStore } from '@/store/scheduleStore';
import { CATEGORIES } from '@/constants/categories';
import { expandAll, todayKey, DATE_FMT } from '@/utils/datetime';
import { requestWxSubscribe } from '@/services/reminder';
import styles from './index.module.scss';

const MinePage: React.FC = () => {
  const events = useScheduleStore((s) => s.events);
  const settings = useScheduleStore((s) => s.settings);
  const setSettings = useScheduleStore((s) => s.setSettings);
  const resetAll = useScheduleStore((s) => s.resetAll);

  const tk = todayKey();
  const tomorrowK = dayjs().add(1, 'day').format(DATE_FMT);
  const monthEnd = dayjs().add(30, 'day').format(DATE_FMT);

  const todayOccs = useMemo(() => expandAll(events, tk, tk), [events, tk]);
  const todayDone = todayOccs.filter((o) => o.done).length;
  const todayPct = todayOccs.length ? Math.round((todayDone / todayOccs.length) * 100) : 0;
  const tomorrowPending = useMemo(
    () => expandAll(events, tomorrowK, tomorrowK).filter((o) => !o.done).length,
    [events, tomorrowK]
  );

  // 连续完成天数：从今天往前，每天有任务且全部完成
  const streak = useMemo(() => {
    let count = 0;
    for (let i = 0; i < 60; i += 1) {
      const key = dayjs().subtract(i, 'day').format(DATE_FMT);
      const occs = expandAll(events, key, key);
      if (occs.length === 0) break;
      if (occs.every((o) => o.done)) count += 1;
      else break;
    }
    return count;
  }, [events]);

  const moduleCounts = useMemo(() => {
    const all = expandAll(events, tk, monthEnd);
    return CATEGORIES.map((c) => ({
      ...c,
      count: all.filter((o) => o.event.categoryId === c.id).length
    }));
  }, [events, tk, monthEnd]);

  const handleReset = () => {
    Taro.showModal({
      title: '重置数据',
      content: '将清空全部日程并恢复为示例任务，确定继续吗？',
      confirmText: '重置',
      confirmColor: '#dc2626',
      cancelText: '取消',
      success: (res) => {
        if (res.confirm) {
          resetAll();
          Taro.showToast({ title: '已重置', icon: 'success' });
        }
      }
    });
  };

  return (
    <View className={styles.page}>
      <View className={styles.profileCard}>
        <View className={styles.avatar}>📋</View>
        <View>
          <Text className={styles.profileName}>明日任务</Text>
          <Text className={styles.profileSub}>规划明天，把握每一天</Text>
        </View>
      </View>

      <View
        className={styles.posterEntry}
        onClick={() => Taro.navigateTo({ url: '/pages/weekly-poster/index' })}
      >
        <View className={styles.posterEntryLeft}>
          <Text className={styles.posterEntryTitle}>周度海报</Text>
          <Text className={styles.posterEntrySub}>上滑解锁你的本周画像 · 一键生成分享海报</Text>
        </View>
        <Text className={styles.posterEntryEmoji}>🎬</Text>
      </View>

      <View className={styles.statsCard}>
        <Text className={styles.cardTitle}>任务概览</Text>
        <View className={styles.statGrid}>
          <View className={styles.statItem}>
            <Text className={styles.statNum}>{todayOccs.length}</Text>
            <Text className={styles.statLabel}>今日任务</Text>
          </View>
          <View className={styles.statDivider} />
          <View className={styles.statItem}>
            <Text className={`${styles.statNum} ${styles.statNumGreen}`}>{todayDone}</Text>
            <Text className={styles.statLabel}>已完成</Text>
          </View>
          <View className={styles.statDivider} />
          <View className={styles.statItem}>
            <Text className={`${styles.statNum} ${styles.statNumRed}`}>{tomorrowPending}</Text>
            <Text className={styles.statLabel}>明日待办</Text>
          </View>
          <View className={styles.statDivider} />
          <View className={styles.statItem}>
            <Text className={styles.statNum}>{streak}</Text>
            <Text className={styles.statLabel}>连续完成(天)</Text>
          </View>
        </View>
        <View className={styles.progressBlock}>
          <View className={styles.progressLabelRow}>
            <Text className={styles.progressLabel}>今日完成进度</Text>
            <Text className={styles.progressLabel}>{todayPct}%</Text>
          </View>
          <View className={styles.progressTrack}>
            <View className={styles.progressFill} style={{ width: `${todayPct}%` }} />
          </View>
        </View>
      </View>

      <View className={styles.moduleCard}>
        <Text className={styles.cardTitle}>任务模块（未来 30 天）</Text>
        {moduleCounts.map((m) => (
          <View key={m.id} className={styles.moduleRow}>
            <Text className={styles.moduleEmoji}>{m.emoji}</Text>
            <View className={styles.moduleDot} style={{ background: m.color }} />
            <Text className={styles.moduleName}>{m.name}</Text>
            <Text className={styles.moduleCount}>{m.count} 项</Text>
          </View>
        ))}
      </View>

      <View className={styles.settingCard}>
        <View className={styles.settingRow}>
          <View className={styles.settingTexts}>
            <Text className={styles.settingLabel}>任务提醒</Text>
            <Text className={styles.settingSub}>到达提醒时间时，在应用内弹窗通知</Text>
          </View>
          <Switch
            checked={settings.remindersEnabled}
            color='#16a34a'
            onChange={(e) => setSettings({ remindersEnabled: e.detail.value })}
          />
        </View>
        <View className={styles.settingRow}>
          <View className={styles.settingTexts}>
            <Text className={styles.settingLabel}>晚间完成确认</Text>
            <Text className={styles.settingSub}>每天 20:00 提醒检查今日任务是否完成</Text>
          </View>
          <Switch
            checked={settings.eveningCheck}
            color='#16a34a'
            onChange={(e) => setSettings({ eveningCheck: e.detail.value })}
          />
        </View>
        <View className={styles.settingRow} onClick={requestWxSubscribe}>
          <View className={styles.settingTexts}>
            <Text className={styles.settingLabel}>微信通知推送</Text>
            <Text className={styles.settingSub}>授权后可通过微信订阅消息接收提醒</Text>
          </View>
          <View className={styles.settingAction}>
            <Text className={styles.settingActionText}>去订阅</Text>
          </View>
          <Text className={styles.settingArrow}>›</Text>
        </View>
        <View
          className={styles.settingRow}
          onClick={() => Taro.navigateTo({ url: '/pages/about/index' })}
        >
          <View className={styles.settingTexts}>
            <Text className={styles.settingLabel}>关于明日任务</Text>
            <Text className={styles.settingSub}>版本与说明</Text>
          </View>
          <Text className={styles.settingArrow}>›</Text>
        </View>
        <View className={styles.settingRow} onClick={handleReset}>
          <View className={styles.settingTexts}>
            <Text className={styles.settingLabel}>重置全部数据</Text>
            <Text className={styles.settingSub}>清空日程并恢复示例任务</Text>
          </View>
          <Text className={styles.settingArrow}>›</Text>
        </View>
      </View>

      <View className={styles.tipCard}>
        <Text className={styles.tipText}>
          提示：微信订阅消息需在小程序后台配置「任务提醒」模板后才能下发到通知栏；未配置时，打开小程序期间会通过应用内弹窗提醒你完成任务。
        </Text>
      </View>
    </View>
  );
};

export default MinePage;
