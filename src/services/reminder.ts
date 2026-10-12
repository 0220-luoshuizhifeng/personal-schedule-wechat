import Taro from '@tarojs/taro';
import dayjs from 'dayjs';
import { useScheduleStore } from '@/store/scheduleStore';
import { expandOccurrences } from '@/utils/datetime';
import { DATE_FMT, DT_FMT } from '@/utils/datetime';

// 微信订阅消息模板 ID：在小程序后台配置「任务提醒」模板后填入即可启用真实推送
// 为空时仅使用应用内提醒（小程序前后台轮询弹窗）
const SUBSCRIBE_TEMPLATE_IDS: string[] = [];

let timer: ReturnType<typeof setInterval> | null = null;
let showing = false;

function safeVibrate() {
  try {
    Taro.vibrateShort({ type: 'medium' });
  } catch (err) {
    console.warn('[Reminder] vibrate failed:', err);
  }
}

function showReminderModal(title: string, content: string, onConfirm?: () => void) {
  if (showing) return;
  showing = true;
  safeVibrate();
  Taro.showModal({
    title,
    content,
    showCancel: false,
    confirmText: '知道了',
    confirmColor: '#2563eb',
    success: (res) => {
      if (res.confirm && onConfirm) onConfirm();
    },
    complete: () => {
      showing = false;
    }
  });
}

/**
 * 检查到期提醒：
 * 1. 任务开始前按提醒时间弹窗
 * 2. 晚间定点检查今日任务是否全部完成
 * 每个提醒只弹一次（firedReminders 持久化）
 */
export function checkReminders(): void {
  try {
    const { events, settings, firedReminders, markFired } = useScheduleStore.getState();
    if (!settings.remindersEnabled && !settings.eveningCheck) return;

    const now = dayjs();
    const todayKey = now.format(DATE_FMT);
    const tomorrowKey = now.add(1, 'day').format(DATE_FMT);
    const newFired: string[] = [];

    if (settings.remindersEnabled) {
      for (const event of events) {
        const occs = expandOccurrences(event, todayKey, tomorrowKey);
        for (const occ of occs) {
          if (occ.done) continue;
          for (const mins of event.reminders) {
            const fireAt = dayjs(occ.start, DT_FMT).subtract(mins, 'minute');
            const diffMin = now.diff(fireAt, 'minute');
            const key = `rem_${occ.key}_${mins}`;
            // 到期 2 小时内仍未提醒则补发
            if (diffMin >= 0 && diffMin <= 120 && !firedReminders.includes(key)) {
              newFired.push(key);
              const leadText =
                mins >= 1440 ? '明天' : mins >= 60 ? `${mins / 60} 小时后` : `${mins} 分钟后`;
              showReminderModal(
                '任务提醒',
                `${leadText}开始：${event.title}${occ.event.allDay ? '（全天）' : `（${dayjs(occ.start, DT_FMT).format('HH:mm')}）`}`
              );
              break; // 每次检查最多弹一个，其余下次轮询补发
            }
          }
          if (newFired.length) break;
        }
        if (newFired.length) break;
      }
    }

    // 晚间完成情况确认
    if (settings.eveningCheck && !newFired.length) {
      const [hh, mm] = settings.eveningTime.split(':');
      const fireAt = now.hour(Number(hh)).minute(Number(mm)).second(0);
      const eveKey = `eve_${todayKey}`;
      const todayOccs = events.flatMap((e) => expandOccurrences(e, todayKey, todayKey));
      const undone = todayOccs.filter((o) => !o.done).length;
      if (
        !now.isBefore(fireAt) &&
        now.diff(fireAt, 'hour') < 3 &&
        !firedReminders.includes(eveKey)
      ) {
        newFired.push(eveKey);
        if (undone > 0) {
          showReminderModal('今天的任务完成了吗？', `还有 ${undone} 个任务未完成，加油！`, () => {
            Taro.switchTab({ url: '/pages/tasks/index' });
          });
        } else if (todayOccs.length > 0) {
          showReminderModal('今天的任务全部完成 🎉', '太棒了，明天也要继续保持！');
        }
      }
    }

    if (newFired.length) markFired(newFired);
  } catch (err) {
    console.error('[Reminder] check failed:', err);
  }
}

export function startReminderWatch(): void {
  if (timer) return;
  checkReminders();
  timer = setInterval(checkReminders, 30 * 1000);
  console.info('[Reminder] watch started');
}

export function stopReminderWatch(): void {
  if (timer) {
    clearInterval(timer);
    timer = null;
  }
}

// 请求微信订阅消息授权（仅微信端；需先在小程序后台配置模板 ID）
export function requestWxSubscribe(): void {
  if (process.env.TARO_ENV !== 'weapp') {
    Taro.showToast({ title: '应用内提醒已开启', icon: 'none' });
    return;
  }
  if (!SUBSCRIBE_TEMPLATE_IDS.length) {
    Taro.showModal({
      title: '订阅提醒',
      content: '应用内提醒已开启。如需微信通知栏推送，请在小程序后台配置订阅消息模板。',
      showCancel: false,
      confirmText: '知道了'
    });
    return;
  }
  Taro.requestSubscribeMessage({
    tmplIds: SUBSCRIBE_TEMPLATE_IDS,
    success: () => {
      Taro.showToast({ title: '订阅成功', icon: 'success' });
    },
    fail: (err) => {
      console.error('[Reminder] subscribe failed:', err);
      Taro.showToast({ title: '订阅未完成', icon: 'none' });
    }
  });
}
