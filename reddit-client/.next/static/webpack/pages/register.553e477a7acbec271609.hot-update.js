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

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      className: (_styles_Register_module_scss__WEBPACK_IMPORTED_MODULE_4___default().title),
      children: "Register"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
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
              lineNumber: 51,
              columnNumber: 28
            }, _this),
            placeholder: "johndoe"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
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
              lineNumber: 77,
              columnNumber: 23
            }, _this),
            type: "password",
            placeholder: "test123#"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_5__.Form.Item, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_5__.Button, {
            type: "primary",
            htmlType: "submit",
            className: "login-form-button",
            children: "Register"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            className: (_styles_Register_module_scss__WEBPACK_IMPORTED_MODULE_4___default().footer),
            children: ["Already a member? Click ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
              href: "/login",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                children: "here"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 87,
                columnNumber: 86
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 87,
              columnNumber: 66
            }, _this), " to login"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVnaXN0ZXIudHN4Il0sIm5hbWVzIjpbIlJlZ2lzdGVyIiwiZm9ybVJlZiIsInVzZVJlZiIsIm9uRmluaXNoIiwidmFsdWVzIiwiY29uc29sZSIsImxvZyIsImN1cnJlbnQiLCJyZXNldEZpZWxkcyIsInN0eWxlcyIsInZhbGlkYXRvciIsIl8iLCJ2YWx1ZSIsImxlbmd0aCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiRXJyb3IiLCJyZXF1aXJlZCIsIm1lc3NhZ2UiLCJpY29uIiwic2VhcmNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQU1BLElBQU1BLFFBQWlDLEdBQUcsU0FBcENBLFFBQW9DLE9BQVc7QUFBQTs7QUFBQTs7QUFDbkQsTUFBTUMsT0FBTyxHQUFHQyw2Q0FBTSxFQUF0Qjs7QUFFQSxNQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFFQyxNQUFGLEVBQW1CO0FBQ2xDQyxXQUFPLENBQUNDLEdBQVIsQ0FBYSwyQkFBYixFQUEwQ0YsTUFBMUM7QUFDQUgsV0FBTyxDQUFDTSxPQUFSLENBQWlCQyxXQUFqQjtBQUNELEdBSEQ7O0FBTUEsc0JBQ0U7QUFBQSw0QkFDRTtBQUFJLGVBQVMsRUFBRUMsMkVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUVFO0FBQUssZUFBUyxFQUFFQSw4RUFBaEI7QUFBQSw2QkFDRSw4REFBQyxzQ0FBRDtBQUNBLFlBQUksRUFBQyxVQURMO0FBRUEsaUJBQVMsRUFBQyxlQUZWO0FBR0EsY0FBTSxFQUFDLFVBSFA7QUFJQSxXQUFHLEVBQUVSLE9BSkw7QUFLQSxnQkFBUSxFQUFFRSxRQUxWO0FBTUEsMEJBQWtCLE1BTmxCO0FBQUEsZ0NBUUUsOERBQUMsMkNBQUQ7QUFDRSxlQUFLLEVBQUMsVUFEUjtBQUVFLGNBQUksRUFBQyxVQUZQO0FBR0UsZUFB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QUEsaUJBMURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRjtBQUFBLGtCQURGO0FBd0VELENBakZEOztHQUFNVCxROztLQUFBQSxRO0FBbUZOLCtEQUFlQSxRQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3JlZ2lzdGVyLjU1M2U0NzdhN2FjYmVjMjcxNjA5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlUmVmIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IEZvcm0sIElucHV0LCBCdXR0b24sIENoZWNrYm94IH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IFVzZXJPdXRsaW5lZCwgTG9ja091dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5pbXBvcnQgeyBGb3JtSW5zdGFuY2UgfSBmcm9tICdhbnRkL2xpYi9mb3JtJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL1JlZ2lzdGVyLm1vZHVsZS5zY3NzXCJcclxuXHJcbmludGVyZmFjZSByZWdpc3RlclByb3BzIHtcclxuXHJcbn1cclxuXHJcbmNvbnN0IFJlZ2lzdGVyOiBSZWFjdC5GQzxyZWdpc3RlclByb3BzPiA9ICggeyB9ICkgPT4ge1xyXG4gIGNvbnN0IGZvcm1SZWYgPSB1c2VSZWY8Rm9ybUluc3RhbmNlPigpO1xyXG5cclxuICBjb25zdCBvbkZpbmlzaCA9ICggdmFsdWVzOiBhbnkgKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyggJ1JlY2VpdmVkIHZhbHVlcyBvZiBmb3JtOiAnLCB2YWx1ZXMgKTtcclxuICAgIGZvcm1SZWYuY3VycmVudCEucmVzZXRGaWVsZHMoKTtcclxuICB9O1xyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+UmVnaXN0ZXI8L2gxPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJlZ2lzdGVyfT5cclxuICAgICAgICA8Rm9ybVxyXG4gICAgICAgIG5hbWU9XCJyZWdpc3RlclwiXHJcbiAgICAgICAgY2xhc3NOYW1lPVwicmVnaXN0ZXItZm9ybVwiXHJcbiAgICAgICAgbGF5b3V0PVwidmVydGljYWxcIlxyXG4gICAgICAgIHJlZj17Zm9ybVJlZn1cclxuICAgICAgICBvbkZpbmlzaD17b25GaW5pc2h9XHJcbiAgICAgICAgc2Nyb2xsVG9GaXJzdEVycm9yXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICBsYWJlbD1cIlVzZXJuYW1lXCJcclxuICAgICAgICAgICAgbmFtZT1cInVzZXJuYW1lXCJcclxuICAgICAgICAgICAgcnVsZXM9e1tcclxuICAgICAgICAgICAgICAoKSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgdmFsaWRhdG9yKF8sIHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPiAzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoJ1VzZXJuYW1lIG11c3QgYmUgZ3JlYXRlciB0aGFuIDMgY2hhcmFjdGVycycpKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnUGxlYXNlIGlucHV0IHlvdXIgVXNlcm5hbWUnLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIF19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxJbnB1dCBwcmVmaXg9ezxVc2VyT3V0bGluZWQgY2xhc3NOYW1lPXtzdHlsZXMuaWNvbn0gLz59IHBsYWNlaG9sZGVyPVwiam9obmRvZVwiIC8+XHJcbiAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgbGFiZWw9XCJQYXNzd29yZFwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgIHJ1bGVzPXtbKCkgPT4gKHtcclxuICAgICAgICAgICAgICAgIHZhbGlkYXRvcihfLCB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICBpZiAodmFsdWUuc2VhcmNoKC9bYS16XS9pKSA8IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJQYXNzd29yZCBtdXN0IGNvbnRhaW4gYXQgbGVhc3Qgb25lIGxldHRlci5cIikpO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5zZWFyY2goL1swLTldLykgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiUGFzc3dvcmQgbXVzdCBjb250YWluIGF0IGxlYXN0IG9uZSBkaWdpdC5cIikpOyBcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBpZiAodmFsdWUuc2VhcmNoKC9bIUAjJCVeJipdLykgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIlBhc3N3b3JkIG11c3QgY29udGFpbiBhdCBsZWFzdCBvbmUgc3BlY2lhbCBjaGFyYWN0ZXIuXCIpKTsgXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA8IDYpIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoJ1Bhc3N3b3JkIG11c3QgYmUgZ3JlYXRlciB0aGFuIDYgY2hhcmFjdGVycycpKTsgXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICB7IHJlcXVpcmVkOiB0cnVlLCBtZXNzYWdlOiAnUGxlYXNlIGlucHV0IHlvdXIgUGFzc3dvcmQhJyB9XX1cclxuICAgICAgICAgICAgaGFzRmVlZGJhY2tcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPElucHV0LlBhc3N3b3JkXHJcbiAgICAgICAgICAgICAgcHJlZml4PXs8TG9ja091dGxpbmVkIGNsYXNzTmFtZT17c3R5bGVzLmljb259IC8+fVxyXG4gICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJ0ZXN0MTIzI1wiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuXHJcbiAgICAgICAgICA8Rm9ybS5JdGVtPlxyXG4gICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgaHRtbFR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJsb2dpbi1mb3JtLWJ1dHRvblwiPlxyXG4gICAgICAgICAgICAgIFJlZ2lzdGVyXHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJ9PkFscmVhZHkgYSBtZW1iZXI/IENsaWNrIDxMaW5rIGhyZWY9XCIvbG9naW5cIj48YT5oZXJlPC9hPjwvTGluaz4gdG8gbG9naW48L3A+XHJcbiAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICA8L0Zvcm0+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVnaXN0ZXIiXSwic291cmNlUm9vdCI6IiJ9