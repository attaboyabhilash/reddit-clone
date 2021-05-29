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
    _this = undefined;





var Register = function Register(_ref) {
  (0,D_Abhilash_Negi_GitHub_Projects_reddit_clone_reddit_client_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_1__.default)(_ref);

  var onFinish = function onFinish(values) {
    console.log('Received values of form: ', values);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.Form, {
    name: "normal_login",
    className: "login-form",
    layout: "vertical",
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
          lineNumber: 28,
          columnNumber: 24
        }, _this),
        placeholder: "Username"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
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
          lineNumber: 36,
          columnNumber: 19
        }, _this),
        type: "password",
        placeholder: "Password"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
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
          lineNumber: 43,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        className: "login-form-forgot",
        href: "",
        children: "Forgot password"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.Form.Item, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.Button, {
        type: "primary",
        htmlType: "submit",
        className: "login-form-button",
        children: "Log in"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }, _this), "Or ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        href: "",
        children: "register now!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 12
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }, _this);
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVnaXN0ZXIudHN4Il0sIm5hbWVzIjpbIlJlZ2lzdGVyIiwib25GaW5pc2giLCJ2YWx1ZXMiLCJjb25zb2xlIiwibG9nIiwicmVtZW1iZXIiLCJyZXF1aXJlZCIsIm1lc3NhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFNQSxJQUFNQSxRQUFpQyxHQUFHLFNBQXBDQSxRQUFvQyxPQUFXO0FBQUE7O0FBRW5ELE1BQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUVDLE1BQUYsRUFBbUI7QUFDbENDLFdBQU8sQ0FBQ0MsR0FBUixDQUFhLDJCQUFiLEVBQTBDRixNQUExQztBQUNELEdBRkQ7O0FBSUEsc0JBQ0UsOERBQUMsc0NBQUQ7QUFDRSxRQUFJLEVBQUMsY0FEUDtBQUVFLGFBQVMsRUFBQyxZQUZaO0FBR0UsVUFBTSxFQUFDLFVBSFQ7QUFJRSxpQkFBYSxFQUFFO0FBQUNHLGNBQVEsRUFBRTtBQUFYLEtBSmpCO0FBS0UsWUFBUSxFQUFFSixRQUxaO0FBQUEsNEJBT0UsOERBQUMsMkNBQUQ7QUFDRSxXQUFLLEVBQUMsVUFEUjtBQUVFLFVBQUksRUFBQyxTQUZQO0FBR0UsV0FBSyxFQUFFLENBQUM7QUFBRUssZ0JBQVEsRUFBRSxJQUFaO0FBQWtCQyxlQUFPLEVBQUU7QUFBM0IsT0FBRCxDQUhUO0FBQUEsNkJBS0UsOERBQUMsdUNBQUQ7QUFBTyxjQUFNLGVBQUUsOERBQUMsMkRBQUQ7QUFBYyxtQkFBUyxFQUFDO0FBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQWY7QUFBaUUsbUJBQVcsRUFBQztBQUE3RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVBGLGVBY0UsOERBQUMsMkNBQUQ7QUFDRSxXQUFLLEVBQUMsVUFEUjtBQUVFLFVBQUksRUFBQyxVQUZQO0FBR0UsV0FBSyxFQUFFLENBQUM7QUFBRUQsZ0JBQVEsRUFBRSxJQUFaO0FBQWtCQyxlQUFPLEVBQUU7QUFBM0IsT0FBRCxDQUhUO0FBQUEsNkJBS0UsOERBQUMsdUNBQUQ7QUFDRSxjQUFNLGVBQUUsOERBQUMsMkRBQUQ7QUFBYyxtQkFBUyxFQUFDO0FBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRFY7QUFFRSxZQUFJLEVBQUMsVUFGUDtBQUdFLG1CQUFXLEVBQUM7QUFIZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWRGLGVBeUJFLDhEQUFDLDJDQUFEO0FBQUEsOEJBQ0UsOERBQUMsMkNBQUQ7QUFBVyxZQUFJLEVBQUMsVUFBaEI7QUFBMkIscUJBQWEsRUFBQyxTQUF6QztBQUFtRCxlQUFPLE1BQTFEO0FBQUEsK0JBQ0UsOERBQUMsMENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFLRTtBQUFHLGlCQUFTLEVBQUMsbUJBQWI7QUFBaUMsWUFBSSxFQUFDLEVBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBekJGLGVBbUNFLDhEQUFDLDJDQUFEO0FBQUEsOEJBQ0UsOERBQUMsd0NBQUQ7QUFBUSxZQUFJLEVBQUMsU0FBYjtBQUF1QixnQkFBUSxFQUFDLFFBQWhDO0FBQXlDLGlCQUFTLEVBQUMsbUJBQW5EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsc0JBSUs7QUFBRyxZQUFJLEVBQUMsRUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQW5DRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTRDRCxDQWxERDs7S0FBTVAsUTtBQW9ETiwrREFBZUEsUUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9yZWdpc3Rlci4wYmMxNzc5ZGE5MzBlZTVkNDQ3OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBGb3JtLCBJbnB1dCwgQnV0dG9uLCBDaGVja2JveCB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgeyBVc2VyT3V0bGluZWQsIExvY2tPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuXHJcbmludGVyZmFjZSByZWdpc3RlclByb3BzIHtcclxuXHJcbn1cclxuXHJcbmNvbnN0IFJlZ2lzdGVyOiBSZWFjdC5GQzxyZWdpc3RlclByb3BzPiA9ICggeyB9ICkgPT4ge1xyXG5cclxuICBjb25zdCBvbkZpbmlzaCA9ICggdmFsdWVzOiBhbnkgKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyggJ1JlY2VpdmVkIHZhbHVlcyBvZiBmb3JtOiAnLCB2YWx1ZXMgKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm1cclxuICAgICAgbmFtZT1cIm5vcm1hbF9sb2dpblwiXHJcbiAgICAgIGNsYXNzTmFtZT1cImxvZ2luLWZvcm1cIlxyXG4gICAgICBsYXlvdXQ9XCJ2ZXJ0aWNhbFwiXHJcbiAgICAgIGluaXRpYWxWYWx1ZXM9e3tyZW1lbWJlcjogdHJ1ZX19XHJcbiAgICAgIG9uRmluaXNoPXtvbkZpbmlzaH1cclxuICAgID5cclxuICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgIGxhYmVsPVwiVXNlcm5hbWVcIlxyXG4gICAgICAgIG5hbWU9XCJqb2huZG9lXCJcclxuICAgICAgICBydWxlcz17W3sgcmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6ICdQbGVhc2UgaW5wdXQgeW91ciBVc2VybmFtZSEnIH1dfVxyXG4gICAgICA+XHJcbiAgICAgICAgPElucHV0IHByZWZpeD17PFVzZXJPdXRsaW5lZCBjbGFzc05hbWU9XCJzaXRlLWZvcm0taXRlbS1pY29uXCIgLz59IHBsYWNlaG9sZGVyPVwiVXNlcm5hbWVcIiAvPlxyXG4gICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgIGxhYmVsPVwiUGFzc3dvcmRcIlxyXG4gICAgICAgIG5hbWU9XCJ0ZXN0MTIzI1wiXHJcbiAgICAgICAgcnVsZXM9e1t7IHJlcXVpcmVkOiB0cnVlLCBtZXNzYWdlOiAnUGxlYXNlIGlucHV0IHlvdXIgUGFzc3dvcmQhJyB9XX1cclxuICAgICAgPlxyXG4gICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgcHJlZml4PXs8TG9ja091dGxpbmVkIGNsYXNzTmFtZT1cInNpdGUtZm9ybS1pdGVtLWljb25cIiAvPn1cclxuICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgPEZvcm0uSXRlbT5cclxuICAgICAgICA8Rm9ybS5JdGVtIG5hbWU9XCJyZW1lbWJlclwiIHZhbHVlUHJvcE5hbWU9XCJjaGVja2VkXCIgbm9TdHlsZT5cclxuICAgICAgICAgIDxDaGVja2JveD5SZW1lbWJlciBtZTwvQ2hlY2tib3g+XHJcbiAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcblxyXG4gICAgICAgIDxhIGNsYXNzTmFtZT1cImxvZ2luLWZvcm0tZm9yZ290XCIgaHJlZj1cIlwiPlxyXG4gICAgICAgICAgRm9yZ290IHBhc3N3b3JkXHJcbiAgICAgICAgPC9hPlxyXG4gICAgICA8L0Zvcm0uSXRlbT5cclxuXHJcbiAgICAgIDxGb3JtLkl0ZW0+XHJcbiAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIGh0bWxUeXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwibG9naW4tZm9ybS1idXR0b25cIj5cclxuICAgICAgICAgIExvZyBpblxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIE9yIDxhIGhyZWY9XCJcIj5yZWdpc3RlciBub3chPC9hPlxyXG4gICAgICA8L0Zvcm0uSXRlbT5cclxuICAgIDwvRm9ybT5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWdpc3RlciJdLCJzb3VyY2VSb290IjoiIn0=