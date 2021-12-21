(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["registroadmin-registroadmin-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/registroadmin/registroadmin.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/registroadmin/registroadmin.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar class=\"new-background-color\">\n    <ion-title >\n     <h4 style=\"color:#ffffff\"> Registro Administrador</h4>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form >\n    <ion-item >\n      <ion-label  position=\"floating\">Nombre</ion-label>\n      <ion-input  type=\"text\" required></ion-input >\n      \n    </ion-item>\n\n    <ion-item lines=\"full\">\n      <ion-label position=\"floating\">Apellido</ion-label>\n      <ion-input type=\"text\" required></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>DD MM YY</ion-label>\n      <ion-datetime displayFormat=\"DD MM YY\" placeholder=\"Select Date\"></ion-datetime>\n    </ion-item>\n\n\n\n\n    <ion-item lines=\"full\">\n      <ion-label position=\"floating\">Email</ion-label>\n      <ion-input type=\"text\" required></ion-input>\n    </ion-item>\n\n    <ion-item lines=\"full\">\n      <ion-label position=\"floating\">Contraseña</ion-label>\n      <ion-input type=\"password\" required></ion-input>\n    </ion-item>\n\n\n\n\n\n    <ion-row>\n      <ion-col>\n        <ion-button [routerLink]=\"['/exitosoadmin']\" type=\"submit\" color=\"primary\" expand=\"block\" > <p style=\"color:#f7ecec\" >Registrar</p> </ion-button>\n        <ion-button [routerLink]=\"['/person']\" type=\"submit\" color=\"danger\" expand=\"block\" > <p> Salir </p> </ion-button>\n      </ion-col>\n    </ion-row>\n\n  </form>\n\n\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/registroadmin/registroadmin-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/registroadmin/registroadmin-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: RegistroadminPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroadminPageRoutingModule", function() { return RegistroadminPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _registroadmin_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./registroadmin.page */ "./src/app/registroadmin/registroadmin.page.ts");




const routes = [
    {
        path: '',
        component: _registroadmin_page__WEBPACK_IMPORTED_MODULE_3__["RegistroadminPage"]
    }
];
let RegistroadminPageRoutingModule = class RegistroadminPageRoutingModule {
};
RegistroadminPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RegistroadminPageRoutingModule);



/***/ }),

/***/ "./src/app/registroadmin/registroadmin.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/registroadmin/registroadmin.module.ts ***!
  \*******************************************************/
/*! exports provided: RegistroadminPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroadminPageModule", function() { return RegistroadminPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _registroadmin_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./registroadmin-routing.module */ "./src/app/registroadmin/registroadmin-routing.module.ts");
/* harmony import */ var _registroadmin_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./registroadmin.page */ "./src/app/registroadmin/registroadmin.page.ts");







let RegistroadminPageModule = class RegistroadminPageModule {
};
RegistroadminPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _registroadmin_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegistroadminPageRoutingModule"]
        ],
        declarations: [_registroadmin_page__WEBPACK_IMPORTED_MODULE_6__["RegistroadminPage"]]
    })
], RegistroadminPageModule);



/***/ }),

/***/ "./src/app/registroadmin/registroadmin.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/registroadmin/registroadmin.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".item-content {\n  background-color: #ffffff;\n}\n\n.item-native {\n  background: transparent !important;\n}\n\n.new-background-color {\n  --background: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0cm9hZG1pbi9yZWdpc3Ryb2FkbWluLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0FBQ0o7O0FBRUU7RUFDRSxrQ0FBQTtBQUNKOztBQUVFO0VBQ0UsbUJBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdHJvYWRtaW4vcmVnaXN0cm9hZG1pbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaXRlbS1jb250ZW50IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmZmZmZmY7XG4gIH1cbiAgXG4gIC5pdGVtLW5hdGl2ZSB7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgfVxuICBcbiAgLm5ldy1iYWNrZ3JvdW5kLWNvbG9ye1xuICAgIC0tYmFja2dyb3VuZDogYmxhY2s7XG4gIH0iXX0= */");

/***/ }),

/***/ "./src/app/registroadmin/registroadmin.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/registroadmin/registroadmin.page.ts ***!
  \*****************************************************/
/*! exports provided: RegistroadminPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroadminPage", function() { return RegistroadminPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let RegistroadminPage = class RegistroadminPage {
    constructor() { }
    ngOnInit() {
    }
};
RegistroadminPage.ctorParameters = () => [];
RegistroadminPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-registroadmin',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./registroadmin.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/registroadmin/registroadmin.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./registroadmin.page.scss */ "./src/app/registroadmin/registroadmin.page.scss")).default]
    })
], RegistroadminPage);



/***/ })

}]);
//# sourceMappingURL=registroadmin-registroadmin-module-es2015.js.map