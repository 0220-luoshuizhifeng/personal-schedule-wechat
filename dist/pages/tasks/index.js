"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/tasks/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/tasks/index!./src/pages/tasks/index.tsx":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/tasks/index!./src/pages/tasks/index.tsx ***!
  \****************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var C_Users_14585_Desktop_Learning_undergraduateToTwo_TRAE_s_work_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var C_Users_14585_Desktop_Learning_undergraduateToTwo_TRAE_s_work_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store_scheduleStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/store/scheduleStore */ "./src/store/scheduleStore.ts");
/* harmony import */ var _constants_categories__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/constants/categories */ "./src/constants/categories.ts");
/* harmony import */ var _utils_datetime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/utils/datetime */ "./src/utils/datetime.ts");
/* harmony import */ var _components_EventLine__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/EventLine */ "./src/components/EventLine/index.tsx");
/* harmony import */ var _components_SegmentedControl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/SegmentedControl */ "./src/components/SegmentedControl/index.tsx");
/* harmony import */ var _components_EmptyState__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/components/EmptyState */ "./src/components/EmptyState/index.tsx");
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./index.module.scss */ "./src/pages/tasks/index.module.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");















var RANGE_OPTIONS = [{
  value: 'all',
  label: '全部'
}, {
  value: 'today',
  label: '今天'
}, {
  value: 'tomorrow',
  label: '明天'
}, {
  value: 'week',
  label: '本周'
}];
var TasksPage = function TasksPage() {
  var events = (0,_store_scheduleStore__WEBPACK_IMPORTED_MODULE_4__.useScheduleStore)(function (s) {
    return s.events;
  });
  var toggleDone = (0,_store_scheduleStore__WEBPACK_IMPORTED_MODULE_4__.useScheduleStore)(function (s) {
    return s.toggleDone;
  });
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState2 = (0,C_Users_14585_Desktop_Learning_undergraduateToTwo_TRAE_s_work_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_12__["default"])(_useState, 2),
    keyword = _useState2[0],
    setKeyword = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('tomorrow'),
    _useState4 = (0,C_Users_14585_Desktop_Learning_undergraduateToTwo_TRAE_s_work_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_12__["default"])(_useState3, 2),
    range = _useState4[0],
    setRange = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState6 = (0,C_Users_14585_Desktop_Learning_undergraduateToTwo_TRAE_s_work_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_12__["default"])(_useState5, 2),
    activeCats = _useState6[0],
    setActiveCats = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState8 = (0,C_Users_14585_Desktop_Learning_undergraduateToTwo_TRAE_s_work_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_12__["default"])(_useState7, 2),
    loading = _useState8[0],
    setLoading = _useState8[1];
  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(function () {
    var t = setTimeout(function () {
      return setLoading(false);
    }, 400);
    return function () {
      return clearTimeout(t);
    };
  }, []);
  var tk = (0,_utils_datetime__WEBPACK_IMPORTED_MODULE_6__.todayKey)();
  var tomorrowKey = dayjs__WEBPACK_IMPORTED_MODULE_2___default()().add(1, 'day').format(_utils_datetime__WEBPACK_IMPORTED_MODULE_6__.DATE_FMT);

  // 明天聚焦
  var tomorrowOccs = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return (0,_utils_datetime__WEBPACK_IMPORTED_MODULE_6__.expandAll)(events, tomorrowKey, tomorrowKey).sort(function (a, b) {
      return a.start < b.start ? -1 : 1;
    });
  }, [events, tomorrowKey]);
  var tomorrowDone = tomorrowOccs.filter(function (o) {
    return o.done;
  }).length;
  var tomorrowPct = tomorrowOccs.length ? Math.round(tomorrowDone / tomorrowOccs.length * 100) : 0;

  // 筛选结果
  var rangeResult = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    var start = tk;
    var end = dayjs__WEBPACK_IMPORTED_MODULE_2___default()().add(60, 'day').format(_utils_datetime__WEBPACK_IMPORTED_MODULE_6__.DATE_FMT);
    if (range === 'today') end = tk;
    if (range === 'tomorrow') {
      start = tomorrowKey;
      end = tomorrowKey;
    }
    if (range === 'week') {
      var wk = (0,_utils_datetime__WEBPACK_IMPORTED_MODULE_6__.weekDates)(tk);
      start = wk[0];
      end = wk[6];
    }
    var kw = keyword.trim().toLowerCase();
    return (0,_utils_datetime__WEBPACK_IMPORTED_MODULE_6__.expandAll)(events, start, end).filter(function (o) {
      return activeCats.length === 0 || activeCats.includes(o.event.categoryId);
    }).filter(function (o) {
      return !kw || o.event.title.toLowerCase().includes(kw) || (o.event.remark || '').toLowerCase().includes(kw);
    }).sort(function (a, b) {
      return a.start < b.start ? -1 : 1;
    });
  }, [events, range, keyword, activeCats, tk, tomorrowKey]);

  // 按日期分组
  var groups = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    var list = [];
    rangeResult.forEach(function (occ) {
      var g = list.find(function (x) {
        return x.key === occ.dateKey;
      });
      if (g) g.occs.push(occ);else list.push({
        key: occ.dateKey,
        occs: [occ]
      });
    });
    return list;
  }, [rangeResult]);
  var isOverdue = function isOverdue(occ) {
    return !occ.done && dayjs__WEBPACK_IMPORTED_MODULE_2___default()(occ.end, _utils_datetime__WEBPACK_IMPORTED_MODULE_6__.DT_FMT).isBefore(dayjs__WEBPACK_IMPORTED_MODULE_2___default()());
  };
  var toggleCat = function toggleCat(id) {
    setActiveCats(function (prev) {
      return prev.includes(id) ? prev.filter(function (x) {
        return x !== id;
      }) : [].concat((0,C_Users_14585_Desktop_Learning_undergraduateToTwo_TRAE_s_work_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_13__["default"])(prev), [id]);
    });
  };
  var goCreate = function goCreate() {
    var date = range === 'today' ? tk : range === 'all' || range === 'week' ? tk : tomorrowKey;
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().navigateTo({
      url: "/pages/event-edit/index?date=".concat(encodeURIComponent(date))
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].page,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
      className: _index_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].focusCard,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
        className: _index_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].focusTop,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Text, {
            className: _index_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].focusLabel,
            children: ["\u660E\u5929\u8981\u505A\u7684\u4E8B \xB7 ", (0,_utils_datetime__WEBPACK_IMPORTED_MODULE_6__.formatDT)("".concat(tomorrowKey, " 00:00"), 'M月D日')]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Text, {
            className: _index_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].focusDate,
            children: tomorrowOccs.length ? "".concat(tomorrowDone, "/").concat(tomorrowOccs.length, " \u5DF2\u5B8C\u6210") : '暂无安排'
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Text, {
          className: _index_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].focusEmoji,
          children: "\uD83C\uDF05"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
        className: _index_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].progressRow,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
          className: _index_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].progressTrack,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
            className: _index_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].progressFill,
            style: {
              width: "".concat(tomorrowPct, "%")
            }
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Text, {
          className: _index_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].progressText,
          children: [tomorrowPct, "%"]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
        className: _index_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].focusList,
        children: tomorrowOccs.length === 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
          className: _index_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].focusEmpty,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Text, {
            children: "\u660E\u5929\u8FD8\u6CA1\u6709\u4EFB\u52A1\uFF0C\u70B9\u51FB\u53F3\u4E0B\u89D2 + \u6DFB\u52A0\u5427"
          })
        }) : tomorrowOccs.slice(0, 4).map(function (occ) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
            className: _index_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].focusItem,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
              className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(_index_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].focusCheck, occ.done && _index_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].focusCheckDone),
              onClick: function onClick() {
                return toggleDone(occ.event.id, occ.dateKey);
              },
              children: occ.done ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Text, {
                className: _index_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].focusCheckIcon,
                children: "\u2713"
              }) : null
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Text, {
              className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(_index_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].focusItemTitle, occ.done && _index_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].focusItemTitleDone),
              children: occ.event.title
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Text, {
              className: _index_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].focusItemTime,
              children: occ.event.allDay ? '全天' : (0,_utils_datetime__WEBPACK_IMPORTED_MODULE_6__.formatDT)(occ.start, 'HH:mm')
            })]
          }, occ.key);
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
      className: _index_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].searchBar,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Text, {
        className: _index_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].searchIcon,
        children: "\uD83D\uDD0D"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Input, {
        className: _index_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].searchInput,
        placeholder: "\u641C\u7D22\u4EFB\u52A1\u6807\u9898\u6216\u5907\u6CE8",
        placeholderStyle: "color:#8a93a6",
        value: keyword,
        onInput: function onInput(e) {
          return setKeyword(e.detail.value);
        },
        confirmType: "search"
      }), keyword ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
        className: _index_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].clearBtn,
        onClick: function onClick() {
          return setKeyword('');
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Text, {
          className: _index_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].clearText,
          children: "\u2715"
        })
      }) : null]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
      className: _index_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].rangeSeg,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_components_SegmentedControl__WEBPACK_IMPORTED_MODULE_8__["default"], {
        options: RANGE_OPTIONS,
        value: range,
        onChange: setRange
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.ScrollView, {
      scrollX: true,
      className: _index_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].filterScroll,
      enhanced: true,
      showScrollbar: false,
      children: _constants_categories__WEBPACK_IMPORTED_MODULE_5__.CATEGORIES.map(function (c) {
        var active = activeCats.includes(c.id);
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
          className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(_index_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].filterChip, active && _index_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].filterChipActive),
          onClick: function onClick() {
            return toggleCat(c.id);
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Text, {
            className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(_index_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].filterChipText, active && _index_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].filterChipTextActive),
            children: [c.emoji, " ", c.name]
          })
        }, c.id);
      })
    }), loading ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
      className: _index_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].loading,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Text, {
        children: "\u23F3"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Text, {
        className: _index_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].loadingText,
        children: "\u4EFB\u52A1\u52A0\u8F7D\u4E2D\u2026"
      })]
    }) : groups.length === 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_components_EmptyState__WEBPACK_IMPORTED_MODULE_9__["default"], {
      emoji: "\uD83D\uDDD2\uFE0F",
      title: keyword ? '没有找到相关任务' : '这个时间段还没有任务',
      subtitle: keyword ? '换个关键词试试' : '点击右下角 + 安排一个新任务'
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Text, {
        className: _index_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].resultMeta,
        children: ["\u5171 ", rangeResult.length, " \u9879\u4EFB\u52A1"]
      }), groups.map(function (g) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_components_EventLine__WEBPACK_IMPORTED_MODULE_7__.DateGroupHeader, {
            dateKey: g.key,
            extra: "".concat(g.occs.length, " \u9879")
          }), g.occs.map(function (occ) {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_components_EventLine__WEBPACK_IMPORTED_MODULE_7__["default"], {
              occ: occ,
              overdue: isOverdue(occ),
              onToggle: function onToggle() {
                return toggleDone(occ.event.id, occ.dateKey);
              },
              onTap: function onTap() {
                return _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().navigateTo({
                  url: "/pages/event-edit/index?id=".concat(occ.event.id, "&key=").concat(encodeURIComponent(occ.dateKey), "&view=1")
                });
              }
            }, occ.key);
          })]
        }, g.key);
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
      className: _index_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].fab,
      onClick: goCreate,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Text, {
        className: _index_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].fabText,
        children: "+"
      })
    })]
  });
};
/* harmony default export */ __webpack_exports__["default"] = (TasksPage);

/***/ }),

/***/ "./src/pages/tasks/index.tsx":
/*!***********************************!*\
  !*** ./src/pages/tasks/index.tsx ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/dsl/common.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_tasks_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !!../../../node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/tasks/index!./index.tsx */ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/tasks/index!./src/pages/tasks/index.tsx");


var config = {"navigationBarTitleText":"任务","enablePullDownRefresh":false};



var taroOption = (0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.createPageConfig)(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_tasks_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"], 'pages/tasks/index', {root:{cn:[]}}, config || {})
if (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_tasks_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"] && _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_tasks_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"].behaviors) {
  taroOption.behaviors = (taroOption.behaviors || []).concat(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_tasks_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"].behaviors)
}
var inst = Page(taroOption)



/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_tasks_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./src/pages/tasks/index.module.scss":
/*!*******************************************!*\
  !*** ./src/pages/tasks/index.module.scss ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__) {

// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["default"] = ({"page":"index-module__page___rTmiN","focusCard":"index-module__focusCard___zbKwp","focusTop":"index-module__focusTop___y1eIP","focusLabel":"index-module__focusLabel___YB6pm","focusDate":"index-module__focusDate___kDF77","focusEmoji":"index-module__focusEmoji___ulwfq","progressRow":"index-module__progressRow___BwJnl","progressTrack":"index-module__progressTrack___mabwh","progressFill":"index-module__progressFill___e9eQX","progressText":"index-module__progressText___R48f0","focusList":"index-module__focusList___WEqNQ","focusItem":"index-module__focusItem___Cpj22","focusCheck":"index-module__focusCheck___uNMdT","focusCheckDone":"index-module__focusCheckDone___bqssO","focusCheckIcon":"index-module__focusCheckIcon___WsNjs","focusItemTitle":"index-module__focusItemTitle___OwxHR","focusItemTitleDone":"index-module__focusItemTitleDone___mghvD","focusItemTime":"index-module__focusItemTime___CMrqt","focusEmpty":"index-module__focusEmpty___6uThy","searchBar":"index-module__searchBar___S7Rlq","searchIcon":"index-module__searchIcon___ylkz4","searchInput":"index-module__searchInput___CB18p","clearBtn":"index-module__clearBtn___BLO90","clearText":"index-module__clearText___PsCrN","rangeSeg":"index-module__rangeSeg___cmcSb","filterScroll":"index-module__filterScroll___t0vB8","filterChip":"index-module__filterChip___O7VJB","filterChipActive":"index-module__filterChipActive___KVS8y","filterChipText":"index-module__filterChipText___Kf6cn","filterChipTextActive":"index-module__filterChipTextActive___n9JsW","resultMeta":"index-module__resultMeta___Pix9o","fab":"index-module__fab___QuOim","fabText":"index-module__fabText___lnwm3","loading":"index-module__loading___RInt8","loadingText":"index-module__loadingText___CKwMg"});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","vendors","common"], function() { return __webpack_exec__("./src/pages/tasks/index.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map