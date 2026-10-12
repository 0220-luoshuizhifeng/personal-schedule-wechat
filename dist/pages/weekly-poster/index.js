"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/weekly-poster/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/weekly-poster/index!./src/pages/weekly-poster/index.tsx":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/weekly-poster/index!./src/pages/weekly-poster/index.tsx ***!
  \********************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var C_Users_14585_Desktop_Learning_undergraduateToTwo_TRAE_s_work_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var C_Users_14585_Desktop_Learning_undergraduateToTwo_TRAE_s_work_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var C_Users_14585_Desktop_Learning_undergraduateToTwo_TRAE_s_work_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_scheduleStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/store/scheduleStore */ "./src/store/scheduleStore.ts");
/* harmony import */ var _constants_categories__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/constants/categories */ "./src/constants/categories.ts");
/* harmony import */ var _utils_datetime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/utils/datetime */ "./src/utils/datetime.ts");
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index.module.scss */ "./src/pages/weekly-poster/index.module.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");












// ---------- 本周数据计算 ----------

function buildStats(events) {
  var _topCat$name;
  var keys = (0,_utils_datetime__WEBPACK_IMPORTED_MODULE_5__.weekDates)(dayjs__WEBPACK_IMPORTED_MODULE_2___default()());
  var start = keys[0];
  var end = keys[6];
  var occs = (0,_utils_datetime__WEBPACK_IMPORTED_MODULE_5__.expandAll)(events, start, end);
  var done = occs.filter(function (o) {
    return o.done;
  });
  var total = occs.length;
  var doneCount = done.length;
  var rate = total ? Math.round(doneCount / total * 100) : 0;
  var categoryStats = _constants_categories__WEBPACK_IMPORTED_MODULE_4__.CATEGORIES.map(function (c) {
    var inCat = occs.filter(function (o) {
      return o.event.categoryId === c.id;
    });
    return {
      id: c.id,
      name: c.name,
      emoji: c.emoji,
      color: c.color,
      total: inCat.length,
      done: inCat.filter(function (o) {
        return o.done;
      }).length
    };
  }).filter(function (c) {
    return c.total > 0;
  });
  var dayLabel = ['一', '二', '三', '四', '五', '六', '日'];
  var daily = keys.map(function (key, i) {
    var inDay = occs.filter(function (o) {
      return o.dateKey === key;
    });
    return {
      key: key,
      label: dayLabel[i],
      done: inDay.filter(function (o) {
        return o.done;
      }).length,
      total: inDay.length
    };
  });
  var best = daily.reduce(function (a, b) {
    return b.done > a.done ? b : a;
  }, daily[0]);

  // 连续完成天数（与「我的」页同口径）
  var streak = 0;
  for (var i = 0; i < 60; i += 1) {
    var key = dayjs__WEBPACK_IMPORTED_MODULE_2___default()().subtract(i, 'day').format(_utils_datetime__WEBPACK_IMPORTED_MODULE_5__.DATE_FMT);
    var d = (0,_utils_datetime__WEBPACK_IMPORTED_MODULE_5__.expandAll)(events, key, key);
    if (d.length === 0) break;
    if (d.every(function (o) {
      return o.done;
    })) streak += 1;else break;
  }
  var hourOf = function hourOf(o) {
    return dayjs__WEBPACK_IMPORTED_MODULE_2___default()(o.start, 'YYYY-MM-DD HH:mm').hour();
  };
  var morningDone = done.filter(function (o) {
    return hourOf(o) < 12;
  }).length;
  var eveningDone = done.filter(function (o) {
    return hourOf(o) >= 19;
  }).length;
  var weekendDone = done.filter(function (o) {
    var d = dayjs__WEBPACK_IMPORTED_MODULE_2___default()(o.dateKey, _utils_datetime__WEBPACK_IMPORTED_MODULE_5__.DATE_FMT).day();
    return d === 0 || d === 6;
  }).length;
  var firstTask = (0,C_Users_14585_Desktop_Learning_undergraduateToTwo_TRAE_s_work_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_8__["default"])(done).sort(function (a, b) {
    return a.start.localeCompare(b.start);
  })[0];

  // 趣味标签
  var tags = [];
  if (rate === 100 && total >= 3) tags.push('全勤王者');
  if (streak >= 3) tags.push("\u8FDE\u7EED\u6253\u5361".concat(streak, "\u5929"));
  if (morningDone >= 3) tags.push('早起鸟本鸟');
  if (eveningDone >= 3) tags.push('夜行生物');
  if (weekendDone >= 3) tags.push('周末战神');
  if (categoryStats.length >= 3) tags.push('斜杠青年');
  if (best && best.done >= 4) tags.push('单日暴走');
  if (doneCount > 0 && tags.length === 0) tags.push('稳步上分');
  if (total === 0) tags.push('本周放空', '蓄力中');

  // 用户画像
  var topCat = (0,C_Users_14585_Desktop_Learning_undergraduateToTwo_TRAE_s_work_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_8__["default"])(categoryStats).sort(function (a, b) {
    return b.done - a.done;
  })[0];
  var catAdj = {
    knowledge: {
      emoji: '📚',
      title: '知识捕手'
    },
    food: {
      emoji: '🍜',
      title: '人间美食雷达'
    },
    sport: {
      emoji: '🏃',
      title: '燃脂永动机'
    },
    work: {
      emoji: '💼',
      title: '卷王本王'
    },
    personal: {
      emoji: '🏠',
      title: '生活品鉴家'
    }
  };
  var portraitEmoji = '🛋️';
  var portraitTitle = '蓄力中の潜力股';
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
  var catMeta = topCat && topCat.done > 0 ? catAdj[topCat.id] : null;
  return {
    rangeText: "".concat(dayjs__WEBPACK_IMPORTED_MODULE_2___default()(start).format('M月D日'), " - ").concat(dayjs__WEBPACK_IMPORTED_MODULE_2___default()(end).format('M月D日')),
    total: total,
    done: doneCount,
    rate: rate,
    streak: streak,
    categoryStats: categoryStats.map(function (c) {
      return (0,C_Users_14585_Desktop_Learning_undergraduateToTwo_TRAE_s_work_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_9__["default"])({}, c);
    }),
    daily: daily,
    bestDayText: best && best.done > 0 ? (0,_utils_datetime__WEBPACK_IMPORTED_MODULE_5__.friendlyDate)(best.key) : '',
    bestDayCount: best ? best.done : 0,
    firstTaskTitle: firstTask ? firstTask.event.title : '',
    morningDone: morningDone,
    eveningDone: eveningDone,
    weekendDone: weekendDone,
    tags: tags,
    portraitEmoji: catMeta && rate >= 70 ? catMeta.emoji : portraitEmoji,
    portraitTitle: catMeta && rate >= 70 ? catMeta.title : portraitTitle,
    portraitDesc: total === 0 ? '这周日程空空如也，下周一起把flag立起来？' : "\u672C\u5468\u5728\u300C".concat((_topCat$name = topCat === null || topCat === void 0 ? void 0 : topCat.name) !== null && _topCat$name !== void 0 ? _topCat$name : '日常', "\u300D\u8D5B\u9053\u6700\u6295\u5165\uFF0C\u5B8C\u6210\u7387 ").concat(rate, "%\uFF0C").concat(rate >= 70 ? '这波操作很能打' : '继续上分指日可待', "\uFF01"),
    empty: total === 0
  };
}

// ---------- 海报绘制 ----------
var POSTER_W = 750;
var POSTER_H = 1334;
function roundRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}
function drawPoster(canvas, stats, cb) {
  var ctx = canvas.getContext('2d');
  var dpr = 2;
  canvas.width = POSTER_W * dpr;
  canvas.height = POSTER_H * dpr;
  ctx.scale(dpr, dpr);

  // 流体渐变背景
  var bg = ctx.createLinearGradient(0, 0, 0, POSTER_H);
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
  ctx.fillText("/ ".concat(stats.total, " \u4EF6"), 470, 430);
  ctx.fillStyle = '#4b5563';
  ctx.font = '28px sans-serif';
  ctx.fillText("\u5B8C\u6210\u7387 ".concat(stats.rate, "%"), POSTER_W / 2, 510);

  // 完成率条
  var barX = 130;
  var barY = 560;
  var barW = 490;
  roundRect(ctx, barX, barY, barW, 26, 13);
  ctx.fillStyle = '#ede9fe';
  ctx.fill();
  if (stats.rate > 0) {
    var g = ctx.createLinearGradient(barX, 0, barX + barW, 0);
    g.addColorStop(0, '#7c3aed');
    g.addColorStop(1, '#06b6d4');
    roundRect(ctx, barX, barY, Math.max(26, barW * stats.rate / 100), 26, 13);
    ctx.fillStyle = g;
    ctx.fill();
  }
  ctx.fillStyle = '#9ca3af';
  ctx.font = '24px sans-serif';
  ctx.fillText("\u8FDE\u7EED\u6253\u5361 ".concat(stats.streak, " \u5929"), POSTER_W / 2, 635);

  // 模块分布
  var y = 730;
  ctx.textAlign = 'left';
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 34px sans-serif';
  ctx.fillText('🎯 本周投入', 90, y);
  y += 28;
  var topCats = stats.categoryStats.slice(0, 3);
  (topCats.length ? topCats : []).forEach(function (c) {
    y += 56;
    ctx.fillStyle = 'rgba(255,255,255,0.85)';
    ctx.font = '26px sans-serif';
    ctx.fillText("".concat(c.emoji, " ").concat(c.name), 90, y);
    ctx.textAlign = 'right';
    ctx.fillText("".concat(c.done, "/").concat(c.total), 660, y);
    // 条
    roundRect(ctx, 90, y + 16, 570, 16, 8);
    ctx.fillStyle = 'rgba(255,255,255,0.25)';
    ctx.fill();
    if (c.total > 0) {
      roundRect(ctx, 90, y + 16, Math.max(16, 570 * c.done / c.total), 16, 8);
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
  ctx.fillText(stats.tags.length ? "#".concat(stats.tags.join('  #')) : '#下周见', POSTER_W / 2, y + 190);

  // 底部
  ctx.fillStyle = 'rgba(255,255,255,0.75)';
  ctx.font = '24px sans-serif';
  ctx.fillText('规划明天，把握每一天 · 明日任务', POSTER_W / 2, 1290);
  _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().canvasToTempFilePath({
    canvas: canvas,
    success: function success(res) {
      return cb(res.tempFilePath);
    },
    fail: function fail() {
      return _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().hideLoading();
    }
  });
}

// ---------- 页面 ----------
var CHAPTERS = 6;
var WeeklyPosterPage = function WeeklyPosterPage() {
  var events = (0,_store_scheduleStore__WEBPACK_IMPORTED_MODULE_3__.useScheduleStore)(function (s) {
    return s.events;
  });
  var stats = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return buildStats(events);
  }, [events]);
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState2 = (0,C_Users_14585_Desktop_Learning_undergraduateToTwo_TRAE_s_work_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_10__["default"])(_useState, 2),
    current = _useState2[0],
    setCurrent = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(new Set([0])),
    _useState4 = (0,C_Users_14585_Desktop_Learning_undergraduateToTwo_TRAE_s_work_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_10__["default"])(_useState3, 2),
    visited = _useState4[0],
    setVisited = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState6 = (0,C_Users_14585_Desktop_Learning_undergraduateToTwo_TRAE_s_work_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_10__["default"])(_useState5, 2),
    posterPath = _useState6[0],
    setPosterPath = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState8 = (0,C_Users_14585_Desktop_Learning_undergraduateToTwo_TRAE_s_work_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_10__["default"])(_useState7, 2),
    generating = _useState8[0],
    setGenerating = _useState8[1];
  var sysInfo = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().getSystemInfoSync());
  var fwStarted = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  var pageAlive = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(true);
  (0,_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__.useReady)(function () {
    pageAlive.current = true;
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    return function () {
      pageAlive.current = false;
    };
  }, []);
  var onChange = function onChange(e) {
    var idx = Number(e.detail.current);
    setCurrent(idx);
    setVisited(function (prev) {
      if (prev.has(idx)) return prev;
      var next = new Set(prev);
      next.add(idx);
      return next;
    });
    if (idx === CHAPTERS - 1) startFireworks();
  };

  // ---------- 烟花粒子 ----------
  var startFireworks = function startFireworks() {
    if (fwStarted.current) return;
    fwStarted.current = true;
    var query = _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().createSelectorQuery();
    query.select('#fwCanvas').fields({
      node: true,
      size: true
    }).exec(function (res) {
      if (!res || !res[0] || !res[0].node || !pageAlive.current) return;
      var canvas = res[0].node;
      var ctx = canvas.getContext('2d');
      var dpr = sysInfo.current.pixelRatio || 2;
      var w = res[0].width;
      var h = res[0].height;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.scale(dpr, dpr);
      var colors = ['#fde047', '#f472b6', '#22d3ee', '#a78bfa', '#4ade80', '#fb923c'];
      var particles = [];
      var spawn = function spawn() {
        var cx = w * (0.2 + Math.random() * 0.6);
        var cy = h * (0.15 + Math.random() * 0.4);
        var color = colors[Math.floor(Math.random() * colors.length)];
        for (var i = 0; i < 36; i += 1) {
          var angle = Math.PI * 2 * i / 36 + Math.random() * 0.2;
          var speed = 1.5 + Math.random() * 3.5;
          particles.push({
            x: cx,
            y: cy,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed,
            life: 1,
            color: color
          });
        }
      };
      spawn();
      var timer = setInterval(spawn, 750);
      var _tick = function tick() {
        if (!pageAlive.current) {
          clearInterval(timer);
          return;
        }
        ctx.clearRect(0, 0, w, h);
        particles = particles.filter(function (p) {
          return p.life > 0;
        });
        particles.forEach(function (p) {
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
        var raf = canvas.requestAnimationFrame ? canvas.requestAnimationFrame(_tick) : setTimeout(_tick, 16);
        if (typeof raf === 'number' && !canvas.requestAnimationFrame) {
          // setTimeout 分支无需取消，pageAlive 会终止循环
        }
      };
      _tick();
    });
  };

  // ---------- 生成海报 ----------
  var handleGenerate = function handleGenerate() {
    if (generating) return;
    setGenerating(true);
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showLoading({
      title: '海报生成中...',
      mask: true
    });
    var query = _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().createSelectorQuery();
    query.select('#posterCanvas').fields({
      node: true
    }).exec(function (res) {
      if (!res || !res[0] || !res[0].node) {
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().hideLoading();
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
          title: '画布初始化失败，请重试',
          icon: 'none'
        });
        setGenerating(false);
        return;
      }
      drawPoster(res[0].node, stats, function (path) {
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().hideLoading();
        setGenerating(false);
        setPosterPath(path);
      });
    });
  };
  var handleSave = function handleSave() {
    if (!posterPath) return;
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().saveImageToPhotosAlbum({
      filePath: posterPath,
      success: function success() {
        return _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
          title: '已保存到相册',
          icon: 'success'
        });
      },
      fail: function fail(err) {
        if (/auth|deny/i.test(String(err.errMsg))) {
          _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showModal({
            title: '需要相册权限',
            content: '请在设置中允许保存图片到相册',
            confirmText: '去设置',
            success: function success(r) {
              return r.confirm && _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().openSetting();
            }
          });
        }
      }
    });
  };
  (0,_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__.useShareAppMessage)(function () {
    return {
      title: stats.empty ? '我的周度海报已生成，快来看看你的本周画像！' : "\u6211\u672C\u5468\u5B8C\u6210\u4E86".concat(stats.done, "\u4EF6\u4E8B\uFF0C\u8FBE\u6210\u300C").concat(stats.portraitTitle, "\u300D\uFF01\u6765\u751F\u6210\u4F60\u7684\u5468\u5EA6\u6D77\u62A5"),
      path: '/pages/weekly-poster/index'
    };
  });
  (0,_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__.useShareTimeline)(function () {
    return {
      title: "\u6211\u7684\u5468\u5EA6\u6D77\u62A5\uFF1A".concat(stats.portraitTitle, "\uFF08\u5B8C\u6210\u7387").concat(stats.rate, "%\uFF09")
    };
  });
  var statusBar = sysInfo.current.statusBarHeight || 20;
  var maxDayTotal = Math.max.apply(Math, [1].concat((0,C_Users_14585_Desktop_Learning_undergraduateToTwo_TRAE_s_work_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_8__["default"])(stats.daily.map(function (d) {
    return d.total;
  }))));
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].page,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
      className: _index_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].bgFluid
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
      className: "".concat(_index_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].blob, " ").concat(_index_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].blob1)
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
      className: "".concat(_index_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].blob, " ").concat(_index_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].blob2)
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
      className: "".concat(_index_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].blob, " ").concat(_index_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].blob3)
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
      className: _index_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].navBar,
      style: {
        paddingTop: "".concat(statusBar + 8, "px")
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
        className: _index_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].closeBtn,
        onClick: function onClick() {
          return _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().navigateBack();
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
          className: _index_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].closeIcon,
          children: "\u2715"
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Swiper, {
      className: _index_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].swiper,
      vertical: true,
      current: current,
      duration: 420,
      easingFunction: "easeInOutCubic",
      onChange: onChange,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.SwiperItem, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
          className: _index_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].slide,
          children: visited.has(0) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
            className: _index_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].coverInner,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
              className: _index_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].coverKicker,
              children: "WEEKLY MEMORY"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
              className: _index_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].coverTitle,
              children: "\u6211\u7684\u5468\u5EA6\u6D77\u62A5"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
              className: _index_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].coverBadge,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
                className: _index_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].coverBadgeText,
                children: stats.rangeText
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
              className: _index_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].coverSub,
              children: "\u8FD9\u4E00\u5468\u7684\u52AA\u529B\uFF0C\u90FD\u88AB\u8BA4\u771F\u8BB0\u4E0B\u4E86 \u2728"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
              className: _index_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].coverEmoji,
              children: "\uD83D\uDDD3\uFE0F"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
              className: _index_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].swipeHint,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
                className: _index_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].swipeHintText,
                children: "\u4E0A\u6ED1\u5F00\u542F\u56DE\u5FC6"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
                className: _index_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].swipeArrow,
                children: "\u2303"
              })]
            })]
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.SwiperItem, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
          className: _index_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].slide,
          children: visited.has(1) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
            className: _index_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].card,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
              className: _index_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].chapterTag,
              children: "\u7B2C 2 \u5173 \xB7 \u672C\u5468\u6218\u7EE9"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
              className: _index_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].bigNumRow,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
                className: _index_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].bigNum,
                children: stats.done
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
                className: _index_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].bigNumSub,
                children: ["/", stats.total, " \u4EF6"]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
              className: _index_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].cardSub,
              children: "\u672C\u5468\u5B8C\u6210\u7684\u4EFB\u52A1"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
              className: _index_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].rateRing,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
                className: _index_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].rateRingNum,
                children: [stats.rate, "%"]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
                className: _index_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].rateRingLabel,
                children: "\u5B8C\u6210\u7387"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
              className: _index_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].statChips,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
                className: _index_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].statChip,
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
                  className: _index_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].statChipEmoji,
                  children: "\uD83D\uDD25"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
                  className: _index_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].statChipText,
                  children: ["\u8FDE\u7EED ", stats.streak, " \u5929"]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
                className: _index_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].statChip,
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
                  className: _index_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].statChipEmoji,
                  children: "\uD83C\uDF19"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
                  className: _index_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].statChipText,
                  children: ["\u665A\u95F4 ", stats.eveningDone, " \u4EF6"]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
                className: _index_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].statChip,
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
                  className: _index_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].statChipEmoji,
                  children: "\u2600\uFE0F"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
                  className: _index_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].statChipText,
                  children: ["\u6668\u95F4 ", stats.morningDone, " \u4EF6"]
                })]
              })]
            })]
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.SwiperItem, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
          className: _index_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].slide,
          children: visited.has(2) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
            className: _index_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].card,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
              className: _index_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].chapterTag,
              children: "\u7B2C 3 \u5173 \xB7 \u7CBE\u529B\u53BB\u54EA\u4E86"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
              className: _index_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].chartTitle,
              children: "\u672C\u5468\u6295\u5165\u5206\u5E03"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
              className: _index_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].bars,
              children: [stats.categoryStats.length === 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
                className: _index_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].emptyText,
                children: ["\u672C\u5468\u8FD8\u6CA1\u6709\u4EFB\u52A1\u8BB0\u5F55", '\n', "\u4E0B\u5468\u4E00\u8D77\u628A\u6392\u671F\u62C9\u6EE1 \uD83D\uDCAA"]
              }), stats.categoryStats.map(function (c, i) {
                return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
                  className: _index_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].barRow,
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
                    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].barEmoji,
                    children: c.emoji
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
                    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].barTrack,
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
                      className: _index_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].barFill,
                      style: {
                        width: "".concat(Math.max(6, c.total / Math.max.apply(Math, [1].concat((0,C_Users_14585_Desktop_Learning_undergraduateToTwo_TRAE_s_work_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_8__["default"])(stats.categoryStats.map(function (x) {
                          return x.total;
                        })))) * 100), "%"),
                        background: c.color,
                        animationDelay: "".concat(i * 0.12, "s")
                      }
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
                    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].barNum,
                    children: [c.done, "/", c.total]
                  })]
                }, c.name);
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
              className: _index_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].weekStrip,
              children: stats.daily.map(function (d) {
                return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
                  className: _index_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].weekCol,
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
                    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].weekBarTrack,
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
                      className: d.done > 0 ? _index_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].weekBarDone : _index_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].weekBarNone,
                      style: {
                        height: "".concat(Math.max(4, d.total / maxDayTotal * 100), "%")
                      }
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
                    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].weekLabel,
                    children: d.label
                  })]
                }, d.key);
              })
            })]
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.SwiperItem, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
          className: _index_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].slide,
          children: visited.has(3) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
            className: _index_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].card,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
              className: _index_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].chapterTag,
              children: "\u7B2C 4 \u5173 \xB7 \u9AD8\u5149\u65F6\u523B"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
              className: _index_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].memoryBlock,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
                className: _index_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].memoryEmoji,
                children: "\uD83C\uDFC6"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
                className: _index_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].memoryLabel,
                children: "\u6700\u9AD8\u4EA7\u7684\u4E00\u5929"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
                className: _index_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].memoryValue,
                children: stats.bestDayCount > 0 ? "".concat(stats.bestDayText, " \xB7 ").concat(stats.bestDayCount, " \u4EF6") : '本周还未点亮'
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
              className: _index_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].memoryBlock,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
                className: _index_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].memoryEmoji,
                children: "\uD83C\uDF05"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
                className: _index_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].memoryLabel,
                children: "\u7B2C\u4E00\u4E2A\u70B9\u4EAE\u7684\u4EFB\u52A1"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
                className: _index_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].memoryValueSmall,
                children: stats.firstTaskTitle || '待下周解锁'
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
              className: _index_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].memoryBlock,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
                className: _index_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].memoryEmoji,
                children: "\uD83C\uDFAF"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
                className: _index_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].memoryLabel,
                children: "\u5468\u672B\u4E5F\u5728\u884C\u52A8"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
                className: _index_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].memoryValue,
                children: [stats.weekendDone, " \u4EF6"]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
              className: _index_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].storyText,
              children: stats.empty ? '空白的一周也是在蓄力，故事的下一章由你来写。' : '每一个被划掉的待办，都是你给生活盖的章。'
            })]
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.SwiperItem, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
          className: _index_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].slide,
          children: visited.has(4) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
            className: _index_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].card,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
              className: _index_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].chapterTag,
              children: "\u7B2C 5 \u5173 \xB7 \u4F60\u7684\u672C\u5468\u753B\u50CF"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
              className: _index_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].portraitAvatar,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
                className: _index_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].portraitEmoji,
                children: stats.portraitEmoji
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
              className: _index_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].portraitTitle,
              children: stats.portraitTitle
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
              className: _index_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].tagCloud,
              children: stats.tags.map(function (t) {
                return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
                  className: _index_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].tag,
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
                    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].tagText,
                    children: ["# ", t]
                  })
                }, t);
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
              className: _index_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].portraitDesc,
              children: stats.portraitDesc
            })]
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.SwiperItem, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
          className: _index_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].slide,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Canvas, {
            type: "2d",
            id: "fwCanvas",
            className: _index_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].fwCanvas
          }), visited.has(5) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
            className: _index_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].finalInner,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
              className: _index_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].finalTitle,
              children: "\u672C\u5468\u6740\u9752 \uD83C\uDFAC"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
              className: _index_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].finalSub,
              children: "\u751F\u6210\u4F60\u7684\u4E13\u5C5E\u6D77\u62A5\uFF0C\u628A\u8FD9\u4E00\u5468\u6652\u51FA\u53BB"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
              className: _index_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].finalBtns,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Button, {
                className: _index_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].primaryBtn,
                onClick: handleGenerate,
                loading: generating,
                children: "\u751F\u6210\u5468\u5EA6\u6D77\u62A5"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Button, {
                className: _index_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].shareBtn,
                openType: "share",
                children: "\u4E00\u952E\u8F6C\u53D1\u597D\u53CB"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
              className: _index_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].finalTip,
              children: "\u8F6C\u53D1\u7ED9\u670B\u53CB \xB7 \u5206\u4EAB\u670B\u53CB\u5708 \xB7 \u4FDD\u5B58\u6D77\u62A5"
            })]
          })]
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
      className: _index_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].dots,
      children: Array.from({
        length: CHAPTERS
      }, function (_, i) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
          className: "".concat(_index_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].dot, " ").concat(i === current ? _index_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].dotActive : '')
        }, i);
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Canvas, {
      type: "2d",
      id: "posterCanvas",
      style: {
        position: 'fixed',
        left: '-2000px',
        top: 0,
        width: "".concat(POSTER_W / 2, "px"),
        height: "".concat(POSTER_H / 2, "px")
      }
    }), posterPath && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
      className: _index_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].posterMask,
      onClick: function onClick() {
        return setPosterPath('');
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
        className: _index_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].posterPanel,
        onClick: function onClick(e) {
          return e.stopPropagation();
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Image, {
          className: _index_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].posterImg,
          src: posterPath,
          mode: "widthFix",
          showMenuByLongpress: true
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
          className: _index_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].posterActions,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Button, {
            className: _index_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].primaryBtn,
            onClick: handleSave,
            children: "\u4FDD\u5B58\u5230\u76F8\u518C"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Button, {
            className: _index_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].shareBtn,
            openType: "share",
            children: "\u8F6C\u53D1\u7ED9\u597D\u53CB"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
          className: _index_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].posterClose,
          onClick: function onClick() {
            return setPosterPath('');
          },
          children: "\u5173\u95ED"
        })]
      })
    })]
  });
};
/* harmony default export */ __webpack_exports__["default"] = (WeeklyPosterPage);

/***/ }),

/***/ "./src/pages/weekly-poster/index.tsx":
/*!*******************************************!*\
  !*** ./src/pages/weekly-poster/index.tsx ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/dsl/common.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_weekly_poster_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !!../../../node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/weekly-poster/index!./index.tsx */ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/weekly-poster/index!./src/pages/weekly-poster/index.tsx");


var config = {"navigationStyle":"custom","disableScroll":true,"backgroundColor":"#1e1b4b","enableShareAppMessage":true,"enableShareTimeline":true};
_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_weekly_poster_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"].enableShareTimeline = true
_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_weekly_poster_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"].enableShareAppMessage = true

var taroOption = (0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.createPageConfig)(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_weekly_poster_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"], 'pages/weekly-poster/index', {root:{cn:[]}}, config || {})
if (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_weekly_poster_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"] && _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_weekly_poster_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"].behaviors) {
  taroOption.behaviors = (taroOption.behaviors || []).concat(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_weekly_poster_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"].behaviors)
}
var inst = Page(taroOption)



/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_weekly_poster_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./src/pages/weekly-poster/index.module.scss":
/*!***************************************************!*\
  !*** ./src/pages/weekly-poster/index.module.scss ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__) {

// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["default"] = ({"page":"index-module__page___EgBB6","bgFluid":"index-module__bgFluid___jx6Sk","fluidMove":"index-module__fluidMove___EUSsK","blob":"index-module__blob___Gbz5e","blobFloat":"index-module__blobFloat___CJBWO","blob1":"index-module__blob1___NDTXY","blob2":"index-module__blob2___FnpWL","blob3":"index-module__blob3___Aj_6G","navBar":"index-module__navBar___b0V0q","closeBtn":"index-module__closeBtn___pbeXS","closeIcon":"index-module__closeIcon___DyJgK","swiper":"index-module__swiper___o7iqm","slide":"index-module__slide___DKD5z","coverInner":"index-module__coverInner___POKH5","popIn":"index-module__popIn___bIFIs","coverKicker":"index-module__coverKicker____Mkc5","coverTitle":"index-module__coverTitle___KmIjO","coverBadge":"index-module__coverBadge___U0P_W","coverBadgeText":"index-module__coverBadgeText___mJcYy","coverSub":"index-module__coverSub___PHkXl","coverEmoji":"index-module__coverEmoji___dKwRV","emojiBob":"index-module__emojiBob___Orz9x","swipeHint":"index-module__swipeHint___atHZ8","swipeHintText":"index-module__swipeHintText___QjpJT","swipeArrow":"index-module__swipeArrow___dKUjD","arrowUp":"index-module__arrowUp___bqWkt","card":"index-module__card___XupnW","chapterTag":"index-module__chapterTag___mvpgI","bigNumRow":"index-module__bigNumRow___AnPN4","bigNum":"index-module__bigNum___l4CSK","bigNumSub":"index-module__bigNumSub___j2u6J","cardSub":"index-module__cardSub____tycV","rateRing":"index-module__rateRing___c6nyP","spinRing":"index-module__spinRing___qt0j1","rateRingNum":"index-module__rateRingNum___k8Gl2","rateRingLabel":"index-module__rateRingLabel___x3VdC","statChips":"index-module__statChips___PYljr","statChip":"index-module__statChip___WeHnM","statChipEmoji":"index-module__statChipEmoji___uBmgT","statChipText":"index-module__statChipText___eGFgo","chartTitle":"index-module__chartTitle___Ni0ef","bars":"index-module__bars___ksjQl","emptyText":"index-module__emptyText___LVHu3","barRow":"index-module__barRow___VHz9s","barEmoji":"index-module__barEmoji___zEjO7","barTrack":"index-module__barTrack___gammi","barFill":"index-module__barFill___HA83V","barGrow":"index-module__barGrow___mx0Oc","barNum":"index-module__barNum___BiY8L","weekStrip":"index-module__weekStrip___VPKYo","weekCol":"index-module__weekCol___XQsHq","weekBarTrack":"index-module__weekBarTrack___UZjh5","weekBarDone":"index-module__weekBarDone___CMw_s","barGrowV":"index-module__barGrowV___kidsP","weekBarNone":"index-module__weekBarNone___EO8tl","weekLabel":"index-module__weekLabel___JMLeQ","memoryBlock":"index-module__memoryBlock___vaSd3","memoryEmoji":"index-module__memoryEmoji___ruUoE","memoryLabel":"index-module__memoryLabel___fjkK1","memoryValue":"index-module__memoryValue___gfdKU","memoryValueSmall":"index-module__memoryValueSmall___oMYBy","storyText":"index-module__storyText___xKJZb","portraitAvatar":"index-module__portraitAvatar___EPiHc","avatarPop":"index-module__avatarPop___DhxDk","portraitEmoji":"index-module__portraitEmoji___Wu09Z","portraitTitle":"index-module__portraitTitle___ic3U_","tagCloud":"index-module__tagCloud___mHyJy","tag":"index-module__tag___sC3Tj","tagIn":"index-module__tagIn____T7C2","tagText":"index-module__tagText___XnU7N","portraitDesc":"index-module__portraitDesc___xBb_y","fwCanvas":"index-module__fwCanvas___FMs14","finalInner":"index-module__finalInner___FxGSN","finalTitle":"index-module__finalTitle___Da9Xc","finalSub":"index-module__finalSub___Ssrol","finalBtns":"index-module__finalBtns___CbqJr","primaryBtn":"index-module__primaryBtn___bzUH_","shareBtn":"index-module__shareBtn___H0n4R","finalTip":"index-module__finalTip___Rq9DD","dots":"index-module__dots___PgaJ6","dot":"index-module__dot___VD40m","dotActive":"index-module__dotActive___mQdUV","posterMask":"index-module__posterMask___k3gYN","fadeIn":"index-module__fadeIn___cLrtT","posterPanel":"index-module__posterPanel___NNleE","posterImg":"index-module__posterImg___UjSpS","posterActions":"index-module__posterActions___Sbv0_","posterClose":"index-module__posterClose___jX3eL"});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","vendors","common"], function() { return __webpack_exec__("./src/pages/weekly-poster/index.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map