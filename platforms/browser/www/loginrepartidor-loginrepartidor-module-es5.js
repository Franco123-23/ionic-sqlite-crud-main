(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["loginrepartidor-loginrepartidor-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/loginrepartidor/loginrepartidor.page.html":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/loginrepartidor/loginrepartidor.page.html ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppLoginrepartidorLoginrepartidorPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar class=\"new-background-color\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title >\n      <h4  style=\"color:#ffffff\"> Login Repartidor</h4>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form>\n    <ion-item lines=\"full\">\n      <ion-label position=\"floating\">Email</ion-label>\n      <ion-input type=\"text\" required></ion-input>\n    </ion-item>\n\n    <ion-item lines=\"full\">\n      <ion-label position=\"floating\">Contraseña</ion-label>\n      <ion-input type=\"password\" required></ion-input>\n    </ion-item>\n\n    <ion-row>\n      <ion-col>\n        <ion-button [routerLink]=\"['/home']\" type=\"submit\" color=\"primary\" expand=\"block\">Iniciar Sesión</ion-button>\n        <a [routerLink]=\"['/correctcontra']\" class=\"small-text\">Olvidaste la Contraseña?</a>\n      </ion-col>\n    </ion-row>\n  </form>\n</ion-content>\n\n";
      /***/
    },

    /***/
    "./src/app/loginrepartidor/loginrepartidor-routing.module.ts":
    /*!*******************************************************************!*\
      !*** ./src/app/loginrepartidor/loginrepartidor-routing.module.ts ***!
      \*******************************************************************/

    /*! exports provided: LoginrepartidorPageRoutingModule */

    /***/
    function srcAppLoginrepartidorLoginrepartidorRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginrepartidorPageRoutingModule", function () {
        return LoginrepartidorPageRoutingModule;
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


      var _loginrepartidor_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./loginrepartidor.page */
      "./src/app/loginrepartidor/loginrepartidor.page.ts");

      var routes = [{
        path: '',
        component: _loginrepartidor_page__WEBPACK_IMPORTED_MODULE_3__["LoginrepartidorPage"]
      }];

      var LoginrepartidorPageRoutingModule = function LoginrepartidorPageRoutingModule() {
        _classCallCheck(this, LoginrepartidorPageRoutingModule);
      };

      LoginrepartidorPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], LoginrepartidorPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/loginrepartidor/loginrepartidor.module.ts":
    /*!***********************************************************!*\
      !*** ./src/app/loginrepartidor/loginrepartidor.module.ts ***!
      \***********************************************************/

    /*! exports provided: LoginrepartidorPageModule */

    /***/
    function srcAppLoginrepartidorLoginrepartidorModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginrepartidorPageModule", function () {
        return LoginrepartidorPageModule;
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


      var _loginrepartidor_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./loginrepartidor-routing.module */
      "./src/app/loginrepartidor/loginrepartidor-routing.module.ts");
      /* harmony import */


      var _loginrepartidor_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./loginrepartidor.page */
      "./src/app/loginrepartidor/loginrepartidor.page.ts");

      var LoginrepartidorPageModule = function LoginrepartidorPageModule() {
        _classCallCheck(this, LoginrepartidorPageModule);
      };

      LoginrepartidorPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _loginrepartidor_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginrepartidorPageRoutingModule"]],
        declarations: [_loginrepartidor_page__WEBPACK_IMPORTED_MODULE_6__["LoginrepartidorPage"]]
      })], LoginrepartidorPageModule);
      /***/
    },

    /***/
    "./src/app/loginrepartidor/loginrepartidor.page.scss":
    /*!***********************************************************!*\
      !*** ./src/app/loginrepartidor/loginrepartidor.page.scss ***!
      \***********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppLoginrepartidorLoginrepartidorPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".center {\n  text-align: center;\n}\n\n.new-background-color {\n  --background: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW5yZXBhcnRpZG9yL2xvZ2lucmVwYXJ0aWRvci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQUNKOztBQUVFO0VBQ0UsbUJBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2xvZ2lucmVwYXJ0aWRvci9sb2dpbnJlcGFydGlkb3IucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNlbnRlcntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgXG4gIC5uZXctYmFja2dyb3VuZC1jb2xvcntcbiAgICAtLWJhY2tncm91bmQ6IGJsYWNrO1xuICB9Il19 */";
      /***/
    },

    /***/
    "./src/app/loginrepartidor/loginrepartidor.page.ts":
    /*!*********************************************************!*\
      !*** ./src/app/loginrepartidor/loginrepartidor.page.ts ***!
      \*********************************************************/

    /*! exports provided: LoginrepartidorPage */

    /***/
    function srcAppLoginrepartidorLoginrepartidorPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginrepartidorPage", function () {
        return LoginrepartidorPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var LoginrepartidorPage = /*#__PURE__*/function () {
        function LoginrepartidorPage() {
          _classCallCheck(this, LoginrepartidorPage);
        }

        _createClass(LoginrepartidorPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return LoginrepartidorPage;
      }();

      LoginrepartidorPage.ctorParameters = function () {
        return [];
      };

      LoginrepartidorPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-loginrepartidor',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./loginrepartidor.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/loginrepartidor/loginrepartidor.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./loginrepartidor.page.scss */
        "./src/app/loginrepartidor/loginrepartidor.page.scss"))["default"]]
      })], LoginrepartidorPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=loginrepartidor-loginrepartidor-module-es5.js.map