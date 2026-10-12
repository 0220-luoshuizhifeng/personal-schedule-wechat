"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["common"],{

/***/ "./src/components/EmptyState/index.tsx":
/*!*********************************************!*\
  !*** ./src/components/EmptyState/index.tsx ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.module.scss */ "./src/components/EmptyState/index.module.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");




var EmptyState = function EmptyState(_ref) {
  var _ref$emoji = _ref.emoji,
    emoji = _ref$emoji === void 0 ? '🌤️' : _ref$emoji,
    title = _ref.title,
    subtitle = _ref.subtitle;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].wrap,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
      className: _index_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].emoji,
      children: emoji
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
      className: _index_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].title,
      children: title
    }), subtitle ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
      className: _index_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].subtitle,
      children: subtitle
    }) : null]
  });
};
/* harmony default export */ __webpack_exports__["default"] = (EmptyState);

/***/ }),

/***/ "./src/components/EventLine/index.tsx":
/*!********************************************!*\
  !*** ./src/components/EventLine/index.tsx ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DateGroupHeader": function() { return /* binding */ DateGroupHeader; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants_categories__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/constants/categories */ "./src/constants/categories.ts");
/* harmony import */ var _utils_datetime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/datetime */ "./src/utils/datetime.ts");
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.module.scss */ "./src/components/EventLine/index.module.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");







var EventLine = function EventLine(_ref) {
  var occ = _ref.occ,
    onTap = _ref.onTap,
    onToggle = _ref.onToggle,
    showDate = _ref.showDate,
    overdue = _ref.overdue;
  var cat = _constants_categories__WEBPACK_IMPORTED_MODULE_2__.CATEGORY_MAP[occ.event.categoryId];
  var event = occ.event;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_index_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].row, occ.done && _index_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].rowDone),
    onClick: onTap,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, {
      className: _index_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].bar,
      style: {
        background: occ.done ? '#c4cad6' : cat.color
      }
    }), onToggle ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_index_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].check, occ.done && _index_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].checkDone),
      onClick: function onClick(e) {
        e.stopPropagation();
        onToggle();
      },
      children: occ.done ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.Text, {
        className: _index_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].checkIcon,
        children: "\u2713"
      }) : null
    }) : null, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, {
      className: _index_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].main,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.Text, {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_index_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].title, occ.done && _index_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].titleDone),
        children: event.title
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, {
        className: _index_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].metaRow,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.Text, {
          className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_index_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].time, overdue && !occ.done && _index_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].timeOverdue),
          children: [showDate ? "".concat((0,_utils_datetime__WEBPACK_IMPORTED_MODULE_3__.friendlyDate)(occ.dateKey), " ") : '', (0,_utils_datetime__WEBPACK_IMPORTED_MODULE_3__.occurrenceTimeText)(occ)]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, {
          className: _index_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].tag,
          style: {
            background: cat.bg
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.Text, {
            className: _index_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].tagText,
            style: {
              color: occ.done ? '#8a93a6' : cat.color
            },
            children: [cat.emoji, " ", cat.name]
          })
        })]
      }), event.location ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.Text, {
        className: _index_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].location,
        children: ["\uD83D\uDCCD ", event.location]
      }) : null]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.Text, {
      className: _index_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].arrow,
      children: "\u203A"
    })]
  });
};

// 供列表页展示日期分组头
var DateGroupHeader = function DateGroupHeader(_ref2) {
  var dateKey = _ref2.dateKey,
    extra = _ref2.extra;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].groupHeader,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.Text, {
      className: _index_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].groupHeaderText,
      children: (0,_utils_datetime__WEBPACK_IMPORTED_MODULE_3__.friendlyDate)(dateKey)
    }), extra ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.Text, {
      className: _index_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].groupHeaderWeek,
      children: extra
    }) : null]
  });
};
/* harmony default export */ __webpack_exports__["default"] = (EventLine);

/***/ }),

/***/ "./src/components/SegmentedControl/index.tsx":
/*!***************************************************!*\
  !*** ./src/components/SegmentedControl/index.tsx ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.module.scss */ "./src/components/SegmentedControl/index.module.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");





function SegmentedControl(props) {
  var options = props.options,
    value = props.value,
    onChange = props.onChange;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.View, {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].wrap,
    children: options.map(function (opt) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.View, {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_index_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].item, value === opt.value && _index_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].itemActive),
        onClick: function onClick() {
          return onChange(opt.value);
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.Text, {
          className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_index_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].label, value === opt.value && _index_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].labelActive),
          children: opt.label
        })
      }, opt.value);
    })
  });
}
/* harmony default export */ __webpack_exports__["default"] = (SegmentedControl);

/***/ }),

/***/ "./src/constants/categories.ts":
/*!*************************************!*\
  !*** ./src/constants/categories.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CATEGORIES": function() { return /* binding */ CATEGORIES; },
/* harmony export */   "CATEGORY_MAP": function() { return /* binding */ CATEGORY_MAP; },
/* harmony export */   "REMINDER_OPTIONS": function() { return /* binding */ REMINDER_OPTIONS; },
/* harmony export */   "genId": function() { return /* binding */ genId; }
/* harmony export */ });
// 任务模块：知识、美食、运动、工作、私事
var CATEGORIES = [{
  id: 'knowledge',
  name: '知识',
  color: '#7c3aed',
  bg: '#7c3aed1a',
  emoji: '📚'
}, {
  id: 'food',
  name: '美食',
  color: '#ea580c',
  bg: '#ea580c1a',
  emoji: '🍜'
}, {
  id: 'sport',
  name: '运动',
  color: '#16a34a',
  bg: '#16a34a1a',
  emoji: '🏃'
}, {
  id: 'work',
  name: '工作',
  color: '#2563eb',
  bg: '#2563eb1a',
  emoji: '💼'
}, {
  id: 'personal',
  name: '私事',
  color: '#db2777',
  bg: '#db27771a',
  emoji: '🏠'
}];
var CATEGORY_MAP = CATEGORIES.reduce(function (acc, item) {
  acc[item.id] = item;
  return acc;
}, {});

// 提醒选项（提前分钟数）

var REMINDER_OPTIONS = [{
  label: '提前 5 分钟',
  value: 5
}, {
  label: '提前 30 分钟',
  value: 30
}, {
  label: '提前 1 小时',
  value: 60
}, {
  label: '提前 1 天',
  value: 1440
}];
function genId() {
  return "e_".concat(Date.now().toString(36), "_").concat(Math.random().toString(36).slice(2, 8));
}

/***/ }),

/***/ "./src/data/seed.ts":
/*!**************************!*\
  !*** ./src/data/seed.ts ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buildSeedEvents": function() { return /* binding */ buildSeedEvents; }
/* harmony export */ });
/* harmony import */ var C_Users_14585_Desktop_Learning_undergraduateToTwo_TRAE_s_work_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_categories__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/constants/categories */ "./src/constants/categories.ts");
/* harmony import */ var _utils_datetime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/datetime */ "./src/utils/datetime.ts");




function dt(offsetDays, hhmm) {
  return dayjs__WEBPACK_IMPORTED_MODULE_0___default()().add(offsetDays, 'day').format(_utils_datetime__WEBPACK_IMPORTED_MODULE_2__.DATE_FMT) + " ".concat(hhmm);
}
function day(offsetDays) {
  return dayjs__WEBPACK_IMPORTED_MODULE_0___default()().add(offsetDays, 'day').format(_utils_datetime__WEBPACK_IMPORTED_MODULE_2__.DATE_FMT);
}

// 首次启动时的示例任务，覆盖今天 / 明天与五个分类模块
function buildSeedEvents() {
  var now = Date.now();
  var today = dayjs__WEBPACK_IMPORTED_MODULE_0___default()().format(_utils_datetime__WEBPACK_IMPORTED_MODULE_2__.DATE_FMT);
  return [{
    id: (0,_constants_categories__WEBPACK_IMPORTED_MODULE_1__.genId)(),
    title: '晨跑 3 公里',
    categoryId: 'sport',
    start: dt(0, '07:00'),
    end: dt(0, '07:40'),
    allDay: false,
    repeat: {
      type: 'daily',
      interval: 1
    },
    location: '学校操场',
    remark: '运动前先热身 5 分钟',
    reminders: [30],
    participants: [],
    records: (0,C_Users_14585_Desktop_Learning_undergraduateToTwo_TRAE_s_work_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__["default"])({}, today, 'done'),
    createdAt: now - 9000000
  }, {
    id: (0,_constants_categories__WEBPACK_IMPORTED_MODULE_1__.genId)(),
    title: '阅读《人类简史》第三章',
    categoryId: 'knowledge',
    start: dt(0, '09:00'),
    end: dt(0, '10:00'),
    allDay: false,
    repeat: {
      type: 'none',
      interval: 1
    },
    remark: '边读边做笔记，整理 3 个观点',
    reminders: [5],
    participants: [],
    records: {},
    createdAt: now - 8000000
  }, {
    id: (0,_constants_categories__WEBPACK_IMPORTED_MODULE_1__.genId)(),
    title: '午餐：尝试番茄牛腩',
    categoryId: 'food',
    start: dt(0, '12:00'),
    end: dt(0, '13:00'),
    allDay: false,
    repeat: {
      type: 'none',
      interval: 1
    },
    location: '第二食堂',
    remark: '少辣，搭配一份青菜',
    reminders: [30],
    participants: ['小王'],
    records: {},
    createdAt: now - 7000000
  }, {
    id: (0,_constants_categories__WEBPACK_IMPORTED_MODULE_1__.genId)(),
    title: '小组项目周会',
    categoryId: 'work',
    start: dt(0, '15:00'),
    end: dt(0, '16:00'),
    allDay: false,
    repeat: {
      type: 'weekly',
      interval: 1
    },
    location: 'https://meeting.tencent.com/example',
    remark: '汇报本周进度，确认下周分工',
    reminders: [60],
    participants: ['张同学', '李同学'],
    records: {},
    createdAt: now - 6000000
  }, {
    id: (0,_constants_categories__WEBPACK_IMPORTED_MODULE_1__.genId)(),
    title: '高数复习：定积分',
    categoryId: 'knowledge',
    start: dt(1, '09:00'),
    end: dt(1, '10:30'),
    allDay: false,
    repeat: {
      type: 'none',
      interval: 1
    },
    remark: '完成课本 P88 练习题',
    reminders: [30, 60],
    participants: [],
    records: {},
    createdAt: now - 5000000
  }, {
    id: (0,_constants_categories__WEBPACK_IMPORTED_MODULE_1__.genId)(),
    title: '学做红烧肉',
    categoryId: 'food',
    start: dt(1, '12:30'),
    end: dt(1, '13:30'),
    allDay: false,
    repeat: {
      type: 'none',
      interval: 1
    },
    location: '家里厨房',
    remark: '提前买好五花肉和冰糖',
    reminders: [60],
    participants: [],
    records: {},
    createdAt: now - 4000000
  }, {
    id: (0,_constants_categories__WEBPACK_IMPORTED_MODULE_1__.genId)(),
    title: '羽毛球训练',
    categoryId: 'sport',
    start: dt(1, '19:00'),
    end: dt(1, '20:30'),
    allDay: false,
    repeat: {
      type: 'weekly',
      interval: 1
    },
    location: '综合体育馆 2 号场',
    participants: ['室友'],
    reminders: [60],
    records: {},
    createdAt: now - 3000000
  }, {
    id: (0,_constants_categories__WEBPACK_IMPORTED_MODULE_1__.genId)(),
    title: '给家里打电话',
    categoryId: 'personal',
    start: dt(1, '21:00'),
    end: dt(1, '21:20'),
    allDay: false,
    repeat: {
      type: 'none',
      interval: 1
    },
    remark: '问问爸妈周末安排',
    reminders: [60],
    participants: [],
    records: {},
    createdAt: now - 2000000
  }, {
    id: (0,_constants_categories__WEBPACK_IMPORTED_MODULE_1__.genId)(),
    title: '社团志愿活动',
    categoryId: 'personal',
    start: "".concat(day(3), " 00:00"),
    end: "".concat(day(3), " 23:59"),
    allDay: true,
    repeat: {
      type: 'none',
      interval: 1
    },
    location: '市图书馆',
    remark: '全天活动，记得带水杯',
    reminders: [1440],
    participants: ['社团成员'],
    records: {},
    createdAt: now - 1000000
  }];
}

/***/ }),

/***/ "./src/services/reminder.ts":
/*!**********************************!*\
  !*** ./src/services/reminder.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkReminders": function() { return /* binding */ checkReminders; },
/* harmony export */   "requestWxSubscribe": function() { return /* binding */ requestWxSubscribe; },
/* harmony export */   "startReminderWatch": function() { return /* binding */ startReminderWatch; },
/* harmony export */   "stopReminderWatch": function() { return /* binding */ stopReminderWatch; }
/* harmony export */ });
/* harmony import */ var C_Users_14585_Desktop_Learning_undergraduateToTwo_TRAE_s_work_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var C_Users_14585_Desktop_Learning_undergraduateToTwo_TRAE_s_work_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js */ "./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_scheduleStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/store/scheduleStore */ "./src/store/scheduleStore.ts");
/* harmony import */ var _utils_datetime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/datetime */ "./src/utils/datetime.ts");








// 微信订阅消息模板 ID：在小程序后台配置「任务提醒」模板后填入即可启用真实推送
// 为空时仅使用应用内提醒（小程序前后台轮询弹窗）
var SUBSCRIBE_TEMPLATE_IDS = [];
var timer = null;
var showing = false;
function safeVibrate() {
  try {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().vibrateShort({
      type: 'medium'
    });
  } catch (err) {
    console.warn('[Reminder] vibrate failed:', err);
  }
}
function showReminderModal(title, content, onConfirm) {
  if (showing) return;
  showing = true;
  safeVibrate();
  _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().showModal({
    title: title,
    content: content,
    showCancel: false,
    confirmText: '知道了',
    confirmColor: '#2563eb',
    success: function success(res) {
      if (res.confirm && onConfirm) onConfirm();
    },
    complete: function complete() {
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
function checkReminders() {
  try {
    var _useScheduleStore$get = _store_scheduleStore__WEBPACK_IMPORTED_MODULE_2__.useScheduleStore.getState(),
      events = _useScheduleStore$get.events,
      settings = _useScheduleStore$get.settings,
      firedReminders = _useScheduleStore$get.firedReminders,
      markFired = _useScheduleStore$get.markFired;
    if (!settings.remindersEnabled && !settings.eveningCheck) return;
    var now = dayjs__WEBPACK_IMPORTED_MODULE_1___default()();
    var todayKey = now.format(_utils_datetime__WEBPACK_IMPORTED_MODULE_3__.DATE_FMT);
    var tomorrowKey = now.add(1, 'day').format(_utils_datetime__WEBPACK_IMPORTED_MODULE_3__.DATE_FMT);
    var newFired = [];
    if (settings.remindersEnabled) {
      var _iterator = (0,C_Users_14585_Desktop_Learning_undergraduateToTwo_TRAE_s_work_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_4__["default"])(events),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var event = _step.value;
          var occs = (0,_utils_datetime__WEBPACK_IMPORTED_MODULE_3__.expandOccurrences)(event, todayKey, tomorrowKey);
          var _iterator2 = (0,C_Users_14585_Desktop_Learning_undergraduateToTwo_TRAE_s_work_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_4__["default"])(occs),
            _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var occ = _step2.value;
              if (occ.done) continue;
              var _iterator3 = (0,C_Users_14585_Desktop_Learning_undergraduateToTwo_TRAE_s_work_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_4__["default"])(event.reminders),
                _step3;
              try {
                for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                  var mins = _step3.value;
                  var fireAt = dayjs__WEBPACK_IMPORTED_MODULE_1___default()(occ.start, _utils_datetime__WEBPACK_IMPORTED_MODULE_3__.DT_FMT).subtract(mins, 'minute');
                  var diffMin = now.diff(fireAt, 'minute');
                  var key = "rem_".concat(occ.key, "_").concat(mins);
                  // 到期 2 小时内仍未提醒则补发
                  if (diffMin >= 0 && diffMin <= 120 && !firedReminders.includes(key)) {
                    newFired.push(key);
                    var leadText = mins >= 1440 ? '明天' : mins >= 60 ? "".concat(mins / 60, " \u5C0F\u65F6\u540E") : "".concat(mins, " \u5206\u949F\u540E");
                    showReminderModal('任务提醒', "".concat(leadText, "\u5F00\u59CB\uFF1A").concat(event.title).concat(occ.event.allDay ? '（全天）' : "\uFF08".concat(dayjs__WEBPACK_IMPORTED_MODULE_1___default()(occ.start, _utils_datetime__WEBPACK_IMPORTED_MODULE_3__.DT_FMT).format('HH:mm'), "\uFF09")));
                    break; // 每次检查最多弹一个，其余下次轮询补发
                  }
                }
              } catch (err) {
                _iterator3.e(err);
              } finally {
                _iterator3.f();
              }
              if (newFired.length) break;
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
          if (newFired.length) break;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }

    // 晚间完成情况确认
    if (settings.eveningCheck && !newFired.length) {
      var _settings$eveningTime = settings.eveningTime.split(':'),
        _settings$eveningTime2 = (0,C_Users_14585_Desktop_Learning_undergraduateToTwo_TRAE_s_work_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_5__["default"])(_settings$eveningTime, 2),
        hh = _settings$eveningTime2[0],
        mm = _settings$eveningTime2[1];
      var _fireAt = now.hour(Number(hh)).minute(Number(mm)).second(0);
      var eveKey = "eve_".concat(todayKey);
      var todayOccs = events.flatMap(function (e) {
        return (0,_utils_datetime__WEBPACK_IMPORTED_MODULE_3__.expandOccurrences)(e, todayKey, todayKey);
      });
      var undone = todayOccs.filter(function (o) {
        return !o.done;
      }).length;
      if (!now.isBefore(_fireAt) && now.diff(_fireAt, 'hour') < 3 && !firedReminders.includes(eveKey)) {
        newFired.push(eveKey);
        if (undone > 0) {
          showReminderModal('今天的任务完成了吗？', "\u8FD8\u6709 ".concat(undone, " \u4E2A\u4EFB\u52A1\u672A\u5B8C\u6210\uFF0C\u52A0\u6CB9\uFF01"), function () {
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().switchTab({
              url: '/pages/tasks/index'
            });
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
function startReminderWatch() {
  if (timer) return;
  checkReminders();
  timer = setInterval(checkReminders, 30 * 1000);
  console.info('[Reminder] watch started');
}
function stopReminderWatch() {
  if (timer) {
    clearInterval(timer);
    timer = null;
  }
}

// 请求微信订阅消息授权（仅微信端；需先在小程序后台配置模板 ID）
function requestWxSubscribe() {
  if (false) {}
  if (!SUBSCRIBE_TEMPLATE_IDS.length) {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().showModal({
      title: '订阅提醒',
      content: '应用内提醒已开启。如需微信通知栏推送，请在小程序后台配置订阅消息模板。',
      showCancel: false,
      confirmText: '知道了'
    });
    return;
  }
  _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().requestSubscribeMessage({
    tmplIds: SUBSCRIBE_TEMPLATE_IDS,
    success: function success() {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().showToast({
        title: '订阅成功',
        icon: 'success'
      });
    },
    fail: function fail(err) {
      console.error('[Reminder] subscribe failed:', err);
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().showToast({
        title: '订阅未完成',
        icon: 'none'
      });
    }
  });
}

/***/ }),

/***/ "./src/store/scheduleStore.ts":
/*!************************************!*\
  !*** ./src/store/scheduleStore.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useScheduleStore": function() { return /* binding */ useScheduleStore; }
/* harmony export */ });
/* harmony import */ var C_Users_14585_Desktop_Learning_undergraduateToTwo_TRAE_s_work_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var C_Users_14585_Desktop_Learning_undergraduateToTwo_TRAE_s_work_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! zustand */ "./node_modules/zustand/esm/index.mjs");
/* harmony import */ var zustand_middleware__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! zustand/middleware */ "./node_modules/zustand/esm/middleware.mjs");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_categories__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/constants/categories */ "./src/constants/categories.ts");
/* harmony import */ var _data_seed__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/data/seed */ "./src/data/seed.ts");







var STORE_KEY = 'tomorrow-task-store-v1';

// 同步 Taro 存储，zustand persist 支持同步 rehydrate
var taroStorage = {
  getItem: function getItem(name) {
    try {
      var value = _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().getStorageSync(name);
      return value === '' || value === undefined || value === null ? null : String(value);
    } catch (err) {
      console.error('[Store] read storage failed:', err);
      return null;
    }
  },
  setItem: function setItem(name, value) {
    try {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().setStorageSync(name, value);
    } catch (err) {
      console.error('[Store] write storage failed:', err);
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().showToast({
        title: '保存失败，请检查存储空间',
        icon: 'none'
      });
    }
  },
  removeItem: function removeItem(name) {
    try {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().removeStorageSync(name);
    } catch (err) {
      console.error('[Store] remove storage failed:', err);
    }
  }
};
var useScheduleStore = (0,zustand__WEBPACK_IMPORTED_MODULE_3__.create)()((0,zustand_middleware__WEBPACK_IMPORTED_MODULE_4__.persist)(function (set, get) {
  return {
    events: [],
    settings: {
      remindersEnabled: true,
      eveningCheck: true,
      eveningTime: '20:00'
    },
    firedReminders: [],
    seedIfEmpty: function seedIfEmpty() {
      if (get().events.length === 0) {
        set({
          events: (0,_data_seed__WEBPACK_IMPORTED_MODULE_2__.buildSeedEvents)()
        });
        console.info('[Store] seed events installed');
      }
    },
    addEvent: function addEvent(data) {
      var event = (0,C_Users_14585_Desktop_Learning_undergraduateToTwo_TRAE_s_work_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__["default"])((0,C_Users_14585_Desktop_Learning_undergraduateToTwo_TRAE_s_work_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__["default"])({}, data), {}, {
        id: (0,_constants_categories__WEBPACK_IMPORTED_MODULE_1__.genId)(),
        records: {},
        createdAt: Date.now()
      });
      set(function (state) {
        return {
          events: [].concat((0,C_Users_14585_Desktop_Learning_undergraduateToTwo_TRAE_s_work_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_6__["default"])(state.events), [event])
        };
      });
      console.info('[Store] event added:', event.id, event.title);
      return event.id;
    },
    updateEvent: function updateEvent(id, data, mode, dateKey) {
      var target = get().events.find(function (e) {
        return e.id === id;
      });
      if (!target) return;
      if (mode === 'this' && dateKey && target.repeat.type !== 'none') {
        // 仅本次：原重复事件在该日期加例外；用表单数据新建一个当天单次事件
        var exceptEvent = (0,C_Users_14585_Desktop_Learning_undergraduateToTwo_TRAE_s_work_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__["default"])((0,C_Users_14585_Desktop_Learning_undergraduateToTwo_TRAE_s_work_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__["default"])({}, data), {}, {
          id: (0,_constants_categories__WEBPACK_IMPORTED_MODULE_1__.genId)(),
          repeat: {
            type: 'none',
            interval: 1
          },
          records: {},
          createdAt: Date.now()
        });
        set(function (state) {
          return {
            events: state.events.map(function (e) {
              return e.id === id ? (0,C_Users_14585_Desktop_Learning_undergraduateToTwo_TRAE_s_work_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__["default"])((0,C_Users_14585_Desktop_Learning_undergraduateToTwo_TRAE_s_work_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__["default"])({}, e), {}, {
                exclusions: Array.from(new Set([].concat((0,C_Users_14585_Desktop_Learning_undergraduateToTwo_TRAE_s_work_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_6__["default"])(e.exclusions || []), [dateKey])))
              }) : e;
            }).concat(exceptEvent)
          };
        });
        console.info('[Store] occurrence updated (this only):', id, dateKey);
        return;
      }
      set(function (state) {
        return {
          events: state.events.map(function (e) {
            return e.id === id ? (0,C_Users_14585_Desktop_Learning_undergraduateToTwo_TRAE_s_work_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__["default"])((0,C_Users_14585_Desktop_Learning_undergraduateToTwo_TRAE_s_work_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__["default"])((0,C_Users_14585_Desktop_Learning_undergraduateToTwo_TRAE_s_work_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__["default"])({}, e), data), {}, {
              id: e.id,
              records: e.records,
              exclusions: e.exclusions,
              createdAt: e.createdAt
            }) : e;
          })
        };
      });
      console.info('[Store] event updated:', id);
    },
    deleteEvent: function deleteEvent(id, mode, dateKey) {
      if (mode === 'this' && dateKey) {
        set(function (state) {
          return {
            events: state.events.map(function (e) {
              return e.id === id ? (0,C_Users_14585_Desktop_Learning_undergraduateToTwo_TRAE_s_work_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__["default"])((0,C_Users_14585_Desktop_Learning_undergraduateToTwo_TRAE_s_work_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__["default"])({}, e), {}, {
                exclusions: Array.from(new Set([].concat((0,C_Users_14585_Desktop_Learning_undergraduateToTwo_TRAE_s_work_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_6__["default"])(e.exclusions || []), [dateKey])))
              }) : e;
            })
          };
        });
        console.info('[Store] occurrence deleted (this only):', id, dateKey);
        return;
      }
      set(function (state) {
        return {
          events: state.events.filter(function (e) {
            return e.id !== id;
          })
        };
      });
      console.info('[Store] event deleted:', id);
    },
    toggleDone: function toggleDone(id, dateKey) {
      set(function (state) {
        return {
          events: state.events.map(function (e) {
            if (e.id !== id) return e;
            var records = (0,C_Users_14585_Desktop_Learning_undergraduateToTwo_TRAE_s_work_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__["default"])({}, e.records);
            if (records[dateKey] === 'done') {
              delete records[dateKey];
            } else {
              records[dateKey] = 'done';
            }
            return (0,C_Users_14585_Desktop_Learning_undergraduateToTwo_TRAE_s_work_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__["default"])((0,C_Users_14585_Desktop_Learning_undergraduateToTwo_TRAE_s_work_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__["default"])({}, e), {}, {
              records: records
            });
          })
        };
      });
    },
    setSettings: function setSettings(patch) {
      set(function (state) {
        return {
          settings: (0,C_Users_14585_Desktop_Learning_undergraduateToTwo_TRAE_s_work_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__["default"])((0,C_Users_14585_Desktop_Learning_undergraduateToTwo_TRAE_s_work_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__["default"])({}, state.settings), patch)
        };
      });
    },
    markFired: function markFired(keys) {
      if (!keys.length) return;
      set(function (state) {
        return {
          firedReminders: Array.from(new Set([].concat((0,C_Users_14585_Desktop_Learning_undergraduateToTwo_TRAE_s_work_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_6__["default"])(state.firedReminders), (0,C_Users_14585_Desktop_Learning_undergraduateToTwo_TRAE_s_work_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_6__["default"])(keys)))).slice(-500)
        };
      });
    },
    resetAll: function resetAll() {
      set({
        events: (0,_data_seed__WEBPACK_IMPORTED_MODULE_2__.buildSeedEvents)(),
        firedReminders: []
      });
      console.info('[Store] data reset to seed');
    }
  };
}, {
  name: STORE_KEY,
  storage: (0,zustand_middleware__WEBPACK_IMPORTED_MODULE_4__.createJSONStorage)(function () {
    return taroStorage;
  })
}));

/***/ }),

/***/ "./src/utils/datetime.ts":
/*!*******************************!*\
  !*** ./src/utils/datetime.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DATE_FMT": function() { return /* binding */ DATE_FMT; },
/* harmony export */   "DT_FMT": function() { return /* binding */ DT_FMT; },
/* harmony export */   "TIME_FMT": function() { return /* binding */ TIME_FMT; },
/* harmony export */   "WEEKDAY_NAMES": function() { return /* binding */ WEEKDAY_NAMES; },
/* harmony export */   "WEEK_HEADERS": function() { return /* binding */ WEEK_HEADERS; },
/* harmony export */   "buildMonthCells": function() { return /* binding */ buildMonthCells; },
/* harmony export */   "expandAll": function() { return /* binding */ expandAll; },
/* harmony export */   "expandOccurrences": function() { return /* binding */ expandOccurrences; },
/* harmony export */   "formatDT": function() { return /* binding */ formatDT; },
/* harmony export */   "friendlyDate": function() { return /* binding */ friendlyDate; },
/* harmony export */   "occurrenceTimeText": function() { return /* binding */ occurrenceTimeText; },
/* harmony export */   "repeatText": function() { return /* binding */ repeatText; },
/* harmony export */   "todayKey": function() { return /* binding */ todayKey; },
/* harmony export */   "weekDates": function() { return /* binding */ weekDates; }
/* harmony export */ });
/* unused harmony exports dateKeyOf, parseDT, reminderText, weekdayName, isWeekend */
/* harmony import */ var C_Users_14585_Desktop_Learning_undergraduateToTwo_TRAE_s_work_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);


var DATE_FMT = 'YYYY-MM-DD';
var TIME_FMT = 'HH:mm';
var DT_FMT = 'YYYY-MM-DD HH:mm';
var WEEKDAY_NAMES = ['日', '一', '二', '三', '四', '五', '六'];
// 周一起始的表头
var WEEK_HEADERS = ['一', '二', '三', '四', '五', '六', '日'];
function todayKey() {
  return dayjs__WEBPACK_IMPORTED_MODULE_0___default()().format(DATE_FMT);
}
function dateKeyOf(d) {
  return dayjs__WEBPACK_IMPORTED_MODULE_0___default()(d).format(DATE_FMT);
}
function parseDT(s) {
  return dayjs__WEBPACK_IMPORTED_MODULE_0___default()(s, DT_FMT);
}
function formatDT(s) {
  var fmt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DT_FMT;
  return dayjs__WEBPACK_IMPORTED_MODULE_0___default()(s, DT_FMT).format(fmt);
}

// 周一为一周起点，返回该周 7 天的 dateKey
function weekDates(anchor) {
  var base = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(anchor);
  var offset = (base.day() + 6) % 7;
  var monday = base.subtract(offset, 'day');
  return Array.from({
    length: 7
  }, function (_, i) {
    return monday.add(i, 'day').format(DATE_FMT);
  });
}
// 生成月视图 42 个格子（周一起始，包含上下月置灰日期）
function buildMonthCells(anchor) {
  var base = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(anchor);
  var firstOfMonth = base.date(1);
  var offset = (firstOfMonth.day() + 6) % 7;
  var gridStart = firstOfMonth.subtract(offset, 'day');
  var today = todayKey();
  return Array.from({
    length: 42
  }, function (_, i) {
    var d = gridStart.add(i, 'day');
    var key = d.format(DATE_FMT);
    return {
      key: key,
      date: d,
      dayNum: d.date(),
      inMonth: d.month() === base.month(),
      isToday: key === today,
      isWeekend: d.day() === 0 || d.day() === 6
    };
  });
}
function addByRule(cur, rule) {
  if (rule.type === 'daily') return cur.add(rule.interval, 'day');
  if (rule.type === 'weekly') return cur.add(rule.interval, 'week');
  return cur.add(rule.interval, 'month');
}

/**
 * 把一个日程在 [rangeStartKey, rangeEndKey] 内的所有发生实例展开。
 * 支持不重复 / 每天 / 每周 / 每月 + 间隔 + 结束日期 + 例外日期。
 */
function expandOccurrences(event, rangeStartKey, rangeEndKey) {
  var result = [];
  var rangeStart = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(rangeStartKey, DATE_FMT).startOf('day');
  var rangeEnd = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(rangeEndKey, DATE_FMT).endOf('day');
  var startDay = parseDT(event.start);
  var endDay = parseDT(event.end);
  var exclusions = event.exclusions || [];
  var pushIfInRange = function pushIfInRange(occStart, occEnd) {
    if (occEnd.isBefore(rangeStart) || occStart.isAfter(rangeEnd)) return;
    var dk = occStart.format(DATE_FMT);
    if (exclusions.includes(dk)) return;
    result.push({
      key: "".concat(event.id, "@").concat(dk),
      eventId: event.id,
      event: event,
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
  var repeatEnd = event.repeat.endDate ? dayjs__WEBPACK_IMPORTED_MODULE_0___default()(event.repeat.endDate, DATE_FMT).endOf('day') : null;
  var cur = startDay;
  var guard = 0;
  // 最多展开 700 个实例，防止异常数据死循环
  while (guard < 700) {
    var diffDays = cur.diff(startDay, 'day');
    var occEnd = endDay.add(diffDays, 'day');
    if (repeatEnd && cur.isAfter(repeatEnd)) break;
    if (cur.isAfter(rangeEnd)) break;
    pushIfInRange(cur, occEnd);
    cur = addByRule(cur, event.repeat);
    guard += 1;
  }
  return result;
}

// 展开多个事件
function expandAll(events, rangeStartKey, rangeEndKey) {
  return events.reduce(function (list, ev) {
    list.push.apply(list, (0,C_Users_14585_Desktop_Learning_undergraduateToTwo_TRAE_s_work_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(expandOccurrences(ev, rangeStartKey, rangeEndKey)));
    return list;
  }, []);
}
function repeatText(rule) {
  if (rule.type === 'none') return '';
  var unit = rule.type === 'daily' ? '天' : rule.type === 'weekly' ? '周' : '月';
  var base = rule.interval <= 1 ? "\u6BCF".concat(unit) : "\u6BCF ".concat(rule.interval, " ").concat(unit);
  return rule.endDate ? "".concat(base, "\uFF0C\u81F3 ").concat(rule.endDate, " \u7ED3\u675F") : base;
}
function reminderText(minutes) {
  if (!minutes.length) return '不提醒';
  return minutes.slice().sort(function (a, b) {
    return b - a;
  }).map(function (m) {
    if (m < 60) return "\u63D0\u524D ".concat(m, " \u5206\u949F");
    if (m < 1440) return "\u63D0\u524D ".concat(m / 60, " \u5C0F\u65F6");
    return "\u63D0\u524D ".concat(m / 1440, " \u5929");
  }).join('、');
}
function weekdayName(key) {
  return WEEKDAY_NAMES[dayjs__WEBPACK_IMPORTED_MODULE_0___default()(key, DATE_FMT).day()];
}
function isWeekend(key) {
  var d = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(key, DATE_FMT).day();
  return d === 0 || d === 6;
}

// 实例时间段展示
function occurrenceTimeText(occ) {
  if (occ.event.allDay) return '全天';
  return "".concat(formatDT(occ.start, TIME_FMT), " - ").concat(formatDT(occ.end, TIME_FMT));
}

// 人性化日期：今天 / 明天 / 后天 / M月D日
function friendlyDate(key) {
  var d = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(key, DATE_FMT);
  var today = dayjs__WEBPACK_IMPORTED_MODULE_0___default()().startOf('day');
  var diff = d.diff(today, 'day');
  var md = d.format('M月D日');
  if (diff === 0) return "\u4ECA\u5929 ".concat(md);
  if (diff === 1) return "\u660E\u5929 ".concat(md);
  if (diff === 2) return "\u540E\u5929 ".concat(md);
  if (diff === -1) return "\u6628\u5929 ".concat(md);
  return "".concat(md, " \u5468").concat(WEEKDAY_NAMES[d.day()]);
}

/***/ }),

/***/ "./src/components/EmptyState/index.module.scss":
/*!*****************************************************!*\
  !*** ./src/components/EmptyState/index.module.scss ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__) {

// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["default"] = ({"wrap":"index-module__wrap___wbOUS","emoji":"index-module__emoji____JfKW","title":"index-module__title___AnFHs","subtitle":"index-module__subtitle___AYS3k"});

/***/ }),

/***/ "./src/components/EventLine/index.module.scss":
/*!****************************************************!*\
  !*** ./src/components/EventLine/index.module.scss ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__) {

// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["default"] = ({"row":"index-module__row___NoY8H","rowDone":"index-module__rowDone___K49OJ","bar":"index-module__bar___mWhK2","check":"index-module__check___cUUG0","checkDone":"index-module__checkDone___HRnpb","checkIcon":"index-module__checkIcon____6psB","main":"index-module__main___bfUgX","title":"index-module__title___H1AqC","titleDone":"index-module__titleDone___XTtrZ","metaRow":"index-module__metaRow___JgXnG","time":"index-module__time___nlhgU","timeOverdue":"index-module__timeOverdue___OQ99c","tag":"index-module__tag___GAjjJ","tagText":"index-module__tagText___gowgF","location":"index-module__location___rRyEM","arrow":"index-module__arrow___kInL8","groupHeader":"index-module__groupHeader___lQN5E","groupHeaderText":"index-module__groupHeaderText___PBu8f","groupHeaderWeek":"index-module__groupHeaderWeek___DXM17"});

/***/ }),

/***/ "./src/components/SegmentedControl/index.module.scss":
/*!***********************************************************!*\
  !*** ./src/components/SegmentedControl/index.module.scss ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__) {

// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["default"] = ({"wrap":"index-module__wrap___X2Z7d","item":"index-module__item___AThDd","itemActive":"index-module__itemActive___NAYx4","label":"index-module__label___jxBlm","labelActive":"index-module__labelActive___haspf"});

/***/ })

}]);
//# sourceMappingURL=common.js.map