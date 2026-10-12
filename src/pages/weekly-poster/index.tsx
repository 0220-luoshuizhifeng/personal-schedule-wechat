import React, { useMemo, useRef, useState, useEffect } from 'react';
import { View, Text, Swiper, SwiperItem, Canvas, Button, Image } from '@tarojs/components';
import Taro, { useShareAppMessage, useShareTimeline, useReady } from '@tarojs/taro';
import dayjs from 'dayjs';
import { useScheduleStore } from '@/store/scheduleStore';
import { CATEGORIES } from '@/constants/categories';
import { expandAll, weekDates, DATE_FMT, friendlyDate } from '@/utils/datetime';
import type { Occurrence } from '@/types/schedule';
import styles from './index.module.scss';

// ---------- 本周数据计算 ----------
interface WeekStats {
  rangeText: string;
  total: number;
  done: number;
  rate: number;
  streak: number;
  categoryStats: { id: string; name: string; emoji: string; color: string; done: number; total: number }[];
  daily: { key: string; label: string; done: number; total: number }[];
  bestDayText: string;
  bestDayCount: number;
  firstTaskTitle: string;
  morningDone: number;
  eveningDone: number;
  weekendDone: number;
  tags: string[];
  portraitEmoji: string;
  portraitTitle: string;
  portraitDesc: string;
  empty: boolean;
}

function buildStats(events: ReturnType<typeof useScheduleStore.getState>['events']): WeekStats {
  const keys = weekDates(dayjs());
  const start = keys[0];
  const end = keys[6];
  const occs = expandAll(events, start, end);
  const done = occs.filter((o) => o.done);
  const total = occs.length;
  const doneCount = done.length;
  const rate = total ? Math.round((doneCount / total) * 100) : 0;

  const categoryStats = CATEGORIES.map((c) => {
    const inCat = occs.filter((o) => o.event.categoryId === c.id);
    return {
      id: c.id,
      name: c.name,
      emoji: c.emoji,
      color: c.color,
      total: inCat.length,
      done: inCat.filter((o) => o.done).length
    };
  }).filter((c) => c.total > 0);

  const dayLabel = ['一', '二', '三', '四', '五', '六', '日'];
  const daily = keys.map((key, i) => {
    const inDay = occs.filter((o) => o.dateKey === key);
    return {
      key,
      label: dayLabel[i],
      done: inDay.filter((o) => o.done).length,
      total: inDay.length
    };
  });
  const best = daily.reduce((a, b) => (b.done > a.done ? b : a), daily[0]);

  // 连续完成天数（与「我的」页同口径）
  let streak = 0;
  for (let i = 0; i < 60; i += 1) {
    const key = dayjs().subtract(i, 'day').format(DATE_FMT);
    const d = expandAll(events, key, key);
    if (d.length === 0) break;
    if (d.every((o) => o.done)) streak += 1;
    else break;
  }

  const hourOf = (o: Occurrence) => dayjs(o.start, 'YYYY-MM-DD HH:mm').hour();
  const morningDone = done.filter((o) => hourOf(o) < 12).length;
  const eveningDone = done.filter((o) => hourOf(o) >= 19).length;
  const weekendDone = done.filter((o) => {
    const d = dayjs(o.dateKey, DATE_FMT).day();
    return d === 0 || d === 6;
  }).length;
  const firstTask = [...done].sort((a, b) => a.start.localeCompare(b.start))[0];

  // 趣味标签
  const tags: string[] = [];
  if (rate === 100 && total >= 3) tags.push('全勤王者');
  if (streak >= 3) tags.push(`连续打卡${streak}天`);
  if (morningDone >= 3) tags.push('早起鸟本鸟');
  if (eveningDone >= 3) tags.push('夜行生物');
  if (weekendDone >= 3) tags.push('周末战神');
  if (categoryStats.length >= 3) tags.push('斜杠青年');
  if (best && best.done >= 4) tags.push('单日暴走');
  if (doneCount > 0 && tags.length === 0) tags.push('稳步上分');
  if (total === 0) tags.push('本周放空', '蓄力中');

  // 用户画像
  const topCat = [...categoryStats].sort((a, b) => b.done - a.done)[0];
  const catAdj: Record<string, { emoji: string; title: string }> = {
    knowledge: { emoji: '📚', title: '知识捕手' },
    food: { emoji: '🍜', title: '人间美食雷达' },
    sport: { emoji: '🏃', title: '燃脂永动机' },
    work: { emoji: '💼', title: '卷王本王' },
    personal: { emoji: '🏠', title: '生活品鉴家' }
  };
  let portraitEmoji = '🛋️';
  let portraitTitle = '蓄力中の潜力股';
  if (total === 0) {
    portraitEmoji = '🛋️';
    portraitTitle = '本周挂机玩家';
  } else if (rate >= 90 && total >= 5) {
    portraitEmoji = '👑';
    portraitTitle = '满级时间管理大师';
  } else if (rate >= 70) {
    portraitEmoji = '🔥';
    portraitTitle = '自律狠人';
  } else if (rate >= 40) {
    portraitEmoji = '📈';
    portraitTitle = '稳步上分选手';
  } else if (doneCount > 0) {
    portraitEmoji = '🌱';
    portraitTitle = '觉醒中的行动派';
  }
  const catMeta = topCat && topCat.done > 0 ? catAdj[topCat.id] : null;

  return {
    rangeText: `${dayjs(start).format('M月D日')} - ${dayjs(end).format('M月D日')}`,
    total,
    done: doneCount,
    rate,
    streak,
    categoryStats: categoryStats.map((c) => ({ ...c })),
    daily,
    bestDayText: best && best.done > 0 ? friendlyDate(best.key) : '',
    bestDayCount: best ? best.done : 0,
    firstTaskTitle: firstTask ? firstTask.event.title : '',
    morningDone,
    eveningDone,
    weekendDone,
    tags,
    portraitEmoji: catMeta && rate >= 70 ? catMeta.emoji : portraitEmoji,
    portraitTitle: catMeta && rate >= 70 ? catMeta.title : portraitTitle,
    portraitDesc:
      total === 0
        ? '这周日程空空如也，下周一起把flag立起来？'
        : `本周在「${topCat?.name ?? '日常'}」赛道最投入，完成率 ${rate}%，${rate >= 70 ? '这波操作很能打' : '继续上分指日可待'}！`,
    empty: total === 0
  };
}

// ---------- 海报绘制 ----------
const POSTER_W = 750;
const POSTER_H = 1334;

function roundRect(
  ctx: any,
  x: number,
  y: number,
  w: number,
  h: number,
  r: number
) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

function drawPoster(
  canvas: any,
  stats: WeekStats,
  cb: (tempFilePath: string) => void
) {
  const ctx = canvas.getContext('2d');
  const dpr = 2;
  canvas.width = POSTER_W * dpr;
  canvas.height = POSTER_H * dpr;
  ctx.scale(dpr, dpr);

  // 流体渐变背景
  const bg = ctx.createLinearGradient(0, 0, 0, POSTER_H);
  bg.addColorStop(0, '#7c3aed');
  bg.addColorStop(0.45, '#2563eb');
  bg.addColorStop(1, '#06b6d4');
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, POSTER_W, POSTER_H);

  // 装饰光斑
  ctx.globalAlpha = 0.16;
  ctx.fillStyle = '#ffffff';
  ctx.beginPath();
  ctx.arc(640, 150, 150, 0, Math.PI * 2);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(90, 1080, 190, 0, Math.PI * 2);
  ctx.fill();
  ctx.globalAlpha = 1;

  // 顶部标识
  ctx.textAlign = 'center';
  ctx.fillStyle = 'rgba(255,255,255,0.85)';
  ctx.font = '26px sans-serif';
  ctx.fillText('明 日 任 务 · 周 度 回 顾', POSTER_W / 2, 96);
  ctx.fillStyle = '#fde047';
  ctx.font = 'bold 30px sans-serif';
  ctx.fillText(stats.rangeText, POSTER_W / 2, 148);

  // 主卡片
  roundRect(ctx, 60, 210, 630, 470, 36);
  ctx.fillStyle = 'rgba(255,255,255,0.96)';
  ctx.fill();

  ctx.fillStyle = '#6d28d9';
  ctx.font = 'bold 30px sans-serif';
  ctx.fillText('本周战绩', POSTER_W / 2, 280);

  ctx.fillStyle = '#111827';
  ctx.font = 'bold 150px sans-serif';
  ctx.fillText(String(stats.done), 300, 440);
  ctx.fillStyle = '#6b7280';
  ctx.font = '44px sans-serif';
  ctx.fillText(`/ ${stats.total} 件`, 470, 430);

  ctx.fillStyle = '#4b5563';
  ctx.font = '28px sans-serif';
  ctx.fillText(`完成率 ${stats.rate}%`, POSTER_W / 2, 510);

  // 完成率条
  const barX = 130;
  const barY = 560;
  const barW = 490;
  roundRect(ctx, barX, barY, barW, 26, 13);
  ctx.fillStyle = '#ede9fe';
  ctx.fill();
  if (stats.rate > 0) {
    const g = ctx.createLinearGradient(barX, 0, barX + barW, 0);
    g.addColorStop(0, '#7c3aed');
    g.addColorStop(1, '#06b6d4');
    roundRect(ctx, barX, barY, Math.max(26, (barW * stats.rate) / 100), 26, 13);
    ctx.fillStyle = g;
    ctx.fill();
  }

  ctx.fillStyle = '#9ca3af';
  ctx.font = '24px sans-serif';
  ctx.fillText(`连续打卡 ${stats.streak} 天`, POSTER_W / 2, 635);

  // 模块分布
  let y = 730;
  ctx.textAlign = 'left';
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 34px sans-serif';
  ctx.fillText('🎯 本周投入', 90, y);
  y += 28;
  const topCats = stats.categoryStats.slice(0, 3);
  (topCats.length ? topCats : []).forEach((c) => {
    y += 56;
    ctx.fillStyle = 'rgba(255,255,255,0.85)';
    ctx.font = '26px sans-serif';
    ctx.fillText(`${c.emoji} ${c.name}`, 90, y);
    ctx.textAlign = 'right';
    ctx.fillText(`${c.done}/${c.total}`, 660, y);
    // 条
    roundRect(ctx, 90, y + 16, 570, 16, 8);
    ctx.fillStyle = 'rgba(255,255,255,0.25)';
    ctx.fill();
    if (c.total > 0) {
      roundRect(ctx, 90, y + 16, Math.max(16, (570 * c.done) / c.total), 16, 8);
      ctx.fillStyle = c.color === '#7c3aed' ? '#c4b5fd' : '#fde047';
      ctx.fill();
    }
    ctx.textAlign = 'left';
  });
  if (!topCats.length) {
    y += 70;
    ctx.fillStyle = 'rgba(255,255,255,0.8)';
    ctx.font = '26px sans-serif';
    ctx.fillText('本周还没有安排任务，空白也是一种节奏', 90, y);
  }

  // 画像
  y += 100;
  roundRect(ctx, 60, y, 630, 210, 36);
  ctx.fillStyle = 'rgba(255,255,255,0.18)';
  ctx.fill();
  ctx.textAlign = 'center';
  ctx.font = '72px sans-serif';
  ctx.fillText(stats.portraitEmoji, POSTER_W / 2, y + 92);
  ctx.fillStyle = '#fde047';
  ctx.font = 'bold 40px sans-serif';
  ctx.fillText(stats.portraitTitle, POSTER_W / 2, y + 152);
  ctx.fillStyle = 'rgba(255,255,255,0.85)';
  ctx.font = '24px sans-serif';
  ctx.fillText(stats.tags.length ? `#${stats.tags.join('  #')}` : '#下周见', POSTER_W / 2, y + 190);

  // 底部
  ctx.fillStyle = 'rgba(255,255,255,0.75)';
  ctx.font = '24px sans-serif';
  ctx.fillText('规划明天，把握每一天 · 明日任务', POSTER_W / 2, 1290);

  Taro.canvasToTempFilePath({
    canvas,
    success: (res) => cb(res.tempFilePath),
    fail: () => Taro.hideLoading()
  });
}

// ---------- 页面 ----------
const CHAPTERS = 6;

const WeeklyPosterPage: React.FC = () => {
  const events = useScheduleStore((s) => s.events);
  const stats = useMemo(() => buildStats(events), [events]);

  const [current, setCurrent] = useState(0);
  const [visited, setVisited] = useState<Set<number>>(new Set([0]));
  const [posterPath, setPosterPath] = useState('');
  const [generating, setGenerating] = useState(false);
  const sysInfo = useRef(Taro.getSystemInfoSync());
  const fwStarted = useRef(false);
  const pageAlive = useRef(true);

  useReady(() => {
    pageAlive.current = true;
  });
  useEffect(() => () => {
    pageAlive.current = false;
  }, []);

  const onChange = (e: any) => {
    const idx = Number(e.detail.current);
    setCurrent(idx);
    setVisited((prev) => {
      if (prev.has(idx)) return prev;
      const next = new Set(prev);
      next.add(idx);
      return next;
    });
    if (idx === CHAPTERS - 1) startFireworks();
  };

  // ---------- 烟花粒子 ----------
  const startFireworks = () => {
    if (fwStarted.current) return;
    fwStarted.current = true;
    const query = Taro.createSelectorQuery();
    query.select('#fwCanvas').fields({ node: true, size: true }).exec((res) => {
      if (!res || !res[0] || !res[0].node || !pageAlive.current) return;
      const canvas = res[0].node;
      const ctx = canvas.getContext('2d');
      const dpr = sysInfo.current.pixelRatio || 2;
      const w = res[0].width;
      const h = res[0].height;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.scale(dpr, dpr);

      const colors = ['#fde047', '#f472b6', '#22d3ee', '#a78bfa', '#4ade80', '#fb923c'];
      interface P {
        x: number; y: number; vx: number; vy: number; life: number; color: string;
      }
      let particles: P[] = [];
      const spawn = () => {
        const cx = w * (0.2 + Math.random() * 0.6);
        const cy = h * (0.15 + Math.random() * 0.4);
        const color = colors[Math.floor(Math.random() * colors.length)];
        for (let i = 0; i < 36; i += 1) {
          const angle = (Math.PI * 2 * i) / 36 + Math.random() * 0.2;
          const speed = 1.5 + Math.random() * 3.5;
          particles.push({
            x: cx,
            y: cy,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed,
            life: 1,
            color
          });
        }
      };
      spawn();
      const timer = setInterval(spawn, 750);

      const tick = () => {
        if (!pageAlive.current) {
          clearInterval(timer);
          return;
        }
        ctx.clearRect(0, 0, w, h);
        particles = particles.filter((p) => p.life > 0);
        particles.forEach((p) => {
          p.x += p.vx;
          p.y += p.vy;
          p.vy += 0.045;
          p.vx *= 0.99;
          p.life -= 0.012;
          ctx.globalAlpha = Math.max(0, p.life);
          ctx.fillStyle = p.color;
          ctx.beginPath();
          ctx.arc(p.x, p.y, 3, 0, Math.PI * 2);
          ctx.fill();
        });
        ctx.globalAlpha = 1;
        const raf = canvas.requestAnimationFrame
          ? canvas.requestAnimationFrame(tick)
          : setTimeout(tick, 16);
        if (typeof raf === 'number' && !(canvas as any).requestAnimationFrame) {
          // setTimeout 分支无需取消，pageAlive 会终止循环
        }
      };
      tick();
    });
  };

  // ---------- 生成海报 ----------
  const handleGenerate = () => {
    if (generating) return;
    setGenerating(true);
    Taro.showLoading({ title: '海报生成中...', mask: true });
    const query = Taro.createSelectorQuery();
    query.select('#posterCanvas').fields({ node: true }).exec((res) => {
      if (!res || !res[0] || !res[0].node) {
        Taro.hideLoading();
        Taro.showToast({ title: '画布初始化失败，请重试', icon: 'none' });
        setGenerating(false);
        return;
      }
      drawPoster(res[0].node, stats, (path) => {
        Taro.hideLoading();
        setGenerating(false);
        setPosterPath(path);
      });
    });
  };

  const handleSave = () => {
    if (!posterPath) return;
    Taro.saveImageToPhotosAlbum({
      filePath: posterPath,
      success: () => Taro.showToast({ title: '已保存到相册', icon: 'success' }),
      fail: (err) => {
        if (/auth|deny/i.test(String(err.errMsg))) {
          Taro.showModal({
            title: '需要相册权限',
            content: '请在设置中允许保存图片到相册',
            confirmText: '去设置',
            success: (r) => r.confirm && Taro.openSetting()
          });
        }
      }
    });
  };

  useShareAppMessage(() => ({
    title: stats.empty
      ? '我的周度海报已生成，快来看看你的本周画像！'
      : `我本周完成了${stats.done}件事，达成「${stats.portraitTitle}」！来生成你的周度海报`,
    path: '/pages/weekly-poster/index'
  }));
  useShareTimeline(() => ({
    title: `我的周度海报：${stats.portraitTitle}（完成率${stats.rate}%）`
  }));

  const statusBar = sysInfo.current.statusBarHeight || 20;
  const maxDayTotal = Math.max(1, ...stats.daily.map((d) => d.total));

  return (
    <View className={styles.page}>
      {/* 流体渐变背景 + 漂浮光斑 */}
      <View className={styles.bgFluid} />
      <View className={`${styles.blob} ${styles.blob1}`} />
      <View className={`${styles.blob} ${styles.blob2}`} />
      <View className={`${styles.blob} ${styles.blob3}`} />

      {/* 自定义导航关闭按钮 */}
      <View className={styles.navBar} style={{ paddingTop: `${statusBar + 8}px` }}>
        <View className={styles.closeBtn} onClick={() => Taro.navigateBack()}>
          <Text className={styles.closeIcon}>✕</Text>
        </View>
      </View>

      <Swiper
        className={styles.swiper}
        vertical
        current={current}
        duration={420}
        easingFunction='easeInOutCubic'
        onChange={onChange}
      >
        {/* 第 1 幕：封面 */}
        <SwiperItem>
          <View className={styles.slide}>
            {visited.has(0) && (
              <View className={styles.coverInner}>
                <Text className={styles.coverKicker}>WEEKLY MEMORY</Text>
                <Text className={styles.coverTitle}>我的周度海报</Text>
                <View className={styles.coverBadge}>
                  <Text className={styles.coverBadgeText}>{stats.rangeText}</Text>
                </View>
                <Text className={styles.coverSub}>
                  这一周的努力，都被认真记下了 ✨
                </Text>
                <View className={styles.coverEmoji}>🗓️</View>
                <View className={styles.swipeHint}>
                  <Text className={styles.swipeHintText}>上滑开启回忆</Text>
                  <Text className={styles.swipeArrow}>⌃</Text>
                </View>
              </View>
            )}
          </View>
        </SwiperItem>

        {/* 第 2 幕：战绩 */}
        <SwiperItem>
          <View className={styles.slide}>
            {visited.has(1) && (
              <View className={styles.card}>
                <Text className={styles.chapterTag}>第 2 关 · 本周战绩</Text>
                <View className={styles.bigNumRow}>
                  <Text className={styles.bigNum}>{stats.done}</Text>
                  <Text className={styles.bigNumSub}>/{stats.total} 件</Text>
                </View>
                <Text className={styles.cardSub}>本周完成的任务</Text>
                <View className={styles.rateRing}>
                  <Text className={styles.rateRingNum}>{stats.rate}%</Text>
                  <Text className={styles.rateRingLabel}>完成率</Text>
                </View>
                <View className={styles.statChips}>
                  <View className={styles.statChip}>
                    <Text className={styles.statChipEmoji}>🔥</Text>
                    <Text className={styles.statChipText}>连续 {stats.streak} 天</Text>
                  </View>
                  <View className={styles.statChip}>
                    <Text className={styles.statChipEmoji}>🌙</Text>
                    <Text className={styles.statChipText}>晚间 {stats.eveningDone} 件</Text>
                  </View>
                  <View className={styles.statChip}>
                    <Text className={styles.statChipEmoji}>☀️</Text>
                    <Text className={styles.statChipText}>晨间 {stats.morningDone} 件</Text>
                  </View>
                </View>
              </View>
            )}
          </View>
        </SwiperItem>

        {/* 第 3 幕：模块分布（数据可视化） */}
        <SwiperItem>
          <View className={styles.slide}>
            {visited.has(2) && (
              <View className={styles.card}>
                <Text className={styles.chapterTag}>第 3 关 · 精力去哪了</Text>
                <Text className={styles.chartTitle}>本周投入分布</Text>
                <View className={styles.bars}>
                  {stats.categoryStats.length === 0 && (
                    <Text className={styles.emptyText}>本周还没有任务记录{'\n'}下周一起把排期拉满 💪</Text>
                  )}
                  {stats.categoryStats.map((c, i) => (
                    <View key={c.name} className={styles.barRow}>
                      <Text className={styles.barEmoji}>{c.emoji}</Text>
                      <View className={styles.barTrack}>
                        <View
                          className={styles.barFill}
                          style={{
                            width: `${Math.max(6, (c.total / Math.max(1, ...stats.categoryStats.map((x) => x.total))) * 100)}%`,
                            background: c.color,
                            animationDelay: `${i * 0.12}s`
                          }}
                        />
                      </View>
                      <Text className={styles.barNum}>{c.done}/{c.total}</Text>
                    </View>
                  ))}
                </View>
                <View className={styles.weekStrip}>
                  {stats.daily.map((d) => (
                    <View key={d.key} className={styles.weekCol}>
                      <View className={styles.weekBarTrack}>
                        <View
                          className={d.done > 0 ? styles.weekBarDone : styles.weekBarNone}
                          style={{ height: `${Math.max(4, (d.total / maxDayTotal) * 100)}%` }}
                        />
                      </View>
                      <Text className={styles.weekLabel}>{d.label}</Text>
                    </View>
                  ))}
                </View>
              </View>
            )}
          </View>
        </SwiperItem>

        {/* 第 4 幕：回忆叙事 */}
        <SwiperItem>
          <View className={styles.slide}>
            {visited.has(3) && (
              <View className={styles.card}>
                <Text className={styles.chapterTag}>第 4 关 · 高光时刻</Text>
                <View className={styles.memoryBlock}>
                  <Text className={styles.memoryEmoji}>🏆</Text>
                  <Text className={styles.memoryLabel}>最高产的一天</Text>
                  <Text className={styles.memoryValue}>
                    {stats.bestDayCount > 0 ? `${stats.bestDayText} · ${stats.bestDayCount} 件` : '本周还未点亮'}
                  </Text>
                </View>
                <View className={styles.memoryBlock}>
                  <Text className={styles.memoryEmoji}>🌅</Text>
                  <Text className={styles.memoryLabel}>第一个点亮的任务</Text>
                  <Text className={styles.memoryValueSmall}>
                    {stats.firstTaskTitle || '待下周解锁'}
                  </Text>
                </View>
                <View className={styles.memoryBlock}>
                  <Text className={styles.memoryEmoji}>🎯</Text>
                  <Text className={styles.memoryLabel}>周末也在行动</Text>
                  <Text className={styles.memoryValue}>{stats.weekendDone} 件</Text>
                </View>
                <Text className={styles.storyText}>
                  {stats.empty
                    ? '空白的一周也是在蓄力，故事的下一章由你来写。'
                    : '每一个被划掉的待办，都是你给生活盖的章。'}
                </Text>
              </View>
            )}
          </View>
        </SwiperItem>

        {/* 第 5 幕：趣味标签 + 年度画像 */}
        <SwiperItem>
          <View className={styles.slide}>
            {visited.has(4) && (
              <View className={styles.card}>
                <Text className={styles.chapterTag}>第 5 关 · 你的本周画像</Text>
                <View className={styles.portraitAvatar}>
                  <Text className={styles.portraitEmoji}>{stats.portraitEmoji}</Text>
                </View>
                <Text className={styles.portraitTitle}>{stats.portraitTitle}</Text>
                <View className={styles.tagCloud}>
                  {stats.tags.map((t) => (
                    <View key={t} className={styles.tag}>
                      <Text className={styles.tagText}># {t}</Text>
                    </View>
                  ))}
                </View>
                <Text className={styles.portraitDesc}>{stats.portraitDesc}</Text>
              </View>
            )}
          </View>
        </SwiperItem>

        {/* 第 6 幕：终幕 + 分享海报 */}
        <SwiperItem>
          <View className={styles.slide}>
            <Canvas type='2d' id='fwCanvas' className={styles.fwCanvas} />
            {visited.has(5) && (
              <View className={styles.finalInner}>
                <Text className={styles.finalTitle}>本周杀青 🎬</Text>
                <Text className={styles.finalSub}>生成你的专属海报，把这一周晒出去</Text>
                <View className={styles.finalBtns}>
                  <Button className={styles.primaryBtn} onClick={handleGenerate} loading={generating}>
                    生成周度海报
                  </Button>
                  <Button className={styles.shareBtn} openType='share'>
                    一键转发好友
                  </Button>
                </View>
                <Text className={styles.finalTip}>转发给朋友 · 分享朋友圈 · 保存海报</Text>
              </View>
            )}
          </View>
        </SwiperItem>
      </Swiper>

      {/* 分页指示器 */}
      <View className={styles.dots}>
        {Array.from({ length: CHAPTERS }, (_, i) => (
          <View key={i} className={`${styles.dot} ${i === current ? styles.dotActive : ''}`} />
        ))}
      </View>

      {/* 隐藏的海报画布（离屏渲染） */}
      <Canvas
        type='2d'
        id='posterCanvas'
        style={{
          position: 'fixed',
          left: '-2000px',
          top: 0,
          width: `${POSTER_W / 2}px`,
          height: `${POSTER_H / 2}px`
        }}
      />

      {/* 海报预览弹层 */}
      {posterPath && (
        <View className={styles.posterMask} onClick={() => setPosterPath('')}>
          <View className={styles.posterPanel} onClick={(e) => e.stopPropagation()}>
            <Image className={styles.posterImg} src={posterPath} mode='widthFix' showMenuByLongpress />
            <View className={styles.posterActions}>
              <Button className={styles.primaryBtn} onClick={handleSave}>
                保存到相册
              </Button>
              <Button className={styles.shareBtn} openType='share'>
                转发给好友
              </Button>
            </View>
            <Text className={styles.posterClose} onClick={() => setPosterPath('')}>
              关闭
            </Text>
          </View>
        </View>
      )}
    </View>
  );
};

export default WeeklyPosterPage;
