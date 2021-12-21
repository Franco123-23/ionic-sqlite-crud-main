(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vistausuario-vistausuario-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/vistausuario/vistausuario.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/vistausuario/vistausuario.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar  class=\"new-background-color\">\n    <div  style=\"text-align: left;\">\n      <ion-button color=\"primary\" [routerLink]=\"['/home']\" >\n        <ion-icon  slot=\"icon-only\" name=\"arrow-back\"></ion-icon>\n      </ion-button>\n      </div>\n    <h4 class=\"center\" style=\"color:#ffffff\"> Bienvenido Usuario </h4>\n  </ion-toolbar>\n</ion-header>\n\n\n  <img src=\"assets/img/usuario.png\" >\n\n\n<ion-content class=\"auth-form\">\n  <ion-grid>\n    <ion-row>\n      <ion-col align-self-center>\n        <ion-button [routerLink]=\"['/loginusuario']\" expand=\"block\" color=\"primary\">Iniciar sesion </ion-button>\n        <span class=\"divider line one-line\"><p style=\"color:#000000\"> o</p></span>\n        <ion-button [routerLink]=\"['/registrousuario']\" expand=\"block\" color=\"danger\">Registrate</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/vistausuario/vistausuario-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/vistausuario/vistausuario-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: VistausuarioPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VistausuarioPageRoutingModule", function() { return VistausuarioPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _vistausuario_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vistausuario.page */ "./src/app/vistausuario/vistausuario.page.ts");




const routes = [
    {
        path: '',
        component: _vistausuario_page__WEBPACK_IMPORTED_MODULE_3__["VistausuarioPage"]
    }
];
let VistausuarioPageRoutingModule = class VistausuarioPageRoutingModule {
};
VistausuarioPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], VistausuarioPageRoutingModule);



/***/ }),

/***/ "./src/app/vistausuario/vistausuario.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/vistausuario/vistausuario.module.ts ***!
  \*****************************************************/
/*! exports provided: VistausuarioPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VistausuarioPageModule", function() { return VistausuarioPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _vistausuario_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./vistausuario-routing.module */ "./src/app/vistausuario/vistausuario-routing.module.ts");
/* harmony import */ var _vistausuario_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./vistausuario.page */ "./src/app/vistausuario/vistausuario.page.ts");







let VistausuarioPageModule = class VistausuarioPageModule {
};
VistausuarioPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _vistausuario_routing_module__WEBPACK_IMPORTED_MODULE_5__["VistausuarioPageRoutingModule"]
        ],
        declarations: [_vistausuario_page__WEBPACK_IMPORTED_MODULE_6__["VistausuarioPage"]]
    })
], VistausuarioPageModule);



/***/ }),

/***/ "./src/app/vistausuario/vistausuario.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/vistausuario/vistausuario.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n.center {\n  text-align: center;\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #fefefe;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\nion-content {\n  --ion-background-color:#fcfcfc;\n}\n\n.divider {\n  display: flex;\n}\n\n.divider:before, .divider:after {\n  content: \"\";\n  flex: 0.9;\n}\n\n.line {\n  align-items: center;\n  margin: 1px -- 1px;\n}\n\n.line:before, .line:after {\n  height: 0.5px;\n  margin: 0 1em;\n}\n\n.one-line:before, .one-line:after {\n  background: black;\n}\n\n.razor:before, .razor:after {\n  box-shadow: 0 0.3px 0;\n}\n\n.new-background-color {\n  --background: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlzdGF1c3VhcmlvL3Zpc3RhdXN1YXJpby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUVBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7QUFBSjs7QUFHRTtFQUNFLGtCQUFBO0FBQUo7O0FBR0U7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFBSjs7QUFHRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUVBLGNBQUE7RUFFQSxTQUFBO0FBRko7O0FBS0U7RUFDRSxxQkFBQTtBQUZKOztBQUtFO0VBRUUsOEJBQUE7QUFISjs7QUFRRTtFQUNFLGFBQUE7QUFMSjs7QUFPSTtFQUVFLFdBQUE7RUFDQSxTQUFBO0FBTk47O0FBV0U7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0FBUko7O0FBVUk7RUFFRSxhQUFBO0VBQ0EsYUFBQTtBQVROOztBQWVNO0VBRUUsaUJBQUE7QUFiUjs7QUFrQk07RUFFRSxxQkFBQTtBQWhCUjs7QUFvQkk7RUFDRSxtQkFBQTtBQWpCTiIsImZpbGUiOiJzcmMvYXBwL3Zpc3RhdXN1YXJpby92aXN0YXVzdWFyaW8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIH1cbiAgXG4gIC5jZW50ZXJ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIFxuICAjY29udGFpbmVyIHN0cm9uZyB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xuICB9XG4gIFxuICAjY29udGFpbmVyIHAge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgXG4gICAgY29sb3I6ICNmZWZlZmU7XG4gIFxuICAgIG1hcmdpbjogMDtcbiAgfVxuICBcbiAgI2NvbnRhaW5lciBhIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cbiAgXG4gIGlvbi1jb250ZW50e1xuICBcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiNmY2ZjZmM7XG4gIH1cbiAgXG4gIFxuICAvLyBCYXNlIERpdmlkZXIgY2xhc3NcbiAgLmRpdmlkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIFxuICAgICY6YmVmb3JlLFxuICAgICY6YWZ0ZXIge1xuICAgICAgY29udGVudDogXCJcIjtcbiAgICAgIGZsZXg6IDAuOTtcbiAgICB9XG4gIH1cbiAgXG4gIC8vIEJhc2UgbGluZVxuICAubGluZSB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW46IDFweCAtLSAxcHg7XG4gIFxuICAgICY6YmVmb3JlLFxuICAgICY6YWZ0ZXIge1xuICAgICAgaGVpZ2h0OiAwLjVweDtcbiAgICAgIG1hcmdpbjogMCAxZW07XG4gICAgfVxuICB9XG4gIFxuICBcbiAgICAub25lLWxpbmUge1xuICAgICAgJjpiZWZvcmUsXG4gICAgICAmOmFmdGVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogYmxhY2s7XG4gICAgICB9XG4gICAgfVxuICBcbiAgICAucmF6b3Ige1xuICAgICAgJjpiZWZvcmUsXG4gICAgICAmOmFmdGVyIHtcbiAgICAgICAgYm94LXNoYWRvdzogMCAwLjNweCAwXG4gICAgICB9XG4gICAgfVxuICBcbiAgICAubmV3LWJhY2tncm91bmQtY29sb3J7XG4gICAgICAtLWJhY2tncm91bmQ6IGJsYWNrO1xuICB9XG4gICJdfQ== */");

/***/ }),

/***/ "./src/app/vistausuario/vistausuario.page.ts":
/*!***************************************************!*\
  !*** ./src/app/vistausuario/vistausuario.page.ts ***!
  \***************************************************/
/*! exports provided: VistausuarioPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VistausuarioPage", function() { return VistausuarioPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let VistausuarioPage = class VistausuarioPage {
    constructor() { }
    ngOnInit() {
    }
};
VistausuarioPage.ctorParameters = () => [];
VistausuarioPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-vistausuario',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./vistausuario.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/vistausuario/vistausuario.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./vistausuario.page.scss */ "./src/app/vistausuario/vistausuario.page.scss")).default]
    })
], VistausuarioPage);



/***/ })

}]);
//# sourceMappingURL=vistausuario-vistausuario-module-es2015.js.map