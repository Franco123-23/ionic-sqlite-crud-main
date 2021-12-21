(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["enviodecontrasena-enviodecontrasena-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/enviodecontrasena/enviodecontrasena.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/enviodecontrasena/enviodecontrasena.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar class=\"new-background-color\">\n    <ion-title></ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <img  src=\"assets/img/newcorrect.png\" >\n  <ion-text>\n    <h1 class=\"center\" >Contraseña Enviada</h1>\n  </ion-text>\n\n  <ion-text>\n    <A class= \"center\"  [routerLink]=\"['/login']\"> <h1> Volver </h1></A>\n  </ion-text>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/enviodecontrasena/enviodecontrasena-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/enviodecontrasena/enviodecontrasena-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: EnviodecontrasenaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnviodecontrasenaPageRoutingModule", function() { return EnviodecontrasenaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _enviodecontrasena_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./enviodecontrasena.page */ "./src/app/enviodecontrasena/enviodecontrasena.page.ts");




const routes = [
    {
        path: '',
        component: _enviodecontrasena_page__WEBPACK_IMPORTED_MODULE_3__["EnviodecontrasenaPage"]
    }
];
let EnviodecontrasenaPageRoutingModule = class EnviodecontrasenaPageRoutingModule {
};
EnviodecontrasenaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EnviodecontrasenaPageRoutingModule);



/***/ }),

/***/ "./src/app/enviodecontrasena/enviodecontrasena.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/enviodecontrasena/enviodecontrasena.module.ts ***!
  \***************************************************************/
/*! exports provided: EnviodecontrasenaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnviodecontrasenaPageModule", function() { return EnviodecontrasenaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _enviodecontrasena_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./enviodecontrasena-routing.module */ "./src/app/enviodecontrasena/enviodecontrasena-routing.module.ts");
/* harmony import */ var _enviodecontrasena_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./enviodecontrasena.page */ "./src/app/enviodecontrasena/enviodecontrasena.page.ts");







let EnviodecontrasenaPageModule = class EnviodecontrasenaPageModule {
};
EnviodecontrasenaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _enviodecontrasena_routing_module__WEBPACK_IMPORTED_MODULE_5__["EnviodecontrasenaPageRoutingModule"]
        ],
        declarations: [_enviodecontrasena_page__WEBPACK_IMPORTED_MODULE_6__["EnviodecontrasenaPage"]]
    })
], EnviodecontrasenaPageModule);



/***/ }),

/***/ "./src/app/enviodecontrasena/enviodecontrasena.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/enviodecontrasena/enviodecontrasena.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".new-background-color {\n  --background: black;\n}\n\n.center {\n  text-align: center;\n}\n\n.center {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW52aW9kZWNvbnRyYXNlbmEvZW52aW9kZWNvbnRyYXNlbmEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7QUFDRjs7QUFFRTtFQUNFLGtCQUFBO0FBQ0o7O0FBRUU7RUFDRSxrQkFBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvZW52aW9kZWNvbnRyYXNlbmEvZW52aW9kZWNvbnRyYXNlbmEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5ldy1iYWNrZ3JvdW5kLWNvbG9ye1xuICAtLWJhY2tncm91bmQ6IGJsYWNrO1xufVxuICBcbiAgLmNlbnRlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIFxuICAuY2VudGVye1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfSJdfQ== */");

/***/ }),

/***/ "./src/app/enviodecontrasena/enviodecontrasena.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/enviodecontrasena/enviodecontrasena.page.ts ***!
  \*************************************************************/
/*! exports provided: EnviodecontrasenaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnviodecontrasenaPage", function() { return EnviodecontrasenaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let EnviodecontrasenaPage = class EnviodecontrasenaPage {
    constructor() { }
    ngOnInit() {
    }
};
EnviodecontrasenaPage.ctorParameters = () => [];
EnviodecontrasenaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-enviodecontrasena',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./enviodecontrasena.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/enviodecontrasena/enviodecontrasena.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./enviodecontrasena.page.scss */ "./src/app/enviodecontrasena/enviodecontrasena.page.scss")).default]
    })
], EnviodecontrasenaPage);



/***/ })

}]);
//# sourceMappingURL=enviodecontrasena-enviodecontrasena-module-es2015.js.map