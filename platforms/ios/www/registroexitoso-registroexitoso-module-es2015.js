(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["registroexitoso-registroexitoso-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/registroexitoso/registroexitoso.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/registroexitoso/registroexitoso.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar class=\"new-background-color\">\n    <ion-title>\n      <ion-text>\n        <h1 class=\"center\" style=\"color:#000000\" >Registro Exitoso</h1>\n      </ion-text>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div>\n\n  </div>\n  <img  src=\"assets/img/newcorrect.png\" >\n  <ion-text>\n    <h1 class=\"center\" style=\"color:#000000\" >Registrado con Éxito</h1>\n  </ion-text>\n\n  <ion-text>\n    <A class= \"center\" style=\"color:#000000\" [routerLink]=\"['/home']\"> <h1> Volver </h1></A>\n  </ion-text>\n</ion-content>");

/***/ }),

/***/ "./src/app/registroexitoso/registroexitoso-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/registroexitoso/registroexitoso-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: RegistroexitosoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroexitosoPageRoutingModule", function() { return RegistroexitosoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _registroexitoso_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./registroexitoso.page */ "./src/app/registroexitoso/registroexitoso.page.ts");




const routes = [
    {
        path: '',
        component: _registroexitoso_page__WEBPACK_IMPORTED_MODULE_3__["RegistroexitosoPage"]
    }
];
let RegistroexitosoPageRoutingModule = class RegistroexitosoPageRoutingModule {
};
RegistroexitosoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RegistroexitosoPageRoutingModule);



/***/ }),

/***/ "./src/app/registroexitoso/registroexitoso.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/registroexitoso/registroexitoso.module.ts ***!
  \***********************************************************/
/*! exports provided: RegistroexitosoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroexitosoPageModule", function() { return RegistroexitosoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _registroexitoso_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./registroexitoso-routing.module */ "./src/app/registroexitoso/registroexitoso-routing.module.ts");
/* harmony import */ var _registroexitoso_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./registroexitoso.page */ "./src/app/registroexitoso/registroexitoso.page.ts");







let RegistroexitosoPageModule = class RegistroexitosoPageModule {
};
RegistroexitosoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _registroexitoso_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegistroexitosoPageRoutingModule"]
        ],
        declarations: [_registroexitoso_page__WEBPACK_IMPORTED_MODULE_6__["RegistroexitosoPage"]]
    })
], RegistroexitosoPageModule);



/***/ }),

/***/ "./src/app/registroexitoso/registroexitoso.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/registroexitoso/registroexitoso.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --ion-background-color:#fcfcfc;\n}\n\n.center {\n  text-align: center;\n}\n\n.center {\n  text-align: center;\n}\n\n.new-background-color {\n  --background: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0cm9leGl0b3NvL3JlZ2lzdHJvZXhpdG9zby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSw4QkFBQTtBQUFKOztBQUdFO0VBQ0Usa0JBQUE7QUFBSjs7QUFHRTtFQUNFLGtCQUFBO0FBQUo7O0FBR0U7RUFDRSxtQkFBQTtBQUFKIiwiZmlsZSI6InNyYy9hcHAvcmVnaXN0cm9leGl0b3NvL3JlZ2lzdHJvZXhpdG9zby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcblxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6I2ZjZmNmYztcbiAgfVxuICBcbiAgLmNlbnRlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIFxuICAuY2VudGVye1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICBcbiAgLm5ldy1iYWNrZ3JvdW5kLWNvbG9ye1xuICAgIC0tYmFja2dyb3VuZDogYmxhY2s7XG4gIH1cbiAgIl19 */");

/***/ }),

/***/ "./src/app/registroexitoso/registroexitoso.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/registroexitoso/registroexitoso.page.ts ***!
  \*********************************************************/
/*! exports provided: RegistroexitosoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroexitosoPage", function() { return RegistroexitosoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let RegistroexitosoPage = class RegistroexitosoPage {
    constructor() { }
    ngOnInit() {
    }
};
RegistroexitosoPage.ctorParameters = () => [];
RegistroexitosoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-registroexitoso',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./registroexitoso.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/registroexitoso/registroexitoso.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./registroexitoso.page.scss */ "./src/app/registroexitoso/registroexitoso.page.scss")).default]
    })
], RegistroexitosoPage);



/***/ })

}]);
//# sourceMappingURL=registroexitoso-registroexitoso-module-es2015.js.map