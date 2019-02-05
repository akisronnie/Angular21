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
/* harmony import */ var _inroom_inroom_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./inroom/inroom.component */ "./src/app/inroom/inroom.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: '',
        redirectTo: '/menu',
        pathMatch: 'full'
    },
    { path: 'game',
        component: _game_game_component__WEBPACK_IMPORTED_MODULE_2__["GameComponent"]
    },
    { path: 'menu',
        component: _menu_menu_component__WEBPACK_IMPORTED_MODULE_3__["MenuComponent"]
    },
    { path: 'multiplayer',
        component: _multiplayer_menu_multiplayer_menu_component__WEBPACK_IMPORTED_MODULE_4__["MultiplayerMenuComponent"]
    },
    { path: 'inroom/:id',
        component: _inroom_inroom_component__WEBPACK_IMPORTED_MODULE_6__["InroomComponent"]
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
/* harmony import */ var _game_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./game.service */ "./src/app/game.service.ts");
/* harmony import */ var _data_base_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./data-base.service */ "./src/app/data-base.service.ts");
/* harmony import */ var _multiplayer_menu_multiplayer_menu_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./multiplayer-menu/multiplayer-menu.component */ "./src/app/multiplayer-menu/multiplayer-menu.component.ts");
/* harmony import */ var _inroom_inroom_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./inroom/inroom.component */ "./src/app/inroom/inroom.component.ts");
/* harmony import */ var _no_undef_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./no-undef.pipe */ "./src/app/no-undef.pipe.ts");
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
                _inroom_inroom_component__WEBPACK_IMPORTED_MODULE_16__["InroomComponent"],
                _no_undef_pipe__WEBPACK_IMPORTED_MODULE_17__["NoUndefPipe"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                angularfire2__WEBPACK_IMPORTED_MODULE_4__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].firebase),
                angularfire2_database__WEBPACK_IMPORTED_MODULE_5__["AngularFireDatabaseModule"],
            ],
            providers: [_game_service__WEBPACK_IMPORTED_MODULE_13__["GameService"], _data_base_service__WEBPACK_IMPORTED_MODULE_14__["DataBaseService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/data-base.service.ts":
/*!**************************************!*\
  !*** ./src/app/data-base.service.ts ***!
  \**************************************/
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
        this.playerMaster = false;
        this.activeRoomId = 75;
        this.userName = 'Anonimus';
        this.userId = 15;
        this.isMultiplayer = false;
    }
    DataBaseService.prototype.changeTurn = function (id, status) {
        this.dataBase.object("/rooms/room" + this.activeRoomId + "/order/" + id).update({ id: id, turn: status });
    };
    DataBaseService.prototype.getOrderInRoom = function () {
        return this.dataBase.list("/rooms/room" + this.activeRoomId + "/order").valueChanges();
    };
    DataBaseService.prototype.addPlayerToRoomOrder = function (id, firstPlayer) {
        this.dataBase.object("/rooms/room" + this.activeRoomId + "/order/" + id).update({ id: id, turn: firstPlayer });
    };
    DataBaseService.prototype.savePlayerScore = function (score) {
        this.dataBase.object("/rooms/room" + this.activeRoomId + "/players/" + this.userId).update({ sum: score });
    };
    DataBaseService.prototype.pushHandCard = function (hand) {
        this.dataBase.object("/rooms/room" + this.activeRoomId + "/players/" + this.userId + "/hand").set(hand);
    };
    DataBaseService.prototype.getDeck = function () {
        return this.dataBase.list("/rooms/room" + this.activeRoomId + "/deck").valueChanges();
    };
    DataBaseService.prototype.pushDeck = function (deck) {
        this.dataBase.object("/rooms/room" + this.activeRoomId + "/deck").set(deck);
    };
    DataBaseService.prototype.playerReady = function (roomId, activePlayer) {
        this.dataBase.object("/rooms/room" + roomId + "/players/" + this.userId).update(activePlayer);
    };
    DataBaseService.prototype.removeUserFromRoom = function (roomId) {
        this.dataBase.object("/rooms/room" + roomId + "/players/" + this.userId).remove();
    };
    DataBaseService.prototype.addPlayerToRoom = function (newPlayer, roomId) {
        this.dataBase.object("/rooms/room" + roomId + "/players/" + newPlayer.id).update(newPlayer);
    };
    DataBaseService.prototype.addNewRoom = function (newRoom) {
        this.dataBase.list('rooms').update('room' + newRoom.id, newRoom);
    };
    DataBaseService.prototype.getRooms = function () {
        return this.dataBase.list('rooms').valueChanges();
    };
    DataBaseService.prototype.getRoom$ = function (id) {
        return this.dataBase.object("/rooms/room" + id).valueChanges();
    };
    DataBaseService.prototype.deleteRoom = function (id) {
        this.dataBase.list('rooms').remove('room' + id);
    };
    DataBaseService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [angularfire2_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"]])
    ], DataBaseService);
    return DataBaseService;
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

/***/ "./src/app/game.service.ts":
/*!*********************************!*\
  !*** ./src/app/game.service.ts ***!
  \*********************************/
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
                deck.push({ name: card.name, value: card.value, suits: suit, src: "../assets/img/outside.png" });
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

/***/ "./src/app/game/field/field.component.css":
/*!************************************************!*\
  !*** ./src/app/game/field/field.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table {\n  margin: auto;\n  flex-wrap: wrap;\n  height: 800px;\n  background-image: url('http://cbgames.com.ua/image/cache/500-500/data/cbg/sukno.jpg');\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  position: relative;\n  display: flex;\n  justify-content: space-between;\n  text-align: center;\n}\n\n.players {\n  width: 300px;\n  height: 250px;\n  background-color: coral;\n}\n\n.player-hand {\n  display: flex;\n  justify-content: space-around;\n  flex-direction: row; \n  background-color: aqua;\n  width: 100%;\n}\n\n.comp-side {\n  position: absolute;\n  top: 90px;\n  width: 100%;\n  height: 200px;\n  display: flex;\n  justify-content: center;\n}\n\n.you-side {\n  position: absolute;\n  bottom: 90px;\n  width: 100%;\n  height: 200px;\n  display: flex;\n  justify-content: center;\n}\n\n.center-table {\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  width: 100%;\n  top: 50%;\n}\n\nbutton {\n  height: 70px;\n  width: 130px;\n  font-size: 25px;\n  margin-left: 30px;\n  margin-right: 30px;\n}\n\nimg {\n  width: 50px;\n  height: 100px;\n\n  border-radius: 10px;\n}\n\n.total,\n.comp-result,\n.score {\n  font-size: 52px;\n  color: black;\n  background-color: rgba(163, 163, 163, 0.438);\n  border-radius: 20px;\n}\n\n.comp-result {\n  margin-left: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZS9maWVsZC9maWVsZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2Qsc0ZBQXNGO0VBQ3RGLDRCQUE0QjtFQUM1Qiw2QkFBNkI7RUFDN0IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsK0JBQStCO0VBQy9CLG1CQUFtQjtDQUNwQjs7QUFFRDtFQUNFLGFBQWE7RUFDYixjQUFjO0VBQ2Qsd0JBQXdCO0NBQ3pCOztBQUVEO0VBQ0UsY0FBYztFQUNkLDhCQUE4QjtFQUM5QixvQkFBb0I7RUFDcEIsdUJBQXVCO0VBQ3ZCLFlBQVk7Q0FDYjs7QUFTRDtFQUNFLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1YsWUFBWTtFQUNaLGNBQWM7RUFDZCxjQUFjO0VBQ2Qsd0JBQXdCO0NBQ3pCOztBQUVEO0VBQ0UsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixZQUFZO0VBQ1osY0FBYztFQUNkLGNBQWM7RUFDZCx3QkFBd0I7Q0FDekI7O0FBRUQ7RUFDRSxtQkFBbUI7RUFDbkIsY0FBYztFQUNkLHdCQUF3QjtFQUN4Qix3QkFBd0I7RUFDeEIsWUFBWTtFQUNaLFNBQVM7Q0FDVjs7QUFFRDtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixtQkFBbUI7Q0FDcEI7O0FBRUQ7RUFDRSxZQUFZO0VBQ1osY0FBYzs7RUFFZCxvQkFBb0I7Q0FDckI7O0FBRUQ7OztFQUdFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsNkNBQTZDO0VBQzdDLG9CQUFvQjtDQUNyQjs7QUFFRDtFQUNFLGtCQUFrQjtDQUNuQiIsImZpbGUiOiJzcmMvYXBwL2dhbWUvZmllbGQvZmllbGQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWJsZSB7XG4gIG1hcmdpbjogYXV0bztcbiAgZmxleC13cmFwOiB3cmFwO1xuICBoZWlnaHQ6IDgwMHB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHA6Ly9jYmdhbWVzLmNvbS51YS9pbWFnZS9jYWNoZS81MDAtNTAwL2RhdGEvY2JnL3N1a25vLmpwZycpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5wbGF5ZXJzIHtcbiAgd2lkdGg6IDMwMHB4O1xuICBoZWlnaHQ6IDI1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBjb3JhbDtcbn1cblxuLnBsYXllci1oYW5kIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7IFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xuICB3aWR0aDogMTAwJTtcbn1cblxuXG5cblxuXG5cblxuXG4uY29tcC1zaWRlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDkwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDIwMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnlvdS1zaWRlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDkwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDIwMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmNlbnRlci10YWJsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICB3aWR0aDogMTAwJTtcbiAgdG9wOiA1MCU7XG59XG5cbmJ1dHRvbiB7XG4gIGhlaWdodDogNzBweDtcbiAgd2lkdGg6IDEzMHB4O1xuICBmb250LXNpemU6IDI1cHg7XG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG59XG5cbmltZyB7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi50b3RhbCxcbi5jb21wLXJlc3VsdCxcbi5zY29yZSB7XG4gIGZvbnQtc2l6ZTogNTJweDtcbiAgY29sb3I6IGJsYWNrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE2MywgMTYzLCAxNjMsIDAuNDM4KTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbn1cblxuLmNvbXAtcmVzdWx0IHtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/game/field/field.component.html":
/*!*************************************************!*\
  !*** ./src/app/game/field/field.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"table\">\n\n<div class=\"players\" *ngFor=\"let player of activeRoom.players\">\n  <h3>{{player.name}}</h3>\n  <h3>{{player.id}}</h3>\n  <h3>{{player.isActive}}</h3>\n  <h3>{{player.playerMaster}}</h3>\n  <h3 *ngIf=\"player.id === dataBaseService.userId\"> {{player.sum}}</h3>\n  <div  class=\"player-hand\">\n      <img *ngFor=\"let card of player.hand\" [src]=\"card.src\">\n  </div>\n\n  <button type=\"button\" *ngIf=\"player.id === dataBaseService.userId\" [disabled]=\"!youTurn\"  (click)=\"this.getPlayer.emit()\">Get Card</button>\n</div>\n\n\n\n\n<!-- player.id === dataBaseService.userId -->\n    <!-- <div class=\"comp-side\" *ngFor=\"let player of activeRoomPlayers\">\n      {{player.name}}\n      <div *ngFor=\"let card of fieldResult.computer.hand\">\n        <img [src]=\"card.src\">\n      </div>\n    </div>\n\n    <div class=\"center-table\">\n      <button *ngIf=\"!fieldResult.isShowResult\"\n              type=\"button\"\n              class=\"input-button4\"\n              (click)=\"this.getPlayer.emit()\">\n        Взять\n      </button>\n\n      <span class=\"total\">\n        You score: {{ fieldResult.player.sum }}\n      </span>\n\n      <span *ngIf=\"fieldResult.isShowResult\"\n            class=\"comp-result\">\n        Comp score:{{ fieldResult.computer.sum }}\n      </span>\n\n      <button *ngIf=\"!fieldResult.isShowResult\"\n              type=\"button\"\n              class=\"input-button4\"\n              (click)=\"this.finishGame.emit()\">\n        ВСЁ\n      </button>\n    </div>\n\n    <div class=\"you-side\">\n      <div *ngFor=\"let card of fieldResult.player.hand\">\n        <img [src]=\"card.src\">\n      </div>\n    </div> -->\n</section>\n"

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
/* harmony import */ var _data_base_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data-base.service */ "./src/app/data-base.service.ts");
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
        // @Input() public activeRoom;
        // @Input() public activeRoomPlayers = [];
        this.youTurn = false;
        this.getPlayer = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];
        this.finishGame = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FieldComponent.prototype, "fieldResult", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], FieldComponent.prototype, "youTurn", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FieldComponent.prototype, "activeRoom", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], FieldComponent.prototype, "getPlayer", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], FieldComponent.prototype, "finishGame", void 0);
    FieldComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-field',
            template: __webpack_require__(/*! ./field.component.html */ "./src/app/game/field/field.component.html"),
            styles: [__webpack_require__(/*! ./field.component.css */ "./src/app/game/field/field.component.css")]
        }),
        __metadata("design:paramtypes", [_data_base_service__WEBPACK_IMPORTED_MODULE_1__["DataBaseService"]])
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

module.exports = "<app-score [scoreResult] = \"scoreResult\"\n           (newGame)=\"startNewGame()\"\n           [activeRoom]=\"activeRoom\"\n           [youTurn]=\"youTurn\">\n</app-score>\n\n<app-field [fieldResult]=\"fieldResult\"\n           [youTurn]=\"youTurn\"\n           [activeRoom]=\"activeRoom\"\n           (getPlayer)=\"getYou()\"\n           (finishGame)=\"finish()\">\n</app-field>\n"

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
/* harmony import */ var _data_base_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data-base.service */ "./src/app/data-base.service.ts");
/* harmony import */ var _game_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../game.service */ "./src/app/game.service.ts");
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
    function GameComponent(_gameService, _dataBaseService) {
        this._gameService = _gameService;
        this._dataBaseService = _dataBaseService;
        this.message = 'Welcome to game';
        this.activeRoom = { id: 0, players: [], maxplayers: 0, deck: [] };
        this.player = {
            hand: [],
            sum: 0,
            id: 0,
            name: '',
            isActive: true,
            playerMaster: false
        };
        this.fieldResult = {
            isShowResult: false,
            player: this.player,
        };
        this.scoreResult = {
            message: '',
            player: this.player,
        };
        this.youTurn = false;
        this._deck = [];
    }
    GameComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._dataBaseService.getDeck().subscribe(function (deck) {
            _this._deck = deck;
        });
        this._dataBaseService.getRoom$(this._dataBaseService.activeRoomId).subscribe(function (room) {
            _this.activeRoom = room;
            _this.activeRoom.players = Object.values(room.players);
            _this.activeRoom.players.map(function (player) {
                if (player.id === _this._dataBaseService.userId) {
                    if (player.hand !== undefined) {
                        player.hand.map(function (card) { card.src = "../assets/img/" + card.name + card.suits + ".png"; });
                    }
                }
            });
        });
        if (this._dataBaseService.playerMaster) {
            this._deck = this._gameService.generateDeck();
            this._deck = this._gameService.deckSort(this._deck);
            this._dataBaseService.pushDeck(this._deck);
        }
        this._dataBaseService.getOrderInRoom().subscribe(function (order) {
            _this._order = Object.values(order);
            _this._order.forEach(function (playerInOrder) {
                if (playerInOrder.id === _this._dataBaseService.userId) {
                    _this.youTurn = playerInOrder.turn;
                }
            });
        });
    };
    GameComponent.prototype.setNextTurn = function () {
        var _this = this;
        var count;
        this._order.forEach(function (user, index) {
            if (user.id === _this._dataBaseService.userId) {
                count = index;
                user.turn = false;
                _this._dataBaseService.changeTurn(user.id, false);
            }
        });
        count++;
        if (this._order.length >= count) {
            count = 0;
        }
        this._dataBaseService.changeTurn(this._order[count].id, true);
    };
    GameComponent.prototype.getYou = function () {
        var oneCard = this._deck[this._deck.length - 1];
        this.player.hand.push(oneCard);
        this.player.sum += this._deck[this._deck.length - 1].value;
        this._deck.pop();
        this._dataBaseService.savePlayerScore(this.player.sum);
        this._dataBaseService.pushDeck(this._deck);
        this._dataBaseService.pushHandCard(this.player.hand);
        // if (this.player.sum >= this._CONDITIONS_WIN) {
        //   this.fieldResult.isShowResult = true;
        //   this.finish();
        //   this.computer.hand.map((card: TCard) => { card.src = `../assets/img/${card.name}${card.suits}.png`; });
        //   return;
        // }
        //  this._getComp();ву
        debugger;
        this.setNextTurn();
    };
    GameComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-game',
            template: __webpack_require__(/*! ./game.component.html */ "./src/app/game/game.component.html"),
            styles: [__webpack_require__(/*! ./game.component.css */ "./src/app/game/game.component.css")]
        }),
        __metadata("design:paramtypes", [_game_service__WEBPACK_IMPORTED_MODULE_2__["GameService"],
            _data_base_service__WEBPACK_IMPORTED_MODULE_1__["DataBaseService"]])
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

module.exports = ".score {\n  font-size: 52px;\n  color: black;\n  background-color: rgba(163, 163, 163, 0.438);\n  border-radius: 20px;\n}\n\n.score,\n.score-container {\n  margin: auto;\n  text-align: center;\n}\n\n.score-container {\n  background-color: grey;\n}\n\nbutton {\n  height: 70px;\n  width: 130px;\n  font-size: 25px;\n  margin-left: 30px;\n  margin-right: 30px;\n}\n\na {\n  font-size: 42px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZS9zY29yZS9zY29yZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYiw2Q0FBNkM7RUFDN0Msb0JBQW9CO0NBQ3JCOztBQUVEOztFQUVFLGFBQWE7RUFDYixtQkFBbUI7Q0FDcEI7O0FBRUQ7RUFDRSx1QkFBdUI7Q0FDeEI7O0FBRUQ7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsbUJBQW1CO0NBQ3BCOztBQUVEO0VBQ0UsZ0JBQWdCO0NBQ2pCIiwiZmlsZSI6InNyYy9hcHAvZ2FtZS9zY29yZS9zY29yZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNjb3JlIHtcbiAgZm9udC1zaXplOiA1MnB4O1xuICBjb2xvcjogYmxhY2s7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTYzLCAxNjMsIDE2MywgMC40MzgpO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuXG4uc2NvcmUsXG4uc2NvcmUtY29udGFpbmVyIHtcbiAgbWFyZ2luOiBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zY29yZS1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xufVxuXG5idXR0b24ge1xuICBoZWlnaHQ6IDcwcHg7XG4gIHdpZHRoOiAxMzBweDtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBtYXJnaW4tbGVmdDogMzBweDtcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xufVxuXG5hIHtcbiAgZm9udC1zaXplOiA0MnB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/game/score/score.component.html":
/*!*************************************************!*\
  !*** ./src/app/game/score/score.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"score-container\">\n  <a routerLink=\"/menu\">\n    Return to MENU\n  </a>\n<!-- \n  <div class=\"score\">\n    Wins:{{ scoreResult.player.numberWins }} Loses:{{ scoreResult.computer.numberWins }}\n  </div>\n\n  <div class=\"score\">\n    {{ scoreResult.message }}\n  </div> -->\n\n  <div class=\"score\" *ngIf=\"activeRoom.id\">\n      ID ROOM:{{ activeRoom.id }}\n  </div>\n\n  <div class=\"score\" *ngIf=\"youTurn\">\n    YOU TURN!!!\n</div>\n\n  <!-- <button type=\"button\"\n          class=\"input-button4\"\n          (click)=\"startNewGame()\">\n    New Game\n  </button> -->\n</div>\n"

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
        this.activeRoom = { id: 0 };
        this.youTurn = false;
        this.newGame = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];
    }
    ScoreComponent.prototype.startNewGame = function () {
        this.newGame.emit();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ScoreComponent.prototype, "scoreResult", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ScoreComponent.prototype, "activeRoom", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], ScoreComponent.prototype, "youTurn", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ScoreComponent.prototype, "newGame", void 0);
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

/***/ "./src/app/inroom/inroom.component.css":
/*!*********************************************!*\
  !*** ./src/app/inroom/inroom.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper {\n  background-color: aqua;\n  display: flex;\n  justify-content: center;\n  text-align: center;\n  flex-direction: column;\n}\n\n#playerReady {\n  width: 100px;\n  height: 50px;\n  margin: 10px auto 10px auto;\n  font-size: 20px;\n}\n\nlabel {\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5yb29tL2lucm9vbS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGNBQWM7RUFDZCx3QkFBd0I7RUFDeEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtDQUN4Qjs7QUFFRDtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2IsNEJBQTRCO0VBQzVCLGdCQUFnQjtDQUNqQjs7QUFFRDtFQUNFLGdCQUFnQjtDQUNqQiIsImZpbGUiOiJzcmMvYXBwL2lucm9vbS9pbnJvb20uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuI3BsYXllclJlYWR5IHtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIG1hcmdpbjogMTBweCBhdXRvIDEwcHggYXV0bztcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG5sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/inroom/inroom.component.html":
/*!**********************************************!*\
  !*** ./src/app/inroom/inroom.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n<h1>Numer of room = {{activeRoom.id}}</h1>\n<h2>Max players = {{activeRoom.maxplayers}}</h2>\n<h2>Players in room = {{playersInRoom}}</h2>\n<h2>You name: = {{activePlayer.name}}</h2>\n<h2>You ID: = {{activePlayer.id}}</h2>\n\n<button type=\"button\" (click)=\"playerReady()\" id=\"playerReady\">Ready</button>\n <div *ngIf=\"this.activePlayer.isActive\">!!!READY!!!</div>\n\n<div  *ngFor=\"let player of activeRoomPlayers\">Name player = {{player.name}} Active: {{player.isActive}}</div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/inroom/inroom.component.ts":
/*!********************************************!*\
  !*** ./src/app/inroom/inroom.component.ts ***!
  \********************************************/
/*! exports provided: InroomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InroomComponent", function() { return InroomComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _data_base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data-base.service */ "./src/app/data-base.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var InroomComponent = /** @class */ (function () {
    function InroomComponent(_route, _dataBaseService, router) {
        this._route = _route;
        this._dataBaseService = _dataBaseService;
        this.router = router;
        this.activeRoom = {
            id: 0,
            maxplayers: 0,
            players: []
        };
        this.activePlayer = { isActive: false, name: '', playerMaster: false, sum: 0, id: 0 };
        this.activeRoomPlayers = [];
        this.goToGame = false;
        this.destroy$$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    InroomComponent.prototype.playerReady = function () {
        this.activePlayer.isActive = !this.activePlayer.isActive;
        this._dataBaseService.playerReady(this.activeRoom.id, this.activePlayer);
    };
    InroomComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userName = this._dataBaseService.userName;
        if (this.userName === undefined) {
            this.router.navigate(['/multiplayer']);
        }
        // if (this.userName == undefined) this.userName = 'Anonimus'
        this.userId = this._dataBaseService.userId;
        // if (this.userId == undefined) this.userId = new Date().getMilliseconds();
        this._route.params
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["pluck"])('id'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (roomId) { return _this._dataBaseService.getRoom$(roomId); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy$$))
            .subscribe(function (room) {
            _this.activeRoom = room;
            _this._dataBaseService.activeRoomId = room.id;
            _this.playersInRoom = Object.keys(_this.activeRoom.players).length;
            var goToGame = true;
            for (var player in room.players) {
                if (room.players[player].id === _this.userId) {
                    _this.activePlayer = room.players[player];
                }
                if (room.players[player].isActive === false) {
                    goToGame = false;
                }
                _this.activeRoomPlayers = Object.values(room.players);
            }
            if (goToGame === true) {
                console.log('ALL ACTIVE');
                _this._dataBaseService.isMultiplayer = true;
                _this._dataBaseService.playerMaster = _this.activePlayer.playerMaster;
                _this.goToGame = true;
                _this.router.navigate(['/game']);
            }
        });
    };
    InroomComponent.prototype.ngOnDestroy = function () {
        if (this.goToGame === false) {
            this._dataBaseService.removeUserFromRoom(this.activeRoom.id);
        }
        this.destroy$$.next();
    };
    InroomComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-inroom',
            template: __webpack_require__(/*! ./inroom.component.html */ "./src/app/inroom/inroom.component.html"),
            styles: [__webpack_require__(/*! ./inroom.component.css */ "./src/app/inroom/inroom.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _data_base_service__WEBPACK_IMPORTED_MODULE_2__["DataBaseService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], InroomComponent);
    return InroomComponent;
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

var MenuComponent = /** @class */ (function () {
    function MenuComponent() {
    }
    MenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.css */ "./src/app/menu/menu.component.css")]
        })
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

module.exports = "<div class=\"wrapper\">\n  <label for=\"inputNewName\">Please enter you name</label>\n  <input type=\"text\" id=\"inputNewName\" placeholder=\"Enter name\" [(ngModel)]=\"userName\">\n\n  <button type=\"button\" (click)=\"isShowAddRoomMenu = !isShowAddRoomMenu\" class=\"add-button\">show/hide add room menu</button>\n\n  <div *ngIf=\"isShowAddRoomMenu\" class=\"add-room-menu\">\n    <label for=\"maxPlayer\">Max players: </label>\n    <input type=\"number\" min=\"2\" max=\"6\" autofocus placeholder=\"2\" id=\"maxPlayer\" [(ngModel)]=\"newRoom.maxplayers\">\n    <button type=\"button\" (click)=\"addNewRoom()\" class=\"add-button\">Create room</button>\n  </div>\n\n  <div class=\"wrapper-rooms\">\n    <div *ngFor=\"let room of rooms\" class=\"room\">\n      Number of room : {{ room.id }}\n      <div>maxplayers : {{ room.maxplayers }}</div>\n      <div>players in room : {{room | noUndef}} </div>\n      <button type=\"button\" (click)=\"deleteRoom(room.id)\">Delete room</button>\n      <a routerLinkActive=\"router-link-active\"> <button type=\"button\" (click)=\"selectRoom(room.id)\" *ngIf=\"userName\">Select\n          room</button> </a>\n    </div>\n  </div>\n</div>"

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
/* harmony import */ var _data_base_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data-base.service */ "./src/app/data-base.service.ts");
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



var MultiplayerMenuComponent = /** @class */ (function () {
    function MultiplayerMenuComponent(dataBaseService, router) {
        this.dataBaseService = dataBaseService;
        this.router = router;
        this.newRoom = {
            id: 0,
            maxplayers: 2,
            players: []
        };
        this._newIdForNewRoom = 0;
        this.isShowAddRoomMenu = false;
    }
    MultiplayerMenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataBaseService.getRooms().subscribe(function (rooms) { _this.rooms = rooms; });
    };
    MultiplayerMenuComponent.prototype.selectRoom = function (id) {
        var userId = -1;
        var oneRoom;
        var playerMaster = false;
        this.rooms.forEach(function (room) {
            if (room.id === id) {
                oneRoom = room;
            }
        });
        if (oneRoom.players !== undefined) {
            for (var player in oneRoom.players) {
                if (oneRoom.players[player].id > userId) {
                    userId = oneRoom.players[player].id;
                }
            }
            if (oneRoom.maxplayers <= Object.keys(oneRoom.players).length) {
                alert('Max players limit!!');
                return;
            }
        }
        userId++;
        if (userId === 0) {
            playerMaster = true;
        }
        this.dataBaseService.userId = userId;
        this.dataBaseService.userName = this.userName;
        this.dataBaseService.activeRoomId = id;
        var newPlayer = { id: userId, name: this.userName, isActive: false, playerMaster: playerMaster, sum: 0 };
        this.dataBaseService.addPlayerToRoom(newPlayer, id);
        this.dataBaseService.addPlayerToRoomOrder(userId, playerMaster);
        this.router.navigate(['/inroom', id]);
    };
    MultiplayerMenuComponent.prototype.addNewRoom = function () {
        var _this = this;
        this.rooms.forEach(function (room) {
            if (room.id > _this._newIdForNewRoom) {
                _this._newIdForNewRoom = room.id;
            }
        });
        this._newIdForNewRoom++;
        this.newRoom.id = this._newIdForNewRoom;
        this.dataBaseService.addNewRoom(this.newRoom);
        this.isShowAddRoomMenu = !this.isShowAddRoomMenu;
    };
    MultiplayerMenuComponent.prototype.deleteRoom = function (id) {
        this.dataBaseService.deleteRoom(id);
    };
    MultiplayerMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-multiplayer-menu',
            template: __webpack_require__(/*! ./multiplayer-menu.component.html */ "./src/app/multiplayer-menu/multiplayer-menu.component.html"),
            styles: [__webpack_require__(/*! ./multiplayer-menu.component.css */ "./src/app/multiplayer-menu/multiplayer-menu.component.css")]
        }),
        __metadata("design:paramtypes", [_data_base_service__WEBPACK_IMPORTED_MODULE_1__["DataBaseService"],
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
    NoUndefPipe.prototype.transform = function (value, args) {
        if (value.players === undefined) {
            return 0;
        }
        return value.players.length;
    };
    NoUndefPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'noUndef'
        })
    ], NoUndefPipe);
    return NoUndefPipe;
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