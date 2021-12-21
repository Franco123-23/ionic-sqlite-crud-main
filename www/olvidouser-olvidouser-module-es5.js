(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["olvidouser-olvidouser-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/olvidouser/olvidouser.page.html":
    /*!***************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/olvidouser/olvidouser.page.html ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppOlvidouserOlvidouserPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar class=\"new-background-color\">\n    <ion-title></ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <img  src=\"assets/img/newcorrect.png\" >\n  <ion-text>\n    <h1 class=\"center\" >Contraseña Enviada</h1>\n  </ion-text>\n\n  <ion-text>\n    <A class= \"center\"  [routerLink]=\"['/loginusuario']\"> <h1> Volver </h1></A>\n  </ion-text>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/olvidouser/olvidouser-routing.module.ts":
    /*!*********************************************************!*\
      !*** ./src/app/olvidouser/olvidouser-routing.module.ts ***!
      \*********************************************************/

    /*! exports provided: OlvidouserPageRoutingModule */

    /***/
    function srcAppOlvidouserOlvidouserRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OlvidouserPageRoutingModule", function () {
        return OlvidouserPageRoutingModule;
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


      var _olvidouser_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./olvidouser.page */
      "./src/app/olvidouser/olvidouser.page.ts");

      var routes = [{
        path: '',
        component: _olvidouser_page__WEBPACK_IMPORTED_MODULE_3__["OlvidouserPage"]
      }];

      var OlvidouserPageRoutingModule = function OlvidouserPageRoutingModule() {
        _classCallCheck(this, OlvidouserPageRoutingModule);
      };

      OlvidouserPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], OlvidouserPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/olvidouser/olvidouser.module.ts":
    /*!*************************************************!*\
      !*** ./src/app/olvidouser/olvidouser.module.ts ***!
      \*************************************************/

    /*! exports provided: OlvidouserPageModule */

    /***/
    function srcAppOlvidouserOlvidouserModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OlvidouserPageModule", function () {
        return OlvidouserPageModule;
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


      var _olvidouser_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./olvidouser-routing.module */
      "./src/app/olvidouser/olvidouser-routing.module.ts");
      /* harmony import */


      var _olvidouser_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./olvidouser.page */
      "./src/app/olvidouser/olvidouser.page.ts");

      var OlvidouserPageModule = function OlvidouserPageModule() {
        _classCallCheck(this, OlvidouserPageModule);
      };

      OlvidouserPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _olvidouser_routing_module__WEBPACK_IMPORTED_MODULE_5__["OlvidouserPageRoutingModule"]],
        declarations: [_olvidouser_page__WEBPACK_IMPORTED_MODULE_6__["OlvidouserPage"]]
      })], OlvidouserPageModule);
      /***/
    },

    /***/
    "./src/app/olvidouser/olvidouser.page.scss":
    /*!*************************************************!*\
      !*** ./src/app/olvidouser/olvidouser.page.scss ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function srcAppOlvidouserOlvidouserPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".new-background-color {\n  --background: black;\n}\n\n.center {\n  text-align: center;\n}\n\n.center {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb2x2aWRvdXNlci9vbHZpZG91c2VyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0FBQ0o7O0FBRUk7RUFDRSxrQkFBQTtBQUNOOztBQUVJO0VBQ0Usa0JBQUE7QUFDTiIsImZpbGUiOiJzcmMvYXBwL29sdmlkb3VzZXIvb2x2aWRvdXNlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmV3LWJhY2tncm91bmQtY29sb3J7XG4gICAgLS1iYWNrZ3JvdW5kOiBibGFjaztcbiAgfVxuICAgIFxuICAgIC5jZW50ZXIge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgICBcbiAgICAuY2VudGVye1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH0iXX0= */";
      /***/
    },

    /***/
    "./src/app/olvidouser/olvidouser.page.ts":
    /*!***********************************************!*\
      !*** ./src/app/olvidouser/olvidouser.page.ts ***!
      \***********************************************/

    /*! exports provided: OlvidouserPage */

    /***/
    function srcAppOlvidouserOlvidouserPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OlvidouserPage", function () {
        return OlvidouserPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var OlvidouserPage = /*#__PURE__*/function () {
        function OlvidouserPage() {
          _classCallCheck(this, OlvidouserPage);
        }

        _createClass(OlvidouserPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return OlvidouserPage;
      }();

      OlvidouserPage.ctorParameters = function () {
        return [];
      };

      OlvidouserPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-olvidouser',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./olvidouser.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/olvidouser/olvidouser.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./olvidouser.page.scss */
        "./src/app/olvidouser/olvidouser.page.scss"))["default"]]
      })], OlvidouserPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=olvidouser-olvidouser-module-es5.js.map