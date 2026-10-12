import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import Taro from '@tarojs/taro';
import type { EventFormData, ReminderSettings, ScheduleEvent } from '@/types/schedule';
import { genId } from '@/constants/categories';
import { buildSeedEvents } from '@/data/seed';

const STORE_KEY = 'tomorrow-task-store-v1';

// 同步 Taro 存储，zustand persist 支持同步 rehydrate
const taroStorage = {
  getItem: (name: string): string | null => {
    try {
      const value = Taro.getStorageSync(name);
      return value === '' || value === undefined || value === null ? null : String(value);
    } catch (err) {
      console.error('[Store] read storage failed:', err);
      return null;
    }
  },
  setItem: (name: string, value: string): void => {
    try {
      Taro.setStorageSync(name, value);
    } catch (err) {
      console.error('[Store] write storage failed:', err);
      Taro.showToast({ title: '保存失败，请检查存储空间', icon: 'none' });
    }
  },
  removeItem: (name: string): void => {
    try {
      Taro.removeStorageSync(name);
    } catch (err) {
      console.error('[Store] remove storage failed:', err);
    }
  }
};

interface ScheduleState {
  events: ScheduleEvent[];
  settings: ReminderSettings;
  // 已触发过的提醒 key，避免重复弹窗
  firedReminders: string[];

  seedIfEmpty: () => void;
  addEvent: (data: EventFormData) => string;
  // 编辑重复日程：all = 全部事件；this = 仅本次（原事件加例外日期 + 新建当天单次事件）
  updateEvent: (id: string, data: EventFormData, mode: 'all' | 'this', dateKey?: string) => void;
  deleteEvent: (id: string, mode: 'all' | 'this', dateKey?: string) => void;
  toggleDone: (id: string, dateKey: string) => void;
  setSettings: (patch: Partial<ReminderSettings>) => void;
  markFired: (keys: string[]) => void;
  resetAll: () => void;
}

export const useScheduleStore = create<ScheduleState>()(
  persist(
    (set, get) => ({
      events: [],
      settings: {
        remindersEnabled: true,
        eveningCheck: true,
        eveningTime: '20:00'
      },
      firedReminders: [],

      seedIfEmpty: () => {
        if (get().events.length === 0) {
          set({ events: buildSeedEvents() });
          console.info('[Store] seed events installed');
        }
      },

      addEvent: (data) => {
        const event: ScheduleEvent = {
          ...data,
          id: genId(),
          records: {},
          createdAt: Date.now()
        };
        set((state) => ({ events: [...state.events, event] }));
        console.info('[Store] event added:', event.id, event.title);
        return event.id;
      },

      updateEvent: (id, data, mode, dateKey) => {
        const target = get().events.find((e) => e.id === id);
        if (!target) return;

        if (mode === 'this' && dateKey && target.repeat.type !== 'none') {
          // 仅本次：原重复事件在该日期加例外；用表单数据新建一个当天单次事件
          const exceptEvent: ScheduleEvent = {
            ...data,
            id: genId(),
            repeat: { type: 'none', interval: 1 },
            records: {},
            createdAt: Date.now()
          };
          set((state) => ({
            events: state.events.map((e) =>
              e.id === id
                ? { ...e, exclusions: Array.from(new Set([...(e.exclusions || []), dateKey])) }
                : e
            ).concat(exceptEvent)
          }));
          console.info('[Store] occurrence updated (this only):', id, dateKey);
          return;
        }

        set((state) => ({
          events: state.events.map((e) =>
            e.id === id
              ? {
                  ...e,
                  ...data,
                  id: e.id,
                  records: e.records,
                  exclusions: e.exclusions,
                  createdAt: e.createdAt
                }
              : e
          )
        }));
        console.info('[Store] event updated:', id);
      },

      deleteEvent: (id, mode, dateKey) => {
        if (mode === 'this' && dateKey) {
          set((state) => ({
            events: state.events.map((e) =>
              e.id === id
                ? { ...e, exclusions: Array.from(new Set([...(e.exclusions || []), dateKey])) }
                : e
            )
          }));
          console.info('[Store] occurrence deleted (this only):', id, dateKey);
          return;
        }
        set((state) => ({ events: state.events.filter((e) => e.id !== id) }));
        console.info('[Store] event deleted:', id);
      },

      toggleDone: (id, dateKey) => {
        set((state) => ({
          events: state.events.map((e) => {
            if (e.id !== id) return e;
            const records = { ...e.records };
            if (records[dateKey] === 'done') {
              delete records[dateKey];
            } else {
              records[dateKey] = 'done';
            }
            return { ...e, records };
          })
        }));
      },

      setSettings: (patch) => {
        set((state) => ({ settings: { ...state.settings, ...patch } }));
      },

      markFired: (keys) => {
        if (!keys.length) return;
        set((state) => ({
          firedReminders: Array.from(new Set([...state.firedReminders, ...keys])).slice(-500)
        }));
      },

      resetAll: () => {
        set({ events: buildSeedEvents(), firedReminders: [] });
        console.info('[Store] data reset to seed');
      }
    }),
    {
      name: STORE_KEY,
      storage: createJSONStorage(() => taroStorage)
    }
  )
);
