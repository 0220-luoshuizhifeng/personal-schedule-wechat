import React, { useCallback, useEffect, useRef, useState } from 'react';
import { View, Text, ScrollView, Canvas } from '@tarojs/components';
import Taro from '@tarojs/taro';
import classnames from 'classnames';
import type { Occurrence } from '@/types/schedule';
import { CATEGORY_MAP, REMINDER_OPTIONS } from '@/constants/categories';
import { formatDT, friendlyDate, repeatText } from '@/utils/datetime';
import styles from './index.module.scss';

interface EventDetailModalProps {
  occ: Occurrence | null;
  onClose: () => void;
  onEdit: (occ: Occurrence) => void;
  onDelete: (occ: Occurrence) => void;
  onToggleDone: (occ: Occurrence) => void;
}

// 星光配色：柔和金橙 + 暖白
const STAR_COLORS = ['#fde047', '#fbbf24', '#f59e0b', '#fff7d6', '#fcd34d'];
const PARTICLE_COUNT = 28;

interface Particle {
  sx: number; sy: number;   // 起点（按钮中心）
  c1x: number; c1y: number; // 贝塞尔控制点（决定迸发弧度）
  tx: number; ty: number;   // 终点（已完成标签）
  delay: number;            // 延迟迸发 ms
  duration: number;         // 飞行时长 ms
  size: number;             // 星芒半径 px
  rot: number;
  color: string;
  born: number;             // 实际出生时间戳
  px: number; py: number;   // 上一帧位置（拖尾用）
  started: boolean;
}

const EventDetailModal: React.FC<EventDetailModalProps> = ({
  occ,
  onClose,
  onEdit,
  onDelete,
  onToggleDone
}) => {
  // 粒子层仅在动效播放期间挂载
  const [fxOn, setFxOn] = useState(false);
  const runningRef = useRef(false);
  const cancelLoopRef = useRef<(() => void) | null>(null);

  // 弹窗卸载/关闭时停止循环
  useEffect(() => () => {
    runningRef.current = false;
    if (cancelLoopRef.current) cancelLoopRef.current();
  }, []);

  // 四角星芒路径
  const drawSparkle = (
    ctx: any,
    x: number,
    y: number,
    r: number,
    rot: number,
    color: string,
    alpha: number
  ) => {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(rot);
    ctx.globalAlpha = alpha;
    // 柔和光晕
    const glow = ctx.createRadialGradient(0, 0, 0, 0, 0, r * 2.6);
    glow.addColorStop(0, color);
    glow.addColorStop(0.4, 'rgba(253, 224, 71, 0.35)');
    glow.addColorStop(1, 'rgba(253, 224, 71, 0)');
    ctx.fillStyle = glow;
    ctx.beginPath();
    ctx.arc(0, 0, r * 2.6, 0, Math.PI * 2);
    ctx.fill();
    // 四角星
    ctx.beginPath();
    ctx.moveTo(0, -r * 2);
    ctx.quadraticCurveTo(0, 0, r * 0.55, 0);
    ctx.quadraticCurveTo(0, 0, 0, r * 2);
    ctx.quadraticCurveTo(0, 0, -r * 0.55, 0);
    ctx.quadraticCurveTo(0, 0, 0, -r * 2);
    ctx.closePath();
    ctx.fillStyle = '#fffbe6';
    ctx.fill();
    ctx.restore();
  };

  // 触发：星芒从按钮迸发 → 弧线汇聚右上角标签 → 缩小淡出
  const startStarBurst = useCallback(() => {
    if (runningRef.current) return;
    setFxOn(true);

    // 轮询查询：Canvas 条件渲染后需等待节点真正挂载
    let tries = 0;
    const MAX_TRIES = 12;
    const queryOnce = () => {
      tries += 1;
      const query = Taro.createSelectorQuery();
      // 注意：fields() 返回 SelectorQuery，不能再链式调用 boundingClientRect()，
      // 用 rect: true 在同一个请求里取节点位置
      query.select('#fxCanvas').fields({ node: true, rect: true, size: true });
      query.select('#fxDoneBtn').boundingClientRect();
      query.select('#fxDoneFlag').boundingClientRect();
      query.exec((res: any[]) => {
        const canvasInfo = res && res[0];
        const btnRect = res && res[1];
        const flagRect = res && res[2];
        if ((!canvasInfo || !canvasInfo.node || !btnRect) && tries < MAX_TRIES) {
          setTimeout(queryOnce, 60);
          return;
        }
        if (!canvasInfo || !canvasInfo.node || !btnRect) {
          console.warn('[StarBurst] 节点查询失败', { canvasInfo, btnRect, flagRect });
          setFxOn(false);
          return;
        }
        launchBurst(canvasInfo, btnRect, flagRect);
      });
    };
    setTimeout(queryOnce, 60);

    const launchBurst = (canvasInfo: any, btnRect: any, flagRect: any) => {
        const canvas = canvasInfo.node;
        const ctx = canvas.getContext('2d');
        const dpr = Taro.getSystemInfoSync().pixelRatio || 2;
        const w = canvasInfo.width;
        const h = canvasInfo.height;
        canvas.width = w * dpr;
        canvas.height = h * dpr;
        ctx.scale(dpr, dpr);

        const cLeft = canvasInfo.left || 0;
        const cTop = canvasInfo.top || 0;
        const sx = btnRect.left + btnRect.width / 2 - cLeft;
        const sy = btnRect.top + btnRect.height / 2 - cTop;
        // 标签已渲染则以标签中心为终点，否则回退到弹窗右上角
        const tx = flagRect
          ? flagRect.left + flagRect.width / 2 - cLeft
          : w - 56;
        const ty = flagRect ? flagRect.top + flagRect.height / 2 - cTop : 42;

        const dx = tx - sx;
        const dy = ty - sy;
        const dist = Math.hypot(dx, dy) || 1;
        const nx = -dy / dist;
        const ny = dx / dist;

        const now = Date.now();
        const particles: Particle[] = Array.from({ length: PARTICLE_COUNT }, () => {
          // 控制点沿法向左右散开，并偏向按钮外侧，形成"迸发后回收"的弧线
          const side = Math.random() * 2 - 1;
          const amp = side * (50 + Math.random() * 150);
          const tCx = sx + dx * (0.15 + Math.random() * 0.35) + nx * amp;
          const tCy = sy + dy * (0.05 + Math.random() * 0.3) + ny * amp + 30 + Math.random() * 70;
          return {
            sx,
            sy,
            c1x: tCx,
            c1y: tCy,
            tx: tx + (Math.random() * 2 - 1) * 18,
            ty: ty + (Math.random() * 2 - 1) * 10,
            delay: Math.random() * 320,
            duration: 750 + Math.random() * 350,
            size: 3.5 + Math.random() * 4,
            rot: Math.random() * Math.PI,
            color: STAR_COLORS[Math.floor(Math.random() * STAR_COLORS.length)],
            born: now,
            px: sx,
            py: sy,
            started: false
          };
        });

        runningRef.current = true;

        const tick = () => {
          if (!runningRef.current) return;
          ctx.clearRect(0, 0, w, h);
          const tnow = Date.now();
          let alive = false;

          particles.forEach((p) => {
            const local = tnow - p.born - p.delay;
            if (local < 0) {
              alive = true; // 尚未出生
              return;
            }
            let t = local / p.duration;
            if (t > 1) t = 1;
            alive = alive || t < 1;
            if (!p.started) {
              p.started = true;
              p.px = p.sx;
              p.py = p.sy;
            }
            const ease = 1 - Math.pow(1 - t, 3); // easeOutCubic
            const mt = 1 - ease;
            const x = mt * mt * p.sx + 2 * mt * ease * p.c1x + ease * ease * p.tx;
            const y = mt * mt * p.sy + 2 * mt * ease * p.c1y + ease * ease * p.ty;

            // 拖尾：流光渐变线段
            const trailAlpha = Math.min(1, t * 2) * (1 - t * 0.4);
            ctx.save();
            ctx.strokeStyle = p.color;
            ctx.globalAlpha = 0.55 * trailAlpha;
            ctx.lineWidth = p.size * 0.7;
            ctx.lineCap = 'round';
            ctx.shadowColor = p.color;
            ctx.shadowBlur = p.size * 2.2;
            ctx.beginPath();
            ctx.moveTo(p.px, p.py);
            ctx.lineTo(x, y);
            ctx.stroke();
            ctx.restore();

            // 全程持续缩小，后段加速淡出
            const scale = 1 - t * 0.85;
            const alpha = t < 0.7 ? 1 : Math.max(0, 1 - (t - 0.7) / 0.3);
            drawSparkle(ctx, x, y, p.size * scale, p.rot + t * 2, p.color, alpha);

            p.px = x;
            p.py = y;
          });

          if (alive || particles.some((p) => tnow - p.born - p.delay < p.duration)) {
            if (canvas.requestAnimationFrame) {
              const fid = canvas.requestAnimationFrame(tick);
              cancelLoopRef.current = () => canvas.cancelAnimationFrame(fid);
            } else {
              const tid = setTimeout(tick, 16) as unknown as number;
              cancelLoopRef.current = () => clearTimeout(tid);
            }
          } else {
            // 全部汇聚后清空并卸载粒子层
            ctx.clearRect(0, 0, w, h);
            runningRef.current = false;
            cancelLoopRef.current = null;
            setFxOn(false);
          }
        };
        tick();
    };
  }, []);

  // 兜底：极端情况下 3.5s 后强制收起粒子层
  useEffect(() => {
    if (!fxOn) return undefined;
    const t = setTimeout(() => {
      runningRef.current = false;
      if (cancelLoopRef.current) cancelLoopRef.current();
      setFxOn(false);
    }, 3500);
    return () => clearTimeout(t);
  }, [fxOn]);

  const handleToggle = () => {
    if (!occ) return;
    // 仅"标记完成"触发星光特效，"取消完成"不触发
    if (occ.done) {
      onToggleDone(occ);
      return;
    }
    onToggleDone(occ);
    startStarBurst();
  };

  if (!occ) return null;
  const { event } = occ;
  const cat = CATEGORY_MAP[event.categoryId];
  const repeat = repeatText(event.repeat);
  const reminderLabels = event.reminders
    .slice()
    .sort((a, b) => b - a)
    .map((m) => REMINDER_OPTIONS.find((o) => o.value === m)?.label || `提前 ${m} 分钟`)
    .join('、');

  return (
    <View className={styles.mask} onClick={onClose}>
      <View className={styles.sheet} onClick={(e) => e.stopPropagation()}>
        <View className={styles.handleBar} />
        <View className={styles.header}>
          <View className={styles.catChip} style={{ background: cat.bg }}>
            <Text className={styles.catText} style={{ color: cat.color }}>
              {cat.emoji} {cat.name}
            </Text>
          </View>
          {occ.done ? (
            <View className={styles.doneFlag} id='fxDoneFlag'>
              <Text className={styles.doneFlagText}>已完成</Text>
            </View>
          ) : null}
        </View>
        <Text className={classnames(styles.title, occ.done && styles.titleDone)}>
          {event.title}
        </Text>

        <ScrollView scrollY className={styles.body}>
          <View className={styles.row}>
            <Text className={styles.rowIcon}>🕐</Text>
            <View className={styles.rowContent}>
              <Text className={styles.rowLabel}>
                {event.allDay ? '全天' : formatDT(occ.start, 'HH:mm') + ' - ' + formatDT(occ.end, 'HH:mm')}
              </Text>
              <Text className={styles.rowSub}>
                {friendlyDate(occ.dateKey)}
                {repeat ? ` · ${repeat}` : ''}
              </Text>
            </View>
          </View>

          {event.location ? (
            <View className={styles.row}>
              <Text className={styles.rowIcon}>📍</Text>
              <Text className={styles.rowLabel}>{event.location}</Text>
            </View>
          ) : null}

          {reminderLabels ? (
            <View className={styles.row}>
              <Text className={styles.rowIcon}>🔔</Text>
              <Text className={styles.rowLabel}>{reminderLabels}</Text>
            </View>
          ) : null}

          {event.participants.length ? (
            <View className={styles.row}>
              <Text className={styles.rowIcon}>👥</Text>
              <View className={styles.rowContent}>
                <View className={styles.chips}>
                  {event.participants.map((p) => (
                    <View key={p} className={styles.personChip}>
                      <Text className={styles.personText}>{p}</Text>
                    </View>
                  ))}
                </View>
              </View>
            </View>
          ) : null}

          {event.remark ? (
            <View className={styles.row}>
              <Text className={styles.rowIcon}>📝</Text>
              <Text className={styles.remark}>{event.remark}</Text>
            </View>
          ) : null}
        </ScrollView>

        <View className={styles.footer}>
          <View
            id='fxDoneBtn'
            className={classnames(styles.doneBtn, occ.done && styles.doneBtnUndo)}
            onClick={handleToggle}
          >
            <Text className={styles.doneBtnText}>{occ.done ? '取消完成' : '标记完成'}</Text>
          </View>
          <View className={styles.secondaryRow}>
            <View className={styles.editBtn} onClick={() => onEdit(occ)}>
              <Text className={styles.editBtnText}>编辑</Text>
            </View>
            <View className={styles.deleteBtn} onClick={() => onDelete(occ)}>
              <Text className={styles.deleteBtnText}>删除</Text>
            </View>
          </View>
        </View>

        {/* 局部星光粒子层：不拦截点击，动效结束即卸载 */}
        {fxOn ? (
          <Canvas type='2d' id='fxCanvas' className={styles.fxCanvas} />
        ) : null}
      </View>
    </View>
  );
};

export default EventDetailModal;
