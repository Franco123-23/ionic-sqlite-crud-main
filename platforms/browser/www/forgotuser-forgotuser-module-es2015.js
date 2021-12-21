(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["forgotuser-forgotuser-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/forgotuser/forgotuser.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/forgotuser/forgotuser.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar class=\"new-background-color\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      <h4 class=\"center\" style=\"color:#ffffff\">Reenvío</h4>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form>\n    <ion-item lines=\"full\">\n      <ion-label position=\"floating\">Email</ion-label>\n      <ion-input type=\"email\" required></ion-input>\n    </ion-item>\n\n    <ion-row>\n      <ion-col>\n        <ion-button [routerLink]=\"['/olvidouser']\" type=\"submit\" color=\"primary\" expand=\"block\">Enviar</ion-button>\n      </ion-col>\n    </ion-row>\n\n    <small>\n\n    </small>\n  </form>\n</ion-content>\n\n\n");

/***/ }),

/***/ "./src/app/forgotuser/forgotuser-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/forgotuser/forgotuser-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: ForgotuserPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotuserPageRoutingModule", function() { return ForgotuserPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _forgotuser_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forgotuser.page */ "./src/app/forgotuser/forgotuser.page.ts");




const routes = [
    {
        path: '',
        component: _forgotuser_page__WEBPACK_IMPORTED_MODULE_3__["ForgotuserPage"]
    }
];
let ForgotuserPageRoutingModule = class ForgotuserPageRoutingModule {
};
ForgotuserPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ForgotuserPageRoutingModule);



/***/ }),

/***/ "./src/app/forgotuser/forgotuser.module.ts":
/*!*************************************************!*\
  !*** ./src/app/forgotuser/forgotuser.module.ts ***!
  \*************************************************/
/*! exports provided: ForgotuserPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotuserPageModule", function() { return ForgotuserPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _forgotuser_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./forgotuser-routing.module */ "./src/app/forgotuser/forgotuser-routing.module.ts");
/* harmony import */ var _forgotuser_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forgotuser.page */ "./src/app/forgotuser/forgotuser.page.ts");







let ForgotuserPageModule = class ForgotuserPageModule {
};
ForgotuserPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _forgotuser_routing_module__WEBPACK_IMPORTED_MODULE_5__["ForgotuserPageRoutingModule"]
        ],
        declarations: [_forgotuser_page__WEBPACK_IMPORTED_MODULE_6__["ForgotuserPage"]]
    })
], ForgotuserPageModule);



/***/ }),

/***/ "./src/app/forgotuser/forgotuser.page.scss":
/*!*************************************************!*\
  !*** ./src/app/forgotuser/forgotuser.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".center {\n  text-align: center;\n}\n\n.new-background-color {\n  --background: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9yZ290dXNlci9mb3Jnb3R1c2VyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvZm9yZ290dXNlci9mb3Jnb3R1c2VyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jZW50ZXJ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm5ldy1iYWNrZ3JvdW5kLWNvbG9ye1xuICAtLWJhY2tncm91bmQ6IGJsYWNrO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/forgotuser/forgotuser.page.ts":
/*!***********************************************!*\
  !*** ./src/app/forgotuser/forgotuser.page.ts ***!
  \***********************************************/
/*! exports provided: ForgotuserPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotuserPage", function() { return ForgotuserPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let ForgotuserPage = class ForgotuserPage {
    constructor() { }
    ngOnInit() {
    }
};
ForgotuserPage.ctorParameters = () => [];
ForgotuserPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-forgotuser',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./forgotuser.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/forgotuser/forgotuser.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./forgotuser.page.scss */ "./src/app/forgotuser/forgotuser.page.scss")).default]
    })
], ForgotuserPage);



/***/ })

}]);
//# sourceMappingURL=forgotuser-forgotuser-module-es2015.js.map