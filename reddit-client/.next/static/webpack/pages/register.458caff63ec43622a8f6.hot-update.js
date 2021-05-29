self["webpackHotUpdate_N_E"]("pages/register",{

/***/ "./pages/register.tsx":
/*!****************************!*\
  !*** ./pages/register.tsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_Abhilash_Negi_GitHub_Projects_reddit_clone_reddit_client_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty */ "./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "D:\\Abhilash Negi\\GitHub Projects\\reddit-clone\\reddit-client\\pages\\register.tsx",
    _this = undefined,
    _s = $RefreshSig$();





var Register = function Register(_ref) {
  _s();

  (0,D_Abhilash_Negi_GitHub_Projects_reddit_clone_reddit_client_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_1__.default)(_ref);

  var formRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();
  var validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
      number: '${label} is not a valid number!'
    },
    number: {
      range: '${label} must be between ${min} and ${max}'
    }
  };

  var onFinish = function onFinish(values) {
    console.log('Received values of form: ', values);
    formRef.current.resetFields();
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.Form, {
    name: "normal_login",
    className: "login-form",
    layout: "vertical",
    ref: formRef,
    initialValues: {
      remember: true
    },
    onFinish: onFinish,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.Form.Item, {
      label: "Username",
      name: "johndoe",
      rules: [{
        required: true,
        message: 'Please input your Username!'
      }],
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.Input, {
        prefix: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__.UserOutlined, {
          className: "site-form-item-icon"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 24
        }, _this),
        placeholder: "Username"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.Form.Item, {
      label: "Password",
      name: "test123#",
      rules: [{
        required: true,
        message: 'Please input your Password!'
      }],
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.Input, {
        prefix: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__.LockOutlined, {
          className: "site-form-item-icon"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 19
        }, _this),
        type: "password",
        placeholder: "Password"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.Form.Item, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.Form.Item, {
        name: "remember",
        valuePropName: "checked",
        noStyle: true,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.Checkbox, {
          children: "Remember me"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        className: "login-form-forgot",
        href: "",
        children: "Forgot password"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.Form.Item, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.Button, {
        type: "primary",
        htmlType: "submit",
        className: "login-form-button",
        children: "Log in"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 9
      }, _this), "Or ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        href: "",
        children: "register now!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 12
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 5
  }, _this);
};

_s(Register, "43yiYcpPc7V7EqBzAhVF/lXnrEM=");

_c = Register;
/* harmony default export */ __webpack_exports__["default"] = (Register);

var _c;

$RefreshReg$(_c, "Register");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVnaXN0ZXIudHN4Il0sIm5hbWVzIjpbIlJlZ2lzdGVyIiwiZm9ybVJlZiIsInVzZVJlZiIsInZhbGlkYXRlTWVzc2FnZXMiLCJyZXF1aXJlZCIsInR5cGVzIiwiZW1haWwiLCJudW1iZXIiLCJyYW5nZSIsIm9uRmluaXNoIiwidmFsdWVzIiwiY29uc29sZSIsImxvZyIsImN1cnJlbnQiLCJyZXNldEZpZWxkcyIsInJlbWVtYmVyIiwibWVzc2FnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFPQSxJQUFNQSxRQUFpQyxHQUFHLFNBQXBDQSxRQUFvQyxPQUFXO0FBQUE7O0FBQUE7O0FBQ25ELE1BQU1DLE9BQU8sR0FBR0MsNkNBQU0sRUFBdEI7QUFFQSxNQUFNQyxnQkFBZ0IsR0FBRztBQUN6QkMsWUFBUSxFQUFFLHVCQURlO0FBRXpCQyxTQUFLLEVBQUU7QUFDTEMsV0FBSyxFQUFFLGdDQURGO0FBRUxDLFlBQU0sRUFBRTtBQUZILEtBRmtCO0FBTXpCQSxVQUFNLEVBQUU7QUFDTkMsV0FBSyxFQUFFO0FBREQ7QUFOaUIsR0FBekI7O0FBV0EsTUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBRUMsTUFBRixFQUFtQjtBQUNsQ0MsV0FBTyxDQUFDQyxHQUFSLENBQWEsMkJBQWIsRUFBMENGLE1BQTFDO0FBQ0FULFdBQU8sQ0FBQ1ksT0FBUixDQUFpQkMsV0FBakI7QUFDRCxHQUhEOztBQU1BLHNCQUNFLDhEQUFDLHNDQUFEO0FBQ0UsUUFBSSxFQUFDLGNBRFA7QUFFRSxhQUFTLEVBQUMsWUFGWjtBQUdFLFVBQU0sRUFBQyxVQUhUO0FBSUUsT0FBRyxFQUFFYixPQUpQO0FBS0UsaUJBQWEsRUFBRTtBQUFDYyxjQUFRLEVBQUU7QUFBWCxLQUxqQjtBQU1FLFlBQVEsRUFBRU4sUUFOWjtBQUFBLDRCQVFFLDhEQUFDLDJDQUFEO0FBQ0UsV0FBSyxFQUFDLFVBRFI7QUFFRSxVQUFJLEVBQUMsU0FGUDtBQUdFLFdBQUssRUFBRSxDQUFDO0FBQUVMLGdCQUFRLEVBQUUsSUFBWjtBQUFrQlksZUFBTyxFQUFFO0FBQTNCLE9BQUQsQ0FIVDtBQUFBLDZCQUtFLDhEQUFDLHVDQUFEO0FBQU8sY0FBTSxlQUFFLDhEQUFDLDJEQUFEO0FBQWMsbUJBQVMsRUFBQztBQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFmO0FBQWlFLG1CQUFXLEVBQUM7QUFBN0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFSRixlQWVFLDhEQUFDLDJDQUFEO0FBQ0UsV0FBSyxFQUFDLFVBRFI7QUFFRSxVQUFJLEVBQUMsVUFGUDtBQUdFLFdBQUssRUFBRSxDQUFDO0FBQUVaLGdCQUFRLEVBQUUsSUFBWjtBQUFrQlksZUFBTyxFQUFFO0FBQTNCLE9BQUQsQ0FIVDtBQUFBLDZCQUtFLDhEQUFDLHVDQUFEO0FBQ0UsY0FBTSxlQUFFLDhEQUFDLDJEQUFEO0FBQWMsbUJBQVMsRUFBQztBQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURWO0FBRUUsWUFBSSxFQUFDLFVBRlA7QUFHRSxtQkFBVyxFQUFDO0FBSGQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFmRixlQTBCRSw4REFBQywyQ0FBRDtBQUFBLDhCQUNFLDhEQUFDLDJDQUFEO0FBQVcsWUFBSSxFQUFDLFVBQWhCO0FBQTJCLHFCQUFhLEVBQUMsU0FBekM7QUFBbUQsZUFBTyxNQUExRDtBQUFBLCtCQUNFLDhEQUFDLDBDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBS0U7QUFBRyxpQkFBUyxFQUFDLG1CQUFiO0FBQWlDLFlBQUksRUFBQyxFQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQTFCRixlQW9DRSw4REFBQywyQ0FBRDtBQUFBLDhCQUNFLDhEQUFDLHdDQUFEO0FBQVEsWUFBSSxFQUFDLFNBQWI7QUFBdUIsZ0JBQVEsRUFBQyxRQUFoQztBQUF5QyxpQkFBUyxFQUFDLG1CQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLHNCQUlLO0FBQUcsWUFBSSxFQUFDLEVBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFKTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFwQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUE2Q0QsQ0FqRUQ7O0dBQU1oQixROztLQUFBQSxRO0FBbUVOLCtEQUFlQSxRQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3JlZ2lzdGVyLjQ1OGNhZmY2M2VjNDM2MjJhOGY2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlUmVmIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IEZvcm0sIElucHV0LCBCdXR0b24sIENoZWNrYm94IH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IFVzZXJPdXRsaW5lZCwgTG9ja091dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5pbXBvcnQgeyBGb3JtSW5zdGFuY2UgfSBmcm9tICdhbnRkL2xpYi9mb3JtJztcclxuXHJcbmludGVyZmFjZSByZWdpc3RlclByb3BzIHtcclxuXHJcbn1cclxuXHJcbmNvbnN0IFJlZ2lzdGVyOiBSZWFjdC5GQzxyZWdpc3RlclByb3BzPiA9ICggeyB9ICkgPT4ge1xyXG4gIGNvbnN0IGZvcm1SZWYgPSB1c2VSZWY8Rm9ybUluc3RhbmNlPigpO1xyXG5cclxuICBjb25zdCB2YWxpZGF0ZU1lc3NhZ2VzID0ge1xyXG4gIHJlcXVpcmVkOiAnJHtsYWJlbH0gaXMgcmVxdWlyZWQhJyxcclxuICB0eXBlczoge1xyXG4gICAgZW1haWw6ICcke2xhYmVsfSBpcyBub3QgYSB2YWxpZCBlbWFpbCEnLFxyXG4gICAgbnVtYmVyOiAnJHtsYWJlbH0gaXMgbm90IGEgdmFsaWQgbnVtYmVyIScsXHJcbiAgfSxcclxuICBudW1iZXI6IHtcclxuICAgIHJhbmdlOiAnJHtsYWJlbH0gbXVzdCBiZSBiZXR3ZWVuICR7bWlufSBhbmQgJHttYXh9JyxcclxuICB9LFxyXG59O1xyXG5cclxuICBjb25zdCBvbkZpbmlzaCA9ICggdmFsdWVzOiBhbnkgKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyggJ1JlY2VpdmVkIHZhbHVlcyBvZiBmb3JtOiAnLCB2YWx1ZXMgKTtcclxuICAgIGZvcm1SZWYuY3VycmVudCEucmVzZXRGaWVsZHMoKTtcclxuICB9O1xyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxGb3JtXHJcbiAgICAgIG5hbWU9XCJub3JtYWxfbG9naW5cIlxyXG4gICAgICBjbGFzc05hbWU9XCJsb2dpbi1mb3JtXCJcclxuICAgICAgbGF5b3V0PVwidmVydGljYWxcIlxyXG4gICAgICByZWY9e2Zvcm1SZWZ9XHJcbiAgICAgIGluaXRpYWxWYWx1ZXM9e3tyZW1lbWJlcjogdHJ1ZX19XHJcbiAgICAgIG9uRmluaXNoPXtvbkZpbmlzaH1cclxuICAgID5cclxuICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgIGxhYmVsPVwiVXNlcm5hbWVcIlxyXG4gICAgICAgIG5hbWU9XCJqb2huZG9lXCJcclxuICAgICAgICBydWxlcz17W3sgcmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6ICdQbGVhc2UgaW5wdXQgeW91ciBVc2VybmFtZSEnIH1dfVxyXG4gICAgICA+XHJcbiAgICAgICAgPElucHV0IHByZWZpeD17PFVzZXJPdXRsaW5lZCBjbGFzc05hbWU9XCJzaXRlLWZvcm0taXRlbS1pY29uXCIgLz59IHBsYWNlaG9sZGVyPVwiVXNlcm5hbWVcIiAvPlxyXG4gICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgIGxhYmVsPVwiUGFzc3dvcmRcIlxyXG4gICAgICAgIG5hbWU9XCJ0ZXN0MTIzI1wiXHJcbiAgICAgICAgcnVsZXM9e1t7IHJlcXVpcmVkOiB0cnVlLCBtZXNzYWdlOiAnUGxlYXNlIGlucHV0IHlvdXIgUGFzc3dvcmQhJyB9XX1cclxuICAgICAgPlxyXG4gICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgcHJlZml4PXs8TG9ja091dGxpbmVkIGNsYXNzTmFtZT1cInNpdGUtZm9ybS1pdGVtLWljb25cIiAvPn1cclxuICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgPEZvcm0uSXRlbT5cclxuICAgICAgICA8Rm9ybS5JdGVtIG5hbWU9XCJyZW1lbWJlclwiIHZhbHVlUHJvcE5hbWU9XCJjaGVja2VkXCIgbm9TdHlsZT5cclxuICAgICAgICAgIDxDaGVja2JveD5SZW1lbWJlciBtZTwvQ2hlY2tib3g+XHJcbiAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcblxyXG4gICAgICAgIDxhIGNsYXNzTmFtZT1cImxvZ2luLWZvcm0tZm9yZ290XCIgaHJlZj1cIlwiPlxyXG4gICAgICAgICAgRm9yZ290IHBhc3N3b3JkXHJcbiAgICAgICAgPC9hPlxyXG4gICAgICA8L0Zvcm0uSXRlbT5cclxuXHJcbiAgICAgIDxGb3JtLkl0ZW0+XHJcbiAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIGh0bWxUeXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwibG9naW4tZm9ybS1idXR0b25cIj5cclxuICAgICAgICAgIExvZyBpblxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIE9yIDxhIGhyZWY9XCJcIj5yZWdpc3RlciBub3chPC9hPlxyXG4gICAgICA8L0Zvcm0uSXRlbT5cclxuICAgIDwvRm9ybT5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWdpc3RlciJdLCJzb3VyY2VSb290IjoiIn0=