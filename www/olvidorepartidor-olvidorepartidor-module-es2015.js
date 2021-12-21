(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["olvidorepartidor-olvidorepartidor-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/olvidorepartidor/olvidorepartidor.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/olvidorepartidor/olvidorepartidor.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar class=\"new-background-color\">\n    <ion-title></ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <img  src=\"assets/img/newcorrect.png\" >\n  <ion-text>\n    <h1 class=\"center\" >Contraseña Enviada</h1>\n  </ion-text>\n\n  <ion-text>\n    <A class= \"center\"  [routerLink]=\"['/loginrepartidor']\"> <h1> Volver </h1></A>\n  </ion-text>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/olvidorepartidor/olvidorepartidor-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/olvidorepartidor/olvidorepartidor-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: OlvidorepartidorPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OlvidorepartidorPageRoutingModule", function() { return OlvidorepartidorPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _olvidorepartidor_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./olvidorepartidor.page */ "./src/app/olvidorepartidor/olvidorepartidor.page.ts");




const routes = [
    {
        path: '',
        component: _olvidorepartidor_page__WEBPACK_IMPORTED_MODULE_3__["OlvidorepartidorPage"]
    }
];
let OlvidorepartidorPageRoutingModule = class OlvidorepartidorPageRoutingModule {
};
OlvidorepartidorPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], OlvidorepartidorPageRoutingModule);



/***/ }),

/***/ "./src/app/olvidorepartidor/olvidorepartidor.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/olvidorepartidor/olvidorepartidor.module.ts ***!
  \*************************************************************/
/*! exports provided: OlvidorepartidorPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OlvidorepartidorPageModule", function() { return OlvidorepartidorPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _olvidorepartidor_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./olvidorepartidor-routing.module */ "./src/app/olvidorepartidor/olvidorepartidor-routing.module.ts");
/* harmony import */ var _olvidorepartidor_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./olvidorepartidor.page */ "./src/app/olvidorepartidor/olvidorepartidor.page.ts");







let OlvidorepartidorPageModule = class OlvidorepartidorPageModule {
};
OlvidorepartidorPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _olvidorepartidor_routing_module__WEBPACK_IMPORTED_MODULE_5__["OlvidorepartidorPageRoutingModule"]
        ],
        declarations: [_olvidorepartidor_page__WEBPACK_IMPORTED_MODULE_6__["OlvidorepartidorPage"]]
    })
], OlvidorepartidorPageModule);



/***/ }),

/***/ "./src/app/olvidorepartidor/olvidorepartidor.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/olvidorepartidor/olvidorepartidor.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".new-background-color {\n  --background: black;\n}\n\n.center {\n  text-align: center;\n}\n\n.center {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb2x2aWRvcmVwYXJ0aWRvci9vbHZpZG9yZXBhcnRpZG9yLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0FBQ0o7O0FBRUk7RUFDRSxrQkFBQTtBQUNOOztBQUVJO0VBQ0Usa0JBQUE7QUFDTiIsImZpbGUiOiJzcmMvYXBwL29sdmlkb3JlcGFydGlkb3Ivb2x2aWRvcmVwYXJ0aWRvci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmV3LWJhY2tncm91bmQtY29sb3J7XG4gICAgLS1iYWNrZ3JvdW5kOiBibGFjaztcbiAgfVxuICAgIFxuICAgIC5jZW50ZXIge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgICBcbiAgICAuY2VudGVye1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH0iXX0= */");

/***/ }),

/***/ "./src/app/olvidorepartidor/olvidorepartidor.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/olvidorepartidor/olvidorepartidor.page.ts ***!
  \***********************************************************/
/*! exports provided: OlvidorepartidorPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OlvidorepartidorPage", function() { return OlvidorepartidorPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let OlvidorepartidorPage = class OlvidorepartidorPage {
    constructor() { }
    ngOnInit() {
    }
};
OlvidorepartidorPage.ctorParameters = () => [];
OlvidorepartidorPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-olvidorepartidor',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./olvidorepartidor.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/olvidorepartidor/olvidorepartidor.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./olvidorepartidor.page.scss */ "./src/app/olvidorepartidor/olvidorepartidor.page.scss")).default]
    })
], OlvidorepartidorPage);



/***/ })

}]);
//# sourceMappingURL=olvidorepartidor-olvidorepartidor-module-es2015.js.map