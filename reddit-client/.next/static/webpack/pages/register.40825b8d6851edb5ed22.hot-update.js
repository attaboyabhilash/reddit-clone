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

  var formRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();

  var onFinish = function onFinish(values) {
    console.log('Received values of form: ', values);
    formRef.current.resetFields();
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_Register_module_scss__WEBPACK_IMPORTED_MODULE_4___default().register),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      children: "Register"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_5__.Form, {
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
            className: "site-form-item-icon"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 26
          }, _this),
          placeholder: "johndoe"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
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
            className: "site-form-item-icon"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 21
          }, _this),
          type: "password",
          placeholder: "test123#"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_5__.Form.Item, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_5__.Button, {
          type: "primary",
          htmlType: "submit",
          className: "login-form-button",
          children: "Register"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 11
        }, _this), "Or ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
          href: "/login",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            children: "LogIn Here!"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 34
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 14
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 22,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVnaXN0ZXIudHN4Il0sIm5hbWVzIjpbIlJlZ2lzdGVyIiwiZm9ybVJlZiIsInVzZVJlZiIsIm9uRmluaXNoIiwidmFsdWVzIiwiY29uc29sZSIsImxvZyIsImN1cnJlbnQiLCJyZXNldEZpZWxkcyIsInN0eWxlcyIsInZhbGlkYXRvciIsIl8iLCJ2YWx1ZSIsImxlbmd0aCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiRXJyb3IiLCJyZXF1aXJlZCIsIm1lc3NhZ2UiLCJzZWFyY2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFNQSxJQUFNQSxRQUFpQyxHQUFHLFNBQXBDQSxRQUFvQyxPQUFXO0FBQUE7O0FBQUE7O0FBQ25ELE1BQU1DLE9BQU8sR0FBR0MsNkNBQU0sRUFBdEI7O0FBRUEsTUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBRUMsTUFBRixFQUFtQjtBQUNsQ0MsV0FBTyxDQUFDQyxHQUFSLENBQWEsMkJBQWIsRUFBMENGLE1BQTFDO0FBQ0FILFdBQU8sQ0FBQ00sT0FBUixDQUFpQkMsV0FBakI7QUFDRCxHQUhEOztBQU1BLHNCQUNFO0FBQUssYUFBUyxFQUFFQyw4RUFBaEI7QUFBQSw0QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBRUUsOERBQUMsc0NBQUQ7QUFDQSxVQUFJLEVBQUMsVUFETDtBQUVBLGVBQVMsRUFBQyxlQUZWO0FBR0EsWUFBTSxFQUFDLFVBSFA7QUFJQSxTQUFHLEVBQUVSLE9BSkw7QUFLQSxjQUFRLEVBQUVFLFFBTFY7QUFNQSx3QkFBa0IsTUFObEI7QUFBQSw4QkFRRSw4REFBQywyQ0FBRDtBQUNFLGFBQUssRUFBQyxVQURSO0FBRUUsWUFBSSxFQUFDLFVBRlA7QUFHRSxhQUFLLEVBQUUsQ0FDTDtBQUFBLGlCQUFPO0FBQ0xPLHFCQURLLHFCQUNLQyxD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dGljL3dlYnBhY2svcGFnZXMvcmVnaXN0ZXIuNDA4MjViOGQ2ODUxZWRiNWVkMjIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VSZWYgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgRm9ybSwgSW5wdXQsIEJ1dHRvbiwgQ2hlY2tib3ggfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgVXNlck91dGxpbmVkLCBMb2NrT3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcbmltcG9ydCB7IEZvcm1JbnN0YW5jZSB9IGZyb20gJ2FudGQvbGliL2Zvcm0nO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvUmVnaXN0ZXIubW9kdWxlLnNjc3NcIlxyXG5cclxuaW50ZXJmYWNlIHJlZ2lzdGVyUHJvcHMge1xyXG5cclxufVxyXG5cclxuY29uc3QgUmVnaXN0ZXI6IFJlYWN0LkZDPHJlZ2lzdGVyUHJvcHM+ID0gKCB7IH0gKSA9PiB7XHJcbiAgY29uc3QgZm9ybVJlZiA9IHVzZVJlZjxGb3JtSW5zdGFuY2U+KCk7XHJcblxyXG4gIGNvbnN0IG9uRmluaXNoID0gKCB2YWx1ZXM6IGFueSApID0+IHtcclxuICAgIGNvbnNvbGUubG9nKCAnUmVjZWl2ZWQgdmFsdWVzIG9mIGZvcm06ICcsIHZhbHVlcyApO1xyXG4gICAgZm9ybVJlZi5jdXJyZW50IS5yZXNldEZpZWxkcygpO1xyXG4gIH07XHJcblxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yZWdpc3Rlcn0+XHJcbiAgICAgIDxoMT5SZWdpc3RlcjwvaDE+XHJcbiAgICAgIDxGb3JtXHJcbiAgICAgIG5hbWU9XCJyZWdpc3RlclwiXHJcbiAgICAgIGNsYXNzTmFtZT1cInJlZ2lzdGVyLWZvcm1cIlxyXG4gICAgICBsYXlvdXQ9XCJ2ZXJ0aWNhbFwiXHJcbiAgICAgIHJlZj17Zm9ybVJlZn1cclxuICAgICAgb25GaW5pc2g9e29uRmluaXNofVxyXG4gICAgICBzY3JvbGxUb0ZpcnN0RXJyb3JcclxuICAgICAgPlxyXG4gICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgIGxhYmVsPVwiVXNlcm5hbWVcIlxyXG4gICAgICAgICAgbmFtZT1cInVzZXJuYW1lXCJcclxuICAgICAgICAgIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgICgpID0+ICh7XHJcbiAgICAgICAgICAgICAgdmFsaWRhdG9yKF8sIHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUubGVuZ3RoID4gMykge1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKCdVc2VybmFtZSBtdXN0IGJlIGdyZWF0ZXIgdGhhbiAzIGNoYXJhY3RlcnMnKSk7XHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICBtZXNzYWdlOiAnUGxlYXNlIGlucHV0IHlvdXIgVXNlcm5hbWUnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgXX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8SW5wdXQgcHJlZml4PXs8VXNlck91dGxpbmVkIGNsYXNzTmFtZT1cInNpdGUtZm9ybS1pdGVtLWljb25cIiAvPn0gcGxhY2Vob2xkZXI9XCJqb2huZG9lXCIgLz5cclxuICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICBsYWJlbD1cIlBhc3N3b3JkXCJcclxuICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICBydWxlcz17WygpID0+ICh7XHJcbiAgICAgICAgICAgICAgdmFsaWRhdG9yKF8sIHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUuc2VhcmNoKC9bYS16XS9pKSA8IDApIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiUGFzc3dvcmQgbXVzdCBjb250YWluIGF0IGxlYXN0IG9uZSBsZXR0ZXIuXCIpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5zZWFyY2goL1swLTldLykgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIlBhc3N3b3JkIG11c3QgY29udGFpbiBhdCBsZWFzdCBvbmUgZGlnaXQuXCIpKTsgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUuc2VhcmNoKC9bIUAjJCVeJipdLykgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJQYXNzd29yZCBtdXN0IGNvbnRhaW4gYXQgbGVhc3Qgb25lIHNwZWNpYWwgY2hhcmFjdGVyLlwiKSk7IFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA8IDYpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKCdQYXNzd29yZCBtdXN0IGJlIGdyZWF0ZXIgdGhhbiA2IGNoYXJhY3RlcnMnKSk7IFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICB7IHJlcXVpcmVkOiB0cnVlLCBtZXNzYWdlOiAnUGxlYXNlIGlucHV0IHlvdXIgUGFzc3dvcmQhJyB9XX1cclxuICAgICAgICAgIGhhc0ZlZWRiYWNrXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPElucHV0LlBhc3N3b3JkXHJcbiAgICAgICAgICAgIHByZWZpeD17PExvY2tPdXRsaW5lZCBjbGFzc05hbWU9XCJzaXRlLWZvcm0taXRlbS1pY29uXCIgLz59XHJcbiAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwidGVzdDEyMyNcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0Zvcm0uSXRlbT5cclxuXHJcbiAgICAgICAgPEZvcm0uSXRlbT5cclxuICAgICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBodG1sVHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImxvZ2luLWZvcm0tYnV0dG9uXCI+XHJcbiAgICAgICAgICAgIFJlZ2lzdGVyXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIE9yIDxMaW5rIGhyZWY9XCIvbG9naW5cIj48YT5Mb2dJbiBIZXJlITwvYT48L0xpbms+XHJcbiAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgIDwvRm9ybT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlZ2lzdGVyIl0sInNvdXJjZVJvb3QiOiIifQ==