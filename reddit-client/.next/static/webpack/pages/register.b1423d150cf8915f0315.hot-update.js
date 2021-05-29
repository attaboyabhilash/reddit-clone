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
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
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
    className: styles.register,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_4__.Form, {
      name: "register",
      className: "register-form",
      layout: "vertical",
      ref: formRef,
      onFinish: onFinish,
      scrollToFirstError: true,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_4__.Form.Item, {
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
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_4__.Input, {
          prefix: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__.UserOutlined, {
            className: "site-form-item-icon"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 24
          }, _this),
          placeholder: "johndoe"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 9
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 7
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_4__.Form.Item, {
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
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_4__.Input.Password, {
          prefix: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__.LockOutlined, {
            className: "site-form-item-icon"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 19
          }, _this),
          type: "password",
          placeholder: "test123#"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 9
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 7
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_4__.Form.Item, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_4__.Button, {
          type: "primary",
          htmlType: "submit",
          className: "login-form-button",
          children: "Register"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 9
        }, _this), "Or ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
          href: "/login",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            children: "LogIn Here!"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 32
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 12
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 7
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 5
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 21,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVnaXN0ZXIudHN4Il0sIm5hbWVzIjpbIlJlZ2lzdGVyIiwiZm9ybVJlZiIsInVzZVJlZiIsIm9uRmluaXNoIiwidmFsdWVzIiwiY29uc29sZSIsImxvZyIsImN1cnJlbnQiLCJyZXNldEZpZWxkcyIsInN0eWxlcyIsInJlZ2lzdGVyIiwidmFsaWRhdG9yIiwiXyIsInZhbHVlIiwibGVuZ3RoIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJFcnJvciIsInJlcXVpcmVkIiwibWVzc2FnZSIsInNlYXJjaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7O0FBTUEsSUFBTUEsUUFBaUMsR0FBRyxTQUFwQ0EsUUFBb0MsT0FBVztBQUFBOztBQUFBOztBQUNuRCxNQUFNQyxPQUFPLEdBQUdDLDZDQUFNLEVBQXRCOztBQUVBLE1BQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUVDLE1BQUYsRUFBbUI7QUFDbENDLFdBQU8sQ0FBQ0MsR0FBUixDQUFhLDJCQUFiLEVBQTBDRixNQUExQztBQUNBSCxXQUFPLENBQUNNLE9BQVIsQ0FBaUJDLFdBQWpCO0FBQ0QsR0FIRDs7QUFNQSxzQkFDRTtBQUFLLGFBQVMsRUFBRUMsTUFBTSxDQUFDQyxRQUF2QjtBQUFBLDJCQUNBLDhEQUFDLHNDQUFEO0FBQ0UsVUFBSSxFQUFDLFVBRFA7QUFFRSxlQUFTLEVBQUMsZUFGWjtBQUdFLFlBQU0sRUFBQyxVQUhUO0FBSUUsU0FBRyxFQUFFVCxPQUpQO0FBS0UsY0FBUSxFQUFFRSxRQUxaO0FBTUUsd0JBQWtCLE1BTnBCO0FBQUEsOEJBUUUsOERBQUMsMkNBQUQ7QUFDRSxhQUFLLEVBQUMsVUFEUjtBQUVFLFlBQUksRUFBQyxVQUZQO0FBR0UsYUFBSyxFQUFFLENBQ0w7QUFBQSxpQkFBTztBQUNMUSxxQkFESyxxQkFDS0MsQ0FETCxFQUNRQyxLQURSLEVBQ2U7QUFDbEIs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M2QxNTBjZjg5MTVmMDMxNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBGb3JtLCBJbnB1dCwgQnV0dG9uLCBDaGVja2JveCB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgeyBVc2VyT3V0bGluZWQsIExvY2tPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuaW1wb3J0IHsgRm9ybUluc3RhbmNlIH0gZnJvbSAnYW50ZC9saWIvZm9ybSc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG5pbnRlcmZhY2UgcmVnaXN0ZXJQcm9wcyB7XHJcblxyXG59XHJcblxyXG5jb25zdCBSZWdpc3RlcjogUmVhY3QuRkM8cmVnaXN0ZXJQcm9wcz4gPSAoIHsgfSApID0+IHtcclxuICBjb25zdCBmb3JtUmVmID0gdXNlUmVmPEZvcm1JbnN0YW5jZT4oKTtcclxuXHJcbiAgY29uc3Qgb25GaW5pc2ggPSAoIHZhbHVlczogYW55ICkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coICdSZWNlaXZlZCB2YWx1ZXMgb2YgZm9ybTogJywgdmFsdWVzICk7XHJcbiAgICBmb3JtUmVmLmN1cnJlbnQhLnJlc2V0RmllbGRzKCk7XHJcbiAgfTtcclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJlZ2lzdGVyfT5cclxuICAgIDxGb3JtXHJcbiAgICAgIG5hbWU9XCJyZWdpc3RlclwiXHJcbiAgICAgIGNsYXNzTmFtZT1cInJlZ2lzdGVyLWZvcm1cIlxyXG4gICAgICBsYXlvdXQ9XCJ2ZXJ0aWNhbFwiXHJcbiAgICAgIHJlZj17Zm9ybVJlZn1cclxuICAgICAgb25GaW5pc2g9e29uRmluaXNofVxyXG4gICAgICBzY3JvbGxUb0ZpcnN0RXJyb3JcclxuICAgID5cclxuICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgIGxhYmVsPVwiVXNlcm5hbWVcIlxyXG4gICAgICAgIG5hbWU9XCJ1c2VybmFtZVwiXHJcbiAgICAgICAgcnVsZXM9e1tcclxuICAgICAgICAgICgpID0+ICh7XHJcbiAgICAgICAgICAgIHZhbGlkYXRvcihfLCB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPiAzKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoJ1VzZXJuYW1lIG11c3QgYmUgZ3JlYXRlciB0aGFuIDMgY2hhcmFjdGVycycpKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0pLFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgbWVzc2FnZTogJ1BsZWFzZSBpbnB1dCB5b3VyIFVzZXJuYW1lJyxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgXX1cclxuICAgICAgPlxyXG4gICAgICAgIDxJbnB1dCBwcmVmaXg9ezxVc2VyT3V0bGluZWQgY2xhc3NOYW1lPVwic2l0ZS1mb3JtLWl0ZW0taWNvblwiIC8+fSBwbGFjZWhvbGRlcj1cImpvaG5kb2VcIiAvPlxyXG4gICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgIGxhYmVsPVwiUGFzc3dvcmRcIlxyXG4gICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgcnVsZXM9e1soKSA9PiAoe1xyXG4gICAgICAgICAgICB2YWxpZGF0b3IoXywgdmFsdWUpIHtcclxuICAgICAgICAgICAgICBpZiAodmFsdWUuc2VhcmNoKC9bYS16XS9pKSA8IDApIHtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIlBhc3N3b3JkIG11c3QgY29udGFpbiBhdCBsZWFzdCBvbmUgbGV0dGVyLlwiKSk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGlmICh2YWx1ZS5zZWFyY2goL1swLTldLykgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJQYXNzd29yZCBtdXN0IGNvbnRhaW4gYXQgbGVhc3Qgb25lIGRpZ2l0LlwiKSk7IFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBpZiAodmFsdWUuc2VhcmNoKC9bIUAjJCVeJipdLykgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiUGFzc3dvcmQgbXVzdCBjb250YWluIGF0IGxlYXN0IG9uZSBzcGVjaWFsIGNoYXJhY3Rlci5cIikpOyBcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA8IDYpIHtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcignUGFzc3dvcmQgbXVzdCBiZSBncmVhdGVyIHRoYW4gNiBjaGFyYWN0ZXJzJykpOyBcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSksXHJcbiAgICAgICAgICB7IHJlcXVpcmVkOiB0cnVlLCBtZXNzYWdlOiAnUGxlYXNlIGlucHV0IHlvdXIgUGFzc3dvcmQhJyB9XX1cclxuICAgICAgICBoYXNGZWVkYmFja1xyXG4gICAgICA+XHJcbiAgICAgICAgPElucHV0LlBhc3N3b3JkXHJcbiAgICAgICAgICBwcmVmaXg9ezxMb2NrT3V0bGluZWQgY2xhc3NOYW1lPVwic2l0ZS1mb3JtLWl0ZW0taWNvblwiIC8+fVxyXG4gICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwidGVzdDEyMyNcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvRm9ybS5JdGVtPlxyXG5cclxuICAgICAgPEZvcm0uSXRlbT5cclxuICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgaHRtbFR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJsb2dpbi1mb3JtLWJ1dHRvblwiPlxyXG4gICAgICAgICAgUmVnaXN0ZXJcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICBPciA8TGluayBocmVmPVwiL2xvZ2luXCI+PGE+TG9nSW4gSGVyZSE8L2E+PC9MaW5rPlxyXG4gICAgICA8L0Zvcm0uSXRlbT5cclxuICAgIDwvRm9ybT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlZ2lzdGVyIl0sInNvdXJjZVJvb3QiOiIifQ==