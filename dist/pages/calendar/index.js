"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/calendar/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/calendar/index!./src/pages/calendar/index.tsx":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/calendar/index!./src/pages/calendar/index.tsx ***!
  \**********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var C_Users_14585_Desktop_Learning_undergraduateToTwo_TRAE_s_work_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var C_Users_14585_Desktop_Learning_undergraduateToTwo_TRAE_s_work_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store_scheduleStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/store/scheduleStore */ "./src/store/scheduleStore.ts");
/* harmony import */ var _constants_categories__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/constants/categories */ "./src/constants/categories.ts");
/* harmony import */ var _utils_datetime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/utils/datetime */ "./src/utils/datetime.ts");
/* harmony import */ var _components_MonthView__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/MonthView */ "./src/components/MonthView/index.tsx");
/* harmony import */ var _components_TimeGridView__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/TimeGridView */ "./src/components/TimeGridView/index.tsx");
/* harmony import */ var _components_EventLine__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/components/EventLine */ "./src/components/EventLine/index.tsx");
/* harmony import */ var _components_EventDetailModal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/components/EventDetailModal */ "./src/components/EventDetailModal/index.tsx");
/* harmony import */ var _components_SegmentedControl__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/components/SegmentedControl */ "./src/components/SegmentedControl/index.tsx");
/* harmony import */ var _components_YearMonthPicker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/components/YearMonthPicker */ "./src/components/YearMonthPicker/index.tsx");
/* harmony import */ var _components_EmptyState__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/components/EmptyState */ "./src/components/EmptyState/index.tsx");
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./index.module.scss */ "./src/pages/calendar/index.module.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");



















var VIEW_OPTIONS = [{
  value: 'month',
  label: '月'
}, {
  value: 'week',
  label: '周'
}, {
  value: 'day',
  label: '日'
}, {
  value: 'list',
  label: '列表'
}];
var CalendarPage = function CalendarPage() {
  var events = (0,_store_scheduleStore__WEBPACK_IMPORTED_MODULE_4__.useScheduleStore)(function (s) {
    return s.events;
  });
  var updateEvent = (0,_store_scheduleStore__WEBPACK_IMPORTED_MODULE_4__.useScheduleStore)(function (s) {
    return s.updateEvent;
  });
  var deleteEvent = (0,_store_scheduleStore__WEBPACK_IMPORTED_MODULE_4__.useScheduleStore)(function (s) {
    return s.deleteEvent;
  });
  var toggleDone = (0,_store_scheduleStore__WEBPACK_IMPORTED_MODULE_4__.useScheduleStore)(function (s) {
    return s.toggleDone;
  });
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('month'),
    _useState2 = (0,C_Users_14585_Desktop_Learning_undergraduateToTwo_TRAE_s_work_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_16__["default"])(_useState, 2),
    view = _useState2[0],
    setView = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((0,_utils_datetime__WEBPACK_IMPORTED_MODULE_6__.todayKey)()),
    _useState4 = (0,C_Users_14585_Desktop_Learning_undergraduateToTwo_TRAE_s_work_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_16__["default"])(_useState3, 2),
    selectedKey = _useState4[0],
    setSelectedKey = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState6 = (0,C_Users_14585_Desktop_Learning_undergraduateToTwo_TRAE_s_work_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_16__["default"])(_useState5, 2),
    activeCats = _useState6[0],
    setActiveCats = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState8 = (0,C_Users_14585_Desktop_Learning_undergraduateToTwo_TRAE_s_work_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_16__["default"])(_useState7, 2),
    pickerVisible = _useState8[0],
    setPickerVisible = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState0 = (0,C_Users_14585_Desktop_Learning_undergraduateToTwo_TRAE_s_work_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_16__["default"])(_useState9, 2),
    detailKey = _useState0[0],
    setDetailKey = _useState0[1];
  var _useState1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState10 = (0,C_Users_14585_Desktop_Learning_undergraduateToTwo_TRAE_s_work_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_16__["default"])(_useState1, 2),
    loading = _useState10[0],
    setLoading = _useState10[1];
  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(function () {
    var t = setTimeout(function () {
      return setLoading(false);
    }, 400);
    return function () {
      return clearTimeout(t);
    };
  }, []);
  var catFilter = function catFilter(occ) {
    return activeCats.length === 0 || activeCats.includes(occ.event.categoryId);
  };
  var selectedDay = dayjs__WEBPACK_IMPORTED_MODULE_2___default()(selectedKey, _utils_datetime__WEBPACK_IMPORTED_MODULE_6__.DATE_FMT);

  // 月视图格子与当日日程映射
  var monthCells = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return (0,_utils_datetime__WEBPACK_IMPORTED_MODULE_6__.buildMonthCells)(selectedKey);
  }, [selectedKey]);
  var monthOccMap = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    var start = monthCells[0].key;
    var end = monthCells[monthCells.length - 1].key;
    var map = {};
    (0,_utils_datetime__WEBPACK_IMPORTED_MODULE_6__.expandAll)(events, start, end).filter(catFilter).forEach(function (occ) {
      var _occ$dateKey;
      (map[_occ$dateKey = occ.dateKey] || (map[_occ$dateKey] = [])).push(occ);
    });
    return map;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [events, monthCells, activeCats]);
  var selectedOccs = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return (0,_utils_datetime__WEBPACK_IMPORTED_MODULE_6__.expandAll)(events, selectedKey, selectedKey).filter(catFilter).sort(function (a, b) {
      return a.start < b.start ? -1 : 1;
    });
  },
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [events, selectedKey, activeCats]);
  var weekKeys = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return (0,_utils_datetime__WEBPACK_IMPORTED_MODULE_6__.weekDates)(selectedKey);
  }, [selectedKey]);
  var gridKeys = view === 'day' ? [selectedKey] : weekKeys;
  var gridRange = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return {
      start: gridKeys[0],
      end: gridKeys[gridKeys.length - 1]
    };
  }, [gridKeys]);
  var gridOccs = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return (0,_utils_datetime__WEBPACK_IMPORTED_MODULE_6__.expandAll)(events, gridRange.start, gridRange.end).filter(catFilter);
  },
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [events, gridRange, activeCats]);

  // 列表视图：未来 60 天分组
  var listGroups = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    var end = dayjs__WEBPACK_IMPORTED_MODULE_2___default()().add(60, 'day').format(_utils_datetime__WEBPACK_IMPORTED_MODULE_6__.DATE_FMT);
    var all = (0,_utils_datetime__WEBPACK_IMPORTED_MODULE_6__.expandAll)(events, (0,_utils_datetime__WEBPACK_IMPORTED_MODULE_6__.todayKey)(), end).filter(catFilter).sort(function (a, b) {
      return a.start < b.start ? -1 : 1;
    });
    var groups = [];
    all.forEach(function (occ) {
      var g = groups.find(function (x) {
        return x.key === occ.dateKey;
      });
      if (g) g.occs.push(occ);else groups.push({
        key: occ.dateKey,
        occs: [occ]
      });
    });
    return groups;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [events, activeCats]);

  // 详情弹窗实例（随 store 更新保持最新）
  var detailOcc = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    if (!detailKey) return null;
    var at = detailKey.indexOf('@');
    var eventId = detailKey.slice(0, at);
    var dk = detailKey.slice(at + 1);
    var ev = events.find(function (e) {
      return e.id === eventId;
    });
    if (!ev) return null;
    return (0,_utils_datetime__WEBPACK_IMPORTED_MODULE_6__.expandOccurrences)(ev, dk, dk).find(function (o) {
      return o.key === detailKey;
    }) || null;
  }, [detailKey, events]);

  // 标题
  var headerTitle = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    if (view === 'month') return "".concat(selectedDay.year(), "\u5E74").concat(selectedDay.month() + 1, "\u6708");
    if (view === 'week') {
      var s = dayjs__WEBPACK_IMPORTED_MODULE_2___default()(weekKeys[0], _utils_datetime__WEBPACK_IMPORTED_MODULE_6__.DATE_FMT);
      var e = dayjs__WEBPACK_IMPORTED_MODULE_2___default()(weekKeys[6], _utils_datetime__WEBPACK_IMPORTED_MODULE_6__.DATE_FMT);
      return "".concat(s.month() + 1, "\u6708").concat(s.date(), "\u65E5 - ").concat(e.month() + 1, "\u6708").concat(e.date(), "\u65E5");
    }
    if (view === 'day') return (0,_utils_datetime__WEBPACK_IMPORTED_MODULE_6__.friendlyDate)(selectedKey);
    return '日程列表';
  }, [view, selectedDay, selectedKey, weekKeys]);
  var shift = function shift(delta) {
    var unit = view === 'month' || view === 'list' ? 'month' : view === 'week' ? 'week' : 'day';
    setSelectedKey(selectedDay.add(delta, unit).format(_utils_datetime__WEBPACK_IMPORTED_MODULE_6__.DATE_FMT));
  };
  var goEdit = function goEdit(params) {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().navigateTo({
      url: "/pages/event-edit/index?".concat(params)
    });
  };
  var quickCreate = function quickCreate(key) {
    (_tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().vibrateShort) && _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().vibrateShort({
      type: 'light'
    });
    goEdit("date=".concat(encodeURIComponent(key)));
  };

  // 拖拽移动 / 缩放：重复日程按「仅本次」落地
  var toFormData = function toFormData(occ, start, end) {
    return {
      title: occ.event.title,
      categoryId: occ.event.categoryId,
      start: start,
      end: end,
      allDay: false,
      repeat: {
        type: 'none',
        interval: 1
      },
      location: occ.event.location,
      remark: occ.event.remark,
      reminders: occ.event.reminders,
      participants: occ.event.participants
    };
  };
  var handleMove = function handleMove(occ, newStart) {
    var duration = dayjs__WEBPACK_IMPORTED_MODULE_2___default()(occ.end, _utils_datetime__WEBPACK_IMPORTED_MODULE_6__.DT_FMT).diff(dayjs__WEBPACK_IMPORTED_MODULE_2___default()(occ.start, _utils_datetime__WEBPACK_IMPORTED_MODULE_6__.DT_FMT), 'minute');
    var newEnd = dayjs__WEBPACK_IMPORTED_MODULE_2___default()(newStart, _utils_datetime__WEBPACK_IMPORTED_MODULE_6__.DT_FMT).add(duration, 'minute').format(_utils_datetime__WEBPACK_IMPORTED_MODULE_6__.DT_FMT);
    var isRepeat = occ.event.repeat.type !== 'none';
    updateEvent(occ.event.id, toFormData(occ, newStart, newEnd), isRepeat ? 'this' : 'all', occ.dateKey);
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
      title: '已调整时间',
      icon: 'none',
      duration: 800
    });
  };
  var handleResize = function handleResize(occ, newEnd) {
    var isRepeat = occ.event.repeat.type !== 'none';
    updateEvent(occ.event.id, toFormData(occ, occ.start, newEnd), isRepeat ? 'this' : 'all', occ.dateKey);
  };
  var handleDelete = function handleDelete(occ) {
    var isRepeat = occ.event.repeat.type !== 'none';
    if (isRepeat) {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showActionSheet({
        itemList: ['仅删除本次', '删除全部重复事件'],
        success: function success(res) {
          deleteEvent(occ.event.id, res.tapIndex === 0 ? 'this' : 'all', occ.dateKey);
          setDetailKey(null);
          _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
            title: '已删除',
            icon: 'none'
          });
        },
        fail: function fail(err) {
          return console.error('[Calendar] action sheet failed:', err);
        }
      });
      return;
    }
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showModal({
      title: '删除日程',
      content: "\u786E\u5B9A\u5220\u9664\u300C".concat(occ.event.title, "\u300D\u5417\uFF1F\u5220\u9664\u540E\u4E0D\u53EF\u6062\u590D\u3002"),
      confirmText: '删除',
      confirmColor: '#dc2626',
      cancelText: '取消',
      success: function success(res) {
        if (res.confirm) {
          deleteEvent(occ.event.id, 'all');
          setDetailKey(null);
          _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
            title: '已删除',
            icon: 'none'
          });
        }
      }
    });
  };
  var toggleCat = function toggleCat(id) {
    setActiveCats(function (prev) {
      return prev.includes(id) ? prev.filter(function (x) {
        return x !== id;
      }) : [].concat((0,C_Users_14585_Desktop_Learning_undergraduateToTwo_TRAE_s_work_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_17__["default"])(prev), [id]);
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_18__.View, {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_14__["default"].page,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_18__.View, {
      className: _index_module_scss__WEBPACK_IMPORTED_MODULE_14__["default"].header,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_18__.View, {
        className: _index_module_scss__WEBPACK_IMPORTED_MODULE_14__["default"].navRow,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_18__.View, {
          className: _index_module_scss__WEBPACK_IMPORTED_MODULE_14__["default"].navSide,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_18__.View, {
            className: _index_module_scss__WEBPACK_IMPORTED_MODULE_14__["default"].navBtn,
            onClick: function onClick() {
              return shift(-1);
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_18__.Text, {
              className: _index_module_scss__WEBPACK_IMPORTED_MODULE_14__["default"].navArrow,
              children: "\u2039"
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_18__.View, {
          className: _index_module_scss__WEBPACK_IMPORTED_MODULE_14__["default"].titleBtn,
          onClick: function onClick() {
            return setPickerVisible(true);
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_18__.Text, {
            className: _index_module_scss__WEBPACK_IMPORTED_MODULE_14__["default"].titleText,
            children: headerTitle
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_18__.Text, {
            className: _index_module_scss__WEBPACK_IMPORTED_MODULE_14__["default"].caret,
            children: "\u25BE"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_18__.View, {
          className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(_index_module_scss__WEBPACK_IMPORTED_MODULE_14__["default"].navSide, _index_module_scss__WEBPACK_IMPORTED_MODULE_14__["default"].navSideRight),
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_18__.View, {
            className: _index_module_scss__WEBPACK_IMPORTED_MODULE_14__["default"].todayBtn,
            onClick: function onClick() {
              return setSelectedKey((0,_utils_datetime__WEBPACK_IMPORTED_MODULE_6__.todayKey)());
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_18__.Text, {
              className: _index_module_scss__WEBPACK_IMPORTED_MODULE_14__["default"].todayText,
              children: "\u4ECA\u5929"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_18__.View, {
            className: _index_module_scss__WEBPACK_IMPORTED_MODULE_14__["default"].navBtn,
            onClick: function onClick() {
              return shift(1);
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_18__.Text, {
              className: _index_module_scss__WEBPACK_IMPORTED_MODULE_14__["default"].navArrow,
              children: "\u203A"
            })
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_18__.View, {
        className: _index_module_scss__WEBPACK_IMPORTED_MODULE_14__["default"].segmented,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_components_SegmentedControl__WEBPACK_IMPORTED_MODULE_11__["default"], {
          options: VIEW_OPTIONS,
          value: view,
          onChange: setView
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_18__.ScrollView, {
        scrollX: true,
        className: _index_module_scss__WEBPACK_IMPORTED_MODULE_14__["default"].filterScroll,
        enhanced: true,
        showScrollbar: false,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_18__.View, {
          className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(_index_module_scss__WEBPACK_IMPORTED_MODULE_14__["default"].filterChip, activeCats.length === 0 && _index_module_scss__WEBPACK_IMPORTED_MODULE_14__["default"].filterChipActive),
          onClick: function onClick() {
            return setActiveCats([]);
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_18__.Text, {
            className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(_index_module_scss__WEBPACK_IMPORTED_MODULE_14__["default"].filterChipText, activeCats.length === 0 && _index_module_scss__WEBPACK_IMPORTED_MODULE_14__["default"].filterChipTextActive),
            children: "\u5168\u90E8"
          })
        }), _constants_categories__WEBPACK_IMPORTED_MODULE_5__.CATEGORIES.map(function (c) {
          var active = activeCats.includes(c.id);
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_18__.View, {
            className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(_index_module_scss__WEBPACK_IMPORTED_MODULE_14__["default"].filterChip, active && _index_module_scss__WEBPACK_IMPORTED_MODULE_14__["default"].filterChipActive),
            onClick: function onClick() {
              return toggleCat(c.id);
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_18__.Text, {
              className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(_index_module_scss__WEBPACK_IMPORTED_MODULE_14__["default"].filterChipText, active && _index_module_scss__WEBPACK_IMPORTED_MODULE_14__["default"].filterChipTextActive),
              children: [c.emoji, " ", c.name]
            })
          }, c.id);
        })]
      })]
    }), loading ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_18__.View, {
      className: _index_module_scss__WEBPACK_IMPORTED_MODULE_14__["default"].loading,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_18__.Text, {
        className: _index_module_scss__WEBPACK_IMPORTED_MODULE_14__["default"].loadingSpinner,
        children: "\u23F3"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_18__.Text, {
        className: _index_module_scss__WEBPACK_IMPORTED_MODULE_14__["default"].loadingText,
        children: "\u65E5\u7A0B\u52A0\u8F7D\u4E2D\u2026"
      })]
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_18__.View, {
      className: _index_module_scss__WEBPACK_IMPORTED_MODULE_14__["default"].content,
      children: [view === 'month' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_18__.ScrollView, {
        scrollY: true,
        className: _index_module_scss__WEBPACK_IMPORTED_MODULE_14__["default"].monthScroll,
        enhanced: true,
        showScrollbar: false,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_components_MonthView__WEBPACK_IMPORTED_MODULE_7__["default"], {
          cells: monthCells,
          selectedKey: selectedKey,
          occMap: monthOccMap,
          onSelect: setSelectedKey,
          onQuickCreate: quickCreate
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_18__.View, {
          className: _index_module_scss__WEBPACK_IMPORTED_MODULE_14__["default"].dayPanel,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_18__.View, {
            className: _index_module_scss__WEBPACK_IMPORTED_MODULE_14__["default"].dayPanelHeader,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_18__.View, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_18__.Text, {
                className: _index_module_scss__WEBPACK_IMPORTED_MODULE_14__["default"].dayPanelTitle,
                children: (0,_utils_datetime__WEBPACK_IMPORTED_MODULE_6__.friendlyDate)(selectedKey)
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_18__.Text, {
                className: _index_module_scss__WEBPACK_IMPORTED_MODULE_14__["default"].dayPanelCount,
                children: [' ', selectedOccs.length, " \u9879\u5B89\u6392"]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_18__.View, {
              className: _index_module_scss__WEBPACK_IMPORTED_MODULE_14__["default"].addMiniBtn,
              onClick: function onClick() {
                return goEdit("date=".concat(encodeURIComponent(selectedKey)));
              },
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_18__.Text, {
                className: _index_module_scss__WEBPACK_IMPORTED_MODULE_14__["default"].addMiniText,
                children: "+"
              })
            })]
          }), selectedOccs.length === 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_components_EmptyState__WEBPACK_IMPORTED_MODULE_13__["default"], {
            emoji: "\uD83C\uDF24\uFE0F",
            title: "\u8FD9\u5929\u8FD8\u6CA1\u6709\u5B89\u6392",
            subtitle: "\u70B9\u51FB\u53F3\u4E0A\u89D2 + \u6216\u957F\u6309\u65E5\u5386\u683C\u5B50\uFF0C\u5FEB\u901F\u6DFB\u52A0\u4EFB\u52A1"
          }) : selectedOccs.map(function (occ) {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_components_EventLine__WEBPACK_IMPORTED_MODULE_9__["default"], {
              occ: occ,
              onToggle: function onToggle() {
                return toggleDone(occ.event.id, occ.dateKey);
              },
              onTap: function onTap() {
                return setDetailKey(occ.key);
              }
            }, occ.key);
          })]
        })]
      }) : null, view === 'week' || view === 'day' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_components_TimeGridView__WEBPACK_IMPORTED_MODULE_8__["default"], {
        dateKeys: gridKeys,
        occurrences: gridOccs,
        hourHeight: view === 'week' ? 96 : 116,
        onCreate: function onCreate(start, end) {
          return goEdit("start=".concat(encodeURIComponent(start), "&end=").concat(encodeURIComponent(end)));
        },
        onTapOccurrence: function onTapOccurrence(occ) {
          return setDetailKey(occ.key);
        },
        onMoveOccurrence: handleMove,
        onResizeOccurrence: handleResize
      }, view + gridRange.start) : null, view === 'list' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_18__.ScrollView, {
        scrollY: true,
        className: _index_module_scss__WEBPACK_IMPORTED_MODULE_14__["default"].monthScroll,
        enhanced: true,
        showScrollbar: false,
        children: listGroups.length === 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_components_EmptyState__WEBPACK_IMPORTED_MODULE_13__["default"], {
          emoji: "\uD83D\uDDC2\uFE0F",
          title: "\u6CA1\u6709\u7B26\u5408\u6761\u4EF6\u7684\u65E5\u7A0B",
          subtitle: "\u8BD5\u8BD5\u5207\u6362\u5206\u7C7B\u7B5B\u9009\uFF0C\u6216\u65B0\u5EFA\u4E00\u4E2A\u4EFB\u52A1"
        }) : listGroups.map(function (g) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_18__.View, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_18__.View, {
              className: _index_module_scss__WEBPACK_IMPORTED_MODULE_14__["default"].groupHeader,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_18__.Text, {
                className: _index_module_scss__WEBPACK_IMPORTED_MODULE_14__["default"].groupHeaderText,
                children: (0,_utils_datetime__WEBPACK_IMPORTED_MODULE_6__.friendlyDate)(g.key)
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_18__.Text, {
                className: _index_module_scss__WEBPACK_IMPORTED_MODULE_14__["default"].groupHeaderCount,
                children: [g.occs.length, " \u9879"]
              })]
            }), g.occs.map(function (occ) {
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_components_EventLine__WEBPACK_IMPORTED_MODULE_9__["default"], {
                occ: occ,
                showDate: false,
                onToggle: function onToggle() {
                  return toggleDone(occ.event.id, occ.dateKey);
                },
                onTap: function onTap() {
                  return setDetailKey(occ.key);
                }
              }, occ.key);
            })]
          }, g.key);
        })
      }) : null]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_18__.View, {
      className: _index_module_scss__WEBPACK_IMPORTED_MODULE_14__["default"].fab,
      onClick: function onClick() {
        return goEdit("date=".concat(encodeURIComponent(view === 'list' ? (0,_utils_datetime__WEBPACK_IMPORTED_MODULE_6__.todayKey)() : selectedKey)));
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_18__.Text, {
        className: _index_module_scss__WEBPACK_IMPORTED_MODULE_14__["default"].fabText,
        children: "+"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_components_EventDetailModal__WEBPACK_IMPORTED_MODULE_10__["default"], {
      occ: detailOcc,
      onClose: function onClose() {
        return setDetailKey(null);
      },
      onEdit: function onEdit(occ) {
        setDetailKey(null);
        goEdit("id=".concat(occ.event.id, "&key=").concat(encodeURIComponent(occ.dateKey)));
      },
      onDelete: handleDelete,
      onToggleDone: function onToggleDone(occ) {
        return toggleDone(occ.event.id, occ.dateKey);
      }
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_components_YearMonthPicker__WEBPACK_IMPORTED_MODULE_12__["default"], {
      visible: pickerVisible,
      year: selectedDay.year(),
      month: selectedDay.month(),
      onClose: function onClose() {
        return setPickerVisible(false);
      },
      onSelect: function onSelect(y, m) {
        var day = Math.min(selectedDay.date(), dayjs__WEBPACK_IMPORTED_MODULE_2___default()().year(y).month(m).date(1).daysInMonth());
        setSelectedKey(dayjs__WEBPACK_IMPORTED_MODULE_2___default()().year(y).month(m).date(day).format(_utils_datetime__WEBPACK_IMPORTED_MODULE_6__.DATE_FMT));
        setPickerVisible(false);
      }
    })]
  });
};
/* harmony default export */ __webpack_exports__["default"] = (CalendarPage);

/***/ }),

/***/ "./src/components/EventDetailModal/index.tsx":
/*!***************************************************!*\
  !*** ./src/components/EventDetailModal/index.tsx ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var C_Users_14585_Desktop_Learning_undergraduateToTwo_TRAE_s_work_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants_categories__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/constants/categories */ "./src/constants/categories.ts");
/* harmony import */ var _utils_datetime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/datetime */ "./src/utils/datetime.ts");
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index.module.scss */ "./src/components/EventDetailModal/index.module.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");









// 星光配色：柔和金橙 + 暖白
var STAR_COLORS = ['#fde047', '#fbbf24', '#f59e0b', '#fff7d6', '#fcd34d'];
var PARTICLE_COUNT = 28;
var EventDetailModal = function EventDetailModal(_ref) {
  var occ = _ref.occ,
    onClose = _ref.onClose,
    onEdit = _ref.onEdit,
    onDelete = _ref.onDelete,
    onToggleDone = _ref.onToggleDone;
  // 粒子层仅在动效播放期间挂载
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = (0,C_Users_14585_Desktop_Learning_undergraduateToTwo_TRAE_s_work_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_7__["default"])(_useState, 2),
    fxOn = _useState2[0],
    setFxOn = _useState2[1];
  var runningRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  var cancelLoopRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);

  // 弹窗卸载/关闭时停止循环
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    return function () {
      runningRef.current = false;
      if (cancelLoopRef.current) cancelLoopRef.current();
    };
  }, []);

  // 四角星芒路径
  var drawSparkle = function drawSparkle(ctx, x, y, r, rot, color, alpha) {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(rot);
    ctx.globalAlpha = alpha;
    // 柔和光晕
    var glow = ctx.createRadialGradient(0, 0, 0, 0, 0, r * 2.6);
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
  var startStarBurst = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    if (runningRef.current) return;
    setFxOn(true);

    // 轮询查询：Canvas 条件渲染后需等待节点真正挂载
    var tries = 0;
    var MAX_TRIES = 12;
    var _queryOnce = function queryOnce() {
      tries += 1;
      var query = _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().createSelectorQuery();
      // 注意：fields() 返回 SelectorQuery，不能再链式调用 boundingClientRect()，
      // 用 rect: true 在同一个请求里取节点位置
      query.select('#fxCanvas').fields({
        node: true,
        rect: true,
        size: true
      });
      query.select('#fxDoneBtn').boundingClientRect();
      query.select('#fxDoneFlag').boundingClientRect();
      query.exec(function (res) {
        var canvasInfo = res && res[0];
        var btnRect = res && res[1];
        var flagRect = res && res[2];
        if ((!canvasInfo || !canvasInfo.node || !btnRect) && tries < MAX_TRIES) {
          setTimeout(_queryOnce, 60);
          return;
        }
        if (!canvasInfo || !canvasInfo.node || !btnRect) {
          console.warn('[StarBurst] 节点查询失败', {
            canvasInfo: canvasInfo,
            btnRect: btnRect,
            flagRect: flagRect
          });
          setFxOn(false);
          return;
        }
        launchBurst(canvasInfo, btnRect, flagRect);
      });
    };
    setTimeout(_queryOnce, 60);
    var launchBurst = function launchBurst(canvasInfo, btnRect, flagRect) {
      var canvas = canvasInfo.node;
      var ctx = canvas.getContext('2d');
      var dpr = _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().getSystemInfoSync().pixelRatio || 2;
      var w = canvasInfo.width;
      var h = canvasInfo.height;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.scale(dpr, dpr);
      var cLeft = canvasInfo.left || 0;
      var cTop = canvasInfo.top || 0;
      var sx = btnRect.left + btnRect.width / 2 - cLeft;
      var sy = btnRect.top + btnRect.height / 2 - cTop;
      // 标签已渲染则以标签中心为终点，否则回退到弹窗右上角
      var tx = flagRect ? flagRect.left + flagRect.width / 2 - cLeft : w - 56;
      var ty = flagRect ? flagRect.top + flagRect.height / 2 - cTop : 42;
      var dx = tx - sx;
      var dy = ty - sy;
      var dist = Math.hypot(dx, dy) || 1;
      var nx = -dy / dist;
      var ny = dx / dist;
      var now = Date.now();
      var particles = Array.from({
        length: PARTICLE_COUNT
      }, function () {
        // 控制点沿法向左右散开，并偏向按钮外侧，形成"迸发后回收"的弧线
        var side = Math.random() * 2 - 1;
        var amp = side * (50 + Math.random() * 150);
        var tCx = sx + dx * (0.15 + Math.random() * 0.35) + nx * amp;
        var tCy = sy + dy * (0.05 + Math.random() * 0.3) + ny * amp + 30 + Math.random() * 70;
        return {
          sx: sx,
          sy: sy,
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
      var _tick = function tick() {
        if (!runningRef.current) return;
        ctx.clearRect(0, 0, w, h);
        var tnow = Date.now();
        var alive = false;
        particles.forEach(function (p) {
          var local = tnow - p.born - p.delay;
          if (local < 0) {
            alive = true; // 尚未出生
            return;
          }
          var t = local / p.duration;
          if (t > 1) t = 1;
          alive = alive || t < 1;
          if (!p.started) {
            p.started = true;
            p.px = p.sx;
            p.py = p.sy;
          }
          var ease = 1 - Math.pow(1 - t, 3); // easeOutCubic
          var mt = 1 - ease;
          var x = mt * mt * p.sx + 2 * mt * ease * p.c1x + ease * ease * p.tx;
          var y = mt * mt * p.sy + 2 * mt * ease * p.c1y + ease * ease * p.ty;

          // 拖尾：流光渐变线段
          var trailAlpha = Math.min(1, t * 2) * (1 - t * 0.4);
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
          var scale = 1 - t * 0.85;
          var alpha = t < 0.7 ? 1 : Math.max(0, 1 - (t - 0.7) / 0.3);
          drawSparkle(ctx, x, y, p.size * scale, p.rot + t * 2, p.color, alpha);
          p.px = x;
          p.py = y;
        });
        if (alive || particles.some(function (p) {
          return tnow - p.born - p.delay < p.duration;
        })) {
          if (canvas.requestAnimationFrame) {
            var fid = canvas.requestAnimationFrame(_tick);
            cancelLoopRef.current = function () {
              return canvas.cancelAnimationFrame(fid);
            };
          } else {
            var tid = setTimeout(_tick, 16);
            cancelLoopRef.current = function () {
              return clearTimeout(tid);
            };
          }
        } else {
          // 全部汇聚后清空并卸载粒子层
          ctx.clearRect(0, 0, w, h);
          runningRef.current = false;
          cancelLoopRef.current = null;
          setFxOn(false);
        }
      };
      _tick();
    };
  }, []);

  // 兜底：极端情况下 3.5s 后强制收起粒子层
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!fxOn) return undefined;
    var t = setTimeout(function () {
      runningRef.current = false;
      if (cancelLoopRef.current) cancelLoopRef.current();
      setFxOn(false);
    }, 3500);
    return function () {
      return clearTimeout(t);
    };
  }, [fxOn]);
  var handleToggle = function handleToggle() {
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
  var event = occ.event;
  var cat = _constants_categories__WEBPACK_IMPORTED_MODULE_3__.CATEGORY_MAP[event.categoryId];
  var repeat = (0,_utils_datetime__WEBPACK_IMPORTED_MODULE_4__.repeatText)(event.repeat);
  var reminderLabels = event.reminders.slice().sort(function (a, b) {
    return b - a;
  }).map(function (m) {
    var _REMINDER_OPTIONS$fin;
    return ((_REMINDER_OPTIONS$fin = _constants_categories__WEBPACK_IMPORTED_MODULE_3__.REMINDER_OPTIONS.find(function (o) {
      return o.value === m;
    })) === null || _REMINDER_OPTIONS$fin === void 0 ? void 0 : _REMINDER_OPTIONS$fin.label) || "\u63D0\u524D ".concat(m, " \u5206\u949F");
  }).join('、');
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].mask,
    onClick: onClose,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
      className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].sheet,
      onClick: function onClick(e) {
        return e.stopPropagation();
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
        className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].handleBar
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
        className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].header,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
          className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].catChip,
          style: {
            background: cat.bg
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.Text, {
            className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].catText,
            style: {
              color: cat.color
            },
            children: [cat.emoji, " ", cat.name]
          })
        }), occ.done ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
          className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].doneFlag,
          id: "fxDoneFlag",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.Text, {
            className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].doneFlagText,
            children: "\u5DF2\u5B8C\u6210"
          })
        }) : null]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.Text, {
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_index_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].title, occ.done && _index_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].titleDone),
        children: event.title
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.ScrollView, {
        scrollY: true,
        className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].body,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
          className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].row,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.Text, {
            className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].rowIcon,
            children: "\uD83D\uDD50"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
            className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].rowContent,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.Text, {
              className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].rowLabel,
              children: event.allDay ? '全天' : (0,_utils_datetime__WEBPACK_IMPORTED_MODULE_4__.formatDT)(occ.start, 'HH:mm') + ' - ' + (0,_utils_datetime__WEBPACK_IMPORTED_MODULE_4__.formatDT)(occ.end, 'HH:mm')
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.Text, {
              className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].rowSub,
              children: [(0,_utils_datetime__WEBPACK_IMPORTED_MODULE_4__.friendlyDate)(occ.dateKey), repeat ? " \xB7 ".concat(repeat) : '']
            })]
          })]
        }), event.location ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
          className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].row,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.Text, {
            className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].rowIcon,
            children: "\uD83D\uDCCD"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.Text, {
            className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].rowLabel,
            children: event.location
          })]
        }) : null, reminderLabels ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
          className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].row,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.Text, {
            className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].rowIcon,
            children: "\uD83D\uDD14"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.Text, {
            className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].rowLabel,
            children: reminderLabels
          })]
        }) : null, event.participants.length ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
          className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].row,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.Text, {
            className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].rowIcon,
            children: "\uD83D\uDC65"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
            className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].rowContent,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
              className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].chips,
              children: event.participants.map(function (p) {
                return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
                  className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].personChip,
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.Text, {
                    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].personText,
                    children: p
                  })
                }, p);
              })
            })
          })]
        }) : null, event.remark ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
          className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].row,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.Text, {
            className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].rowIcon,
            children: "\uD83D\uDCDD"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.Text, {
            className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].remark,
            children: event.remark
          })]
        }) : null]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
        className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].footer,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
          id: "fxDoneBtn",
          className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_index_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].doneBtn, occ.done && _index_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].doneBtnUndo),
          onClick: handleToggle,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.Text, {
            className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].doneBtnText,
            children: occ.done ? '取消完成' : '标记完成'
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
          className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].secondaryRow,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
            className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].editBtn,
            onClick: function onClick() {
              return onEdit(occ);
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.Text, {
              className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].editBtnText,
              children: "\u7F16\u8F91"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
            className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].deleteBtn,
            onClick: function onClick() {
              return onDelete(occ);
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.Text, {
              className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].deleteBtnText,
              children: "\u5220\u9664"
            })
          })]
        })]
      }), fxOn ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.Canvas, {
        type: "2d",
        id: "fxCanvas",
        className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].fxCanvas
      }) : null]
    })
  });
};
/* harmony default export */ __webpack_exports__["default"] = (EventDetailModal);

/***/ }),

/***/ "./src/components/MonthView/index.tsx":
/*!********************************************!*\
  !*** ./src/components/MonthView/index.tsx ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants_categories__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/constants/categories */ "./src/constants/categories.ts");
/* harmony import */ var _utils_datetime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/datetime */ "./src/utils/datetime.ts");
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.module.scss */ "./src/components/MonthView/index.module.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");







var MonthView = function MonthView(_ref) {
  var cells = _ref.cells,
    selectedKey = _ref.selectedKey,
    occMap = _ref.occMap,
    onSelect = _ref.onSelect,
    onQuickCreate = _ref.onQuickCreate;
  var pressTimer = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var longFired = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  var clearTimer = function clearTimer() {
    if (pressTimer.current) {
      clearTimeout(pressTimer.current);
      pressTimer.current = null;
    }
  };
  var handleTouchStart = function handleTouchStart(key) {
    longFired.current = false;
    clearTimer();
    pressTimer.current = setTimeout(function () {
      longFired.current = true;
      onQuickCreate(key);
    }, 450);
  };
  var handleTouchEnd = function handleTouchEnd() {
    clearTimer();
  };
  var handleTap = function handleTap(key) {
    if (longFired.current) {
      longFired.current = false;
      return;
    }
    onSelect(key);
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].wrap,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, {
      className: _index_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].weekHeader,
      children: _utils_datetime__WEBPACK_IMPORTED_MODULE_3__.WEEK_HEADERS.map(function (w, i) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, {
          className: _index_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].weekCell,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.Text, {
            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_index_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].weekText, i >= 5 && _index_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].weekendText),
            children: w
          })
        }, w);
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, {
      className: _index_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].grid,
      children: cells.map(function (cell) {
        var occs = occMap[cell.key] || [];
        var dotColors = [];
        occs.forEach(function (o) {
          var c = _constants_categories__WEBPACK_IMPORTED_MODULE_2__.CATEGORY_MAP[o.event.categoryId].color;
          if (!dotColors.includes(c)) dotColors.push(c);
        });
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, {
          className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_index_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].cell, !cell.inMonth && _index_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].cellMuted, cell.key === selectedKey && _index_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].cellSelected, cell.isWeekend && cell.inMonth && _index_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].cellWeekend),
          onClick: function onClick() {
            return handleTap(cell.key);
          },
          onTouchStart: function onTouchStart() {
            return handleTouchStart(cell.key);
          },
          onTouchEnd: handleTouchEnd,
          onTouchMove: clearTimer,
          onTouchCancel: clearTimer,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, {
            className: _index_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].numRow,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, {
              className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_index_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].numBadge, cell.isToday && _index_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].numBadgeToday),
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.Text, {
                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_index_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].num, cell.isToday && _index_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].numToday, cell.isWeekend && cell.inMonth && !cell.isToday && _index_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].weekendNum),
                children: cell.dayNum
              })
            }), occs.length > 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.Text, {
              className: _index_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].count,
              children: occs.length > 99 ? '99+' : occs.length
            }) : null]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, {
            className: _index_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].dotRow,
            children: [dotColors.slice(0, 3).map(function (c, i) {
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, {
                className: _index_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].dot,
                style: {
                  background: c
                }
              }, "".concat(c, "-").concat(i));
            }), dotColors.length > 3 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, {
              className: _index_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].dotMore
            }) : null]
          })]
        }, cell.key);
      })
    })]
  });
};
/* harmony default export */ __webpack_exports__["default"] = (MonthView);

/***/ }),

/***/ "./src/components/TimeGridView/index.tsx":
/*!***********************************************!*\
  !*** ./src/components/TimeGridView/index.tsx ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var C_Users_14585_Desktop_Learning_undergraduateToTwo_TRAE_s_work_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _constants_categories__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/constants/categories */ "./src/constants/categories.ts");
/* harmony import */ var _utils_datetime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/utils/datetime */ "./src/utils/datetime.ts");
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index.module.scss */ "./src/components/TimeGridView/index.module.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");










var GUTTER_RPX = 72;
var TOTAL_RPX = 750;
var HOURS = Array.from({
  length: 24
}, function (_, i) {
  return i;
});
var rpxFactor = 0;
function getRpxFactor() {
  if (!rpxFactor) {
    if (false) {} else {
      try {
        rpxFactor = _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().getSystemInfoSync().windowWidth / TOTAL_RPX;
      } catch (err) {
        console.error('[TimeGrid] system info failed:', err);
        rpxFactor = 0.5;
      }
    }
  }
  return rpxFactor;
}

// rpx 数值按平台因子转 px（内联样式无法使用 rpx 单位）
var toPx = function toPx(rpx, factor) {
  return "".concat(Math.round(rpx * factor * 100) / 100, "px");
};
var snap30 = function snap30(min) {
  return Math.max(0, Math.floor(min / 30) * 30);
};
var snap15 = function snap15(min) {
  return Math.round(min / 15) * 15;
};
var pad2 = function pad2(n) {
  return String(n).padStart(2, '0');
};
var buildDT = function buildDT(key, minutes) {
  return "".concat(key, " ").concat(pad2(Math.floor(minutes / 60)), ":").concat(pad2((minutes % 60 + 60) % 60));
};
var TimeGridView = function TimeGridView(_ref) {
  var dateKeys = _ref.dateKeys,
    occurrences = _ref.occurrences,
    _ref$hourHeight = _ref.hourHeight,
    hourHeight = _ref$hourHeight === void 0 ? 104 : _ref$hourHeight,
    onCreate = _ref.onCreate,
    onTapOccurrence = _ref.onTapOccurrence,
    onMoveOccurrence = _ref.onMoveOccurrence,
    onResizeOccurrence = _ref.onResizeOccurrence;
  var factor = getRpxFactor();
  var pxPerHour = hourHeight * factor;
  var colWidthRpx = (TOTAL_RPX - GUTTER_RPX) / dateKeys.length;
  var totalHeightRpx = 24 * hourHeight;

  // 初始滚动到早上 8 点（scrollIntoView 锚点在 H5 端不稳定，用 scrollTop 兜底）
  var initialScrollTop = 8 * pxPerHour;
  var dragRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState2 = (0,C_Users_14585_Desktop_Learning_undergraduateToTwo_TRAE_s_work_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_useState, 2),
    scrollEnabled = _useState2[0],
    setScrollEnabled = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState4 = (0,C_Users_14585_Desktop_Learning_undergraduateToTwo_TRAE_s_work_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_useState3, 2),
    selection = _useState4[0],
    setSelection = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState6 = (0,C_Users_14585_Desktop_Learning_undergraduateToTwo_TRAE_s_work_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_useState5, 2),
    ghost = _useState6[0],
    setGhost = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(function () {
      return dayjs__WEBPACK_IMPORTED_MODULE_3___default()().hour() * 60 + dayjs__WEBPACK_IMPORTED_MODULE_3___default()().minute();
    }),
    _useState8 = (0,C_Users_14585_Desktop_Learning_undergraduateToTwo_TRAE_s_work_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_useState7, 2),
    nowMin = _useState8[0],
    setNowMin = _useState8[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var t = setInterval(function () {
      setNowMin(dayjs__WEBPACK_IMPORTED_MODULE_3___default()().hour() * 60 + dayjs__WEBPACK_IMPORTED_MODULE_3___default()().minute());
    }, 60 * 1000);
    return function () {
      return clearInterval(t);
    };
  }, []);

  // 按列分组
  var _useMemo = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
      var timed = {};
      var allDay = {};
      dateKeys.forEach(function (_, i) {
        timed[i] = [];
        allDay[i] = [];
      });
      occurrences.forEach(function (occ) {
        var col = dateKeys.indexOf(occ.dateKey);
        if (col < 0) return;
        if (occ.event.allDay) allDay[col].push(occ);else timed[col].push(occ);
      });
      Object.keys(timed).forEach(function (k) {
        timed[Number(k)].sort(function (a, b) {
          return a.start < b.start ? -1 : 1;
        });
      });
      return {
        timedByCol: timed,
        allDayByCol: allDay
      };
    }, [dateKeys, occurrences]),
    timedByCol = _useMemo.timedByCol,
    allDayByCol = _useMemo.allDayByCol;
  var minutesFromY = function minutesFromY(clientY, gridTop) {
    return (clientY - gridTop) / pxPerHour * 60;
  };
  var queryRects = function queryRects(ids) {
    return new Promise(function (resolve) {
      var query = _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().createSelectorQuery();
      ids.forEach(function (id) {
        return query.select("#".concat(id)).boundingClientRect();
      });
      query.exec(function (res) {
        return resolve(res);
      });
    });
  };

  // 点击 / 拖拽空白时间区
  var handleBgStart = function handleBgStart(e) {
    var touch = e.touches[0];
    var col = Number(e.currentTarget.dataset.col);
    dragRef.current = {
      mode: 'create',
      col: col,
      startX: touch.clientX,
      startY: touch.clientY,
      gridTop: 0,
      gridLeft: 0,
      colWidthPx: colWidthRpx * factor,
      moved: false,
      pendingTap: true
    };
    queryRects(['tgGrid']).then(function (_ref2) {
      var _ref3 = (0,C_Users_14585_Desktop_Learning_undergraduateToTwo_TRAE_s_work_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_ref2, 1),
        grid = _ref3[0];
      var drag = dragRef.current;
      if (!drag || !grid) return;
      drag.gridTop = grid.top;
      drag.gridLeft = grid.left;
      if (drag.pendingTap && !drag.moved) {
        // 快速点击：在该时刻创建 1 小时日程
        var anchor = snap30(minutesFromY(drag.startY, grid.top));
        onCreate(buildDT(dateKeys[drag.col], anchor), buildDT(dateKeys[drag.col], anchor + 60));
        dragRef.current = null;
      }
    });
  };

  // 点击 / 拖拽日程块
  var handleBlockStart = function handleBlockStart(e, occ) {
    var touch = e.touches[0];
    var col = dateKeys.indexOf(occ.dateKey);
    var blockId = "tgB-".concat(col, "-").concat(timedByCol[col].findIndex(function (o) {
      return o.key === occ.key;
    }));
    dragRef.current = {
      mode: 'move',
      col: col,
      startX: touch.clientX,
      startY: touch.clientY,
      gridTop: 0,
      gridLeft: 0,
      colWidthPx: colWidthRpx * factor,
      occ: occ,
      moved: false,
      pendingTap: true
    };
    queryRects(['tgGrid', blockId]).then(function (_ref4) {
      var _ref5 = (0,C_Users_14585_Desktop_Learning_undergraduateToTwo_TRAE_s_work_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_ref4, 2),
        grid = _ref5[0],
        block = _ref5[1];
      var drag = dragRef.current;
      if (!drag || !grid || !block) return;
      drag.gridTop = grid.top;
      drag.gridLeft = grid.left;
      drag.blockTopPx = block.top;
      drag.blockHeightPx = block.height;
      // 按住下边缘 → 缩放模式
      var offsetY = drag.startY - block.top;
      if (block.height - offsetY < 22) {
        drag.mode = 'resize';
      }
      // rect 回调晚于 touchend 时，在这里补发点击
      if (drag.pendingTap && !drag.moved) {
        dragRef.current = null;
        onTapOccurrence(drag.occ);
      }
    });
  };
  var handleMove = function handleMove(e) {
    var drag = dragRef.current;
    if (!drag || !drag.gridTop) return;
    var touch = e.touches[0];
    var dx = touch.clientX - drag.startX;
    var dy = touch.clientY - drag.startY;
    if (!drag.moved && Math.abs(dy) < 8 && Math.abs(dx) < 8) return;
    if (!drag.moved) {
      drag.moved = true;
      drag.pendingTap = false;
      setScrollEnabled(false);
    }
    if (drag.mode === 'create') {
      var anchor = snap30(minutesFromY(drag.startY, drag.gridTop));
      var cur = snap30(minutesFromY(touch.clientY, drag.gridTop));
      var startMin = Math.min(anchor, cur);
      var endMin = Math.max(anchor + 30, cur + 30);
      setSelection({
        col: drag.col,
        startMin: Math.max(0, startMin),
        endMin: Math.min(24 * 60, endMin)
      });
      return;
    }
    if (drag.mode === 'move' && drag.occ && drag.blockTopPx !== undefined) {
      setGhost({
        key: drag.occ.key,
        tx: dx,
        ty: dy,
        hDeltaPx: 0
      });
      return;
    }
    if (drag.mode === 'resize' && drag.occ) {
      setGhost({
        key: drag.occ.key,
        tx: 0,
        ty: 0,
        hDeltaPx: dy
      });
    }
  };
  var handleEnd = function handleEnd() {
    var drag = dragRef.current;
    if (!drag) return;
    if (!drag.moved) {
      // 点击事件块 → 详情（rect 已就绪时直接触发，否则等待 rect 回调补发）
      if ((drag.mode === 'move' || drag.mode === 'resize') && drag.occ && drag.blockTopPx !== undefined) {
        dragRef.current = null;
        setScrollEnabled(true);
        onTapOccurrence(drag.occ);
      }
      return;
    }
    if (drag.mode === 'create' && selection) {
      var sel = selection;
      var dur = Math.max(30, sel.endMin - sel.startMin);
      onCreate(buildDT(dateKeys[sel.col], sel.startMin), buildDT(dateKeys[sel.col], sel.startMin + dur));
    } else if (drag.mode === 'move' && drag.occ && drag.blockHeightPx !== undefined && ghost) {
      var _occ = drag.occ;
      var occStart = dayjs__WEBPACK_IMPORTED_MODULE_3___default()(_occ.start, _utils_datetime__WEBPACK_IMPORTED_MODULE_5__.DT_FMT);
      var startMinOfDay = occStart.hour() * 60 + occStart.minute();
      var durationMin = dayjs__WEBPACK_IMPORTED_MODULE_3___default()(_occ.end, _utils_datetime__WEBPACK_IMPORTED_MODULE_5__.DT_FMT).diff(occStart, 'minute');
      var targetCol = Math.min(dateKeys.length - 1, Math.max(0, drag.col + Math.round(ghost.tx / drag.colWidthPx)));
      var newMin = snap15(startMinOfDay + ghost.ty / pxPerHour * 60);
      var clamped = Math.min(Math.max(0, newMin), 24 * 60 - durationMin);
      var newStart = dayjs__WEBPACK_IMPORTED_MODULE_3___default()("".concat(dateKeys[targetCol], " 00:00"), _utils_datetime__WEBPACK_IMPORTED_MODULE_5__.DT_FMT).add(clamped, 'minute').format(_utils_datetime__WEBPACK_IMPORTED_MODULE_5__.DT_FMT);
      onMoveOccurrence(_occ, newStart);
    } else if (drag.mode === 'resize' && drag.occ && ghost) {
      var _occStart = dayjs__WEBPACK_IMPORTED_MODULE_3___default()(occ.start, _utils_datetime__WEBPACK_IMPORTED_MODULE_5__.DT_FMT);
      var _startMinOfDay = _occStart.hour() * 60 + _occStart.minute();
      var _durationMin = dayjs__WEBPACK_IMPORTED_MODULE_3___default()(occ.end, _utils_datetime__WEBPACK_IMPORTED_MODULE_5__.DT_FMT).diff(_occStart, 'minute');
      var newDuration = Math.min(24 * 60 - _startMinOfDay, Math.max(15, snap15(_durationMin + ghost.hDeltaPx / pxPerHour * 60)));
      var newEnd = _occStart.add(newDuration, 'minute').format(_utils_datetime__WEBPACK_IMPORTED_MODULE_5__.DT_FMT);
      onResizeOccurrence(occ, newEnd);
    }
    dragRef.current = null;
    setScrollEnabled(true);
    setSelection(null);
    setGhost(null);
  };
  var renderBlock = function renderBlock(occ, col, idx) {
    var cat = _constants_categories__WEBPACK_IMPORTED_MODULE_4__.CATEGORY_MAP[occ.event.categoryId];
    var startD = dayjs__WEBPACK_IMPORTED_MODULE_3___default()(occ.start, _utils_datetime__WEBPACK_IMPORTED_MODULE_5__.DT_FMT);
    var startMin = startD.hour() * 60 + startD.minute();
    var durationMin = Math.max(20, dayjs__WEBPACK_IMPORTED_MODULE_3___default()(occ.end, _utils_datetime__WEBPACK_IMPORTED_MODULE_5__.DT_FMT).diff(startD, 'minute'));
    var topRpx = startMin / 60 * hourHeight;
    var heightRpx = durationMin / 60 * hourHeight;
    var isGhost = ghost && ghost.key === occ.key;
    var finalHeightRpx = isGhost && ghost.hDeltaPx ? heightRpx + ghost.hDeltaPx / factor : heightRpx;
    var compact = finalHeightRpx < 46;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
      id: "tgB-".concat(col, "-").concat(idx),
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_index_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].block, occ.done && _index_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].blockDone),
      style: {
        top: toPx(topRpx, factor),
        height: toPx(finalHeightRpx, factor),
        background: cat.bg,
        borderLeft: "".concat(toPx(8, factor), " solid ").concat(occ.done ? '#c4cad6' : cat.color),
        transform: isGhost ? "translate(".concat(ghost.tx, "px, ").concat(ghost.ty, "px)") : 'none',
        zIndex: isGhost ? 20 : 10
      },
      catchTouchStart: function catchTouchStart(e) {
        return handleBlockStart(e, occ);
      },
      catchTouchMove: handleMove,
      catchTouchEnd: handleEnd,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.Text, {
        className: _index_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].blockTitle,
        style: {
          color: occ.done ? '#8a93a6' : cat.color
        },
        children: [occ.done ? '✓ ' : '', occ.event.title]
      }), !compact ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.Text, {
        className: _index_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].blockTime,
        children: startD.format(_utils_datetime__WEBPACK_IMPORTED_MODULE_5__.TIME_FMT)
      }) : null, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
        className: _index_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].resizeHandle
      })]
    }, occ.key);
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].wrap,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
      className: _index_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].dayHeader,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
        className: _index_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].gutterHead
      }), dateKeys.map(function (key) {
        var d = dayjs__WEBPACK_IMPORTED_MODULE_3___default()(key, _utils_datetime__WEBPACK_IMPORTED_MODULE_5__.DATE_FMT);
        var isToday = key === (0,_utils_datetime__WEBPACK_IMPORTED_MODULE_5__.todayKey)();
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
          className: _index_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].dayHead,
          style: {
            width: toPx(colWidthRpx, factor)
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.Text, {
            className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_index_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].weekday, isToday && _index_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].weekdayToday),
            children: ["\u5468", _utils_datetime__WEBPACK_IMPORTED_MODULE_5__.WEEKDAY_NAMES[d.day()]]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
            className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_index_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].dateBadge, isToday && _index_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].dateBadgeToday),
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.Text, {
              className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_index_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].dateText, isToday && _index_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].dateTextToday),
              children: d.date()
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
            className: _index_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].allDayBox,
            children: allDayByCol[dateKeys.indexOf(key)].map(function (occ) {
              var cat = _constants_categories__WEBPACK_IMPORTED_MODULE_4__.CATEGORY_MAP[occ.event.categoryId];
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
                className: _index_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].allDayChip,
                style: {
                  background: cat.bg,
                  borderLeft: "".concat(toPx(6, factor), " solid ").concat(cat.color)
                },
                onClick: function onClick() {
                  return onTapOccurrence(occ);
                },
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.Text, {
                  className: _index_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].allDayText,
                  style: {
                    color: cat.color
                  },
                  children: occ.event.title
                })
              }, occ.key);
            })
          })]
        }, key);
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.ScrollView, {
      scrollY: scrollEnabled,
      className: _index_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].scroll,
      enhanced: true,
      showScrollbar: false,
      scrollIntoView: "tgAnchor",
      scrollTop: initialScrollTop,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
        className: _index_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].gridInner,
        id: "tgGrid",
        style: {
          height: toPx(totalHeightRpx, factor)
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
          className: _index_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].gutter,
          style: {
            width: toPx(GUTTER_RPX, factor)
          },
          children: HOURS.map(function (h) {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
              className: _index_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].hourCell,
              style: {
                height: toPx(hourHeight, factor)
              },
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.Text, {
                className: _index_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].hourText,
                children: [pad2(h), ":00"]
              }), h === 8 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
                id: "tgAnchor",
                className: _index_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].anchor
              }) : null]
            }, h);
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
          className: _index_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].columns,
          children: dateKeys.map(function (key, col) {
            var isToday = key === (0,_utils_datetime__WEBPACK_IMPORTED_MODULE_5__.todayKey)();
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
              className: _index_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].column,
              style: {
                width: toPx(colWidthRpx, factor),
                height: toPx(totalHeightRpx, factor)
              },
              "data-col": col,
              onTouchStart: handleBgStart,
              onTouchMove: handleMove,
              onTouchEnd: handleEnd,
              children: [HOURS.map(function (h) {
                return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
                  className: _index_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].hourLine,
                  style: {
                    top: toPx(h * hourHeight, factor)
                  }
                }, h);
              }), isToday ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
                className: _index_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].nowLine,
                style: {
                  top: toPx(nowMin / 60 * hourHeight, factor)
                }
              }) : null, selection && selection.col === col ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
                className: _index_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].selection,
                style: {
                  top: toPx(selection.startMin / 60 * hourHeight, factor),
                  height: toPx((selection.endMin - selection.startMin) / 60 * hourHeight, factor)
                }
              }) : null, timedByCol[col].map(function (occ, idx) {
                return renderBlock(occ, col, idx);
              })]
            }, key);
          })
        })]
      })
    })]
  });
};
/* harmony default export */ __webpack_exports__["default"] = (TimeGridView);

/***/ }),

/***/ "./src/components/YearMonthPicker/index.tsx":
/*!**************************************************!*\
  !*** ./src/components/YearMonthPicker/index.tsx ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var C_Users_14585_Desktop_Learning_undergraduateToTwo_TRAE_s_work_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.module.scss */ "./src/components/YearMonthPicker/index.module.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");






var YearMonthPicker = function YearMonthPicker(_ref) {
  var visible = _ref.visible,
    year = _ref.year,
    month = _ref.month,
    onClose = _ref.onClose,
    onSelect = _ref.onSelect;
  var nowYear = new Date().getFullYear();
  var years = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return Array.from({
      length: 11
    }, function (_, i) {
      return nowYear - 5 + i;
    });
  }, [nowYear]);
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(year),
    _useState2 = (0,C_Users_14585_Desktop_Learning_undergraduateToTwo_TRAE_s_work_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_useState, 2),
    innerYear = _useState2[0],
    setInnerYear = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(month),
    _useState4 = (0,C_Users_14585_Desktop_Learning_undergraduateToTwo_TRAE_s_work_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_useState3, 2),
    innerMonth = _useState4[0],
    setInnerMonth = _useState4[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (visible) {
      setInnerYear(year);
      setInnerMonth(month);
    }
  }, [visible, year, month]);
  if (!visible) return null;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].mask,
    onClick: onClose,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
      className: _index_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].sheet,
      onClick: function onClick(e) {
        return e.stopPropagation();
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
        className: _index_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].header,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.Text, {
          className: _index_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].title,
          children: "\u9009\u62E9\u5E74\u6708"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.Text, {
          className: _index_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].close,
          onClick: onClose,
          children: "\u2715"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
        className: _index_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].body,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.ScrollView, {
          scrollY: true,
          className: _index_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].yearCol,
          scrollIntoView: "y-".concat(innerYear),
          children: years.map(function (y) {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
              id: "y-".concat(y),
              className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_index_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].yearItem, innerYear === y && _index_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].yearItemActive),
              onClick: function onClick() {
                return setInnerYear(y);
              },
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.Text, {
                children: [y, " \u5E74"]
              })
            }, y);
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
          className: _index_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].monthGrid,
          children: Array.from({
            length: 12
          }, function (_, i) {
            return i;
          }).map(function (m) {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
              className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_index_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].monthItem, innerYear === year && m === month && _index_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].monthItemCurrent, innerMonth === m && _index_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].monthItemActive),
              onClick: function onClick() {
                return setInnerMonth(m);
              },
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.Text, {
                children: [m + 1, " \u6708"]
              })
            }, m);
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
        className: _index_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].confirm,
        onClick: function onClick() {
          onSelect(innerYear, innerMonth);
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.Text, {
          className: _index_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].confirmText,
          children: "\u786E\u5B9A"
        })
      })]
    })
  });
};
/* harmony default export */ __webpack_exports__["default"] = (YearMonthPicker);

/***/ }),

/***/ "./src/pages/calendar/index.tsx":
/*!**************************************!*\
  !*** ./src/pages/calendar/index.tsx ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/dsl/common.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_calendar_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !!../../../node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/calendar/index!./index.tsx */ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/calendar/index!./src/pages/calendar/index.tsx");


var config = {"navigationBarTitleText":"任务日历","enablePullDownRefresh":false};



var taroOption = (0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.createPageConfig)(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_calendar_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"], 'pages/calendar/index', {root:{cn:[]}}, config || {})
if (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_calendar_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"] && _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_calendar_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"].behaviors) {
  taroOption.behaviors = (taroOption.behaviors || []).concat(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_calendar_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"].behaviors)
}
var inst = Page(taroOption)



/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_calendar_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./src/components/EventDetailModal/index.module.scss":
/*!***********************************************************!*\
  !*** ./src/components/EventDetailModal/index.module.scss ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__) {

// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["default"] = ({"mask":"index-module__mask___r64pn","sheet":"index-module__sheet___NL1cf","fxCanvas":"index-module__fxCanvas___dd2Nn","handleBar":"index-module__handleBar___AH4SM","header":"index-module__header___S_3ve","catChip":"index-module__catChip___hRTuZ","catText":"index-module__catText___DPj62","doneFlag":"index-module__doneFlag___jTych","doneFlagPop":"index-module__doneFlagPop___LNV3I","doneFlagText":"index-module__doneFlagText___p2YES","title":"index-module__title___a4CTv","titleDone":"index-module__titleDone___uYnm_","body":"index-module__body___eUOYZ","row":"index-module__row___P7ynt","rowIcon":"index-module__rowIcon___gSW5F","rowContent":"index-module__rowContent___ir5aw","rowLabel":"index-module__rowLabel___tLJcO","rowSub":"index-module__rowSub___QKAQ4","remark":"index-module__remark___ctwl_","chips":"index-module__chips___DBt7D","personChip":"index-module__personChip___K34Or","personText":"index-module__personText___Ii6iT","footer":"index-module__footer___amvx8","doneBtn":"index-module__doneBtn___sja1S","doneBtnUndo":"index-module__doneBtnUndo___T0HI_","doneBtnText":"index-module__doneBtnText___xP4DM","secondaryRow":"index-module__secondaryRow___OqVPs","editBtn":"index-module__editBtn___rKR_6","editBtnText":"index-module__editBtnText___KENVa","deleteBtn":"index-module__deleteBtn___THRe1","deleteBtnText":"index-module__deleteBtnText___ptPOJ"});

/***/ }),

/***/ "./src/components/MonthView/index.module.scss":
/*!****************************************************!*\
  !*** ./src/components/MonthView/index.module.scss ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__) {

// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["default"] = ({"wrap":"index-module__wrap___PaPLR","weekHeader":"index-module__weekHeader___iFfe4","weekCell":"index-module__weekCell___qV779","weekText":"index-module__weekText___DGAgA","weekendText":"index-module__weekendText___6OFWI","grid":"index-module__grid___DTNj9","cell":"index-module__cell___d9ptu","cellMuted":"index-module__cellMuted___Htsco","cellWeekend":"index-module__cellWeekend___pDIcw","cellSelected":"index-module__cellSelected___TG3NJ","numRow":"index-module__numRow___c6zaB","numBadge":"index-module__numBadge___lxFlY","numBadgeToday":"index-module__numBadgeToday___AD46n","num":"index-module__num___yKKgg","numToday":"index-module__numToday___hBszF","weekendNum":"index-module__weekendNum___LHRom","count":"index-module__count____k_Ru","dotRow":"index-module__dotRow___ijCtW","dot":"index-module__dot___iUVXY","dotMore":"index-module__dotMore___CNlv8"});

/***/ }),

/***/ "./src/components/TimeGridView/index.module.scss":
/*!*******************************************************!*\
  !*** ./src/components/TimeGridView/index.module.scss ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__) {

// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["default"] = ({"wrap":"index-module__wrap___RIBZC","dayHeader":"index-module__dayHeader___HMpAR","gutterHead":"index-module__gutterHead___kCUF6","dayHead":"index-module__dayHead___IID7i","weekday":"index-module__weekday___tU3LB","weekdayToday":"index-module__weekdayToday___Ve0g9","dateBadge":"index-module__dateBadge___QWfFw","dateBadgeToday":"index-module__dateBadgeToday___D1cLD","dateText":"index-module__dateText___sl5RQ","dateTextToday":"index-module__dateTextToday___zRWjN","allDayBox":"index-module__allDayBox___eUL_p","allDayChip":"index-module__allDayChip___tRtj8","allDayText":"index-module__allDayText___hyvSe","scroll":"index-module__scroll___rw86n","gridInner":"index-module__gridInner___Ns319","gutter":"index-module__gutter___G3hBX","hourCell":"index-module__hourCell___t6sLD","hourText":"index-module__hourText___xRoxg","anchor":"index-module__anchor___ACaWf","columns":"index-module__columns___rloVo","column":"index-module__column___iKNw0","hourLine":"index-module__hourLine___kyGGD","nowLine":"index-module__nowLine___D_Ro9","selection":"index-module__selection___XZCPi","block":"index-module__block___y53Z9","blockDone":"index-module__blockDone___oOyFU","blockTitle":"index-module__blockTitle___bkrqa","blockTime":"index-module__blockTime___eCrI5","resizeHandle":"index-module__resizeHandle___P8Lm9"});

/***/ }),

/***/ "./src/components/YearMonthPicker/index.module.scss":
/*!**********************************************************!*\
  !*** ./src/components/YearMonthPicker/index.module.scss ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__) {

// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["default"] = ({"mask":"index-module__mask___wf2VP","sheet":"index-module__sheet___nWGZb","header":"index-module__header___UxmML","title":"index-module__title___U4OtB","close":"index-module__close___ZIqeV","body":"index-module__body___ndrRk","yearCol":"index-module__yearCol___NRk_M","yearItem":"index-module__yearItem___Lfl2b","yearItemActive":"index-module__yearItemActive___HYcA9","monthGrid":"index-module__monthGrid___JyQq0","monthItem":"index-module__monthItem___BrUbF","monthItemCurrent":"index-module__monthItemCurrent___GkrFO","monthItemActive":"index-module__monthItemActive___AsbfT","confirm":"index-module__confirm___L_H47","confirmText":"index-module__confirmText___k4_3K"});

/***/ }),

/***/ "./src/pages/calendar/index.module.scss":
/*!**********************************************!*\
  !*** ./src/pages/calendar/index.module.scss ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__) {

// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["default"] = ({"page":"index-module__page___JzQxX","header":"index-module__header___LwUJt","navRow":"index-module__navRow___RRD2S","navSide":"index-module__navSide___Q56Og","navSideRight":"index-module__navSideRight___rdAme","navBtn":"index-module__navBtn___HtcDx","navArrow":"index-module__navArrow___fdnhz","titleBtn":"index-module__titleBtn___qBFul","titleText":"index-module__titleText___JH9cj","caret":"index-module__caret___HqDpv","todayBtn":"index-module__todayBtn___cixgD","todayText":"index-module__todayText___GFa4b","segmented":"index-module__segmented___Gx9Ye","filterScroll":"index-module__filterScroll___ccdHU","filterChip":"index-module__filterChip___dt08W","filterChipActive":"index-module__filterChipActive___IX_3q","filterChipText":"index-module__filterChipText___x6aKZ","filterChipTextActive":"index-module__filterChipTextActive___TP8Bu","content":"index-module__content___Rvb0N","monthScroll":"index-module__monthScroll___LOu2l","dayPanel":"index-module__dayPanel___K2Sy1","dayPanelHeader":"index-module__dayPanelHeader___XjbeS","dayPanelTitle":"index-module__dayPanelTitle___I3lgB","dayPanelCount":"index-module__dayPanelCount___er9AY","addMiniBtn":"index-module__addMiniBtn___ldd_G","addMiniText":"index-module__addMiniText___yIvMb","groupHeader":"index-module__groupHeader___BmRrR","groupHeaderText":"index-module__groupHeaderText___p9v0p","groupHeaderCount":"index-module__groupHeaderCount___PA7DT","loading":"index-module__loading___iXiqe","loadingSpinner":"index-module__loadingSpinner___mid3o","spin":"index-module__spin___YX9Yq","loadingText":"index-module__loadingText___FMLhX","fab":"index-module__fab___enX_w","fabText":"index-module__fabText___PQfWA","hint":"index-module__hint___qsNmP"});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","vendors","common"], function() { return __webpack_exec__("./src/pages/calendar/index.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map