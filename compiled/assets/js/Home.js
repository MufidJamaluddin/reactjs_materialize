(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Home"],{

/***/ "./src/Home/Hello.tsx":
/*!****************************!*\
  !*** ./src/Home/Hello.tsx ***!
  \****************************/
/*! exports provided: Hello */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hello", function() { return Hello; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var Hello = (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Hello, _super);
    function Hello() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Hello.prototype.render = function () {
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h1", null,
            "Hello ",
            this.props.name,
            ", Good Morning!");
    };
    return Hello;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));



/***/ }),

/***/ "./src/Home/Home.tsx":
/*!***************************!*\
  !*** ./src/Home/Home.tsx ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Hello__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Hello */ "./src/Home/Hello.tsx");



var Home = (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Home, _super);
    function Home() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Home.prototype.render = function () {
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Hello__WEBPACK_IMPORTED_MODULE_2__["Hello"], { name: "Mufid Jamaluddin" }));
    };
    return Home;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (Home);


/***/ })

}]);
//# sourceMappingURL=Home.js.map