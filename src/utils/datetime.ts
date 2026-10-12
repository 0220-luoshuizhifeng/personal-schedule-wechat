import dayjs, { Dayjs } from 'dayjs';
import type { Occurrence, RepeatRule, ScheduleEvent } from '@/types/schedule';

export const DATE_FMT = 'YYYY-MM-DD';
export const TIME_FMT = 'HH:mm';
export const DT_FMT = 'YYYY-MM-DD HH:mm';

export const WEEKDAY_NAMES = ['日', '一', '二', '三', '四', '五', '六'];
// 周一起始的表头
export const WEEK_HEADERS = ['一', '二', '三', '四', '五', '六', '日'];

export function todayKey(): string {
  return dayjs().format(DATE_FMT);
}

export function dateKeyOf(d: Dayjs | string | Date): string {
  return dayjs(d).format(DATE_FMT);
}

export function parseDT(s: string): Dayjs {
  return dayjs(s, DT_FMT);
}

export function formatDT(s: string, fmt: string = DT_FMT): string {
  return dayjs(s, DT_FMT).format(fmt);
}

// 周一为一周起点，返回该周 7 天的 dateKey
export function weekDates(anchor: Dayjs | string): string[] {
  const base = dayjs(anchor);
  const offset = (base.day() + 6) % 7;
  const monday = base.subtract(offset, 'day');
  return Array.from({ length: 7 }, (_, i) => monday.add(i, 'day').format(DATE_FMT));
}

export interface MonthCell {
  key: string;
  date: Dayjs;
  dayNum: number;
  inMonth: boolean;
  isToday: boolean;
  isWeekend: boolean;
}

// 生成月视图 42 个格子（周一起始，包含上下月置灰日期）
export function buildMonthCells(anchor: Dayjs | string): MonthCell[] {
  const base = dayjs(anchor);
  const firstOfMonth = base.date(1);
  const offset = (firstOfMonth.day() + 6) % 7;
  const gridStart = firstOfMonth.subtract(offset, 'day');
  const today = todayKey();
  return Array.from({ length: 42 }, (_, i) => {
    const d = gridStart.add(i, 'day');
    const key = d.format(DATE_FMT);
    return {
      key,
      date: d,
      dayNum: d.date(),
      inMonth: d.month() === base.month(),
      isToday: key === today,
      isWeekend: d.day() === 0 || d.day() === 6
    };
  });
}

function addByRule(cur: Dayjs, rule: RepeatRule): Dayjs {
  if (rule.type === 'daily') return cur.add(rule.interval, 'day');
  if (rule.type === 'weekly') return cur.add(rule.interval, 'week');
  return cur.add(rule.interval, 'month');
}

/**
 * 把一个日程在 [rangeStartKey, rangeEndKey] 内的所有发生实例展开。
 * 支持不重复 / 每天 / 每周 / 每月 + 间隔 + 结束日期 + 例外日期。
 */
export function expandOccurrences(
  event: ScheduleEvent,
  rangeStartKey: string,
  rangeEndKey: string
): Occurrence[] {
  const result: Occurrence[] = [];
  const rangeStart = dayjs(rangeStartKey, DATE_FMT).startOf('day');
  const rangeEnd = dayjs(rangeEndKey, DATE_FMT).endOf('day');

  const startDay = parseDT(event.start);
  const endDay = parseDT(event.end);
  const exclusions = event.exclusions || [];

  const pushIfInRange = (occStart: Dayjs, occEnd: Dayjs) => {
    if (occEnd.isBefore(rangeStart) || occStart.isAfter(rangeEnd)) return;
    const dk = occStart.format(DATE_FMT);
    if (exclusions.includes(dk)) return;
    result.push({
      key: `${event.id}@${dk}`,
      eventId: event.id,
      event,
      dateKey: dk,
      start: occStart.format(DT_FMT),
      end: occEnd.format(DT_FMT),
      done: event.records[dk] === 'done'
    });
  };

  if (event.repeat.type === 'none') {
    pushIfInRange(startDay, endDay);
    return result;
  }

  const repeatEnd = event.repeat.endDate ? dayjs(event.repeat.endDate, DATE_FMT).endOf('day') : null;
  let cur = startDay;
  let guard = 0;
  // 最多展开 700 个实例，防止异常数据死循环
  while (guard < 700) {
    const diffDays = cur.diff(startDay, 'day');
    const occEnd = endDay.add(diffDays, 'day');
    if (repeatEnd && cur.isAfter(repeatEnd)) break;
    if (cur.isAfter(rangeEnd)) break;
    pushIfInRange(cur, occEnd);
    cur = addByRule(cur, event.repeat);
    guard += 1;
  }
  return result;
}

// 展开多个事件
export function expandAll(
  events: ScheduleEvent[],
  rangeStartKey: string,
  rangeEndKey: string
): Occurrence[] {
  return events.reduce<Occurrence[]>((list, ev) => {
    list.push(...expandOccurrences(ev, rangeStartKey, rangeEndKey));
    return list;
  }, []);
}

export function repeatText(rule: RepeatRule): string {
  if (rule.type === 'none') return '';
  const unit = rule.type === 'daily' ? '天' : rule.type === 'weekly' ? '周' : '月';
  const base = rule.interval <= 1 ? `每${unit}` : `每 ${rule.interval} ${unit}`;
  return rule.endDate ? `${base}，至 ${rule.endDate} 结束` : base;
}

export function reminderText(minutes: number[]): string {
  if (!minutes.length) return '不提醒';
  return minutes
    .slice()
    .sort((a, b) => b - a)
    .map((m) => {
      if (m < 60) return `提前 ${m} 分钟`;
      if (m < 1440) return `提前 ${m / 60} 小时`;
      return `提前 ${m / 1440} 天`;
    })
    .join('、');
}

export function weekdayName(key: string): string {
  return WEEKDAY_NAMES[dayjs(key, DATE_FMT).day()];
}

export function isWeekend(key: string): boolean {
  const d = dayjs(key, DATE_FMT).day();
  return d === 0 || d === 6;
}

// 实例时间段展示
export function occurrenceTimeText(occ: Occurrence): string {
  if (occ.event.allDay) return '全天';
  return `${formatDT(occ.start, TIME_FMT)} - ${formatDT(occ.end, TIME_FMT)}`;
}

// 人性化日期：今天 / 明天 / 后天 / M月D日
export function friendlyDate(key: string): string {
  const d = dayjs(key, DATE_FMT);
  const today = dayjs().startOf('day');
  const diff = d.diff(today, 'day');
  const md = d.format('M月D日');
  if (diff === 0) return `今天 ${md}`;
  if (diff === 1) return `明天 ${md}`;
  if (diff === 2) return `后天 ${md}`;
  if (diff === -1) return `昨天 ${md}`;
  return `${md} 周${WEEKDAY_NAMES[d.day()]}`;
}
