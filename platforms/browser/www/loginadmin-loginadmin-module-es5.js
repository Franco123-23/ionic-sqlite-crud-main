(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["loginadmin-loginadmin-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/loginadmin/loginadmin.page.html":
    /*!***************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/loginadmin/loginadmin.page.html ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppLoginadminLoginadminPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>loginadmin</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/loginadmin/loginadmin-routing.module.ts":
    /*!*********************************************************!*\
      !*** ./src/app/loginadmin/loginadmin-routing.module.ts ***!
      \*********************************************************/

    /*! exports provided: LoginadminPageRoutingModule */

    /***/
    function srcAppLoginadminLoginadminRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginadminPageRoutingModule", function () {
        return LoginadminPageRoutingModule;
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


      var _loginadmin_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./loginadmin.page */
      "./src/app/loginadmin/loginadmin.page.ts");

      var routes = [{
        path: '',
        component: _loginadmin_page__WEBPACK_IMPORTED_MODULE_3__["LoginadminPage"]
      }];

      var LoginadminPageRoutingModule = function LoginadminPageRoutingModule() {
        _classCallCheck(this, LoginadminPageRoutingModule);
      };

      LoginadminPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], LoginadminPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/loginadmin/loginadmin.module.ts":
    /*!*************************************************!*\
      !*** ./src/app/loginadmin/loginadmin.module.ts ***!
      \*************************************************/

    /*! exports provided: LoginadminPageModule */

    /***/
    function srcAppLoginadminLoginadminModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginadminPageModule", function () {
        return LoginadminPageModule;
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


      var _loginadmin_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./loginadmin-routing.module */
      "./src/app/loginadmin/loginadmin-routing.module.ts");
      /* harmony import */


      var _loginadmin_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./loginadmin.page */
      "./src/app/loginadmin/loginadmin.page.ts");

      var LoginadminPageModule = function LoginadminPageModule() {
        _classCallCheck(this, LoginadminPageModule);
      };

      LoginadminPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _loginadmin_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginadminPageRoutingModule"]],
        declarations: [_loginadmin_page__WEBPACK_IMPORTED_MODULE_6__["LoginadminPage"]]
      })], LoginadminPageModule);
      /***/
    },

    /***/
    "./src/app/loginadmin/loginadmin.page.scss":
    /*!*************************************************!*\
      !*** ./src/app/loginadmin/loginadmin.page.scss ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function srcAppLoginadminLoginadminPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luYWRtaW4vbG9naW5hZG1pbi5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/loginadmin/loginadmin.page.ts":
    /*!***********************************************!*\
      !*** ./src/app/loginadmin/loginadmin.page.ts ***!
      \***********************************************/

    /*! exports provided: LoginadminPage */

    /***/
    function srcAppLoginadminLoginadminPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginadminPage", function () {
        return LoginadminPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var LoginadminPage = /*#__PURE__*/function () {
        function LoginadminPage() {
          _classCallCheck(this, LoginadminPage);
        }

        _createClass(LoginadminPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return LoginadminPage;
      }();

      LoginadminPage.ctorParameters = function () {
        return [];
      };

      LoginadminPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-loginadmin',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./loginadmin.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/loginadmin/loginadmin.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./loginadmin.page.scss */
        "./src/app/loginadmin/loginadmin.page.scss"))["default"]]
      })], LoginadminPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=loginadmin-loginadmin-module-es5.js.map