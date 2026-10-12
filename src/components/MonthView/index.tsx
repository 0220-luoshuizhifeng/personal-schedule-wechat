import React, { useRef } from 'react';
import { View, Text } from '@tarojs/components';
import classnames from 'classnames';
import type { Occurrence } from '@/types/schedule';
import { CATEGORY_MAP } from '@/constants/categories';
import { WEEK_HEADERS, type MonthCell } from '@/utils/datetime';
import styles from './index.module.scss';

interface MonthViewProps {
  cells: MonthCell[];
  selectedKey: string;
  occMap: Record<string, Occurrence[]>;
  onSelect: (key: string) => void;
  onQuickCreate: (key: string) => void;
}

const MonthView: React.FC<MonthViewProps> = ({
  cells,
  selectedKey,
  occMap,
  onSelect,
  onQuickCreate
}) => {
  const pressTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const longFired = useRef(false);

  const clearTimer = () => {
    if (pressTimer.current) {
      clearTimeout(pressTimer.current);
      pressTimer.current = null;
    }
  };

  const handleTouchStart = (key: string) => {
    longFired.current = false;
    clearTimer();
    pressTimer.current = setTimeout(() => {
      longFired.current = true;
      onQuickCreate(key);
    }, 450);
  };

  const handleTouchEnd = () => {
    clearTimer();
  };

  const handleTap = (key: string) => {
    if (longFired.current) {
      longFired.current = false;
      return;
    }
    onSelect(key);
  };

  return (
    <View className={styles.wrap}>
      <View className={styles.weekHeader}>
        {WEEK_HEADERS.map((w, i) => (
          <View key={w} className={styles.weekCell}>
            <Text className={classnames(styles.weekText, i >= 5 && styles.weekendText)}>{w}</Text>
          </View>
        ))}
      </View>
      <View className={styles.grid}>
        {cells.map((cell) => {
          const occs = occMap[cell.key] || [];
          const dotColors: string[] = [];
          occs.forEach((o) => {
            const c = CATEGORY_MAP[o.event.categoryId].color;
            if (!dotColors.includes(c)) dotColors.push(c);
          });
          return (
            <View
              key={cell.key}
              className={classnames(
                styles.cell,
                !cell.inMonth && styles.cellMuted,
                cell.key === selectedKey && styles.cellSelected,
                cell.isWeekend && cell.inMonth && styles.cellWeekend
              )}
              onClick={() => handleTap(cell.key)}
              onTouchStart={() => handleTouchStart(cell.key)}
              onTouchEnd={handleTouchEnd}
              onTouchMove={clearTimer}
              onTouchCancel={clearTimer}
            >
              <View className={styles.numRow}>
                <View
                  className={classnames(
                    styles.numBadge,
                    cell.isToday && styles.numBadgeToday
                  )}
                >
                  <Text
                    className={classnames(
                      styles.num,
                      cell.isToday && styles.numToday,
                      cell.isWeekend && cell.inMonth && !cell.isToday && styles.weekendNum
                    )}
                  >
                    {cell.dayNum}
                  </Text>
                </View>
                {occs.length > 0 ? (
                  <Text className={styles.count}>{occs.length > 99 ? '99+' : occs.length}</Text>
                ) : null}
              </View>
              <View className={styles.dotRow}>
                {dotColors.slice(0, 3).map((c, i) => (
                  <View key={`${c}-${i}`} className={styles.dot} style={{ background: c }} />
                ))}
                {dotColors.length > 3 ? <View className={styles.dotMore} /> : null}
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default MonthView;
