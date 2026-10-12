// 日程 / 任务核心数据模型

export type CategoryId = 'knowledge' | 'food' | 'sport' | 'work' | 'personal';

// 重复类型：不重复 / 每天 / 每周 / 每月（自定义周期用 interval > 1 表达）
export type RepeatType = 'none' | 'daily' | 'weekly' | 'monthly';

export interface RepeatRule {
  type: RepeatType;
  // 重复间隔：1 = 每(天/周/月)，2 = 每 2(天/周/月) …
  interval: number;
  // 结束重复日期（YYYY-MM-DD），为空表示一直重复
  endDate?: string;
}

export type CompletionStatus = 'done';

export interface ScheduleEvent {
  id: string;
  // 1. 标题（必填）
  title: string;
  // 2. 分类模块
  categoryId: CategoryId;
  // 3. 开始 / 结束时间，格式 'YYYY-MM-DD HH:mm'；全天事件为 'YYYY-MM-DD 00:00' / 'YYYY-MM-DD 23:59'
  start: string;
  end: string;
  allDay: boolean;
  // 4. 重复规则
  repeat: RepeatRule;
  // 5. 地点（可选）
  location?: string;
  // 6. 描述备注
  remark?: string;
  // 7. 提醒：提前分钟数（5 / 30 / 60 / 1440）
  reminders: number[];
  // 8. 参与人
  participants: string[];
  // 完成记录：按重复实例的日期 key 隔离，YYYY-MM-DD -> done
  records: Record<string, CompletionStatus>;
  // 重复事件的例外日期（仅删除本次时记录）
  exclusions?: string[];
  createdAt: number;
}

// 重复规则展开后的某一次具体发生
export interface Occurrence {
  // 事件 id + 发生日期，唯一标识
  key: string;
  eventId: string;
  event: ScheduleEvent;
  // 发生日期 YYYY-MM-DD
  dateKey: string;
  start: string;
  end: string;
  done: boolean;
}

// 表单提交用的数据（去掉系统字段）
export interface EventFormData {
  title: string;
  categoryId: CategoryId;
  start: string;
  end: string;
  allDay: boolean;
  repeat: RepeatRule;
  location?: string;
  remark?: string;
  reminders: number[];
  participants: string[];
}

export interface ReminderSettings {
  // 任务开始前提醒
  remindersEnabled: boolean;
  // 晚间完成情况确认
  eveningCheck: boolean;
  // 晚间确认时间 HH:mm
  eveningTime: string;
}
