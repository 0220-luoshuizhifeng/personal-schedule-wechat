import React, { useEffect, useMemo, useState } from 'react';
import { View, Text, ScrollView } from '@tarojs/components';
import classnames from 'classnames';
import styles from './index.module.scss';

interface YearMonthPickerProps {
  visible: boolean;
  year: number;
  month: number; // 0-11
  onClose: () => void;
  onSelect: (year: number, month: number) => void;
}

const YearMonthPicker: React.FC<YearMonthPickerProps> = ({
  visible,
  year,
  month,
  onClose,
  onSelect
}) => {
  const nowYear = new Date().getFullYear();
  const years = useMemo(
    () => Array.from({ length: 11 }, (_, i) => nowYear - 5 + i),
    [nowYear]
  );
  const [innerYear, setInnerYear] = useState(year);
  const [innerMonth, setInnerMonth] = useState(month);

  useEffect(() => {
    if (visible) {
      setInnerYear(year);
      setInnerMonth(month);
    }
  }, [visible, year, month]);

  if (!visible) return null;

  return (
    <View className={styles.mask} onClick={onClose}>
      <View className={styles.sheet} onClick={(e) => e.stopPropagation()}>
        <View className={styles.header}>
          <Text className={styles.title}>选择年月</Text>
          <Text className={styles.close} onClick={onClose}>
            ✕
          </Text>
        </View>
        <View className={styles.body}>
          <ScrollView scrollY className={styles.yearCol} scrollIntoView={`y-${innerYear}`}>
            {years.map((y) => (
              <View
                key={y}
                id={`y-${y}`}
                className={classnames(styles.yearItem, innerYear === y && styles.yearItemActive)}
                onClick={() => setInnerYear(y)}
              >
                <Text>{y} 年</Text>
              </View>
            ))}
          </ScrollView>
          <View className={styles.monthGrid}>
            {Array.from({ length: 12 }, (_, i) => i).map((m) => (
              <View
                key={m}
                className={classnames(
                  styles.monthItem,
                  innerYear === year && m === month && styles.monthItemCurrent,
                  innerMonth === m && styles.monthItemActive
                )}
                onClick={() => setInnerMonth(m)}
              >
                <Text>{m + 1} 月</Text>
              </View>
            ))}
          </View>
        </View>
        <View
          className={styles.confirm}
          onClick={() => {
            onSelect(innerYear, innerMonth);
          }}
        >
          <Text className={styles.confirmText}>确定</Text>
        </View>
      </View>
    </View>
  );
}

export default YearMonthPicker;
