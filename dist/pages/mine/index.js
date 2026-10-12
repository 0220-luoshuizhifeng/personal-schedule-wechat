"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/mine/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/mine/index!./src/pages/mine/index.tsx":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/mine/index!./src/pages/mine/index.tsx ***!
  \**************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var C_Users_14585_Desktop_Learning_undergraduateToTwo_TRAE_s_work_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_scheduleStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/store/scheduleStore */ "./src/store/scheduleStore.ts");
/* harmony import */ var _constants_categories__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/constants/categories */ "./src/constants/categories.ts");
/* harmony import */ var _utils_datetime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/utils/datetime */ "./src/utils/datetime.ts");
/* harmony import */ var _services_reminder__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/services/reminder */ "./src/services/reminder.ts");
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./index.module.scss */ "./src/pages/mine/index.module.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");











var MinePage = function MinePage() {
  var events = (0,_store_scheduleStore__WEBPACK_IMPORTED_MODULE_3__.useScheduleStore)(function (s) {
    return s.events;
  });
  var settings = (0,_store_scheduleStore__WEBPACK_IMPORTED_MODULE_3__.useScheduleStore)(function (s) {
    return s.settings;
  });
  var setSettings = (0,_store_scheduleStore__WEBPACK_IMPORTED_MODULE_3__.useScheduleStore)(function (s) {
    return s.setSettings;
  });
  var resetAll = (0,_store_scheduleStore__WEBPACK_IMPORTED_MODULE_3__.useScheduleStore)(function (s) {
    return s.resetAll;
  });
  var tk = (0,_utils_datetime__WEBPACK_IMPORTED_MODULE_5__.todayKey)();
  var tomorrowK = dayjs__WEBPACK_IMPORTED_MODULE_2___default()().add(1, 'day').format(_utils_datetime__WEBPACK_IMPORTED_MODULE_5__.DATE_FMT);
  var monthEnd = dayjs__WEBPACK_IMPORTED_MODULE_2___default()().add(30, 'day').format(_utils_datetime__WEBPACK_IMPORTED_MODULE_5__.DATE_FMT);
  var todayOccs = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return (0,_utils_datetime__WEBPACK_IMPORTED_MODULE_5__.expandAll)(events, tk, tk);
  }, [events, tk]);
  var todayDone = todayOccs.filter(function (o) {
    return o.done;
  }).length;
  var todayPct = todayOccs.length ? Math.round(todayDone / todayOccs.length * 100) : 0;
  var tomorrowPending = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return (0,_utils_datetime__WEBPACK_IMPORTED_MODULE_5__.expandAll)(events, tomorrowK, tomorrowK).filter(function (o) {
      return !o.done;
    }).length;
  }, [events, tomorrowK]);

  // 连续完成天数：从今天往前，每天有任务且全部完成
  var streak = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    var count = 0;
    for (var i = 0; i < 60; i += 1) {
      var key = dayjs__WEBPACK_IMPORTED_MODULE_2___default()().subtract(i, 'day').format(_utils_datetime__WEBPACK_IMPORTED_MODULE_5__.DATE_FMT);
      var occs = (0,_utils_datetime__WEBPACK_IMPORTED_MODULE_5__.expandAll)(events, key, key);
      if (occs.length === 0) break;
      if (occs.every(function (o) {
        return o.done;
      })) count += 1;else break;
    }
    return count;
  }, [events]);
  var moduleCounts = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    var all = (0,_utils_datetime__WEBPACK_IMPORTED_MODULE_5__.expandAll)(events, tk, monthEnd);
    return _constants_categories__WEBPACK_IMPORTED_MODULE_4__.CATEGORIES.map(function (c) {
      return (0,C_Users_14585_Desktop_Learning_undergraduateToTwo_TRAE_s_work_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_9__["default"])((0,C_Users_14585_Desktop_Learning_undergraduateToTwo_TRAE_s_work_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_9__["default"])({}, c), {}, {
        count: all.filter(function (o) {
          return o.event.categoryId === c.id;
        }).length
      });
    });
  }, [events, tk, monthEnd]);
  var handleReset = function handleReset() {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showModal({
      title: '重置数据',
      content: '将清空全部日程并恢复为示例任务，确定继续吗？',
      confirmText: '重置',
      confirmColor: '#dc2626',
      cancelText: '取消',
      success: function success(res) {
        if (res.confirm) {
          resetAll();
          _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
            title: '已重置',
            icon: 'success'
          });
        }
      }
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].page,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
      className: _index_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].profileCard,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
        className: _index_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].avatar,
        children: "\uD83D\uDCCB"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.Text, {
          className: _index_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].profileName,
          children: "\u660E\u65E5\u4EFB\u52A1"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.Text, {
          className: _index_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].profileSub,
          children: "\u89C4\u5212\u660E\u5929\uFF0C\u628A\u63E1\u6BCF\u4E00\u5929"
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
      className: _index_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].posterEntry,
      onClick: function onClick() {
        return _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().navigateTo({
          url: '/pages/weekly-poster/index'
        });
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
        className: _index_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].posterEntryLeft,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.Text, {
          className: _index_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].posterEntryTitle,
          children: "\u5468\u5EA6\u6D77\u62A5"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.Text, {
          className: _index_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].posterEntrySub,
          children: "\u4E0A\u6ED1\u89E3\u9501\u4F60\u7684\u672C\u5468\u753B\u50CF \xB7 \u4E00\u952E\u751F\u6210\u5206\u4EAB\u6D77\u62A5"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.Text, {
        className: _index_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].posterEntryEmoji,
        children: "\uD83C\uDFAC"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
      className: _index_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].statsCard,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.Text, {
        className: _index_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].cardTitle,
        children: "\u4EFB\u52A1\u6982\u89C8"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
        className: _index_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].statGrid,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
          className: _index_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].statItem,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.Text, {
            className: _index_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].statNum,
            children: todayOccs.length
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.Text, {
            className: _index_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].statLabel,
            children: "\u4ECA\u65E5\u4EFB\u52A1"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
          className: _index_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].statDivider
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
          className: _index_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].statItem,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.Text, {
            className: "".concat(_index_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].statNum, " ").concat(_index_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].statNumGreen),
            children: todayDone
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.Text, {
            className: _index_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].statLabel,
            children: "\u5DF2\u5B8C\u6210"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
          className: _index_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].statDivider
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
          className: _index_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].statItem,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.Text, {
            className: "".concat(_index_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].statNum, " ").concat(_index_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].statNumRed),
            children: tomorrowPending
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.Text, {
            className: _index_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].statLabel,
            children: "\u660E\u65E5\u5F85\u529E"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
          className: _index_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].statDivider
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
          className: _index_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].statItem,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.Text, {
            className: _index_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].statNum,
            children: streak
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.Text, {
            className: _index_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].statLabel,
            children: "\u8FDE\u7EED\u5B8C\u6210(\u5929)"
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
        className: _index_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].progressBlock,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
          className: _index_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].progressLabelRow,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.Text, {
            className: _index_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].progressLabel,
            children: "\u4ECA\u65E5\u5B8C\u6210\u8FDB\u5EA6"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.Text, {
            className: _index_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].progressLabel,
            children: [todayPct, "%"]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
          className: _index_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].progressTrack,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
            className: _index_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].progressFill,
            style: {
              width: "".concat(todayPct, "%")
            }
          })
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
      className: _index_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].moduleCard,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.Text, {
        className: _index_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].cardTitle,
        children: "\u4EFB\u52A1\u6A21\u5757\uFF08\u672A\u6765 30 \u5929\uFF09"
      }), moduleCounts.map(function (m) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
          className: _index_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].moduleRow,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.Text, {
            className: _index_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].moduleEmoji,
            children: m.emoji
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
            className: _index_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].moduleDot,
            style: {
              background: m.color
            }
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.Text, {
            className: _index_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].moduleName,
            children: m.name
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.Text, {
            className: _index_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].moduleCount,
            children: [m.count, " \u9879"]
          })]
        }, m.id);
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
      className: _index_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].settingCard,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
        className: _index_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].settingRow,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
          className: _index_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].settingTexts,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.Text, {
            className: _index_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].settingLabel,
            children: "\u4EFB\u52A1\u63D0\u9192"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.Text, {
            className: _index_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].settingSub,
            children: "\u5230\u8FBE\u63D0\u9192\u65F6\u95F4\u65F6\uFF0C\u5728\u5E94\u7528\u5185\u5F39\u7A97\u901A\u77E5"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.Switch, {
          checked: settings.remindersEnabled,
          color: "#16a34a",
          onChange: function onChange(e) {
            return setSettings({
              remindersEnabled: e.detail.value
            });
          }
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
        className: _index_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].settingRow,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
          className: _index_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].settingTexts,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.Text, {
            className: _index_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].settingLabel,
            children: "\u665A\u95F4\u5B8C\u6210\u786E\u8BA4"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.Text, {
            className: _index_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].settingSub,
            children: "\u6BCF\u5929 20:00 \u63D0\u9192\u68C0\u67E5\u4ECA\u65E5\u4EFB\u52A1\u662F\u5426\u5B8C\u6210"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.Switch, {
          checked: settings.eveningCheck,
          color: "#16a34a",
          onChange: function onChange(e) {
            return setSettings({
              eveningCheck: e.detail.value
            });
          }
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
        className: _index_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].settingRow,
        onClick: _services_reminder__WEBPACK_IMPORTED_MODULE_6__.requestWxSubscribe,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
          className: _index_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].settingTexts,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.Text, {
            className: _index_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].settingLabel,
            children: "\u5FAE\u4FE1\u901A\u77E5\u63A8\u9001"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.Text, {
            className: _index_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].settingSub,
            children: "\u6388\u6743\u540E\u53EF\u901A\u8FC7\u5FAE\u4FE1\u8BA2\u9605\u6D88\u606F\u63A5\u6536\u63D0\u9192"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
          className: _index_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].settingAction,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.Text, {
            className: _index_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].settingActionText,
            children: "\u53BB\u8BA2\u9605"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.Text, {
          className: _index_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].settingArrow,
          children: "\u203A"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
        className: _index_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].settingRow,
        onClick: function onClick() {
          return _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().navigateTo({
            url: '/pages/about/index'
          });
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
          className: _index_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].settingTexts,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.Text, {
            className: _index_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].settingLabel,
            children: "\u5173\u4E8E\u660E\u65E5\u4EFB\u52A1"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.Text, {
            className: _index_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].settingSub,
            children: "\u7248\u672C\u4E0E\u8BF4\u660E"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.Text, {
          className: _index_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].settingArrow,
          children: "\u203A"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
        className: _index_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].settingRow,
        onClick: handleReset,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
          className: _index_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].settingTexts,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.Text, {
            className: _index_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].settingLabel,
            children: "\u91CD\u7F6E\u5168\u90E8\u6570\u636E"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.Text, {
            className: _index_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].settingSub,
            children: "\u6E05\u7A7A\u65E5\u7A0B\u5E76\u6062\u590D\u793A\u4F8B\u4EFB\u52A1"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.Text, {
          className: _index_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].settingArrow,
          children: "\u203A"
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
      className: _index_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].tipCard,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.Text, {
        className: _index_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].tipText,
        children: "\u63D0\u793A\uFF1A\u5FAE\u4FE1\u8BA2\u9605\u6D88\u606F\u9700\u5728\u5C0F\u7A0B\u5E8F\u540E\u53F0\u914D\u7F6E\u300C\u4EFB\u52A1\u63D0\u9192\u300D\u6A21\u677F\u540E\u624D\u80FD\u4E0B\u53D1\u5230\u901A\u77E5\u680F\uFF1B\u672A\u914D\u7F6E\u65F6\uFF0C\u6253\u5F00\u5C0F\u7A0B\u5E8F\u671F\u95F4\u4F1A\u901A\u8FC7\u5E94\u7528\u5185\u5F39\u7A97\u63D0\u9192\u4F60\u5B8C\u6210\u4EFB\u52A1\u3002"
      })
    })]
  });
};
/* harmony default export */ __webpack_exports__["default"] = (MinePage);

/***/ }),

/***/ "./src/pages/mine/index.tsx":
/*!**********************************!*\
  !*** ./src/pages/mine/index.tsx ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/dsl/common.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_mine_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !!../../../node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/mine/index!./index.tsx */ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/mine/index!./src/pages/mine/index.tsx");


var config = {"navigationBarTitleText":"我的","enablePullDownRefresh":false};



var taroOption = (0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.createPageConfig)(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_mine_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"], 'pages/mine/index', {root:{cn:[]}}, config || {})
if (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_mine_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"] && _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_mine_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"].behaviors) {
  taroOption.behaviors = (taroOption.behaviors || []).concat(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_mine_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"].behaviors)
}
var inst = Page(taroOption)



/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_mine_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./src/pages/mine/index.module.scss":
/*!******************************************!*\
  !*** ./src/pages/mine/index.module.scss ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__) {

// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["default"] = ({"page":"index-module__page___w_0_P","profileCard":"index-module__profileCard___jTecL","avatar":"index-module__avatar___jUaOe","profileName":"index-module__profileName___zrqiG","profileSub":"index-module__profileSub___I5XEV","posterEntry":"index-module__posterEntry___UX0n1","posterShine":"index-module__posterShine___rW2oU","posterEntryLeft":"index-module__posterEntryLeft___k8mzH","posterEntryTitle":"index-module__posterEntryTitle___J75kg","posterEntrySub":"index-module__posterEntrySub___qRzhO","posterEntryEmoji":"index-module__posterEntryEmoji___qcdNe","statsCard":"index-module__statsCard___kzfRv","cardTitle":"index-module__cardTitle___hTXyo","statGrid":"index-module__statGrid___H1XWz","statItem":"index-module__statItem___F7D4Z","statNum":"index-module__statNum___PdjJl","statNumGreen":"index-module__statNumGreen___KQFug","statNumRed":"index-module__statNumRed___HSloY","statLabel":"index-module__statLabel___ygDDN","statDivider":"index-module__statDivider___y2n5u","progressBlock":"index-module__progressBlock___A_EdL","progressLabelRow":"index-module__progressLabelRow___PQphe","progressLabel":"index-module__progressLabel___yTmsn","progressTrack":"index-module__progressTrack___ctmFx","progressFill":"index-module__progressFill___lFWJr","moduleCard":"index-module__moduleCard___ci7S_","moduleRow":"index-module__moduleRow___Z0J4D","moduleDot":"index-module__moduleDot___TF7iR","moduleEmoji":"index-module__moduleEmoji___GpYWe","moduleName":"index-module__moduleName___dpa5o","moduleCount":"index-module__moduleCount___xTN1e","settingCard":"index-module__settingCard___US1EO","settingRow":"index-module__settingRow___sPriv","settingTexts":"index-module__settingTexts___PBtKK","settingLabel":"index-module__settingLabel___Ke5G8","settingSub":"index-module__settingSub___k1RZW","settingAction":"index-module__settingAction___lTogc","settingActionText":"index-module__settingActionText___VM863","settingArrow":"index-module__settingArrow___dta0W","tipCard":"index-module__tipCard___EzJUD","tipText":"index-module__tipText___SAT9i"});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","vendors","common"], function() { return __webpack_exec__("./src/pages/mine/index.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map