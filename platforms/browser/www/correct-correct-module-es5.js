(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["correct-correct-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/correct/correct.page.html":
    /*!*********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/correct/correct.page.html ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppCorrectCorrectPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar class=\"new-background-color\">\n    <ion-title>\n      <ion-text>\n        <h1 class=\"center\" style=\"color:#000000\" >Registro Exitoso</h1>\n      </ion-text>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div>\n\n  </div>\n  <img  src=\"assets/img/newcorrect.png\" >\n  <ion-text>\n    <h1 class=\"center\" style=\"color:#000000\" >Registrado con Éxito</h1>\n  </ion-text>\n\n  <ion-text>\n    <A class= \"center\" style=\"color:#000000\" [routerLink]=\"['/vistarepartidor']\"> <h1> Volver </h1></A>\n  </ion-text>\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/correct/correct-routing.module.ts":
    /*!***************************************************!*\
      !*** ./src/app/correct/correct-routing.module.ts ***!
      \***************************************************/

    /*! exports provided: CorrectPageRoutingModule */

    /***/
    function srcAppCorrectCorrectRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CorrectPageRoutingModule", function () {
        return CorrectPageRoutingModule;
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


      var _correct_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./correct.page */
      "./src/app/correct/correct.page.ts");

      var routes = [{
        path: '',
        component: _correct_page__WEBPACK_IMPORTED_MODULE_3__["CorrectPage"]
      }];

      var CorrectPageRoutingModule = function CorrectPageRoutingModule() {
        _classCallCheck(this, CorrectPageRoutingModule);
      };

      CorrectPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], CorrectPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/correct/correct.module.ts":
    /*!*******************************************!*\
      !*** ./src/app/correct/correct.module.ts ***!
      \*******************************************/

    /*! exports provided: CorrectPageModule */

    /***/
    function srcAppCorrectCorrectModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CorrectPageModule", function () {
        return CorrectPageModule;
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


      var _correct_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./correct-routing.module */
      "./src/app/correct/correct-routing.module.ts");
      /* harmony import */


      var _correct_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./correct.page */
      "./src/app/correct/correct.page.ts");

      var CorrectPageModule = function CorrectPageModule() {
        _classCallCheck(this, CorrectPageModule);
      };

      CorrectPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _correct_routing_module__WEBPACK_IMPORTED_MODULE_5__["CorrectPageRoutingModule"]],
        declarations: [_correct_page__WEBPACK_IMPORTED_MODULE_6__["CorrectPage"]]
      })], CorrectPageModule);
      /***/
    },

    /***/
    "./src/app/correct/correct.page.scss":
    /*!*******************************************!*\
      !*** ./src/app/correct/correct.page.scss ***!
      \*******************************************/

    /*! exports provided: default */

    /***/
    function srcAppCorrectCorrectPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --ion-background-color:#fcfcfc;\n}\n\n.center {\n  text-align: center;\n}\n\n.center {\n  text-align: center;\n}\n\n.new-background-color {\n  --background: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29ycmVjdC9jb3JyZWN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLDhCQUFBO0FBQUo7O0FBR0U7RUFDRSxrQkFBQTtBQUFKOztBQUdFO0VBQ0Usa0JBQUE7QUFBSjs7QUFHRTtFQUNFLG1CQUFBO0FBQUoiLCJmaWxlIjoic3JjL2FwcC9jb3JyZWN0L2NvcnJlY3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XG5cbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiNmY2ZjZmM7XG4gIH1cbiAgXG4gIC5jZW50ZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICBcbiAgLmNlbnRlcntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgXG4gIC5uZXctYmFja2dyb3VuZC1jb2xvcntcbiAgICAtLWJhY2tncm91bmQ6IGJsYWNrO1xuICB9XG4gICJdfQ== */";
      /***/
    },

    /***/
    "./src/app/correct/correct.page.ts":
    /*!*****************************************!*\
      !*** ./src/app/correct/correct.page.ts ***!
      \*****************************************/

    /*! exports provided: CorrectPage */

    /***/
    function srcAppCorrectCorrectPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CorrectPage", function () {
        return CorrectPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var CorrectPage = /*#__PURE__*/function () {
        function CorrectPage() {
          _classCallCheck(this, CorrectPage);
        }

        _createClass(CorrectPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return CorrectPage;
      }();

      CorrectPage.ctorParameters = function () {
        return [];
      };

      CorrectPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-correct',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./correct.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/correct/correct.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./correct.page.scss */
        "./src/app/correct/correct.page.scss"))["default"]]
      })], CorrectPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=correct-correct-module-es5.js.map