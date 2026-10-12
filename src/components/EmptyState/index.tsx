import React from 'react';
import { View, Text } from '@tarojs/components';
import styles from './index.module.scss';

interface EmptyStateProps {
  emoji?: string;
  title: string;
  subtitle?: string;
}

const EmptyState: React.FC<EmptyStateProps> = ({ emoji = '🌤️', title, subtitle }) => {
  return (
    <View className={styles.wrap}>
      <Text className={styles.emoji}>{emoji}</Text>
      <Text className={styles.title}>{title}</Text>
      {subtitle ? <Text className={styles.subtitle}>{subtitle}</Text> : null}
    </View>
  );
};

export default EmptyState;
