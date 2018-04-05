webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_auth_guard__ = __webpack_require__("./src/app/auth/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_home_home_component__ = __webpack_require__("./src/app/pages/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_callback_callback_component__ = __webpack_require__("./src/app/pages/callback/callback.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_view_view_component__ = __webpack_require__("./src/app/pages/view/view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_record_record_component__ = __webpack_require__("./src/app/pages/record/record.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_3__pages_home_home_component__["a" /* HomeComponent */]
    },
    {
        path: 'callback',
        component: __WEBPACK_IMPORTED_MODULE_4__pages_callback_callback_component__["a" /* CallbackComponent */]
    },
    {
        path: 'view',
        canActivate: [__WEBPACK_IMPORTED_MODULE_2__auth_auth_guard__["a" /* AuthGuard */]],
        component: __WEBPACK_IMPORTED_MODULE_5__pages_view_view_component__["a" /* ViewComponent */]
    },
    {
        path: 'record',
        canActivate: [__WEBPACK_IMPORTED_MODULE_2__auth_auth_guard__["a" /* AuthGuard */]],
        component: __WEBPACK_IMPORTED_MODULE_6__pages_record_record_component__["a" /* RecordComponent */]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]],
            providers: [__WEBPACK_IMPORTED_MODULE_2__auth_auth_guard__["a" /* AuthGuard */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"layout-overflow\">\n  <div class=\"layout-canvas\" [ngClass]=\"{'nav-open': navOpen, 'nav-closed': !navOpen}\" [style.min-height]=\"minHeight\">\n    <!-- HEADER -->\n    <app-header (navToggled)=\"navToggledHandler($event)\"></app-header>\n\n    <!-- FLASH MESSAGES -->\n    <div class=\"container\">\n      <flash-messages></flash-messages>\n    </div>\n\n    <!-- CONTENT -->\n    <div id=\"layout-view\" class=\"layout-view\">\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = ".layout-overflow {\n  overflow: hidden; }\n\n.layout-canvas {\n  background: #fff;\n  backface-visibility: hidden;\n  -webkit-backface-visibility: hidden;\n  position: relative;\n  left: 0;\n  -webkit-transition: -webkit-transform 250ms ease;\n  transition: -webkit-transform 250ms ease;\n  transition: transform 250ms ease;\n  transition: transform 250ms ease, -webkit-transform 250ms ease;\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n  width: 100%; }\n\n.layout-canvas.nav-open {\n    -webkit-transform: translate3d(270px, 0, 0);\n            transform: translate3d(270px, 0, 0); }\n\n.layout-view {\n  padding: 3%; }\n\n@media screen and (min-width: 768px) {\n    .layout-view {\n      margin: 0 auto;\n      max-width: 960px;\n      padding: 1.5% 3%; } }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__ = __webpack_require__("./src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_fromEvent__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/fromEvent.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/debounceTime.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppComponent = /** @class */ (function () {
    function AppComponent(auth) {
        this.auth = auth;
        this._initWinHeight = 0;
        // check for authentication and handle if hash present
        auth.handleAuth();
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].fromEvent(window, 'resize')
            .debounceTime(200)
            .subscribe(function (event) { return _this._resizeFn(event); });
        this._initWinHeight = window.innerHeight;
        this._resizeFn(null);
    };
    AppComponent.prototype.navToggledHandler = function (e) {
        this.navOpen = e;
    };
    AppComponent.prototype._resizeFn = function (e) {
        var winHeight = e ? e.target.innerHeight : this._initWinHeight;
        this.minHeight = winHeight + "px";
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__auth_auth_service__["a" /* AuthService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__ = __webpack_require__("./src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_api_service__ = __webpack_require__("./src/app/core/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__validate_validate_service__ = __webpack_require__("./src/app/validate/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__agm_core__ = __webpack_require__("./node_modules/@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_home_component__ = __webpack_require__("./src/app/pages/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__header_header_component__ = __webpack_require__("./src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_callback_callback_component__ = __webpack_require__("./src/app/pages/callback/callback.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__core_loading_component__ = __webpack_require__("./src/app/core/loading.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_view_view_component__ = __webpack_require__("./src/app/pages/view/view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_record_record_component__ = __webpack_require__("./src/app/pages/record/record.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_11__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_12__pages_callback_callback_component__["a" /* CallbackComponent */],
                __WEBPACK_IMPORTED_MODULE_13__core_loading_component__["a" /* LoadingComponent */],
                __WEBPACK_IMPORTED_MODULE_14__pages_view_view_component__["a" /* ViewComponent */],
                __WEBPACK_IMPORTED_MODULE_15__pages_record_record_component__["a" /* RecordComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_8_angular2_flash_messages__["FlashMessagesModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_7__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: 'AIzaSyCEDqsLErpknyVKLvWrrr9XqQ4akPfT48M'
                })
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["b" /* Title */],
                __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_3__core_api_service__["a" /* ApiService */],
                __WEBPACK_IMPORTED_MODULE_4__validate_validate_service__["a" /* ValidateService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AUTH_CONFIG; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_env_config__ = __webpack_require__("./src/app/core/env.config.ts");

var AUTH_CONFIG = {
    CLIENT_ID: '7D5xAg8qi3i9qYB6NLXQKHZIyTEXUfKG',
    CLIENT_DOMAIN: 'agudelotmateo.auth0.com',
    AUDIENCE: 'http://localhost:8083/api/',
    REDIRECT: __WEBPACK_IMPORTED_MODULE_0__core_env_config__["a" /* ENV */].BASE_URI + "/callback",
    SCOPE: 'openid profile'
};


/***/ }),

/***/ "./src/app/auth/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("./src/app/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = /** @class */ (function () {
    function AuthGuard(auth) {
        this.auth = auth;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        if (this.auth.tokenValid) {
            return true;
        }
        else {
            // send guarded route to redirect to after logging in
            this.auth.login(state.url);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_config__ = __webpack_require__("./src/app/auth/auth.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_auth0_js__ = __webpack_require__("./node_modules/auth0-js/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_auth0_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_auth0_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = /** @class */ (function () {
    function AuthService(router) {
        this.router = router;
        // create Auth0 web auth instance
        this._auth0 = new __WEBPACK_IMPORTED_MODULE_4_auth0_js__["WebAuth"]({
            clientID: __WEBPACK_IMPORTED_MODULE_3__auth_config__["a" /* AUTH_CONFIG */].CLIENT_ID,
            domain: __WEBPACK_IMPORTED_MODULE_3__auth_config__["a" /* AUTH_CONFIG */].CLIENT_DOMAIN,
            responseType: 'token',
            redirectUri: __WEBPACK_IMPORTED_MODULE_3__auth_config__["a" /* AUTH_CONFIG */].REDIRECT,
            audience: __WEBPACK_IMPORTED_MODULE_3__auth_config__["a" /* AUTH_CONFIG */].AUDIENCE,
            scope: __WEBPACK_IMPORTED_MODULE_3__auth_config__["a" /* AUTH_CONFIG */].SCOPE
        });
        this.loggedIn$ = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](this.loggedIn);
        // if authenticated, set local profile property and update login status subject.
        // if not authenticated but there are still items in localStorage, log out.
        var lsProfile = localStorage.getItem('profile');
        if (this.tokenValid) {
            this.userProfile = JSON.parse(lsProfile);
            this.setLoggedIn(true);
        }
        else if (!this.tokenValid && lsProfile) {
            this.logout();
        }
    }
    AuthService.prototype.setLoggedIn = function (value) {
        this.loggedIn$.next(value);
        this.loggedIn = value;
    };
    AuthService.prototype.login = function (redirect) {
        // set redirect after login
        var _redirect = redirect ? redirect : this.router.url;
        localStorage.setItem('authRedirect', _redirect);
        // auth0 authorize request
        this._auth0.authorize();
    };
    AuthService.prototype.handleAuth = function () {
        var _this = this;
        // when auth0 hash parsed, get profile
        this._auth0.parseHash(function (err, authResult) {
            if (authResult && authResult.accessToken) {
                window.location.hash = '';
                _this._getProfile(authResult);
            }
            else if (err) {
                _this._clearRedirect();
                localStorage.setItem('authError', err.errorDescription);
                console.error("Authentication error: " + err.error);
                _this.router.navigate(['/']);
            }
        });
    };
    AuthService.prototype._getProfile = function (authResult) {
        var _this = this;
        // use access token to retrieve user's profile and set session
        this._auth0.client.userInfo(authResult.accessToken, function (err, profile) {
            if (profile) {
                _this._setSession(authResult, profile);
                _this.router.navigate([localStorage.getItem('authRedirect') || '/']);
                _this._clearRedirect();
            }
            else if (err) {
                localStorage.setItem('authError', err.errorDescription);
                console.error("Authentication error: " + err.error);
            }
        });
    };
    AuthService.prototype._setSession = function (authResult, profile) {
        // save session data and update login status subject
        var expiresAt = JSON.stringify((authResult.expiresIn * 1000) + Date.now());
        // set tokens and expiration in localStorage and props
        localStorage.setItem('access_token', authResult.accessToken);
        localStorage.setItem('expires_at', expiresAt);
        localStorage.setItem('profile', JSON.stringify(profile));
        this.userProfile = profile;
        // update login status in loggedIn$ stream
        this.setLoggedIn(true);
    };
    AuthService.prototype._clearRedirect = function () {
        // remove redirect from localStorage
        localStorage.removeItem('authRedirect');
    };
    AuthService.prototype.logout = function () {
        // ensure all auth items removed from localStorage
        localStorage.removeItem('access_token');
        localStorage.removeItem('profile');
        localStorage.removeItem('expires_at');
        localStorage.removeItem('authRedirect');
        this._clearRedirect();
        // reset local properties, update loggedIn$ stream
        this.userProfile = undefined;
        this.setLoggedIn(false);
        clearInterval(this.timer);
        this.router.navigate(['/']);
    };
    Object.defineProperty(AuthService.prototype, "tokenValid", {
        get: function () {
            // check if current time is past access token's expiration
            var expiresAt = JSON.parse(localStorage.getItem('expires_at'));
            return Date.now() < expiresAt;
        },
        enumerable: true,
        configurable: true
    });
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/core/api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__ = __webpack_require__("./src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__env_config__ = __webpack_require__("./src/app/core/env.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/throw.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ApiService = /** @class */ (function () {
    function ApiService(http, auth) {
        this.http = http;
        this.auth = auth;
    }
    Object.defineProperty(ApiService.prototype, "_authHeader", {
        get: function () {
            return "Bearer " + localStorage.getItem('access_token');
        },
        enumerable: true,
        configurable: true
    });
    // GET all locations linked to a specific user (login required)
    ApiService.prototype.getLocationsByUserID$ = function (userID) {
        var _this = this;
        return this.http
            .get(__WEBPACK_IMPORTED_MODULE_5__env_config__["a" /* ENV */].BASE_API + "locations/" + userID, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', this._authHeader)
        })
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["a" /* catchError */])(function (error) { return _this._handleError(error); }));
    };
    // POST a location linked to a specific user (login required)
    ApiService.prototype.postLocation$ = function (location) {
        var _this = this;
        return this.http
            .post(__WEBPACK_IMPORTED_MODULE_5__env_config__["a" /* ENV */].BASE_API + "record", location, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', this._authHeader)
        })
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["a" /* catchError */])(function (error) { return _this._handleError(error); }));
    };
    // POST a new user (login required)
    ApiService.prototype.postUser$ = function (user) {
        var _this = this;
        return this.http
            .post(__WEBPACK_IMPORTED_MODULE_5__env_config__["a" /* ENV */].BASE_API + "register", user, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', this._authHeader)
        })
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["a" /* catchError */])(function (error) { return _this._handleError(error); }));
    };
    ApiService.prototype._handleError = function (err) {
        var errorMsg = err.message || 'Error: Unable to complete request.';
        if (err.message && err.message.indexOf('No JWT present') > -1) {
            this.auth.login();
        }
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(errorMsg);
    };
    ApiService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__["a" /* AuthService */]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/core/env.config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ENV; });
var _isDev = window.location.port.indexOf('4200') > -1;
var getHost = function () {
    var protocol = window.location.protocol;
    var host = window.location.host;
    return protocol + "//" + host;
};
var apiURI = _isDev ? 'http://localhost:8083/api/' : "/api/";
var ENV = {
    BASE_URI: getHost(),
    BASE_API: apiURI
};


/***/ }),

/***/ "./src/app/core/loading.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LoadingComponent = /** @class */ (function () {
    function LoadingComponent() {
    }
    LoadingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-loading',
            template: "\n    <img src=\"/assets/images/loading.svg\">\n  ",
            styles: ["\n    :host {\n      display: block;\n    }\n    img {\n      display: block;\n      margin: 20px auto;\n      width: 50px;\n    }\n  "]
        })
    ], LoadingComponent);
    return LoadingComponent;
}());



/***/ }),

/***/ "./src/app/core/models/location.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationModel; });
var LocationModel = /** @class */ (function () {
    function LocationModel(userID, latitude, longitude) {
        this.userID = userID;
        this.latitude = latitude;
        this.longitude = longitude;
    }
    return LocationModel;
}());



/***/ }),

/***/ "./src/app/core/models/user.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserModel; });
var UserModel = /** @class */ (function () {
    function UserModel(userID) {
        this.userID = userID;
    }
    return UserModel;
}());



/***/ }),

/***/ "./src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<header id=\"header\" class=\"header\">\n  <div class=\"header-page bg-primary\">\n    <a class=\"toggle-offcanvas bg-primary\" (click)=\"toggleNav()\">\n      <span></span>\n    </a>\n    <h1 class=\"header-page-siteTitle\">\n      <a routerLink=\"/\">Tracker v2</a>\n    </h1>\n    <div class=\"header-page-authStatus\">\n      <a *ngIf=\"!auth.loggedIn\" (click)=\"auth.login()\" routerLink=\"/\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{ exact: true }\">Log In</a>\n      <span *ngIf=\"auth.loggedIn\">\n        {{auth.userProfile?.name}}\n        <span class=\"opacity-half\">|</span>\n        <a (click)=\"auth.logout()\" routerLink=\"/\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{ exact: true }\">Log Out</a>\n      </span>\n    </div>\n  </div>\n\n  <nav id=\"nav\" class=\"nav\" role=\"navigation\">\n    <ul class=\"nav-list\">\n      <li>\n        <a routerLink=\"/\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{ exact: true }\">HOME</a>\n      </li>\n      <li>\n        <a *ngIf=\"auth.loggedIn\" routerLink=\"/view\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{ exact: true }\">View</a>\n      </li>\n      <li>\n        <a *ngIf=\"auth.loggedIn\" routerLink=\"/record\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{ exact: true }\">Record</a>\n      </li>\n    </ul>\n  </nav>\n</header>"

/***/ }),

/***/ "./src/app/header/header.component.scss":
/***/ (function(module, exports) {

module.exports = ".nav {\n  background: #eee;\n  backface-visibility: hidden;\n  -webkit-backface-visibility: hidden;\n  -webkit-box-shadow: inset -8px 0 8px -6px rgba(0, 0, 0, 0.2);\n          box-shadow: inset -8px 0 8px -6px rgba(0, 0, 0, 0.2);\n  display: none;\n  height: 100%;\n  overflow-y: auto;\n  padding: 3%;\n  position: absolute;\n  top: 0;\n  -webkit-transform: translate3d(-100%, 0, 0);\n          transform: translate3d(-100%, 0, 0);\n  width: 270px; }\n  :host-context(.nav-closed) .nav,\n  :host-context(.nav-open) .nav {\n    display: block; }\n  .nav .active {\n    font-weight: bold; }\n  .nav-list {\n    list-style: none;\n    margin-bottom: 0;\n    padding-left: 0; }\n  .nav-list a {\n      display: block;\n      padding: 6px; }\n  .nav-list a:hover, .nav-list a:active, .nav-list a:focus {\n        text-decoration: none; }\n  .toggle-offcanvas {\n  border-right: 1px solid rgba(255, 255, 255, 0.5);\n  display: inline-block;\n  height: 50px;\n  padding: 23.5px 13px;\n  position: relative;\n  text-align: center;\n  width: 50px;\n  z-index: 100; }\n  .toggle-offcanvas span,\n  .toggle-offcanvas span:before,\n  .toggle-offcanvas span:after {\n    background: #fff;\n    border-radius: 1px;\n    content: '';\n    display: block;\n    height: 3px;\n    position: absolute;\n    -webkit-transition: all 250ms ease-in-out;\n    transition: all 250ms ease-in-out;\n    width: 24px; }\n  .toggle-offcanvas span:before {\n    top: -9px; }\n  .toggle-offcanvas span:after {\n    bottom: -9px; }\n  :host-context(.nav-open) .toggle-offcanvas span {\n    background: transparent; }\n  :host-context(.nav-open) .toggle-offcanvas span:before, :host-context(.nav-open) .toggle-offcanvas span:after {\n      top: 0; }\n  :host-context(.nav-open) .toggle-offcanvas span:before {\n      -webkit-transform: rotate(45deg);\n              transform: rotate(45deg); }\n  :host-context(.nav-open) .toggle-offcanvas span:after {\n      -webkit-transform: rotate(-45deg);\n              transform: rotate(-45deg); }\n  .header-page {\n  color: #fff;\n  height: 50px;\n  margin-bottom: 10px;\n  position: relative; }\n  .header-page-siteTitle {\n    font-size: 30px;\n    line-height: 50px;\n    margin: 0;\n    padding: 0 0 0 60px;\n    position: absolute;\n    top: 0;\n    width: 100%; }\n  .header-page a {\n    color: #fff;\n    text-decoration: none; }\n  .header-page-authStatus {\n    color: #fff;\n    font-size: 12px;\n    line-height: 50px;\n    padding: 0 10px;\n    position: absolute;\n    right: 0;\n    top: 0; }\n  .header-page-authStatus a:hover {\n      text-decoration: underline; }\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__ = __webpack_require__("./src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_filter__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/filter.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(router, auth, flash) {
        this.router = router;
        this.auth = auth;
        this.flash = flash;
        this.navToggled = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.navOpen = false;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        // if nav is open after routing, close it
        this.router.events
            .filter(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* NavigationStart */] && _this.navOpen; })
            .subscribe(function (event) { return _this.toggleNav(); });
        // show errors, if any
        if (!this.auth.loggedIn && localStorage.getItem('authError')) {
            this.flash.show(localStorage.getItem('authError'), { cssClass: 'alert-success', timeOut: 3000 });
            localStorage.removeItem('authError');
        }
    };
    HeaderComponent.prototype.toggleNav = function () {
        this.navOpen = !this.navOpen;
        this.navToggled.emit(this.navOpen);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], HeaderComponent.prototype, "navToggled", void 0);
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-header',
            template: __webpack_require__("./src/app/header/header.component.html"),
            styles: [__webpack_require__("./src/app/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/pages/callback/callback.component.html":
/***/ (function(module, exports) {

module.exports = "<app-loading></app-loading>"

/***/ }),

/***/ "./src/app/pages/callback/callback.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/callback/callback.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CallbackComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__ = __webpack_require__("./src/app/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CallbackComponent = /** @class */ (function () {
    function CallbackComponent(auth) {
        this.auth = auth;
    }
    CallbackComponent.prototype.ngOnInit = function () {
        clearInterval(this.auth.timer);
    };
    CallbackComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-callback',
            template: __webpack_require__("./src/app/pages/callback/callback.component.html"),
            styles: [__webpack_require__("./src/app/pages/callback/callback.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */]])
    ], CallbackComponent);
    return CallbackComponent;
}());



/***/ }),

/***/ "./src/app/pages/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron text-center\">\n    <h1>Tacker v2</h1>\n    <p class=\"lead\">Welcome to Tracker v2, an app to track your past self!</p>\n</div>"

/***/ }),

/***/ "./src/app/pages/home/home.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__ = __webpack_require__("./src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_api_service__ = __webpack_require__("./src/app/core/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_models_user_model__ = __webpack_require__("./src/app/core/models/user.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomeComponent = /** @class */ (function () {
    function HomeComponent(title, auth, api) {
        this.title = title;
        this.auth = auth;
        this.api = api;
        this.pageTitle = 'Tracker v2';
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.title.setTitle(this.pageTitle);
        clearInterval(this.auth.timer);
        if (this.auth.loggedIn) {
            this.api
                .postUser$(new __WEBPACK_IMPORTED_MODULE_4__core_models_user_model__["a" /* UserModel */](this.auth.userProfile.sub))
                .subscribe(function (res) { }, function (err) {
                console.error(err);
            });
        }
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/pages/home/home.component.html"),
            styles: [__webpack_require__("./src/app/pages/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Title */],
            __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__core_api_service__["a" /* ApiService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/pages/record/record.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 *ngIf=\"message\" class=\"page-header text-center\">{{message}}</h2>\n\n<app-loading *ngIf=\"canRecord && !latitude && !longitude\"></app-loading>\n\n<div *ngIf=\"recording\" class=\"text-center\">\n    <p>Current Latitude: {{latitude}}\n        <br>Current Longitude: {{longitude}}</p>\n</div>\n\n<div *ngIf=\"recording\" class=\"text-center\">\n    <a (click)=\"_stopRecording()\" class=\"btn btn-danger text-center\">Stop</a>\n</div>"

/***/ }),

/***/ "./src/app/pages/record/record.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/record/record.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__validate_validate_service__ = __webpack_require__("./src/app/validate/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_api_service__ = __webpack_require__("./src/app/core/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_auth_service__ = __webpack_require__("./src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_models_location_model__ = __webpack_require__("./src/app/core/models/location.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var RecordComponent = /** @class */ (function () {
    function RecordComponent(title, api, auth, validate, flash) {
        this.title = title;
        this.api = api;
        this.auth = auth;
        this.validate = validate;
        this.flash = flash;
        this.pageTitle = 'Record Location';
        this.lastLat = undefined;
        this.lastLon = undefined;
        this.delay = 1000;
        this.canRecord = true;
        this.recording = false;
        this.record = true;
    }
    RecordComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.title.setTitle(this.pageTitle);
        this._getLocation();
        clearInterval(this.auth.timer);
        this.auth.timer = setInterval(function () {
            if ((_this.lastLat === _this.latitude) && (_this.lastLon === _this.longitude)) {
                _this.record = false;
            }
            else if ((Math.abs(_this.lastLat - _this.latitude) != 0 && Math.abs(_this.lastLat - _this.latitude) < 0.0000005)
                || (Math.abs(_this.lastLon - _this.longitude) != 0 && Math.abs(_this.lastLon - _this.longitude) < 0.0000005)) {
                _this.record = false;
            }
            else {
                _this.record = true;
            }
            _this.lastLat = _this.latitude;
            _this.lastLon = _this.longitude;
            var location = new __WEBPACK_IMPORTED_MODULE_5__core_models_location_model__["a" /* LocationModel */](_this.auth.userProfile.sub, _this.latitude, _this.longitude);
            if (_this.validate.validateLocation(location) && _this.record) {
                _this.message = 'Recording location...';
                _this.recording = true;
                _this.api
                    .postLocation$(location)
                    .subscribe(function (res) { }, function (err) {
                    console.error(err);
                    _this.flash.show(err.errorDescription, { cssClass: 'alert-danger', timeOut: 900 });
                });
            }
        }, this.delay);
    };
    RecordComponent.prototype._getLocation = function () {
        var _this = this;
        if (navigator.geolocation) {
            navigator.geolocation.watchPosition(function (position) {
                _this.latitude = position.coords.latitude;
                _this.longitude = position.coords.longitude;
            }, function (error) {
                switch (error.code) {
                    case error.PERMISSION_DENIED:
                        _this.message = 'User denied the request for Geolocation';
                        break;
                    case error.POSITION_UNAVAILABLE:
                        _this.message = 'Location information is unavailable';
                        break;
                    case error.TIMEOUT:
                        _this.message = 'The request to get user location timed out';
                        break;
                    default:
                        _this.message = 'An unknown error occurred';
                        break;
                }
                _this.canRecord = false;
            });
        }
        else {
            this.message = 'Geolocation is not supported by this browser';
            this.canRecord = false;
        }
    };
    RecordComponent.prototype._stopRecording = function () {
        clearInterval(this.auth.timer);
        this.recording = false;
        this.message = 'No longer recording';
    };
    RecordComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-record',
            template: __webpack_require__("./src/app/pages/record/record.component.html"),
            styles: [__webpack_require__("./src/app/pages/record/record.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* Title */],
            __WEBPACK_IMPORTED_MODULE_3__core_api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_4__auth_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__validate_validate_service__["a" /* ValidateService */],
            __WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages__["FlashMessagesService"]])
    ], RecordComponent);
    return RecordComponent;
}());



/***/ }),

/***/ "./src/app/pages/view/view.component.html":
/***/ (function(module, exports) {

module.exports = "<app-loading *ngIf=\"loading\"></app-loading>\n\n<ng-template [ngIf]=\"loading === false\">\n  <agm-map *ngIf=\"locationsList !== undefined &&  locationsList.length\" [latitude]=\"defaultLatitude\" [longitude]=\"defaultLongitude\">\n    <agm-marker *ngFor=\"let position of locationsList\" [latitude]=\"position.latitude\" [longitude]=\"position.longitude\">\n    </agm-marker>\n  </agm-map>\n\n  <p *ngIf=\"locationsList !== undefined && !locationsList.length\" class=\"alert alert-warning text-center\">\n    No saved locations found!\n  </p>\n\n  <p *ngIf=\"error\" class=\"alert alert-danger text-center\">\n    <strong>Oops!</strong> There was an error retrieving the locations.\n  </p>\n</ng-template>"

/***/ }),

/***/ "./src/app/pages/view/view.component.scss":
/***/ (function(module, exports) {

module.exports = "agm-map {\n  height: 400px; }\n"

/***/ }),

/***/ "./src/app/pages/view/view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_api_service__ = __webpack_require__("./src/app/core/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_auth_service__ = __webpack_require__("./src/app/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ViewComponent = /** @class */ (function () {
    function ViewComponent(title, api, auth) {
        this.title = title;
        this.api = api;
        this.auth = auth;
        this.pageTitle = 'View Locations';
        this.defaultLatitude = 6.199548;
        this.defaultLongitude = -75.57934;
    }
    ViewComponent.prototype.ngOnInit = function () {
        this.title.setTitle(this.pageTitle);
        this._getLocationsList();
        clearInterval(this.auth.timer);
    };
    ViewComponent.prototype._getLocationsList = function () {
        var _this = this;
        this.loading = true;
        this.locationsListSub = this.api
            .getLocationsByUserID$(this.auth.userProfile.sub)
            .subscribe(function (res) {
            _this.locationsList = res;
            _this.loading = false;
        }, function (err) {
            console.error(err);
            _this.loading = false;
            _this.error = true;
        });
    };
    ViewComponent.prototype.ngOnDestroy = function () {
        this.locationsListSub.unsubscribe();
    };
    ViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-view',
            template: __webpack_require__("./src/app/pages/view/view.component.html"),
            styles: [__webpack_require__("./src/app/pages/view/view.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Title */],
            __WEBPACK_IMPORTED_MODULE_2__core_api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_3__auth_auth_service__["a" /* AuthService */]])
    ], ViewComponent);
    return ViewComponent;
}());



/***/ }),

/***/ "./src/app/validate/validate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = /** @class */ (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateLocation = function (location) {
        if (location.latitude === undefined ||
            location.longitude === undefined ||
            location.userID === undefined) {
            return false;
        }
        if (location.latitude === null ||
            location.longitude === null ||
            location.userID === null) {
            return false;
        }
        return true;
    };
    ValidateService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ValidateService);
    return ValidateService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map