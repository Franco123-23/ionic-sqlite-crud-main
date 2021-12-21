(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["registrate-registrate-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/registrate/registrate.page.html":
    /*!***************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/registrate/registrate.page.html ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppRegistrateRegistratePageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar class=\"new-background-color\">\n    <ion-title >\n     <h4 style=\"color:#ffffff\"> Registrate</h4>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form>\n    <ion-item lines=\"full\">\n      <ion-label position=\"floating\">Nombre</ion-label>\n      <ion-input type=\"text\" required></ion-input>\n    </ion-item>\n\n    <ion-item lines=\"full\">\n      <ion-label position=\"floating\">Apellido</ion-label>\n      <ion-input type=\"text\" required></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>DD MM YY</ion-label>\n      <ion-datetime displayFormat=\"DD MM YY\" placeholder=\"Select Date\"></ion-datetime>\n    </ion-item>\n\n\n\n\n    <ion-item lines=\"full\">\n      <ion-label position=\"floating\">Email</ion-label>\n      <ion-input type=\"text\" required></ion-input>\n    </ion-item>\n\n    <ion-item lines=\"full\">\n      <ion-label position=\"floating\">Contraseña</ion-label>\n      <ion-input type=\"password\" required></ion-input>\n    </ion-item>\n\n\n\n\n\n    <ion-row>\n      <ion-col>\n        <ion-button [routerLink]=\"['/registroexitoso']\" type=\"submit\" color=\"primary\" expand=\"block\" > <p style=\"color:#f7ecec\" >Registrar</p> </ion-button>\n        <ion-button [routerLink]=\"['/home']\" type=\"submit\" color=\"danger\" expand=\"block\" > <p> Salir </p> </ion-button>\n      </ion-col>\n    </ion-row>\n\n  </form>\n\n\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/registrate/registrate-routing.module.ts":
    /*!*********************************************************!*\
      !*** ./src/app/registrate/registrate-routing.module.ts ***!
      \*********************************************************/

    /*! exports provided: RegistratePageRoutingModule */

    /***/
    function srcAppRegistrateRegistrateRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegistratePageRoutingModule", function () {
        return RegistratePageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _registrate_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./registrate.page */
      "./src/app/registrate/registrate.page.ts");

      var routes = [{
        path: '',
        component: _registrate_page__WEBPACK_IMPORTED_MODULE_3__["RegistratePage"]
      }];

      var RegistratePageRoutingModule = function RegistratePageRoutingModule() {
        _classCallCheck(this, RegistratePageRoutingModule);
      };

      RegistratePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], RegistratePageRoutingModule);
      /***/
    },

    /***/
    "./src/app/registrate/registrate.module.ts":
    /*!*************************************************!*\
      !*** ./src/app/registrate/registrate.module.ts ***!
      \*************************************************/

    /*! exports provided: RegistratePageModule */

    /***/
    function srcAppRegistrateRegistrateModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegistratePageModule", function () {
        return RegistratePageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _registrate_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./registrate-routing.module */
      "./src/app/registrate/registrate-routing.module.ts");
      /* harmony import */


      var _registrate_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./registrate.page */
      "./src/app/registrate/registrate.page.ts");

      var RegistratePageModule = function RegistratePageModule() {
        _classCallCheck(this, RegistratePageModule);
      };

      RegistratePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _registrate_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegistratePageRoutingModule"]],
        declarations: [_registrate_page__WEBPACK_IMPORTED_MODULE_6__["RegistratePage"]]
      })], RegistratePageModule);
      /***/
    },

    /***/
    "./src/app/registrate/registrate.page.scss":
    /*!*************************************************!*\
      !*** ./src/app/registrate/registrate.page.scss ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function srcAppRegistrateRegistratePageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".item-content {\n  background-color: #ffffff;\n}\n\n.item-native {\n  background: transparent !important;\n}\n\n.new-background-color {\n  --background: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0cmF0ZS9yZWdpc3RyYXRlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0FBQ0o7O0FBRUU7RUFDRSxrQ0FBQTtBQUNKOztBQUVFO0VBQ0UsbUJBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdHJhdGUvcmVnaXN0cmF0ZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaXRlbS1jb250ZW50IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmZmZmZmY7XG4gIH1cbiAgXG4gIC5pdGVtLW5hdGl2ZSB7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgfVxuICBcbiAgLm5ldy1iYWNrZ3JvdW5kLWNvbG9ye1xuICAgIC0tYmFja2dyb3VuZDogYmxhY2s7XG4gIH0iXX0= */";
      /***/
    },

    /***/
    "./src/app/registrate/registrate.page.ts":
    /*!***********************************************!*\
      !*** ./src/app/registrate/registrate.page.ts ***!
      \***********************************************/

    /*! exports provided: RegistratePage */

    /***/
    function srcAppRegistrateRegistratePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegistratePage", function () {
        return RegistratePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var RegistratePage = /*#__PURE__*/function () {
        function RegistratePage() {
          _classCallCheck(this, RegistratePage);
        }

        _createClass(RegistratePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return RegistratePage;
      }();

      RegistratePage.ctorParameters = function () {
        return [];
      };

      RegistratePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-registrate',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./registrate.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/registrate/registrate.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./registrate.page.scss */
        "./src/app/registrate/registrate.page.scss"))["default"]]
      })], RegistratePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=registrate-registrate-module-es5.js.map