(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["registrousuario-registrousuario-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/registrousuario/registrousuario.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/registrousuario/registrousuario.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar class=\"new-background-color\">\n    <ion-title >\n     <h4 style=\"color:#ffffff\"> Registro Usuario</h4>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form >\n    <ion-item >\n      <ion-label  position=\"floating\">Nombre</ion-label>\n      <ion-input  type=\"text\" required></ion-input >\n      \n    </ion-item>\n\n    <ion-item lines=\"full\">\n      <ion-label position=\"floating\">Apellido</ion-label>\n      <ion-input type=\"text\" required></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>DD MM YY</ion-label>\n      <ion-datetime displayFormat=\"DD MM YY\" placeholder=\"Select Date\"></ion-datetime>\n    </ion-item>\n\n\n\n\n    <ion-item lines=\"full\">\n      <ion-label position=\"floating\">Email</ion-label>\n      <ion-input type=\"text\" required></ion-input>\n    </ion-item>\n\n    <ion-item lines=\"full\">\n      <ion-label position=\"floating\">Contraseña</ion-label>\n      <ion-input type=\"password\" required></ion-input>\n    </ion-item>\n\n\n\n\n\n    <ion-row>\n      <ion-col>\n        <ion-button [routerLink]=\"['/exitosouser']\" type=\"submit\" color=\"primary\" expand=\"block\" > <p style=\"color:#f7ecec\" >Registrar</p> </ion-button>\n        <ion-button [routerLink]=\"['/vistausuario']\" type=\"submit\" color=\"danger\" expand=\"block\" > <p> Salir </p> </ion-button>\n      </ion-col>\n    </ion-row>\n\n  </form>\n\n\n\n</ion-content>\n\n");

/***/ }),

/***/ "./src/app/registrousuario/registrousuario-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/registrousuario/registrousuario-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: RegistrousuarioPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrousuarioPageRoutingModule", function() { return RegistrousuarioPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _registrousuario_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./registrousuario.page */ "./src/app/registrousuario/registrousuario.page.ts");




const routes = [
    {
        path: '',
        component: _registrousuario_page__WEBPACK_IMPORTED_MODULE_3__["RegistrousuarioPage"]
    }
];
let RegistrousuarioPageRoutingModule = class RegistrousuarioPageRoutingModule {
};
RegistrousuarioPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RegistrousuarioPageRoutingModule);



/***/ }),

/***/ "./src/app/registrousuario/registrousuario.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/registrousuario/registrousuario.module.ts ***!
  \***********************************************************/
/*! exports provided: RegistrousuarioPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrousuarioPageModule", function() { return RegistrousuarioPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _registrousuario_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./registrousuario-routing.module */ "./src/app/registrousuario/registrousuario-routing.module.ts");
/* harmony import */ var _registrousuario_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./registrousuario.page */ "./src/app/registrousuario/registrousuario.page.ts");







let RegistrousuarioPageModule = class RegistrousuarioPageModule {
};
RegistrousuarioPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _registrousuario_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegistrousuarioPageRoutingModule"]
        ],
        declarations: [_registrousuario_page__WEBPACK_IMPORTED_MODULE_6__["RegistrousuarioPage"]]
    })
], RegistrousuarioPageModule);



/***/ }),

/***/ "./src/app/registrousuario/registrousuario.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/registrousuario/registrousuario.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".item-content {\n  background-color: #ffffff;\n}\n\n.item-native {\n  background: transparent !important;\n}\n\n.new-background-color {\n  --background: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0cm91c3VhcmlvL3JlZ2lzdHJvdXN1YXJpby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtBQUNKOztBQUVFO0VBQ0Usa0NBQUE7QUFDSjs7QUFFRTtFQUNFLG1CQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9yZWdpc3Ryb3VzdWFyaW8vcmVnaXN0cm91c3VhcmlvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pdGVtLWNvbnRlbnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6I2ZmZmZmZjtcbiAgfVxuICBcbiAgLml0ZW0tbmF0aXZlIHtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICB9XG4gIFxuICAubmV3LWJhY2tncm91bmQtY29sb3J7XG4gICAgLS1iYWNrZ3JvdW5kOiBibGFjaztcbiAgfSJdfQ== */");

/***/ }),

/***/ "./src/app/registrousuario/registrousuario.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/registrousuario/registrousuario.page.ts ***!
  \*********************************************************/
/*! exports provided: RegistrousuarioPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrousuarioPage", function() { return RegistrousuarioPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let RegistrousuarioPage = class RegistrousuarioPage {
    constructor() { }
    ngOnInit() {
    }
};
RegistrousuarioPage.ctorParameters = () => [];
RegistrousuarioPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-registrousuario',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./registrousuario.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/registrousuario/registrousuario.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./registrousuario.page.scss */ "./src/app/registrousuario/registrousuario.page.scss")).default]
    })
], RegistrousuarioPage);



/***/ })

}]);
//# sourceMappingURL=registrousuario-registrousuario-module-es2015.js.map