import React from 'react';
import { View, Text } from '@tarojs/components';
import classnames from 'classnames';
import styles from './index.module.scss';

export interface SegmentOption<T extends string> {
  value: T;
  label: string;
}

interface SegmentedControlProps<T extends string> {
  options: SegmentOption<T>[];
  value: T;
  onChange: (value: T) => void;
}

function SegmentedControl<T extends string>(props: SegmentedControlProps<T>) {
  const { options, value, onChange } = props;
  return (
    <View className={styles.wrap}>
      {options.map((opt) => (
        <View
          key={opt.value}
          className={classnames(styles.item, value === opt.value && styles.itemActive)}
          onClick={() => onChange(opt.value)}
        >
          <Text className={classnames(styles.label, value === opt.value && styles.labelActive)}>
            {opt.label}
          </Text>
        </View>
      ))}
    </View>
  );
}

export default SegmentedControl;
