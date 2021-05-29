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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVnaXN0ZXIudHN4Il0sIm5hbWVzIjpbIlJlZ2lzdGVyIiwiZm9ybVJlZiIsInVzZVJlZiIsIm9uRmluaXNoIiwidmFsdWVzIiwiY29uc29sZSIsImxvZyIsImN1cnJlbnQiLCJyZXNldEZpZWxkcyIsInN0eWxlcyIsInZhbGlkYXRvciIsIl8iLCJ2YWx1ZSIsImxlbmd0aCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiRXJyb3IiLCJyZXF1aXJlZCIsIm1lc3NhZ2UiLCJpY29uIiwic2VhcmNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQU1BLElBQU1BLFFBQWlDLEdBQUcsU0FBcENBLFFBQW9DLE9BQVc7QUFBQTs7QUFBQTs7QUFDbkQsTUFBTUMsT0FBTyxHQUFHQyw2Q0FBTSxFQUF0Qjs7QUFFQSxNQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFFQyxNQUFGLEVBQW1CO0FBQ2xDQyxXQUFPLENBQUNDLEdBQVIsQ0FBYSwyQkFBYixFQUEwQ0YsTUFBMUM7QUFDQUgsV0FBTyxDQUFDTSxPQUFSLENBQWlCQyxXQUFqQjtBQUNELEdBSEQ7O0FBTUEsc0JBQ0U7QUFBQSw0QkFDRTtBQUFJLGVBQVMsRUFBRUMsMkVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUVFO0FBQUssZUFBUyxFQUFFQSw4RUFBaEI7QUFBQSw2QkFDRSw4REFBQyxzQ0FBRDtBQUNBLFlBQUksRUFBQyxVQURMO0FBRUEsaUJBQVMsRUFBQyxlQUZWO0FBR0EsY0FBTSxFQUFDLFVBSFA7QUFJQSxXQUFHLEVBQUVSLE9BSkw7QUFLQSxnQkFBUSxFQUFFRSxRQUxWO0FBTUEsMEJBQWtCLE1BTmxCO0FBQUEsZ0NBUUUsOERBQUMsMkNBQUQ7QUFDRSxlQUFLLEVBQUMsVUFEUjtBQUVFLGNBQUksRUFBQyxVQUZQO0FBR0UsZUFB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QUFBLGtCQURGO0FBd0VELENBakZEOztHQUFNcEIsUTs7S0FBQUEsUTtBQW1GTiwrREFBZUEsUUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9yZWdpc3Rlci5kMGM2N2VlMWUzYjU0NTVlM2E0Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBGb3JtLCBJbnB1dCwgQnV0dG9uLCBDaGVja2JveCB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgeyBVc2VyT3V0bGluZWQsIExvY2tPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuaW1wb3J0IHsgRm9ybUluc3RhbmNlIH0gZnJvbSAnYW50ZC9saWIvZm9ybSc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9SZWdpc3Rlci5tb2R1bGUuc2Nzc1wiXHJcblxyXG5pbnRlcmZhY2UgcmVnaXN0ZXJQcm9wcyB7XHJcblxyXG59XHJcblxyXG5jb25zdCBSZWdpc3RlcjogUmVhY3QuRkM8cmVnaXN0ZXJQcm9wcz4gPSAoIHsgfSApID0+IHtcclxuICBjb25zdCBmb3JtUmVmID0gdXNlUmVmPEZvcm1JbnN0YW5jZT4oKTtcclxuXHJcbiAgY29uc3Qgb25GaW5pc2ggPSAoIHZhbHVlczogYW55ICkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coICdSZWNlaXZlZCB2YWx1ZXMgb2YgZm9ybTogJywgdmFsdWVzICk7XHJcbiAgICBmb3JtUmVmLmN1cnJlbnQhLnJlc2V0RmllbGRzKCk7XHJcbiAgfTtcclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PlJlZ2lzdGVyPC9oMT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yZWdpc3Rlcn0+XHJcbiAgICAgICAgPEZvcm1cclxuICAgICAgICBuYW1lPVwicmVnaXN0ZXJcIlxyXG4gICAgICAgIGNsYXNzTmFtZT1cInJlZ2lzdGVyLWZvcm1cIlxyXG4gICAgICAgIGxheW91dD1cInZlcnRpY2FsXCJcclxuICAgICAgICByZWY9e2Zvcm1SZWZ9XHJcbiAgICAgICAgb25GaW5pc2g9e29uRmluaXNofVxyXG4gICAgICAgIHNjcm9sbFRvRmlyc3RFcnJvclxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgbGFiZWw9XCJVc2VybmFtZVwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJ1c2VybmFtZVwiXHJcbiAgICAgICAgICAgIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgICAgKCkgPT4gKHtcclxuICAgICAgICAgICAgICAgIHZhbGlkYXRvcihfLCB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICBpZiAodmFsdWUubGVuZ3RoID4gMykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKCdVc2VybmFtZSBtdXN0IGJlIGdyZWF0ZXIgdGhhbiAzIGNoYXJhY3RlcnMnKSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ1BsZWFzZSBpbnB1dCB5b3VyIFVzZXJuYW1lJyxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBdfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8SW5wdXQgcHJlZml4PXs8VXNlck91dGxpbmVkIGNsYXNzTmFtZT17c3R5bGVzLmljb259IC8+fSBwbGFjZWhvbGRlcj1cImpvaG5kb2VcIiAvPlxyXG4gICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgIGxhYmVsPVwiUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICBydWxlcz17WygpID0+ICh7XHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0b3IoXywgdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlLnNlYXJjaCgvW2Etel0vaSkgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiUGFzc3dvcmQgbXVzdCBjb250YWluIGF0IGxlYXN0IG9uZSBsZXR0ZXIuXCIpKTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBpZiAodmFsdWUuc2VhcmNoKC9bMC05XS8pIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIlBhc3N3b3JkIG11c3QgY29udGFpbiBhdCBsZWFzdCBvbmUgZGlnaXQuXCIpKTsgXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlLnNlYXJjaCgvWyFAIyQlXiYqXS8pIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJQYXNzd29yZCBtdXN0IGNvbnRhaW4gYXQgbGVhc3Qgb25lIHNwZWNpYWwgY2hhcmFjdGVyLlwiKSk7IFxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPCA2KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKCdQYXNzd29yZCBtdXN0IGJlIGdyZWF0ZXIgdGhhbiA2IGNoYXJhY3RlcnMnKSk7IFxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgeyByZXF1aXJlZDogdHJ1ZSwgbWVzc2FnZTogJ1BsZWFzZSBpbnB1dCB5b3VyIFBhc3N3b3JkIScgfV19XHJcbiAgICAgICAgICAgIGhhc0ZlZWRiYWNrXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxJbnB1dC5QYXNzd29yZFxyXG4gICAgICAgICAgICAgIHByZWZpeD17PExvY2tPdXRsaW5lZCBjbGFzc05hbWU9e3N0eWxlcy5pY29ufSAvPn1cclxuICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwidGVzdDEyMyNcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcblxyXG4gICAgICAgICAgPEZvcm0uSXRlbT5cclxuICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIGh0bWxUeXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwibG9naW4tZm9ybS1idXR0b25cIj5cclxuICAgICAgICAgICAgICBSZWdpc3RlclxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgT3IgPExpbmsgaHJlZj1cIi9sb2dpblwiPjxhPkxvZ0luIEhlcmUhPC9hPjwvTGluaz5cclxuICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgIDwvRm9ybT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWdpc3RlciJdLCJzb3VyY2VSb290IjoiIn0=