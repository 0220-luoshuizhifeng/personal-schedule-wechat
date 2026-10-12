import dayjs from 'dayjs';
import type { ScheduleEvent } from '@/types/schedule';
import { genId } from '@/constants/categories';
import { DATE_FMT } from '@/utils/datetime';

function dt(offsetDays: number, hhmm: string): string {
  return dayjs().add(offsetDays, 'day').format(DATE_FMT) + ` ${hhmm}`;
}

function day(offsetDays: number): string {
  return dayjs().add(offsetDays, 'day').format(DATE_FMT);
}

// 首次启动时的示例任务，覆盖今天 / 明天与五个分类模块
export function buildSeedEvents(): ScheduleEvent[] {
  const now = Date.now();
  const today = dayjs().format(DATE_FMT);

  return [
    {
      id: genId(),
      title: '晨跑 3 公里',
      categoryId: 'sport',
      start: dt(0, '07:00'),
      end: dt(0, '07:40'),
      allDay: false,
      repeat: { type: 'daily', interval: 1 },
      location: '学校操场',
      remark: '运动前先热身 5 分钟',
      reminders: [30],
      participants: [],
      records: { [today]: 'done' },
      createdAt: now - 9000000,
    },
    {
      id: genId(),
      title: '阅读《人类简史》第三章',
      categoryId: 'knowledge',
      start: dt(0, '09:00'),
      end: dt(0, '10:00'),
      allDay: false,
      repeat: { type: 'none', interval: 1 },
      remark: '边读边做笔记，整理 3 个观点',
      reminders: [5],
      participants: [],
      records: {},
      createdAt: now - 8000000,
    },
    {
      id: genId(),
      title: '午餐：尝试番茄牛腩',
      categoryId: 'food',
      start: dt(0, '12:00'),
      end: dt(0, '13:00'),
      allDay: false,
      repeat: { type: 'none', interval: 1 },
      location: '第二食堂',
      remark: '少辣，搭配一份青菜',
      reminders: [30],
      participants: ['小王'],
      records: {},
      createdAt: now - 7000000,
    },
    {
      id: genId(),
      title: '小组项目周会',
      categoryId: 'work',
      start: dt(0, '15:00'),
      end: dt(0, '16:00'),
      allDay: false,
      repeat: { type: 'weekly', interval: 1 },
      location: 'https://meeting.tencent.com/example',
      remark: '汇报本周进度，确认下周分工',
      reminders: [60],
      participants: ['张同学', '李同学'],
      records: {},
      createdAt: now - 6000000,
    },
    {
      id: genId(),
      title: '高数复习：定积分',
      categoryId: 'knowledge',
      start: dt(1, '09:00'),
      end: dt(1, '10:30'),
      allDay: false,
      repeat: { type: 'none', interval: 1 },
      remark: '完成课本 P88 练习题',
      reminders: [30, 60],
      participants: [],
      records: {},
      createdAt: now - 5000000,
    },
    {
      id: genId(),
      title: '学做红烧肉',
      categoryId: 'food',
      start: dt(1, '12:30'),
      end: dt(1, '13:30'),
      allDay: false,
      repeat: { type: 'none', interval: 1 },
      location: '家里厨房',
      remark: '提前买好五花肉和冰糖',
      reminders: [60],
      participants: [],
      records: {},
      createdAt: now - 4000000,
    },
    {
      id: genId(),
      title: '羽毛球训练',
      categoryId: 'sport',
      start: dt(1, '19:00'),
      end: dt(1, '20:30'),
      allDay: false,
      repeat: { type: 'weekly', interval: 1 },
      location: '综合体育馆 2 号场',
      participants: ['室友'],
      reminders: [60],
      records: {},
      createdAt: now - 3000000,
    },
    {
      id: genId(),
      title: '给家里打电话',
      categoryId: 'personal',
      start: dt(1, '21:00'),
      end: dt(1, '21:20'),
      allDay: false,
      repeat: { type: 'none', interval: 1 },
      remark: '问问爸妈周末安排',
      reminders: [60],
      participants: [],
      records: {},
      createdAt: now - 2000000,
    },
    {
      id: genId(),
      title: '社团志愿活动',
      categoryId: 'personal',
      start: `${day(3)} 00:00`,
      end: `${day(3)} 23:59`,
      allDay: true,
      repeat: { type: 'none', interval: 1 },
      location: '市图书馆',
      remark: '全天活动，记得带水杯',
      reminders: [1440],
      participants: ['社团成员'],
      records: {},
      createdAt: now - 1000000,
    },
  ];
}
