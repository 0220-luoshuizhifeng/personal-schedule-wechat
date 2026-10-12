import type { CategoryId } from '@/types/schedule';

export interface CategoryMeta {
  id: CategoryId;
  name: string;
  color: string;
  // 10% 透明度背景（hex 后两位 AA）
  bg: string;
  emoji: string;
}

// 任务模块：知识、美食、运动、工作、私事
export const CATEGORIES: CategoryMeta[] = [
  { id: 'knowledge', name: '知识', color: '#7c3aed', bg: '#7c3aed1a', emoji: '📚' },
  { id: 'food', name: '美食', color: '#ea580c', bg: '#ea580c1a', emoji: '🍜' },
  { id: 'sport', name: '运动', color: '#16a34a', bg: '#16a34a1a', emoji: '🏃' },
  { id: 'work', name: '工作', color: '#2563eb', bg: '#2563eb1a', emoji: '💼' },
  { id: 'personal', name: '私事', color: '#db2777', bg: '#db27771a', emoji: '🏠' }
];

export const CATEGORY_MAP: Record<CategoryId, CategoryMeta> = CATEGORIES.reduce(
  (acc, item) => {
    acc[item.id] = item;
    return acc;
  },
  {} as Record<CategoryId, CategoryMeta>
);

// 提醒选项（提前分钟数）
export interface ReminderOption {
  label: string;
  value: number;
}

export const REMINDER_OPTIONS: ReminderOption[] = [
  { label: '提前 5 分钟', value: 5 },
  { label: '提前 30 分钟', value: 30 },
  { label: '提前 1 小时', value: 60 },
  { label: '提前 1 天', value: 1440 }
];

export function genId(): string {
  return `e_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 8)}`;
}
