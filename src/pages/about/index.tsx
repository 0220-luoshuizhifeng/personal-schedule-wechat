import React from 'react';
import { View, Text } from '@tarojs/components';
import styles from './index.module.scss';

const AboutPage: React.FC = () => {
  return (
    <View className={styles.page}>
      <View className={styles.logo}>
        <Text>📋</Text>
      </View>
      <Text className={styles.name}>明日任务</Text>
      <Text className={styles.version}>版本 1.0.0</Text>
      <Text className={styles.desc}>
        记录明天的任务，按知识、美食、运动等模块分类管理，到点提醒你完成每一件事。
      </Text>
      <View className={styles.placeholder}>
        <Text className={styles.placeholderEmoji}>🚧</Text>
        <Text className={styles.placeholderText}>更多功能正在开发中…</Text>
      </View>
    </View>
  );
};

export default AboutPage;
