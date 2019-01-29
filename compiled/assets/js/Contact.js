(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Contact"],{

/***/ "./src/Components/Form.tsx":
/*!*********************************!*\
  !*** ./src/Components/Form.tsx ***!
  \*********************************/
/*! exports provided: Field, Form */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Field", function() { return Field; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return Form; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var Field = (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Field, _super);
    function Field() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Field.prototype.getHtmlClassName = function () {
        var str = "input-field col ";
        str.concat(this.props.className || "s12");
        return str;
    };
    Field.prototype.getJsxInput = function () {
        if (this.props.pattern) {
            return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", { type: this.props.type, name: this.props.name, pattern: this.props.pattern, className: "validate" }));
        }
        else {
            return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", { type: this.props.type, name: this.props.name }));
        }
    };
    Field.prototype.render = function () {
        if (this.props.success && this.props.error) {
            return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: this.getHtmlClassName() },
                this.getJsxInput(),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", null, this.props.label),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", { className: "helper-text", "data-error": this.props.error, "data-success": this.props.success })));
        }
        else {
            return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: this.getHtmlClassName() },
                this.getJsxInput(),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", null, this.props.label)));
        }
    };
    return Field;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component));

var Form = (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Form, _super);
    function Form(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { error: [] };
        _this.onSubmit = _this.onSubmit.bind(_this);
        return _this;
    }
    Form.prototype.onSubmit = function (event) {
        event.preventDefault();
        var form = event.currentTarget;
        var data = new FormData(form);
        var obj = this;
        if (this.props.action) {
            this.state.error.length = 0;
            fetch(this.props.action, {
                method: this.props.method || "POST",
                body: data
            }).catch(function (error) {
                obj.state.error.push(error.statusText);
            });
        }
        else {
            console.log(data);
        }
    };
    Form.prototype.render = function () {
        this.state.error.map(function (value) {
            M.toast({ html: value });
        });
        return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", { className: this.props.className || "container", onSubmit: this.onSubmit },
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "row" }, this.props.children)));
    };
    return Form;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component));



/***/ }),

/***/ "./src/Contact/Contact.tsx":
/*!*********************************!*\
  !*** ./src/Contact/Contact.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Components_Form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Components/Form */ "./src/Components/Form.tsx");



var Contact = (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Contact, _super);
    function Contact() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Contact.prototype.render = function () {
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "row" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col s6" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h1", null, "Contact Page"),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null, "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).")),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col s6" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Components_Form__WEBPACK_IMPORTED_MODULE_2__["Form"], null,
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Components_Form__WEBPACK_IMPORTED_MODULE_2__["Field"], { name: "email", type: "email", label: "email", success: "Valid", error: "The Email Format is Wrong" }),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Components_Form__WEBPACK_IMPORTED_MODULE_2__["Field"], { name: "message", type: "text", label: "Message" }),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", { className: "waves-effect waves-light btn", type: "submit" }, "Send")))));
    };
    return Contact;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (Contact);


/***/ })

}]);
//# sourceMappingURL=Contact.js.map