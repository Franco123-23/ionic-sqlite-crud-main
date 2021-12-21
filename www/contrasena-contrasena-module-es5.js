(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["contrasena-contrasena-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/contrasena/contrasena.page.html":
    /*!***************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contrasena/contrasena.page.html ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppContrasenaContrasenaPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar class=\"new-background-color\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      <h4 class=\"center\" style=\"color:#ffffff\">Reenvío</h4>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form>\n    <ion-item lines=\"full\">\n      <ion-label position=\"floating\">Email</ion-label>\n      <ion-input type=\"email\" required></ion-input>\n    </ion-item>\n\n    <ion-row>\n      <ion-col>\n        <ion-button [routerLink]=\"['/enviodecontrasena']\" type=\"submit\" color=\"primary\" expand=\"block\">Enviar</ion-button>\n      </ion-col>\n    </ion-row>\n\n    <small>\n\n    </small>\n  </form>\n</ion-content>\n\n";
      /***/
    },

    /***/
    "./src/app/contrasena/contrasena-routing.module.ts":
    /*!*********************************************************!*\
      !*** ./src/app/contrasena/contrasena-routing.module.ts ***!
      \*********************************************************/

    /*! exports provided: ContrasenaPageRoutingModule */

    /***/
    function srcAppContrasenaContrasenaRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ContrasenaPageRoutingModule", function () {
        return ContrasenaPageRoutingModule;
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


      var _contrasena_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./contrasena.page */
      "./src/app/contrasena/contrasena.page.ts");

      var routes = [{
        path: '',
        component: _contrasena_page__WEBPACK_IMPORTED_MODULE_3__["ContrasenaPage"]
      }];

      var ContrasenaPageRoutingModule = function ContrasenaPageRoutingModule() {
        _classCallCheck(this, ContrasenaPageRoutingModule);
      };

      ContrasenaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ContrasenaPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/contrasena/contrasena.module.ts":
    /*!*************************************************!*\
      !*** ./src/app/contrasena/contrasena.module.ts ***!
      \*************************************************/

    /*! exports provided: ContrasenaPageModule */

    /***/
    function srcAppContrasenaContrasenaModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ContrasenaPageModule", function () {
        return ContrasenaPageModule;
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


      var _contrasena_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./contrasena-routing.module */
      "./src/app/contrasena/contrasena-routing.module.ts");
      /* harmony import */


      var _contrasena_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./contrasena.page */
      "./src/app/contrasena/contrasena.page.ts");

      var ContrasenaPageModule = function ContrasenaPageModule() {
        _classCallCheck(this, ContrasenaPageModule);
      };

      ContrasenaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _contrasena_routing_module__WEBPACK_IMPORTED_MODULE_5__["ContrasenaPageRoutingModule"]],
        declarations: [_contrasena_page__WEBPACK_IMPORTED_MODULE_6__["ContrasenaPage"]]
      })], ContrasenaPageModule);
      /***/
    },

    /***/
    "./src/app/contrasena/contrasena.page.scss":
    /*!*************************************************!*\
      !*** ./src/app/contrasena/contrasena.page.scss ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function srcAppContrasenaContrasenaPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".center {\n  text-align: center;\n}\n\n.new-background-color {\n  --background: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udHJhc2VuYS9jb250cmFzZW5hLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FBQ0o7O0FBRUU7RUFDRSxtQkFBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29udHJhc2VuYS9jb250cmFzZW5hLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jZW50ZXJ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIFxuICAubmV3LWJhY2tncm91bmQtY29sb3J7XG4gICAgLS1iYWNrZ3JvdW5kOiBibGFjaztcbiAgfSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/contrasena/contrasena.page.ts":
    /*!***********************************************!*\
      !*** ./src/app/contrasena/contrasena.page.ts ***!
      \***********************************************/

    /*! exports provided: ContrasenaPage */

    /***/
    function srcAppContrasenaContrasenaPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ContrasenaPage", function () {
        return ContrasenaPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var ContrasenaPage = /*#__PURE__*/function () {
        function ContrasenaPage() {
          _classCallCheck(this, ContrasenaPage);
        }

        _createClass(ContrasenaPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ContrasenaPage;
      }();

      ContrasenaPage.ctorParameters = function () {
        return [];
      };

      ContrasenaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contrasena',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./contrasena.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/contrasena/contrasena.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./contrasena.page.scss */
        "./src/app/contrasena/contrasena.page.scss"))["default"]]
      })], ContrasenaPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=contrasena-contrasena-module-es5.js.map