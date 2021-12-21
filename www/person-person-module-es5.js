(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["person-person-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/person/person.page.html":
    /*!*******************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/person/person.page.html ***!
      \*******************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPersonPersonPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar class=\"new-background-color\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title style=\"color:#ffffff\">Direccion restaurant</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item>\n      <ion-label>Categoria Restaurate</ion-label>\n      <ion-select value=\"{{ selected_category_id }}\" [(ngModel)]=\"category_id\">\n        <ion-select-option\n          *ngFor=\"let category of categories\"\n          value=\"{{ category.id }}\"\n          >{{ category.name }}</ion-select-option\n        >\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\">Direccion restaurante </ion-label>\n      <ion-input [(ngModel)]=\"personName\"></ion-input>\n    </ion-item>\n\n    <ion-button color=\"success\" expand=\"block\" (click)=\"addPerson()\">Crear </ion-button>\n    <ion-button color= \"danger\" expand=\"block\" [routerLink]=\"['/home']\">Salir</ion-button>\n    <ion-button color= \"warning\" expand=\"block\" [routerLink]=\"['/registroadmin']\">Añadir administrador</ion-button>\n    <ion-button expand=\"block\" [routerLink]=\"['/vermudanzas']\">Ver Restaurante Registrado</ion-button>\n  </ion-list>\n  <ion-list>\n    <ion-item-sliding *ngFor=\"let person of persons\">\n      <ion-item-options side=\"start\">\n        <ion-item-option color=\"warning\" (click)=\"editPerson(person)\">Editar</ion-item-option>\n      </ion-item-options>\n\n      <ion-item>\n        <ion-label>{{ person.person }}</ion-label>\n        <ion-badge color=\"primary\">{{ person.category }}</ion-badge>\n      </ion-item>\n\n      <ion-item-options side=\"end\">\n        <ion-item-option color=\"danger\" (click)=\"deletePerson(person.id)\"\n          >Borrar</ion-item-option\n        >\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n\n\n  \n\n  \n\n    \n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/person/person-routing.module.ts":
    /*!*************************************************!*\
      !*** ./src/app/person/person-routing.module.ts ***!
      \*************************************************/

    /*! exports provided: PersonPageRoutingModule */

    /***/
    function srcAppPersonPersonRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PersonPageRoutingModule", function () {
        return PersonPageRoutingModule;
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


      var _person_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./person.page */
      "./src/app/person/person.page.ts");

      var routes = [{
        path: '',
        component: _person_page__WEBPACK_IMPORTED_MODULE_3__["PersonPage"]
      }];

      var PersonPageRoutingModule = function PersonPageRoutingModule() {
        _classCallCheck(this, PersonPageRoutingModule);
      };

      PersonPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], PersonPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/person/person.module.ts":
    /*!*****************************************!*\
      !*** ./src/app/person/person.module.ts ***!
      \*****************************************/

    /*! exports provided: PersonPageModule */

    /***/
    function srcAppPersonPersonModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PersonPageModule", function () {
        return PersonPageModule;
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


      var _person_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./person-routing.module */
      "./src/app/person/person-routing.module.ts");
      /* harmony import */


      var _person_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./person.page */
      "./src/app/person/person.page.ts");

      var PersonPageModule = function PersonPageModule() {
        _classCallCheck(this, PersonPageModule);
      };

      PersonPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _person_routing_module__WEBPACK_IMPORTED_MODULE_5__["PersonPageRoutingModule"]],
        declarations: [_person_page__WEBPACK_IMPORTED_MODULE_6__["PersonPage"]]
      })], PersonPageModule);
      /***/
    },

    /***/
    "./src/app/person/person.page.scss":
    /*!*****************************************!*\
      !*** ./src/app/person/person.page.scss ***!
      \*****************************************/

    /*! exports provided: default */

    /***/
    function srcAppPersonPersonPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-menu-button {\n  color: var(--ion-color-primary);\n}\n\n.new-background-color {\n  --background: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGVyc29uL3BlcnNvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwrQkFBQTtBQUNGOztBQUNBO0VBQ0UsbUJBQUE7QUFFRiIsImZpbGUiOiJzcmMvYXBwL3BlcnNvbi9wZXJzb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLW1lbnUtYnV0dG9uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cbi5uZXctYmFja2dyb3VuZC1jb2xvcntcbiAgLS1iYWNrZ3JvdW5kOiBibGFjaztcbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/person/person.page.ts":
    /*!***************************************!*\
      !*** ./src/app/person/person.page.ts ***!
      \***************************************/

    /*! exports provided: PersonPage */

    /***/
    function srcAppPersonPersonPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PersonPage", function () {
        return PersonPage;
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


      var _database_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../database.service */
      "./src/app/database.service.ts");

      var PersonPage = /*#__PURE__*/function () {
        function PersonPage(database) {
          _classCallCheck(this, PersonPage);

          this.database = database;
          this.personName = "";
          this.persons = [];
          this.category_id = 0;
          this.categories = [];
          this.editMode = false;
          this.selected_category_id = 0;
          this.editId = 0;
          this.getCategories();
          this.getPersons();
        }

        _createClass(PersonPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "getCategories",
          value: function getCategories() {
            var _this = this;

            this.database.getCategories().then(function (data) {
              _this.categories = [];

              if (data.rows.length > 0) {
                for (var i = 0; i < data.rows.length; i++) {
                  _this.categories.push(data.rows.item(i));
                }
              }
            });
          }
        }, {
          key: "addPerson",
          value: function addPerson() {
            var _this2 = this;

            if (!this.personName.length) {
              alert("Enter person name");
              return;
            }

            if (this.category_id === 0) {
              alert("Select category");
              return;
            }

            if (this.editMode) {
              this.database.editPerson(this.personName, this.category_id, this.editId).then(function (data) {
                _this2.personName = "";
                _this2.editMode = false;
                _this2.editId = 0;
                _this2.selected_category_id = 0;
                alert(data);

                _this2.getPersons();
              });
            } else {
              // add
              this.database.addPerson(this.personName, this.category_id).then(function (data) {
                _this2.personName = "";
                _this2.category_id = 0;
                alert(data);

                _this2.getPersons();
              });
            }
          }
        }, {
          key: "getPersons",
          value: function getPersons() {
            var _this3 = this;

            this.database.getPersons().then(function (data) {
              _this3.persons = [];

              if (data.rows.length > 0) {
                for (var i = 0; i < data.rows.length; i++) {
                  _this3.persons.push(data.rows.item(i));
                }
              }
            });
          }
        }, {
          key: "deletePerson",
          value: function deletePerson(id) {
            var _this4 = this;

            this.database.deletePerson(id).then(function (data) {
              alert(data);

              _this4.getPersons();
            });
          }
        }, {
          key: "editPerson",
          value: function editPerson(person) {
            this.editMode = true;
            this.selected_category_id = person.category_id;
            this.personName = person.person;
            this.editId = person.id;
          }
        }]);

        return PersonPage;
      }();

      PersonPage.ctorParameters = function () {
        return [{
          type: _database_service__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"]
        }];
      };

      PersonPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-person",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./person.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/person/person.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./person.page.scss */
        "./src/app/person/person.page.scss"))["default"]]
      })], PersonPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=person-person-module-es5.js.map