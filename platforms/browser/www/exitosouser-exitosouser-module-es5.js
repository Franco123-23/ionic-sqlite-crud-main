(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["exitosouser-exitosouser-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/exitosouser/exitosouser.page.html":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/exitosouser/exitosouser.page.html ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppExitosouserExitosouserPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar class=\"new-background-color\">\n    <ion-title>\n      <ion-text>\n        <h1 class=\"center\" style=\"color:#000000\" >Registro Exitoso</h1>\n      </ion-text>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div>\n\n  </div>\n  <img  src=\"assets/img/newcorrect.png\" >\n  <ion-text>\n    <h1 class=\"center\" style=\"color:#000000\" >Registrado con Éxito</h1>\n  </ion-text>\n\n  <ion-text>\n    <A class= \"center\" style=\"color:#000000\" [routerLink]=\"['/vistausuario']\"> <h1> Volver </h1></A>\n  </ion-text>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/exitosouser/exitosouser-routing.module.ts":
    /*!***********************************************************!*\
      !*** ./src/app/exitosouser/exitosouser-routing.module.ts ***!
      \***********************************************************/

    /*! exports provided: ExitosouserPageRoutingModule */

    /***/
    function srcAppExitosouserExitosouserRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExitosouserPageRoutingModule", function () {
        return ExitosouserPageRoutingModule;
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


      var _exitosouser_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./exitosouser.page */
      "./src/app/exitosouser/exitosouser.page.ts");

      var routes = [{
        path: '',
        component: _exitosouser_page__WEBPACK_IMPORTED_MODULE_3__["ExitosouserPage"]
      }];

      var ExitosouserPageRoutingModule = function ExitosouserPageRoutingModule() {
        _classCallCheck(this, ExitosouserPageRoutingModule);
      };

      ExitosouserPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ExitosouserPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/exitosouser/exitosouser.module.ts":
    /*!***************************************************!*\
      !*** ./src/app/exitosouser/exitosouser.module.ts ***!
      \***************************************************/

    /*! exports provided: ExitosouserPageModule */

    /***/
    function srcAppExitosouserExitosouserModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExitosouserPageModule", function () {
        return ExitosouserPageModule;
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


      var _exitosouser_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./exitosouser-routing.module */
      "./src/app/exitosouser/exitosouser-routing.module.ts");
      /* harmony import */


      var _exitosouser_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./exitosouser.page */
      "./src/app/exitosouser/exitosouser.page.ts");

      var ExitosouserPageModule = function ExitosouserPageModule() {
        _classCallCheck(this, ExitosouserPageModule);
      };

      ExitosouserPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _exitosouser_routing_module__WEBPACK_IMPORTED_MODULE_5__["ExitosouserPageRoutingModule"]],
        declarations: [_exitosouser_page__WEBPACK_IMPORTED_MODULE_6__["ExitosouserPage"]]
      })], ExitosouserPageModule);
      /***/
    },

    /***/
    "./src/app/exitosouser/exitosouser.page.scss":
    /*!***************************************************!*\
      !*** ./src/app/exitosouser/exitosouser.page.scss ***!
      \***************************************************/

    /*! exports provided: default */

    /***/
    function srcAppExitosouserExitosouserPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --ion-background-color:#fcfcfc;\n}\n\n.center {\n  text-align: center;\n}\n\n.center {\n  text-align: center;\n}\n\n.new-background-color {\n  --background: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhpdG9zb3VzZXIvZXhpdG9zb3VzZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksOEJBQUE7QUFBSjs7QUFHRTtFQUNFLGtCQUFBO0FBQUo7O0FBR0U7RUFDRSxrQkFBQTtBQUFKOztBQUdFO0VBQ0UsbUJBQUE7QUFBSiIsImZpbGUiOiJzcmMvYXBwL2V4aXRvc291c2VyL2V4aXRvc291c2VyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xuXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojZmNmY2ZjO1xuICB9XG4gIFxuICAuY2VudGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgXG4gIC5jZW50ZXJ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIFxuICAubmV3LWJhY2tncm91bmQtY29sb3J7XG4gICAgLS1iYWNrZ3JvdW5kOiBibGFjaztcbiAgfVxuICAiXX0= */";
      /***/
    },

    /***/
    "./src/app/exitosouser/exitosouser.page.ts":
    /*!*************************************************!*\
      !*** ./src/app/exitosouser/exitosouser.page.ts ***!
      \*************************************************/

    /*! exports provided: ExitosouserPage */

    /***/
    function srcAppExitosouserExitosouserPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExitosouserPage", function () {
        return ExitosouserPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var ExitosouserPage = /*#__PURE__*/function () {
        function ExitosouserPage() {
          _classCallCheck(this, ExitosouserPage);
        }

        _createClass(ExitosouserPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ExitosouserPage;
      }();

      ExitosouserPage.ctorParameters = function () {
        return [];
      };

      ExitosouserPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-exitosouser',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./exitosouser.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/exitosouser/exitosouser.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./exitosouser.page.scss */
        "./src/app/exitosouser/exitosouser.page.scss"))["default"]]
      })], ExitosouserPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=exitosouser-exitosouser-module-es5.js.map