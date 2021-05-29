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
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_Register_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Register.module.scss */ "./styles/Register.module.scss");
/* harmony import */ var _styles_Register_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Register_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "D:\\Abhilash Negi\\GitHub Projects\\reddit-clone\\reddit-client\\pages\\register.tsx",
    _this = undefined,
    _s = $RefreshSig$();







var Register = function Register(_ref) {
  _s();

  (0,D_Abhilash_Negi_GitHub_Projects_reddit_clone_reddit_client_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_1__.default)(_ref);

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
      isLoading = _useState[0],
      setIsLoading = _useState[1];

  var formRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();

  var onFinish = function onFinish(values) {
    setIsLoading(true);
    console.log('Received values of form: ', values);
    setTimeout(function () {
      setIsLoading(false);
      formRef.current.resetFields();
    }, 5000);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      className: (_styles_Register_module_scss__WEBPACK_IMPORTED_MODULE_4___default().title),
      children: "Register"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_5__.Card, {
      hoverable: true,
      className: (_styles_Register_module_scss__WEBPACK_IMPORTED_MODULE_4___default().register),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_5__.Form, {
        name: "register",
        className: "register-form",
        layout: "vertical",
        ref: formRef,
        onFinish: onFinish,
        scrollToFirstError: true,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_5__.Form.Item, {
          label: "Username",
          name: "username",
          rules: [function () {
            return {
              validator: function validator(_, value) {
                if (value.length > 3) {
                  return Promise.resolve();
                }

                return Promise.reject(new Error('Username must be greater than 3 characters'));
              }
            };
          }, {
            required: true,
            message: 'Please input your Username'
          }],
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_5__.Input, {
            prefix: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__.UserOutlined, {
              className: (_styles_Register_module_scss__WEBPACK_IMPORTED_MODULE_4___default().icon)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 28
            }, _this),
            placeholder: "johndoe"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_5__.Form.Item, {
          label: "Password",
          name: "password",
          rules: [function () {
            return {
              validator: function validator(_, value) {
                if (value.search(/[a-z]/i) < 0) {
                  return Promise.reject(new Error("Password must contain at least one letter."));
                }

                if (value.search(/[0-9]/) < 0) {
                  return Promise.reject(new Error("Password must contain at least one digit."));
                }

                if (value.search(/[!@#$%^&*]/) < 0) {
                  return Promise.reject(new Error("Password must contain at least one special character."));
                }

                if (value.length < 6) {
                  return Promise.reject(new Error('Password must be greater than 6 characters'));
                }

                return Promise.resolve();
              }
            };
          }, {
            required: true,
            message: 'Please input your Password!'
          }],
          hasFeedback: true,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_5__.Input.Password, {
            prefix: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__.LockOutlined, {
              className: (_styles_Register_module_scss__WEBPACK_IMPORTED_MODULE_4___default().icon)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 83,
              columnNumber: 23
            }, _this),
            type: "password",
            placeholder: "test123#"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_5__.Form.Item, {
          className: (_styles_Register_module_scss__WEBPACK_IMPORTED_MODULE_4___default().footer),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_5__.Button, {
            type: "primary",
            htmlType: "submit",
            className: (_styles_Register_module_scss__WEBPACK_IMPORTED_MODULE_4___default().register_button),
            loading: isLoading,
            children: "Register"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            className: (_styles_Register_module_scss__WEBPACK_IMPORTED_MODULE_4___default().footer_text),
            children: ["Already a member? Click ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
              href: "/login",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                children: "here"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 93,
                columnNumber: 91
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 93,
              columnNumber: 71
            }, _this), " to login"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
};

_s(Register, "8+1YjGNcK1jV3yeAhMU850Zefys=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVnaXN0ZXIudHN4Il0sIm5hbWVzIjpbIlJlZ2lzdGVyIiwidXNlU3RhdGUiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJmb3JtUmVmIiwidXNlUmVmIiwib25GaW5pc2giLCJ2YWx1ZXMiLCJjb25zb2xlIiwibG9nIiwic2V0VGltZW91dCIsImN1cnJlbnQiLCJyZXNldEZpZWxkcyIsInN0eWxlcyIsInZhbGlkYXRvciIsIl8iLCJ2YWx1ZSIsImxlbmd0aCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiRXJyb3IiLCJyZXF1aXJlZCIsIm1lc3NhZ2UiLCJpY29uIiwic2VhcmNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQU9BLElBQU1BLFFBQWlDLEdBQUcsU0FBcENBLFFBQW9DLE9BQVc7QUFBQTs7QUFBQTs7QUFBQSxrQkFDakJDLCtDQUFRLENBQUMsS0FBRCxDQURTO0FBQUEsTUFDNUNDLFNBRDRDO0FBQUEsTUFDakNDLFlBRGlDOztBQUVuRCxNQUFNQyxPQUFPLEdBQUdDLDZDQUFNLEVBQXRCOztBQUVBLE1BQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUVDLE1BQUYsRUFBd0I7QUFDdkNKLGdCQUFZLENBQUMsSUFBRCxDQUFaO0FBQ0FLLFdBQU8sQ0FBQ0MsR0FBUixDQUFhLDJCQUFiLEVBQTBDRixNQUExQztBQUNBRyxjQUFVLENBQUMsWUFBTTtBQUNmUCxrQkFBWSxDQUFDLEtBQUQsQ0FBWjtBQUNBQyxhQUFPLENBQUNPLE9BQVIsQ0FBaUJDLFdBQWpCO0FBQ0QsS0FIUyxFQUdQLElBSE8sQ0FBVjtBQUlELEdBUEQ7O0FBVUEsc0JBQ0U7QUFBQSw0QkFDRTtBQUFJLGVBQVMsRUFBRUMsMkVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUVFLDhEQUFDLHNDQUFEO0FBQU0s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USxFQUFDLFFBQWhDO0FBQXlDLHFCQUFTLEVBQUVBLHFGQUFwRDtBQUE0RSxtQkFBTyxFQUFFWCxTQUFyRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUlFO0FBQUcscUJBQVMsRUFBRVcsaUZBQWQ7QUFBQSxnRUFBMEQsOERBQUMsa0RBQUQ7QUFBTSxrQkFBSSxFQUFDLFFBQVg7QUFBQSxxQ0FBb0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBMUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkExREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGO0FBQUEsa0JBREY7QUF3RUQsQ0F0RkQ7O0dBQU1iLFE7O0tBQUFBLFE7QUF3Rk4sK0RBQWVBLFFBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcmVnaXN0ZXIuNWJlNGE3MmViOTI5OTljZTY3YzguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IEZvcm0sIElucHV0LCBCdXR0b24sIENhcmQgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgVXNlck91dGxpbmVkLCBMb2NrT3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcbmltcG9ydCB7IEZvcm1JbnN0YW5jZSB9IGZyb20gJ2FudGQvbGliL2Zvcm0nO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvUmVnaXN0ZXIubW9kdWxlLnNjc3NcIlxyXG5pbXBvcnQgeyByZWdpc3RlciB9IGZyb20gJy4uL3NyYy90eXBlcyc7XHJcblxyXG5pbnRlcmZhY2UgcmVnaXN0ZXJQcm9wcyB7XHJcblxyXG59XHJcblxyXG5jb25zdCBSZWdpc3RlcjogUmVhY3QuRkM8cmVnaXN0ZXJQcm9wcz4gPSAoIHsgfSApID0+IHtcclxuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgZm9ybVJlZiA9IHVzZVJlZjxGb3JtSW5zdGFuY2U+KCk7XHJcblxyXG4gIGNvbnN0IG9uRmluaXNoID0gKCB2YWx1ZXM6IHJlZ2lzdGVyICkgPT4ge1xyXG4gICAgc2V0SXNMb2FkaW5nKHRydWUpXHJcbiAgICBjb25zb2xlLmxvZyggJ1JlY2VpdmVkIHZhbHVlcyBvZiBmb3JtOiAnLCB2YWx1ZXMgKVxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHNldElzTG9hZGluZyhmYWxzZSlcclxuICAgICAgZm9ybVJlZi5jdXJyZW50IS5yZXNldEZpZWxkcygpXHJcbiAgICB9LCA1MDAwKVxyXG4gIH07XHJcblxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5SZWdpc3RlcjwvaDE+XHJcbiAgICAgIDxDYXJkIGhvdmVyYWJsZSBjbGFzc05hbWU9e3N0eWxlcy5yZWdpc3Rlcn0+XHJcbiAgICAgICAgPEZvcm1cclxuICAgICAgICBuYW1lPVwicmVnaXN0ZXJcIlxyXG4gICAgICAgIGNsYXNzTmFtZT1cInJlZ2lzdGVyLWZvcm1cIlxyXG4gICAgICAgIGxheW91dD1cInZlcnRpY2FsXCJcclxuICAgICAgICByZWY9e2Zvcm1SZWZ9XHJcbiAgICAgICAgb25GaW5pc2g9e29uRmluaXNofVxyXG4gICAgICAgIHNjcm9sbFRvRmlyc3RFcnJvclxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgbGFiZWw9XCJVc2VybmFtZVwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJ1c2VybmFtZVwiXHJcbiAgICAgICAgICAgIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgICAgKCkgPT4gKHtcclxuICAgICAgICAgICAgICAgIHZhbGlkYXRvcihfLCB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICBpZiAodmFsdWUubGVuZ3RoID4gMykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKCdVc2VybmFtZSBtdXN0IGJlIGdyZWF0ZXIgdGhhbiAzIGNoYXJhY3RlcnMnKSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ1BsZWFzZSBpbnB1dCB5b3VyIFVzZXJuYW1lJyxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBdfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8SW5wdXQgcHJlZml4PXs8VXNlck91dGxpbmVkIGNsYXNzTmFtZT17c3R5bGVzLmljb259IC8+fSBwbGFjZWhvbGRlcj1cImpvaG5kb2VcIiAvPlxyXG4gICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgIGxhYmVsPVwiUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICBydWxlcz17WygpID0+ICh7XHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0b3IoXywgdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlLnNlYXJjaCgvW2Etel0vaSkgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiUGFzc3dvcmQgbXVzdCBjb250YWluIGF0IGxlYXN0IG9uZSBsZXR0ZXIuXCIpKTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBpZiAodmFsdWUuc2VhcmNoKC9bMC05XS8pIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIlBhc3N3b3JkIG11c3QgY29udGFpbiBhdCBsZWFzdCBvbmUgZGlnaXQuXCIpKTsgXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlLnNlYXJjaCgvWyFAIyQlXiYqXS8pIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJQYXNzd29yZCBtdXN0IGNvbnRhaW4gYXQgbGVhc3Qgb25lIHNwZWNpYWwgY2hhcmFjdGVyLlwiKSk7IFxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPCA2KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKCdQYXNzd29yZCBtdXN0IGJlIGdyZWF0ZXIgdGhhbiA2IGNoYXJhY3RlcnMnKSk7IFxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgeyByZXF1aXJlZDogdHJ1ZSwgbWVzc2FnZTogJ1BsZWFzZSBpbnB1dCB5b3VyIFBhc3N3b3JkIScgfV19XHJcbiAgICAgICAgICAgIGhhc0ZlZWRiYWNrXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxJbnB1dC5QYXNzd29yZFxyXG4gICAgICAgICAgICAgIHByZWZpeD17PExvY2tPdXRsaW5lZCBjbGFzc05hbWU9e3N0eWxlcy5pY29ufSAvPn1cclxuICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwidGVzdDEyMyNcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcblxyXG4gICAgICAgICAgPEZvcm0uSXRlbSBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJ9PlxyXG4gICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgaHRtbFR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9e3N0eWxlcy5yZWdpc3Rlcl9idXR0b259IGxvYWRpbmc9e2lzTG9hZGluZ30+XHJcbiAgICAgICAgICAgICAgUmVnaXN0ZXJcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmZvb3Rlcl90ZXh0fT5BbHJlYWR5IGEgbWVtYmVyPyBDbGljayA8TGluayBocmVmPVwiL2xvZ2luXCI+PGE+aGVyZTwvYT48L0xpbms+IHRvIGxvZ2luPC9wPlxyXG4gICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgPC9Gb3JtPlxyXG4gICAgICA8L0NhcmQ+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWdpc3RlciJdLCJzb3VyY2VSb290IjoiIn0=