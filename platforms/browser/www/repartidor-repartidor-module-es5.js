(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["repartidor-repartidor-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/repartidor/repartidor.page.html":
    /*!***************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/repartidor/repartidor.page.html ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppRepartidorRepartidorPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar class=\"new-background-color\">\n    <ion-title >\n     <h4 style=\"color:#ffffff\"> Registro repartidor</h4>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form >\n    <ion-item >\n      <ion-label  position=\"floating\">Nombre </ion-label>\n      <ion-input  type=\"text\" required></ion-input >\n      \n    </ion-item>\n\n    <ion-item lines=\"full\">\n      <ion-label position=\"floating\">Apellido </ion-label>\n      <ion-input type=\"text\" required></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>DD MM YY</ion-label>\n      <ion-datetime displayFormat=\"DD MM YY\" placeholder=\"Select Date\"></ion-datetime>\n    </ion-item>\n\n\n\n\n    <ion-item lines=\"full\">\n      <ion-label position=\"floating\">Email</ion-label>\n      <ion-input type=\"text\" required></ion-input>\n    </ion-item>\n\n    <ion-item lines=\"full\">\n      <ion-label position=\"floating\">Contraseña</ion-label>\n      <ion-input type=\"password\" required></ion-input>\n    </ion-item>\n\n\n\n\n\n    <ion-row>\n      <ion-col>\n        <ion-button [routerLink]=\"['/correct']\" type=\"submit\" color=\"primary\" expand=\"block\" > <p style=\"color:#f7ecec\" >Registrar</p> </ion-button>\n        <ion-button [routerLink]=\"['/vistarepartidor']\" type=\"submit\" color=\"danger\" expand=\"block\" > <p> Salir </p> </ion-button>\n      </ion-col>\n    </ion-row>\n\n  </form>\n\n\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/repartidor/repartidor-routing.module.ts":
    /*!*********************************************************!*\
      !*** ./src/app/repartidor/repartidor-routing.module.ts ***!
      \*********************************************************/

    /*! exports provided: RepartidorPageRoutingModule */

    /***/
    function srcAppRepartidorRepartidorRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RepartidorPageRoutingModule", function () {
        return RepartidorPageRoutingModule;
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


      var _repartidor_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./repartidor.page */
      "./src/app/repartidor/repartidor.page.ts");

      var routes = [{
        path: '',
        component: _repartidor_page__WEBPACK_IMPORTED_MODULE_3__["RepartidorPage"]
      }];

      var RepartidorPageRoutingModule = function RepartidorPageRoutingModule() {
        _classCallCheck(this, RepartidorPageRoutingModule);
      };

      RepartidorPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], RepartidorPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/repartidor/repartidor.module.ts":
    /*!*************************************************!*\
      !*** ./src/app/repartidor/repartidor.module.ts ***!
      \*************************************************/

    /*! exports provided: RepartidorPageModule */

    /***/
    function srcAppRepartidorRepartidorModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RepartidorPageModule", function () {
        return RepartidorPageModule;
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


      var _repartidor_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./repartidor-routing.module */
      "./src/app/repartidor/repartidor-routing.module.ts");
      /* harmony import */


      var _repartidor_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./repartidor.page */
      "./src/app/repartidor/repartidor.page.ts");

      var RepartidorPageModule = function RepartidorPageModule() {
        _classCallCheck(this, RepartidorPageModule);
      };

      RepartidorPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _repartidor_routing_module__WEBPACK_IMPORTED_MODULE_5__["RepartidorPageRoutingModule"]],
        declarations: [_repartidor_page__WEBPACK_IMPORTED_MODULE_6__["RepartidorPage"]]
      })], RepartidorPageModule);
      /***/
    },

    /***/
    "./src/app/repartidor/repartidor.page.scss":
    /*!*************************************************!*\
      !*** ./src/app/repartidor/repartidor.page.scss ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function srcAppRepartidorRepartidorPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".item-content {\n  background-color: #ffffff;\n}\n\n.item-native {\n  background: transparent !important;\n}\n\n.new-background-color {\n  --background: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVwYXJ0aWRvci9yZXBhcnRpZG9yLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0FBQ0o7O0FBRUU7RUFDRSxrQ0FBQTtBQUNKOztBQUVFO0VBQ0UsbUJBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3JlcGFydGlkb3IvcmVwYXJ0aWRvci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaXRlbS1jb250ZW50IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmZmZmZmY7XG4gIH1cbiAgXG4gIC5pdGVtLW5hdGl2ZSB7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgfVxuICBcbiAgLm5ldy1iYWNrZ3JvdW5kLWNvbG9ye1xuICAgIC0tYmFja2dyb3VuZDogYmxhY2s7XG4gIH0iXX0= */";
      /***/
    },

    /***/
    "./src/app/repartidor/repartidor.page.ts":
    /*!***********************************************!*\
      !*** ./src/app/repartidor/repartidor.page.ts ***!
      \***********************************************/

    /*! exports provided: RepartidorPage */

    /***/
    function srcAppRepartidorRepartidorPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RepartidorPage", function () {
        return RepartidorPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var RepartidorPage = /*#__PURE__*/function () {
        function RepartidorPage() {
          _classCallCheck(this, RepartidorPage);
        }

        _createClass(RepartidorPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return RepartidorPage;
      }();

      RepartidorPage.ctorParameters = function () {
        return [];
      };

      RepartidorPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-repartidor',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./repartidor.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/repartidor/repartidor.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./repartidor.page.scss */
        "./src/app/repartidor/repartidor.page.scss"))["default"]]
      })], RepartidorPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=repartidor-repartidor-module-es5.js.map