import React from 'react';
import { View, Text } from '@tarojs/components';
import classnames from 'classnames';
import type { Occurrence } from '@/types/schedule';
import { CATEGORY_MAP } from '@/constants/categories';
import { friendlyDate, occurrenceTimeText } from '@/utils/datetime';
import styles from './index.module.scss';

interface EventLineProps {
  occ: Occurrence;
  onTap?: () => void;
  onToggle?: () => void;
  showDate?: boolean;
  overdue?: boolean;
}

const EventLine: React.FC<EventLineProps> = ({ occ, onTap, onToggle, showDate, overdue }) => {
  const cat = CATEGORY_MAP[occ.event.categoryId];
  const { event } = occ;
  return (
    <View
      className={classnames(styles.row, occ.done && styles.rowDone)}
      onClick={onTap}
    >
      <View
        className={styles.bar}
        style={{ background: occ.done ? '#c4cad6' : cat.color }}
      />
      {onToggle ? (
        <View
          className={classnames(styles.check, occ.done && styles.checkDone)}
          onClick={(e) => {
            e.stopPropagation();
            onToggle();
          }}
        >
          {occ.done ? <Text className={styles.checkIcon}>✓</Text> : null}
        </View>
      ) : null}
      <View className={styles.main}>
        <Text className={classnames(styles.title, occ.done && styles.titleDone)}>
          {event.title}
        </Text>
        <View className={styles.metaRow}>
          <Text
            className={classnames(
              styles.time,
              overdue && !occ.done && styles.timeOverdue
            )}
          >
            {showDate ? `${friendlyDate(occ.dateKey)} ` : ''}
            {occurrenceTimeText(occ)}
          </Text>
          <View className={styles.tag} style={{ background: cat.bg }}>
            <Text className={styles.tagText} style={{ color: occ.done ? '#8a93a6' : cat.color }}>
              {cat.emoji} {cat.name}
            </Text>
          </View>
        </View>
        {event.location ? (
          <Text className={styles.location}>📍 {event.location}</Text>
        ) : null}
      </View>
      <Text className={styles.arrow}>›</Text>
    </View>
  );
};

// 供列表页展示日期分组头
export const DateGroupHeader: React.FC<{ dateKey: string; extra?: string }> = ({ dateKey, extra }) => (
  <View className={styles.groupHeader}>
    <Text className={styles.groupHeaderText}>{friendlyDate(dateKey)}</Text>
    {extra ? <Text className={styles.groupHeaderWeek}>{extra}</Text> : null}
  </View>
);

export default EventLine;
