(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/andrejtarasov/Desktop/TP/tpUser/Karkasson/src/main.ts */"zUnb");


/***/ }),

/***/ "0PS2":
/*!**************************************************!*\
  !*** ./src/app/main-page/main-page.component.ts ***!
  \**************************************************/
/*! exports provided: MainPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageComponent", function() { return MainPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _services_crossPageInformation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/crossPageInformation */ "5Gks");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");






function MainPageComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "svg", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "rect", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "text");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "image", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainPageComponent_div_4_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const game_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.playButtonFunc(game_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Play");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainPageComponent_div_4_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const game_r1 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.findGamesButton(game_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Find games");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "small", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "9 mins");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const game_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](game_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", game_r1.information, " ");
} }
class MainPageComponent {
    constructor(fb, router, http, crossPageInformation) {
        this.router = router;
        this.http = http;
        this.crossPageInformation = crossPageInformation;
        this.shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));
        this.options = fb.group({
            bottom: 0,
            fixed: false,
            top: 0
        });
    }
    ngOnInit() {
        this.http.get('http://localhost:8080/app/games').subscribe((games) => {
            if (games == null) {
                alert('неверный пароль');
            }
            else {
                this.games = games;
            }
        }, err => { alert('соединение с сервером потеряно'); });
    }
    playButtonFunc(game) {
        this.crossPageInformation.chosedGame = game;
        this.crossPageInformation.room = '0';
        this.router.navigate(['/gamePage']);
    }
    findGamesButton(game) {
        this.crossPageInformation.chosedGame = game;
        this.router.navigate(['/gamesInProgress']);
    }
}
MainPageComponent.ɵfac = function MainPageComponent_Factory(t) { return new (t || MainPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_crossPageInformation__WEBPACK_IMPORTED_MODULE_4__["CrossPageInformation"])); };
MainPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainPageComponent, selectors: [["app-main-page"]], decls: 17, vars: 1, consts: [["role", "main"], [1, "album", "py-5", "bg-light"], [1, "container"], [1, "row"], ["class", "col-md-4", 4, "ngFor", "ngForOf"], [1, "text-muted"], [1, "float-right"], ["href", "#"], ["href", "https://getbootstrap.com/"], [1, "col-md-4"], [1, "card", "mb-4", "shadow-sm"], ["width", "100%", "height", "225", "xmlns", "http://www.w3.org/2000/svg", 1, "bd-placeholder-img", "card-img-top"], ["width", "100%", "height", "100%", "fill", "#25ef66"], ["x", "0", "y", "0", "width", "100%", "height", "100%", 0, "xlink", "href", "assets/KarkassonTableGame.png"], [1, "card-body"], [1, "card-text"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "btn-group"], ["type", "button", 1, "btn", "btn-sm", "btn-outline-secondary", 3, "click"]], template: function MainPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MainPageComponent_div_4_Template, 18, 2, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "footer", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Back to top");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Album example is \u00A9 Bootstrap, but please download and customize it for yourself!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "New to Bootstrap? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Visit the homepage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " or read our getting started guide.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.games);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], styles: [".jumbotron[_ngcontent-%COMP%] {\n  padding-top: 3rem;\n  padding-bottom: 3rem;\n  margin-bottom: 0;\n  background-color: #fff;\n}\n@media (min-width: 768px) {\n  .jumbotron[_ngcontent-%COMP%] {\n    padding-top: 6rem;\n    padding-bottom: 6rem;\n  }\n}\n.jumbotron[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.jumbotron[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-weight: 300;\n}\n.jumbotron[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  max-width: 40rem;\n}\nfooter[_ngcontent-%COMP%] {\n  padding-top: 3rem;\n  padding-bottom: 3rem;\n}\nfooter[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: .25rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4tcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIsc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRTtJQUNFLGlCQUFpQjtJQUNqQixvQkFBb0I7RUFDdEI7QUFDRjtBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLG9CQUFvQjtBQUN0QjtBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCIiwiZmlsZSI6Im1haW4tcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmp1bWJvdHJvbiB7XG4gIHBhZGRpbmctdG9wOiAzcmVtO1xuICBwYWRkaW5nLWJvdHRvbTogM3JlbTtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAuanVtYm90cm9uIHtcbiAgICBwYWRkaW5nLXRvcDogNnJlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogNnJlbTtcbiAgfVxufVxuXG4uanVtYm90cm9uIHA6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi5qdW1ib3Ryb24gaDEge1xuICBmb250LXdlaWdodDogMzAwO1xufVxuXG4uanVtYm90cm9uIC5jb250YWluZXIge1xuICBtYXgtd2lkdGg6IDQwcmVtO1xufVxuXG5mb290ZXIge1xuICBwYWRkaW5nLXRvcDogM3JlbTtcbiAgcGFkZGluZy1ib3R0b206IDNyZW07XG59XG5cbmZvb3RlciBwIHtcbiAgbWFyZ2luLWJvdHRvbTogLjI1cmVtO1xufVxuXG4iXX0= */"] });


/***/ }),

/***/ "1HgR":
/*!**************************************************!*\
  !*** ./src/app/user-page/user-page.component.ts ***!
  \**************************************************/
/*! exports provided: UserPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPageComponent", function() { return UserPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_crossPageInformation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/crossPageInformation */ "5Gks");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");





class UserPageComponent {
    constructor(router, crossPageInformation, http) {
        this.router = router;
        this.crossPageInformation = crossPageInformation;
        this.http = http;
        this.password = '';
        this.repeatPassword = '';
        this.newPassword = '';
        this.newName = '';
    }
    ngOnInit() {
    }
    changeName() {
        const user = { name: this.newName, login: this.crossPageInformation.currentUser.login, password: this.password };
        this.http.post('http://localhost:8080/app/update/name', user).subscribe((e) => {
            if (e == null) {
                alert('неверный пароль');
            }
            else {
                this.crossPageInformation.currentUser = e;
            }
        }, err => { alert('соединение с сервером потеряно'); });
    }
    getName() {
        if (this.crossPageInformation.currentUser) {
            return this.crossPageInformation.currentUser.name;
        }
        return '';
    }
    getLogin() {
        if (this.crossPageInformation.currentUser) {
            return this.crossPageInformation.currentUser.login;
        }
        return '';
    }
    changePass() {
        // todo
        const user = { name: this.newName, login: this.crossPageInformation.currentUser.login, password: this.password, newPassword: this.newPassword };
        this.http.post('http://localhost:8080/app/update/password', user).subscribe((e) => {
            if (e == null) {
                alert('ошибка пароль');
            }
            else {
                this.crossPageInformation.currentUser = e;
            }
        }, err => { alert('соединение с сервером потеряно'); });
    }
}
UserPageComponent.ɵfac = function UserPageComponent_Factory(t) { return new (t || UserPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_crossPageInformation__WEBPACK_IMPORTED_MODULE_2__["CrossPageInformation"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
UserPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserPageComponent, selectors: [["app-user-page"]], decls: 56, vars: 7, consts: [["lang", "en"], ["charset", "utf-8"], ["name", "viewport", "content", "width=device-width, initial-scale=1, shrink-to-fit=no"], ["name", "description", "content", ""], ["name", "author", "content", "Mark Otto, Jacob Thornton, and Bootstrap contributors"], ["name", "generator", "content", "Jekyll v4.0.1"], [1, "py-4"], [1, "container"], [1, "d-flex", "align-items-center", "p-3", "my-3", "text-white-50", "bg-purple", "rounded", "shadow-sm"], [1, "lh-100"], [1, "mb-0", "text-white", "lh-100"], [1, "col-md-8", "order-md-1"], ["novalidate", "", 1, "needs-validation"], [1, "row"], [1, "col-md-5", "mb-3"], ["type", "text", "readonly", "", 1, "form-control", 3, "value"], [1, "my-4"], [1, "col-md-4", "mb-3"], ["type", "text", "name", "newName", "placeholder", "\u041D\u043E\u0432\u043E\u0435 \u0438\u043C\u044F", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "invalid-feedback"], ["type", "text", "name", "password", "placeholder", "\u041F\u0430\u0440\u043E\u043B\u044C", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "col-md-3", "mb-3"], [1, "form-control", 3, "click"], ["type", "text", "name", "newPassword", "placeholder", "\u041D\u043E\u0432\u044B\u0439 \u043F\u0430\u0440\u043E\u043B\u044C", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "repeatPassword", "placeholder", "\u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C", 1, "form-control", 3, "ngModel", "ngModelChange"]], template: function UserPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "meta", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "meta", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "meta", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "meta", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Offcanvas template \u00B7 Bootstrap");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "body", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h6", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u0414\u043E\u0431\u0440\u043E \u043F\u043E\u0436\u0430\u043B\u043E\u0432\u0430\u0442\u044C \u0432 \u043B\u0438\u0447\u043D\u044B\u0439 \u043A\u0430\u0431\u0438\u043D\u0435\u0442, \u041C\u043E\u0435 \u0438\u043C\u044F \u0432 \u0441\u0438\u0441\u0442\u0435\u043C\u0435");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "form", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "hr", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserPageComponent_Template_input_ngModelChange_26_listener($event) { return ctx.newName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Please provide a valid state. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserPageComponent_Template_input_ngModelChange_31_listener($event) { return ctx.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Please select a valid country. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserPageComponent_Template_button_click_35_listener() { return ctx.changeName(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "\u0441\u043C\u0435\u043D\u0438\u0442\u044C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "hr", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserPageComponent_Template_input_ngModelChange_40_listener($event) { return ctx.newPassword = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " Please provide a valid state. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserPageComponent_Template_input_ngModelChange_45_listener($event) { return ctx.repeatPassword = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " Please provide a valid state. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserPageComponent_Template_input_ngModelChange_50_listener($event) { return ctx.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " Please select a valid country. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserPageComponent_Template_button_click_54_listener() { return ctx.changePass(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "\u0441\u043C\u0435\u043D\u0438\u0442\u044C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.getLogin());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.getName());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.newName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.newPassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.repeatPassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.password);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]], styles: [".bd-placeholder-img[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  text-anchor: middle;\n  -webkit-user-select: none;\n  user-select: none;\n}\n\n@media (min-width: 768px) {\n  .bd-placeholder-img-lg[_ngcontent-%COMP%] {\n    font-size: 3.5rem;\n  }\n}\n\n@media (max-width: 991.98px) {\n  .offcanvas-collapse[_ngcontent-%COMP%] {\n    position: fixed;\n    top: 56px; \n    bottom: 0;\n    left: 100%;\n    width: 100%;\n    padding-right: 1rem;\n    padding-left: 1rem;\n    overflow-y: auto;\n    visibility: hidden;\n    background-color: #343a40;\n    transition: transform .3s ease-in-out, visibility .3s ease-in-out;\n  }\n  .offcanvas-collapse.open[_ngcontent-%COMP%] {\n    visibility: visible;\n    transform: translateX(-100%);\n  }\n}\n\n.nav-scroller[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  height: 2.75rem;\n  overflow-y: hidden;\n}\n\n.nav-scroller[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: nowrap;\n  padding-bottom: 1rem;\n  margin-top: -1px;\n  overflow-x: auto;\n  color: rgba(255, 255, 255, .75);\n  text-align: center;\n  white-space: nowrap;\n  -webkit-overflow-scrolling: touch;\n}\n\n.nav-underline[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  padding-top: .75rem;\n  padding-bottom: .75rem;\n  font-size: .875rem;\n  color: #6c757d;\n}\n\n.nav-underline[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover {\n  color: #007bff;\n}\n\n.nav-underline[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #343a40;\n}\n\n.text-white-50[_ngcontent-%COMP%] { color: rgba(255, 255, 255, .5); }\n\n.bg-purple[_ngcontent-%COMP%] { background-color: #6f42c1; }\n\n.lh-100[_ngcontent-%COMP%] { line-height: 1; }\n\n.lh-125[_ngcontent-%COMP%] { line-height: 1.25; }\n\n.lh-150[_ngcontent-%COMP%] { line-height: 1.5; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFHekIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0U7SUFDRSxpQkFBaUI7RUFDbkI7QUFDRjs7QUFHQTtFQUNFO0lBQ0UsZUFBZTtJQUNmLFNBQVMsRUFBRSxxQkFBcUI7SUFDaEMsU0FBUztJQUNULFVBQVU7SUFDVixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUV6QixpRUFBaUU7RUFFbkU7RUFDQTtJQUNFLG1CQUFtQjtJQUVuQiw0QkFBNEI7RUFDOUI7QUFDRjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUVFLGFBQWE7RUFFYixpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsK0JBQStCO0VBQy9CLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7QUFFQSxpQkFBaUIsOEJBQThCLEVBQUU7O0FBRWpELGFBQWEseUJBQXlCLEVBQUU7O0FBRXhDLFVBQVUsY0FBYyxFQUFFOztBQUMxQixVQUFVLGlCQUFpQixFQUFFOztBQUM3QixVQUFVLGdCQUFnQixFQUFFIiwiZmlsZSI6InVzZXItcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJkLXBsYWNlaG9sZGVyLWltZyB7XG4gIGZvbnQtc2l6ZTogMS4xMjVyZW07XG4gIHRleHQtYW5jaG9yOiBtaWRkbGU7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAuYmQtcGxhY2Vob2xkZXItaW1nLWxnIHtcbiAgICBmb250LXNpemU6IDMuNXJlbTtcbiAgfVxufVxuXG5cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTEuOThweCkge1xuICAub2ZmY2FudmFzLWNvbGxhcHNlIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiA1NnB4OyAvKiBIZWlnaHQgb2YgbmF2YmFyICovXG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZy1yaWdodDogMXJlbTtcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM0M2E0MDtcbiAgICB0cmFuc2l0aW9uOiB2aXNpYmlsaXR5IC4zcyBlYXNlLWluLW91dCwgLXdlYmtpdC10cmFuc2Zvcm0gLjNzIGVhc2UtaW4tb3V0O1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuM3MgZWFzZS1pbi1vdXQsIHZpc2liaWxpdHkgLjNzIGVhc2UtaW4tb3V0O1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuM3MgZWFzZS1pbi1vdXQsIHZpc2liaWxpdHkgLjNzIGVhc2UtaW4tb3V0LCAtd2Via2l0LXRyYW5zZm9ybSAuM3MgZWFzZS1pbi1vdXQ7XG4gIH1cbiAgLm9mZmNhbnZhcy1jb2xsYXBzZS5vcGVuIHtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xuICB9XG59XG5cbi5uYXYtc2Nyb2xsZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDI7XG4gIGhlaWdodDogMi43NXJlbTtcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xufVxuXG4ubmF2LXNjcm9sbGVyIC5uYXYge1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgLW1zLWZsZXgtd3JhcDogbm93cmFwO1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgcGFkZGluZy1ib3R0b206IDFyZW07XG4gIG1hcmdpbi10b3A6IC0xcHg7XG4gIG92ZXJmbG93LXg6IGF1dG87XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC43NSk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xufVxuXG4ubmF2LXVuZGVybGluZSAubmF2LWxpbmsge1xuICBwYWRkaW5nLXRvcDogLjc1cmVtO1xuICBwYWRkaW5nLWJvdHRvbTogLjc1cmVtO1xuICBmb250LXNpemU6IC44NzVyZW07XG4gIGNvbG9yOiAjNmM3NTdkO1xufVxuXG4ubmF2LXVuZGVybGluZSAubmF2LWxpbms6aG92ZXIge1xuICBjb2xvcjogIzAwN2JmZjtcbn1cblxuLm5hdi11bmRlcmxpbmUgLmFjdGl2ZSB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjMzQzYTQwO1xufVxuXG4udGV4dC13aGl0ZS01MCB7IGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC41KTsgfVxuXG4uYmctcHVycGxlIHsgYmFja2dyb3VuZC1jb2xvcjogIzZmNDJjMTsgfVxuXG4ubGgtMTAwIHsgbGluZS1oZWlnaHQ6IDE7IH1cbi5saC0xMjUgeyBsaW5lLWhlaWdodDogMS4yNTsgfVxuLmxoLTE1MCB7IGxpbmUtaGVpZ2h0OiAxLjU7IH1cbiJdfQ== */", ".bd-placeholder-img[_ngcontent-%COMP%] {\n      font-size: 1.125rem;\n      text-anchor: middle;\n      -webkit-userDto-select: none;\n      -moz-userDto-select: none;\n      -ms-userDto-select: none;\n      userDto-select: none;\n    }\n\n    @media (min-width: 768px) {\n      .bd-placeholder-img-lg[_ngcontent-%COMP%] {\n        font-size: 3.5rem;\n      }\n    }"] });


/***/ }),

/***/ "5Gks":
/*!**************************************************!*\
  !*** ./src/app/services/crossPageInformation.ts ***!
  \**************************************************/
/*! exports provided: CrossPageInformation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrossPageInformation", function() { return CrossPageInformation; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class CrossPageInformation {
    constructor() { }
    get room() {
        return this._room;
    }
    set room(value) {
        this._room = value;
    }
    get currentUser() {
        return this._currentUser;
    }
    set currentUser(value) {
        this._currentUser = value;
    }
    get chosedGame() {
        return this._chosedGame;
    }
    set chosedGame(value) {
        this._chosedGame = value;
    }
}
CrossPageInformation.ɵfac = function CrossPageInformation_Factory(t) { return new (t || CrossPageInformation)(); };
CrossPageInformation.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CrossPageInformation, factory: CrossPageInformation.ɵfac });


/***/ }),

/***/ "7Nfy":
/*!********************************************!*\
  !*** ./src/app/services/Signal.service.ts ***!
  \********************************************/
/*! exports provided: SignalrService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignalrService", function() { return SignalrService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _stomp_ng2_stompjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @stomp/ng2-stompjs */ "MWWs");




class SignalrService {
    constructor(rxStompService) {
        this.rxStompService = rxStompService;
        this.newPeer = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.newPeer$ = this.newPeer.asObservable();
        this.helloAnswer = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.helloAnswer$ = this.helloAnswer.asObservable();
        this.disconnectedPeer = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.disconnectedPeer$ = this.disconnectedPeer.asObservable();
        this.signal = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.signal$ = this.signal.asObservable();
    }
    startConnection(currentUser, roomId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.rxStompService.watch('/user/' + currentUser + '/socket/userArrived')
                .subscribe((message) => {
                console.log(message);
                this.newUserArrived(message.body);
            });
            this.rxStompService.watch('/user/' + currentUser + '/socket/UserDisconnect')
                .subscribe((message) => {
                this.userDisconnect(message.body);
            });
            this.rxStompService.watch('/user/' + currentUser + '/socket/sendSignal')
                .subscribe((message) => {
                console.log(message);
                const data = JSON.parse(message.body);
                // this.sendSignal(data.user, data.signal, currentUser);
                this.signal.next(data);
            });
            this.sendNewUserSignal(currentUser, roomId);
        });
    }
    newUserArrived(data) {
        this.newPeer.next(JSON.parse(data));
    }
    userDisconnect(data) {
        this.disconnectedPeer.next(JSON.parse(data));
    }
    sendSignal(room, message) {
        // const message: SignalInfo = {signal, user: currentUser, target};
        console.log(message);
        this.rxStompService.publish({ destination: '/app/videoChat/' + room + '/sendSignal',
            body: JSON.stringify(message) });
        // this.signal.next({ user, signal });
    }
    sendSignalToRoom(room, message) {
        this.sendSignal(room, message);
    }
    sendNewUserSignal(currentUser, roomId) {
        const message = JSON.stringify({ user: currentUser });
        this.rxStompService.publish({ destination: '/app/videoChat/' + roomId + '/newUser', body: message });
    }
}
SignalrService.ɵfac = function SignalrService_Factory(t) { return new (t || SignalrService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_stomp_ng2_stompjs__WEBPACK_IMPORTED_MODULE_3__["RxStompService"])); };
SignalrService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: SignalrService, factory: SignalrService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "9k3z":
/*!************************************************************!*\
  !*** ./src/app/navigation-bar/navigation-bar.component.ts ***!
  \************************************************************/
/*! exports provided: NavigationBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationBarComponent", function() { return NavigationBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_crossPageInformation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/crossPageInformation */ "5Gks");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");






function NavigationBarComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "svg", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "rect", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "image", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "strong", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationBarComponent_div_4_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const game_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.playButtonFunc(game_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u0438\u0433\u0440\u0430\u0442\u044C");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const game_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](game_r3.title);
} }
function NavigationBarComponent_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationBarComponent_button_7_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return _r0.toggle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function () { return ["/myPage"]; };
class NavigationBarComponent {
    constructor(data, router) {
        this.data = data;
        this.router = router;
    }
    ngOnInit() {
    }
    playButtonFunc(game) {
        this.data.chosedGame = game;
        this.data.room = '0';
        this.router.navigate(['/gamePage']);
    }
}
NavigationBarComponent.ɵfac = function NavigationBarComponent_Factory(t) { return new (t || NavigationBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_crossPageInformation__WEBPACK_IMPORTED_MODULE_1__["CrossPageInformation"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
NavigationBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavigationBarComponent, selectors: [["app-navigation-bar"]], decls: 8, vars: 5, consts: [[1, "example-container", 3, "hasBackdrop"], ["drawer", ""], [1, "nav-bar-container"], ["class", "my-3 p-3 bg-white rounded shadow-sm", 4, "ngFor", "ngForOf"], ["mat-raised-button", "", "color", "accent", 1, "mat-button", 3, "routerLink"], ["mat-raised-button", "", "class", "toggle-button", 3, "click", 4, "ngIf"], [1, "my-3", "p-3", "bg-white", "rounded", "shadow-sm"], [1, "media", "text-muted", "pt-3"], ["width", "32", "height", "32", "xmlns", "http://www.w3.org/2000/svg", 1, "bd-placeholder-img", "mr-2", "rounded"], ["width", "32", "height", "32", "fill", "#000000"], ["x", "0", "y", "0", "width", "32", "height", "32", 0, "xlink", "href", "assets/KarkassonTableGame.png"], [1, "col"], [1, "d-block", "text-gray-dark"], ["type", "submit", 1, "btn", "btn-outline-success", "my-2", "my-sm-0", 3, "click"], ["mat-raised-button", "", 1, "toggle-button", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-card-list"], ["d", "M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"], ["d", "M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8zm0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-1-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zM4 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm0 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"]], template: function NavigationBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-drawer-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-drawer", null, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-drawer-content", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NavigationBarComponent_div_4_Template, 11, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u043B\u0438\u0447\u043D\u044B\u0439 \u043A\u0430\u0431\u0438\u043D\u0435\u0442");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, NavigationBarComponent_button_7_Template, 4, 0, "button", 5);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hasBackdrop", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data.games);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.currentUser);
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatDrawerContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatDrawer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatDrawerContent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: [".example-container[_ngcontent-%COMP%] {\n  position: static;\n}\n\n.toggle-button[_ngcontent-%COMP%] {\n  position: fixed;\n  left: 5%;\n  right:0;\n  bottom:5%;\n  z-index: 10;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmlnYXRpb24tYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsUUFBUTtFQUNSLE9BQU87RUFDUCxTQUFTO0VBQ1QsV0FBVztBQUNiIiwiZmlsZSI6Im5hdmlnYXRpb24tYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1jb250YWluZXIge1xuICBwb3NpdGlvbjogc3RhdGljO1xufVxuXG4udG9nZ2xlLWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogNSU7XG4gIHJpZ2h0OjA7XG4gIGJvdHRvbTo1JTtcbiAgei1pbmRleDogMTA7XG59XG4iXX0= */"] });


/***/ }),

/***/ "AytR":
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
const environment = {
    production: false
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

/***/ "EFyh":
/*!*******************************************!*\
  !*** ./src/app/services/login.service.ts ***!
  \*******************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class LoginService {
    constructor() { }
    get me() {
        return this._me;
    }
    set me(value) {
        this._me = value;
    }
}
LoginService.ɵfac = function LoginService_Factory(t) { return new (t || LoginService)(); };
LoginService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LoginService, factory: LoginService.ɵfac });


/***/ }),

/***/ "GHRa":
/*!********************************************************!*\
  !*** ./src/app/history-page/history-page.component.ts ***!
  \********************************************************/
/*! exports provided: HistoryPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryPageComponent", function() { return HistoryPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_crossPageInformation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/crossPageInformation */ "5Gks");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




function HistoryPageComponent_div_8_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 10);
} }
function HistoryPageComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "svg", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "rect", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "strong", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, HistoryPageComponent_div_8_div_8_Template, 1, 0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const session_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](session_r1.game.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" \u0418\u043C\u044F \u043A\u043E\u043C\u043D\u0430\u0442\u044B: ", session_r1.title, ". Session: ", session_r1.sessionStatus, ". ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", session_r1.sessionStatus);
} }
class HistoryPageComponent {
    constructor(crossPageInformation, http) {
        this.crossPageInformation = crossPageInformation;
        this.http = http;
        this.sessions = [];
    }
    ngOnInit() {
        this.http.get('http://localhost:8080/app/sessions/'
            + this.crossPageInformation.currentUser.login).subscribe((sessions) => {
            if (sessions == null) {
                alert('неверный');
            }
            else {
                this.sessions = sessions;
            }
        }, err => { alert('соединение с сервером потеряно'); });
    }
}
HistoryPageComponent.ɵfac = function HistoryPageComponent_Factory(t) { return new (t || HistoryPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_crossPageInformation__WEBPACK_IMPORTED_MODULE_1__["CrossPageInformation"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
HistoryPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HistoryPageComponent, selectors: [["app-history-page"]], decls: 9, vars: 1, consts: [["role", "main", 1, "container"], [1, "d-flex", "align-items-center", "p-3", "my-3", "text-white-50", "bg-purple", "rounded", "shadow-sm"], [1, "lh-100"], [1, "mb-0", "text-white", "lh-100"], [1, "my-3", "p-3", "bg-white", "rounded", "shadow-sm"], [1, "border-bottom", "border-gray", "pb-2", "mb-0"], [4, "ngFor", "ngForOf"], [1, "media", "text-muted", "pt-3"], ["width", "32", "height", "32", "xmlns", "http://www.w3.org/2000/svg", 1, "bd-placeholder-img", "mr-2", "rounded"], ["width", "32", "height", "32", "fill", "#000000"], [1, "col"], [1, "d-block", "text-gray-dark"], ["class", "col", 4, "ngIf"]], template: function HistoryPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h6", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "My game history");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h6", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u041D\u0435\u0434\u0430\u0432\u043D\u0438\u0435 \u0438\u0433\u0440\u044B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, HistoryPageComponent_div_8_Template, 9, 4, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.sessions);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: [".bd-placeholder-img[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  text-anchor: middle;\n  -webkit-user-select: none;\n  user-select: none;\n}\n\n@media (min-width: 768px) {\n  .bd-placeholder-img-lg[_ngcontent-%COMP%] {\n    font-size: 3.5rem;\n  }\n}\n\n@media (max-width: 991.98px) {\n  .offcanvas-collapse[_ngcontent-%COMP%] {\n    position: fixed;\n    top: 56px; \n    bottom: 0;\n    left: 100%;\n    width: 100%;\n    padding-right: 1rem;\n    padding-left: 1rem;\n    overflow-y: auto;\n    visibility: hidden;\n    background-color: #343a40;\n    transition: transform .3s ease-in-out, visibility .3s ease-in-out;\n  }\n  .offcanvas-collapse.open[_ngcontent-%COMP%] {\n    visibility: visible;\n    transform: translateX(-100%);\n  }\n}\n\n.nav-scroller[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  height: 2.75rem;\n  overflow-y: hidden;\n}\n\n.nav-scroller[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: nowrap;\n  padding-bottom: 1rem;\n  margin-top: -1px;\n  overflow-x: auto;\n  color: rgba(255, 255, 255, .75);\n  text-align: center;\n  white-space: nowrap;\n  -webkit-overflow-scrolling: touch;\n}\n\n.nav-underline[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  padding-top: .75rem;\n  padding-bottom: .75rem;\n  font-size: .875rem;\n  color: #6c757d;\n}\n\n.nav-underline[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover {\n  color: #007bff;\n}\n\n.nav-underline[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #343a40;\n}\n\n.text-white-50[_ngcontent-%COMP%] { color: rgba(255, 255, 255, .5); }\n\n.bg-purple[_ngcontent-%COMP%] { background-color: #6f42c1; }\n\n.lh-100[_ngcontent-%COMP%] { line-height: 1; }\n\n.lh-125[_ngcontent-%COMP%] { line-height: 1.25; }\n\n.lh-150[_ngcontent-%COMP%] { line-height: 1.5; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhpc3RvcnktcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFHekIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0U7SUFDRSxpQkFBaUI7RUFDbkI7QUFDRjs7QUFHQTtFQUNFO0lBQ0UsZUFBZTtJQUNmLFNBQVMsRUFBRSxxQkFBcUI7SUFDaEMsU0FBUztJQUNULFVBQVU7SUFDVixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUV6QixpRUFBaUU7RUFFbkU7RUFDQTtJQUNFLG1CQUFtQjtJQUVuQiw0QkFBNEI7RUFDOUI7QUFDRjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUVFLGFBQWE7RUFFYixpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsK0JBQStCO0VBQy9CLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7QUFFQSxpQkFBaUIsOEJBQThCLEVBQUU7O0FBRWpELGFBQWEseUJBQXlCLEVBQUU7O0FBRXhDLFVBQVUsY0FBYyxFQUFFOztBQUMxQixVQUFVLGlCQUFpQixFQUFFOztBQUM3QixVQUFVLGdCQUFnQixFQUFFIiwiZmlsZSI6Imhpc3RvcnktcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJkLXBsYWNlaG9sZGVyLWltZyB7XG4gIGZvbnQtc2l6ZTogMS4xMjVyZW07XG4gIHRleHQtYW5jaG9yOiBtaWRkbGU7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAuYmQtcGxhY2Vob2xkZXItaW1nLWxnIHtcbiAgICBmb250LXNpemU6IDMuNXJlbTtcbiAgfVxufVxuXG5cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTEuOThweCkge1xuICAub2ZmY2FudmFzLWNvbGxhcHNlIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiA1NnB4OyAvKiBIZWlnaHQgb2YgbmF2YmFyICovXG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZy1yaWdodDogMXJlbTtcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM0M2E0MDtcbiAgICB0cmFuc2l0aW9uOiB2aXNpYmlsaXR5IC4zcyBlYXNlLWluLW91dCwgLXdlYmtpdC10cmFuc2Zvcm0gLjNzIGVhc2UtaW4tb3V0O1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuM3MgZWFzZS1pbi1vdXQsIHZpc2liaWxpdHkgLjNzIGVhc2UtaW4tb3V0O1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuM3MgZWFzZS1pbi1vdXQsIHZpc2liaWxpdHkgLjNzIGVhc2UtaW4tb3V0LCAtd2Via2l0LXRyYW5zZm9ybSAuM3MgZWFzZS1pbi1vdXQ7XG4gIH1cbiAgLm9mZmNhbnZhcy1jb2xsYXBzZS5vcGVuIHtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xuICB9XG59XG5cbi5uYXYtc2Nyb2xsZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDI7XG4gIGhlaWdodDogMi43NXJlbTtcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xufVxuXG4ubmF2LXNjcm9sbGVyIC5uYXYge1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgLW1zLWZsZXgtd3JhcDogbm93cmFwO1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgcGFkZGluZy1ib3R0b206IDFyZW07XG4gIG1hcmdpbi10b3A6IC0xcHg7XG4gIG92ZXJmbG93LXg6IGF1dG87XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC43NSk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xufVxuXG4ubmF2LXVuZGVybGluZSAubmF2LWxpbmsge1xuICBwYWRkaW5nLXRvcDogLjc1cmVtO1xuICBwYWRkaW5nLWJvdHRvbTogLjc1cmVtO1xuICBmb250LXNpemU6IC44NzVyZW07XG4gIGNvbG9yOiAjNmM3NTdkO1xufVxuXG4ubmF2LXVuZGVybGluZSAubmF2LWxpbms6aG92ZXIge1xuICBjb2xvcjogIzAwN2JmZjtcbn1cblxuLm5hdi11bmRlcmxpbmUgLmFjdGl2ZSB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjMzQzYTQwO1xufVxuXG4udGV4dC13aGl0ZS01MCB7IGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC41KTsgfVxuXG4uYmctcHVycGxlIHsgYmFja2dyb3VuZC1jb2xvcjogIzZmNDJjMTsgfVxuXG4ubGgtMTAwIHsgbGluZS1oZWlnaHQ6IDE7IH1cbi5saC0xMjUgeyBsaW5lLWhlaWdodDogMS4yNTsgfVxuLmxoLTE1MCB7IGxpbmUtaGVpZ2h0OiAxLjU7IH1cbiJdfQ== */"] });


/***/ }),

/***/ "Kbr6":
/*!********************************************************!*\
  !*** ./src/app/sign-in-page/sign-in-page.component.ts ***!
  \********************************************************/
/*! exports provided: SignInPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInPageComponent", function() { return SignInPageComponent; });
/* harmony import */ var _classes_user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes/user */ "UxUN");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_crossPageInformation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/crossPageInformation */ "5Gks");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");






const _c0 = function () { return ["/login"]; };
class SignInPageComponent {
    constructor(router, crossPageInformation, http) {
        this.router = router;
        this.crossPageInformation = crossPageInformation;
        this.http = http;
        this.login = '';
        this.password = '';
    }
    ngOnInit() {
    }
    trySignIn(userName, login, password) {
        const user = new _classes_user__WEBPACK_IMPORTED_MODULE_0__["User"](userName, login, password);
        this.http.post('http://localhost:8080/app/login/authentication', user).subscribe((e) => {
            if (e == null) {
                alert('ошибка входа');
            }
            else {
                this.crossPageInformation.currentUser = e;
                this.http.get('http://localhost:8080/app/games').subscribe((games) => {
                    if (games == null) {
                        alert('неверный пароль');
                    }
                    else {
                        this.crossPageInformation.games = games;
                    }
                }, err => { alert('соединение с сервером потеряно'); });
                this.router.navigate(['/main']);
            }
        }, err => {
            alert('соединение с сервером потеряно');
        });
    }
    signIn() {
        this.trySignIn('', this.login, this.password);
    }
}
SignInPageComponent.ɵfac = function SignInPageComponent_Factory(t) { return new (t || SignInPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_crossPageInformation__WEBPACK_IMPORTED_MODULE_3__["CrossPageInformation"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
SignInPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SignInPageComponent, selectors: [["app-sign-in-page"]], decls: 19, vars: 4, consts: [[1, "form-signin"], [1, "text-center", "mb-4"], [1, "h3", "mb-3", "font-weight-normal"], [1, "form-label-group"], ["type", "email", "id", "inputEmail", "placeholder", "Email address", "name", "username", "required", "", "autofocus", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "inputEmail"], ["type", "password", "id", "inputPassword", "placeholder", "Password", "name", "password", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "inputPassword"], ["type", "submit", 1, "btn", "btn-lg", "btn-primary", "btn-block", 3, "click"], ["type", "submit", 1, "btn", "btn-lg", "btn-primary", "btn-block", 3, "routerLink"], [1, "mt-5", "mb-3", "text-muted", "text-center"]], template: function SignInPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\u0412\u0445\u043E\u0434 \u0432 \u0441\u0438\u0441\u0442\u0435\u043C\u0443");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SignInPageComponent_Template_input_ngModelChange_6_listener($event) { return ctx.login = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "\u041B\u043E\u0433\u0438\u043D");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SignInPageComponent_Template_input_ngModelChange_10_listener($event) { return ctx.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "\u041F\u0430\u0440\u043E\u043B\u044C");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SignInPageComponent_Template_button_click_13_listener() { return ctx.signIn(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "\u0412\u043E\u0439\u0442\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "\u043F\u0435\u0440\u0435\u0439\u0442\u0438 \u043A \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "\u00A9 2017-2021");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.login);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](3, _c0));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], styles: [".form-signin[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 420px;\n  padding: 15px;\n  margin: auto;\n}\n\n.form-label-group[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 1rem;\n}\n\n.form-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .form-label-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  height: 3.125rem;\n  padding: .75rem;\n}\n\n.form-label-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: block;\n  width: 100%;\n  margin-bottom: 0; \n  line-height: 1.5;\n  color: #495057;\n  pointer-events: none;\n  cursor: text; \n  border: 1px solid transparent;\n  border-radius: .25rem;\n  transition: all .1s ease-in-out;\n}\n\n.form-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: transparent;\n}\n\n.form-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not(:placeholder-shown) {\n  padding-top: 1.25rem;\n  padding-bottom: .25rem;\n}\n\n.form-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not(:placeholder-shown)    ~ label[_ngcontent-%COMP%] {\n  padding-top: .25rem;\n  padding-bottom: .25rem;\n  font-size: 12px;\n  color: #777;\n}\n\n\n\n@supports (-ms-ime-align: auto) {\n  .form-label-group[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column-reverse;\n  }\n\n  .form-label-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    position: static;\n  }\n\n  .form-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-ms-input-placeholder {\n    color: #777;\n  }\n}\n\n.bd-placeholder-img[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  text-anchor: middle;\n  -webkit-user-select: none;\n  user-select: none;\n}\n\n@media (min-width: 768px) {\n  .bd-placeholder-img-lg[_ngcontent-%COMP%] {\n    font-size: 3.5rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ24taW4tcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFFQTs7RUFFRSxnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLGNBQWM7RUFDZCxXQUFXO0VBQ1gsZ0JBQWdCLEVBQUUsc0NBQXNDO0VBQ3hELGdCQUFnQjtFQUNoQixjQUFjO0VBQ2Qsb0JBQW9CO0VBQ3BCLFlBQVksRUFBRSxvQ0FBb0M7RUFDbEQsNkJBQTZCO0VBQzdCLHFCQUFxQjtFQUNyQiwrQkFBK0I7QUFDakM7O0FBa0JBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQVlBO0VBQ0Usb0JBQW9CO0VBQ3BCLHNCQUFzQjtBQUN4Qjs7QUFnQkE7RUFDRSxtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixXQUFXO0FBQ2I7O0FBRUE7b0RBQ29EOztBQUNwRDtFQUNFO0lBRUUsYUFBYTtJQUViLDhCQUE4QjtFQUNoQzs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLFdBQVc7RUFDYjtBQUNGOztBQU1BO0VBQ0UsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFHekIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0U7SUFDRSxpQkFBaUI7RUFDbkI7QUFDRiIsImZpbGUiOiJzaWduLWluLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLXNpZ25pbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDQyMHB4O1xuICBwYWRkaW5nOiAxNXB4O1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5mb3JtLWxhYmVsLWdyb3VwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuXG4uZm9ybS1sYWJlbC1ncm91cCBpbnB1dCxcbi5mb3JtLWxhYmVsLWdyb3VwIGxhYmVsIHtcbiAgaGVpZ2h0OiAzLjEyNXJlbTtcbiAgcGFkZGluZzogLjc1cmVtO1xufVxuXG4uZm9ybS1sYWJlbC1ncm91cCBsYWJlbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDA7IC8qIE92ZXJyaWRlIGRlZmF1bHQgYDxsYWJlbD5gIG1hcmdpbiAqL1xuICBsaW5lLWhlaWdodDogMS41O1xuICBjb2xvcjogIzQ5NTA1NztcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIGN1cnNvcjogdGV4dDsgLyogTWF0Y2ggdGhlIGlucHV0IHVuZGVyIHRoZSBsYWJlbCAqL1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogLjI1cmVtO1xuICB0cmFuc2l0aW9uOiBhbGwgLjFzIGVhc2UtaW4tb3V0O1xufVxuXG4uZm9ybS1sYWJlbC1ncm91cCBpbnB1dDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLmZvcm0tbGFiZWwtZ3JvdXAgaW5wdXQ6Oi1tb3otcGxhY2Vob2xkZXIge1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5mb3JtLWxhYmVsLWdyb3VwIGlucHV0Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLmZvcm0tbGFiZWwtZ3JvdXAgaW5wdXQ6Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLmZvcm0tbGFiZWwtZ3JvdXAgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uZm9ybS1sYWJlbC1ncm91cCBpbnB1dDpub3QoOi1tb3otcGxhY2Vob2xkZXItc2hvd24pIHtcbiAgcGFkZGluZy10b3A6IDEuMjVyZW07XG4gIHBhZGRpbmctYm90dG9tOiAuMjVyZW07XG59XG5cbi5mb3JtLWxhYmVsLWdyb3VwIGlucHV0Om5vdCg6LW1zLWlucHV0LXBsYWNlaG9sZGVyKSB7XG4gIHBhZGRpbmctdG9wOiAxLjI1cmVtO1xuICBwYWRkaW5nLWJvdHRvbTogLjI1cmVtO1xufVxuXG4uZm9ybS1sYWJlbC1ncm91cCBpbnB1dDpub3QoOnBsYWNlaG9sZGVyLXNob3duKSB7XG4gIHBhZGRpbmctdG9wOiAxLjI1cmVtO1xuICBwYWRkaW5nLWJvdHRvbTogLjI1cmVtO1xufVxuXG4uZm9ybS1sYWJlbC1ncm91cCBpbnB1dDpub3QoOi1tb3otcGxhY2Vob2xkZXItc2hvd24pIH4gbGFiZWwge1xuICBwYWRkaW5nLXRvcDogLjI1cmVtO1xuICBwYWRkaW5nLWJvdHRvbTogLjI1cmVtO1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjNzc3O1xufVxuXG4uZm9ybS1sYWJlbC1ncm91cCBpbnB1dDpub3QoOi1tcy1pbnB1dC1wbGFjZWhvbGRlcikgfiBsYWJlbCB7XG4gIHBhZGRpbmctdG9wOiAuMjVyZW07XG4gIHBhZGRpbmctYm90dG9tOiAuMjVyZW07XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICM3Nzc7XG59XG5cbi5mb3JtLWxhYmVsLWdyb3VwIGlucHV0Om5vdCg6cGxhY2Vob2xkZXItc2hvd24pIH4gbGFiZWwge1xuICBwYWRkaW5nLXRvcDogLjI1cmVtO1xuICBwYWRkaW5nLWJvdHRvbTogLjI1cmVtO1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjNzc3O1xufVxuXG4vKiBGYWxsYmFjayBmb3IgRWRnZVxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbkBzdXBwb3J0cyAoLW1zLWltZS1hbGlnbjogYXV0bykge1xuICAuZm9ybS1sYWJlbC1ncm91cCB7XG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcbiAgfVxuXG4gIC5mb3JtLWxhYmVsLWdyb3VwIGxhYmVsIHtcbiAgICBwb3NpdGlvbjogc3RhdGljO1xuICB9XG5cbiAgLmZvcm0tbGFiZWwtZ3JvdXAgaW5wdXQ6Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgY29sb3I6ICM3Nzc7XG4gIH1cbn1cblxuXG5cblxuXG4uYmQtcGxhY2Vob2xkZXItaW1nIHtcbiAgZm9udC1zaXplOiAxLjEyNXJlbTtcbiAgdGV4dC1hbmNob3I6IG1pZGRsZTtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5iZC1wbGFjZWhvbGRlci1pbWctbGcge1xuICAgIGZvbnQtc2l6ZTogMy41cmVtO1xuICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ "O6l2":
/*!**********************************************!*\
  !*** ./src/app/services/WebRTCConnection.ts ***!
  \**********************************************/
/*! exports provided: WebRTCConnection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebRTCConnection", function() { return WebRTCConnection; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class WebRTCConnection {
    constructor() {
        this.onSignalToSend = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.onSignalToSend$ = this.onSignalToSend.asObservable();
        this.onStream = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.onStream$ = this.onStream.asObservable();
        this.onConnect = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.onConnect$ = this.onConnect.asObservable();
        this.onData = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.onData$ = this.onData.asObservable();
        this.usersPeers = [];
        this.users = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](new Array());
        this.users$ = this.users.asObservable();
    }
    newUser(user) {
        this.users.next([...this.users.getValue(), user]);
    }
    disconnectedUser(user) {
        const filteredUsers = this.users.getValue().filter(x => x.connectionId === user.connectionId);
        this.users.next(filteredUsers);
    }
    createPeer(stream, roomId, initiator, target) {
        const peer = new SimplePeer({ initiator, stream, trickle: false });
        peer.on('signal', data => {
            const stringData = JSON.stringify(data);
            this.onSignalToSend.next({ id: roomId, data: stringData, target });
        });
        peer.on('stream', data => {
            console.log('on stream', data);
            this.onStream.next({ id: roomId, data, target });
        });
        peer.on('connect', () => {
            this.onConnect.next({ id: roomId, data: null, target });
        });
        peer.on('data', data => {
            this.onData.next({ id: roomId, data, target });
        });
        return peer;
    }
    signalPeer(userId, signal, stream) {
        const signalObject = JSON.parse(signal);
        let tmp = { user: '', peer: null };
        for (let i = 0; i < this.usersPeers.length; i++) {
            console.log(this.usersPeers[i].user);
            console.log(userId);
            console.log(this.usersPeers[i].user == userId);
            if (this.usersPeers[i].user == userId) {
                tmp = this.usersPeers[i];
            }
        }
        if (tmp.peer) {
            tmp.peer.signal(signalObject);
        }
        else {
            // todo roomid
            tmp.peer = this.createPeer(stream, '0', false, userId);
            tmp.peer.signal(signalObject);
        }
    }
    sendMessage(message) {
        this.currentPeer.send(message);
    }
    testCreateInstanceOfRTC() {
        const peer = new SimplePeer({ initiator: true });
    }
}
WebRTCConnection.ɵfac = function WebRTCConnection_Factory(t) { return new (t || WebRTCConnection)(); };
WebRTCConnection.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: WebRTCConnection, factory: WebRTCConnection.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "PSmK":
/*!************************************************************************************!*\
  !*** ./src/app/game-settings-modal-dialog/game-settings-modal-dialog.component.ts ***!
  \************************************************************************************/
/*! exports provided: GameSettingsModalDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameSettingsModalDialogComponent", function() { return GameSettingsModalDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");


const _c0 = [[["", 8, "app-modal-header"]], [["", 8, "app-modal-body"]], [["", 8, "app-modal-footer"]]];
const _c1 = function (a0) { return { "show": a0 }; };
const _c2 = function (a0, a1) { return { "display": a0, "opacity": a1 }; };
const _c3 = [".app-modal-header", ".app-modal-body", ".app-modal-footer"];
class GameSettingsModalDialogComponent {
    constructor() {
        this.visible = false;
        this.visibleAnimate = false;
    }
    show() {
        this.visible = true;
        setTimeout(() => this.visibleAnimate = true, 100);
    }
    hide() {
        this.visibleAnimate = false;
        setTimeout(() => this.visible = false, 300);
    }
    onContainerClicked(event) {
        if (event.target.classList.contains('modal')) {
            this.hide();
        }
    }
    ngOnInit() {
        if (this.visible) {
            this.show();
        }
    }
}
GameSettingsModalDialogComponent.ɵfac = function GameSettingsModalDialogComponent_Factory(t) { return new (t || GameSettingsModalDialogComponent)(); };
GameSettingsModalDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GameSettingsModalDialogComponent, selectors: [["app-game-settings-modal-dialog"]], inputs: { visible: "visible" }, ngContentSelectors: _c3, decls: 9, vars: 7, consts: [["tabindex", "-1", 1, "modal", "fade", 3, "ngClass", "ngStyle", "click"], [1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], [1, "modal-body"], [1, "modal-footer"]], template: function GameSettingsModalDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameSettingsModalDialogComponent_Template_div_click_0_listener($event) { return ctx.onContainerClicked($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](6, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](8, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, ctx.visibleAnimate))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](4, _c2, ctx.visible ? "block" : "none", ctx.visibleAnimate ? 1 : 0));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"]], styles: ["#modal-content-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: grid;\n  grid-template-rows: repeat(1fr, 3);\n}\n\n#modal-title[_ngcontent-%COMP%] {\n  font-size: 22px;\n}\n\n#modal-footer[_ngcontent-%COMP%] {\n  justify-self: right;\n  align-self: center;\n}\n\n#modal-action-button[_ngcontent-%COMP%] {\n  margin-right: 30px;\n  background-color:#3b3b3b;\n}\n\n#modal-cancel-button[_ngcontent-%COMP%] {\n  background-color: #4e4e4e;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbWUtc2V0dGluZ3MtbW9kYWwtZGlhbG9nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7RUFDYixrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0IiLCJmaWxlIjoiZ2FtZS1zZXR0aW5ncy1tb2RhbC1kaWFsb2cuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNtb2RhbC1jb250ZW50LXdyYXBwZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxZnIsIDMpO1xufVxuXG4jbW9kYWwtdGl0bGUge1xuICBmb250LXNpemU6IDIycHg7XG59XG5cbiNtb2RhbC1mb290ZXIge1xuICBqdXN0aWZ5LXNlbGY6IHJpZ2h0O1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG5cbiNtb2RhbC1hY3Rpb24tYnV0dG9uIHtcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiMzYjNiM2I7XG59XG5cbiNtb2RhbC1jYW5jZWwtYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRlNGU0ZTtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ "RGYR":
/*!******************************************!*\
  !*** ./src/app/games/Karkasson/field.ts ***!
  \******************************************/
/*! exports provided: Field */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Field", function() { return Field; });
class Field {
    constructor() {
        this.cards = [];
    }
    put_card(card, x, y) {
        for (let i = 0; i < this.cards.length; i++) {
            if (x == this.cards[i].x && this.cards[i].y == y) {
                return false;
            }
        }
        card.x = x;
        card.y = y;
        this.cards.push(card);
        return true;
    }
}


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _navigation_bar_navigation_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navigation-bar/navigation-bar.component */ "9k3z");
/* harmony import */ var _tool_bar_tool_bar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tool-bar/tool-bar.component */ "fwWq");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AppComponent {
    constructor() {
        this.title = 'Karkasson';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navigation-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-tool-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
    } }, directives: [_navigation_bar_navigation_bar_component__WEBPACK_IMPORTED_MODULE_1__["NavigationBarComponent"], _tool_bar_tool_bar_component__WEBPACK_IMPORTED_MODULE_2__["ToolBarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "UxUN":
/*!*********************************!*\
  !*** ./src/app/classes/user.ts ***!
  \*********************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
class User {
    constructor(userName, login, password) {
        this.name = userName;
        this.login = login;
        this.password = password;
    }
}


/***/ }),

/***/ "WfVc":
/*!****************************************************************************!*\
  !*** ./src/app/games-in-progress-page/games-in-progress-page.component.ts ***!
  \****************************************************************************/
/*! exports provided: GamesInProgressPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GamesInProgressPageComponent", function() { return GamesInProgressPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _services_crossPageInformation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/crossPageInformation */ "5Gks");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





const _c0 = function () { return ["/waitingRoom"]; };
function GamesInProgressPageComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "strong", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " \u0443\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u0438: 3/6 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const room_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u041F\u0440\u0438\u0441\u043E\u0435\u0434\u0435\u043D\u0438\u0442\u044C\u0441\u044F: ", room_r1.name, ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u041F\u0440\u0438\u0441\u043E\u0435\u0434\u0435\u043D\u0438\u0442\u044C\u0441\u044F", room_r1.ref, "");
} }
class GamesInProgressPageComponent {
    constructor(router, http, crossPageInformation) {
        this.router = router;
        this.http = http;
        this.crossPageInformation = crossPageInformation;
        this.rooms = [];
    }
    ngOnInit() {
        let id = '';
        if (this.crossPageInformation.chosedGame.id) {
            id = this.crossPageInformation.chosedGame.id.toString();
        }
        this.http.get('http://localhost:8080/app/activeSessions/' + id).subscribe((rooms) => {
            if (rooms == null) {
                alert('неверный');
            }
            else {
                this.rooms = rooms;
            }
        }, err => { alert('соединение с сервером потеряно'); });
    }
}
GamesInProgressPageComponent.ɵfac = function GamesInProgressPageComponent_Factory(t) { return new (t || GamesInProgressPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_crossPageInformation__WEBPACK_IMPORTED_MODULE_3__["CrossPageInformation"])); };
GamesInProgressPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GamesInProgressPageComponent, selectors: [["app-games-in-progress-page"]], decls: 9, vars: 1, consts: [["role", "main", 1, "container"], [1, "d-flex", "align-items-center", "p-3", "my-3", "text-white-50", "bg-purple", "rounded", "shadow-sm"], ["width", "48", "height", "48", "xmlns", "http://www.w3.org/2000/svg", 1, "bd-placeholder-img", "mr-2", "rounded"], ["width", "48", "height", "48", "fill", "#000000"], ["x", "0", "y", "0", "width", "48", "height", "48", 0, "xlink", "href", "assets/KarkassonTableGame.png"], [1, "lh-100"], [1, "mb-0", "text-white", "lh-100"], [4, "ngFor", "ngForOf"], [1, "my-3", "p-3", "bg-white", "rounded", "shadow-sm"], [1, "media", "text-muted", "pt-3"], [1, "col"], [1, "d-block", "text-gray-dark"], ["type", "submit", 1, "btn", "btn-outline-success", "my-2", "my-sm-0", 3, "routerLink"]], template: function GamesInProgressPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "svg", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "rect", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "image", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h6", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u0410\u043A\u0442\u0438\u0432\u043D\u044B\u0435 \u043A\u043E\u043C\u043D\u0430\u0442\u044B \u0438\u0433\u0440\u044B: Karkasson");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, GamesInProgressPageComponent_div_8_Template, 10, 4, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.rooms);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: [".bd-placeholder-img[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  text-anchor: middle;\n  -webkit-user-select: none;\n  user-select: none;\n}\n\n@media (min-width: 768px) {\n  .bd-placeholder-img-lg[_ngcontent-%COMP%] {\n    font-size: 3.5rem;\n  }\n}\n\n@media (max-width: 991.98px) {\n  .offcanvas-collapse[_ngcontent-%COMP%] {\n    position: fixed;\n    top: 56px; \n    bottom: 0;\n    left: 100%;\n    width: 100%;\n    padding-right: 1rem;\n    padding-left: 1rem;\n    overflow-y: auto;\n    visibility: hidden;\n    background-color: #343a40;\n    transition: transform .3s ease-in-out, visibility .3s ease-in-out;\n  }\n  .offcanvas-collapse.open[_ngcontent-%COMP%] {\n    visibility: visible;\n    transform: translateX(-100%);\n  }\n}\n\n.nav-scroller[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  height: 2.75rem;\n  overflow-y: hidden;\n}\n\n.nav-scroller[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: nowrap;\n  padding-bottom: 1rem;\n  margin-top: -1px;\n  overflow-x: auto;\n  color: rgba(255, 255, 255, .75);\n  text-align: center;\n  white-space: nowrap;\n  -webkit-overflow-scrolling: touch;\n}\n\n.nav-underline[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  padding-top: .75rem;\n  padding-bottom: .75rem;\n  font-size: .875rem;\n  color: #6c757d;\n}\n\n.nav-underline[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover {\n  color: #007bff;\n}\n\n.nav-underline[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #343a40;\n}\n\n.text-white-50[_ngcontent-%COMP%] { color: rgba(255, 255, 255, .5); }\n\n.bg-purple[_ngcontent-%COMP%] { background-color: #6f42c1; }\n\n.lh-100[_ngcontent-%COMP%] { line-height: 1; }\n\n.lh-125[_ngcontent-%COMP%] { line-height: 1.25; }\n\n.lh-150[_ngcontent-%COMP%] { line-height: 1.5; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbWVzLWluLXByb2dyZXNzLXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIseUJBQXlCO0VBR3pCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFO0lBQ0UsaUJBQWlCO0VBQ25CO0FBQ0Y7O0FBR0E7RUFDRTtJQUNFLGVBQWU7SUFDZixTQUFTLEVBQUUscUJBQXFCO0lBQ2hDLFNBQVM7SUFDVCxVQUFVO0lBQ1YsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFFekIsaUVBQWlFO0VBRW5FO0VBQ0E7SUFDRSxtQkFBbUI7SUFFbkIsNEJBQTRCO0VBQzlCO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUE7RUFFRSxhQUFhO0VBRWIsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLCtCQUErQjtFQUMvQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7O0FBRUEsaUJBQWlCLDhCQUE4QixFQUFFOztBQUVqRCxhQUFhLHlCQUF5QixFQUFFOztBQUV4QyxVQUFVLGNBQWMsRUFBRTs7QUFDMUIsVUFBVSxpQkFBaUIsRUFBRTs7QUFDN0IsVUFBVSxnQkFBZ0IsRUFBRSIsImZpbGUiOiJnYW1lcy1pbi1wcm9ncmVzcy1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmQtcGxhY2Vob2xkZXItaW1nIHtcbiAgZm9udC1zaXplOiAxLjEyNXJlbTtcbiAgdGV4dC1hbmNob3I6IG1pZGRsZTtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5iZC1wbGFjZWhvbGRlci1pbWctbGcge1xuICAgIGZvbnQtc2l6ZTogMy41cmVtO1xuICB9XG59XG5cblxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MS45OHB4KSB7XG4gIC5vZmZjYW52YXMtY29sbGFwc2Uge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDU2cHg7IC8qIEhlaWdodCBvZiBuYXZiYXIgKi9cbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQzYTQwO1xuICAgIHRyYW5zaXRpb246IHZpc2liaWxpdHkgLjNzIGVhc2UtaW4tb3V0LCAtd2Via2l0LXRyYW5zZm9ybSAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4zcyBlYXNlLWluLW91dCwgdmlzaWJpbGl0eSAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4zcyBlYXNlLWluLW91dCwgdmlzaWJpbGl0eSAuM3MgZWFzZS1pbi1vdXQsIC13ZWJraXQtdHJhbnNmb3JtIC4zcyBlYXNlLWluLW91dDtcbiAgfVxuICAub2ZmY2FudmFzLWNvbGxhcHNlLm9wZW4ge1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XG4gIH1cbn1cblxuLm5hdi1zY3JvbGxlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMjtcbiAgaGVpZ2h0OiAyLjc1cmVtO1xuICBvdmVyZmxvdy15OiBoaWRkZW47XG59XG5cbi5uYXYtc2Nyb2xsZXIgLm5hdiB7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtbXMtZmxleC13cmFwOiBub3dyYXA7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbiAgbWFyZ2luLXRvcDogLTFweDtcbiAgb3ZlcmZsb3cteDogYXV0bztcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjc1KTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XG59XG5cbi5uYXYtdW5kZXJsaW5lIC5uYXYtbGluayB7XG4gIHBhZGRpbmctdG9wOiAuNzVyZW07XG4gIHBhZGRpbmctYm90dG9tOiAuNzVyZW07XG4gIGZvbnQtc2l6ZTogLjg3NXJlbTtcbiAgY29sb3I6ICM2Yzc1N2Q7XG59XG5cbi5uYXYtdW5kZXJsaW5lIC5uYXYtbGluazpob3ZlciB7XG4gIGNvbG9yOiAjMDA3YmZmO1xufVxuXG4ubmF2LXVuZGVybGluZSAuYWN0aXZlIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICMzNDNhNDA7XG59XG5cbi50ZXh0LXdoaXRlLTUwIHsgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjUpOyB9XG5cbi5iZy1wdXJwbGUgeyBiYWNrZ3JvdW5kLWNvbG9yOiAjNmY0MmMxOyB9XG5cbi5saC0xMDAgeyBsaW5lLWhlaWdodDogMTsgfVxuLmxoLTEyNSB7IGxpbmUtaGVpZ2h0OiAxLjI1OyB9XG4ubGgtMTUwIHsgbGluZS1oZWlnaHQ6IDEuNTsgfVxuIl19 */"] });


/***/ }),

/***/ "X/Io":
/*!****************************************************!*\
  !*** ./src/app/game-field/game-field.component.ts ***!
  \****************************************************/
/*! exports provided: GameFieldComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameFieldComponent", function() { return GameFieldComponent; });
/* harmony import */ var _games_Karkasson_field__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../games/Karkasson/field */ "RGYR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


const _c0 = ["fieldCanvas"];
class GameFieldComponent {
    constructor() {
        this.cardWidth = 60;
        this.cardHeight = 60;
        this.borderAlignW = this.cardWidth / 2;
        this.borderAlignH = this.cardHeight / 2;
        this.screenWidth = window.screen.width;
        this.screenHeight = window.screen.height;
        this.field = new _games_Karkasson_field__WEBPACK_IMPORTED_MODULE_0__["Field"]();
        this.tmpCard = { svg: '  <style type="text/css">\n' +
                '    .base { stroke-width:2;  stroke:#000000; fill:#66cc00; }\n' +
                '  </style>\n' +
                '\n' +
                '  <defs>\n' +
                '    <rect   id="square"  x="-30" y="-30" width="60" height="60"/>\n' +
                '    <use    id="base"    xlink:href="#square" class="base"/>\n' +
                '  </defs>\n' +
                '\n' +
                '  <g transform="translate(30,30)">\n' +
                '    <use xlink:href="#base"/>\n' +
                '  </g>\n',
            rotation: 90 };
        this.cards = [
            { svg: '  <style type="text/css">\n' +
                    '    .base { stroke-width:2;  stroke:#000000; fill:#66cc00; }\n' +
                    '    .rive { stroke-width:10; stroke:#0000ff;               }\n' +
                    '  </style>\n' +
                    '\n' +
                    '  <defs>\n' +
                    '    <rect   id="square"  x="-30" y="-30" width="60" height="60"/>\n' +
                    '    <use    id="base"    xlink:href="#square" class="base"/>\n' +
                    '    <path id="rive_1"  d="M 1,5 A 5,5 0 1 0 0,5 V 30" class="rive"/>\n' +
                    '    <g id="tile_a">\n' +
                    '      <use xlink:href="#base"/>\n' +
                    '      <use xlink:href="#rive_1"/>\n' +
                    '    </g>\n' +
                    '  </defs>\n' +
                    '\n' +
                    '  <g transform="translate(30,30)">\n' +
                    '    <use xlink:href="#tile_a"/>\n' +
                    '  </g>\n',
                rotation: 90 },
            { svg: '  <style type="text/css">\n' +
                    '    .base { stroke-width:2;  stroke:#000000; fill:#66cc00; }\n' +
                    '  </style>\n' +
                    '\n' +
                    '  <defs>\n' +
                    '    <rect   id="square"  x="-30" y="-30" width="60" height="60"/>\n' +
                    '    <use    id="base"    xlink:href="#square" class="base"/>\n' +
                    '  </defs>\n' +
                    '\n' +
                    '  <g transform="translate(30,30)">\n' +
                    '    <use xlink:href="#base"/>\n' +
                    '  </g>\n',
                rotation: 0 },
            { svg: '  <style type="text/css">\n' +
                    '    .base { stroke-width:2;  stroke:#000000; fill:#66cc00; }\n' +
                    '    .rive { stroke-width:10; stroke:#0000ff;               }\n' +
                    '  </style>\n' +
                    '\n' +
                    '  <defs>\n' +
                    '    <rect   id="square"  x="-30" y="-30" width="60" height="60"/>\n' +
                    '    <use    id="base"    xlink:href="#square" class="base"/>\n' +
                    '    <path id="rive_1"  d="M 1,5 A 5,5 0 1 0 0,5 V 30" class="rive"/>\n' +
                    '    <g id="tile_a">\n' +
                    '      <use xlink:href="#base"/>\n' +
                    '      <use xlink:href="#rive_1"/>\n' +
                    '    </g>\n' +
                    '  </defs>\n' +
                    '\n' +
                    '  <g transform="translate(30,30)">\n' +
                    '    <use xlink:href="#tile_a"/>\n' +
                    '  </g>\n',
                rotation: 0 },
            { svg: '  <style type="text/css">\n' +
                    '    .base { stroke-width:2;  stroke:#000000; fill:#66cc00; }\n' +
                    '  </style>\n' +
                    '\n' +
                    '  <defs>\n' +
                    '    <rect   id="square"  x="-30" y="-30" width="60" height="60"/>\n' +
                    '    <use    id="base"    xlink:href="#square" class="base"/>\n' +
                    '  </defs>\n' +
                    '\n' +
                    '  <g transform="translate(30,30)">\n' +
                    '    <use xlink:href="#base"/>\n' +
                    '  </g>\n',
                rotation: 270 },
            { svg: '  <style type="text/css">\n' +
                    '    .base { stroke-width:2;  stroke:#000000; fill:#66cc00; }\n' +
                    '    .rive { stroke-width:10; stroke:#0000ff;               }\n' +
                    '  </style>\n' +
                    '\n' +
                    '  <defs>\n' +
                    '    <rect   id="square"  x="-30" y="-30" width="60" height="60"/>\n' +
                    '    <use    id="base"    xlink:href="#square" class="base"/>\n' +
                    '    <path id="rive_1"  d="M 1,5 A 5,5 0 1 0 0,5 V 30" class="rive"/>\n' +
                    '    <g id="tile_a">\n' +
                    '      <use xlink:href="#base"/>\n' +
                    '      <use xlink:href="#rive_1"/>\n' +
                    '    </g>\n' +
                    '  </defs>\n' +
                    '\n' +
                    '  <g transform="translate(30,30)">\n' +
                    '    <use xlink:href="#tile_a"/>\n' +
                    '  </g>\n',
                rotation: 270 },
            { svg: '  <style type="text/css">\n' +
                    '    .base { stroke-width:2;  stroke:#000000; fill:#66cc00; }\n' +
                    '  </style>\n' +
                    '\n' +
                    '  <defs>\n' +
                    '    <rect   id="square"  x="-30" y="-30" width="60" height="60"/>\n' +
                    '    <use    id="base"    xlink:href="#square" class="base"/>\n' +
                    '  </defs>\n' +
                    '\n' +
                    '  <g transform="translate(30,30)">\n' +
                    '    <use xlink:href="#base"/>\n' +
                    '  </g>\n',
                rotation: 0 },
        ];
    }
    ngOnInit() {
        setInterval(this.setupField, 10);
    }
    onClick(event) {
        const x = Math.floor(event.clientX / this.cardWidth);
        const y = Math.floor(event.clientY / this.cardHeight) - 1;
        if (this.tmpCard) {
            if (this.field.put_card(this.tmpCard, x, y)) {
                if (this.cards.length > 0) {
                    this.tmpCard = this.cards.pop();
                }
                else {
                    this.tmpCard = null;
                }
            }
        }
    }
    clickField(event) {
        if (event) {
            if (this.checkRotateClick(event)) {
                this.tmpCard.rotation += 90;
            }
            else {
                this.onClick(event);
            }
        }
        this.setupField();
    }
    setupField() {
        this.canvas.nativeElement.width = this.screenWidth;
        this.canvas.nativeElement.height = this.screenHeight;
        this.fieldCanvasContext = this.canvas.nativeElement.getContext('2d');
        // @ts-ignore
        this.fieldCanvasContext.fillStyle = '#b6ff66';
        // @ts-ignore
        this.fieldCanvasContext.fillRect(0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height);
        // @ts-ignore
        // this.fieldCanvasContext.fillStyle = '#66cd00';
        // const x = this.canvas.nativeElement.width / 2 - this.cardWidth / 2;
        // const y = this.canvas.nativeElement.height / 2 - this.cardHeight / 2;
        // const image = new Image();
        // image.src = 'assets/cards/baseCard.svg';
        // стартовая фишка
        // @ts-ignore
        // this.fieldCanvasContext.drawImage(image, x, y, this.cardWidth, this.cardHeight);
        // // @ts-ignore
        // this.fieldCanvasContext.fillStyle = '#e7e7e7';
        // // @ts-ignore
        // this.fieldCanvasContext.fillRect(x + this.cardWidth, y, this.cardWidth, this.cardHeight);
        // // @ts-ignore
        // this.fieldCanvasContext.fillRect(x - this.cardWidth, y, this.cardWidth, this.cardHeight);
        // // @ts-ignore
        // this.fieldCanvasContext.fillRect(x, y + this.cardHeight, this.cardWidth, this.cardHeight);
        // // @ts-ignore
        // this.fieldCanvasContext.fillRect(x, y - this.cardHeight, this.cardWidth, this.cardHeight);
        //
        //
        // // @ts-ignore
        // this.fieldCanvasContext.strokeStyle = '#ffffff';
        // // @ts-ignore
        // this.fieldCanvasContext.strokeRect(x + this.cardWidth, y, this.cardWidth, this.cardHeight);
        // // @ts-ignore
        // this.fieldCanvasContext.strokeRect(x - this.cardWidth, y, this.cardWidth, this.cardHeight);
        // // @ts-ignore
        // this.fieldCanvasContext.strokeRect(x, y + this.cardHeight, this.cardWidth, this.cardHeight);
        // // @ts-ignore
        // this.fieldCanvasContext.strokeRect(x, y - this.cardHeight, this.cardWidth, this.cardHeight);
        if (this.tmpCard) {
            const currentField = new Image();
            currentField.src = this.createImgSrc(this.tmpCard.svg, this.tmpCard.rotation);
            // @ts-ignore
            this.fieldCanvasContext.drawImage(currentField, this.canvas.nativeElement.width - this.cardWidth - this.borderAlignW, 10 + this.borderAlignH, this.cardWidth, this.cardHeight);
        }
        for (let i = 0; i < this.field.cards.length; i++) {
            const currentField = new Image();
            currentField.src = this.createImgSrc(this.field.cards[i].svg, this.field.cards[i].rotation);
            // @ts-ignore
            this.fieldCanvasContext.drawImage(currentField, this.field.cards[i].x * this.cardWidth, this.field.cards[i].y * this.cardHeight, this.cardWidth, this.cardHeight);
        }
        const man = new Image();
        man.src = 'assets/yellowMan.png';
        // @ts-ignore
        this.fieldCanvasContext.drawImage(man, this.canvas.nativeElement.width - this.cardWidth - this.borderAlignW, 10 + this.borderAlignH + this.cardHeight + this.borderAlignH, this.cardWidth / 2, this.cardHeight / 2);
        // @ts-ignore
        this.fieldCanvasContext.fillStyle = '#000000';
        // @ts-ignore
        this.fieldCanvasContext.fillText('5', this.canvas.nativeElement.width - this.cardWidth / 2 - this.borderAlignW, 10 + this.cardHeight + this.borderAlignH * 2);
        const row = new Image();
        row.src = 'assets/rotatingRow.svg';
        // @ts-ignore
        this.fieldCanvasContext.drawImage(row, this.canvas.nativeElement.width - this.cardWidth - this.borderAlignW - this.borderAlignW, 10, this.borderAlignW, this.borderAlignH);
    }
    createImgSrc(str, rotation) {
        return 'data:image/svg+xml;charset=utf-8,' +
            encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 60 60" xmlns:xlink="http://www.w3.org/1999/xlink">\n' +
                '<g transform="translate(-30, -30) rotate(' + rotation + ' 60 60) translate(30, 30)">\n' +
                str +
                '</g>' +
                '</svg>');
    }
    checkRotateClick(event) {
        return (this.canvas.nativeElement.width - this.cardWidth - this.borderAlignW - this.borderAlignW < event.clientX &&
            event.clientX < this.canvas.nativeElement.width - this.cardWidth - this.borderAlignW - this.borderAlignW + this.cardWidth / 2) ||
            (10 < event.clientY &&
                event.clientY < 10 + this.cardHeight / 2);
    }
}
GameFieldComponent.ɵfac = function GameFieldComponent_Factory(t) { return new (t || GameFieldComponent)(); };
GameFieldComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: GameFieldComponent, selectors: [["app-game-field"]], viewQuery: function GameFieldComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.canvas = _t.first);
    } }, decls: 4, vars: 1, consts: [["role", "main"], [2, "position", "static"], ["id", "fieldCanvas", 2, "width", "100%", "position", "static", 3, "id", "click"], ["fieldCanvas", ""]], template: function GameFieldComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "canvas", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GameFieldComponent_Template_canvas_click_2_listener($event) { return ctx.clickField($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", _r0);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnYW1lLWZpZWxkLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "Z70R":
/*!******************************************************************!*\
  !*** ./src/app/waiting-room-page/waiting-room-page.component.ts ***!
  \******************************************************************/
/*! exports provided: WaitingRoomPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WaitingRoomPageComponent", function() { return WaitingRoomPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _classes_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../classes/user */ "UxUN");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_WebRTCConnection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/WebRTCConnection */ "O6l2");
/* harmony import */ var _services_Signal_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/Signal.service */ "7Nfy");
/* harmony import */ var _services_crossPageInformation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/crossPageInformation */ "5Gks");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var ngx_clipboard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-clipboard */ "Dvla");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _game_settings_modal_dialog_game_settings_modal_dialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../game-settings-modal-dialog/game-settings-modal-dialog.component */ "PSmK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "ofXK");













const _c0 = ["videoPlayer"];
const _c1 = ["videoContainer"];
function WaitingRoomPageComponent_tbody_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "strong", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](user_r4.user);
} }
const _c2 = function () { return ["/game"]; };
class WaitingRoomPageComponent {
    constructor(rtcService, signalR, crossPageInformation, http, renderer, clipboardService, route) {
        this.rtcService = rtcService;
        this.signalR = signalR;
        this.crossPageInformation = crossPageInformation;
        this.http = http;
        this.renderer = renderer;
        this.clipboardService = clipboardService;
        this.route = route;
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
        this.login = '';
        this.password = '';
        this.doYouNeedToDeleteYourUserData = false;
    }
    onEasyStart() {
        this.http.post('http://localhost:8080/app/generate/user', { login: this.login }).subscribe((user) => {
            this.crossPageInformation.currentUser = user;
        }, err => { alert('соединение с сервером потеряно'); });
        this.saveUsername();
        this.doYouNeedToDeleteYourUserData = true;
    }
    ngOnInit() {
        if (!this.crossPageInformation.room) {
            this.route.params
                .subscribe((params) => {
                this.crossPageInformation.room = params.roomId;
            });
        }
        this.subscriptions.add(this.signalR.newPeer$.subscribe((user) => {
            console.log(user);
            this.rtcService.usersPeers = [];
            // tslint:disable-next-line:forin
            for (const userKey of user) {
                console.log(userKey);
                this.rtcService.usersPeers.push({ user: userKey, peer: null });
            }
            // this.rtcService.newUser(user);
            // this.signalR.sayHello(this.currentUser, user.connectionId);
        }));
        this.subscriptions.add(this.signalR.helloAnswer$.subscribe((user) => {
            this.rtcService.newUser(user);
        }));
        this.subscriptions.add(this.signalR.disconnectedPeer$.subscribe((user) => {
            this.rtcService.disconnectedUser(user);
        }));
        this.subscriptions.add(this.signalR.signal$.subscribe((signalData) => {
            this.rtcService.signalPeer(signalData.user, signalData.signal, this.stream);
        }));
        this.subscriptions.add(this.rtcService.onSignalToSend$.subscribe((data) => {
            let login = '';
            if (this.crossPageInformation.currentUser) {
                login = this.crossPageInformation.currentUser.login;
            }
            else {
                login = '';
            }
            this.signalR.sendSignalToRoom(data.id, { signal: data.data, user: login, target: data.target });
        }));
        this.subscriptions.add(this.rtcService.onData$.subscribe((data) => {
            // this.messages = [...this.messages, { own: false, message: data.data }];
            console.log(`Data from user ${data.id}: ${data.data}`);
        }));
        this.subscriptions.add(this.rtcService.onStream$.subscribe((data) => {
            const videoElement = this.renderer.createElement('video');
            videoElement.srcObject = data.data;
            videoElement.play();
            // videoElement.load();
            this.renderer.appendChild(this.videoContainer.nativeElement, videoElement);
            this.userVideo = data.id;
            // this.videoPlayer.nativeElement.srcObject = data.data;
            // this.videoPlayer.nativeElement.load();
            // this.videoPlayer.nativeElement.play();
        }));
        if (this.crossPageInformation.currentUser) {
            this.saveUsername();
        }
    }
    checkUser() {
        if (this.crossPageInformation.currentUser) {
            return false;
        }
        return true;
    }
    onVoiceChatStarted() {
        if (this.crossPageInformation.currentUser) {
            this.onEasyStart();
        }
        // todo roomId
        for (let i = 0; i < this.rtcService.usersPeers.length; i++) {
            // this.rtcService.currentPeer = this.rtcService.createPeer(this.stream, '0', true, this.users[i].user);
            this.rtcService.usersPeers[i].peer = this.rtcService.createPeer(this.stream, '0', true, this.rtcService.usersPeers[i].user);
        }
    }
    saveUsername() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield this.signalR.startConnection(this.crossPageInformation.currentUser.login, '0'); // todo
                this.stream = yield navigator.mediaDevices.getUserMedia({ video: false, audio: true });
            }
            catch (error) {
                console.error(`Can't join room, error ${error}`);
            }
        });
    }
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
        if (this.doYouNeedToDeleteYourUserData) {
            const user = new _classes_user__WEBPACK_IMPORTED_MODULE_2__["User"]('', this.crossPageInformation.currentUser.login, '');
            this.http.post('http://localhost:8080/app/user/delete', user);
            this.crossPageInformation.currentUser = null;
        }
    }
    trySignIn(userName, login, password) {
        const user = new _classes_user__WEBPACK_IMPORTED_MODULE_2__["User"](userName, login, password);
        this.http.post('http://localhost:8080/app/login/authentication', user).subscribe((e) => {
            if (e == null) {
                alert('ошибка входа');
            }
            else {
                this.crossPageInformation.currentUser = e;
            }
        }, err => {
            alert('соединение с сервером потеряно');
        });
    }
    copyLink() {
        this.clipboardService.copy('http://localhost:4200/waitingRoom/' + this.crossPageInformation.room);
    }
    signIn() {
        this.trySignIn('', this.login, this.password);
    }
}
WaitingRoomPageComponent.ɵfac = function WaitingRoomPageComponent_Factory(t) { return new (t || WaitingRoomPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_WebRTCConnection__WEBPACK_IMPORTED_MODULE_4__["WebRTCConnection"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_Signal_service__WEBPACK_IMPORTED_MODULE_5__["SignalrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_crossPageInformation__WEBPACK_IMPORTED_MODULE_6__["CrossPageInformation"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_clipboard__WEBPACK_IMPORTED_MODULE_8__["ClipboardService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"])); };
WaitingRoomPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: WaitingRoomPageComponent, selectors: [["app-waiting-room-page"]], viewQuery: function WaitingRoomPageComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c1, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.videoPlayer = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.videoContainer = _t.first);
    } }, decls: 49, vars: 6, consts: [[3, "visible"], ["modal", ""], [1, "app-modal-header"], [1, "app-modal-body"], [1, "form-label-group"], ["type", "email", "id", "inputEmail", "placeholder", "Email address", "name", "username", "required", "", "autofocus", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "inputEmail"], ["type", "password", "id", "inputPassword", "placeholder", "Password", "name", "password", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "inputPassword"], [1, "app-modal-footer"], ["type", "button", 1, "btn", "btn-default", 3, "click"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "container"], [1, "media", "text-muted", "pt-3"], [1, "col"], [1, "text-right"], ["type", "button", 1, "btn", "btn-primary"], [1, "my-4"], ["id", "containers", 1, "container"], [1, "container", "themed-container"], [1, "table", "table-striped", "table-sm"], [4, "ngFor", "ngForOf"], [1, "text-center"], ["type", "button", 1, "btn", "btn-primary", 3, "routerLink"], ["id", "videoContainer"], ["videoContainer", ""], ["id", "videoPlayer", "autoplay", ""], ["videoPlayer", ""], [1, "d-block", "text-gray-dark"]], template: function WaitingRoomPageComponent_Template(rf, ctx) { if (rf & 1) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "app-game-settings-modal-dialog", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " \u0412\u0445\u043E\u0434 \u0432 \u0438\u0433\u0440\u0443 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function WaitingRoomPageComponent_Template_input_ngModelChange_6_listener($event) { return ctx.login = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "\u041B\u043E\u0433\u0438\u043D");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function WaitingRoomPageComponent_Template_input_ngModelChange_10_listener($event) { return ctx.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "\u041F\u0430\u0440\u043E\u043B\u044C");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function WaitingRoomPageComponent_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](1); ctx.signIn(); return _r0.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function WaitingRoomPageComponent_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](1); _r0.hide(); return ctx.onEasyStart(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "\u041D\u0430\u0447\u0430\u0442\u044C \u0431\u0435\u0437 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Room title: Gamers");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](22, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function WaitingRoomPageComponent_Template_button_click_25_listener() { return ctx.copyLink(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "\u041A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043F\u0430\u0440\u043E\u043B\u044C");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "\u041A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0441\u0441\u044B\u043B\u043A\u0443-\u043F\u0440\u0438\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u0435");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](30, "hr", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](31, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "table", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](35, WaitingRoomPageComponent_tbody_35_Template, 5, 1, "tbody", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function WaitingRoomPageComponent_Template_button_click_38_listener() { return ctx.onVoiceChatStarted(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39, "\u041F\u0440\u0438\u0441\u043E\u0435\u0434\u0438\u043D\u0438\u0442\u044C\u0441\u044F \u043A \u0433\u043E\u043B\u043E\u0441\u043E\u0432\u043E\u043C\u0443 \u0447\u0430\u0442\u0443");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function WaitingRoomPageComponent_Template_button_click_40_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](1); return _r0.show(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](41, "\u0413\u043E\u0442\u043E\u0432");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](44, "\u041D\u0430\u0447\u0430\u0442\u044C \u0438\u0433\u0440\u0443");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](45, "div", 24, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](47, "video", 26, 27);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("visible", ctx.checkUser());
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.login);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.rtcService.usersPeers);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](5, _c2));
    } }, directives: [_game_settings_modal_dialog_game_settings_modal_dialog_component__WEBPACK_IMPORTED_MODULE_10__["GameSettingsModalDialogComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterLink"]], styles: [".bd-placeholder-img[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  text-anchor: middle;\n  -webkit-user-select: none;\n  user-select: none;\n}\n\n@media (min-width: 768px) {\n  .bd-placeholder-img-lg[_ngcontent-%COMP%] {\n    font-size: 3.5rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndhaXRpbmctcm9vbS1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUd6QixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRTtJQUNFLGlCQUFpQjtFQUNuQjtBQUNGIiwiZmlsZSI6IndhaXRpbmctcm9vbS1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmQtcGxhY2Vob2xkZXItaW1nIHtcbiAgZm9udC1zaXplOiAxLjEyNXJlbTtcbiAgdGV4dC1hbmNob3I6IG1pZGRsZTtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5iZC1wbGFjZWhvbGRlci1pbWctbGcge1xuICAgIGZvbnQtc2l6ZTogMy41cmVtO1xuICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login-page/login-page.component */ "pT+O");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main-page/main-page.component */ "0PS2");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _navigation_bar_navigation_bar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./navigation-bar/navigation-bar.component */ "9k3z");
/* harmony import */ var _tool_bar_tool_bar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./tool-bar/tool-bar.component */ "fwWq");
/* harmony import */ var _game_page_game_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./game-page/game-page.component */ "daKB");
/* harmony import */ var _game_field_game_field_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./game-field/game-field.component */ "X/Io");
/* harmony import */ var _history_page_history_page_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./history-page/history-page.component */ "GHRa");
/* harmony import */ var _games_in_progress_page_games_in_progress_page_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./games-in-progress-page/games-in-progress-page.component */ "WfVc");
/* harmony import */ var _game_settings_modal_dialog_game_settings_modal_dialog_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./game-settings-modal-dialog/game-settings-modal-dialog.component */ "PSmK");
/* harmony import */ var _sign_in_page_sign_in_page_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./sign-in-page/sign-in-page.component */ "Kbr6");
/* harmony import */ var _user_page_user_page_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./user-page/user-page.component */ "1HgR");
/* harmony import */ var _waiting_room_page_waiting_room_page_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./waiting-room-page/waiting-room-page.component */ "Z70R");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./services/login.service */ "EFyh");
/* harmony import */ var _services_crossPageInformation__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./services/crossPageInformation */ "5Gks");
/* harmony import */ var _stomp_ng2_stompjs__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @stomp/ng2-stompjs */ "MWWs");
/* harmony import */ var _services_config_myRxStompConfig__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./services/config/myRxStompConfig */ "bq5E");
/* harmony import */ var ngx_clipboard__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ngx-clipboard */ "Dvla");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/core */ "fXoL");




























class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdefineInjector"]({ providers: [_services_login_service__WEBPACK_IMPORTED_MODULE_22__["LoginService"],
        _services_crossPageInformation__WEBPACK_IMPORTED_MODULE_23__["CrossPageInformation"],
        {
            provide: _stomp_ng2_stompjs__WEBPACK_IMPORTED_MODULE_24__["InjectableRxStompConfig"],
            useValue: _services_config_myRxStompConfig__WEBPACK_IMPORTED_MODULE_25__["myRxStompConfig"],
        },
        {
            provide: _stomp_ng2_stompjs__WEBPACK_IMPORTED_MODULE_24__["RxStompService"],
            useFactory: _stomp_ng2_stompjs__WEBPACK_IMPORTED_MODULE_24__["rxStompServiceFactory"],
            deps: [_stomp_ng2_stompjs__WEBPACK_IMPORTED_MODULE_24__["InjectableRxStompConfig"]],
        },
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatSidenavModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_21__["HttpClientModule"],
            ngx_clipboard__WEBPACK_IMPORTED_MODULE_26__["ClipboardModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_3__["LoginPageComponent"],
        _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_6__["MainPageComponent"],
        _navigation_bar_navigation_bar_component__WEBPACK_IMPORTED_MODULE_11__["NavigationBarComponent"],
        _tool_bar_tool_bar_component__WEBPACK_IMPORTED_MODULE_12__["ToolBarComponent"],
        _game_page_game_page_component__WEBPACK_IMPORTED_MODULE_13__["GamePageComponent"],
        _game_field_game_field_component__WEBPACK_IMPORTED_MODULE_14__["GameFieldComponent"],
        _history_page_history_page_component__WEBPACK_IMPORTED_MODULE_15__["HistoryPageComponent"],
        _games_in_progress_page_games_in_progress_page_component__WEBPACK_IMPORTED_MODULE_16__["GamesInProgressPageComponent"],
        _game_settings_modal_dialog_game_settings_modal_dialog_component__WEBPACK_IMPORTED_MODULE_17__["GameSettingsModalDialogComponent"],
        _sign_in_page_sign_in_page_component__WEBPACK_IMPORTED_MODULE_18__["SignInPageComponent"],
        _user_page_user_page_component__WEBPACK_IMPORTED_MODULE_19__["UserPageComponent"],
        _waiting_room_page_waiting_room_page_component__WEBPACK_IMPORTED_MODULE_20__["WaitingRoomPageComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatSidenavModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_21__["HttpClientModule"],
        ngx_clipboard__WEBPACK_IMPORTED_MODULE_26__["ClipboardModule"]] }); })();


/***/ }),

/***/ "bq5E":
/*!****************************************************!*\
  !*** ./src/app/services/config/myRxStompConfig.ts ***!
  \****************************************************/
/*! exports provided: myRxStompConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "myRxStompConfig", function() { return myRxStompConfig; });
const myRxStompConfig = {
    // Which server?
    brokerURL: 'ws://localhost:8080/ws',
    // Headers
    // Typical keys: login, passcode, host
    connectHeaders: {
        login: 'guest',
        passcode: 'guest',
    },
    // How often to heartbeat?
    // Interval in milliseconds, set to 0 to disable
    heartbeatIncoming: 0,
    heartbeatOutgoing: 20000,
    // Wait in milliseconds before attempting auto reconnect
    // Set to 0 to disable
    // Typical value 500 (500 milli seconds)
    reconnectDelay: 200,
    // Will log diagnostics on console
    // It can be quite verbose, not recommended in production
    // Skip this key to stop logging to console
    debug: (msg) => {
        console.log(new Date(), msg);
    },
};


/***/ }),

/***/ "daKB":
/*!**************************************************!*\
  !*** ./src/app/game-page/game-page.component.ts ***!
  \**************************************************/
/*! exports provided: GamePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GamePageComponent", function() { return GamePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _services_crossPageInformation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/crossPageInformation */ "5Gks");
/* harmony import */ var _game_settings_modal_dialog_game_settings_modal_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../game-settings-modal-dialog/game-settings-modal-dialog.component */ "PSmK");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");







function GamePageComponent_span_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.game.title, " ");
} }
function GamePageComponent_ul_42_li_1_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0432\u044B\u0438\u0433\u0440\u0430\u043D\u0430");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GamePageComponent_ul_42_li_1_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u043F\u0440\u043E\u0438\u0433\u0440\u0430\u043D\u0430");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GamePageComponent_ul_42_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h6", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "small", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, GamePageComponent_ul_42_li_1_span_5_Template, 2, 0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, GamePageComponent_ul_42_li_1_span_6_Template, 2, 0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const game_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](game_r5.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", game_r5.sessionStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !game_r5.sessionStatus);
} }
function GamePageComponent_ul_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GamePageComponent_ul_42_li_1_Template, 7, 3, "li", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.playedGames);
} }
function GamePageComponent_span_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.game.rules, " ");
} }
const _c0 = function () { return ["/waitingRoom"]; };
class GamePageComponent {
    constructor(router, http, crossPageInformation) {
        this.router = router;
        this.http = http;
        this.crossPageInformation = crossPageInformation;
        this.users = [
            'user1',
            'user2',
            'user3',
        ];
        this.playedGames = [];
    }
    log(str) {
        console.log(str);
    }
    ngOnInit() {
        console.log(this.crossPageInformation.chosedGame);
        this.game = this.crossPageInformation.chosedGame;
        if (!this.game.rules) {
            this.http.post('http://localhost:8080/app/game', this.game).subscribe((game) => {
                if (game == null) {
                    alert('неверный пароль');
                }
                else {
                    this.game = game;
                }
            }, err => {
                alert('соединение с сервером потеряно');
            });
        }
        // this.playedGames.push(new PlayedGame('Gamers', 420, true),
        //   new PlayedGame('Gamers', 69, false));
        this.http.get('http://localhost:8080/app/sessions/' + this.crossPageInformation.currentUser.login).subscribe((game) => {
            if (game == null) {
            }
            else {
                this.playedGames = game;
            }
        }, err => { alert('соединение с сервером потеряно'); });
    }
}
GamePageComponent.ɵfac = function GamePageComponent_Factory(t) { return new (t || GamePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_crossPageInformation__WEBPACK_IMPORTED_MODULE_3__["CrossPageInformation"])); };
GamePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GamePageComponent, selectors: [["app-game-page"]], decls: 46, vars: 7, consts: [[3, "visible"], ["modal", ""], [1, "app-modal-header"], [1, "app-modal-body"], [1, "row-cols-1"], ["for", "gamePath"], ["type", "text", "id", "gamePath", "placeholder", "", "readonly", "", "required", "", 1, "form-control", 3, "value"], ["for", "gameName"], ["type", "text", "id", "gameName", "placeholder", "", "value", "", "required", "", 1, "form-control"], [1, "row"], [1, "col"], ["for", "isPassUsed", 1, "form-check-label"], ["type", "checkbox", "id", "isPassUsed", 1, "form-check"], ["type", "text", "id", "gamePassword", "placeholder", "\u043F\u0430\u0440\u043E\u043B\u044C", "value", "", "required", "", 1, "form-control"], [1, "app-modal-footer"], ["type", "button", 1, "btn", "btn-default", 3, "click"], ["type", "button", 1, "btn", "btn-primary"], ["type", "button", 1, "btn", "btn-primary", 3, "routerLink"], [1, "bg-light"], [1, "container"], [1, "py-5", "text-center"], [4, "ngIf"], [1, "col-md-4", "order-md-2", "mb-4"], [1, "card", "p-2"], [1, "input-group"], ["type", "submit", 1, "btn", "btn-primary", "btn-lg", "btn-block", 3, "click"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-3"], [1, "text-muted"], [1, "badge", "badge-secondary", "badge-pill"], ["class", "list-group mb-3", 4, "ngIf"], [1, "col-md-8", "order-md-1"], [1, "text-sm-left"], [1, "list-group", "mb-3"], ["class", "list-group-item d-flex justify-content-between lh-condensed", 4, "ngFor", "ngForOf"], [1, "list-group-item", "d-flex", "justify-content-between", "lh-condensed"], [1, "my-0"]], template: function GamePageComponent_Template(rf, ctx) { if (rf & 1) {
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-game-settings-modal-dialog", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " \u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430 \u0438\u0433\u0440\u044B ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u043A\u043E\u043C\u043D\u0430\u0442\u0443");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u0418\u043C\u044F \u043A\u043E\u043C\u043D\u0430\u0442\u044B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u043F\u0430\u0440\u043E\u043B\u044C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GamePageComponent_Template_button_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); return _r0.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\u0417\u0430\u043A\u0440\u044B\u0442\u044C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\u043E\u0431\u0449\u0438\u0439 \u0434\u043E\u0441\u0442\u0443\u043F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\u043D\u0430\u0447\u0430\u0442\u044C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "body", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, GamePageComponent_span_30_Template, 2, 1, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "form", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GamePageComponent_Template_button_click_35_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); return _r0.show(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "\u041D\u0430\u0447\u0430\u0442\u044C \u0438\u0433\u0440\u0443");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h4", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Your Games");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, GamePageComponent_ul_42_Template, 2, 1, "ul", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, GamePageComponent_span_45_Template, 2, 1, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("visible", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("value", "http://localhost:4200/waitingRoom/", ctx.crossPageInformation.room, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.game);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.crossPageInformation.currentUser);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.game && ctx.game.rules);
    } }, directives: [_game_settings_modal_dialog_game_settings_modal_dialog_component__WEBPACK_IMPORTED_MODULE_4__["GameSettingsModalDialogComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], styles: [".userList[_ngcontent-%COMP%]{\n  overflow: scroll; max-height: 300px\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbWUtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCLEVBQUU7QUFDcEIiLCJmaWxlIjoiZ2FtZS1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXNlckxpc3R7XG4gIG92ZXJmbG93OiBzY3JvbGw7IG1heC1oZWlnaHQ6IDMwMHB4XG59XG4iXX0= */"] });


/***/ }),

/***/ "fwWq":
/*!************************************************!*\
  !*** ./src/app/tool-bar/tool-bar.component.ts ***!
  \************************************************/
/*! exports provided: ToolBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolBarComponent", function() { return ToolBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_crossPageInformation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/crossPageInformation */ "5Gks");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





const _c0 = function () { return ["/history"]; };
function ToolBarComponent_li_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u0418\u0441\u0442\u043E\u0440\u0438\u044F");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
} }
const _c1 = function () { return ["/signin"]; };
function ToolBarComponent_li_10_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToolBarComponent_li_10_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.data.currentUser = null; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u0412\u044B\u0445\u043E\u0434");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c1));
} }
function ToolBarComponent_li_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u0412\u0445\u043E\u0434");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c1));
} }
const _c2 = function () { return ["/main"]; };
const _c3 = function () { return ["/gamesInProgress"]; };
class ToolBarComponent {
    constructor(data) {
        this.data = data;
    }
    ngOnInit() {
    }
}
ToolBarComponent.ɵfac = function ToolBarComponent_Factory(t) { return new (t || ToolBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_crossPageInformation__WEBPACK_IMPORTED_MODULE_1__["CrossPageInformation"])); };
ToolBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ToolBarComponent, selectors: [["app-tool-bar"]], decls: 12, vars: 7, consts: [[1, "nav-item"], [3, "routerLink"], ["class", "nav-item ", 4, "ngIf"], [3, "routerLink", "click"]], template: function ToolBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u0411\u0438\u0431\u043B\u0438\u043E\u0442\u0435\u043A\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ToolBarComponent_li_5_Template, 4, 2, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u0418\u0434\u0443\u0449\u0438\u0435 \u0438\u0433\u0440\u044B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ToolBarComponent_li_10_Template, 4, 2, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ToolBarComponent_li_11_Template, 4, 2, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.currentUser);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.currentUser);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.data.currentUser);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbar"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: ["li[_ngcontent-%COMP%] {\n  margin-left: 1%;\n  margin-right: 1%;\n  list-style-type: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvb2wtYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtBQUN2QiIsImZpbGUiOiJ0b29sLWJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibGkge1xuICBtYXJnaW4tbGVmdDogMSU7XG4gIG1hcmdpbi1yaWdodDogMSU7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ "pT+O":
/*!****************************************************!*\
  !*** ./src/app/login-page/login-page.component.ts ***!
  \****************************************************/
/*! exports provided: LoginPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageComponent", function() { return LoginPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_crossPageInformation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/crossPageInformation */ "5Gks");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");





class LoginPageComponent {
    constructor(router, crossPageInformation, http) {
        this.router = router;
        this.crossPageInformation = crossPageInformation;
        this.http = http;
        this.login = '';
        this.password = '';
        this.userName = '';
        this.repeatePassword = '';
    }
    ngOnInit() {
    }
    onSignInButton() {
        this.trySignIn(this.userName, this.login, this.password);
        console.log(this.login);
        console.log(this.password);
    }
    trySignIn(userName, login, password) {
        if (this.password != this.repeatePassword) {
            alert('неправильно повторен пароль');
        }
        else {
            const user = { name: userName, login: login, password: password };
            let result = false;
            this.http.post('http://localhost:8080/app/register', user).subscribe((e) => {
                if (e == null) {
                    alert('ошибка регистрации');
                }
                else {
                    this.crossPageInformation.currentUser = e;
                    this.http.get('http://localhost:8080/app/games').subscribe((games) => {
                        if (games == null) {
                            alert('неверный пароль');
                        }
                        else {
                            this.crossPageInformation.games = games;
                        }
                    }, err => { alert('соединение с сервером потеряно'); });
                    this.router.navigate(['/main']);
                }
            }, err => {
                alert('соединение с сервером потеряно');
                result = false;
            });
        }
    }
}
LoginPageComponent.ɵfac = function LoginPageComponent_Factory(t) { return new (t || LoginPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_crossPageInformation__WEBPACK_IMPORTED_MODULE_2__["CrossPageInformation"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
LoginPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginPageComponent, selectors: [["app-login-page"]], decls: 25, vars: 4, consts: [[1, "form-signin"], [1, "text-center", "mb-4"], [1, "h3", "mb-3", "font-weight-normal"], [1, "form-label-group"], ["type", "email", "id", "inputEmail", "placeholder", "Email address", "name", "username", "required", "", "autofocus", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "inputEmail"], ["type", "password", "id", "inputPassword", "placeholder", "Password", "name", "password", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "inputPassword"], ["type", "password", "id", "inputPassword2", "placeholder", "Password", "name", "repeatePassword", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "id", "userName", "placeholder", "Password", "name", "userName", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "userName"], ["type", "submit", 1, "btn", "btn-lg", "btn-primary", "btn-block", 3, "click"], [1, "mt-5", "mb-3", "text-muted", "text-center"]], template: function LoginPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginPageComponent_Template_input_ngModelChange_6_listener($event) { return ctx.login = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u041B\u043E\u0433\u0438\u043D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginPageComponent_Template_input_ngModelChange_10_listener($event) { return ctx.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u041F\u0430\u0440\u043E\u043B\u044C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginPageComponent_Template_input_ngModelChange_14_listener($event) { return ctx.repeatePassword = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginPageComponent_Template_input_ngModelChange_18_listener($event) { return ctx.userName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\u0418\u043C\u044F \u0432 \u0441\u0438\u0441\u0442\u0435\u043C\u0435");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginPageComponent_Template_button_click_21_listener() { return ctx.onSignInButton(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\u0412\u043E\u0439\u0442\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\u00A9 2017-2021");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.login);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.repeatePassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userName);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]], styles: [".form-signin[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 420px;\n  padding: 15px;\n  margin: auto;\n}\n\n.form-label-group[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 1rem;\n}\n\n.form-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .form-label-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  height: 3.125rem;\n  padding: .75rem;\n}\n\n.form-label-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: block;\n  width: 100%;\n  margin-bottom: 0; \n  line-height: 1.5;\n  color: #495057;\n  pointer-events: none;\n  cursor: text; \n  border: 1px solid transparent;\n  border-radius: .25rem;\n  transition: all .1s ease-in-out;\n}\n\n.form-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: transparent;\n}\n\n.form-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not(:placeholder-shown) {\n  padding-top: 1.25rem;\n  padding-bottom: .25rem;\n}\n\n.form-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not(:placeholder-shown)    ~ label[_ngcontent-%COMP%] {\n  padding-top: .25rem;\n  padding-bottom: .25rem;\n  font-size: 12px;\n  color: #777;\n}\n\n\n\n@supports (-ms-ime-align: auto) {\n  .form-label-group[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column-reverse;\n  }\n\n  .form-label-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    position: static;\n  }\n\n  .form-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-ms-input-placeholder {\n    color: #777;\n  }\n}\n\n.bd-placeholder-img[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  text-anchor: middle;\n  -webkit-user-select: none;\n  user-select: none;\n}\n\n@media (min-width: 768px) {\n  .bd-placeholder-img-lg[_ngcontent-%COMP%] {\n    font-size: 3.5rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFFQTs7RUFFRSxnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLGNBQWM7RUFDZCxXQUFXO0VBQ1gsZ0JBQWdCLEVBQUUsc0NBQXNDO0VBQ3hELGdCQUFnQjtFQUNoQixjQUFjO0VBQ2Qsb0JBQW9CO0VBQ3BCLFlBQVksRUFBRSxvQ0FBb0M7RUFDbEQsNkJBQTZCO0VBQzdCLHFCQUFxQjtFQUNyQiwrQkFBK0I7QUFDakM7O0FBa0JBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQVlBO0VBQ0Usb0JBQW9CO0VBQ3BCLHNCQUFzQjtBQUN4Qjs7QUFnQkE7RUFDRSxtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixXQUFXO0FBQ2I7O0FBRUE7b0RBQ29EOztBQUNwRDtFQUNFO0lBRUUsYUFBYTtJQUViLDhCQUE4QjtFQUNoQzs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLFdBQVc7RUFDYjtBQUNGOztBQU1BO0VBQ0UsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFHekIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0U7SUFDRSxpQkFBaUI7RUFDbkI7QUFDRiIsImZpbGUiOiJsb2dpbi1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuLmZvcm0tc2lnbmluIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogNDIwcHg7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLmZvcm0tbGFiZWwtZ3JvdXAge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbi5mb3JtLWxhYmVsLWdyb3VwIGlucHV0LFxuLmZvcm0tbGFiZWwtZ3JvdXAgbGFiZWwge1xuICBoZWlnaHQ6IDMuMTI1cmVtO1xuICBwYWRkaW5nOiAuNzVyZW07XG59XG5cbi5mb3JtLWxhYmVsLWdyb3VwIGxhYmVsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMDsgLyogT3ZlcnJpZGUgZGVmYXVsdCBgPGxhYmVsPmAgbWFyZ2luICovXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGNvbG9yOiAjNDk1MDU3O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgY3Vyc29yOiB0ZXh0OyAvKiBNYXRjaCB0aGUgaW5wdXQgdW5kZXIgdGhlIGxhYmVsICovXG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiAuMjVyZW07XG4gIHRyYW5zaXRpb246IGFsbCAuMXMgZWFzZS1pbi1vdXQ7XG59XG5cbi5mb3JtLWxhYmVsLWdyb3VwIGlucHV0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uZm9ybS1sYWJlbC1ncm91cCBpbnB1dDo6LW1vei1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLmZvcm0tbGFiZWwtZ3JvdXAgaW5wdXQ6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uZm9ybS1sYWJlbC1ncm91cCBpbnB1dDo6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uZm9ybS1sYWJlbC1ncm91cCBpbnB1dDo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5mb3JtLWxhYmVsLWdyb3VwIGlucHV0Om5vdCg6LW1vei1wbGFjZWhvbGRlci1zaG93bikge1xuICBwYWRkaW5nLXRvcDogMS4yNXJlbTtcbiAgcGFkZGluZy1ib3R0b206IC4yNXJlbTtcbn1cblxuLmZvcm0tbGFiZWwtZ3JvdXAgaW5wdXQ6bm90KDotbXMtaW5wdXQtcGxhY2Vob2xkZXIpIHtcbiAgcGFkZGluZy10b3A6IDEuMjVyZW07XG4gIHBhZGRpbmctYm90dG9tOiAuMjVyZW07XG59XG5cbi5mb3JtLWxhYmVsLWdyb3VwIGlucHV0Om5vdCg6cGxhY2Vob2xkZXItc2hvd24pIHtcbiAgcGFkZGluZy10b3A6IDEuMjVyZW07XG4gIHBhZGRpbmctYm90dG9tOiAuMjVyZW07XG59XG5cbi5mb3JtLWxhYmVsLWdyb3VwIGlucHV0Om5vdCg6LW1vei1wbGFjZWhvbGRlci1zaG93bikgfiBsYWJlbCB7XG4gIHBhZGRpbmctdG9wOiAuMjVyZW07XG4gIHBhZGRpbmctYm90dG9tOiAuMjVyZW07XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICM3Nzc7XG59XG5cbi5mb3JtLWxhYmVsLWdyb3VwIGlucHV0Om5vdCg6LW1zLWlucHV0LXBsYWNlaG9sZGVyKSB+IGxhYmVsIHtcbiAgcGFkZGluZy10b3A6IC4yNXJlbTtcbiAgcGFkZGluZy1ib3R0b206IC4yNXJlbTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzc3Nztcbn1cblxuLmZvcm0tbGFiZWwtZ3JvdXAgaW5wdXQ6bm90KDpwbGFjZWhvbGRlci1zaG93bikgfiBsYWJlbCB7XG4gIHBhZGRpbmctdG9wOiAuMjVyZW07XG4gIHBhZGRpbmctYm90dG9tOiAuMjVyZW07XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICM3Nzc7XG59XG5cbi8qIEZhbGxiYWNrIGZvciBFZGdlXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuQHN1cHBvcnRzICgtbXMtaW1lLWFsaWduOiBhdXRvKSB7XG4gIC5mb3JtLWxhYmVsLWdyb3VwIHtcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xuICB9XG5cbiAgLmZvcm0tbGFiZWwtZ3JvdXAgbGFiZWwge1xuICAgIHBvc2l0aW9uOiBzdGF0aWM7XG4gIH1cblxuICAuZm9ybS1sYWJlbC1ncm91cCBpbnB1dDo6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogIzc3NztcbiAgfVxufVxuXG5cblxuXG5cbi5iZC1wbGFjZWhvbGRlci1pbWcge1xuICBmb250LXNpemU6IDEuMTI1cmVtO1xuICB0ZXh0LWFuY2hvcjogbWlkZGxlO1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLmJkLXBsYWNlaG9sZGVyLWltZy1sZyB7XG4gICAgZm9udC1zaXplOiAzLjVyZW07XG4gIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login-page/login-page.component */ "pT+O");
/* harmony import */ var _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main-page/main-page.component */ "0PS2");
/* harmony import */ var _game_page_game_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./game-page/game-page.component */ "daKB");
/* harmony import */ var _games_in_progress_page_games_in_progress_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./games-in-progress-page/games-in-progress-page.component */ "WfVc");
/* harmony import */ var _history_page_history_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./history-page/history-page.component */ "GHRa");
/* harmony import */ var _game_field_game_field_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./game-field/game-field.component */ "X/Io");
/* harmony import */ var _waiting_room_page_waiting_room_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./waiting-room-page/waiting-room-page.component */ "Z70R");
/* harmony import */ var _sign_in_page_sign_in_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sign-in-page/sign-in-page.component */ "Kbr6");
/* harmony import */ var _user_page_user_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user-page/user-page.component */ "1HgR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "fXoL");












const routes = [
    { path: 'login', component: _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_1__["LoginPageComponent"] },
    { path: 'main', component: _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_2__["MainPageComponent"] },
    { path: 'gamePage', component: _game_page_game_page_component__WEBPACK_IMPORTED_MODULE_3__["GamePageComponent"] },
    { path: 'gamesInProgress', component: _games_in_progress_page_games_in_progress_page_component__WEBPACK_IMPORTED_MODULE_4__["GamesInProgressPageComponent"] },
    { path: 'history', component: _history_page_history_page_component__WEBPACK_IMPORTED_MODULE_5__["HistoryPageComponent"] },
    { path: 'game', component: _game_field_game_field_component__WEBPACK_IMPORTED_MODULE_6__["GameFieldComponent"] },
    { path: 'waitingRoom', component: _waiting_room_page_waiting_room_page_component__WEBPACK_IMPORTED_MODULE_7__["WaitingRoomPageComponent"] },
    { path: 'waitingRoom/:roomId', component: _waiting_room_page_waiting_room_page_component__WEBPACK_IMPORTED_MODULE_7__["WaitingRoomPageComponent"] },
    { path: 'signin', component: _sign_in_page_sign_in_page_component__WEBPACK_IMPORTED_MODULE_8__["SignInPageComponent"] },
    { path: 'myPage', component: _user_page_user_page_component__WEBPACK_IMPORTED_MODULE_9__["UserPageComponent"] },
    { path: '**', redirectTo: '/login', pathMatch: 'full' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map