import React, { useEffect } from 'react';
import { useDidShow } from '@tarojs/taro';
import { useScheduleStore } from '@/store/scheduleStore';
import { startReminderWatch, stopReminderWatch, checkReminders } from '@/services/reminder';
// 全局样式
import './app.scss';

interface AppProps {
  children?: React.ReactNode;
}

function App(props: AppProps) {
  useEffect(() => {
    // 首次启动写入示例任务
    useScheduleStore.getState().seedIfEmpty();
    // 启动应用内提醒轮询
    startReminderWatch();
    return () => {
      stopReminderWatch();
    };
  }, []);

  // 每次回到前台立即检查到期提醒
  useDidShow(() => {
    checkReminders();
  });

  return props.children;
}

export default App;
