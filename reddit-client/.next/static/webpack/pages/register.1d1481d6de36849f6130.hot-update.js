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

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_4__.Form, {
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
            if (value >= 3) {
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
          lineNumber: 47,
          columnNumber: 24
        }, _this),
        placeholder: "johndoe"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_4__.Form.Item, {
      label: "Password",
      name: "password",
      rules: [{
        required: true,
        message: 'Please input your Password!'
      }],
      hasFeedback: true,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_4__.Input.Password, {
        prefix: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__.LockOutlined, {
          className: "site-form-item-icon"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 19
        }, _this),
        type: "password",
        placeholder: "test123#"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_4__.Form.Item, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_4__.Button, {
        type: "primary",
        htmlType: "submit",
        className: "login-form-button",
        children: "Register"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 9
      }, _this), "Or ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
        href: "/login",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          children: "LogIn Here!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 32
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 12
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVnaXN0ZXIudHN4Il0sIm5hbWVzIjpbIlJlZ2lzdGVyIiwiZm9ybVJlZiIsInVzZVJlZiIsIm9uRmluaXNoIiwidmFsdWVzIiwiY29uc29sZSIsImxvZyIsImN1cnJlbnQiLCJyZXNldEZpZWxkcyIsInZhbGlkYXRvciIsIl8iLCJ2YWx1ZSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiRXJyb3IiLCJyZXF1aXJlZCIsIm1lc3NhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBOztBQU1BLElBQU1BLFFBQWlDLEdBQUcsU0FBcENBLFFBQW9DLE9BQVc7QUFBQTs7QUFBQTs7QUFDbkQsTUFBTUMsT0FBTyxHQUFHQyw2Q0FBTSxFQUF0Qjs7QUFFQSxNQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFFQyxNQUFGLEVBQW1CO0FBQ2xDQyxXQUFPLENBQUNDLEdBQVIsQ0FBYSwyQkFBYixFQUEwQ0YsTUFBMUM7QUFDQUgsV0FBTyxDQUFDTSxPQUFSLENBQWlCQyxXQUFqQjtBQUNELEdBSEQ7O0FBTUEsc0JBQ0UsOERBQUMsc0NBQUQ7QUFDRSxRQUFJLEVBQUMsVUFEUDtBQUVFLGFBQVMsRUFBQyxlQUZaO0FBR0UsVUFBTSxFQUFDLFVBSFQ7QUFJRSxPQUFHLEVBQUVQLE9BSlA7QUFLRSxZQUFRLEVBQUVFLFFBTFo7QUFNRSxzQkFBa0IsTUFOcEI7QUFBQSw0QkFRRSw4REFBQywyQ0FBRDtBQUNFLFdBQUssRUFBQyxVQURSO0FBRUUsVUFBSSxFQUFDLFVBRlA7QUFHRSxXQUFLLEVBQUUsQ0FDTDtBQUFBLGVBQU87QUFDTE0sbUJBREsscUJBQ0tDLENBREwsRUFDUUMsS0FEUixFQUNlO0FBQ2xCLGdCQUFJQSxLQUFLLElBQUksQ0FBYixFQUFnQjtBQUNkLHFCQUFPQyxPQUFPLENBQUNDLE9BQVIsRUFBUDtBQUNEOztBQUNELG1CQUFPRCxPQUFPLENBQUNFLE1BQVIsQ0FBZSxJQUFJQyxLQUFKLENBQVUsNENBQVYsQ0FBZixDQUFQO0FBQ0Q7QUFOSSxTQUFQO0FBQUEsT0FESyxFQVNMO0FBQ0VDLGdCQUFRLEVBQUUsSUFEWjtBQUVFQyxlQUFPLEVBQUU7QUFGWCxPQVRLLENBSFQ7QUFBQSw2QkFrQkUsOERBQUMsdUNBQUQ7QUFBTyxjQUFNLGVBQUUsOERBQUMsMkRBQUQ7QUFBYyxtQkFBUyxFQUFDO0FBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQWY7QUFBaUUsbUJBQVcsRUFBQztBQUE3RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBbEJGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFSRixlQTRCRSw4REFBQywyQ0FBRDtBQUNFLFdBQUssRUFBQyxVQURSO0FBRUUsVUFBSSxFQUFDLFVBRlA7QUFHRSxXQUFLLEVBQUUsQ0FBQztBQUFFRCxnQkFBUSxFQUFFLElBQVo7QUFBa0JDLGVBQU8sRUFBRTtBQUEzQixPQUFELENBSFQ7QUFJRSxpQkFBVyxNQUpiO0FBQUEsNkJBTUUsOERBQUMsZ0RBQUQ7QUFDRSxjQUFNLGVBQUUsOERBQUMsMkRBQUQ7QUFBYyxtQkFBUyxFQUFDO0FBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRFY7QUFFRSxZQUFJLEVBQUMsVUFGUDtBQUdFLG1CQUFXLEVBQUM7QUFIZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQTVCRixlQXlDRSw4REFBQywyQ0FBRDtBQUFBLDhCQUNFLDhEQUFDLHdDQUFEO0FBQVEsWUFBSSxFQUFDLFNBQWI7QUFBdUIsZ0JBQVEsRUFBQyxRQUFoQztBQUF5QyxpQkFBUyxFQUFDLG1CQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLHNCQUlLLDhEQUFDLGtEQUFEO0FBQU0sWUFBSSxFQUFDLFFBQVg7QUFBQSwrQkFBb0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXpDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWtERCxDQTNERDs7R0FBTWpCLFE7O0tBQUFBLFE7QUE2RE4sK0RBQWVBLFFBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcmVnaXN0ZXIuMWQxNDgxZDZkZTM2ODQ5ZjYxMzAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VSZWYgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgRm9ybSwgSW5wdXQsIEJ1dHRvbiwgQ2hlY2tib3ggfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgVXNlck91dGxpbmVkLCBMb2NrT3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcbmltcG9ydCB7IEZvcm1JbnN0YW5jZSB9IGZyb20gJ2FudGQvbGliL2Zvcm0nO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuaW50ZXJmYWNlIHJlZ2lzdGVyUHJvcHMge1xyXG5cclxufVxyXG5cclxuY29uc3QgUmVnaXN0ZXI6IFJlYWN0LkZDPHJlZ2lzdGVyUHJvcHM+ID0gKCB7IH0gKSA9PiB7XHJcbiAgY29uc3QgZm9ybVJlZiA9IHVzZVJlZjxGb3JtSW5zdGFuY2U+KCk7XHJcblxyXG4gIGNvbnN0IG9uRmluaXNoID0gKCB2YWx1ZXM6IGFueSApID0+IHtcclxuICAgIGNvbnNvbGUubG9nKCAnUmVjZWl2ZWQgdmFsdWVzIG9mIGZvcm06ICcsIHZhbHVlcyApO1xyXG4gICAgZm9ybVJlZi5jdXJyZW50IS5yZXNldEZpZWxkcygpO1xyXG4gIH07XHJcblxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm1cclxuICAgICAgbmFtZT1cInJlZ2lzdGVyXCJcclxuICAgICAgY2xhc3NOYW1lPVwicmVnaXN0ZXItZm9ybVwiXHJcbiAgICAgIGxheW91dD1cInZlcnRpY2FsXCJcclxuICAgICAgcmVmPXtmb3JtUmVmfVxyXG4gICAgICBvbkZpbmlzaD17b25GaW5pc2h9XHJcbiAgICAgIHNjcm9sbFRvRmlyc3RFcnJvclxyXG4gICAgPlxyXG4gICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgbGFiZWw9XCJVc2VybmFtZVwiXHJcbiAgICAgICAgbmFtZT1cInVzZXJuYW1lXCJcclxuICAgICAgICBydWxlcz17W1xyXG4gICAgICAgICAgKCkgPT4gKHtcclxuICAgICAgICAgICAgdmFsaWRhdG9yKF8sIHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgaWYgKHZhbHVlID49IDMpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcignVXNlcm5hbWUgbXVzdCBiZSBncmVhdGVyIHRoYW4gMyBjaGFyYWN0ZXJzJykpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSksXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiAnUGxlYXNlIGlucHV0IHlvdXIgVXNlcm5hbWUnLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICBdfVxyXG4gICAgICA+XHJcbiAgICAgICAgPElucHV0IHByZWZpeD17PFVzZXJPdXRsaW5lZCBjbGFzc05hbWU9XCJzaXRlLWZvcm0taXRlbS1pY29uXCIgLz59IHBsYWNlaG9sZGVyPVwiam9obmRvZVwiIC8+XHJcbiAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgbGFiZWw9XCJQYXNzd29yZFwiXHJcbiAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICBydWxlcz17W3sgcmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6ICdQbGVhc2UgaW5wdXQgeW91ciBQYXNzd29yZCEnIH1dfVxyXG4gICAgICAgIGhhc0ZlZWRiYWNrXHJcbiAgICAgID5cclxuICAgICAgICA8SW5wdXQuUGFzc3dvcmRcclxuICAgICAgICAgIHByZWZpeD17PExvY2tPdXRsaW5lZCBjbGFzc05hbWU9XCJzaXRlLWZvcm0taXRlbS1pY29uXCIgLz59XHJcbiAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJ0ZXN0MTIzI1wiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9Gb3JtLkl0ZW0+XHJcblxyXG4gICAgICA8Rm9ybS5JdGVtPlxyXG4gICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBodG1sVHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImxvZ2luLWZvcm0tYnV0dG9uXCI+XHJcbiAgICAgICAgICBSZWdpc3RlclxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIE9yIDxMaW5rIGhyZWY9XCIvbG9naW5cIj48YT5Mb2dJbiBIZXJlITwvYT48L0xpbms+XHJcbiAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgPC9Gb3JtPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlZ2lzdGVyIl0sInNvdXJjZVJvb3QiOiIifQ==