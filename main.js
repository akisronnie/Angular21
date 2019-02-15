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
        component: _game_game_component__WEBPACK_IMPORTED_MODULE_2__["GameComponent"],
        canActivate: [_guards_user_guard__WEBPACK_IMPORTED_MODULE_7__["UserGuard"]]
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
/* harmony import */ var _intro_intro_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./intro/intro.component */ "./src/app/intro/intro.component.ts");
/* harmony import */ var _guards_user_guard__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./guards/user.guard */ "./src/app/guards/user.guard.ts");
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/local-storage.service */ "./src/app/services/local-storage.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _pipes_players_pipe__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pipes/players.pipe */ "./src/app/pipes/players.pipe.ts");
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
                _intro_intro_component__WEBPACK_IMPORTED_MODULE_16__["IntroComponent"],
                _pipes_players_pipe__WEBPACK_IMPORTED_MODULE_20__["PlayersPipe"],
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
                _services_local_storage_service__WEBPACK_IMPORTED_MODULE_18__["LocalStorageService"],
                _guards_user_guard__WEBPACK_IMPORTED_MODULE_17__["UserGuard"],
                _services_user_service__WEBPACK_IMPORTED_MODULE_19__["UserService"],
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

module.exports = ".table {\n  margin: auto;\n  flex-wrap: wrap;\n  height: 800px;\n  background-image: url(\"https://stoopidpigeon.com/wp-content/uploads/2017/06/online-blackjack-Canada-online-casino-games.jpg\"); /* The image used */\n  background-color: #cccccc; /* Used if the image is unavailable */\n  background-position: center; /* Center the image */\n  background-repeat: no-repeat; /* Do not repeat the image */\n  background-size: cover; /* Resize the background image to cover the entire container */\n  position: relative;\n  display: flex;\n  justify-content: center;\n  text-align: center;\n  padding: 30px;\n}\n\n.turn{\n  color: darkred;\n}\n\n.players {\n  width: 300px;\n  height: 300px;\n   background-color: rgb(124, 218, 129, 0.4);\n  border-radius: 20px;\n  margin: 0 30px;\n}\n\n.player-hand {\n  display: flex;\n  justify-content: space-around;\n  flex-direction: row; \n  width: 100%;\n}\n\n.center-table {\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  width: 100%;\n  top: 50%;\n}\n\nbutton {\n  height: 70px;\n  width: 130px;\n  font-size: 25px;\n  margin-left: 30px;\n  margin-right: 30px;\n}\n\nimg {\n  width: 50px;\n  height: 100px;\n  border-radius: 10px;\n}\n\n.total,\n.comp-result,\n.score {\n  font-size: 52px;\n  color: black;\n  background-color: rgba(163, 163, 163, 0.438);\n  border-radius: 20px;\n}\n\n.comp-result {\n  margin-left: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZS9maWVsZC9maWVsZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsOEhBQThILENBQUMsb0JBQW9CO0VBQ25KLDBCQUEwQixDQUFDLHNDQUFzQztFQUNqRSw0QkFBNEIsQ0FBQyxzQkFBc0I7RUFDbkQsNkJBQTZCLENBQUMsNkJBQTZCO0VBQzNELHVCQUF1QixDQUFDLCtEQUErRDtFQUN2RixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLHdCQUF3QjtFQUN4QixtQkFBbUI7RUFDbkIsY0FBYztDQUNmOztBQUVEO0VBQ0UsZUFBZTtDQUNoQjs7QUFFRDtFQUNFLGFBQWE7RUFDYixjQUFjO0dBQ2IsMENBQTBDO0VBQzNDLG9CQUFvQjtFQUNwQixlQUFlO0NBQ2hCOztBQUVEO0VBQ0UsY0FBYztFQUNkLDhCQUE4QjtFQUM5QixvQkFBb0I7RUFDcEIsWUFBWTtDQUNiOztBQUVEO0VBQ0UsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCx3QkFBd0I7RUFDeEIsd0JBQXdCO0VBQ3hCLFlBQVk7RUFDWixTQUFTO0NBQ1Y7O0FBRUQ7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsbUJBQW1CO0NBQ3BCOztBQUVEO0VBQ0UsWUFBWTtFQUNaLGNBQWM7RUFDZCxvQkFBb0I7Q0FDckI7O0FBRUQ7OztFQUdFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsNkNBQTZDO0VBQzdDLG9CQUFvQjtDQUNyQjs7QUFFRDtFQUNFLGtCQUFrQjtDQUNuQiIsImZpbGUiOiJzcmMvYXBwL2dhbWUvZmllbGQvZmllbGQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWJsZSB7XG4gIG1hcmdpbjogYXV0bztcbiAgZmxleC13cmFwOiB3cmFwO1xuICBoZWlnaHQ6IDgwMHB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwczovL3N0b29waWRwaWdlb24uY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE3LzA2L29ubGluZS1ibGFja2phY2stQ2FuYWRhLW9ubGluZS1jYXNpbm8tZ2FtZXMuanBnXCIpOyAvKiBUaGUgaW1hZ2UgdXNlZCAqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjY2NjOyAvKiBVc2VkIGlmIHRoZSBpbWFnZSBpcyB1bmF2YWlsYWJsZSAqL1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7IC8qIENlbnRlciB0aGUgaW1hZ2UgKi9cbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDsgLyogRG8gbm90IHJlcGVhdCB0aGUgaW1hZ2UgKi9cbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgLyogUmVzaXplIHRoZSBiYWNrZ3JvdW5kIGltYWdlIHRvIGNvdmVyIHRoZSBlbnRpcmUgY29udGFpbmVyICovXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMzBweDtcbn1cblxuLnR1cm57XG4gIGNvbG9yOiBkYXJrcmVkO1xufVxuXG4ucGxheWVycyB7XG4gIHdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMjQsIDIxOCwgMTI5LCAwLjQpO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBtYXJnaW46IDAgMzBweDtcbn1cblxuLnBsYXllci1oYW5kIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7IFxuICB3aWR0aDogMTAwJTtcbn1cblxuLmNlbnRlci10YWJsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICB3aWR0aDogMTAwJTtcbiAgdG9wOiA1MCU7XG59XG5cbmJ1dHRvbiB7XG4gIGhlaWdodDogNzBweDtcbiAgd2lkdGg6IDEzMHB4O1xuICBmb250LXNpemU6IDI1cHg7XG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG59XG5cbmltZyB7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4udG90YWwsXG4uY29tcC1yZXN1bHQsXG4uc2NvcmUge1xuICBmb250LXNpemU6IDUycHg7XG4gIGNvbG9yOiBibGFjaztcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNjMsIDE2MywgMTYzLCAwLjQzOCk7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG5cbi5jb21wLXJlc3VsdCB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/game/field/field.component.html":
/*!*************************************************!*\
  !*** ./src/app/game/field/field.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"table\" *ngIf=\"activeRoom\">\n  \n  <div class=\"players\" *ngFor=\"let player of activeRoom.players\">\n    <h3 [class.turn]=\"player.turn\">\n      Player Name: {{ player.name }}\n    </h3>\n\n    <h3>\n      Player wins: {{ player.wins }} games: {{ player.loses }}\n    </h3>\n\n    <h3 *ngIf=\"user.id === player.id || !activeRoom.started\">\n      Score: {{ player.sum }}\n    </h3>\n\n    <div class=\"player-hand\">\n      <img *ngFor=\"let card of player.hand\" [src]=\"card.src\">\n    </div>\n  </div>\n</section>\n"

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

module.exports = "<app-score [activeRoom] = \"activeRoom\"\n           [user] = \"user\"\n           [message] = \"message\"\n           (userReady)=\"userReady()\"\n           [youTurn]=\"youTurn\"\n           [finish]=\"finish\"\n           (getPlayer)=\"getYou()\"\n           (enoughGame)=\"enoughGame()\"\n           (finishGame)=\"finish()\"\n           (addBots)=\"addBots()\"\n           (deleteBots)=\"deleteBots()\">\n</app-score>\n\n<app-field [activeRoom]=\"activeRoom\"\n           [user] = \"user\"\n           [youTurn]=\"youTurn\">\n</app-field>\n"

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
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! faker */ "./node_modules/faker/index.js");
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(faker__WEBPACK_IMPORTED_MODULE_7__);
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
        this.youTurn = false;
        this._destroy$$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
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
                if (!userInRoom && room.started) {
                    alert('Sorry, game is started');
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
            if (_this.activeRoom.players.length < 2 && _this.activeRoom.single) {
                _this.addBots();
            }
            _this.activeRoom.players.forEach(function (player) {
                if (!_this.activeRoom.started && player.hand) {
                    player.hand.map(function (card) {
                        card.src = "./assets/img/" + card.name + card.suits + ".png";
                    });
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
                    _this.user.hand.map(function (card) {
                        card.src = "./assets/img/" + card.name + card.suits + ".png";
                    });
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
            var oneHave21 = _this.activeRoom.players.some(function (player) { return player.sum === 21; });
            var allFinish = _this.activeRoom.players.every(function (player) { return player.enough; });
            if (allFinish && _this.activeRoom.started && _this.user.isActive || oneHave21 && _this.activeRoom.started && _this.user.isActive) {
                _this._dataBaseService.playerReady(_this.activeRoom.id, _this.user.id, false);
                _this.finish();
            }
        });
    };
    GameComponent.prototype._botTurn = function (botId) {
        this._dataBaseService.changeTurn(this.activeRoom.id, botId, false);
        var bot;
        this.activeRoom.players.forEach(function (player) {
            if (player.id === botId) {
                bot = player;
            }
        });
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
        if (this.activeRoom.players.length >= this.activeRoom.maxplayers) {
            alert('room is full');
            return;
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
        var botId = Number(components.join(''));
        var newBot = {
            name: faker__WEBPACK_IMPORTED_MODULE_7__["name"].findName(),
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
        this.message = 'New game is started!!!';
        if (this.user.playerMaster) {
            this.activeRoom.players.forEach(function (player) {
                if (player.sum === 21) {
                    _this._dataBaseService.savePlayerScore(_this.activeRoom.id, player.id, 0);
                }
            });
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
                _this._dataBaseService.updateScore(_this.activeRoom.id, player.id, 'loses', player.loses + 1);
            }
            else {
                _this._dataBaseService.updateScore(_this.activeRoom.id, player.id, 'loses', player.loses + 1);
            }
        });
    };
    GameComponent.prototype.ngOnDestroy = function () {
        this._destroy$$.next();
        var nobody = true;
        if (this.user.playerMaster && this.activeRoom.players !== undefined) {
            var players = this.activeRoom.players;
            for (var index = 0; index < players.length; index++) {
                if (!players[index].playerMaster && !players[index].isBot) {
                    nobody = false;
                    this._dataBaseService.setPlayerMaster(this.activeRoom.id, players[index].id);
                    break;
                }
            }
            if (nobody) {
                this._dataBaseService.deleteRoom(this.activeRoom.id);
            }
        }
        if (this.activeRoom) {
            this.user.turn = false;
            this.user.hand = [];
            this.user.isActive = false;
            this.user.playerMaster = false;
            this.user.sum = 0;
            this._userService.setUser(this.user);
            this._dataBaseService.addUsers(this.user);
            this._dataBaseService.removeUserFromRoom(this.activeRoom.id, this.user.id);
        }
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



/***/ }),

/***/ "./src/app/game/score/score.component.css":
/*!************************************************!*\
  !*** ./src/app/game/score/score.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".score {\n  padding: 10px;\n  font-size: 30px;\n  color: rgb(0, 255, 255);\n}\n\n.return-link{\npadding: 20px;\n}\n\n.score,\n.score-container {\n   text-align: center;\n}\n\n.score {\n  background-color: rgba(0, 0, 0, 0.5)\n}\n\n.score-container {\n background-color: black;\n background-image: url('https://ak9.picdn.net/shutterstock/videos/9648839/thumb/1.jpg');\n background-size: 580px;\n background-color: black;\n}\n\na {\n  font-size: 33px;\n}\n\n.master {\n  color:red;\n}\n\n.action-button {\n  cursor: pointer;\n\tposition: relative;\n\tpadding: 10px 40px;\n  margin: 0px 10px 10px 0px;\n\tborder-radius: 10px;\n\tfont-family: 'Pacifico', cursive;\n\tfont-size: 25px;\n\tcolor: black;\n\ttext-decoration: none;\t\n}\n\n.blue {\n\tbackground-color: #3498DB;\n\tborder-bottom: 5px solid #2980B9;\n\ttext-shadow: 0px -2px #2980B9;\n}\n\n.red {\n\tbackground-color: #E74C3C;\n\tborder-bottom: 5px solid #BD3E31;\n\ttext-shadow: 0px -2px #BD3E31;\n}\n\n.green {\n\tbackground-color: #82BF56;\n\tborder-bottom: 5px solid #669644;\n\ttext-shadow: 0px -2px #669644;\n}\n\n.yellow {\n\tbackground-color: #F2CF66;\n\tborder-bottom: 5px solid #D1B358;\n\ttext-shadow: 0px -2px #D1B358;\n}\n\n.action-button:active {\n\ttransform: translate(0px,5px);\n  -webkit-transform: translate(0px,5px);\n\tborder-bottom: 1px solid;\n}\n\n.ready {\n  color:greenyellow\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZS9zY29yZS9zY29yZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQix3QkFBd0I7Q0FDekI7O0FBRUQ7QUFDQSxjQUFjO0NBQ2I7O0FBRUQ7O0dBRUcsbUJBQW1CO0NBQ3JCOztBQUNEO0VBQ0Usb0NBQW9DO0NBQ3JDOztBQUNEO0NBQ0Msd0JBQXdCO0NBQ3hCLHVGQUF1RjtDQUN2Rix1QkFBdUI7Q0FDdkIsd0JBQXdCO0NBQ3hCOztBQUVEO0VBQ0UsZ0JBQWdCO0NBQ2pCOztBQUVEO0VBQ0UsVUFBVTtDQUNYOztBQUVEO0VBQ0UsZ0JBQWdCO0NBQ2pCLG1CQUFtQjtDQUNuQixtQkFBbUI7RUFDbEIsMEJBQTBCO0NBQzNCLG9CQUFvQjtDQUNwQixpQ0FBaUM7Q0FDakMsZ0JBQWdCO0NBQ2hCLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEI7O0FBRUQ7Q0FDQywwQkFBMEI7Q0FDMUIsaUNBQWlDO0NBQ2pDLDhCQUE4QjtDQUM5Qjs7QUFFRDtDQUNDLDBCQUEwQjtDQUMxQixpQ0FBaUM7Q0FDakMsOEJBQThCO0NBQzlCOztBQUVEO0NBQ0MsMEJBQTBCO0NBQzFCLGlDQUFpQztDQUNqQyw4QkFBOEI7Q0FDOUI7O0FBRUQ7Q0FDQywwQkFBMEI7Q0FDMUIsaUNBQWlDO0NBQ2pDLDhCQUE4QjtDQUM5Qjs7QUFFRDtDQUNDLDhCQUE4QjtFQUM3QixzQ0FBc0M7Q0FDdkMseUJBQXlCO0NBQ3pCOztBQUVEO0VBQ0UsaUJBQWlCO0NBQ2xCIiwiZmlsZSI6InNyYy9hcHAvZ2FtZS9zY29yZS9zY29yZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNjb3JlIHtcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBjb2xvcjogcmdiKDAsIDI1NSwgMjU1KTtcbn1cblxuLnJldHVybi1saW5re1xucGFkZGluZzogMjBweDtcbn1cblxuLnNjb3JlLFxuLnNjb3JlLWNvbnRhaW5lciB7XG4gICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uc2NvcmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSlcbn1cbi5zY29yZS1jb250YWluZXIge1xuIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9hazkucGljZG4ubmV0L3NodXR0ZXJzdG9jay92aWRlb3MvOTY0ODgzOS90aHVtYi8xLmpwZycpO1xuIGJhY2tncm91bmQtc2l6ZTogNTgwcHg7XG4gYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG59XG5cbmEge1xuICBmb250LXNpemU6IDMzcHg7XG59XG5cbi5tYXN0ZXIge1xuICBjb2xvcjpyZWQ7XG59XG5cbi5hY3Rpb24tYnV0dG9uIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdHBhZGRpbmc6IDEwcHggNDBweDtcbiAgbWFyZ2luOiAwcHggMTBweCAxMHB4IDBweDtcblx0Ym9yZGVyLXJhZGl1czogMTBweDtcblx0Zm9udC1mYW1pbHk6ICdQYWNpZmljbycsIGN1cnNpdmU7XG5cdGZvbnQtc2l6ZTogMjVweDtcblx0Y29sb3I6IGJsYWNrO1xuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XHRcbn1cblxuLmJsdWUge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMzQ5OERCO1xuXHRib3JkZXItYm90dG9tOiA1cHggc29saWQgIzI5ODBCOTtcblx0dGV4dC1zaGFkb3c6IDBweCAtMnB4ICMyOTgwQjk7XG59XG5cbi5yZWQge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjRTc0QzNDO1xuXHRib3JkZXItYm90dG9tOiA1cHggc29saWQgI0JEM0UzMTtcblx0dGV4dC1zaGFkb3c6IDBweCAtMnB4ICNCRDNFMzE7XG59XG5cbi5ncmVlbiB7XG5cdGJhY2tncm91bmQtY29sb3I6ICM4MkJGNTY7XG5cdGJvcmRlci1ib3R0b206IDVweCBzb2xpZCAjNjY5NjQ0O1xuXHR0ZXh0LXNoYWRvdzogMHB4IC0ycHggIzY2OTY0NDtcbn1cblxuLnllbGxvdyB7XG5cdGJhY2tncm91bmQtY29sb3I6ICNGMkNGNjY7XG5cdGJvcmRlci1ib3R0b206IDVweCBzb2xpZCAjRDFCMzU4O1xuXHR0ZXh0LXNoYWRvdzogMHB4IC0ycHggI0QxQjM1ODtcbn1cblxuLmFjdGlvbi1idXR0b246YWN0aXZlIHtcblx0dHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LDVweCk7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LDVweCk7XG5cdGJvcmRlci1ib3R0b206IDFweCBzb2xpZDtcbn1cblxuLnJlYWR5IHtcbiAgY29sb3I6Z3JlZW55ZWxsb3dcbn0iXX0= */"

/***/ }),

/***/ "./src/app/game/score/score.component.html":
/*!*************************************************!*\
  !*** ./src/app/game/score/score.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"score-container\">\n  <a routerLink=\"/multiplayer\" \n     *ngIf=\"activeRoom && !activeRoom.single\"\n     class=\"action-button shadow animate green return-link\">\n    Return to multiplayer menu.\n  </a>\n\n  <a routerLink=\"/menu\" \n     *ngIf=\"activeRoom && activeRoom.single\"\n     class=\"action-button shadow animate green\">\n    Return to menu.\n  </a>\n\n  <div class=\"score\" \n       *ngIf=\"activeRoom && !activeRoom.single\">\n    Players in room: \n\n    <span *ngFor=\"let player of activeRoom.players\" \n          [class.ready]=\"player.isActive\">\n      \\ {{player.name}} / \n    </span>\n  </div>\n\n  <div class=\"score\" \n       *ngIf=\"activeRoom && !activeRoom.single\">\n    ID ROOM:{{ activeRoom.id }} Max players: {{ activeRoom.maxplayers}}\n  </div>\n\n  <div class=\"score\">\n    {{ message }}\n  </div>\n\n  <div>\n    <button class=\"action-button shadow animate\" \n            *ngIf=\"activeRoom && !activeRoom.started && activeRoom.players && activeRoom.players.length > 1\"\n            [class.green]=\"user.isActive\"\n            [class.yellow]=\"!user.isActive\"\n            (click)=\"ready()\"> \n      Ready {{user.isActive}}\n    </button>\n\n    <button class=\"action-button shadow animate blue\" \n            *ngIf=\"activeRoom && !activeRoom.started && user.playerMaster\"\n            (click)=\"addBot()\"> \n      Add bot\n    </button>\n\n    <button class=\"action-button shadow animate red\" \n            *ngIf=\"activeRoom && !activeRoom.started && user.playerMaster\"\n            (click)=\"deleteBot()\"> \n      Delete bot\n    </button>\n\n    <button class=\"action-button shadow animate blue\" \n            type=\"button\" \n            *ngIf=\"activeRoom && activeRoom.started \"\n            [disabled]=\"!youTurn\" \n            (click)=\"this.getPlayer.emit()\">\n      Get Card\n    </button>\n\n    <button class=\"action-button shadow animate red\" \n            type=\"button\" \n            *ngIf=\"activeRoom && activeRoom.started \" \n            [disabled]=\"!youTurn\"\n            (click)=\"this.enoughGame.emit()\">\n      Enough!\n    </button>\n  </div>\n\n  <div class=\"score\">\n    Wins:{{ user.wins }} Games:{{ user.loses }}\n  </div>\n \n</div>"

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

module.exports = ".wrapper {\n  display: flex;\n  justify-content: center;\n  font-size: 30px;\n  flex-direction: column;\n  align-items: center;\n  background-image: url(\"https://stoopidpigeon.com/wp-content/uploads/2017/06/online-blackjack-Canada-online-casino-games.jpg\"); /* The image used */\n  background-color: #cccccc; /* Used if the image is unavailable */\n  background-position: center; /* Center the image */\n  background-repeat: no-repeat; /* Do not repeat the image */\n  background-size: cover; /* Resize the background image to cover the entire container */\n  min-height: 100vh;\n}\n\ntable {\n  border-collapse: collapse;\n  color:black;\n  padding: 10px;\n  background-color: rgba(255, 255, 255, 0.6);\n  font-size: 20px;\n}\n\ntable, th, td {\n  text-align: center;\n  border: 1px solid black;\n}\n\ntable button {\n  width: 150px;\n  height: 30px;\n  font-size: 16px;\n  margin-bottom: 0px;\n}\n\n.enter-button {\n  background: transparent;\n  border: 0;\n  padding: 0;\n  cursor: pointer;\n  outline: 0;\n  -webkit-appearance: none;\n}\n\n/* Custom */\n\n.enter-button {\n  display: inline-block;\n  position: relative;\n  padding: 20px 38px;\n  top: 0;\n  font-size: 30px;\n  font-family: \"Open Sans\", Helvetica;\n  border-radius: 4px;\n  border-bottom: 1px solid rgba( 28, 227, 125, 0.5 );\n  background: rgba( 22, 230, 137, 1 );\n  color: black;\n  box-shadow: 0px 0px 0px rgba( 15, 165, 60, 0.1 );\n  \n  -webkit-transform: translateZ(0);\n          transform: translateZ(0);\n  transition: all 0.2s ease;\n}\n\n.enter-button:hover {\n  top: -10px;\n  box-shadow: 0px 10px 10px rgba( 15, 165, 60, 0.2 );\n  \n  -webkit-transform: rotateX(20deg);\n          transform: rotateX(20deg);\n}\n\n.enter-button:active {\n  top: 0px;\n  box-shadow: 0px 0px 0px rgba( 15, 165, 60, 0.0 );\n  background: rgba( 20, 224, 133, 1 );\n}\n\n.welcome {\nmargin-bottom: 20px;\ncolor: rgb(122, 236, 198);\nfont-size: 50px;\nbackground-color: rgba(0, 0, 0, 0.4);\npadding: 10px;\nborder-radius: 15px;\n}\n\ninput {\n  font-size: 30px;\n  margin-bottom: 30px;\n}\n\nbutton {\n  cursor: pointer;\n  width: 300px;\n  height: 70px;\n  font-size: 30px;\n  margin-bottom: 20px;\n}\n\n.userList {\n  border: 1px solid black;\n  margin: 10px;\n}\n\n.button {\n  position: relative;\n  \n  display: block;\n  width: 55%;\n  padding: 5px 5px;\n  border-radius: 50px;\n  text-align: center;\n  color: black;\n  text-decoration: none;\n  font-weight: bold;\n  font-size: 24px;\n  \n  -webkit-tap-highlight-color: rgba(black, 0);\n  \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW50cm8vaW50cm8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCx3QkFBd0I7RUFDeEIsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixvQkFBb0I7RUFDcEIsOEhBQThILENBQUMsb0JBQW9CO0VBQ25KLDBCQUEwQixDQUFDLHNDQUFzQztFQUNqRSw0QkFBNEIsQ0FBQyxzQkFBc0I7RUFDbkQsNkJBQTZCLENBQUMsNkJBQTZCO0VBQzNELHVCQUF1QixDQUFDLCtEQUErRDtFQUN2RixrQkFBa0I7Q0FDbkI7O0FBRUQ7RUFDRSwwQkFBMEI7RUFDMUIsWUFBWTtFQUNaLGNBQWM7RUFDZCwyQ0FBMkM7RUFDM0MsZ0JBQWdCO0NBQ2pCOztBQUVEO0VBQ0UsbUJBQW1CO0VBQ25CLHdCQUF3QjtDQUN6Qjs7QUFFRDtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtDQUNwQjs7QUFFRDtFQUNFLHdCQUF3QjtFQUN4QixVQUFVO0VBQ1YsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gseUJBQXlCO0NBQzFCOztBQUVELFlBQVk7O0FBQ1o7RUFDRSxzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixPQUFPO0VBQ1AsZ0JBQWdCO0VBQ2hCLG9DQUFvQztFQUNwQyxtQkFBbUI7RUFDbkIsbURBQW1EO0VBQ25ELG9DQUFvQztFQUNwQyxhQUFhO0VBQ2IsaURBQWlEOztFQUVqRCxpQ0FBaUM7VUFHekIseUJBQXlCO0VBS3pCLDBCQUEwQjtDQUNuQzs7QUFFRDtFQUNFLFdBQVc7RUFDWCxtREFBbUQ7O0VBRW5ELGtDQUFrQztVQUcxQiwwQkFBMEI7Q0FDbkM7O0FBRUQ7RUFDRSxTQUFTO0VBQ1QsaURBQWlEO0VBQ2pELG9DQUFvQztDQUNyQzs7QUFFRDtBQUNBLG9CQUFvQjtBQUNwQiwwQkFBMEI7QUFDMUIsZ0JBQWdCO0FBQ2hCLHFDQUFxQztBQUNyQyxjQUFjO0FBQ2Qsb0JBQW9CO0NBQ25COztBQUVEO0VBQ0UsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtDQUNyQjs7QUFFRDtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixvQkFBb0I7Q0FDckI7O0FBRUQ7RUFDRSx3QkFBd0I7RUFDeEIsYUFBYTtDQUNkOztBQUdEO0VBQ0UsbUJBQW1COztFQUVuQixlQUFlO0VBQ2YsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjs7RUFFaEIsNENBQTRDOztDQUU3QyIsImZpbGUiOiJzcmMvYXBwL2ludHJvL2ludHJvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXNpemU6IDMwcHg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vc3Rvb3BpZHBpZ2Vvbi5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTcvMDYvb25saW5lLWJsYWNramFjay1DYW5hZGEtb25saW5lLWNhc2luby1nYW1lcy5qcGdcIik7IC8qIFRoZSBpbWFnZSB1c2VkICovXG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2NjY2M7IC8qIFVzZWQgaWYgdGhlIGltYWdlIGlzIHVuYXZhaWxhYmxlICovXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjsgLyogQ2VudGVyIHRoZSBpbWFnZSAqL1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0OyAvKiBEbyBub3QgcmVwZWF0IHRoZSBpbWFnZSAqL1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyAvKiBSZXNpemUgdGhlIGJhY2tncm91bmQgaW1hZ2UgdG8gY292ZXIgdGhlIGVudGlyZSBjb250YWluZXIgKi9cbiAgbWluLWhlaWdodDogMTAwdmg7XG59XG5cbnRhYmxlIHtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgY29sb3I6YmxhY2s7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG50YWJsZSwgdGgsIHRkIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbn1cblxudGFibGUgYnV0dG9uIHtcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuXG4uZW50ZXItYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMDtcbiAgcGFkZGluZzogMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBvdXRsaW5lOiAwO1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG59XG5cbi8qIEN1c3RvbSAqL1xuLmVudGVyLWJ1dHRvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAyMHB4IDM4cHg7XG4gIHRvcDogMDtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgSGVsdmV0aWNhO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKCAyOCwgMjI3LCAxMjUsIDAuNSApO1xuICBiYWNrZ3JvdW5kOiByZ2JhKCAyMiwgMjMwLCAxMzcsIDEgKTtcbiAgY29sb3I6IGJsYWNrO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDBweCByZ2JhKCAxNSwgMTY1LCA2MCwgMC4xICk7XG4gIFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbiAgICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuICAgICAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbn1cblxuLmVudGVyLWJ1dHRvbjpob3ZlciB7XG4gIHRvcDogLTEwcHg7XG4gIGJveC1zaGFkb3c6IDBweCAxMHB4IDEwcHggcmdiYSggMTUsIDE2NSwgNjAsIDAuMiApO1xuICBcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVgoMjBkZWcpO1xuICAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlWCgyMGRlZyk7XG4gICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGVYKDIwZGVnKTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoMjBkZWcpO1xufVxuXG4uZW50ZXItYnV0dG9uOmFjdGl2ZSB7XG4gIHRvcDogMHB4O1xuICBib3gtc2hhZG93OiAwcHggMHB4IDBweCByZ2JhKCAxNSwgMTY1LCA2MCwgMC4wICk7XG4gIGJhY2tncm91bmQ6IHJnYmEoIDIwLCAyMjQsIDEzMywgMSApO1xufVxuXG4ud2VsY29tZSB7XG5tYXJnaW4tYm90dG9tOiAyMHB4O1xuY29sb3I6IHJnYigxMjIsIDIzNiwgMTk4KTtcbmZvbnQtc2l6ZTogNTBweDtcbmJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcbnBhZGRpbmc6IDEwcHg7XG5ib3JkZXItcmFkaXVzOiAxNXB4O1xufVxuXG5pbnB1dCB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuYnV0dG9uIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB3aWR0aDogMzAwcHg7XG4gIGhlaWdodDogNzBweDtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4udXNlckxpc3Qge1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgbWFyZ2luOiAxMHB4O1xufVxuXG5cbi5idXR0b24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIFxuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDU1JTtcbiAgcGFkZGluZzogNXB4IDVweDtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogYmxhY2s7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgXG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogcmdiYShibGFjaywgMCk7XG4gIFxufSJdfQ== */"

/***/ }),

/***/ "./src/app/intro/intro.component.html":
/*!********************************************!*\
  !*** ./src/app/intro/intro.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <div class=\"welcome\">\n    Welcome to Black Jack!!!\n  </div>\n\n  <input type=\"text\" placeholder=\"Enter your name\" [(ngModel)]=\"userName\">\n\n  <input type=\"text\" *ngIf=\"users\" placeholder=\"Enter your password\" [(ngModel)]=\"userPassword\">\n\n  <button type=\"button\" class=\"enter-button\" (click)=\"enter()\">\n    Enter\n  </button>\n\n  <table>\n    <thead>\n      <tr>\n        <th>User name</th>\n\n        <th>Wins</th>\n\n        <th>Games</th>\n\n        <th>Select user</th>\n      </tr>\n    </thead>\n\n    <tbody>\n      <tr *ngFor=\"let user of users\">\n        <td>{{user.name}}</td>\n\n        <td>{{user.wins}}</td>\n\n        <td>{{user.loses}}</td>\n        \n        <td>\n          <button type=\"button\" class=\"button\"\n                  (click)=selectUser(user.name)>\n            select user\n          </button>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</div>"

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
            _this.users = Object.values(_this.users).sort(function (user1, user2) { return user2.wins - user1.wins; });
        });
    };
    IntroComponent.prototype.enter = function () {
        var _this = this;
        if (this.userName === undefined || this.userName === '' || this.userPassword === undefined
            || this.userPassword === '') {
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

/***/ "./src/app/menu/menu.component.css":
/*!*****************************************!*\
  !*** ./src/app/menu/menu.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper {\n  width: 100%;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: cadetblue;\n  flex-direction: column;\n  background-image: url(\"https://stoopidpigeon.com/wp-content/uploads/2017/06/online-blackjack-Canada-online-casino-games.jpg\"); /* The image used */\n  background-color: #cccccc; /* Used if the image is unavailable */\n  background-position: center; /* Center the image */\n  background-repeat: no-repeat; /* Do not repeat the image */\n  background-size: cover; /* Resize the background image to cover the entire container */\n  min-height: 100vh;\n}\n\n.meeting {\n  margin-bottom: 20px;\n  color: rgb(122, 236, 198);\n  font-size: 50px;\n  background-color: rgba(0, 0, 0, 0.4);\n  padding: 10px;\n  border-radius: 15px;\n  text-align: center;\n}\n\n.animate {\n\ttransition: all 0.1s;\n\t-webkit-transition: all 0.1s;\n}\n\n.action-button {\n  cursor: pointer;\n  display: block;\n\tposition: relative;\n\tpadding: 10px 40px;\n  margin: 0px 10px 10px 0px;\n  float: left;\n\tborder-radius: 10px;\n\tfont-family: 'Pacifico', cursive;\n\tfont-size: 25px;\n\tcolor: black;\n\ttext-decoration: none;\t\n}\n\n.blue {\n\tbackground-color: #3498DB;\n\tborder-bottom: 5px solid #2980B9;\n\ttext-shadow: 0px -2px #2980B9;\n}\n\n.red {\n\tbackground-color: #E74C3C;\n\tborder-bottom: 5px solid #BD3E31;\n\ttext-shadow: 0px -2px #BD3E31;\n}\n\n.green {\n\tbackground-color: #82BF56;\n\tborder-bottom: 5px solid #669644;\n\ttext-shadow: 0px -2px #669644;\n}\n\n.yellow {\n\tbackground-color: #F2CF66;\n\tborder-bottom: 5px solid #D1B358;\n\ttext-shadow: 0px -2px #D1B358;\n}\n\n.action-button:active {\n\ttransform: translate(0px,5px);\n  -webkit-transform: translate(0px,5px);\n\tborder-bottom: 1px solid;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS9tZW51LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osY0FBYztFQUNkLGNBQWM7RUFDZCx3QkFBd0I7RUFDeEIsb0JBQW9CO0VBQ3BCLDRCQUE0QjtFQUM1Qix1QkFBdUI7RUFDdkIsOEhBQThILENBQUMsb0JBQW9CO0VBQ25KLDBCQUEwQixDQUFDLHNDQUFzQztFQUNqRSw0QkFBNEIsQ0FBQyxzQkFBc0I7RUFDbkQsNkJBQTZCLENBQUMsNkJBQTZCO0VBQzNELHVCQUF1QixDQUFDLCtEQUErRDtFQUN2RixrQkFBa0I7Q0FDbkI7O0FBRUQ7RUFDRSxvQkFBb0I7RUFDcEIsMEJBQTBCO0VBQzFCLGdCQUFnQjtFQUNoQixxQ0FBcUM7RUFDckMsY0FBYztFQUNkLG9CQUFvQjtFQUNwQixtQkFBbUI7Q0FDcEI7O0FBR0Q7Q0FDQyxxQkFBcUI7Q0FDckIsNkJBQTZCO0NBQzdCOztBQUVEO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7Q0FDaEIsbUJBQW1CO0NBQ25CLG1CQUFtQjtFQUNsQiwwQkFBMEI7RUFDMUIsWUFBWTtDQUNiLG9CQUFvQjtDQUNwQixpQ0FBaUM7Q0FDakMsZ0JBQWdCO0NBQ2hCLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEI7O0FBRUQ7Q0FDQywwQkFBMEI7Q0FDMUIsaUNBQWlDO0NBQ2pDLDhCQUE4QjtDQUM5Qjs7QUFFRDtDQUNDLDBCQUEwQjtDQUMxQixpQ0FBaUM7Q0FDakMsOEJBQThCO0NBQzlCOztBQUVEO0NBQ0MsMEJBQTBCO0NBQzFCLGlDQUFpQztDQUNqQyw4QkFBOEI7Q0FDOUI7O0FBRUQ7Q0FDQywwQkFBMEI7Q0FDMUIsaUNBQWlDO0NBQ2pDLDhCQUE4QjtDQUM5Qjs7QUFFRDtDQUNDLDhCQUE4QjtFQUM3QixzQ0FBc0M7Q0FDdkMseUJBQXlCO0NBQ3pCIiwiZmlsZSI6InNyYy9hcHAvbWVudS9tZW51LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogY2FkZXRibHVlO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwczovL3N0b29waWRwaWdlb24uY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE3LzA2L29ubGluZS1ibGFja2phY2stQ2FuYWRhLW9ubGluZS1jYXNpbm8tZ2FtZXMuanBnXCIpOyAvKiBUaGUgaW1hZ2UgdXNlZCAqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjY2NjOyAvKiBVc2VkIGlmIHRoZSBpbWFnZSBpcyB1bmF2YWlsYWJsZSAqL1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7IC8qIENlbnRlciB0aGUgaW1hZ2UgKi9cbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDsgLyogRG8gbm90IHJlcGVhdCB0aGUgaW1hZ2UgKi9cbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgLyogUmVzaXplIHRoZSBiYWNrZ3JvdW5kIGltYWdlIHRvIGNvdmVyIHRoZSBlbnRpcmUgY29udGFpbmVyICovXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xufVxuXG4ubWVldGluZyB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGNvbG9yOiByZ2IoMTIyLCAyMzYsIDE5OCk7XG4gIGZvbnQtc2l6ZTogNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cblxuLmFuaW1hdGUge1xuXHR0cmFuc2l0aW9uOiBhbGwgMC4xcztcblx0LXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4xcztcbn1cblxuLmFjdGlvbi1idXR0b24ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdHBhZGRpbmc6IDEwcHggNDBweDtcbiAgbWFyZ2luOiAwcHggMTBweCAxMHB4IDBweDtcbiAgZmxvYXQ6IGxlZnQ7XG5cdGJvcmRlci1yYWRpdXM6IDEwcHg7XG5cdGZvbnQtZmFtaWx5OiAnUGFjaWZpY28nLCBjdXJzaXZlO1xuXHRmb250LXNpemU6IDI1cHg7XG5cdGNvbG9yOiBibGFjaztcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1x0XG59XG5cbi5ibHVlIHtcblx0YmFja2dyb3VuZC1jb2xvcjogIzM0OThEQjtcblx0Ym9yZGVyLWJvdHRvbTogNXB4IHNvbGlkICMyOTgwQjk7XG5cdHRleHQtc2hhZG93OiAwcHggLTJweCAjMjk4MEI5O1xufVxuXG4ucmVkIHtcblx0YmFja2dyb3VuZC1jb2xvcjogI0U3NEMzQztcblx0Ym9yZGVyLWJvdHRvbTogNXB4IHNvbGlkICNCRDNFMzE7XG5cdHRleHQtc2hhZG93OiAwcHggLTJweCAjQkQzRTMxO1xufVxuXG4uZ3JlZW4ge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjODJCRjU2O1xuXHRib3JkZXItYm90dG9tOiA1cHggc29saWQgIzY2OTY0NDtcblx0dGV4dC1zaGFkb3c6IDBweCAtMnB4ICM2Njk2NDQ7XG59XG5cbi55ZWxsb3cge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjRjJDRjY2O1xuXHRib3JkZXItYm90dG9tOiA1cHggc29saWQgI0QxQjM1ODtcblx0dGV4dC1zaGFkb3c6IDBweCAtMnB4ICNEMUIzNTg7XG59XG5cbi5hY3Rpb24tYnV0dG9uOmFjdGl2ZSB7XG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCw1cHgpO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCw1cHgpO1xuXHRib3JkZXItYm90dG9tOiAxcHggc29saWQ7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/menu/menu.component.html":
/*!******************************************!*\
  !*** ./src/app/menu/menu.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <div class=\"meeting\">\n      Welcome to Black Jack\n  </div>\n\n      <a routerLink=\"/\" class=\"action-button shadow animate green\">\n        Return to login\n      </a>\n  \n  <button type=\"button\" class=\"action-button shadow animate green\"\n          (click)=\"startSingleGame()\">\n    To singlePlayer game\n  </button>\n\n  <a routerLink=\"/multiplayer\" class=\"action-button shadow animate green\">\n      To multiPlayer game\n  </a>\n</div>"

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
/* harmony import */ var _services_data_base_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/data-base.service */ "./src/app/services/data-base.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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
    function MenuComponent(_dataBaseService, _router) {
        this._dataBaseService = _dataBaseService;
        this._router = _router;
    }
    MenuComponent.prototype.startSingleGame = function () {
        var date = new Date();
        var components = [
            date.getMonth(),
            date.getDate(),
            date.getHours(),
            date.getMinutes(),
            date.getSeconds(),
            date.getMilliseconds()
        ];
        var roomId = Number(components.join(''));
        var newRoom = {
            id: roomId,
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
        __metadata("design:paramtypes", [_services_data_base_service__WEBPACK_IMPORTED_MODULE_1__["DataBaseService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
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

module.exports = ".wrapper {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  text-align: center;\n  background-color: green;\n  background-image: url(\"https://stoopidpigeon.com/wp-content/uploads/2017/06/online-blackjack-Canada-online-casino-games.jpg\"); /* The image used */\n  background-color: #cccccc; /* Used if the image is unavailable */\n  background-position: center; /* Center the image */\n  background-repeat: no-repeat; /* Do not repeat the image */\n  background-size: cover; /* Resize the background image to cover the entire container */\n  min-height: 100vh;\n}\n\na {\n  font-size: 20px;\n  color:rgb(2, 206, 189);\n}\n\n.wrapper-rooms{\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n}\n\n.hidden {\n  display: none;\n}\n\n.room {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  height: 300px;\n  width: 450px;\n  background-color: grey;\n  margin: 20px;\n  border-radius: 10px;\n  font-size: 26px;\n  background-image: url(\"http://4.bp.blogspot.com/-vwtSvf8O3NA/VCFofN0LmfI/AAAAAAAAADs/Z6pZGDfQ8dE/s1600/open-door.jpg\"); /* The image used */\n  background-color: #cccccc; /* Used if the image is unavailable */\n  background-position: center; /* Center the image */\n  background-repeat: no-repeat; /* Do not repeat the image */\n  background-size: cover; \n  \n\n}\n\n#inputNewName { \n  font-size: 30px;\n  width: 300px;\n  margin: 0 auto 10px auto;\n}\n\nlabel{\n  font-size: 30px;\n}\n\n.wrapper-rooms button {\n  margin: 10px auto;\n\n}\n\n#maxPlayer {\n  font-size: 30px;\n  width: 40px;\n  margin: 0 auto 10px auto;\n}\n\n.add-room-menu {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n}\n\n.started {\n  background-color: red;\n}\n\n.action-button {\n  cursor: pointer;\n  display: block;\n\tposition: relative;\n\tpadding: 10px 40px;\n  margin: 0px 10px 10px 0px;\n\n\tborder-radius: 10px;\n\tfont-family: 'Pacifico', cursive;\n\tfont-size: 25px;\n\tcolor: black;\n\ttext-decoration: none;\t\n}\n\n.blue {\n\tbackground-color: #3498DB;\n\tborder-bottom: 5px solid #2980B9;\n\ttext-shadow: 0px -2px #2980B9;\n}\n\n.red {\n\tbackground-color: #E74C3C;\n\tborder-bottom: 5px solid #BD3E31;\n\ttext-shadow: 0px -2px #BD3E31;\n}\n\n.green {\n\tbackground-color: #82BF56;\n\tborder-bottom: 5px solid #669644;\n\ttext-shadow: 0px -2px #669644;\n}\n\n.yellow {\n\tbackground-color: #F2CF66;\n\tborder-bottom: 5px solid #D1B358;\n\ttext-shadow: 0px -2px #D1B358;\n}\n\n.action-button:active {\n\ttransform: translate(0px,5px);\n  -webkit-transform: translate(0px,5px);\n\tborder-bottom: 1px solid;\n}\n\nlabel {\n  background-color: rgba(13, 222, 11, 0.5);\n  padding:10px;\n  border-radius: 15px;\n}\n\n.button-wrapper {\n  max-width: 300px;\n  margin: auto;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXVsdGlwbGF5ZXItbWVudS9tdWx0aXBsYXllci1tZW51LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2Qsd0JBQXdCO0VBQ3hCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsd0JBQXdCO0VBQ3hCLDhIQUE4SCxDQUFDLG9CQUFvQjtFQUNuSiwwQkFBMEIsQ0FBQyxzQ0FBc0M7RUFDakUsNEJBQTRCLENBQUMsc0JBQXNCO0VBQ25ELDZCQUE2QixDQUFDLDZCQUE2QjtFQUMzRCx1QkFBdUIsQ0FBQywrREFBK0Q7RUFDdkYsa0JBQWtCO0NBQ25COztBQUVEO0VBQ0UsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtDQUN4Qjs7QUFJRDtFQUNFLGNBQWM7RUFDZCx3QkFBd0I7RUFDeEIsb0JBQW9CO0VBQ3BCLGdCQUFnQjtDQUNqQjs7QUFFRDtFQUNFLGNBQWM7Q0FDZjs7QUFFRDtFQUNFLGNBQWM7RUFDZCx3QkFBd0I7RUFDeEIsdUJBQXVCO0VBQ3ZCLGNBQWM7RUFDZCxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixvQkFBb0I7RUFDcEIsZ0JBQWdCO0VBQ2hCLHVIQUF1SCxDQUFDLG9CQUFvQjtFQUM1SSwwQkFBMEIsQ0FBQyxzQ0FBc0M7RUFDakUsNEJBQTRCLENBQUMsc0JBQXNCO0VBQ25ELDZCQUE2QixDQUFDLDZCQUE2QjtFQUMzRCx1QkFBdUI7OztDQUd4Qjs7QUFFRDtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IseUJBQXlCO0NBQzFCOztBQUVEO0VBQ0UsZ0JBQWdCO0NBQ2pCOztBQUVEO0VBQ0Usa0JBQWtCOztDQUVuQjs7QUFFRDtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1oseUJBQXlCO0NBQzFCOztBQUVEO0VBQ0UsY0FBYztFQUNkLHdCQUF3QjtFQUN4Qix1QkFBdUI7Q0FDeEI7O0FBRUQ7RUFDRSxzQkFBc0I7Q0FDdkI7O0FBR0Q7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtDQUNoQixtQkFBbUI7Q0FDbkIsbUJBQW1CO0VBQ2xCLDBCQUEwQjs7Q0FFM0Isb0JBQW9CO0NBQ3BCLGlDQUFpQztDQUNqQyxnQkFBZ0I7Q0FDaEIsYUFBYTtDQUNiLHNCQUFzQjtDQUN0Qjs7QUFFRDtDQUNDLDBCQUEwQjtDQUMxQixpQ0FBaUM7Q0FDakMsOEJBQThCO0NBQzlCOztBQUVEO0NBQ0MsMEJBQTBCO0NBQzFCLGlDQUFpQztDQUNqQyw4QkFBOEI7Q0FDOUI7O0FBRUQ7Q0FDQywwQkFBMEI7Q0FDMUIsaUNBQWlDO0NBQ2pDLDhCQUE4QjtDQUM5Qjs7QUFFRDtDQUNDLDBCQUEwQjtDQUMxQixpQ0FBaUM7Q0FDakMsOEJBQThCO0NBQzlCOztBQUVEO0NBQ0MsOEJBQThCO0VBQzdCLHNDQUFzQztDQUN2Qyx5QkFBeUI7Q0FDekI7O0FBRUQ7RUFDRSx5Q0FBeUM7RUFDekMsYUFBYTtFQUNiLG9CQUFvQjtDQUNyQjs7QUFFRDtFQUNFLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsY0FBYztFQUNkLHdCQUF3QjtFQUN4Qix1QkFBdUI7Q0FDeEIiLCJmaWxlIjoic3JjL2FwcC9tdWx0aXBsYXllci1tZW51L211bHRpcGxheWVyLW1lbnUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vc3Rvb3BpZHBpZ2Vvbi5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTcvMDYvb25saW5lLWJsYWNramFjay1DYW5hZGEtb25saW5lLWNhc2luby1nYW1lcy5qcGdcIik7IC8qIFRoZSBpbWFnZSB1c2VkICovXG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2NjY2M7IC8qIFVzZWQgaWYgdGhlIGltYWdlIGlzIHVuYXZhaWxhYmxlICovXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjsgLyogQ2VudGVyIHRoZSBpbWFnZSAqL1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0OyAvKiBEbyBub3QgcmVwZWF0IHRoZSBpbWFnZSAqL1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyAvKiBSZXNpemUgdGhlIGJhY2tncm91bmQgaW1hZ2UgdG8gY292ZXIgdGhlIGVudGlyZSBjb250YWluZXIgKi9cbiAgbWluLWhlaWdodDogMTAwdmg7XG59XG5cbmEge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOnJnYigyLCAyMDYsIDE4OSk7XG59XG5cblxuXG4ud3JhcHBlci1yb29tc3tcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLmhpZGRlbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5yb29tIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogMzAwcHg7XG4gIHdpZHRoOiA0NTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcbiAgbWFyZ2luOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBmb250LXNpemU6IDI2cHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHA6Ly80LmJwLmJsb2dzcG90LmNvbS8tdnd0U3ZmOE8zTkEvVkNGb2ZOMExtZkkvQUFBQUFBQUFBRHMvWjZwWkdEZlE4ZEUvczE2MDAvb3Blbi1kb29yLmpwZ1wiKTsgLyogVGhlIGltYWdlIHVzZWQgKi9cbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjY2NjYzsgLyogVXNlZCBpZiB0aGUgaW1hZ2UgaXMgdW5hdmFpbGFibGUgKi9cbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyOyAvKiBDZW50ZXIgdGhlIGltYWdlICovXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7IC8qIERvIG5vdCByZXBlYXQgdGhlIGltYWdlICovXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7IFxuICBcblxufVxuXG4jaW5wdXROZXdOYW1lIHsgXG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgd2lkdGg6IDMwMHB4O1xuICBtYXJnaW46IDAgYXV0byAxMHB4IGF1dG87XG59XG5cbmxhYmVse1xuICBmb250LXNpemU6IDMwcHg7XG59XG5cbi53cmFwcGVyLXJvb21zIGJ1dHRvbiB7XG4gIG1hcmdpbjogMTBweCBhdXRvO1xuXG59XG5cbiNtYXhQbGF5ZXIge1xuICBmb250LXNpemU6IDMwcHg7XG4gIHdpZHRoOiA0MHB4O1xuICBtYXJnaW46IDAgYXV0byAxMHB4IGF1dG87XG59XG5cbi5hZGQtcm9vbS1tZW51IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5zdGFydGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xufVxuXG5cbi5hY3Rpb24tYnV0dG9uIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBibG9jaztcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRwYWRkaW5nOiAxMHB4IDQwcHg7XG4gIG1hcmdpbjogMHB4IDEwcHggMTBweCAwcHg7XG5cblx0Ym9yZGVyLXJhZGl1czogMTBweDtcblx0Zm9udC1mYW1pbHk6ICdQYWNpZmljbycsIGN1cnNpdmU7XG5cdGZvbnQtc2l6ZTogMjVweDtcblx0Y29sb3I6IGJsYWNrO1xuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XHRcbn1cblxuLmJsdWUge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMzQ5OERCO1xuXHRib3JkZXItYm90dG9tOiA1cHggc29saWQgIzI5ODBCOTtcblx0dGV4dC1zaGFkb3c6IDBweCAtMnB4ICMyOTgwQjk7XG59XG5cbi5yZWQge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjRTc0QzNDO1xuXHRib3JkZXItYm90dG9tOiA1cHggc29saWQgI0JEM0UzMTtcblx0dGV4dC1zaGFkb3c6IDBweCAtMnB4ICNCRDNFMzE7XG59XG5cbi5ncmVlbiB7XG5cdGJhY2tncm91bmQtY29sb3I6ICM4MkJGNTY7XG5cdGJvcmRlci1ib3R0b206IDVweCBzb2xpZCAjNjY5NjQ0O1xuXHR0ZXh0LXNoYWRvdzogMHB4IC0ycHggIzY2OTY0NDtcbn1cblxuLnllbGxvdyB7XG5cdGJhY2tncm91bmQtY29sb3I6ICNGMkNGNjY7XG5cdGJvcmRlci1ib3R0b206IDVweCBzb2xpZCAjRDFCMzU4O1xuXHR0ZXh0LXNoYWRvdzogMHB4IC0ycHggI0QxQjM1ODtcbn1cblxuLmFjdGlvbi1idXR0b246YWN0aXZlIHtcblx0dHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LDVweCk7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LDVweCk7XG5cdGJvcmRlci1ib3R0b206IDFweCBzb2xpZDtcbn1cblxubGFiZWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEzLCAyMjIsIDExLCAwLjUpO1xuICBwYWRkaW5nOjEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG59XG5cbi5idXR0b24td3JhcHBlciB7XG4gIG1heC13aWR0aDogMzAwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/multiplayer-menu/multiplayer-menu.component.html":
/*!******************************************************************!*\
  !*** ./src/app/multiplayer-menu/multiplayer-menu.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <div class=\"button-wrapper\">\n    <a routerLink=\"/menu\" class=\"action-button shadow animate blue\">\n      Return to menu\n    </a>\n\n\n  <button type=\"button\" \n          (click)=\"isShowAddRoomMenu = !isShowAddRoomMenu\" \n          class=\"add-button\"\n          class=\"action-button shadow animate green\">\n    show/hide add room menu\n  </button>\n\n  <div *ngIf=\"isShowAddRoomMenu\" \n       class=\"add-room-menu\">\n    <label for=\"maxPlayer\">\n      Max players:\n    </label>\n\n    <input type=\"number\" \n           min=\"2\"\n           max=\"6\" \n           autofocus \n           placeholder=\"2\" \n           id=\"maxPlayer\" \n           [(ngModel)]=\"maxPlayers\">\n\n    <button type=\"button\" \n            (click)=\"addNewRoom()\" \n            class=\"add-button\"\n            class=\"action-button shadow animate red\">\n      Create room\n    </button>\n  </div>\n</div>\n  <div class=\"wrapper-rooms\">\n    <div *ngFor=\"let room of rooms\">\n      <div class=\"room\" \n           [class.started]=\"room.started\" \n           *ngIf=\"!room.single\">\n        Number of room : {{ room.id }}\n\n        <div>maxplayers : {{ room.maxplayers }}</div>\n\n        <div>players in room : {{room.players | players}} </div>\n\n        <button type=\"button\" class=\"action-button shadow animate red add-button\"\n                (click)=\"deleteRoom(room.id)\">\n          Delete room\n        </button>\n\n        <button type=\"button\" class=\"action-button shadow animate green add-button\"\n                (click)=\"selectRoom(room.id)\">\n          Select room\n        </button>\n      </div>\n    </div>\n  </div>\n</div>"

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
        if (selectedRoom.players !== undefined
            && selectedRoom.maxplayers <= Object.keys(selectedRoom.players).length) {
            alert('Max players limit!!');
            return;
        }
        if (selectedRoom.started === true) {
            alert('Sorry, game is started');
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
            single: false,
            started: false
        };
        this._dataBaseService.addNewRoom(newRoom);
        this.isShowAddRoomMenu = !this.isShowAddRoomMenu;
        this.router.navigate(['/game', newRoom.id]);
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
        return Object.values(value).length;
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