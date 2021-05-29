(function() {
var exports = {};
exports.id = "pages/register";
exports.ids = ["pages/register"];
exports.modules = {

/***/ "./pages/register.tsx":
/*!****************************!*\
  !*** ./pages/register.tsx ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_Register_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Register.module.scss */ "./styles/Register.module.scss");
/* harmony import */ var _styles_Register_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Register_module_scss__WEBPACK_IMPORTED_MODULE_5__);


var _jsxFileName = "D:\\Abhilash Negi\\GitHub Projects\\reddit-clone\\reddit-client\\pages\\register.tsx";






const Register = ({}) => {
  const {
    0: isLoading,
    1: setIsLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const formRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();

  const onFinish = values => {
    setIsLoading(true);
    console.log('Received values of form: ', values);
    setTimeout(() => {
      setIsLoading(false);
      formRef.current.resetFields();
    }, 5000);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      className: (_styles_Register_module_scss__WEBPACK_IMPORTED_MODULE_5___default().title),
      children: "Register"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Card, {
      hoverable: true,
      className: (_styles_Register_module_scss__WEBPACK_IMPORTED_MODULE_5___default().register),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Form, {
        name: "register",
        className: "register-form",
        layout: "vertical",
        ref: formRef,
        onFinish: onFinish,
        scrollToFirstError: true,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Form.Item, {
          label: "Username",
          name: "username",
          rules: [() => ({
            validator(_, value) {
              if (value.length > 3) {
                return Promise.resolve();
              }

              return Promise.reject(new Error('Username must be greater than 3 characters'));
            }

          }), {
            required: true,
            message: 'Please input your Username'
          }],
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Input, {
            prefix: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.UserOutlined, {
              className: (_styles_Register_module_scss__WEBPACK_IMPORTED_MODULE_5___default().icon)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 28
            }, undefined),
            placeholder: "johndoe"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Form.Item, {
          label: "Password",
          name: "password",
          rules: [() => ({
            validator(_, value) {
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

          }), {
            required: true,
            message: 'Please input your Password!'
          }],
          hasFeedback: true,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Input.Password, {
            prefix: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.LockOutlined, {
              className: (_styles_Register_module_scss__WEBPACK_IMPORTED_MODULE_5___default().icon)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 83,
              columnNumber: 23
            }, undefined),
            type: "password",
            placeholder: "test123#"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Form.Item, {
          className: (_styles_Register_module_scss__WEBPACK_IMPORTED_MODULE_5___default().footer),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Button, {
            type: "primary",
            htmlType: "submit",
            className: (_styles_Register_module_scss__WEBPACK_IMPORTED_MODULE_5___default().register_button),
            loading: isLoading,
            children: "Register"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            className: (_styles_Register_module_scss__WEBPACK_IMPORTED_MODULE_5___default().footer_text),
            children: ["Already a member? Click ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
              href: "/login",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                children: "here"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 93,
                columnNumber: 91
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 93,
              columnNumber: 71
            }, undefined), " to login"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ __webpack_exports__["default"] = (Register);

/***/ }),

/***/ "./styles/Register.module.scss":
/*!*************************************!*\
  !*** ./styles/Register.module.scss ***!
  \*************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"title": "Register_title__3ddy2",
	"register": "Register_register__3lIg4",
	"icon": "Register_icon__F1hAo",
	"footer": "Register_footer__1TEmw",
	"register_button": "Register_register_button__21D6J",
	"footer_text": "Register_footer_text__1qbD8"
};


/***/ }),

/***/ "@ant-design/icons":
/*!************************************!*\
  !*** external "@ant-design/icons" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@ant-design/icons");;

/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/***/ (function(module) {

"use strict";
module.exports = require("antd");;

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js"], function() { return __webpack_exec__("./pages/register.tsx"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWRkaXQtY2xpZW50Ly4vcGFnZXMvcmVnaXN0ZXIudHN4Iiwid2VicGFjazovL3JlZGRpdC1jbGllbnQvLi9zdHlsZXMvUmVnaXN0ZXIubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vcmVkZGl0LWNsaWVudC9leHRlcm5hbCBcIkBhbnQtZGVzaWduL2ljb25zXCIiLCJ3ZWJwYWNrOi8vcmVkZGl0LWNsaWVudC9leHRlcm5hbCBcImFudGRcIiIsIndlYnBhY2s6Ly9yZWRkaXQtY2xpZW50L2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovL3JlZGRpdC1jbGllbnQvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIiLCJ3ZWJwYWNrOi8vcmVkZGl0LWNsaWVudC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vcmVkZGl0LWNsaWVudC9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vcmVkZGl0LWNsaWVudC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL3JlZGRpdC1jbGllbnQvaWdub3JlZHxEOlxcQWJoaWxhc2ggTmVnaVxcR2l0SHViIFByb2plY3RzXFxyZWRkaXQtY2xvbmVcXHJlZGRpdC1jbGllbnRcXG5vZGVfbW9kdWxlc1xcbmV4dFxcZGlzdFxcbmV4dC1zZXJ2ZXJcXGxpYlxccm91dGVyfC4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcyJdLCJuYW1lcyI6WyJSZWdpc3RlciIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsInVzZVN0YXRlIiwiZm9ybVJlZiIsInVzZVJlZiIsIm9uRmluaXNoIiwidmFsdWVzIiwiY29uc29sZSIsImxvZyIsInNldFRpbWVvdXQiLCJjdXJyZW50IiwicmVzZXRGaWVsZHMiLCJzdHlsZXMiLCJ2YWxpZGF0b3IiLCJfIiwidmFsdWUiLCJsZW5ndGgiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsIkVycm9yIiwicmVxdWlyZWQiLCJtZXNzYWdlIiwiaWNvbiIsInNlYXJjaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQU9BLE1BQU1BLFFBQWlDLEdBQUcsQ0FBRSxFQUFGLEtBQVc7QUFDbkQsUUFBTTtBQUFBLE9BQUNDLFNBQUQ7QUFBQSxPQUFZQztBQUFaLE1BQTRCQywrQ0FBUSxDQUFDLEtBQUQsQ0FBMUM7QUFDQSxRQUFNQyxPQUFPLEdBQUdDLDZDQUFNLEVBQXRCOztBQUVBLFFBQU1DLFFBQVEsR0FBS0MsTUFBRixJQUF3QjtBQUN2Q0wsZ0JBQVksQ0FBQyxJQUFELENBQVo7QUFDQU0sV0FBTyxDQUFDQyxHQUFSLENBQWEsMkJBQWIsRUFBMENGLE1BQTFDO0FBQ0FHLGNBQVUsQ0FBQyxNQUFNO0FBQ2ZSLGtCQUFZLENBQUMsS0FBRCxDQUFaO0FBQ0FFLGFBQU8sQ0FBQ08sT0FBUixDQUFpQkMsV0FBakI7QUFDRCxLQUhTLEVBR1AsSUFITyxDQUFWO0FBSUQsR0FQRDs7QUFVQSxzQkFDRTtBQUFBLDRCQUNFO0FBQUksZUFBUyxFQUFFQywyRUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFLDhEQUFDLHNDQUFEO0FBQU0sZUFBUyxNQUFmO0FBQWdCLGVBQVMsRUFBRUEsOEVBQTNCO0FBQUEsNkJBQ0UsOERBQUMsc0NBQUQ7QUFDQSxZQUFJLEVBQUMsVUFETDtBQUVBLGlCQUFTLEVBQUMsZUFGVjtBQUdBLGNBQU0sRUFBQyxVQUhQO0FBSUEsV0FBRyxFQUFFVCxPQUpMO0FBS0EsZ0JBQVEsRUFBRUUsUUFMVjtBQU1BLDBCQUFrQixNQU5sQjtBQUFBLGdDQVFFLDhEQUFDLDJDQUFEO0FBQ0UsZUFBSyxFQUFDLFVBRFI7QUFFRSxjQUFJLEVBQUMsVUFGUDtBQUdF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QUEsdUJBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQTFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGO0FBQUEsa0JBREY7QUF3RUQsQ0F0RkQ7O0FBd0ZBLCtEQUFlYixRQUFmLEU7Ozs7Ozs7Ozs7QUNwR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNSQSwrQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx5RTs7Ozs7Ozs7Ozs7QUNBQSxpRzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7OztBQ0FBLGUiLCJmaWxlIjoicGFnZXMvcmVnaXN0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBGb3JtLCBJbnB1dCwgQnV0dG9uLCBDYXJkIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IFVzZXJPdXRsaW5lZCwgTG9ja091dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5pbXBvcnQgeyBGb3JtSW5zdGFuY2UgfSBmcm9tICdhbnRkL2xpYi9mb3JtJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL1JlZ2lzdGVyLm1vZHVsZS5zY3NzXCJcclxuaW1wb3J0IHsgcmVnaXN0ZXIgfSBmcm9tICcuLi9zcmMvdHlwZXMnO1xyXG5cclxuaW50ZXJmYWNlIHJlZ2lzdGVyUHJvcHMge1xyXG5cclxufVxyXG5cclxuY29uc3QgUmVnaXN0ZXI6IFJlYWN0LkZDPHJlZ2lzdGVyUHJvcHM+ID0gKCB7IH0gKSA9PiB7XHJcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IGZvcm1SZWYgPSB1c2VSZWY8Rm9ybUluc3RhbmNlPigpO1xyXG5cclxuICBjb25zdCBvbkZpbmlzaCA9ICggdmFsdWVzOiByZWdpc3RlciApID0+IHtcclxuICAgIHNldElzTG9hZGluZyh0cnVlKVxyXG4gICAgY29uc29sZS5sb2coICdSZWNlaXZlZCB2YWx1ZXMgb2YgZm9ybTogJywgdmFsdWVzIClcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpXHJcbiAgICAgIGZvcm1SZWYuY3VycmVudCEucmVzZXRGaWVsZHMoKVxyXG4gICAgfSwgNTAwMClcclxuICB9O1xyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+UmVnaXN0ZXI8L2gxPlxyXG4gICAgICA8Q2FyZCBob3ZlcmFibGUgY2xhc3NOYW1lPXtzdHlsZXMucmVnaXN0ZXJ9PlxyXG4gICAgICAgIDxGb3JtXHJcbiAgICAgICAgbmFtZT1cInJlZ2lzdGVyXCJcclxuICAgICAgICBjbGFzc05hbWU9XCJyZWdpc3Rlci1mb3JtXCJcclxuICAgICAgICBsYXlvdXQ9XCJ2ZXJ0aWNhbFwiXHJcbiAgICAgICAgcmVmPXtmb3JtUmVmfVxyXG4gICAgICAgIG9uRmluaXNoPXtvbkZpbmlzaH1cclxuICAgICAgICBzY3JvbGxUb0ZpcnN0RXJyb3JcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgIGxhYmVsPVwiVXNlcm5hbWVcIlxyXG4gICAgICAgICAgICBuYW1lPVwidXNlcm5hbWVcIlxyXG4gICAgICAgICAgICBydWxlcz17W1xyXG4gICAgICAgICAgICAgICgpID0+ICh7XHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0b3IoXywgdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA+IDMpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcignVXNlcm5hbWUgbXVzdCBiZSBncmVhdGVyIHRoYW4gMyBjaGFyYWN0ZXJzJykpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdQbGVhc2UgaW5wdXQgeW91ciBVc2VybmFtZScsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPElucHV0IHByZWZpeD17PFVzZXJPdXRsaW5lZCBjbGFzc05hbWU9e3N0eWxlcy5pY29ufSAvPn0gcGxhY2Vob2xkZXI9XCJqb2huZG9lXCIgLz5cclxuICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICBsYWJlbD1cIlBhc3N3b3JkXCJcclxuICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgcnVsZXM9e1soKSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgdmFsaWRhdG9yKF8sIHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5zZWFyY2goL1thLXpdL2kpIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIlBhc3N3b3JkIG11c3QgY29udGFpbiBhdCBsZWFzdCBvbmUgbGV0dGVyLlwiKSk7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlLnNlYXJjaCgvWzAtOV0vKSA8IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJQYXNzd29yZCBtdXN0IGNvbnRhaW4gYXQgbGVhc3Qgb25lIGRpZ2l0LlwiKSk7IFxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5zZWFyY2goL1shQCMkJV4mKl0vKSA8IDApIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiUGFzc3dvcmQgbXVzdCBjb250YWluIGF0IGxlYXN0IG9uZSBzcGVjaWFsIGNoYXJhY3Rlci5cIikpOyBcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBpZiAodmFsdWUubGVuZ3RoIDwgNikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcignUGFzc3dvcmQgbXVzdCBiZSBncmVhdGVyIHRoYW4gNiBjaGFyYWN0ZXJzJykpOyBcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgIHsgcmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6ICdQbGVhc2UgaW5wdXQgeW91ciBQYXNzd29yZCEnIH1dfVxyXG4gICAgICAgICAgICBoYXNGZWVkYmFja1xyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8SW5wdXQuUGFzc3dvcmRcclxuICAgICAgICAgICAgICBwcmVmaXg9ezxMb2NrT3V0bGluZWQgY2xhc3NOYW1lPXtzdHlsZXMuaWNvbn0gLz59XHJcbiAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInRlc3QxMjMjXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG5cclxuICAgICAgICAgIDxGb3JtLkl0ZW0gY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGVyfT5cclxuICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIGh0bWxUeXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPXtzdHlsZXMucmVnaXN0ZXJfYnV0dG9ufSBsb2FkaW5nPXtpc0xvYWRpbmd9PlxyXG4gICAgICAgICAgICAgIFJlZ2lzdGVyXHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJfdGV4dH0+QWxyZWFkeSBhIG1lbWJlcj8gQ2xpY2sgPExpbmsgaHJlZj1cIi9sb2dpblwiPjxhPmhlcmU8L2E+PC9MaW5rPiB0byBsb2dpbjwvcD5cclxuICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgIDwvRm9ybT5cclxuICAgICAgPC9DYXJkPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVnaXN0ZXIiLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJ0aXRsZVwiOiBcIlJlZ2lzdGVyX3RpdGxlX18zZGR5MlwiLFxuXHRcInJlZ2lzdGVyXCI6IFwiUmVnaXN0ZXJfcmVnaXN0ZXJfXzNsSWc0XCIsXG5cdFwiaWNvblwiOiBcIlJlZ2lzdGVyX2ljb25fX0YxaEFvXCIsXG5cdFwiZm9vdGVyXCI6IFwiUmVnaXN0ZXJfZm9vdGVyX18xVEVtd1wiLFxuXHRcInJlZ2lzdGVyX2J1dHRvblwiOiBcIlJlZ2lzdGVyX3JlZ2lzdGVyX2J1dHRvbl9fMjFENkpcIixcblx0XCJmb290ZXJfdGV4dFwiOiBcIlJlZ2lzdGVyX2Zvb3Rlcl90ZXh0X18xcWJEOFwiXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFudC1kZXNpZ24vaWNvbnNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFudGRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiLCIvKiAoaWdub3JlZCkgKi8iXSwic291cmNlUm9vdCI6IiJ9