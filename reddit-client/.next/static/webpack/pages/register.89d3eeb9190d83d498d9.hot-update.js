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
              className: "site-form-item-icon"
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
              className: "site-form-item-icon"
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
          }, _this), "Or ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
            href: "/login",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              children: "LogIn Here!"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 87,
              columnNumber: 36
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 16
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVnaXN0ZXIudHN4Il0sIm5hbWVzIjpbIlJlZ2lzdGVyIiwiZm9ybVJlZiIsInVzZVJlZiIsIm9uRmluaXNoIiwidmFsdWVzIiwiY29uc29sZSIsImxvZyIsImN1cnJlbnQiLCJyZXNldEZpZWxkcyIsInN0eWxlcyIsInZhbGlkYXRvciIsIl8iLCJ2YWx1ZSIsImxlbmd0aCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiRXJyb3IiLCJyZXF1aXJlZCIsIm1lc3NhZ2UiLCJzZWFyY2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBTUEsSUFBTUEsUUFBaUMsR0FBRyxTQUFwQ0EsUUFBb0MsT0FBVztBQUFBOztBQUFBOztBQUNuRCxNQUFNQyxPQUFPLEdBQUdDLDZDQUFNLEVBQXRCOztBQUVBLE1BQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUVDLE1BQUYsRUFBbUI7QUFDbENDLFdBQU8sQ0FBQ0MsR0FBUixDQUFhLDJCQUFiLEVBQTBDRixNQUExQztBQUNBSCxXQUFPLENBQUNNLE9BQVIsQ0FBaUJDLFdBQWpCO0FBQ0QsR0FIRDs7QUFNQSxzQkFDRTtBQUFBLDRCQUNFO0FBQUksZUFBUyxFQUFFQywyRUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBRUU7QUFBSyxlQUFTLEVBQUVBLDhFQUFoQjtBQUFBLDZCQUNFLDhEQUFDLHNDQUFEO0FBQ0EsWUFBSSxFQUFDLFVBREw7QUFFQSxpQkFBUyxFQUFDLGVBRlY7QUFHQSxjQUFNLEVBQUMsVUFIUDtBQUlBLFdBQUcsRUFBRVIsT0FKTDtBQUtBLGdCQUFRLEVBQUVFLFFBTFY7QUFNQSwwQkFBa0IsTUFObEI7QUFBQSxnQ0FRRSw4REFBQywyQ0FBRDtBQUNFLGVBQUssRUFBQyxVQURSO0FBRUUsY0FBSSxFQUFDLFVBRlA7QUFHRSxlQUFLLEVBQUUs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R0FBTW5CLFE7O0tBQUFBLFE7QUFtRk4sK0RBQWVBLFFBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcmVnaXN0ZXIuODlkM2VlYjkxOTBkODNkNDk4ZDkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VSZWYgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgRm9ybSwgSW5wdXQsIEJ1dHRvbiwgQ2hlY2tib3ggfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgVXNlck91dGxpbmVkLCBMb2NrT3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcbmltcG9ydCB7IEZvcm1JbnN0YW5jZSB9IGZyb20gJ2FudGQvbGliL2Zvcm0nO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvUmVnaXN0ZXIubW9kdWxlLnNjc3NcIlxyXG5cclxuaW50ZXJmYWNlIHJlZ2lzdGVyUHJvcHMge1xyXG5cclxufVxyXG5cclxuY29uc3QgUmVnaXN0ZXI6IFJlYWN0LkZDPHJlZ2lzdGVyUHJvcHM+ID0gKCB7IH0gKSA9PiB7XHJcbiAgY29uc3QgZm9ybVJlZiA9IHVzZVJlZjxGb3JtSW5zdGFuY2U+KCk7XHJcblxyXG4gIGNvbnN0IG9uRmluaXNoID0gKCB2YWx1ZXM6IGFueSApID0+IHtcclxuICAgIGNvbnNvbGUubG9nKCAnUmVjZWl2ZWQgdmFsdWVzIG9mIGZvcm06ICcsIHZhbHVlcyApO1xyXG4gICAgZm9ybVJlZi5jdXJyZW50IS5yZXNldEZpZWxkcygpO1xyXG4gIH07XHJcblxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5SZWdpc3RlcjwvaDE+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmVnaXN0ZXJ9PlxyXG4gICAgICAgIDxGb3JtXHJcbiAgICAgICAgbmFtZT1cInJlZ2lzdGVyXCJcclxuICAgICAgICBjbGFzc05hbWU9XCJyZWdpc3Rlci1mb3JtXCJcclxuICAgICAgICBsYXlvdXQ9XCJ2ZXJ0aWNhbFwiXHJcbiAgICAgICAgcmVmPXtmb3JtUmVmfVxyXG4gICAgICAgIG9uRmluaXNoPXtvbkZpbmlzaH1cclxuICAgICAgICBzY3JvbGxUb0ZpcnN0RXJyb3JcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgIGxhYmVsPVwiVXNlcm5hbWVcIlxyXG4gICAgICAgICAgICBuYW1lPVwidXNlcm5hbWVcIlxyXG4gICAgICAgICAgICBydWxlcz17W1xyXG4gICAgICAgICAgICAgICgpID0+ICh7XHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0b3IoXywgdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA+IDMpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcignVXNlcm5hbWUgbXVzdCBiZSBncmVhdGVyIHRoYW4gMyBjaGFyYWN0ZXJzJykpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdQbGVhc2UgaW5wdXQgeW91ciBVc2VybmFtZScsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPElucHV0IHByZWZpeD17PFVzZXJPdXRsaW5lZCBjbGFzc05hbWU9XCJzaXRlLWZvcm0taXRlbS1pY29uXCIgLz59IHBsYWNlaG9sZGVyPVwiam9obmRvZVwiIC8+XHJcbiAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgbGFiZWw9XCJQYXNzd29yZFwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgIHJ1bGVzPXtbKCkgPT4gKHtcclxuICAgICAgICAgICAgICAgIHZhbGlkYXRvcihfLCB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICBpZiAodmFsdWUuc2VhcmNoKC9bYS16XS9pKSA8IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJQYXNzd29yZCBtdXN0IGNvbnRhaW4gYXQgbGVhc3Qgb25lIGxldHRlci5cIikpO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5zZWFyY2goL1swLTldLykgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiUGFzc3dvcmQgbXVzdCBjb250YWluIGF0IGxlYXN0IG9uZSBkaWdpdC5cIikpOyBcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBpZiAodmFsdWUuc2VhcmNoKC9bIUAjJCVeJipdLykgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIlBhc3N3b3JkIG11c3QgY29udGFpbiBhdCBsZWFzdCBvbmUgc3BlY2lhbCBjaGFyYWN0ZXIuXCIpKTsgXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA8IDYpIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoJ1Bhc3N3b3JkIG11c3QgYmUgZ3JlYXRlciB0aGFuIDYgY2hhcmFjdGVycycpKTsgXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICB7IHJlcXVpcmVkOiB0cnVlLCBtZXNzYWdlOiAnUGxlYXNlIGlucHV0IHlvdXIgUGFzc3dvcmQhJyB9XX1cclxuICAgICAgICAgICAgaGFzRmVlZGJhY2tcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPElucHV0LlBhc3N3b3JkXHJcbiAgICAgICAgICAgICAgcHJlZml4PXs8TG9ja091dGxpbmVkIGNsYXNzTmFtZT1cInNpdGUtZm9ybS1pdGVtLWljb25cIiAvPn1cclxuICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwidGVzdDEyMyNcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcblxyXG4gICAgICAgICAgPEZvcm0uSXRlbT5cclxuICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIGh0bWxUeXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwibG9naW4tZm9ybS1idXR0b25cIj5cclxuICAgICAgICAgICAgICBSZWdpc3RlclxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgT3IgPExpbmsgaHJlZj1cIi9sb2dpblwiPjxhPkxvZ0luIEhlcmUhPC9hPjwvTGluaz5cclxuICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgIDwvRm9ybT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWdpc3RlciJdLCJzb3VyY2VSb290IjoiIn0=