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
    {
        path: '',
        redirectTo: '/intro',
        pathMatch: 'full'
    },
    {
        path: 'intro',
        component: _intro_intro_component__WEBPACK_IMPORTED_MODULE_6__["IntroComponent"]
    },
    {
        path: 'game/:id',
        component: _game_game_component__WEBPACK_IMPORTED_MODULE_2__["GameComponent"],
        canActivate: [_guards_user_guard__WEBPACK_IMPORTED_MODULE_7__["UserGuard"]]
    },
    {
        path: 'menu',
        component: _menu_menu_component__WEBPACK_IMPORTED_MODULE_3__["MenuComponent"],
        canActivate: [_guards_user_guard__WEBPACK_IMPORTED_MODULE_7__["UserGuard"]]
    },
    {
        path: 'multiplayer',
        component: _multiplayer_menu_multiplayer_menu_component__WEBPACK_IMPORTED_MODULE_4__["MultiplayerMenuComponent"],
        canActivate: [_guards_user_guard__WEBPACK_IMPORTED_MODULE_7__["UserGuard"]]
    },
    {
        path: '**',
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
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _game_score_score_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./game/score/score.component */ "./src/app/game/score/score.component.ts");
/* harmony import */ var _game_field_field_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./game/field/field.component */ "./src/app/game/field/field.component.ts");
/* harmony import */ var _game_game_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./game/game.component */ "./src/app/game/game.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./error/error.component */ "./src/app/error/error.component.ts");
/* harmony import */ var _intro_intro_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./intro/intro.component */ "./src/app/intro/intro.component.ts");
/* harmony import */ var _multiplayer_menu_multiplayer_menu_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./multiplayer-menu/multiplayer-menu.component */ "./src/app/multiplayer-menu/multiplayer-menu.component.ts");
/* harmony import */ var _services_game_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/game.service */ "./src/app/services/game.service.ts");
/* harmony import */ var _services_data_base_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/data-base.service */ "./src/app/services/data-base.service.ts");
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./services/local-storage.service */ "./src/app/services/local-storage.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _pipes_players_pipe__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pipes/players.pipe */ "./src/app/pipes/players.pipe.ts");
/* harmony import */ var _guards_user_guard__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./guards/user.guard */ "./src/app/guards/user.guard.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _game_score_score_component__WEBPACK_IMPORTED_MODULE_10__["ScoreComponent"],
                _game_field_field_component__WEBPACK_IMPORTED_MODULE_11__["FieldComponent"],
                _game_game_component__WEBPACK_IMPORTED_MODULE_12__["GameComponent"],
                _menu_menu_component__WEBPACK_IMPORTED_MODULE_13__["MenuComponent"],
                _error_error_component__WEBPACK_IMPORTED_MODULE_14__["ErrorComponent"],
                _multiplayer_menu_multiplayer_menu_component__WEBPACK_IMPORTED_MODULE_16__["MultiplayerMenuComponent"],
                _intro_intro_component__WEBPACK_IMPORTED_MODULE_15__["IntroComponent"],
                _pipes_players_pipe__WEBPACK_IMPORTED_MODULE_21__["PlayersPipe"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                angularfire2__WEBPACK_IMPORTED_MODULE_4__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].firebase),
                angularfire2_database__WEBPACK_IMPORTED_MODULE_5__["AngularFireDatabaseModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrModule"].forRoot()
            ],
            providers: [
                _services_game_service__WEBPACK_IMPORTED_MODULE_17__["GameService"],
                _services_data_base_service__WEBPACK_IMPORTED_MODULE_18__["DataBaseService"],
                _services_local_storage_service__WEBPACK_IMPORTED_MODULE_19__["LocalStorageService"],
                _guards_user_guard__WEBPACK_IMPORTED_MODULE_22__["UserGuard"],
                _services_user_service__WEBPACK_IMPORTED_MODULE_20__["UserService"],
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
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

module.exports = ".table {\n  margin: auto;\n  flex-wrap: wrap;\n  height: 800px;\n  background-image: url(\"https://stoopidpigeon.com/wp-content/uploads/2017/06/online-blackjack-Canada-online-casino-games.jpg\"); /* The image used */\n  background-color: #cccccc; /* Used if the image is unavailable */\n  background-position: center; /* Center the image */\n  background-repeat: no-repeat; /* Do not repeat the image */\n  background-size: cover; /* Resize the background image to cover the entire container */\n  position: relative;\n  display: flex;\n  justify-content: center;\n  text-align: center;\n  padding: 30px;\n}\n\n.turn{\n  background-color: rgba(1, 143, 5, 0.4);\n}\n\n.no-turn {\n  background-color: rgba(0, 0, 0, 0.6);\n}\n\n.players {\n  width: 300px;\n  height: 300px;\n  color: rgb(0, 253, 253);\n  border-radius: 20px;\n  margin: 0 30px;\n  border: 1px solid rgb(0, 253, 253);\n\n}\n\n.player-hand {\n  display: flex;\n  justify-content: space-around;\n  flex-direction: row; \n  width: 100%;\n}\n\n.center-table {\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  width: 100%;\n  top: 50%;\n}\n\nbutton {\n  height: 70px;\n  width: 130px;\n  font-size: 25px;\n  margin-left: 30px;\n  margin-right: 30px;\n}\n\nimg {\n  width: 65px;\n  height: 100px;\n  border-radius: 10px;\n}\n\n.total,\n.comp-result,\n.score {\n  font-size: 52px;\n  color: black;\n  background-color: rgba(163, 163, 163, 0.438);\n  border-radius: 20px;\n}\n\n.comp-result {\n  margin-left: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZS9maWVsZC9maWVsZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsOEhBQThILENBQUMsb0JBQW9CO0VBQ25KLDBCQUEwQixDQUFDLHNDQUFzQztFQUNqRSw0QkFBNEIsQ0FBQyxzQkFBc0I7RUFDbkQsNkJBQTZCLENBQUMsNkJBQTZCO0VBQzNELHVCQUF1QixDQUFDLCtEQUErRDtFQUN2RixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLHdCQUF3QjtFQUN4QixtQkFBbUI7RUFDbkIsY0FBYztDQUNmOztBQUVEO0VBQ0UsdUNBQXVDO0NBQ3hDOztBQUVEO0VBQ0UscUNBQXFDO0NBQ3RDOztBQUVEO0VBQ0UsYUFBYTtFQUNiLGNBQWM7RUFDZCx3QkFBd0I7RUFDeEIsb0JBQW9CO0VBQ3BCLGVBQWU7RUFDZixtQ0FBbUM7O0NBRXBDOztBQUVEO0VBQ0UsY0FBYztFQUNkLDhCQUE4QjtFQUM5QixvQkFBb0I7RUFDcEIsWUFBWTtDQUNiOztBQUVEO0VBQ0UsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCx3QkFBd0I7RUFDeEIsd0JBQXdCO0VBQ3hCLFlBQVk7RUFDWixTQUFTO0NBQ1Y7O0FBRUQ7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsbUJBQW1CO0NBQ3BCOztBQUVEO0VBQ0UsWUFBWTtFQUNaLGNBQWM7RUFDZCxvQkFBb0I7Q0FDckI7O0FBRUQ7OztFQUdFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsNkNBQTZDO0VBQzdDLG9CQUFvQjtDQUNyQjs7QUFFRDtFQUNFLGtCQUFrQjtDQUNuQiIsImZpbGUiOiJzcmMvYXBwL2dhbWUvZmllbGQvZmllbGQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWJsZSB7XG4gIG1hcmdpbjogYXV0bztcbiAgZmxleC13cmFwOiB3cmFwO1xuICBoZWlnaHQ6IDgwMHB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwczovL3N0b29waWRwaWdlb24uY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE3LzA2L29ubGluZS1ibGFja2phY2stQ2FuYWRhLW9ubGluZS1jYXNpbm8tZ2FtZXMuanBnXCIpOyAvKiBUaGUgaW1hZ2UgdXNlZCAqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjY2NjOyAvKiBVc2VkIGlmIHRoZSBpbWFnZSBpcyB1bmF2YWlsYWJsZSAqL1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7IC8qIENlbnRlciB0aGUgaW1hZ2UgKi9cbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDsgLyogRG8gbm90IHJlcGVhdCB0aGUgaW1hZ2UgKi9cbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgLyogUmVzaXplIHRoZSBiYWNrZ3JvdW5kIGltYWdlIHRvIGNvdmVyIHRoZSBlbnRpcmUgY29udGFpbmVyICovXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMzBweDtcbn1cblxuLnR1cm57XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMSwgMTQzLCA1LCAwLjQpO1xufVxuXG4ubm8tdHVybiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcbn1cblxuLnBsYXllcnMge1xuICB3aWR0aDogMzAwcHg7XG4gIGhlaWdodDogMzAwcHg7XG4gIGNvbG9yOiByZ2IoMCwgMjUzLCAyNTMpO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBtYXJnaW46IDAgMzBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDAsIDI1MywgMjUzKTtcblxufVxuXG4ucGxheWVyLWhhbmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdzsgXG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY2VudGVyLXRhYmxlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIHdpZHRoOiAxMDAlO1xuICB0b3A6IDUwJTtcbn1cblxuYnV0dG9uIHtcbiAgaGVpZ2h0OiA3MHB4O1xuICB3aWR0aDogMTMwcHg7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XG4gIG1hcmdpbi1yaWdodDogMzBweDtcbn1cblxuaW1nIHtcbiAgd2lkdGg6IDY1cHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi50b3RhbCxcbi5jb21wLXJlc3VsdCxcbi5zY29yZSB7XG4gIGZvbnQtc2l6ZTogNTJweDtcbiAgY29sb3I6IGJsYWNrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE2MywgMTYzLCAxNjMsIDAuNDM4KTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbn1cblxuLmNvbXAtcmVzdWx0IHtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/game/field/field.component.html":
/*!*************************************************!*\
  !*** ./src/app/game/field/field.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"table\" \n         *ngIf=\"room\">\n  <div class=\"players\" \n       [class.turn]=\"player.turn\"\n       [class.no-turn]=\"!player.turn\"\n       *ngFor=\"let player of room.players\">\n    <h3>\n      Player Name: {{ player.name }}\n    </h3>\n\n    <h3>\n      Wins: {{ player.wins }} Games: {{ player.games }}\n    </h3>\n\n    <h3 *ngIf=\"!room.started\">\n      Score: {{ player.sum }}\n    </h3>\n\n    <div class=\"player-hand\">\n      <img *ngFor=\"let card of player.hand\" \n      [src]=\"player.id === user.id || !room.started\n        ? './assets/img/' + card.name + card.suits + '.png'\n        : cardBackView\">\n    </div>\n\n    \n  </div>\n</section>"

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
        this.isYouTurn = false;
        this.cardBackView = './assets/img/outside.png';
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FieldComponent.prototype, "room", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FieldComponent.prototype, "user", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], FieldComponent.prototype, "isYouTurn", void 0);
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

/***/ "./src/app/game/game.component.html":
/*!******************************************!*\
  !*** ./src/app/game/game.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-score [room]=\"room\"\n           [user]=\"user\"\n           [message]=\"message\"\n           (toggleReady)=\"toggleReady()\"\n           [isYouTurn]=\"isYouTurn\"\n           (getCard)=\"getCard()\"\n           (stopTakingCards)=\"stopTakingCards()\"\n           (finishGame)=\"finish()\"\n           (addBot)=\"addBot()\"\n           (deleteBot)=\"deleteBot()\">\n</app-score>\n\n<app-field [room]=\"room\"\n           [user]=\"user\"\n           [isYouTurn]=\"isYouTurn\">\n</app-field>"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! faker */ "./node_modules/faker/index.js");
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(faker__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _services_data_base_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/data-base.service */ "./src/app/services/data-base.service.ts");
/* harmony import */ var _services_game_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/game.service */ "./src/app/services/game.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
    function GameComponent(_gameService, _dataBaseService, _userService, _route, _router, _toastr) {
        this._gameService = _gameService;
        this._dataBaseService = _dataBaseService;
        this._userService = _userService;
        this._route = _route;
        this._router = _router;
        this._toastr = _toastr;
        this.message = 'Welcome to game';
        this.isYouTurn = false;
        this._destroy$$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this._TOTAL_LIMIT_FOR_BOT = 15;
    }
    GameComponent.prototype.onBeforeClose = function (e) {
        e.returnValue = false;
        return false;
    };
    GameComponent.prototype.onClose = function (e) {
        this.leaveGame();
    };
    GameComponent.prototype.leaveGame = function () {
        if (this.user.playerMaster && this.room.players) {
            var aliveUser = this.room.players.find(function (player) { return !player.playerMaster && !player.isBot; });
            if (aliveUser) {
                this._dataBaseService.setPlayerMaster(this.room.id, aliveUser.id);
            }
            else {
                this._dataBaseService.deleteRoom(this.room.id);
            }
        }
        if (this.room) {
            this.user = (__assign({}, this.user, { turn: false, hand: [], isActive: false, playerMaster: false, sum: 0, enough: false }));
            this._userService.setUser(this.user);
            this._dataBaseService.addUsers(this.user);
            this._dataBaseService.removeUserFromRoom(this.room.id, this.user.id);
        }
    };
    GameComponent.prototype.ngOnInit = function () {
        var _this = this;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])(this._userService.getUser$(), this._route.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["pluck"])('id'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(Number)))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (_a) {
            var user = _a[0], id = _a[1];
            _this.user = user;
            return _this._dataBaseService.getRoom$(id);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (room) {
            if (!room) {
                _this._toastr.error('This room is not correct');
                _this._router.navigate(['/multiplayer']);
                return false;
            }
            var userInRoom = false;
            if (room.players) {
                room.players = Object.values(room.players);
                userInRoom = room.players.some(function (player) { return _this.user.id === player.id; });
            }
            if (!userInRoom && room.players && room.players.length >= room.maxplayers) {
                _this._toastr.error('This room is full');
                _this._router.navigate(['/multiplayer']);
                return false;
            }
            if (!userInRoom && room.started) {
                _this._toastr.error('Sorry, game is started');
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
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroy$$))
            .subscribe(function (room) {
            _this.room = room;
            _this.room.players = Object.values(room.players) || [];
            var isGameStart = _this.room.players.every(function (player) { return player.isActive; });
            if (isGameStart && !_this.room.started) {
                _this.startGame();
            }
            var haveWinner = _this.room.players.some(function (player) { return player.sum === 21; });
            var isFinishGame = _this.room.players.every(function (player) { return player.enough; });
            if (_this.room.started && _this.user.isActive && (isFinishGame || haveWinner)) {
                _this._dataBaseService.playerReady(_this.room.id, _this.user.id, false);
                _this.finish();
            }
            if (_this.room.players.length < 2 && _this.room.single) {
                _this.addBot();
            }
            _this.room.players.forEach(function (player) {
                if (player.id === _this.user.id) {
                    _this.user = player;
                    _this.isYouTurn = _this.user.turn;
                    if (_this.user.enough && _this.user.turn && _this.room.started) {
                        _this.isYouTurn = false;
                        _this.setNextTurn(_this.user.id);
                    }
                }
                if (player.isBot && player.turn && _this.user.playerMaster && !player.enough && _this.room.started) {
                    _this._botTurn(player.id);
                }
                if (player.isBot && player.turn && _this.user.playerMaster && player.enough && _this.room.started) {
                    _this.setNextTurn(player.id);
                }
            });
        });
    };
    GameComponent.prototype._botTurn = function (botId) {
        this._dataBaseService.changeTurn(this.room.id, botId, false);
        var bot;
        bot = this.room.players.find(function (player) { return player.id === botId; });
        if (bot.sum < this._TOTAL_LIMIT_FOR_BOT) {
            bot.hand.push(this.room.deck.pop());
            bot.sum += bot.hand[bot.hand.length - 1].value;
            this._dataBaseService.pushOneCard(this.room.id, bot.id, bot.sum, bot.hand, this.room.deck);
        }
        else {
            this._dataBaseService.setEnoughDraw(this.room.id, bot.id, true);
        }
        this.setNextTurn(bot.id);
    };
    GameComponent.prototype.addBot = function () {
        if (this.room.players.length >= this.room.maxplayers) {
            this._toastr.error('room is full');
            return;
        }
        var newBot = {
            name: faker__WEBPACK_IMPORTED_MODULE_4__["name"].findName(),
            pass: '',
            id: this._gameService.generateId(),
            wins: 0,
            games: 0,
            isActive: true,
            playerMaster: false,
            sum: 0,
            isBot: true,
            turn: false,
            enough: false
        };
        this._dataBaseService.addPlayerToRoom(this.room.id, newBot);
    };
    GameComponent.prototype.deleteBot = function () {
        var bot = this.room.players.find(function (player) { return player.isBot; });
        if (bot) {
            this._dataBaseService.removeUserFromRoom(this.room.id, bot.id);
        }
        else {
            this._toastr.error('There are no bots!');
        }
    };
    GameComponent.prototype.stopTakingCards = function () {
        this._dataBaseService.changeTurn(this.room.id, this.user.id, false);
        this._dataBaseService.setEnoughDraw(this.room.id, this.user.id, true);
        this.setNextTurn(this.user.id);
    };
    GameComponent.prototype.toggleReady = function () {
        this.user.isActive = !this.user.isActive;
        this._dataBaseService.playerReady(this.room.id, this.user.id, this.user.isActive);
    };
    GameComponent.prototype.startGame = function () {
        var _this = this;
        this.message = 'New game is started!!!';
        if (this.user.playerMaster) {
            this.room.players.forEach(function (player) {
                if (player.isBot) {
                    _this._dataBaseService.setEnoughDraw(_this.room.id, player.id, false);
                    _this._dataBaseService.changeTurn(_this.room.id, player.id, false);
                }
                if (player.sum === 21) {
                    _this._dataBaseService.savePlayerScore(_this.room.id, player.id, 0);
                }
            });
            this._dataBaseService.changeTurn(this.room.id, this.user.id, true);
            this.room.deck = this._gameService.generateDeck();
            this.room.deck = this._gameService.deckSort(this.room.deck);
            this.room.players.forEach(function (player) {
                var oneCard = _this.room.deck.pop();
                _this._dataBaseService.pushHandCard(_this.room.id, player.id, [oneCard]);
                _this._dataBaseService.savePlayerScore(_this.room.id, player.id, oneCard.value);
                _this._dataBaseService.gameStarted(_this.room.id, true);
            });
            this._dataBaseService.pushDeck(this.room.id, this.room.deck);
        }
        else {
            this._dataBaseService.changeTurn(this.room.id, this.user.id, false);
        }
    };
    GameComponent.prototype.getCard = function () {
        this._dataBaseService.changeTurn(this.room.id, this.user.id, false);
        this.user.hand.push(this.room.deck.pop());
        this.user.sum += this.user.hand[this.user.hand.length - 1].value;
        this._dataBaseService.pushOneCard(this.room.id, this.user.id, this.user.sum, this.user.hand, this.room.deck);
        if (this.user.sum > 21) {
            this.message = 'You have too much';
            this._dataBaseService.setEnoughDraw(this.room.id, this.user.id, true);
        }
        this.setNextTurn(this.user.id);
    };
    GameComponent.prototype.setNextTurn = function (playerId) {
        var _this = this;
        var indexCount;
        this.room.players.find(function (player, index) {
            indexCount = index + 1 < _this.room.players.length ? index + 1 : 0;
            return player.id === playerId;
        });
        this._dataBaseService.changeTurn(this.room.id, playerId, false);
        this._dataBaseService.changeTurn(this.room.id, this.room.players[indexCount].id, true);
    };
    GameComponent.prototype.finish = function () {
        var _this = this;
        this.user.isActive = false;
        this.message = 'Winner/s: ';
        this.isYouTurn = false;
        this._dataBaseService.gameStarted(this.room.id, false);
        this._dataBaseService.playerReady(this.room.id, this.user.id, this.user.isActive);
        this._dataBaseService.changeTurn(this.room.id, this.user.id, false);
        this._dataBaseService.setEnoughDraw(this.room.id, this.user.id, false);
        var maxScore = 0;
        this.room.players.forEach(function (player) {
            if (player.sum > maxScore && player.sum <= 21) {
                maxScore = player.sum;
            }
        });
        this.room.players.forEach(function (player) {
            if (player.sum === maxScore) {
                _this.message += " " + player.name + " ";
                _this._dataBaseService.updateScore(_this.room.id, player.id, 'wins', player.wins + 1);
                _this._dataBaseService.updateScore(_this.room.id, player.id, 'games', player.games + 1);
            }
            else {
                _this._dataBaseService.updateScore(_this.room.id, player.id, 'games', player.games + 1);
            }
        });
    };
    GameComponent.prototype.ngOnDestroy = function () {
        this.leaveGame();
        this._destroy$$.next();
        this._destroy$$.complete();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:beforeunload', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Event]),
        __metadata("design:returntype", Boolean)
    ], GameComponent.prototype, "onBeforeClose", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:unload', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Event]),
        __metadata("design:returntype", void 0)
    ], GameComponent.prototype, "onClose", null);
    GameComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-game',
            template: __webpack_require__(/*! ./game.component.html */ "./src/app/game/game.component.html"),
        }),
        __metadata("design:paramtypes", [_services_game_service__WEBPACK_IMPORTED_MODULE_7__["GameService"],
            _services_data_base_service__WEBPACK_IMPORTED_MODULE_6__["DataBaseService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
    ], GameComponent);
    return GameComponent;
}());



/***/ }),

/***/ "./src/app/game/score/score.component.css":
/*!************************************************!*\
  !*** ./src/app/game/score/score.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".score {\n  padding: 10px;\n  font-size: 30px;\n  color: rgb(0, 255, 255);\n}\n\n.return-link{\n  padding: 20px;\n}\n\n.score,\n.score-container {\n   text-align: center;\n}\n\n.score {\n  background-color: rgba(0, 0, 0, 0.5)\n}\n\n.score-container {\n  background-color: black;\n  background-image: url('https://ak9.picdn.net/shutterstock/videos/9648839/thumb/1.jpg');\n  background-size: 580px;\n  background-color: black;\n}\n\na {\n  font-size: 33px;\n}\n\n.master {\n  color:red;\n}\n\n.action-button {\n  cursor: pointer;\n\tposition: relative;\n\tpadding: 10px 40px;\n  margin: 0px 10px 10px 0px;\n\tborder-radius: 10px;\n\tfont-family: 'Pacifico', cursive;\n\tfont-size: 25px;\n\tcolor: black;\n\ttext-decoration: none;\t\n}\n\n.blue {\n\tbackground-color: #3498DB;\n\tborder-bottom: 5px solid #2980B9;\n\ttext-shadow: 0px -2px #2980B9;\n}\n\n.red {\n\tbackground-color: #E74C3C;\n\tborder-bottom: 5px solid #BD3E31;\n\ttext-shadow: 0px -2px #BD3E31;\n}\n\n.green {\n\tbackground-color: #82BF56;\n\tborder-bottom: 5px solid #669644;\n\ttext-shadow: 0px -2px #669644;\n}\n\n.yellow {\n\tbackground-color: #F2CF66;\n\tborder-bottom: 5px solid #D1B358;\n\ttext-shadow: 0px -2px #D1B358;\n}\n\n.action-button:active {\n\ttransform: translate(0px,5px);\n  -webkit-transform: translate(0px,5px);\n\tborder-bottom: 1px solid;\n}\n\n.ready {\n  color:greenyellow\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZS9zY29yZS9zY29yZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQix3QkFBd0I7Q0FDekI7O0FBRUQ7RUFDRSxjQUFjO0NBQ2Y7O0FBRUQ7O0dBRUcsbUJBQW1CO0NBQ3JCOztBQUNEO0VBQ0Usb0NBQW9DO0NBQ3JDOztBQUNEO0VBQ0Usd0JBQXdCO0VBQ3hCLHVGQUF1RjtFQUN2Rix1QkFBdUI7RUFDdkIsd0JBQXdCO0NBQ3pCOztBQUVEO0VBQ0UsZ0JBQWdCO0NBQ2pCOztBQUVEO0VBQ0UsVUFBVTtDQUNYOztBQUVEO0VBQ0UsZ0JBQWdCO0NBQ2pCLG1CQUFtQjtDQUNuQixtQkFBbUI7RUFDbEIsMEJBQTBCO0NBQzNCLG9CQUFvQjtDQUNwQixpQ0FBaUM7Q0FDakMsZ0JBQWdCO0NBQ2hCLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEI7O0FBRUQ7Q0FDQywwQkFBMEI7Q0FDMUIsaUNBQWlDO0NBQ2pDLDhCQUE4QjtDQUM5Qjs7QUFFRDtDQUNDLDBCQUEwQjtDQUMxQixpQ0FBaUM7Q0FDakMsOEJBQThCO0NBQzlCOztBQUVEO0NBQ0MsMEJBQTBCO0NBQzFCLGlDQUFpQztDQUNqQyw4QkFBOEI7Q0FDOUI7O0FBRUQ7Q0FDQywwQkFBMEI7Q0FDMUIsaUNBQWlDO0NBQ2pDLDhCQUE4QjtDQUM5Qjs7QUFFRDtDQUNDLDhCQUE4QjtFQUM3QixzQ0FBc0M7Q0FDdkMseUJBQXlCO0NBQ3pCOztBQUVEO0VBQ0UsaUJBQWlCO0NBQ2xCIiwiZmlsZSI6InNyYy9hcHAvZ2FtZS9zY29yZS9zY29yZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNjb3JlIHtcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBjb2xvcjogcmdiKDAsIDI1NSwgMjU1KTtcbn1cblxuLnJldHVybi1saW5re1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG4uc2NvcmUsXG4uc2NvcmUtY29udGFpbmVyIHtcbiAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5zY29yZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KVxufVxuLnNjb3JlLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vYWs5LnBpY2RuLm5ldC9zaHV0dGVyc3RvY2svdmlkZW9zLzk2NDg4MzkvdGh1bWIvMS5qcGcnKTtcbiAgYmFja2dyb3VuZC1zaXplOiA1ODBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG59XG5cbmEge1xuICBmb250LXNpemU6IDMzcHg7XG59XG5cbi5tYXN0ZXIge1xuICBjb2xvcjpyZWQ7XG59XG5cbi5hY3Rpb24tYnV0dG9uIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdHBhZGRpbmc6IDEwcHggNDBweDtcbiAgbWFyZ2luOiAwcHggMTBweCAxMHB4IDBweDtcblx0Ym9yZGVyLXJhZGl1czogMTBweDtcblx0Zm9udC1mYW1pbHk6ICdQYWNpZmljbycsIGN1cnNpdmU7XG5cdGZvbnQtc2l6ZTogMjVweDtcblx0Y29sb3I6IGJsYWNrO1xuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XHRcbn1cblxuLmJsdWUge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMzQ5OERCO1xuXHRib3JkZXItYm90dG9tOiA1cHggc29saWQgIzI5ODBCOTtcblx0dGV4dC1zaGFkb3c6IDBweCAtMnB4ICMyOTgwQjk7XG59XG5cbi5yZWQge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjRTc0QzNDO1xuXHRib3JkZXItYm90dG9tOiA1cHggc29saWQgI0JEM0UzMTtcblx0dGV4dC1zaGFkb3c6IDBweCAtMnB4ICNCRDNFMzE7XG59XG5cbi5ncmVlbiB7XG5cdGJhY2tncm91bmQtY29sb3I6ICM4MkJGNTY7XG5cdGJvcmRlci1ib3R0b206IDVweCBzb2xpZCAjNjY5NjQ0O1xuXHR0ZXh0LXNoYWRvdzogMHB4IC0ycHggIzY2OTY0NDtcbn1cblxuLnllbGxvdyB7XG5cdGJhY2tncm91bmQtY29sb3I6ICNGMkNGNjY7XG5cdGJvcmRlci1ib3R0b206IDVweCBzb2xpZCAjRDFCMzU4O1xuXHR0ZXh0LXNoYWRvdzogMHB4IC0ycHggI0QxQjM1ODtcbn1cblxuLmFjdGlvbi1idXR0b246YWN0aXZlIHtcblx0dHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LDVweCk7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LDVweCk7XG5cdGJvcmRlci1ib3R0b206IDFweCBzb2xpZDtcbn1cblxuLnJlYWR5IHtcbiAgY29sb3I6Z3JlZW55ZWxsb3dcbn0iXX0= */"

/***/ }),

/***/ "./src/app/game/score/score.component.html":
/*!*************************************************!*\
  !*** ./src/app/game/score/score.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"score-container\">\n  <a routerLink=\"/multiplayer\" \n     *ngIf=\"room && !room.single\"\n     class=\"action-button shadow animate green return-link\">\n    Return to multiplayer menu.\n  </a>\n\n  <a routerLink=\"/menu\" \n     *ngIf=\"room && room.single\"\n     class=\"action-button shadow animate green\">\n    Return to menu.\n  </a>\n\n  <div class=\"score\" \n       *ngIf=\"room && !room.single\">\n    Players in room: \n\n    <span *ngFor=\"let player of room.players\" \n          [class.ready]=\"player.isActive\">\n      \\ {{player.name}} / \n    </span>\n  </div>\n\n  <div class=\"score\" \n       *ngIf=\"room && !room.single\">\n    Max players: {{ room.maxplayers}}\n  </div>\n\n  <div class=\"score\">\n    {{ message }}\n  </div>\n\n  <div class=\"score\">\n     You Score: {{ user.sum }}\n  </div>\n\n  <div>\n    <button class=\"action-button shadow animate\" \n            *ngIf=\"room && !room.started && room.players && room.players.length > 1\"\n            [class.green]=\"user.isActive\"\n            [class.yellow]=\"!user.isActive\"\n            (click)=\"ready()\"> \n      Ready \n    </button>\n\n    <button class=\"action-button shadow animate blue\" \n            *ngIf=\"room && !room.started && user.playerMaster\"\n            (click)=\"createdBot()\"> \n      Add bot\n    </button>\n\n    <button class=\"action-button shadow animate yellow\" \n            *ngIf=\"room && !room.started && user.playerMaster\"\n            (click)=\"deletedBot()\"> \n      Delete bot\n    </button>\n\n    <button class=\"action-button shadow animate\" \n            type=\"button\" \n            *ngIf=\"room && room.started \"\n            [disabled]=\"!isYouTurn\"\n            [class.red]=\"!user.turn\" \n            [class.blue]=\"user.turn\" \n            [disabled]=\"!user.turn\"\n            (click)=\"this.getCard.emit()\">\n      Get Card\n    </button>\n\n    <button class=\"action-button shadow animate \" \n            type=\"button\" \n            *ngIf=\"room && room.started \" \n            [disabled]=\"!isYouTurn\"\n            [class.red]=\"user.enough || !user.turn\"\n            [class.yellow]=\"!user.enough && user.turn \" \n            (click)=\"this.stopTakingCards.emit()\">\n      Enough! \n    </button>\n  </div>\n</div>"

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
    function ScoreComponent() {
        this.isYouTurn = false;
        this.getCard = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];
        this.finishGame = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];
        this.stopTakingCards = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];
        this.toggleReady = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];
        this.addBot = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];
        this.deleteBot = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];
    }
    ScoreComponent.prototype.ready = function () {
        this.toggleReady.emit();
    };
    ScoreComponent.prototype.createdBot = function () {
        this.addBot.emit();
    };
    ScoreComponent.prototype.deletedBot = function () {
        this.deleteBot.emit();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ScoreComponent.prototype, "room", void 0);
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
    ], ScoreComponent.prototype, "isYouTurn", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ScoreComponent.prototype, "getCard", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ScoreComponent.prototype, "finishGame", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ScoreComponent.prototype, "stopTakingCards", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ScoreComponent.prototype, "toggleReady", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ScoreComponent.prototype, "addBot", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ScoreComponent.prototype, "deleteBot", void 0);
    ScoreComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-score',
            template: __webpack_require__(/*! ./score.component.html */ "./src/app/game/score/score.component.html"),
            styles: [__webpack_require__(/*! ./score.component.css */ "./src/app/game/score/score.component.css")]
        })
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
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
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
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (user) {
            if (!user) {
                _this._router.navigate(['/intro']);
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(Boolean));
    };
    UserGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
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

module.exports = ".wrapper {\n  display: flex;\n  justify-content: center;\n  font-size: 30px;\n  flex-direction: column;\n  align-items: center;\n  background-image: url(\"https://stoopidpigeon.com/wp-content/uploads/2017/06/online-blackjack-Canada-online-casino-games.jpg\"); /* The image used */\n  background-color: #cccccc; /* Used if the image is unavailable */\n  background-position: center; /* Center the image */\n  background-repeat: no-repeat; /* Do not repeat the image */\n  background-size: cover; /* Resize the background image to cover the entire container */\n  min-height: 100vh;\n}\n\ntable {\n  border-collapse: collapse;\n  color:black;\n  padding: 10px;\n  background-color: rgba(255, 255, 255, 0.6);\n  font-size: 20px;\n}\n\ntable, th, td {\n  text-align: center;\n  border: 1px solid black;\n}\n\ntable button {\n  width: 150px;\n  height: 30px;\n  font-size: 16px;\n  margin-bottom: 0px;\n}\n\n.enter-button {\n  background: transparent;\n  border: 0;\n  padding: 0;\n  cursor: pointer;\n  outline: 0;\n  -webkit-appearance: none;\n}\n\n.enter-button {\n  display: inline-block;\n  position: relative;\n  padding: 20px 38px;\n  top: 0;\n  font-size: 30px;\n  font-family: \"Open Sans\", Helvetica;\n  border-radius: 4px;\n  border-bottom: 1px solid rgba( 28, 227, 125, 0.5 );\n  background: rgba( 22, 230, 137, 1 );\n  color: black;\n  box-shadow: 0px 0px 0px rgba( 15, 165, 60, 0.1 );\n  -webkit-transform: translateZ(0);\n          transform: translateZ(0);\n  transition: all 0.2s ease;\n}\n\n.enter-button:hover {\n  top: -10px;\n  box-shadow: 0px 10px 10px rgba( 15, 165, 60, 0.2 );\n  -webkit-transform: rotateX(20deg);\n          transform: rotateX(20deg);\n}\n\n.enter-button:active {\n  top: 0px;\n  box-shadow: 0px 0px 0px rgba( 15, 165, 60, 0.0 );\n  background: rgba( 20, 224, 133, 1 );\n}\n\n.welcome {\n  margin-bottom: 20px;\n  color: rgb(122, 236, 198);\n  font-size: 50px;\n  background-color: rgba(0, 0, 0, 0.4);\n  padding: 10px;\n  border-radius: 15px;\n}\n\ninput {\n  font-size: 30px;\n  margin-bottom: 30px;\n}\n\nbutton {\n  cursor: pointer;\n  width: 300px;\n  height: 70px;\n  font-size: 30px;\n  margin-bottom: 20px;\n}\n\n.userList {\n  border: 1px solid black;\n  margin: 10px;\n}\n\n.button {\n  position: relative;\n  display: block;\n  width: 55%;\n  padding: 5px 5px;\n  border-radius: 50px;\n  text-align: center;\n  color: black;\n  text-decoration: none;\n  font-weight: bold;\n  font-size: 24px;\n  -webkit-tap-highlight-color: rgba(black, 0);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW50cm8vaW50cm8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCx3QkFBd0I7RUFDeEIsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixvQkFBb0I7RUFDcEIsOEhBQThILENBQUMsb0JBQW9CO0VBQ25KLDBCQUEwQixDQUFDLHNDQUFzQztFQUNqRSw0QkFBNEIsQ0FBQyxzQkFBc0I7RUFDbkQsNkJBQTZCLENBQUMsNkJBQTZCO0VBQzNELHVCQUF1QixDQUFDLCtEQUErRDtFQUN2RixrQkFBa0I7Q0FDbkI7O0FBRUQ7RUFDRSwwQkFBMEI7RUFDMUIsWUFBWTtFQUNaLGNBQWM7RUFDZCwyQ0FBMkM7RUFDM0MsZ0JBQWdCO0NBQ2pCOztBQUVEO0VBQ0UsbUJBQW1CO0VBQ25CLHdCQUF3QjtDQUN6Qjs7QUFFRDtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtDQUNwQjs7QUFFRDtFQUNFLHdCQUF3QjtFQUN4QixVQUFVO0VBQ1YsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gseUJBQXlCO0NBQzFCOztBQUVEO0VBQ0Usc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsT0FBTztFQUNQLGdCQUFnQjtFQUNoQixvQ0FBb0M7RUFDcEMsbUJBQW1CO0VBQ25CLG1EQUFtRDtFQUNuRCxvQ0FBb0M7RUFDcEMsYUFBYTtFQUNiLGlEQUFpRDtFQUNqRCxpQ0FBaUM7VUFHekIseUJBQXlCO0VBSXpCLDBCQUEwQjtDQUNuQzs7QUFFRDtFQUNFLFdBQVc7RUFDWCxtREFBbUQ7RUFDbkQsa0NBQWtDO1VBRzFCLDBCQUEwQjtDQUNuQzs7QUFFRDtFQUNFLFNBQVM7RUFDVCxpREFBaUQ7RUFDakQsb0NBQW9DO0NBQ3JDOztBQUVEO0VBQ0Usb0JBQW9CO0VBQ3BCLDBCQUEwQjtFQUMxQixnQkFBZ0I7RUFDaEIscUNBQXFDO0VBQ3JDLGNBQWM7RUFDZCxvQkFBb0I7Q0FDckI7O0FBRUQ7RUFDRSxnQkFBZ0I7RUFDaEIsb0JBQW9CO0NBQ3JCOztBQUVEO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtDQUNyQjs7QUFFRDtFQUNFLHdCQUF3QjtFQUN4QixhQUFhO0NBQ2Q7O0FBRUQ7RUFDRSxtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsNENBQTRDO0NBQzdDIiwiZmlsZSI6InNyYy9hcHAvaW50cm8vaW50cm8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly9zdG9vcGlkcGlnZW9uLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxNy8wNi9vbmxpbmUtYmxhY2tqYWNrLUNhbmFkYS1vbmxpbmUtY2FzaW5vLWdhbWVzLmpwZ1wiKTsgLyogVGhlIGltYWdlIHVzZWQgKi9cbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjY2NjYzsgLyogVXNlZCBpZiB0aGUgaW1hZ2UgaXMgdW5hdmFpbGFibGUgKi9cbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyOyAvKiBDZW50ZXIgdGhlIGltYWdlICovXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7IC8qIERvIG5vdCByZXBlYXQgdGhlIGltYWdlICovXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7IC8qIFJlc2l6ZSB0aGUgYmFja2dyb3VuZCBpbWFnZSB0byBjb3ZlciB0aGUgZW50aXJlIGNvbnRhaW5lciAqL1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbn1cblxudGFibGUge1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBjb2xvcjpibGFjaztcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbnRhYmxlLCB0aCwgdGQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xufVxuXG50YWJsZSBidXR0b24ge1xuICB3aWR0aDogMTUwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG5cbi5lbnRlci1idXR0b24ge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiAwO1xuICBwYWRkaW5nOiAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG91dGxpbmU6IDA7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbn1cblxuLmVudGVyLWJ1dHRvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAyMHB4IDM4cHg7XG4gIHRvcDogMDtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgSGVsdmV0aWNhO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKCAyOCwgMjI3LCAxMjUsIDAuNSApO1xuICBiYWNrZ3JvdW5kOiByZ2JhKCAyMiwgMjMwLCAxMzcsIDEgKTtcbiAgY29sb3I6IGJsYWNrO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDBweCByZ2JhKCAxNSwgMTY1LCA2MCwgMC4xICk7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG4gICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbiAgICAgIC1tcy10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG59XG5cbi5lbnRlci1idXR0b246aG92ZXIge1xuICB0b3A6IC0xMHB4O1xuICBib3gtc2hhZG93OiAwcHggMTBweCAxMHB4IHJnYmEoIDE1LCAxNjUsIDYwLCAwLjIgKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVgoMjBkZWcpO1xuICAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlWCgyMGRlZyk7XG4gICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGVYKDIwZGVnKTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoMjBkZWcpO1xufVxuXG4uZW50ZXItYnV0dG9uOmFjdGl2ZSB7XG4gIHRvcDogMHB4O1xuICBib3gtc2hhZG93OiAwcHggMHB4IDBweCByZ2JhKCAxNSwgMTY1LCA2MCwgMC4wICk7XG4gIGJhY2tncm91bmQ6IHJnYmEoIDIwLCAyMjQsIDEzMywgMSApO1xufVxuXG4ud2VsY29tZSB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGNvbG9yOiByZ2IoMTIyLCAyMzYsIDE5OCk7XG4gIGZvbnQtc2l6ZTogNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xufVxuXG5pbnB1dCB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuYnV0dG9uIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB3aWR0aDogMzAwcHg7XG4gIGhlaWdodDogNzBweDtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4udXNlckxpc3Qge1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgbWFyZ2luOiAxMHB4O1xufVxuXG4uYnV0dG9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDU1JTtcbiAgcGFkZGluZzogNXB4IDVweDtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogYmxhY2s7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiByZ2JhKGJsYWNrLCAwKTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/intro/intro.component.html":
/*!********************************************!*\
  !*** ./src/app/intro/intro.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <div class=\"welcome\">\n    Welcome to Black Jack!!!\n  </div>\n\n  <input type=\"text\" \n         name=\"username\" \n         placeholder=\"Enter your name\" \n         [(ngModel)]=\"userName\">\n\n  <input type=\"text\" \n         name=\"userpassword\" \n         *ngIf=\"users\"\n         type=\"password\"\n         placeholder=\"Enter your password\" \n         [(ngModel)]=\"userPassword\">\n\n  <button type=\"button\" \n          class=\"enter-button\" \n          (click)=\"enter()\">\n    Enter\n  </button>\n\n  <table>\n    <thead>\n      <tr>\n        <th>User name</th>\n\n        <th>Wins</th>\n\n        <th>Games</th>\n\n        <th>Select user</th>\n      </tr>\n    </thead>\n\n    <tbody>\n      <tr *ngFor=\"let user of users\">\n        <td>{{user.name}}</td>\n\n        <td>{{user.wins}}</td>\n\n        <td>{{user.games}}</td>\n        \n        <td>\n          <button type=\"button\" \n                  class=\"button\"\n                  (click)=selectUser(user.name)>\n            select user\n          </button>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</div>"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_data_base_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/data-base.service */ "./src/app/services/data-base.service.ts");
/* harmony import */ var _services_game_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/game.service */ "./src/app/services/game.service.ts");
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
    function IntroComponent(_dataBaseService, _userService, _router, _gameService, _toastr) {
        this._dataBaseService = _dataBaseService;
        this._userService = _userService;
        this._router = _router;
        this._gameService = _gameService;
        this._toastr = _toastr;
        this.destroy$$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    IntroComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._dataBaseService.getUsers$().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy$$))
            .subscribe(function (users) {
            _this.users = Object.values(users).sort(function (user1, user2) { return user2.wins - user1.wins; });
        });
    };
    IntroComponent.prototype.enter = function () {
        var _this = this;
        if (!this.userName || !this.userPassword) {
            this._toastr.error('Enter name and password!!');
            return;
        }
        var saveUser = this.users.find(function (user) { return user.name === _this.userName; });
        if (saveUser) {
            if (saveUser.pass === this.userPassword) {
                this._userService.setUser(saveUser);
                this._router.navigate(['/menu']);
                return;
            }
            else {
                this._toastr.error('Password incorrect!');
                this.userPassword = '';
                return;
            }
        }
        var newUser = {
            name: this.userName,
            pass: this.userPassword,
            id: this._gameService.generateId(),
            wins: 0,
            games: 0,
            isActive: false,
            playerMaster: false,
            sum: 0,
            isBot: false,
            turn: false,
            enough: false
        };
        this._dataBaseService.addUsers(newUser);
        this._userService.setUser(newUser);
        this._router.navigate(['/menu']);
    };
    IntroComponent.prototype.selectUser = function (userName) {
        this.userName = userName;
        this.userPassword = prompt("Enter password for " + this.userName);
        this.enter();
    };
    IntroComponent.prototype.ngOnDestroy = function () {
        this.destroy$$.next();
        this.destroy$$.complete();
    };
    IntroComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-intro',
            template: __webpack_require__(/*! ./intro.component.html */ "./src/app/intro/intro.component.html"),
            styles: [__webpack_require__(/*! ./intro.component.css */ "./src/app/intro/intro.component.css")]
        }),
        __metadata("design:paramtypes", [_services_data_base_service__WEBPACK_IMPORTED_MODULE_6__["DataBaseService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_game_service__WEBPACK_IMPORTED_MODULE_7__["GameService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], IntroComponent);
    return IntroComponent;
}());



/***/ }),

/***/ "./src/app/menu/menu.component.css":
/*!*****************************************!*\
  !*** ./src/app/menu/menu.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper {\n  width: 100%;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: cadetblue;\n  flex-direction: column;\n  background-image: url(\"https://stoopidpigeon.com/wp-content/uploads/2017/06/online-blackjack-Canada-online-casino-games.jpg\"); /* The image used */\n  background-color: #cccccc; /* Used if the image is unavailable */\n  background-position: center; /* Center the image */\n  background-repeat: no-repeat; /* Do not repeat the image */\n  background-size: cover; /* Resize the background image to cover the entire container */\n  min-height: 100vh;\n}\n\n.greeting {\n  margin-bottom: 20px;\n  color: rgb(122, 236, 198);\n  font-size: 50px;\n  background-color: rgba(0, 0, 0, 0.4);\n  padding: 10px;\n  border-radius: 15px;\n  text-align: center;\n}\n\n.animate {\n\ttransition: all 0.1s;\n\t-webkit-transition: all 0.1s;\n}\n\n.action-button {\n  cursor: pointer;\n  display: block;\n\tposition: relative;\n\tpadding: 10px;\n  margin: 0px 10px 10px 0px;\n  float: left;\n\tborder-radius: 10px;\n\tfont-family: 'Pacifico', cursive;\n\tfont-size: 25px;\n\tcolor: black;\n  text-decoration: none;\t\n  width: 300px;\n  text-align: center;\n}\n\n.blue {\n\tbackground-color: #3498DB;\n\tborder-bottom: 5px solid #2980B9;\n\ttext-shadow: 0px -2px #2980B9;\n}\n\n.red {\n\tbackground-color: #E74C3C;\n\tborder-bottom: 5px solid #BD3E31;\n\ttext-shadow: 0px -2px #BD3E31;\n}\n\n.green {\n\tbackground-color: #82BF56;\n\tborder-bottom: 5px solid #669644;\n\ttext-shadow: 0px -2px #669644;\n}\n\n.yellow {\n\tbackground-color: #F2CF66;\n\tborder-bottom: 5px solid #D1B358;\n\ttext-shadow: 0px -2px #D1B358;\n}\n\n.action-button:active {\n\ttransform: translate(0px,5px);\n  -webkit-transform: translate(0px,5px);\n\tborder-bottom: 1px solid;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS9tZW51LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osY0FBYztFQUNkLGNBQWM7RUFDZCx3QkFBd0I7RUFDeEIsb0JBQW9CO0VBQ3BCLDRCQUE0QjtFQUM1Qix1QkFBdUI7RUFDdkIsOEhBQThILENBQUMsb0JBQW9CO0VBQ25KLDBCQUEwQixDQUFDLHNDQUFzQztFQUNqRSw0QkFBNEIsQ0FBQyxzQkFBc0I7RUFDbkQsNkJBQTZCLENBQUMsNkJBQTZCO0VBQzNELHVCQUF1QixDQUFDLCtEQUErRDtFQUN2RixrQkFBa0I7Q0FDbkI7O0FBRUQ7RUFDRSxvQkFBb0I7RUFDcEIsMEJBQTBCO0VBQzFCLGdCQUFnQjtFQUNoQixxQ0FBcUM7RUFDckMsY0FBYztFQUNkLG9CQUFvQjtFQUNwQixtQkFBbUI7Q0FDcEI7O0FBRUQ7Q0FDQyxxQkFBcUI7Q0FDckIsNkJBQTZCO0NBQzdCOztBQUVEO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7Q0FDaEIsbUJBQW1CO0NBQ25CLGNBQWM7RUFDYiwwQkFBMEI7RUFDMUIsWUFBWTtDQUNiLG9CQUFvQjtDQUNwQixpQ0FBaUM7Q0FDakMsZ0JBQWdCO0NBQ2hCLGFBQWE7RUFDWixzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLG1CQUFtQjtDQUNwQjs7QUFFRDtDQUNDLDBCQUEwQjtDQUMxQixpQ0FBaUM7Q0FDakMsOEJBQThCO0NBQzlCOztBQUVEO0NBQ0MsMEJBQTBCO0NBQzFCLGlDQUFpQztDQUNqQyw4QkFBOEI7Q0FDOUI7O0FBRUQ7Q0FDQywwQkFBMEI7Q0FDMUIsaUNBQWlDO0NBQ2pDLDhCQUE4QjtDQUM5Qjs7QUFFRDtDQUNDLDBCQUEwQjtDQUMxQixpQ0FBaUM7Q0FDakMsOEJBQThCO0NBQzlCOztBQUVEO0NBQ0MsOEJBQThCO0VBQzdCLHNDQUFzQztDQUN2Qyx5QkFBeUI7Q0FDekIiLCJmaWxlIjoic3JjL2FwcC9tZW51L21lbnUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBjYWRldGJsdWU7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vc3Rvb3BpZHBpZ2Vvbi5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTcvMDYvb25saW5lLWJsYWNramFjay1DYW5hZGEtb25saW5lLWNhc2luby1nYW1lcy5qcGdcIik7IC8qIFRoZSBpbWFnZSB1c2VkICovXG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2NjY2M7IC8qIFVzZWQgaWYgdGhlIGltYWdlIGlzIHVuYXZhaWxhYmxlICovXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjsgLyogQ2VudGVyIHRoZSBpbWFnZSAqL1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0OyAvKiBEbyBub3QgcmVwZWF0IHRoZSBpbWFnZSAqL1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyAvKiBSZXNpemUgdGhlIGJhY2tncm91bmQgaW1hZ2UgdG8gY292ZXIgdGhlIGVudGlyZSBjb250YWluZXIgKi9cbiAgbWluLWhlaWdodDogMTAwdmg7XG59XG5cbi5ncmVldGluZyB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGNvbG9yOiByZ2IoMTIyLCAyMzYsIDE5OCk7XG4gIGZvbnQtc2l6ZTogNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5hbmltYXRlIHtcblx0dHJhbnNpdGlvbjogYWxsIDAuMXM7XG5cdC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMXM7XG59XG5cbi5hY3Rpb24tYnV0dG9uIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBibG9jaztcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW46IDBweCAxMHB4IDEwcHggMHB4O1xuICBmbG9hdDogbGVmdDtcblx0Ym9yZGVyLXJhZGl1czogMTBweDtcblx0Zm9udC1mYW1pbHk6ICdQYWNpZmljbycsIGN1cnNpdmU7XG5cdGZvbnQtc2l6ZTogMjVweDtcblx0Y29sb3I6IGJsYWNrO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHRcbiAgd2lkdGg6IDMwMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5ibHVlIHtcblx0YmFja2dyb3VuZC1jb2xvcjogIzM0OThEQjtcblx0Ym9yZGVyLWJvdHRvbTogNXB4IHNvbGlkICMyOTgwQjk7XG5cdHRleHQtc2hhZG93OiAwcHggLTJweCAjMjk4MEI5O1xufVxuXG4ucmVkIHtcblx0YmFja2dyb3VuZC1jb2xvcjogI0U3NEMzQztcblx0Ym9yZGVyLWJvdHRvbTogNXB4IHNvbGlkICNCRDNFMzE7XG5cdHRleHQtc2hhZG93OiAwcHggLTJweCAjQkQzRTMxO1xufVxuXG4uZ3JlZW4ge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjODJCRjU2O1xuXHRib3JkZXItYm90dG9tOiA1cHggc29saWQgIzY2OTY0NDtcblx0dGV4dC1zaGFkb3c6IDBweCAtMnB4ICM2Njk2NDQ7XG59XG5cbi55ZWxsb3cge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjRjJDRjY2O1xuXHRib3JkZXItYm90dG9tOiA1cHggc29saWQgI0QxQjM1ODtcblx0dGV4dC1zaGFkb3c6IDBweCAtMnB4ICNEMUIzNTg7XG59XG5cbi5hY3Rpb24tYnV0dG9uOmFjdGl2ZSB7XG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCw1cHgpO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCw1cHgpO1xuXHRib3JkZXItYm90dG9tOiAxcHggc29saWQ7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/menu/menu.component.html":
/*!******************************************!*\
  !*** ./src/app/menu/menu.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <div class=\"greeting\">\n      Welcome to Black Jack\n  </div>\n\n      <a routerLink=\"/\" \n         class=\"action-button shadow animate green\">\n        Return to login\n      </a>\n  \n      <a  class=\"action-button shadow animate green\"\n          (click)=\"startSingleGame()\">\n        To singlePlayer game\n      </a>\n\n  <a routerLink=\"/multiplayer\" \n     class=\"action-button shadow animate green\">\n      To multiPlayer game\n  </a>\n</div>"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_data_base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/data-base.service */ "./src/app/services/data-base.service.ts");
/* harmony import */ var _services_game_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/game.service */ "./src/app/services/game.service.ts");
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
    function MenuComponent(_dataBaseService, _router, _gameService) {
        this._dataBaseService = _dataBaseService;
        this._router = _router;
        this._gameService = _gameService;
    }
    MenuComponent.prototype.startSingleGame = function () {
        var newRoom = {
            id: this._gameService.generateId(),
            maxplayers: 6,
            players: [],
            started: false,
            single: true
        };
        this._dataBaseService.addNewRoom(newRoom);
        this._router.navigate(['/game', newRoom.id]);
    };
    MenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.css */ "./src/app/menu/menu.component.css")]
        }),
        __metadata("design:paramtypes", [_services_data_base_service__WEBPACK_IMPORTED_MODULE_2__["DataBaseService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_game_service__WEBPACK_IMPORTED_MODULE_3__["GameService"]])
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

module.exports = ".wrapper {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  text-align: center;\n  background-color: green;\n  background-image: url(\"https://stoopidpigeon.com/wp-content/uploads/2017/06/online-blackjack-Canada-online-casino-games.jpg\"); /* The image used */\n  background-color: #cccccc; /* Used if the image is unavailable */\n  background-position: center; /* Center the image */\n  background-repeat: no-repeat; /* Do not repeat the image */\n  background-size: cover; /* Resize the background image to cover the entire container */\n  min-height: 100vh;\n}\n\na {\n  font-size: 20px;\n  color:rgb(2, 206, 189);\n}\n\n.wrapper-rooms{\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n}\n\n.hidden {\n  display: none;\n}\n\n.room {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  height: 300px;\n  width: 450px;\n  background-color: rgba(255, 255, 255, 0.4);\n  border: 1px solid rgb(0, 0, 0);\n  margin: 20px;\n  border-radius: 15px;\n  font-size: 26px;\n\n}\n\n#inputNewName { \n  font-size: 30px;\n  width: 300px;\n  margin: 0 auto 10px auto;\n}\n\nlabel{\n  font-size: 30px;\n}\n\n.wrapper-rooms button {\n  margin: 10px auto;\n}\n\n#maxPlayer {\n  font-size: 30px;\n  width: 40px;\n  margin: 0 auto 10px auto;\n  \n}\n\n.add-room-menu {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  max-width: 300px;\n  margin: auto;\n}\n\n.started {\n  background-color: rgba(255, 90, 90, 0.4);\n}\n\n.action-button {\n  cursor: pointer;\n  display: block;\n\tposition: relative;\n\tpadding: 10px 40px;\n  margin: 0px 10px 10px 0px;\n\tborder-radius: 10px;\n\tfont-family: 'Pacifico', cursive;\n\tfont-size: 25px;\n\tcolor: black;\n\ttext-decoration: none;\t\n}\n\n.blue {\n\tbackground-color: #3498DB;\n\tborder-bottom: 5px solid #2980B9;\n\ttext-shadow: 0px -2px #2980B9;\n}\n\n.red {\n\tbackground-color: #E74C3C;\n\tborder-bottom: 5px solid #BD3E31;\n\ttext-shadow: 0px -2px #BD3E31;\n}\n\n.green {\n\tbackground-color: #82BF56;\n\tborder-bottom: 5px solid #669644;\n\ttext-shadow: 0px -2px #669644;\n}\n\n.yellow {\n\tbackground-color: #F2CF66;\n\tborder-bottom: 5px solid #D1B358;\n\ttext-shadow: 0px -2px #D1B358;\n}\n\n.action-button:active {\n\ttransform: translate(0px,5px);\n  -webkit-transform: translate(0px,5px);\n\tborder-bottom: 1px solid;\n}\n\nlabel {\n  background-color: rgba(13, 222, 11, 0.5);\n  padding:10px;\n  border-radius: 15px;\n}\n\n.button-wrapper {\n  max-width: 300px;\n  margin: auto;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXVsdGlwbGF5ZXItbWVudS9tdWx0aXBsYXllci1tZW51LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2Qsd0JBQXdCO0VBQ3hCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsd0JBQXdCO0VBQ3hCLDhIQUE4SCxDQUFDLG9CQUFvQjtFQUNuSiwwQkFBMEIsQ0FBQyxzQ0FBc0M7RUFDakUsNEJBQTRCLENBQUMsc0JBQXNCO0VBQ25ELDZCQUE2QixDQUFDLDZCQUE2QjtFQUMzRCx1QkFBdUIsQ0FBQywrREFBK0Q7RUFDdkYsa0JBQWtCO0NBQ25COztBQUVEO0VBQ0UsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtDQUN4Qjs7QUFFRDtFQUNFLGNBQWM7RUFDZCx3QkFBd0I7RUFDeEIsb0JBQW9CO0VBQ3BCLGdCQUFnQjtDQUNqQjs7QUFFRDtFQUNFLGNBQWM7Q0FDZjs7QUFFRDtFQUNFLGNBQWM7RUFDZCx3QkFBd0I7RUFDeEIsdUJBQXVCO0VBQ3ZCLGNBQWM7RUFDZCxhQUFhO0VBQ2IsMkNBQTJDO0VBQzNDLCtCQUErQjtFQUMvQixhQUFhO0VBQ2Isb0JBQW9CO0VBQ3BCLGdCQUFnQjs7Q0FFakI7O0FBRUQ7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHlCQUF5QjtDQUMxQjs7QUFFRDtFQUNFLGdCQUFnQjtDQUNqQjs7QUFFRDtFQUNFLGtCQUFrQjtDQUNuQjs7QUFFRDtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1oseUJBQXlCOztDQUUxQjs7QUFFRDtFQUNFLGNBQWM7RUFDZCx3QkFBd0I7RUFDeEIsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQixhQUFhO0NBQ2Q7O0FBRUQ7RUFDRSx5Q0FBeUM7Q0FDMUM7O0FBRUQ7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtDQUNoQixtQkFBbUI7Q0FDbkIsbUJBQW1CO0VBQ2xCLDBCQUEwQjtDQUMzQixvQkFBb0I7Q0FDcEIsaUNBQWlDO0NBQ2pDLGdCQUFnQjtDQUNoQixhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCOztBQUVEO0NBQ0MsMEJBQTBCO0NBQzFCLGlDQUFpQztDQUNqQyw4QkFBOEI7Q0FDOUI7O0FBRUQ7Q0FDQywwQkFBMEI7Q0FDMUIsaUNBQWlDO0NBQ2pDLDhCQUE4QjtDQUM5Qjs7QUFFRDtDQUNDLDBCQUEwQjtDQUMxQixpQ0FBaUM7Q0FDakMsOEJBQThCO0NBQzlCOztBQUVEO0NBQ0MsMEJBQTBCO0NBQzFCLGlDQUFpQztDQUNqQyw4QkFBOEI7Q0FDOUI7O0FBRUQ7Q0FDQyw4QkFBOEI7RUFDN0Isc0NBQXNDO0NBQ3ZDLHlCQUF5QjtDQUN6Qjs7QUFFRDtFQUNFLHlDQUF5QztFQUN6QyxhQUFhO0VBQ2Isb0JBQW9CO0NBQ3JCOztBQUVEO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixjQUFjO0VBQ2Qsd0JBQXdCO0VBQ3hCLHVCQUF1QjtDQUN4QiIsImZpbGUiOiJzcmMvYXBwL211bHRpcGxheWVyLW1lbnUvbXVsdGlwbGF5ZXItbWVudS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly9zdG9vcGlkcGlnZW9uLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxNy8wNi9vbmxpbmUtYmxhY2tqYWNrLUNhbmFkYS1vbmxpbmUtY2FzaW5vLWdhbWVzLmpwZ1wiKTsgLyogVGhlIGltYWdlIHVzZWQgKi9cbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjY2NjYzsgLyogVXNlZCBpZiB0aGUgaW1hZ2UgaXMgdW5hdmFpbGFibGUgKi9cbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyOyAvKiBDZW50ZXIgdGhlIGltYWdlICovXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7IC8qIERvIG5vdCByZXBlYXQgdGhlIGltYWdlICovXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7IC8qIFJlc2l6ZSB0aGUgYmFja2dyb3VuZCBpbWFnZSB0byBjb3ZlciB0aGUgZW50aXJlIGNvbnRhaW5lciAqL1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbn1cblxuYSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6cmdiKDIsIDIwNiwgMTg5KTtcbn1cblxuLndyYXBwZXItcm9vbXN7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5oaWRkZW4ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4ucm9vbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IDMwMHB4O1xuICB3aWR0aDogNDUwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDAsIDAsIDApO1xuICBtYXJnaW46IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGZvbnQtc2l6ZTogMjZweDtcblxufVxuXG4jaW5wdXROZXdOYW1lIHsgXG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgd2lkdGg6IDMwMHB4O1xuICBtYXJnaW46IDAgYXV0byAxMHB4IGF1dG87XG59XG5cbmxhYmVse1xuICBmb250LXNpemU6IDMwcHg7XG59XG5cbi53cmFwcGVyLXJvb21zIGJ1dHRvbiB7XG4gIG1hcmdpbjogMTBweCBhdXRvO1xufVxuXG4jbWF4UGxheWVyIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICB3aWR0aDogNDBweDtcbiAgbWFyZ2luOiAwIGF1dG8gMTBweCBhdXRvO1xuICBcbn1cblxuLmFkZC1yb29tLW1lbnUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWF4LXdpZHRoOiAzMDBweDtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4uc3RhcnRlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCA5MCwgOTAsIDAuNCk7XG59XG5cbi5hY3Rpb24tYnV0dG9uIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBibG9jaztcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRwYWRkaW5nOiAxMHB4IDQwcHg7XG4gIG1hcmdpbjogMHB4IDEwcHggMTBweCAwcHg7XG5cdGJvcmRlci1yYWRpdXM6IDEwcHg7XG5cdGZvbnQtZmFtaWx5OiAnUGFjaWZpY28nLCBjdXJzaXZlO1xuXHRmb250LXNpemU6IDI1cHg7XG5cdGNvbG9yOiBibGFjaztcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1x0XG59XG5cbi5ibHVlIHtcblx0YmFja2dyb3VuZC1jb2xvcjogIzM0OThEQjtcblx0Ym9yZGVyLWJvdHRvbTogNXB4IHNvbGlkICMyOTgwQjk7XG5cdHRleHQtc2hhZG93OiAwcHggLTJweCAjMjk4MEI5O1xufVxuXG4ucmVkIHtcblx0YmFja2dyb3VuZC1jb2xvcjogI0U3NEMzQztcblx0Ym9yZGVyLWJvdHRvbTogNXB4IHNvbGlkICNCRDNFMzE7XG5cdHRleHQtc2hhZG93OiAwcHggLTJweCAjQkQzRTMxO1xufVxuXG4uZ3JlZW4ge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjODJCRjU2O1xuXHRib3JkZXItYm90dG9tOiA1cHggc29saWQgIzY2OTY0NDtcblx0dGV4dC1zaGFkb3c6IDBweCAtMnB4ICM2Njk2NDQ7XG59XG5cbi55ZWxsb3cge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjRjJDRjY2O1xuXHRib3JkZXItYm90dG9tOiA1cHggc29saWQgI0QxQjM1ODtcblx0dGV4dC1zaGFkb3c6IDBweCAtMnB4ICNEMUIzNTg7XG59XG5cbi5hY3Rpb24tYnV0dG9uOmFjdGl2ZSB7XG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCw1cHgpO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCw1cHgpO1xuXHRib3JkZXItYm90dG9tOiAxcHggc29saWQ7XG59XG5cbmxhYmVsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMywgMjIyLCAxMSwgMC41KTtcbiAgcGFkZGluZzoxMHB4O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xufVxuXG4uYnV0dG9uLXdyYXBwZXIge1xuICBtYXgtd2lkdGg6IDMwMHB4O1xuICBtYXJnaW46IGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/multiplayer-menu/multiplayer-menu.component.html":
/*!******************************************************************!*\
  !*** ./src/app/multiplayer-menu/multiplayer-menu.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <div class=\"button-wrapper\">\n    <a routerLink=\"/menu\" \n       class=\"action-button shadow animate blue\">\n      Return to menu\n    </a>\n  </div>\n\n  <div class=\"add-room-menu\">\n    <label for=\"maxPlayer\">\n      Max players:\n    </label>\n\n    <input type=\"number\" \n           min=\"2\"\n           max=\"6\"\n           onkeydown=\"return false\" \n           autofocus \n           placeholder=\"2\" \n           id=\"maxPlayer\" \n           [(ngModel)]=\"maxPlayers\">\n\n    <button type=\"button\" \n            (click)=\"addNewRoom()\" \n            class=\"add-button\"\n            class=\"action-button shadow animate yellow\">\n      Create room\n    </button>\n  </div>\n\n  <div class=\"wrapper-rooms\">\n    <div *ngFor=\"let room of rooms\">\n      <div class=\"room\" \n           [class.started]=\"room.started\" \n           *ngIf=\"!room.single\">\n        Number of room : {{ room.id }}\n  \n        <div>\n          maxplayers : {{ room.maxplayers }}\n        </div>\n  \n        <div>\n          players in room : {{room.players | players}} \n        </div>\n  \n        <button type=\"button\" \n                class=\"action-button shadow animate red add-button\" \n                (click)=\"deleteRoom(room.id)\">\n          Delete room\n        </button>\n  \n        <button type=\"button\" \n                class=\"action-button shadow animate green add-button\" \n                (click)=\"selectRoom(room.id)\">\n          Select room\n        </button>\n      </div>\n    </div>\n  </div>\n</div>"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_data_base_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/data-base.service */ "./src/app/services/data-base.service.ts");
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
    function MultiplayerMenuComponent(_dataBaseService, _userService, _router, _toastr) {
        this._dataBaseService = _dataBaseService;
        this._userService = _userService;
        this._router = _router;
        this._toastr = _toastr;
        this.isShowAddRoomMenu = false;
        this.maxPlayers = 2;
        this._destroy$$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    MultiplayerMenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._dataBaseService.getRooms$()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroy$$))
            .subscribe(function (rooms) {
            _this.rooms = rooms;
        });
        this._userService.getUser$()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroy$$))
            .subscribe(function (user) {
            _this.user = user;
        });
    };
    MultiplayerMenuComponent.prototype.selectRoom = function (roomId) {
        var selectedRoom = this.rooms.find(function (room) { return room.id === roomId; });
        if (selectedRoom.players
            && selectedRoom.maxplayers <= Object.keys(selectedRoom.players).length) {
            this._toastr.error('Max players limit!!');
            return;
        }
        if (selectedRoom.started) {
            this._toastr.error('Sorry, game is started');
            return;
        }
        this._router.navigate(['/game', roomId]);
    };
    MultiplayerMenuComponent.prototype.addNewRoom = function () {
        var _newIdForNewRoom = this.rooms.length !== 0
            ? Math.max.apply(Math, this.rooms.map(function (room) { return room.id; })) : 1;
        var newRoom = {
            id: _newIdForNewRoom + 1,
            maxplayers: this.maxPlayers,
            players: [],
            single: false,
            started: false
        };
        this._dataBaseService.addNewRoom(newRoom);
        this._router.navigate(['/game', newRoom.id]);
    };
    MultiplayerMenuComponent.prototype.deleteRoom = function (id) {
        var selectedRoom = this.rooms.find(function (room) { return room.id === id; });
        if (selectedRoom.players) {
            this._toastr.error('There are players in the room');
        }
        else {
            this._dataBaseService.deleteRoom(id);
        }
    };
    MultiplayerMenuComponent.prototype.ngOnDestroy = function () {
        this._destroy$$.next();
        this._destroy$$.complete();
    };
    MultiplayerMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-multiplayer-menu',
            template: __webpack_require__(/*! ./multiplayer-menu.component.html */ "./src/app/multiplayer-menu/multiplayer-menu.component.html"),
            styles: [__webpack_require__(/*! ./multiplayer-menu.component.css */ "./src/app/multiplayer-menu/multiplayer-menu.component.css")]
        }),
        __metadata("design:paramtypes", [_services_data_base_service__WEBPACK_IMPORTED_MODULE_6__["DataBaseService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], MultiplayerMenuComponent);
    return MultiplayerMenuComponent;
}());



/***/ }),

/***/ "./src/app/pipes/players.pipe.ts":
/*!***************************************!*\
  !*** ./src/app/pipes/players.pipe.ts ***!
  \***************************************/
/*! exports provided: PlayersPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayersPipe", function() { return PlayersPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PlayersPipe = /** @class */ (function () {
    function PlayersPipe() {
    }
    PlayersPipe.prototype.transform = function (value) {
        return value ? Object.values(value).length : 0;
    };
    PlayersPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'players'
        })
    ], PlayersPipe);
    return PlayersPipe;
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
    function DataBaseService(dataBase) {
        this.dataBase = dataBase;
    }
    DataBaseService.prototype.pushOneCard = function (roomId, userId, userSum, userHand, roomDeck) {
        this.savePlayerScore(roomId, userId, userSum);
        this.pushDeck(roomId, roomDeck);
        this.pushHandCard(roomId, userId, userHand);
    };
    DataBaseService.prototype.addNewRoom = function (newRoom) {
        this.dataBase.list('rooms').update('room' + newRoom.id, newRoom);
    };
    DataBaseService.prototype.deleteRoom = function (id) {
        this.dataBase.list('rooms').remove('room' + id);
    };
    DataBaseService.prototype.getRooms$ = function () {
        return this.dataBase.list('rooms').valueChanges();
    };
    DataBaseService.prototype.addPlayerToRoom = function (roomId, player) {
        this.dataBase.object("/rooms/room" + roomId + "/players/" + player.id).update(player);
    };
    DataBaseService.prototype.getUsers$ = function () {
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
        __metadata("design:paramtypes", [angularfire2_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"]])
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
        deck.forEach(function (card, index, deckInFor) {
            var _a;
            var changeIndex = Math.floor(Math.random() * deck.length);
            _a = [deckInFor[changeIndex], deckInFor[index]], deckInFor[index] = _a[0], deckInFor[changeIndex] = _a[1];
        });
        return deck;
    };
    GameService.prototype.generateId = function () {
        var date = new Date();
        var idParts = [
            date.getMonth(),
            date.getDate(),
            date.getHours(),
            date.getMinutes(),
            date.getSeconds(),
            date.getMilliseconds()
        ];
        return Number(idParts.join(''));
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