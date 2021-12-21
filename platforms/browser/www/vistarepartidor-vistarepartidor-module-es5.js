(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vistarepartidor-vistarepartidor-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/vistarepartidor/vistarepartidor.page.html":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/vistarepartidor/vistarepartidor.page.html ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppVistarepartidorVistarepartidorPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar  class=\"new-background-color\">\n    <div  style=\"text-align: left;\">\n      <ion-button color=\"primary\" [routerLink]=\"['/home']\" >\n        <ion-icon  slot=\"icon-only\" name=\"arrow-back\"></ion-icon>\n      </ion-button>\n      </div>\n    <h4 class=\"center\" style=\"color:#ffffff\"> Bienvenido Repartidor </h4>\n  </ion-toolbar>\n</ion-header>\n\n\n  <img src=\"assets/img/moto.jpeg\" >\n\n\n<ion-content class=\"auth-form\">\n  <ion-grid>\n    <ion-row>\n      <ion-col align-self-center>\n        <ion-button [routerLink]=\"['/loginrepartidor']\" expand=\"block\" color=\"primary\">Iniciar sesion </ion-button>\n        <span class=\"divider line one-line\"><p style=\"color:#000000\"> o</p></span>\n        <ion-button [routerLink]=\"['/repartidor']\" expand=\"block\" color=\"danger\">Registrate</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/vistarepartidor/vistarepartidor-routing.module.ts":
    /*!*******************************************************************!*\
      !*** ./src/app/vistarepartidor/vistarepartidor-routing.module.ts ***!
      \*******************************************************************/

    /*! exports provided: VistarepartidorPageRoutingModule */

    /***/
    function srcAppVistarepartidorVistarepartidorRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VistarepartidorPageRoutingModule", function () {
        return VistarepartidorPageRoutingModule;
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


      var _vistarepartidor_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./vistarepartidor.page */
      "./src/app/vistarepartidor/vistarepartidor.page.ts");

      var routes = [{
        path: '',
        component: _vistarepartidor_page__WEBPACK_IMPORTED_MODULE_3__["VistarepartidorPage"]
      }];

      var VistarepartidorPageRoutingModule = function VistarepartidorPageRoutingModule() {
        _classCallCheck(this, VistarepartidorPageRoutingModule);
      };

      VistarepartidorPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], VistarepartidorPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/vistarepartidor/vistarepartidor.module.ts":
    /*!***********************************************************!*\
      !*** ./src/app/vistarepartidor/vistarepartidor.module.ts ***!
      \***********************************************************/

    /*! exports provided: VistarepartidorPageModule */

    /***/
    function srcAppVistarepartidorVistarepartidorModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VistarepartidorPageModule", function () {
        return VistarepartidorPageModule;
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


      var _vistarepartidor_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./vistarepartidor-routing.module */
      "./src/app/vistarepartidor/vistarepartidor-routing.module.ts");
      /* harmony import */


      var _vistarepartidor_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./vistarepartidor.page */
      "./src/app/vistarepartidor/vistarepartidor.page.ts");

      var VistarepartidorPageModule = function VistarepartidorPageModule() {
        _classCallCheck(this, VistarepartidorPageModule);
      };

      VistarepartidorPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _vistarepartidor_routing_module__WEBPACK_IMPORTED_MODULE_5__["VistarepartidorPageRoutingModule"]],
        declarations: [_vistarepartidor_page__WEBPACK_IMPORTED_MODULE_6__["VistarepartidorPage"]]
      })], VistarepartidorPageModule);
      /***/
    },

    /***/
    "./src/app/vistarepartidor/vistarepartidor.page.scss":
    /*!***********************************************************!*\
      !*** ./src/app/vistarepartidor/vistarepartidor.page.scss ***!
      \***********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppVistarepartidorVistarepartidorPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n.center {\n  text-align: center;\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #fefefe;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\nion-content {\n  --ion-background-color:#fcfcfc;\n}\n\n.divider {\n  display: flex;\n}\n\n.divider:before, .divider:after {\n  content: \"\";\n  flex: 0.9;\n}\n\n.line {\n  align-items: center;\n  margin: 1px -- 1px;\n}\n\n.line:before, .line:after {\n  height: 0.5px;\n  margin: 0 1em;\n}\n\n.one-line:before, .one-line:after {\n  background: black;\n}\n\n.razor:before, .razor:after {\n  box-shadow: 0 0.3px 0;\n}\n\n.new-background-color {\n  --background: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlzdGFyZXBhcnRpZG9yL3Zpc3RhcmVwYXJ0aWRvci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUVBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7QUFBSjs7QUFHRTtFQUNFLGtCQUFBO0FBQUo7O0FBR0U7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFBSjs7QUFHRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUVBLGNBQUE7RUFFQSxTQUFBO0FBRko7O0FBS0U7RUFDRSxxQkFBQTtBQUZKOztBQUtFO0VBRUUsOEJBQUE7QUFISjs7QUFRRTtFQUNFLGFBQUE7QUFMSjs7QUFPSTtFQUVFLFdBQUE7RUFDQSxTQUFBO0FBTk47O0FBV0U7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0FBUko7O0FBVUk7RUFFRSxhQUFBO0VBQ0EsYUFBQTtBQVROOztBQWVNO0VBRUUsaUJBQUE7QUFiUjs7QUFrQk07RUFFRSxxQkFBQTtBQWhCUjs7QUFvQkk7RUFDRSxtQkFBQTtBQWpCTiIsImZpbGUiOiJzcmMvYXBwL3Zpc3RhcmVwYXJ0aWRvci92aXN0YXJlcGFydGlkb3IucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIH1cbiAgXG4gIC5jZW50ZXJ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIFxuICAjY29udGFpbmVyIHN0cm9uZyB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xuICB9XG4gIFxuICAjY29udGFpbmVyIHAge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgXG4gICAgY29sb3I6ICNmZWZlZmU7XG4gIFxuICAgIG1hcmdpbjogMDtcbiAgfVxuICBcbiAgI2NvbnRhaW5lciBhIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cbiAgXG4gIGlvbi1jb250ZW50e1xuICBcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiNmY2ZjZmM7XG4gIH1cbiAgXG4gIFxuICAvLyBCYXNlIERpdmlkZXIgY2xhc3NcbiAgLmRpdmlkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIFxuICAgICY6YmVmb3JlLFxuICAgICY6YWZ0ZXIge1xuICAgICAgY29udGVudDogXCJcIjtcbiAgICAgIGZsZXg6IDAuOTtcbiAgICB9XG4gIH1cbiAgXG4gIC8vIEJhc2UgbGluZVxuICAubGluZSB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW46IDFweCAtLSAxcHg7XG4gIFxuICAgICY6YmVmb3JlLFxuICAgICY6YWZ0ZXIge1xuICAgICAgaGVpZ2h0OiAwLjVweDtcbiAgICAgIG1hcmdpbjogMCAxZW07XG4gICAgfVxuICB9XG4gIFxuICBcbiAgICAub25lLWxpbmUge1xuICAgICAgJjpiZWZvcmUsXG4gICAgICAmOmFmdGVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogYmxhY2s7XG4gICAgICB9XG4gICAgfVxuICBcbiAgICAucmF6b3Ige1xuICAgICAgJjpiZWZvcmUsXG4gICAgICAmOmFmdGVyIHtcbiAgICAgICAgYm94LXNoYWRvdzogMCAwLjNweCAwXG4gICAgICB9XG4gICAgfVxuICBcbiAgICAubmV3LWJhY2tncm91bmQtY29sb3J7XG4gICAgICAtLWJhY2tncm91bmQ6IGJsYWNrO1xuICB9XG4gICJdfQ== */";
      /***/
    },

    /***/
    "./src/app/vistarepartidor/vistarepartidor.page.ts":
    /*!*********************************************************!*\
      !*** ./src/app/vistarepartidor/vistarepartidor.page.ts ***!
      \*********************************************************/

    /*! exports provided: VistarepartidorPage */

    /***/
    function srcAppVistarepartidorVistarepartidorPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VistarepartidorPage", function () {
        return VistarepartidorPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var VistarepartidorPage = /*#__PURE__*/function () {
        function VistarepartidorPage() {
          _classCallCheck(this, VistarepartidorPage);
        }

        _createClass(VistarepartidorPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return VistarepartidorPage;
      }();

      VistarepartidorPage.ctorParameters = function () {
        return [];
      };

      VistarepartidorPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-vistarepartidor',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./vistarepartidor.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/vistarepartidor/vistarepartidor.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./vistarepartidor.page.scss */
        "./src/app/vistarepartidor/vistarepartidor.page.scss"))["default"]]
      })], VistarepartidorPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=vistarepartidor-vistarepartidor-module-es5.js.map