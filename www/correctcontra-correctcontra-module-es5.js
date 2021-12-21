(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["correctcontra-correctcontra-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/correctcontra/correctcontra.page.html":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/correctcontra/correctcontra.page.html ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppCorrectcontraCorrectcontraPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar class=\"new-background-color\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      <h4 class=\"center\" style=\"color:#ffffff\">Reenvío</h4>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form>\n    <ion-item lines=\"full\">\n      <ion-label position=\"floating\">Email</ion-label>\n      <ion-input type=\"email\" required></ion-input>\n    </ion-item>\n\n    <ion-row>\n      <ion-col>\n        <ion-button [routerLink]=\"['/olvidorepartidor']\" type=\"submit\" color=\"primary\" expand=\"block\">Enviar</ion-button>\n      </ion-col>\n    </ion-row>\n\n    <small>\n\n    </small>\n  </form>\n</ion-content>\n\n\n";
      /***/
    },

    /***/
    "./src/app/correctcontra/correctcontra-routing.module.ts":
    /*!***************************************************************!*\
      !*** ./src/app/correctcontra/correctcontra-routing.module.ts ***!
      \***************************************************************/

    /*! exports provided: CorrectcontraPageRoutingModule */

    /***/
    function srcAppCorrectcontraCorrectcontraRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CorrectcontraPageRoutingModule", function () {
        return CorrectcontraPageRoutingModule;
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


      var _correctcontra_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./correctcontra.page */
      "./src/app/correctcontra/correctcontra.page.ts");

      var routes = [{
        path: '',
        component: _correctcontra_page__WEBPACK_IMPORTED_MODULE_3__["CorrectcontraPage"]
      }];

      var CorrectcontraPageRoutingModule = function CorrectcontraPageRoutingModule() {
        _classCallCheck(this, CorrectcontraPageRoutingModule);
      };

      CorrectcontraPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], CorrectcontraPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/correctcontra/correctcontra.module.ts":
    /*!*******************************************************!*\
      !*** ./src/app/correctcontra/correctcontra.module.ts ***!
      \*******************************************************/

    /*! exports provided: CorrectcontraPageModule */

    /***/
    function srcAppCorrectcontraCorrectcontraModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CorrectcontraPageModule", function () {
        return CorrectcontraPageModule;
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


      var _correctcontra_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./correctcontra-routing.module */
      "./src/app/correctcontra/correctcontra-routing.module.ts");
      /* harmony import */


      var _correctcontra_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./correctcontra.page */
      "./src/app/correctcontra/correctcontra.page.ts");

      var CorrectcontraPageModule = function CorrectcontraPageModule() {
        _classCallCheck(this, CorrectcontraPageModule);
      };

      CorrectcontraPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _correctcontra_routing_module__WEBPACK_IMPORTED_MODULE_5__["CorrectcontraPageRoutingModule"]],
        declarations: [_correctcontra_page__WEBPACK_IMPORTED_MODULE_6__["CorrectcontraPage"]]
      })], CorrectcontraPageModule);
      /***/
    },

    /***/
    "./src/app/correctcontra/correctcontra.page.scss":
    /*!*******************************************************!*\
      !*** ./src/app/correctcontra/correctcontra.page.scss ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function srcAppCorrectcontraCorrectcontraPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".center {\n  text-align: center;\n}\n\n.new-background-color {\n  --background: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29ycmVjdGNvbnRyYS9jb3JyZWN0Y29udHJhLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29ycmVjdGNvbnRyYS9jb3JyZWN0Y29udHJhLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jZW50ZXJ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm5ldy1iYWNrZ3JvdW5kLWNvbG9ye1xuICAtLWJhY2tncm91bmQ6IGJsYWNrO1xufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/correctcontra/correctcontra.page.ts":
    /*!*****************************************************!*\
      !*** ./src/app/correctcontra/correctcontra.page.ts ***!
      \*****************************************************/

    /*! exports provided: CorrectcontraPage */

    /***/
    function srcAppCorrectcontraCorrectcontraPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CorrectcontraPage", function () {
        return CorrectcontraPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var CorrectcontraPage = /*#__PURE__*/function () {
        function CorrectcontraPage() {
          _classCallCheck(this, CorrectcontraPage);
        }

        _createClass(CorrectcontraPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return CorrectcontraPage;
      }();

      CorrectcontraPage.ctorParameters = function () {
        return [];
      };

      CorrectcontraPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-correctcontra',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./correctcontra.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/correctcontra/correctcontra.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./correctcontra.page.scss */
        "./src/app/correctcontra/correctcontra.page.scss"))["default"]]
      })], CorrectcontraPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=correctcontra-correctcontra-module-es5.js.map