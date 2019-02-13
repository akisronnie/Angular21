(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _game_game_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game/game.component */ "./src/app/game/game.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _multiplayer_menu_multiplayer_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./multiplayer-menu/multiplayer-menu.component */ "./src/app/multiplayer-menu/multiplayer-menu.component.ts");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./error/error.component */ "./src/app/error/error.component.ts");
/* harmony import */ var _intro_intro_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./intro/intro.component */ "./src/app/intro/intro.component.ts");
/* harmony import */ var _guards_user_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./guards/user.guard */ "./src/app/guards/user.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: '',
        redirectTo: '/intro',
        pathMatch: 'full'
    },
    { path: 'intro',
        component: _intro_intro_component__WEBPACK_IMPORTED_MODULE_6__["IntroComponent"]
    },
    { path: 'game/:id',
        component: _game_game_component__WEBPACK_IMPORTED_MODULE_2__["GameComponent"]
    },
    { path: 'menu',
        component: _menu_menu_component__WEBPACK_IMPORTED_MODULE_3__["MenuComponent"],
        canActivate: [_guards_user_guard__WEBPACK_IMPORTED_MODULE_7__["UserGuard"]]
    },
    { path: 'multiplayer',
        component: _multiplayer_menu_multiplayer_menu_component__WEBPACK_IMPORTED_MODULE_4__["MultiplayerMenuComponent"],
        canActivate: [_guards_user_guard__WEBPACK_IMPORTED_MODULE_7__["UserGuard"]]
    },
    { path: '**',
        component: _error_error_component__WEBPACK_IMPORTED_MODULE_5__["ErrorComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angularfire2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _game_score_score_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./game/score/score.component */ "./src/app/game/score/score.component.ts");
/* harmony import */ var _game_field_field_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./game/field/field.component */ "./src/app/game/field/field.component.ts");
/* harmony import */ var _game_game_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./game/game.component */ "./src/app/game/game.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./error/error.component */ "./src/app/error/error.component.ts");
/* harmony import */ var _services_game_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/game.service */ "./src/app/services/game.service.ts");
/* harmony import */ var _services_data_base_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/data-base.service */ "./src/app/services/data-base.service.ts");
/* harmony import */ var _multiplayer_menu_multiplayer_menu_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./multiplayer-menu/multiplayer-menu.component */ "./src/app/multiplayer-menu/multiplayer-menu.component.ts");
/* harmony import */ var _no_undef_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./no-undef.pipe */ "./src/app/no-undef.pipe.ts");
/* harmony import */ var _intro_intro_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./intro/intro.component */ "./src/app/intro/intro.component.ts");
/* harmony import */ var _keys_pipe__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./keys.pipe */ "./src/app/keys.pipe.ts");
/* harmony import */ var _guards_user_guard__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./guards/user.guard */ "./src/app/guards/user.guard.ts");
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/local-storage.service */ "./src/app/services/local-storage.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _game_score_score_component__WEBPACK_IMPORTED_MODULE_8__["ScoreComponent"],
                _game_field_field_component__WEBPACK_IMPORTED_MODULE_9__["FieldComponent"],
                _game_game_component__WEBPACK_IMPORTED_MODULE_10__["GameComponent"],
                _menu_menu_component__WEBPACK_IMPORTED_MODULE_11__["MenuComponent"],
                _error_error_component__WEBPACK_IMPORTED_MODULE_12__["ErrorComponent"],
                _multiplayer_menu_multiplayer_menu_component__WEBPACK_IMPORTED_MODULE_15__["MultiplayerMenuComponent"],
                _no_undef_pipe__WEBPACK_IMPORTED_MODULE_16__["NoUndefPipe"],
                _intro_intro_component__WEBPACK_IMPORTED_MODULE_17__["IntroComponent"],
                _keys_pipe__WEBPACK_IMPORTED_MODULE_18__["KeysPipe"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                angularfire2__WEBPACK_IMPORTED_MODULE_4__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].firebase),
                angularfire2_database__WEBPACK_IMPORTED_MODULE_5__["AngularFireDatabaseModule"],
            ],
            providers: [
                _services_game_service__WEBPACK_IMPORTED_MODULE_13__["GameService"],
                _services_data_base_service__WEBPACK_IMPORTED_MODULE_14__["DataBaseService"],
                _services_local_storage_service__WEBPACK_IMPORTED_MODULE_20__["LocalStorageService"],
                _guards_user_guard__WEBPACK_IMPORTED_MODULE_19__["UserGuard"],
                _services_user_service__WEBPACK_IMPORTED_MODULE_21__["UserService"],
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/error/error.component.css":
/*!*******************************************!*\
  !*** ./src/app/error/error.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-wrapper {\n  width: 100%;\n  height: 98vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  background: url(\"https://f4.bcbits.com/img/a0096613183_10.jpg\") 100% 100% no-repeat;;\n  color:black;\n  background-size: cover;\n}\n\nbutton {\n  width: 400px;\n  height: 200px;\n  font-size: 40px;\n}\n\na {\n  font-size: 50px;\n  margin-bottom: 20px;\n}\n\n.wrapper {\n  background-color: rgb(109, 190, 109);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  border-radius: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXJyb3IvZXJyb3IuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsY0FBYztFQUNkLHdCQUF3QjtFQUN4QixvQkFBb0I7RUFDcEIsdUJBQXVCO0VBQ3ZCLG9GQUFvRjtFQUNwRixZQUFZO0VBQ1osdUJBQXVCO0NBQ3hCOztBQUVEO0VBQ0UsYUFBYTtFQUNiLGNBQWM7RUFDZCxnQkFBZ0I7Q0FDakI7O0FBRUQ7RUFDRSxnQkFBZ0I7RUFDaEIsb0JBQW9CO0NBQ3JCOztBQUVEO0VBQ0UscUNBQXFDO0VBQ3JDLGNBQWM7RUFDZCx3QkFBd0I7RUFDeEIsb0JBQW9CO0VBQ3BCLHVCQUF1QjtFQUN2QixvQkFBb0I7Q0FDckIiLCJmaWxlIjoic3JjL2FwcC9lcnJvci9lcnJvci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4td3JhcHBlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDk4dmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBiYWNrZ3JvdW5kOiB1cmwoXCJodHRwczovL2Y0LmJjYml0cy5jb20vaW1nL2EwMDk2NjEzMTgzXzEwLmpwZ1wiKSAxMDAlIDEwMCUgbm8tcmVwZWF0OztcbiAgY29sb3I6YmxhY2s7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbmJ1dHRvbiB7XG4gIHdpZHRoOiA0MDBweDtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgZm9udC1zaXplOiA0MHB4O1xufVxuXG5hIHtcbiAgZm9udC1zaXplOiA1MHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4ud3JhcHBlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDksIDE5MCwgMTA5KTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/error/error.component.html":
/*!********************************************!*\
  !*** ./src/app/error/error.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-wrapper\">\n  <div class=\"wrapper\">\n    <a routerLink=\"/menu\">\n       Return to MENU\n    </a>\n\n    <a routerLink=\"/game\">\n      Return to GAME\n    </a>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/error/error.component.ts":
/*!******************************************!*\
  !*** ./src/app/error/error.component.ts ***!
  \******************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ErrorComponent = /** @class */ (function () {
    function ErrorComponent() {
    }
    ErrorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-error',
            template: __webpack_require__(/*! ./error.component.html */ "./src/app/error/error.component.html"),
            styles: [__webpack_require__(/*! ./error.component.css */ "./src/app/error/error.component.css")]
        })
    ], ErrorComponent);
    return ErrorComponent;
}());



/***/ }),

/***/ "./src/app/game/field/field.component.css":
/*!************************************************!*\
  !*** ./src/app/game/field/field.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table {\n  margin: auto;\n  flex-wrap: wrap;\n  height: 800px;\n  background-image: url('http://cbgames.com.ua/image/cache/500-500/data/cbg/sukno.jpg');\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  position: relative;\n  display: flex;\n  justify-content: space-between;\n  text-align: center;\n}\n\n\n\n.players {\n\n  width: 300px;\n  height: 300px;\n   background-color: rgb(124, 218, 129, 0.4);\n  border-radius: 20px;\n}\n\n\n\n.player-hand {\n  display: flex;\n  justify-content: space-around;\n  flex-direction: row; \n\n  width: 100%;\n}\n\n\n\n.comp-side {\n  position: absolute;\n  top: 90px;\n  width: 100%;\n  height: 200px;\n  display: flex;\n  justify-content: center;\n}\n\n\n\n.you-side {\n  position: absolute;\n  bottom: 90px;\n  width: 100%;\n  height: 200px;\n  display: flex;\n  justify-content: center;\n}\n\n\n\n.center-table {\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  width: 100%;\n  top: 50%;\n}\n\n\n\nbutton {\n  height: 70px;\n  width: 130px;\n  font-size: 25px;\n  margin-left: 30px;\n  margin-right: 30px;\n}\n\n\n\nimg {\n  width: 50px;\n  height: 100px;\n\n  border-radius: 10px;\n}\n\n\n\n.total,\n.comp-result,\n.score {\n  font-size: 52px;\n  color: black;\n  background-color: rgba(163, 163, 163, 0.438);\n  border-radius: 20px;\n}\n\n\n\n.comp-result {\n  margin-left: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZS9maWVsZC9maWVsZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2Qsc0ZBQXNGO0VBQ3RGLDRCQUE0QjtFQUM1Qiw2QkFBNkI7RUFDN0IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsK0JBQStCO0VBQy9CLG1CQUFtQjtDQUNwQjs7OztBQUlEOztFQUVFLGFBQWE7RUFDYixjQUFjO0dBQ2IsMENBQTBDO0VBQzNDLG9CQUFvQjtDQUNyQjs7OztBQUVEO0VBQ0UsY0FBYztFQUNkLDhCQUE4QjtFQUM5QixvQkFBb0I7O0VBRXBCLFlBQVk7Q0FDYjs7OztBQVNEO0VBQ0UsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixZQUFZO0VBQ1osY0FBYztFQUNkLGNBQWM7RUFDZCx3QkFBd0I7Q0FDekI7Ozs7QUFFRDtFQUNFLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsWUFBWTtFQUNaLGNBQWM7RUFDZCxjQUFjO0VBQ2Qsd0JBQXdCO0NBQ3pCOzs7O0FBRUQ7RUFDRSxtQkFBbUI7RUFDbkIsY0FBYztFQUNkLHdCQUF3QjtFQUN4Qix3QkFBd0I7RUFDeEIsWUFBWTtFQUNaLFNBQVM7Q0FDVjs7OztBQUVEO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtDQUNwQjs7OztBQUVEO0VBQ0UsWUFBWTtFQUNaLGNBQWM7O0VBRWQsb0JBQW9CO0NBQ3JCOzs7O0FBRUQ7OztFQUdFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsNkNBQTZDO0VBQzdDLG9CQUFvQjtDQUNyQjs7OztBQUVEO0VBQ0Usa0JBQWtCO0NBQ25CIiwiZmlsZSI6InNyYy9hcHAvZ2FtZS9maWVsZC9maWVsZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYmxlIHtcbiAgbWFyZ2luOiBhdXRvO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGhlaWdodDogODAwcHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cDovL2NiZ2FtZXMuY29tLnVhL2ltYWdlL2NhY2hlLzUwMC01MDAvZGF0YS9jYmcvc3Vrbm8uanBnJyk7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuXG5cbi5wbGF5ZXJzIHtcblxuICB3aWR0aDogMzAwcHg7XG4gIGhlaWdodDogMzAwcHg7XG4gICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTI0LCAyMTgsIDEyOSwgMC40KTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbn1cblxuLnBsYXllci1oYW5kIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7IFxuXG4gIHdpZHRoOiAxMDAlO1xufVxuXG5cblxuXG5cblxuXG5cbi5jb21wLXNpZGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogOTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ueW91LXNpZGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogOTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uY2VudGVyLXRhYmxlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIHdpZHRoOiAxMDAlO1xuICB0b3A6IDUwJTtcbn1cblxuYnV0dG9uIHtcbiAgaGVpZ2h0OiA3MHB4O1xuICB3aWR0aDogMTMwcHg7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XG4gIG1hcmdpbi1yaWdodDogMzBweDtcbn1cblxuaW1nIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogMTAwcHg7XG5cbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLnRvdGFsLFxuLmNvbXAtcmVzdWx0LFxuLnNjb3JlIHtcbiAgZm9udC1zaXplOiA1MnB4O1xuICBjb2xvcjogYmxhY2s7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTYzLCAxNjMsIDE2MywgMC40MzgpO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuXG4uY29tcC1yZXN1bHQge1xuICBtYXJnaW4tbGVmdDogMjBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/game/field/field.component.html":
/*!*************************************************!*\
  !*** ./src/app/game/field/field.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"table\" *ngIf=\"activeRoom\">\n\n  <div class=\"players\" *ngFor=\"let player of activeRoom.players\">\n    <h3>Player Name: {{ player.name }}</h3>\n    <h3>Player wins: {{ player.wins }} loses: {{ player.loses }}</h3>\n    <h3>Player Master: {{ player.playerMaster }}</h3>\n    <h3 *ngIf=\"user.id === player.id || !activeRoom.started\">You Score: {{ player.sum }}</h3>\n\n    <div class=\"player-hand\">\n      <img *ngFor=\"let card of player.hand\" [src]=\"card.src\">\n    </div>\n\n  </div>\n\n\n\n\n<!-- player.id === dataBaseService.userId -->\n    <!-- <div class=\"comp-side\" *ngFor=\"let player of activeRoomPlayers\">\n      {{player.name}}\n      <div *ngFor=\"let card of fieldResult.computer.hand\">\n        <img [src]=\"card.src\">\n      </div>\n    </div>\n\n    <div class=\"center-table\">\n      <button *ngIf=\"!fieldResult.isShowResult\"\n              type=\"button\"\n              class=\"input-button4\"\n              (click)=\"this.getPlayer.emit()\">\n        Взять\n      </button>\n\n      <span class=\"total\">\n        You score: {{ fieldResult.player.sum }}\n      </span>\n\n      <span *ngIf=\"fieldResult.isShowResult\"\n            class=\"comp-result\">\n        Comp score:{{ fieldResult.computer.sum }}\n      </span>\n\n      <button *ngIf=\"!fieldResult.isShowResult\"\n              type=\"button\"\n              class=\"input-button4\"\n              (click)=\"this.finishGame.emit()\">\n        ВСЁ\n      </button>\n    </div>\n\n    <div class=\"you-side\">\n      <div *ngFor=\"let card of fieldResult.player.hand\">\n        <img [src]=\"card.src\">\n      </div>\n    </div> -->\n</section>\n"

/***/ }),

/***/ "./src/app/game/field/field.component.ts":
/*!***********************************************!*\
  !*** ./src/app/game/field/field.component.ts ***!
  \***********************************************/
/*! exports provided: FieldComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldComponent", function() { return FieldComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_base_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/data-base.service */ "./src/app/services/data-base.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FieldComponent = /** @class */ (function () {
    function FieldComponent(dataBaseService) {
        this.dataBaseService = dataBaseService;
        this.youTurn = false;
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FieldComponent.prototype, "activeRoom", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FieldComponent.prototype, "user", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], FieldComponent.prototype, "youTurn", void 0);
    FieldComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-field',
            template: __webpack_require__(/*! ./field.component.html */ "./src/app/game/field/field.component.html"),
            styles: [__webpack_require__(/*! ./field.component.css */ "./src/app/game/field/field.component.css")]
        }),
        __metadata("design:paramtypes", [_services_data_base_service__WEBPACK_IMPORTED_MODULE_1__["DataBaseService"]])
    ], FieldComponent);
    return FieldComponent;
}());



/***/ }),

/***/ "./src/app/game/game.component.css":
/*!*****************************************!*\
  !*** ./src/app/game/game.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dhbWUvZ2FtZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/game/game.component.html":
/*!******************************************!*\
  !*** ./src/app/game/game.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-score [activeRoom] = \"activeRoom\"\n           [user] = \"user\"\n           [message] = \"message\"\n           (userReady)=\"userReady()\"\n           [youTurn]=\"youTurn\"\n           [finish]=\"finish\"\n           (getPlayer)=\"getYou()\"\n           (enoughGame)=\"enoughGame()\"\n           (finishGame)=\"finish()\"\n           (addBots)=\"addBots()\"\n           (deleteBots)=\"deleteBots()\"\n           >\n</app-score>\n\n<app-field [activeRoom]=\"activeRoom\"\n           [user] = \"user\"\n           [youTurn]=\"youTurn\">\n</app-field>\n"

/***/ }),

/***/ "./src/app/game/game.component.ts":
/*!****************************************!*\
  !*** ./src/app/game/game.component.ts ***!
  \****************************************/
/*! exports provided: GameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameComponent", function() { return GameComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_base_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/data-base.service */ "./src/app/services/data-base.service.ts");
/* harmony import */ var _services_game_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/game.service */ "./src/app/services/game.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var GameComponent = /** @class */ (function () {
    function GameComponent(_gameService, _dataBaseService, _userService, _route, _router) {
        this._gameService = _gameService;
        this._dataBaseService = _dataBaseService;
        this._userService = _userService;
        this._route = _route;
        this._router = _router;
        this.message = 'Welcome to game';
        this._destroy$$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.youTurn = false;
        this._CONDITIONS_COMPUTER_DRAW = 15;
    }
    GameComponent.prototype.ngOnInit = function () {
        var _this = this;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])(this._userService.getUser$(), this._route.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["pluck"])('id'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(Number)))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (_a) {
            var user = _a[0], id = _a[1];
            _this.user = user;
            return _this._dataBaseService.getRoom$(id);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (room) {
            if (room) {
                var userInRoom = false;
                if (room.players) {
                    userInRoom = Object.values(room.players).some(function (player) { return (_this.user.id === player.id); });
                }
                if (!userInRoom && room.players
                    && Object.values(room.players).length >= room.maxplayers) {
                    alert('This room is full');
                    _this._router.navigate(['/multiplayer']);
                    return false;
                }
                if (!room.players) {
                    _this.user.playerMaster = true;
                    _this.user.turn = true;
                }
                if (!userInRoom) {
                    _this._dataBaseService.addPlayerToRoom(room.id, _this.user);
                    return false;
                }
                return true;
            }
            else {
                alert('This room is not correct');
                _this._router.navigate(['/multiplayer']);
                return false;
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this._destroy$$))
            .subscribe(function (room) {
            _this.activeRoom = room;
            if (!_this.activeRoom.players) {
                _this.activeRoom.players = [];
            }
            _this.activeRoom.players = Object.values(room.players);
            _this.activeRoom.players.forEach(function (player) {
                if (!_this.activeRoom.started && player.hand) {
                    player.hand.map(function (card) { card.src = "./assets/img/" + card.name + card.suits + ".png"; });
                }
                if (player.id === _this.user.id) {
                    _this.user = player;
                    _this.youTurn = player.turn;
                }
                if (player.id === _this.user.id && player.turn) {
                    _this.user = player;
                    if (!_this.user.enough) {
                        _this.youTurn = _this.user.turn;
                    }
                    else {
                        _this.youTurn = false;
                        _this.setNextTurn(_this.user.id);
                    }
                }
                if (_this.user.hand) {
                    _this.user.hand.map(function (card) { card.src = "./assets/img/" + card.name + card.suits + ".png"; });
                }
                if (player.isBot && player.turn && _this.user.playerMaster && !player.enough) {
                    _this._botTurn(player.id);
                }
                if (player.isBot && player.turn && _this.user.playerMaster && player.enough) {
                    _this.setNextTurn(player.id);
                }
            });
            var allActive = _this.activeRoom.players.every(function (player) { return player.isActive; });
            if (allActive && !_this.activeRoom.started) {
                _this.startGame();
            }
            var allFinish = _this.activeRoom.players.every(function (player) { return player.enough; });
            if (allFinish && _this.activeRoom.started) {
                _this.finish();
            }
        });
    };
    GameComponent.prototype._botTurn = function (botId) {
        var bot;
        this.activeRoom.players.forEach(function (player) { if (player.id === botId) {
            bot = player;
        } });
        if (bot.sum < this._CONDITIONS_COMPUTER_DRAW) {
            var oneCard = this.activeRoom.deck[this.activeRoom.deck.length - 1];
            if (!bot.hand) {
                bot.hand = [];
            }
            bot.hand.push(oneCard);
            bot.sum += this.activeRoom.deck[this.activeRoom.deck.length - 1].value;
            this.activeRoom.deck.pop();
            this._dataBaseService.savePlayerScore(this.activeRoom.id, bot.id, bot.sum);
            this._dataBaseService.pushDeck(this.activeRoom.id, this.activeRoom.deck);
            this._dataBaseService.pushHandCard(this.activeRoom.id, bot.id, bot.hand);
            this.setNextTurn(bot.id);
        }
        else {
            this._dataBaseService.setEnoughDraw(this.activeRoom.id, bot.id, true);
            this.setNextTurn(bot.id);
        }
    };
    GameComponent.prototype.addBots = function () {
        var date = new Date();
        var components = [
            date.getMonth(),
            date.getDate(),
            date.getHours(),
            date.getMinutes(),
            date.getSeconds(),
            date.getMilliseconds()
        ];
        var botId = Number(components.join(''));
        var newBot = {
            name: "Bot " + botId,
            pass: '',
            id: botId,
            wins: 0,
            loses: 0,
            isActive: true,
            playerMaster: false,
            sum: 0,
            isBot: true,
            turn: false,
            enough: false
        };
        this._dataBaseService.addPlayerToRoom(this.activeRoom.id, newBot);
    };
    GameComponent.prototype.deleteBots = function () {
        for (var i = 0; i < this.activeRoom.players.length; i++) {
            if (this.activeRoom.players[i].isBot) {
                this._dataBaseService.removeUserFromRoom(this.activeRoom.id, this.activeRoom.players[i].id);
                break;
            }
        }
    };
    GameComponent.prototype.enoughGame = function () {
        this._dataBaseService.changeTurn(this.activeRoom.id, this.user.id, false);
        this._dataBaseService.setEnoughDraw(this.activeRoom.id, this.user.id, true);
        this.setNextTurn(this.user.id);
    };
    GameComponent.prototype.userReady = function () {
        this.user.isActive = !this.user.isActive;
        this._dataBaseService.playerReady(this.activeRoom.id, this.user.id, this.user.isActive);
    };
    GameComponent.prototype.startGame = function () {
        var _this = this;
        if (this.user.playerMaster) {
            this._dataBaseService.changeTurn(this.activeRoom.id, this.user.id, true);
            this.activeRoom.players.forEach(function (player) {
                if (player.isBot) {
                    _this._dataBaseService.setEnoughDraw(_this.activeRoom.id, player.id, false);
                }
            });
            this._dataBaseService.gameStarted(this.activeRoom.id, true);
            this.activeRoom.deck = this._gameService.generateDeck();
            this.activeRoom.deck = this._gameService.deckSort(this.activeRoom.deck);
            this.activeRoom.players.forEach(function (player) {
                var oneCard = _this.activeRoom.deck[_this.activeRoom.deck.length - 1];
                _this._dataBaseService.pushHandCard(_this.activeRoom.id, player.id, [oneCard]);
                _this._dataBaseService.savePlayerScore(_this.activeRoom.id, player.id, oneCard.value);
                _this.activeRoom.deck.pop();
            });
            this._dataBaseService.pushDeck(this.activeRoom.id, this.activeRoom.deck);
        }
        else {
            this._dataBaseService.changeTurn(this.activeRoom.id, this.user.id, false);
        }
    };
    GameComponent.prototype.getYou = function () {
        this._dataBaseService.changeTurn(this.activeRoom.id, this.user.id, false);
        var oneCard = this.activeRoom.deck[this.activeRoom.deck.length - 1];
        this.user.hand.push(oneCard);
        this.user.sum += this.activeRoom.deck[this.activeRoom.deck.length - 1].value;
        this.activeRoom.deck.pop();
        this._dataBaseService.savePlayerScore(this.activeRoom.id, this.user.id, this.user.sum);
        this._dataBaseService.pushDeck(this.activeRoom.id, this.activeRoom.deck);
        this.user.hand.map(function (card) { card.src = "./assets/img/outside.png"; });
        this._dataBaseService.pushHandCard(this.activeRoom.id, this.user.id, this.user.hand);
        this.user.hand.map(function (card) { card.src = "./assets/img/" + card.name + card.suits + ".png"; });
        if (this.user.sum > 21) {
            this.message = 'You have too much';
            this._dataBaseService.setEnoughDraw(this.activeRoom.id, this.user.id, true);
            this.setNextTurn(this.user.id);
            return;
        }
        this.setNextTurn(this.user.id);
    };
    GameComponent.prototype.setNextTurn = function (playerId) {
        var _this = this;
        var count;
        this.activeRoom.players.forEach(function (user, index) {
            if (user.id === playerId) {
                count = index;
                user.turn = false;
                _this._dataBaseService.changeTurn(_this.activeRoom.id, user.id, false);
            }
        });
        count++;
        if (this.activeRoom.players.length <= count) {
            count = 0;
        }
        this._dataBaseService.changeTurn(this.activeRoom.id, this.activeRoom.players[count].id, true);
    };
    GameComponent.prototype.finish = function () {
        var _this = this;
        this.user.isActive = false;
        this.message = 'Winner/s: ';
        this.youTurn = false;
        this._dataBaseService.playerReady(this.activeRoom.id, this.user.id, this.user.isActive);
        this._dataBaseService.gameStarted(this.activeRoom.id, false);
        this._dataBaseService.changeTurn(this.activeRoom.id, this.user.id, false);
        this._dataBaseService.setEnoughDraw(this.activeRoom.id, this.user.id, false);
        var maxScore = 0;
        this.activeRoom.players.forEach(function (player) {
            if (player.sum > maxScore && player.sum <= 21) {
                maxScore = player.sum;
            }
        });
        this.activeRoom.players.forEach(function (player) {
            if (player.sum === maxScore) {
                _this.message += " " + player.name + " ";
                _this._dataBaseService.updateScore(_this.activeRoom.id, player.id, 'wins', player.wins + 1);
            }
            else {
                _this._dataBaseService.updateScore(_this.activeRoom.id, player.id, 'loses', player.loses + 1);
            }
        });
    };
    GameComponent.prototype.ngOnDestroy = function () {
        this._destroy$$.next();
        if (this.user.playerMaster && this.activeRoom.players !== undefined) {
            var players = this.activeRoom.players;
            for (var index = 0; index < players.length; index++) {
                if (!players[index].playerMaster && !players[index].isBot) {
                    this._dataBaseService.setPlayerMaster(this.activeRoom.id, players[index].id);
                    break;
                }
            }
        }
        this.user.turn = false;
        this.user.hand = [];
        this.user.isActive = false;
        this.user.playerMaster = false;
        this.user.sum = 0;
        this._userService.setUser(this.user);
        this._dataBaseService.removeUserFromRoom(this.activeRoom.id, this.user.id);
    };
    GameComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-game',
            template: __webpack_require__(/*! ./game.component.html */ "./src/app/game/game.component.html"),
            styles: [__webpack_require__(/*! ./game.component.css */ "./src/app/game/game.component.css")]
        }),
        __metadata("design:paramtypes", [_services_game_service__WEBPACK_IMPORTED_MODULE_2__["GameService"],
            _services_data_base_service__WEBPACK_IMPORTED_MODULE_1__["DataBaseService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], GameComponent);
    return GameComponent;
}());

//   this._dataBaseService.setEnoughDraw(false);
//   if (this._dataBaseService.activeUser && this._dataBaseService.activeUser.playerMaster) {
//     this._deck = this._gameService.generateDeck();
//     this._deck = this._gameService.deckSort(this._deck);
//     this._dataBaseService.pushDeck(this._deck);
//   }
//   if (this._dataBaseService.activeUser.playerMaster) {
//     this._dataBaseService.changeTurn(this._dataBaseService.activeUser.id, true);
//   }
//   this._dataBaseService.getRoom$(this._dataBaseService.activeRoomId)
//     .pipe(
//       takeUntil(this.destroy$$))
//     .subscribe((room: TRoom) => {
//       this._deck = room.deck;
//       this._order = Object.values(room.order);
//       this._order.forEach((playerInOrder: TOrder) => {
//         if (playerInOrder.id === this._dataBaseService.activeUser.id) {
//           this.youTurn = playerInOrder.turn;
//         }
//         this.activeRoom = room;
//         this.activeRoom.players = Object.values(room.players);
//         this.activeRoom.players.map((player: TPlayer) => {
//           if (player.id === this._dataBaseService.activeUser.id || this.finish) {
//             if (player.hand !== undefined) {
//               player.hand.map((card: TCard) => { card.src = `../assets/img/${card.name}${card.suits}.png`; });
//             }
//           }
//         });
//       });
//       this.finish = this._order.every((order: TOrder) => {
//         if (order.enough) {
//           return true;
//         } else {
//           return false;
//         }
//       });
//       if (this.finish) {
//         if (this.youTurn) {
//           this.finishGame();
//         }
//         return;
//       }
//       if (this.enough) {
//         this.setNextTurn();
//       }
//     });
//   }
// public ngOnDestroy(): void {
//   this.destroy$$.next();
//   this._dataBaseService.deleteHandCards();
//   this._dataBaseService.savePlayerScore(0);
// }
// public finishGame(): void {
//   this.destroy$$.next();
//   const winners: TPlayer[] = [];
//   let maxScore: number = 0;
//   this.activeRoom.players.forEach((player: TPlayer) => {
//     if (player.sum > maxScore && player.sum <= 21) {
//       maxScore = player.sum;
//     }
//   });
//   this.activeRoom.players.forEach((player: TPlayer) => {
//     if (player.sum === maxScore) {
//       winners.push(player);
//     }
//   });
//   winners.forEach((winner: TPlayer) => { alert('Winner ' + winner.name); });
//   this.youTurn = false;
//   this._dataBaseService.playerUnready(this.activeRoom.id);
// }
//   if (!this._firstGame) {
//     this.finish();
//   }
//   this.scoreResult.message = 'Welcome to game';
//   this._firstGame = false;
//   this.player.hand.map((card: TCard) => { card.src = `../assets/img/outside.png`; });
//   this.computer.hand.map((card: TCard) => { card.src = `../assets/img/outside.png`; });
//   this.fieldResult.isShowResult = false;
//   this._deck = this._deck.concat(this.player.hand);
//   this._deck = this._deck.concat(this.computer.hand);
//   this.player.hand = [];
//   this.player.sum = 0;
//   this.computer.hand = [];
//   this.computer.sum = 0;
//   this._deck = this._gameService.deckSort(this._deck);
//   this.getYou();
// }
// public finish(): void  {
//   if (this.computer.sum <= this._CONDITIONS_COMPUTER_DRAW) {
//     this._getComp();
//   }
//   this.computer.hand.map((card: TCard) => { card.src = `../assets/img/${card.name}${card.suits}.png`; });
//   this.fieldResult.isShowResult = true;
//    const winner: TPlayer = this._gameService.getWinner(this.computer, this.player);
//    if (winner === this.player) {
//     this.scoreResult.message = 'YOU WIN!!!!! WINNER!!!';
//     this.player.numberWins++;
//     return;
//    }
//    if (winner === this.computer) {
//     this.scoreResult.message = 'YOU LOSE!!!!! LOSER!!!';
//     this.computer.numberWins++;
//     return;
//    }
//    this.scoreResult.message = 'DRAW!';
// }
// private _getComp(): void {
//   if (this.computer.sum <= this._CONDITIONS_COMPUTER_DRAW) {
//     this.computer.hand.push(this._deck[this._deck.length - 1]);
//     this._deck.pop();
//     this.computer.sum += this.computer.hand[this.computer.hand.length - 1].value;
//   }
//   if (this.computer.sum > this._CONDITIONS_WIN) {
//     this.finish();
//   }
// }


/***/ }),

/***/ "./src/app/game/score/score.component.css":
/*!************************************************!*\
  !*** ./src/app/game/score/score.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".score {\n  font-size: 30px;\n  color: black;\n  background-color: rgba(163, 163, 163, 0.438);\n  border-radius: 20px;\n}\n\n.score,\n.score-container {\n  margin: auto;\n  text-align: center;\n}\n\n.score-container {\n  background-color: grey;\n}\n\nbutton {\n  height: 50px;\n  width: 130px;\n  font-size: 20px;\n  margin-left: 30px;\n  margin-right: 30px;\n}\n\na {\n  font-size: 33px;\n}\n\n.master {\n  color:red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZS9zY29yZS9zY29yZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYiw2Q0FBNkM7RUFDN0Msb0JBQW9CO0NBQ3JCOztBQUVEOztFQUVFLGFBQWE7RUFDYixtQkFBbUI7Q0FDcEI7O0FBRUQ7RUFDRSx1QkFBdUI7Q0FDeEI7O0FBRUQ7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsbUJBQW1CO0NBQ3BCOztBQUVEO0VBQ0UsZ0JBQWdCO0NBQ2pCOztBQUVEO0VBQ0UsVUFBVTtDQUNYIiwiZmlsZSI6InNyYy9hcHAvZ2FtZS9zY29yZS9zY29yZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNjb3JlIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBjb2xvcjogYmxhY2s7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTYzLCAxNjMsIDE2MywgMC40MzgpO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuXG4uc2NvcmUsXG4uc2NvcmUtY29udGFpbmVyIHtcbiAgbWFyZ2luOiBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zY29yZS1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xufVxuXG5idXR0b24ge1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiAxMzBweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBtYXJnaW4tbGVmdDogMzBweDtcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xufVxuXG5hIHtcbiAgZm9udC1zaXplOiAzM3B4O1xufVxuXG4ubWFzdGVyIHtcbiAgY29sb3I6cmVkO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/game/score/score.component.html":
/*!*************************************************!*\
  !*** ./src/app/game/score/score.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"score-container\">\n  <a routerLink=\"/multiplayer\">\n    Return to multiplayer menu.\n  </a>\n  <div class=\"score\" *ngIf=\"activeRoom\">\n    Players in room: <span *ngFor=\"let player of activeRoom.players\" [class.master]=\"player.playerMaster\">{{player.name}} {{player.isActive}} / </span>\n  </div>\n  <div class=\"score\" *ngIf=\"activeRoom\">\n    ID ROOM:{{ activeRoom.id }} Max players: {{ activeRoom.maxplayers}}\n</div>\n\n  <div class=\"score\">\n      {{ message }}\n    </div> \n <div> \n   <button *ngIf=\"activeRoom && !activeRoom.started && activeRoom.players && activeRoom.players.length > 1\" (click)=\"ready()\"> Ready {{user.isActive}}</button>\n   <button *ngIf=\"activeRoom && !activeRoom.started && user.playerMaster\" (click)=\"addBot()\"> Add bot</button>\n   <button *ngIf=\"activeRoom && !activeRoom.started && user.playerMaster\" (click)=\"deleteBot()\"> Delete bot</button>\n   <button type=\"button\" *ngIf=\"activeRoom && activeRoom.started \" [disabled]=\"!youTurn\"  (click)=\"this.getPlayer.emit()\">Get Card</button>\n   <button type=\"button\" *ngIf=\"activeRoom && activeRoom.started \" [disabled]=\"!youTurn\"  (click)=\"this.enoughGame.emit()\">Enough!</button>\n</div>\n\n  <div class=\"score\" *ngIf=\"activeRoom && user.isActive && !activeRoom.started\">\n      READY!!!\n    </div> \n  <div class=\"score\">\n    Wins:{{ user.wins }} Loses:{{ user.loses }}\n  </div>\n  <div class=\"score\" *ngIf=\"youTurn\">\n      YOU TURN!!!\n  </div> \n\n<!-- \n\n  <div class=\"score\" *ngIf=\"youTurn\">\n    YOU TURN!!!\n</div> -->\n\n  <!-- <button type=\"button\"\n          class=\"input-button4\"\n          (click)=\"startNewGame()\">\n    New Game\n  </button> -->\n</div>\n"

/***/ }),

/***/ "./src/app/game/score/score.component.ts":
/*!***********************************************!*\
  !*** ./src/app/game/score/score.component.ts ***!
  \***********************************************/
/*! exports provided: ScoreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScoreComponent", function() { return ScoreComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_data_base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/data-base.service */ "./src/app/services/data-base.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ScoreComponent = /** @class */ (function () {
    function ScoreComponent(_dataBaseService, router) {
        this._dataBaseService = _dataBaseService;
        this.router = router;
        //  @Input() public activeRoom: {} = {id : 0};
        this.youTurn = false;
        this.finish = false;
        //  @Input() public roomId: number;
        this.getPlayer = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];
        this.finishGame = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];
        this.enoughGame = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];
        this.userReady = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];
        this.addBots = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];
        this.deleteBots = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];
    }
    ScoreComponent.prototype.ready = function () {
        this.userReady.emit();
    };
    ScoreComponent.prototype.addBot = function () {
        this.addBots.emit();
    };
    ScoreComponent.prototype.deleteBot = function () {
        this.deleteBots.emit();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ScoreComponent.prototype, "activeRoom", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ScoreComponent.prototype, "user", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ScoreComponent.prototype, "message", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], ScoreComponent.prototype, "youTurn", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], ScoreComponent.prototype, "finish", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ScoreComponent.prototype, "getPlayer", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ScoreComponent.prototype, "finishGame", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ScoreComponent.prototype, "enoughGame", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ScoreComponent.prototype, "userReady", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ScoreComponent.prototype, "addBots", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ScoreComponent.prototype, "deleteBots", void 0);
    ScoreComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-score',
            template: __webpack_require__(/*! ./score.component.html */ "./src/app/game/score/score.component.html"),
            styles: [__webpack_require__(/*! ./score.component.css */ "./src/app/game/score/score.component.css")]
        }),
        __metadata("design:paramtypes", [_services_data_base_service__WEBPACK_IMPORTED_MODULE_2__["DataBaseService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ScoreComponent);
    return ScoreComponent;
}());



/***/ }),

/***/ "./src/app/guards/user.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/user.guard.ts ***!
  \**************************************/
/*! exports provided: UserGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserGuard", function() { return UserGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserGuard = /** @class */ (function () {
    function UserGuard(_userService, _router) {
        this._userService = _userService;
        this._router = _router;
    }
    UserGuard.prototype.canActivate = function () {
        var _this = this;
        return this._userService.getUser$()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (user) {
            if (!user) {
                _this._router.navigate(['/intro']);
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(Boolean));
    };
    UserGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], UserGuard);
    return UserGuard;
}());



/***/ }),

/***/ "./src/app/intro/intro.component.css":
/*!*******************************************!*\
  !*** ./src/app/intro/intro.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper {\n  display: flex;\n  justify-content: center;\n  font-size: 30px;\n  flex-direction: column;\n  align-items: center;\n}\n\n.welcome {\nmargin-bottom: 20px;\n}\n\ninput {\n  font-size: 30px;\n  margin-bottom: 30px;\n}\n\nbutton {\n  width: 300px;\n  height: 70px;\n  font-size: 30px;\n}\n\n.userList {\n  border: 1px solid black;\n  \n  margin: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW50cm8vaW50cm8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCx3QkFBd0I7RUFDeEIsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixvQkFBb0I7Q0FDckI7O0FBRUQ7QUFDQSxvQkFBb0I7Q0FDbkI7O0FBRUQ7RUFDRSxnQkFBZ0I7RUFDaEIsb0JBQW9CO0NBQ3JCOztBQUNEO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYixnQkFBZ0I7Q0FDakI7O0FBRUQ7RUFDRSx3QkFBd0I7O0VBRXhCLGFBQWE7Q0FDZCIsImZpbGUiOiJzcmMvYXBwL2ludHJvL2ludHJvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXNpemU6IDMwcHg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi53ZWxjb21lIHtcbm1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbmlucHV0IHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuYnV0dG9uIHtcbiAgd2lkdGg6IDMwMHB4O1xuICBoZWlnaHQ6IDcwcHg7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cblxuLnVzZXJMaXN0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIFxuICBtYXJnaW46IDEwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/intro/intro.component.html":
/*!********************************************!*\
  !*** ./src/app/intro/intro.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <div class=\"welcome\">Welcome to Black Jack!!!</div>\n  <input type=\"text\"  placeholder=\"Enter your name\" [(ngModel)]=\"userName\">\n  <input type=\"text\" *ngIf=\"users\" placeholder=\"Enter your password\" [(ngModel)]=\"userPassword\">\n  <button type=\"button\" (click)=\"enter()\">Enter</button>\n  <div *ngFor=\"let user of users\" class=\"userList\">\n    <h4>User name: {{user.name}}</h4>\n    <p>User wins: {{user.wins}}</p>\n    <p>User loses: {{user.loses}}</p>\n    <button type=\"button\" (click)=selectUser(user.name)>select user</button>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/intro/intro.component.ts":
/*!******************************************!*\
  !*** ./src/app/intro/intro.component.ts ***!
  \******************************************/
/*! exports provided: IntroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroComponent", function() { return IntroComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_base_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/data-base.service */ "./src/app/services/data-base.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var IntroComponent = /** @class */ (function () {
    function IntroComponent(_dataBaseService, _userService, router) {
        this._dataBaseService = _dataBaseService;
        this._userService = _userService;
        this.router = router;
        this.destroy$$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    IntroComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._dataBaseService.getUsers().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroy$$))
            .subscribe(function (users) {
            _this.users = users;
        });
    };
    IntroComponent.prototype.enter = function () {
        var _this = this;
        if (this.userName === undefined || this.userName === '' || this.userPassword === undefined || this.userPassword === '') {
            alert('Enter name and password!!');
            return;
        }
        var saveUser;
        var existUser = this.users.some(function (user) {
            if (user.name === _this.userName) {
                saveUser = user;
                return true;
            }
        });
        if (existUser) {
            if (saveUser.pass === this.userPassword) {
                this._userService.setUser(saveUser);
                this.router.navigate(['/menu']);
                return;
            }
            else {
                alert('Password incorrect!');
                this.userPassword = '';
                return;
            }
        }
        var date = new Date();
        var components = [
            date.getMonth(),
            date.getDate(),
            date.getHours(),
            date.getMinutes(),
            date.getSeconds(),
            date.getMilliseconds()
        ];
        var userId = Number(components.join(''));
        var newUser = {
            name: this.userName,
            pass: this.userPassword,
            id: userId,
            wins: 0,
            loses: 0,
            isActive: false,
            playerMaster: false,
            sum: 0,
            isBot: false,
            turn: false,
            enough: false
        };
        this._dataBaseService.addUsers(newUser);
        this._userService.setUser(newUser);
        this.router.navigate(['/menu']);
    };
    IntroComponent.prototype.selectUser = function (userName) {
        this.userName = userName;
        this.userPassword = prompt("Enter password for " + this.userName);
        this.enter();
    };
    IntroComponent.prototype.ngOnDestroy = function () {
        this.destroy$$.next();
    };
    IntroComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-intro',
            template: __webpack_require__(/*! ./intro.component.html */ "./src/app/intro/intro.component.html"),
            styles: [__webpack_require__(/*! ./intro.component.css */ "./src/app/intro/intro.component.css")]
        }),
        __metadata("design:paramtypes", [_services_data_base_service__WEBPACK_IMPORTED_MODULE_1__["DataBaseService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], IntroComponent);
    return IntroComponent;
}());



/***/ }),

/***/ "./src/app/keys.pipe.ts":
/*!******************************!*\
  !*** ./src/app/keys.pipe.ts ***!
  \******************************/
/*! exports provided: KeysPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeysPipe", function() { return KeysPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var KeysPipe = /** @class */ (function () {
    function KeysPipe() {
    }
    KeysPipe.prototype.transform = function (value, args) {
        if (value !== undefined) {
            return Object.values(value);
        }
        return [];
    };
    KeysPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'keys'
        })
    ], KeysPipe);
    return KeysPipe;
}());



/***/ }),

/***/ "./src/app/menu/menu.component.css":
/*!*****************************************!*\
  !*** ./src/app/menu/menu.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper {\n  width: 100%;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: cadetblue;\n  flex-direction: column;\n}\n\nbutton {\n  width: 400px;\n  height: 200px;\n  font-size: 40px;\n}\n\n.meeting {\n  font-size: 55px;\n  margin-bottom: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS9tZW51LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osY0FBYztFQUNkLGNBQWM7RUFDZCx3QkFBd0I7RUFDeEIsb0JBQW9CO0VBQ3BCLDRCQUE0QjtFQUM1Qix1QkFBdUI7Q0FDeEI7O0FBRUQ7RUFDRSxhQUFhO0VBQ2IsY0FBYztFQUNkLGdCQUFnQjtDQUNqQjs7QUFFRDtFQUNFLGdCQUFnQjtFQUNoQixvQkFBb0I7Q0FDckIiLCJmaWxlIjoic3JjL2FwcC9tZW51L21lbnUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBjYWRldGJsdWU7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbmJ1dHRvbiB7XG4gIHdpZHRoOiA0MDBweDtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgZm9udC1zaXplOiA0MHB4O1xufVxuXG4ubWVldGluZyB7XG4gIGZvbnQtc2l6ZTogNTVweDtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/menu/menu.component.html":
/*!******************************************!*\
  !*** ./src/app/menu/menu.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <div class=\"meeting\">\n    Welcome to Black Jack\n  </div>\n\n<a routerLink=\"/game\" style=\"margin-bottom:20px\" >\n  <button type=\"button\">\n    To singlePlayer game\n  </button>\n</a>\n<a routerLink=\"/multiplayer\" >\n  <button type=\"button\">\n    To multiPlayer game\n  </button>\n</a>\n</div>\n"

/***/ }),

/***/ "./src/app/menu/menu.component.ts":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MenuComponent = /** @class */ (function () {
    function MenuComponent() {
    }
    MenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.css */ "./src/app/menu/menu.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/multiplayer-menu/multiplayer-menu.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/multiplayer-menu/multiplayer-menu.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  text-align: center;\n  background-color: green;\n  min-height: 900px;\n}\n\n.add-button { \n  height: 50px;\nwidth: 200px;\nfont-size: 20px;\nmargin: 20px auto 10px auto;\n}\n\n.wrapper-rooms{\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n\n}\n\n.room {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  height: 150px;\n  width: 300px;\n  background-color: grey;\n  margin: 20px;\n  border-radius: 10px;\n}\n\n#inputNewName { \n  font-size: 30px;\n  width: 300px;\n  margin: 0 auto 10px auto;\n}\n\nlabel{\n  font-size: 30px;\n}\n\n.wrapper-rooms button {\n  width: 100px;\n  margin: 10px auto 10px auto;\n\n}\n\n#maxPlayer {\n  font-size: 30px;\n  width: 40px;\n  margin: 0 auto 10px auto;\n}\n\n.add-room-menu {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXVsdGlwbGF5ZXItbWVudS9tdWx0aXBsYXllci1tZW51LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2Qsd0JBQXdCO0VBQ3hCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsd0JBQXdCO0VBQ3hCLGtCQUFrQjtDQUNuQjs7QUFFRDtFQUNFLGFBQWE7QUFDZixhQUFhO0FBQ2IsZ0JBQWdCO0FBQ2hCLDRCQUE0QjtDQUMzQjs7QUFFRDtFQUNFLGNBQWM7RUFDZCx3QkFBd0I7RUFDeEIsb0JBQW9CO0VBQ3BCLGdCQUFnQjs7Q0FFakI7O0FBRUQ7RUFDRSxjQUFjO0VBQ2Qsd0JBQXdCO0VBQ3hCLHVCQUF1QjtFQUN2QixjQUFjO0VBQ2QsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2Isb0JBQW9CO0NBQ3JCOztBQUVEO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYix5QkFBeUI7Q0FDMUI7O0FBRUQ7RUFDRSxnQkFBZ0I7Q0FDakI7O0FBRUQ7RUFDRSxhQUFhO0VBQ2IsNEJBQTRCOztDQUU3Qjs7QUFFRDtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1oseUJBQXlCO0NBQzFCOztBQUNEO0VBQ0UsY0FBYztFQUNkLHdCQUF3QjtFQUN4Qix1QkFBdUI7O0NBRXhCIiwiZmlsZSI6InNyYy9hcHAvbXVsdGlwbGF5ZXItbWVudS9tdWx0aXBsYXllci1tZW51LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xuICBtaW4taGVpZ2h0OiA5MDBweDtcbn1cblxuLmFkZC1idXR0b24geyBcbiAgaGVpZ2h0OiA1MHB4O1xud2lkdGg6IDIwMHB4O1xuZm9udC1zaXplOiAyMHB4O1xubWFyZ2luOiAyMHB4IGF1dG8gMTBweCBhdXRvO1xufVxuXG4ud3JhcHBlci1yb29tc3tcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtd3JhcDogd3JhcDtcblxufVxuXG4ucm9vbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IDE1MHB4O1xuICB3aWR0aDogMzAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XG4gIG1hcmdpbjogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuI2lucHV0TmV3TmFtZSB7IFxuICBmb250LXNpemU6IDMwcHg7XG4gIHdpZHRoOiAzMDBweDtcbiAgbWFyZ2luOiAwIGF1dG8gMTBweCBhdXRvO1xufVxuXG5sYWJlbHtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuXG4ud3JhcHBlci1yb29tcyBidXR0b24ge1xuICB3aWR0aDogMTAwcHg7XG4gIG1hcmdpbjogMTBweCBhdXRvIDEwcHggYXV0bztcblxufVxuXG4jbWF4UGxheWVyIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICB3aWR0aDogNDBweDtcbiAgbWFyZ2luOiAwIGF1dG8gMTBweCBhdXRvO1xufVxuLmFkZC1yb29tLW1lbnUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxufSJdfQ== */"

/***/ }),

/***/ "./src/app/multiplayer-menu/multiplayer-menu.component.html":
/*!******************************************************************!*\
  !*** ./src/app/multiplayer-menu/multiplayer-menu.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <button type=\"button\" (click)=\"isShowAddRoomMenu = !isShowAddRoomMenu\" class=\"add-button\">show/hide add room menu</button>\n\n  <div *ngIf=\"isShowAddRoomMenu\" class=\"add-room-menu\">\n    <label for=\"maxPlayer\">Max players: </label>\n    <input type=\"number\" min=\"2\" max=\"6\" autofocus placeholder=\"2\" id=\"maxPlayer\" [(ngModel)]=\"maxPlayers\">\n    <button type=\"button\" (click)=\"addNewRoom()\" class=\"add-button\">Create room</button>\n  </div>\n\n  <div class=\"wrapper-rooms\">\n    <div *ngFor=\"let room of rooms\" class=\"room\">\n      Number of room : {{ room.id }}\n      <div>maxplayers : {{ room.maxplayers }}</div>\n      <div>players in room : {{room | noUndef}} </div>\n      <button type=\"button\" (click)=\"deleteRoom(room.id)\"> Delete room </button>\n      <button type=\"button\" (click)=\"selectRoom(room.id)\"> Select room </button> \n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/multiplayer-menu/multiplayer-menu.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/multiplayer-menu/multiplayer-menu.component.ts ***!
  \****************************************************************/
/*! exports provided: MultiplayerMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiplayerMenuComponent", function() { return MultiplayerMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_base_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/data-base.service */ "./src/app/services/data-base.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MultiplayerMenuComponent = /** @class */ (function () {
    function MultiplayerMenuComponent(_dataBaseService, _userService, router) {
        this._dataBaseService = _dataBaseService;
        this._userService = _userService;
        this.router = router;
        this.isShowAddRoomMenu = false;
        this.maxPlayers = 2;
        this._destroy$$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    MultiplayerMenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._dataBaseService.getRooms()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this._destroy$$))
            .subscribe(function (rooms) {
            _this.rooms = rooms;
        });
        this._userService.getUser$()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this._destroy$$))
            .subscribe(function (user) {
            _this.user = user;
        });
    };
    MultiplayerMenuComponent.prototype.selectRoom = function (roomId) {
        var selectedRoom;
        this.rooms.forEach(function (room) {
            if (room.id === roomId) {
                selectedRoom = room;
            }
        });
        if (selectedRoom.players !== undefined && selectedRoom.maxplayers <= Object.keys(selectedRoom.players).length) {
            alert('Max players limit!!');
            return;
        }
        this.router.navigate(['/game', roomId]);
    };
    MultiplayerMenuComponent.prototype.addNewRoom = function () {
        var _newIdForNewRoom = 0;
        this.rooms.forEach(function (room) {
            if (room.id > _newIdForNewRoom) {
                _newIdForNewRoom = room.id;
            }
        });
        var newRoom = {
            id: ++_newIdForNewRoom,
            maxplayers: this.maxPlayers,
            players: [],
            order: {},
            started: false
        };
        this._dataBaseService.addNewRoom(newRoom);
        this.isShowAddRoomMenu = !this.isShowAddRoomMenu;
    };
    MultiplayerMenuComponent.prototype.deleteRoom = function (id) {
        var selectedRoom;
        this.rooms.forEach(function (room) {
            if (room.id === id) {
                selectedRoom = room;
            }
        });
        if (selectedRoom.players !== undefined) {
            alert('There are players in the room');
        }
        else {
            this._dataBaseService.deleteRoom(id);
        }
    };
    MultiplayerMenuComponent.prototype.ngOnDestroy = function () {
        this._destroy$$.next();
    };
    MultiplayerMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-multiplayer-menu',
            template: __webpack_require__(/*! ./multiplayer-menu.component.html */ "./src/app/multiplayer-menu/multiplayer-menu.component.html"),
            styles: [__webpack_require__(/*! ./multiplayer-menu.component.css */ "./src/app/multiplayer-menu/multiplayer-menu.component.css")]
        }),
        __metadata("design:paramtypes", [_services_data_base_service__WEBPACK_IMPORTED_MODULE_1__["DataBaseService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], MultiplayerMenuComponent);
    return MultiplayerMenuComponent;
}());



/***/ }),

/***/ "./src/app/no-undef.pipe.ts":
/*!**********************************!*\
  !*** ./src/app/no-undef.pipe.ts ***!
  \**********************************/
/*! exports provided: NoUndefPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoUndefPipe", function() { return NoUndefPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NoUndefPipe = /** @class */ (function () {
    function NoUndefPipe() {
    }
    NoUndefPipe.prototype.transform = function (room, args) {
        if (room.players === undefined) {
            return 0;
        }
        return Object.keys(room.players).length;
    };
    NoUndefPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'noUndef'
        })
    ], NoUndefPipe);
    return NoUndefPipe;
}());



/***/ }),

/***/ "./src/app/services/data-base.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/data-base.service.ts ***!
  \***********************************************/
/*! exports provided: DataBaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataBaseService", function() { return DataBaseService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataBaseService = /** @class */ (function () {
    // public activeUser: TPlayer = null;
    // public activeRoomId: number = null;
    // public playerMaster: boolean = false;
    // public userName: string = 'Anonimus';
    // public userId: number = null;
    // public isMultiplayer: boolean = false;
    function DataBaseService(dataBase, _userService) {
        this.dataBase = dataBase;
        this._userService = _userService;
    }
    DataBaseService.prototype.addNewRoom = function (newRoom) {
        this.dataBase.list('rooms').update('room' + newRoom.id, newRoom);
    };
    DataBaseService.prototype.deleteRoom = function (id) {
        this.dataBase.list('rooms').remove('room' + id);
    };
    DataBaseService.prototype.getRooms = function () {
        return this.dataBase.list('rooms').valueChanges();
    };
    DataBaseService.prototype.addPlayerToRoom = function (roomId, player) {
        this.dataBase.object("/rooms/room" + roomId + "/players/" + player.id).update(player);
    };
    DataBaseService.prototype.getUsers = function () {
        return this.dataBase.list("/users").valueChanges();
    };
    DataBaseService.prototype.addUsers = function (newUser) {
        this.dataBase.object("/users/" + newUser.id).update(newUser);
    };
    DataBaseService.prototype.getRoom$ = function (id) {
        return this.dataBase.object("/rooms/room" + id).valueChanges();
    };
    DataBaseService.prototype.setPlayerMaster = function (roomId, userId) {
        this.dataBase.object("/rooms/room" + roomId + "/players/" + userId).update({ playerMaster: true, turn: true });
    };
    DataBaseService.prototype.playerReady = function (roomId, userId, ready) {
        this.dataBase.object("/rooms/room" + roomId + "/players/" + userId).update({ isActive: ready });
    };
    DataBaseService.prototype.pushDeck = function (roomId, deck) {
        this.dataBase.object("/rooms/room" + roomId + "/deck").set(deck);
    };
    DataBaseService.prototype.pushHandCard = function (roomID, userId, hand) {
        this.dataBase.object("/rooms/room" + roomID + "/players/" + userId + "/hand").set(hand);
    };
    DataBaseService.prototype.savePlayerScore = function (roomID, userId, score) {
        this.dataBase.object("/rooms/room" + roomID + "/players/" + userId).update({ sum: score });
    };
    DataBaseService.prototype.gameStarted = function (roomID, status) {
        this.dataBase.object("/rooms/room" + roomID + "/").update({ started: status });
    };
    DataBaseService.prototype.setEnoughDraw = function (roomId, userId, status) {
        this.dataBase.object("/rooms/room" + roomId + "/players/" + userId).update({ enough: status });
    };
    DataBaseService.prototype.changeTurn = function (roomId, userId, status) {
        this.dataBase.object("/rooms/room" + roomId + "/players/" + userId).update({ turn: status });
    };
    DataBaseService.prototype.removeUserFromRoom = function (roomId, userId) {
        this.dataBase.object("/rooms/room" + roomId + "/players/" + userId).remove();
    };
    DataBaseService.prototype.updateScore = function (roomId, userId, field, amount) {
        var _a;
        this.dataBase.object("/rooms/room" + roomId + "/players/" + userId).update((_a = {}, _a[field] = amount, _a));
    };
    DataBaseService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [angularfire2_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"],
            _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], DataBaseService);
    return DataBaseService;
}());



/***/ }),

/***/ "./src/app/services/game.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/game.service.ts ***!
  \******************************************/
/*! exports provided: GameService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameService", function() { return GameService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var GameService = /** @class */ (function () {
    function GameService() {
        this._NUMBER_OF_SORT = 36;
        this._CONDITIONS_WIN = 21;
    }
    GameService.prototype.generateDeck = function () {
        var suits = ['♠', '♥', '♣', '♦'];
        var cards = [{ name: 'T', value: 11, suits: null, src: null },
            { name: 'K', value: 4, suits: null, src: null },
            { name: 'D', value: 3, suits: null, src: null },
            { name: 'V', value: 2, suits: null, src: null }];
        var deck = [];
        for (var i = 6; i < 11; i++) {
            cards.push({ name: String(i), value: i, suits: null, src: null });
        }
        cards.forEach(function (card) {
            suits.forEach(function (suit) {
                deck.push({ name: card.name, value: card.value, suits: suit, src: "./assets/img/outside.png" });
            });
        });
        return deck;
    };
    GameService.prototype.deckSort = function (deck) {
        var firstElem = 0;
        var secondElem = 0;
        var change;
        for (var i = 0; i < this._NUMBER_OF_SORT; i++) {
            firstElem = Math.floor(Math.random() * deck.length);
            secondElem = Math.floor(Math.random() * deck.length);
            change = deck[firstElem];
            deck[firstElem] = deck[secondElem];
            deck[secondElem] = change;
        }
        return deck;
    };
    GameService.prototype.getWinner = function (computer, player) {
        if (computer.sum > this._CONDITIONS_WIN) {
            return player;
        }
        if (computer.sum === player.sum) {
            return;
        }
        if (computer.sum > player.sum || player.sum > this._CONDITIONS_WIN) {
            return computer;
        }
        return player;
    };
    GameService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], GameService);
    return GameService;
}());



/***/ }),

/***/ "./src/app/services/local-storage.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/local-storage.service.ts ***!
  \***************************************************/
/*! exports provided: LocalStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalStorageService", function() { return LocalStorageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LocalStorageService = /** @class */ (function () {
    function LocalStorageService() {
    }
    LocalStorageService.prototype.getItem = function (itemName) {
        return JSON.parse(localStorage.getItem(itemName));
    };
    LocalStorageService.prototype.setItem = function (itemName, item) {
        localStorage.setItem(itemName, JSON.stringify(item));
    };
    LocalStorageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], LocalStorageService);
    return LocalStorageService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _local_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./local-storage.service */ "./src/app/services/local-storage.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = /** @class */ (function () {
    function UserService(_localStorageService) {
        this._localStorageService = _localStorageService;
        this._user$$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"](1);
        this._user$$.next(this._localStorageService.getItem('BlackJack'));
    }
    UserService.prototype.setUser = function (user) {
        this._localStorageService.setItem('BlackJack', user);
        this._user$$.next(user);
    };
    UserService.prototype.getUser$ = function () {
        return this._user$$.asObservable();
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_local_storage_service__WEBPACK_IMPORTED_MODULE_1__["LocalStorageService"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyBEbR6t_GU9zlS3A6sX5MYRJuRdqrR_c-w",
        authDomain: "angular21multiplayer.firebaseapp.com",
        databaseURL: "https://angular21multiplayer.firebaseio.com",
        projectId: "angular21multiplayer",
        storageBucket: "angular21multiplayer.appspot.com",
        messagingSenderId: "362408993392"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/user/Work/testwork/Angular21/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map