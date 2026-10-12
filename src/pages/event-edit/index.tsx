import React, { useMemo, useRef, useState } from 'react';
import { View, Text, Picker, Switch, Input, Textarea } from '@tarojs/components';
import Taro from '@tarojs/taro';
import dayjs from 'dayjs';
import classnames from 'classnames';
import { useScheduleStore } from '@/store/scheduleStore';
import type { CategoryId, EventFormData, RepeatType, ScheduleEvent } from '@/types/schedule';
import { CATEGORIES, REMINDER_OPTIONS } from '@/constants/categories';
import { expandOccurrences, todayKey, DATE_FMT, DT_FMT } from '@/utils/datetime';
import styles from './index.module.scss';

interface FormState {
  title: string;
  categoryId: CategoryId;
  date: string;
  startTime: string;
  endTime: string;
  allDay: boolean;
  repeatIndex: number; // 0 不重复 1 每天 2 每周 3 每月 4 自定义
  customInterval: number;
  customUnit: RepeatType; // daily / weekly / monthly
  hasRepeatEnd: boolean;
  repeatEndDate: string;
  reminders: number[];
  location: string;
  remark: string;
  participants: string[];
}

const REPEAT_OPTIONS = ['不重复', '每天', '每周', '每月', '自定义周期'];
const UNIT_OPTIONS: { label: string; value: RepeatType }[] = [
  { label: '天', value: 'daily' },
  { label: '周', value: 'weekly' },
  { label: '月', value: 'monthly' }
];

function buildInitial(event: ScheduleEvent | undefined, instanceKey: string | undefined, params: Record<string, string>): FormState {
  let date = params.date ? decodeURIComponent(params.date) : todayKey();
  let startTime = '09:00';
  let endTime = '10:00';
  let repeatIndex = 0;
  let customInterval = 2;
  let customUnit: RepeatType = 'daily';
  let hasRepeatEnd = false;
  let repeatEndDate = dayjs().add(30, 'day').format(DATE_FMT);

  if (event) {
    // 编辑重复事件的某一次时，表单初始化为该次的日期时间
    const startStr =
      event.repeat.type !== 'none' && instanceKey
        ? (expandOccurrences(event, instanceKey, instanceKey)[0]?.start ?? event.start)
        : event.start;
    const endStr =
      event.repeat.type !== 'none' && instanceKey
        ? (expandOccurrences(event, instanceKey, instanceKey)[0]?.end ?? event.end)
        : event.end;
    const s = dayjs(startStr, DT_FMT);
    const e = dayjs(endStr, DT_FMT);
    date = s.format(DATE_FMT);
    startTime = s.format('HH:mm');
    endTime = e.format('HH:mm');
    const r = event.repeat;
    if (r.type === 'none') repeatIndex = 0;
    else if (r.interval === 1) repeatIndex = r.type === 'daily' ? 1 : r.type === 'weekly' ? 2 : 3;
    else {
      repeatIndex = 4;
      customInterval = r.interval;
      customUnit = r.type;
    }
    hasRepeatEnd = !!r.endDate;
    if (r.endDate) repeatEndDate = r.endDate;
    return {
      title: event.title,
      categoryId: event.categoryId,
      date,
      startTime,
      endTime,
      allDay: event.allDay,
      repeatIndex,
      customInterval,
      customUnit,
      hasRepeatEnd,
      repeatEndDate,
      reminders: [...event.reminders],
      location: event.location || '',
      remark: event.remark || '',
      participants: [...event.participants]
    };
  }

  if (params.start) {
    const s = dayjs(decodeURIComponent(params.start), DT_FMT);
    date = s.format(DATE_FMT);
    startTime = s.format('HH:mm');
  }
  if (params.end) {
    endTime = dayjs(decodeURIComponent(params.end), DT_FMT).format('HH:mm');
  }
  return {
    title: '',
    categoryId: 'knowledge',
    date,
    startTime,
    endTime,
    allDay: false,
    repeatIndex,
    customInterval,
    customUnit,
    hasRepeatEnd,
    repeatEndDate,
    reminders: [30],
    location: '',
    remark: '',
    participants: []
  };
}

const EventEditPage: React.FC = () => {
  const router = Taro.getCurrentInstance().router;
  const params = (router?.params || {}) as Record<string, string>;
  const editingId = params.id;
  const instanceKey = params.key ? decodeURIComponent(params.key) : undefined;

  const events = useScheduleStore((s) => s.events);
  const addEvent = useScheduleStore((s) => s.addEvent);
  const updateEvent = useScheduleStore((s) => s.updateEvent);
  const deleteEvent = useScheduleStore((s) => s.deleteEvent);

  const editingEvent = useMemo(
    () => (editingId ? events.find((e) => e.id === editingId) : undefined),
    [editingId, events]
  );
  const isRecurringInstance = !!editingEvent && editingEvent.repeat.type !== 'none' && !!instanceKey;

  const [form, setForm] = useState<FormState>(() =>
    buildInitial(editingEvent, instanceKey, params)
  );
  const [participantInput, setParticipantInput] = useState('');
  const saving = useRef(false);

  React.useEffect(() => {
    Taro.setNavigationBarTitle({ title: editingId ? '编辑日程' : '新建日程' });
  }, [editingId]);

  const patch = (p: Partial<FormState>) => setForm((prev) => ({ ...prev, ...p }));

  const toggleReminder = (value: number) => {
    patch({
      reminders: form.reminders.includes(value)
        ? form.reminders.filter((x) => x !== value)
        : [...form.reminders, value]
    });
  };

  const addParticipant = () => {
    const name = participantInput.trim();
    if (!name) return;
    if (form.participants.includes(name)) {
      Taro.showToast({ title: '已添加该参与人', icon: 'none' });
      return;
    }
    patch({ participants: [...form.participants, name] });
    setParticipantInput('');
  };

  const validate = (): string | null => {
    if (!form.title.trim()) return '请填写任务标题';
    if (!form.allDay && form.endTime <= form.startTime) {
      return '结束时间必须晚于开始时间';
    }
    if (form.repeatIndex === 4 && (!form.customInterval || form.customInterval < 1)) {
      return '自定义周期需为不小于 1 的数字';
    }
    if (form.hasRepeatEnd && form.repeatEndDate < form.date) {
      return '重复结束日期不能早于开始日期';
    }
    return null;
  };

  const buildPayload = (): EventFormData => {
    const start = form.allDay ? `${form.date} 00:00` : `${form.date} ${form.startTime}`;
    const end = form.allDay ? `${form.date} 23:59` : `${form.date} ${form.endTime}`;
    let repeat: EventFormData['repeat'];
    if (form.repeatIndex === 0) {
      repeat = { type: 'none', interval: 1 };
    } else if (form.repeatIndex === 1) {
      repeat = { type: 'daily', interval: 1, ...(form.hasRepeatEnd ? { endDate: form.repeatEndDate } : {}) };
    } else if (form.repeatIndex === 2) {
      repeat = { type: 'weekly', interval: 1, ...(form.hasRepeatEnd ? { endDate: form.repeatEndDate } : {}) };
    } else if (form.repeatIndex === 3) {
      repeat = { type: 'monthly', interval: 1, ...(form.hasRepeatEnd ? { endDate: form.repeatEndDate } : {}) };
    } else {
      repeat = {
        type: form.customUnit,
        interval: Math.max(1, form.customInterval),
        ...(form.hasRepeatEnd ? { endDate: form.repeatEndDate } : {})
      };
    }
    return {
      title: form.title.trim(),
      categoryId: form.categoryId,
      start,
      end,
      allDay: form.allDay,
      repeat,
      location: form.location.trim() || undefined,
      remark: form.remark.trim() || undefined,
      reminders: form.reminders,
      participants: form.participants
    };
  };

  const doSave = (mode: 'all' | 'this') => {
    if (saving.current) return;
    const err = validate();
    if (err) {
      Taro.showToast({ title: err, icon: 'none' });
      return;
    }
    saving.current = true;
    Taro.showLoading({ title: '保存中…', mask: true });
    try {
      const payload = buildPayload();
      if (editingId && editingEvent) {
        updateEvent(editingId, payload, mode, instanceKey);
      } else {
        addEvent(payload);
      }
      setTimeout(() => {
        Taro.hideLoading();
        Taro.showToast({ title: '已保存', icon: 'success' });
        setTimeout(() => Taro.navigateBack(), 500);
      }, 300);
    } catch (e) {
      console.error('[EventEdit] save failed:', e);
      Taro.hideLoading();
      Taro.showToast({ title: '保存失败，请重试', icon: 'none' });
      saving.current = false;
    }
  };

  const handleSave = () => {
    if (isRecurringInstance) {
      Taro.showActionSheet({
        itemList: ['仅保存本次', '保存到全部重复事件'],
        success: (res) => doSave(res.tapIndex === 0 ? 'this' : 'all'),
        fail: (err) => console.error('[EventEdit] save sheet failed:', err)
      });
      return;
    }
    doSave('all');
  };

  const handleDelete = () => {
    if (!editingId || !editingEvent) return;
    if (editingEvent.repeat.type !== 'none' && instanceKey) {
      Taro.showActionSheet({
        itemList: ['仅删除本次', '删除全部重复事件'],
        success: (res) => {
          deleteEvent(editingId, res.tapIndex === 0 ? 'this' : 'all', instanceKey);
          Taro.showToast({ title: '已删除', icon: 'none' });
          setTimeout(() => Taro.navigateBack(), 400);
        },
        fail: (err) => console.error('[EventEdit] delete sheet failed:', err)
      });
      return;
    }
    Taro.showModal({
      title: '删除日程',
      content: `确定删除「${editingEvent.title}」吗？`,
      confirmText: '删除',
      confirmColor: '#dc2626',
      cancelText: '取消',
      success: (res) => {
        if (res.confirm) {
          deleteEvent(editingId, 'all');
          Taro.showToast({ title: '已删除', icon: 'none' });
          setTimeout(() => Taro.navigateBack(), 400);
        }
      }
    });
  };

  return (
    <View className={styles.page}>
      {/* 标题 */}
        <View className={styles.card}>
          <View className={styles.titleRow}>
            <Text className={styles.titleLabel}>
              <Text className={styles.required}>*</Text>标题
            </Text>
            <Input
              className={styles.titleInput}
              placeholder='例如：复习高数第三章'
              placeholderStyle='color:#c4cad6'
              value={form.title}
              maxlength={50}
              onInput={(e) => patch({ title: e.detail.value })}
            />
          </View>
        </View>

        {/* 时间与重复 */}
        <View className={styles.card}>
          <View className={styles.row}>
            <Text className={styles.rowLabel}>全天</Text>
            <View className={styles.switchWrap}>
              <Switch
                checked={form.allDay}
                color='#2563eb'
                onChange={(e) => patch({ allDay: e.detail.value })}
              />
            </View>
          </View>
          <Picker mode='date' value={form.date} onChange={(e) => patch({ date: e.detail.value })}>
            <View className={styles.row}>
              <Text className={styles.rowLabel}>日期</Text>
              <View className={styles.rowValue}>
                <Text className={styles.valueText}>{form.date}</Text>
                <Text className={styles.arrow}>›</Text>
              </View>
            </View>
          </Picker>
          {!form.allDay ? (
            <View className={styles.row}>
              <Text className={styles.rowLabel}>开始时间</Text>
              <View className={styles.rowValue}>
                <Picker mode='time' value={form.startTime} onChange={(e) => patch({ startTime: e.detail.value })}>
                  <Text className={styles.valueText}>{form.startTime}</Text>
                </Picker>
                <Text className={styles.toText}>至</Text>
                <Picker mode='time' value={form.endTime} onChange={(e) => patch({ endTime: e.detail.value })}>
                  <Text className={styles.valueText}>{form.endTime}</Text>
                </Picker>
              </View>
            </View>
          ) : null}
          <Picker
            mode='selector'
            range={REPEAT_OPTIONS}
            value={form.repeatIndex}
            onChange={(e) => patch({ repeatIndex: Number(e.detail.value) })}
          >
            <View className={styles.row}>
              <Text className={styles.rowLabel}>重复</Text>
              <View className={styles.rowValue}>
                <Text className={styles.valueText}>{REPEAT_OPTIONS[form.repeatIndex]}</Text>
                <Text className={styles.arrow}>›</Text>
              </View>
            </View>
          </Picker>
          {form.repeatIndex === 4 ? (
            <View className={styles.customBox}>
              <Text className={styles.customPrefix}>每</Text>
              <Input
                className={styles.customInput}
                type='number'
                value={String(form.customInterval)}
                onInput={(e) => patch({ customInterval: Number(e.detail.value) })}
              />
              <Picker
                mode='selector'
                range={UNIT_OPTIONS.map((u) => u.label)}
                value={Math.max(0, UNIT_OPTIONS.findIndex((u) => u.value === form.customUnit))}
                onChange={(e) => patch({ customUnit: UNIT_OPTIONS[Number(e.detail.value)].value })}
              >
                <Text className={styles.customUnit}>
                  {UNIT_OPTIONS.find((u) => u.value === form.customUnit)?.label} ›
                </Text>
              </Picker>
            </View>
          ) : null}
          {form.repeatIndex > 0 ? (
            <View className={styles.row}>
              <Text className={styles.rowLabel}>结束重复</Text>
              <View className={styles.rowValue}>
                {form.hasRepeatEnd ? (
                  <Picker
                    mode='date'
                    value={form.repeatEndDate}
                    onChange={(e) => patch({ repeatEndDate: e.detail.value })}
                  >
                    <Text className={styles.valueText}>{form.repeatEndDate} ›</Text>
                  </Picker>
                ) : (
                  <Text className={styles.valueText}>一直重复</Text>
                )}
                <Switch
                  className={styles.repeatEndSwitch}
                  checked={form.hasRepeatEnd}
                  color='#2563eb'
                  onChange={(e) => patch({ hasRepeatEnd: e.detail.value })}
                />
              </View>
            </View>
          ) : null}
        </View>

        {/* 分类模块 */}
        <View className={styles.card}>
          <View className={styles.catGrid}>
            {CATEGORIES.map((c) => {
              const active = form.categoryId === c.id;
              return (
                <View
                  key={c.id}
                  className={classnames(styles.catChip, active && styles.catChipActive)}
                  style={active ? { borderColor: c.color, background: c.bg } : undefined}
                  onClick={() => patch({ categoryId: c.id })}
                >
                  <Text
                    className={classnames(styles.catChipText, active && styles.reminderChipTextActive)}
                    style={active ? { color: c.color } : undefined}
                  >
                    {c.emoji} {c.name}
                  </Text>
                </View>
              );
            })}
          </View>
        </View>

        {/* 提醒 */}
        <View className={styles.card}>
          <View className={styles.reminderGrid}>
            {REMINDER_OPTIONS.map((o) => {
              const active = form.reminders.includes(o.value);
              return (
                <View
                  key={o.value}
                  className={classnames(styles.reminderChip, active && styles.reminderChipActive)}
                  onClick={() => toggleReminder(o.value)}
                >
                  <Text
                    className={classnames(
                      styles.reminderChipText,
                      active && styles.reminderChipTextActive
                    )}
                  >
                    {o.label}
                  </Text>
                </View>
              );
            })}
          </View>
        </View>

        {/* 地点 / 参与人 / 备注 */}
        <View className={styles.card}>
          <View className={styles.row}>
            <Text className={styles.rowLabel}>地点</Text>
            <Input
              className={styles.inputPlain}
              placeholder='教室 / 线上链接（选填）'
              placeholderStyle='color:#c4cad6;text-align:right'
              value={form.location}
              onInput={(e) => patch({ location: e.detail.value })}
            />
          </View>
          <View className={styles.row}>
            <Text className={styles.rowLabel}>参与人</Text>
            <View className={styles.participantTags}>
              {form.participants.map((p) => (
                <View key={p} className={styles.pTag}>
                  <Text className={styles.pTagText}>{p}</Text>
                  <Text
                    className={styles.pTagClose}
                    onClick={() =>
                      patch({ participants: form.participants.filter((x) => x !== p) })
                    }
                  >
                    ✕
                  </Text>
                </View>
              ))}
              <Input
                className={styles.pInput}
                placeholder='姓名'
                placeholderStyle='color:#c4cad6'
                value={participantInput}
                onInput={(e) => setParticipantInput(e.detail.value)}
                onConfirm={addParticipant}
              />
              <View className={styles.addBtn} onClick={addParticipant}>
                <Text className={styles.addBtnText}>添加</Text>
              </View>
            </View>
          </View>
        </View>

        <View className={styles.card}>
          <Textarea
            className={styles.textarea}
            placeholder='补充备注详情（选填）'
            placeholderStyle='color:#c4cad6'
            value={form.remark}
            maxlength={500}
            autoHeight
            onInput={(e) => patch({ remark: e.detail.value })}
          />
        </View>

        {isRecurringInstance ? (
          <Text className={styles.sectionHint}>提示：这是一条重复日程，保存或删除时可选择「仅本次」或「全部重复事件」。</Text>
        ) : null}

      <View className={styles.footer}>
        {editingId ? (
          <View className={styles.deleteFooterBtn} onClick={handleDelete}>
            <Text className={styles.deleteFooterText}>删除</Text>
          </View>
        ) : null}
        <View className={styles.saveBtn} onClick={handleSave}>
          <Text className={styles.saveText}>保存</Text>
        </View>
      </View>
    </View>
  );
};

export default EventEditPage;
