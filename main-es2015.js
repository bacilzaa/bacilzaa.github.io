(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/account/account.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/account.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container jumbotron \" style=\"margin-top: 1%\">\n<div class=\"form-group\">\n    <div class=\"form-group form-inline\">\n    <b style=\"margin-right: 1%\">เลือกบัญชี </b>\n    <select #selectacc class=\"form-control\" [ngModel]=\"selectAccount\" (ngModelChange)=\"select($event)\">\n        <option *ngFor='let account of acarr;' [value]=\"account.id\">{{account.account}}</option>\n    </select>\n</div>\n<input type=\"text\" placeholder=\"ชื่อบัญชี\" [(ngModel)]=\"addaccount\" (change)=\"add(addaccount)\" class=\"form-control\" required #addControl=\"ngModel\">\n<button (click)=\"add()\" class=\"btn btn-success\" style=\"margin-top: 1%\" [disabled]=\"addControl.errors\">เพิ่มบัญชี</button>\n</div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<nav class=\"navbar navbar-expand-md bg-dark navbar-dark\">\n    <a class=\"navbar-brand\" href=\"#\"></a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapsibleNavbar\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"collapsibleNavbar\">\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item \" routerLinkActive=\"active\">\n            <a  class=\"nav-link\" routerLink=\"/account\">บัญชี</a>\n        </li>\n        <li class=\"nav-item \" routerLinkActive=\"active\">\n            <a class=\"nav-link\" routerLink=\"/run\">เพิ่มรายรับ-รายจ่าย</a>\n        </li>\n        <li class=\"nav-item\" routerLinkActive=\"active\">\n            <a class=\"nav-link\" routerLink=\"/display\">แสดงข้อมูล</a>\n        </li>    \n      </ul>\n    </div>  \n  </nav>\n\n\n<!--<nav>\n  <a routerLink=\"/account\">Account</a>\n  <a routerLink=\"/run\">RunProgram</a>\n</nav>-->\n\n<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/display/display.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/display/display.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container jumbotron \" style=\"margin-top: 1%\">\n    <div class=\"form-group form-inline\">\n        <b style=\"margin-right: 1%\">เลือกบัญชี </b>\n        <select #selectacc class=\"form-control\" [ngModel]=\"selectAccount\" (ngModelChange)=\"select($event)\">\n            <option *ngFor='let account of acarr;' [value]=\"account.id\">{{account.account}}</option>\n        </select>\n    </div>\n    <div>\n        <div *ngFor = 'let m of money'>\n        <table class=\"table table-striped \">\n        \n                <tr style=\"background-color: green;color: honeydew;margin-bottom: 0;\"  >\n                    <th style=\"text-align: left;\" class=\"hide\">รายรับ</th>\n                    <td style=\"text-align:right ;\"class=\"show\" data-label=\"รายรับ\">{{m.receive|currency:'฿'}}</td>\n                </tr>\n         \n        </table>\n\n        <table class=\"table table-striped \">\n           \n                <tr style=\"background-color: red;color: honeydew;margin-bottom: 0;\">\n                    <th style=\"text-align: left;\" class=\"hide\">รายจ่าย</th>\n                    <td style=\"text-align:right ;\" class=\"show\" data-label=\"รายจ่าย\">{{m.spend|currency:'฿'}}</td>\n                </tr>\n        </table>\n\n        <table class=\"table table-striped \">\n\n                <tr style=\"background-color:steelblue;color: honeydew;\">\n                    <th style=\"text-align: left;\" class=\"hide\">คงเหลือ</th>\n                    <td style=\"text-align:right ;\" class=\"show\" data-label=\"คงเหลือ\">{{m.remain|currency:'฿'}}</td>\n                </tr>\n        </table>\n        </div>\n        <table class=\"table table-striped \">\n            <thead class=\"thead-dark\">\n                <tr>\n                    <th style=\"width: 20px;\">ประเภท</th>\n                    <th style=\"width: 1500px;\">รายละเอียด</th>\n                    <th style=\"width: 200px;\">จำนวนเงิน</th>\n                    <th style=\"width: 300px;\">สร้างวันที่</th>\n                    <th style=\"width: 200px;\">อัพเดทวันที่</th>\n                    <th style=\"width: 200px;\">ตั้งค่า</th>\n                </tr>\n            </thead>\n            <tr *ngFor='let db of data let i = index;'>\n\n                <td id=\"toggle{{i}}\" data-label=\"ประเภท\" [ngClass]=\"check(i)\" (click)=\"clickEvent(i)\">\n                    {{db.type == \"spend\"?\"รายจ่าย\":\"รายรับ\"}}</td>\n                <td id=\"toggle{{i}}\" class=\"show\" data-label=\"รายละเอียด\" (click)=\"clickEvent(i)\">{{db.detail}}</td>\n                <td id=\"toggle{{i}}\" data-label=\"จำนวนเงิน\" [ngClass]=\"check(i)\" (click)=\"clickEvent(i)\">\n                    {{db.price}}</td>\n                <td id=\"toggle{{i}}\" data-label=\"สร้างวันที่\" [ngClass]=\"check(i)\" (click)=\"clickEvent(i)\">\n                    {{db.created |date: 'dd-MM-yyyy'}}</td>\n                <td id=\"toggle{{i}}\" data-label=\"อัพเดทวันที่\" [ngClass]=\"check(i)\" (click)=\"clickEvent(i)\">\n                    {{db.update  |date: 'dd-MM-yyyy'}}</td>\n                <td id=\"toggle{{i}}\" data-label=\"ตั้งต่า\" [ngClass]=\"check(i)\">\n                    <button (click)=\"edit(db.id)\"><i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i></button>\n                    <button (click)=\"delete(db.id,i,db.type,db.price)\"><i class=\"fa fa-times\" aria-hidden=\"true\"></i></button>\n                \n                </td>    \n            </tr>\n        </table>\n    </div>\n\n\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/run/run.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/run/run.component.html ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container jumbotron\" style=\"margin-top: 1%;\">\n<div class=\"form-group\">\n    <div class=\"form-group form-inline\">\n        <b style=\"margin-right: 1%\">เลือกบัญชี </b>\n        <select #selectacc class=\"form-control\" [ngModel]=\"selectAccount\"  (ngModelChange)=\"select($event)\">\n            <option *ngFor='let account of accountlist;' [value]=\"account.id\">{{account.account}}</option>\n        </select>\n    </div>\n    <div class=\"form-group form-check-inline\">\n    <input type=\"radio\" name=\"type\" value=\"receive\" class=\"form-check-input\" [(ngModel)]=\"type\" required #typeControl=\"ngModel\">\n    <label class=\"form-check-label\">รายรับ</label>\n    </div>\n    <div class=\"form-check form-check-inline\"> \n        <input  type=\"radio\" name=\"type\" value=\"spend\" class=\"form-check-input\" [(ngModel)]=\"type\">\n        <label class=\"form-check-label\">รายจ่าย</label>\n    </div>\n    <div class=\"form-group\">\n        <input type=\"text\" placeholder=\"รายละเอียด\" class=\"form-control\" [(ngModel)]=\"detail\">\n    </div>\n    <div class=\"form-group\">\n        <input type=\"number\" placeholder=\"จำนวนเงิน\" class=\"form-control\" [(ngModel)]=\"monValue\">\n    </div>\n    <div>\n        <input [disabled]=\"typeControl.errors\" type=\"submit\" value=\"บันทึก\" class=\"btn btn-success\" (click)=\"save()\">\n    </div>\n</div>\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/account/account.component.scss":
/*!************************************************!*\
  !*** ./src/app/account/account.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvYWNjb3VudC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/account/account.component.ts":
/*!**********************************************!*\
  !*** ./src/app/account/account.component.ts ***!
  \**********************************************/
/*! exports provided: AccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountComponent", function() { return AccountComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./account.service */ "./src/app/account/account.service.ts");
/* harmony import */ var _display_display_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../display/display.service */ "./src/app/display/display.service.ts");




let AccountComponent = class AccountComponent {
    constructor(accountService, detect, displayService) {
        this.accountService = accountService;
        this.detect = detect;
        this.displayService = displayService;
        this.addaccount = "";
        this.selectAccount = this.accountService.select;
        this.acarr = this.accountService.accountarr;
    }
    ngOnInit() {
        this.accountService.getAccount().then(data => {
            //console.log(data['account'])
            this.accountService.select = data['id'];
            this.selectAccount = data['id'];
            this.select(this.selectAccount);
        });
    }
    add(e) {
        if (this.addaccount != "" && !(this.accountService.accountarr.some(data => data.account == e)) && e != undefined) {
            this.accountService.saveAccount(e)
                .then((data) => {
                this.accountService.accountarr.unshift({ id: data['id'], account: data['account'] });
                this.accountService.select = data['id'];
                this.selectAccount = this.accountService.select;
                console.log(data);
                console.log(this.accountService.accountarr);
            });
            this.selectAccount = this.accountService.select;
        }
    }
    select(e) {
        this.accountService.select = e;
        this.displayService.getDataAccount(e).then(() => {
            this.displayService.data = [];
            this.displayService.money = [];
            console.log(this.displayService.data);
        });
    }
};
AccountComponent.ctorParameters = () => [
    { type: _account_service__WEBPACK_IMPORTED_MODULE_2__["AccountService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _display_display_service__WEBPACK_IMPORTED_MODULE_3__["DisplayService"] }
];
AccountComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-account',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./account.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/account/account.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./account.component.scss */ "./src/app/account/account.component.scss")).default]
    })
], AccountComponent);



/***/ }),

/***/ "./src/app/account/account.service.ts":
/*!********************************************!*\
  !*** ./src/app/account/account.service.ts ***!
  \********************************************/
/*! exports provided: AccountService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountService", function() { return AccountService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_url__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.url */ "./src/app/app.url.ts");




let AccountService = class AccountService {
    constructor(http) {
        this.http = http;
        this.accountarr = [];
    }
    saveAccount(e) {
        return (this.http.post(`${_app_url__WEBPACK_IMPORTED_MODULE_3__["AppUrl"].BackEndUrl}/account`, { account: e }).toPromise());
    }
    getAccount() {
        return new Promise((resolve, reject) => {
            (this.http.get(`${_app_url__WEBPACK_IMPORTED_MODULE_3__["AppUrl"].BackEndUrl}/account`).toPromise())
                .then(data => {
                //console.log(this.accountarr[0])
                if (this.accountarr[0] != undefined) { }
                else {
                    for (let i = 0; i < Object.keys(data).length; i++) {
                        this.accountarr.push({ id: data[i]['id'], account: data[i]['account'] });
                    }
                    //console.log(this.accountarr[0])
                    resolve(this.accountarr[0]);
                }
            });
        });
    }
};
AccountService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AccountService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AccountService);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'proj';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _account_account_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./account/account.component */ "./src/app/account/account.component.ts");
/* harmony import */ var _run_run_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./run/run.component */ "./src/app/run/run.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _account_account_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./account/account.service */ "./src/app/account/account.service.ts");
/* harmony import */ var _display_display_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./display/display.component */ "./src/app/display/display.component.ts");
/* harmony import */ var _run_run_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./run/run.service */ "./src/app/run/run.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _display_display_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./display/display.service */ "./src/app/display/display.service.ts");













const appRoutes = [
    { path: 'account', component: _account_account_component__WEBPACK_IMPORTED_MODULE_5__["AccountComponent"] },
    { path: 'run', component: _run_run_component__WEBPACK_IMPORTED_MODULE_6__["RunComponent"] },
    { path: 'display', component: _display_display_component__WEBPACK_IMPORTED_MODULE_9__["DisplayComponent"] },
    { path: "**", redirectTo: 'run' }
];
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
            _account_account_component__WEBPACK_IMPORTED_MODULE_5__["AccountComponent"],
            _run_run_component__WEBPACK_IMPORTED_MODULE_6__["RunComponent"],
            _display_display_component__WEBPACK_IMPORTED_MODULE_9__["DisplayComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(appRoutes),
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"]
        ],
        providers: [
            _account_account_service__WEBPACK_IMPORTED_MODULE_8__["AccountService"],
            _run_run_service__WEBPACK_IMPORTED_MODULE_10__["RunService"],
            _display_display_service__WEBPACK_IMPORTED_MODULE_12__["DisplayService"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/app.url.ts":
/*!****************************!*\
  !*** ./src/app/app.url.ts ***!
  \****************************/
/*! exports provided: AppUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppUrl", function() { return AppUrl; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const AppUrl = {
    BackEndUrl: "https://tranquil-springs-85970.herokuapp.com"
};


/***/ }),

/***/ "./src/app/display/display.component.scss":
/*!************************************************!*\
  !*** ./src/app/display/display.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body {\n  font-family: \"Open Sans\", sans-serif;\n}\n\ntable {\n  border: 1px solid #ccc;\n  border-collapse: collapse;\n  margin: 0;\n  padding: 0;\n  width: 100%;\n}\n\ntable tr {\n  border: 1px solid #ddd;\n  padding: 5px;\n}\n\ntable th, table td {\n  padding: 10px;\n  text-align: center;\n}\n\ntable th {\n  font-size: 14px;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n}\n\n@media screen and (max-width: 600px) {\n  table {\n    border: 0;\n  }\n\n  table thead {\n    display: none;\n  }\n\n  table tr {\n    border-bottom: 2px solid #ddd;\n    display: block;\n    margin-bottom: 10px;\n  }\n\n  table td {\n    border-bottom: 1px dotted #ccc;\n    font-size: 13px;\n    text-align: right;\n  }\n\n  table td:last-child {\n    border-bottom: 0;\n  }\n\n  table td:before {\n    content: attr(data-label);\n    float: left;\n    font-weight: bold;\n    text-transform: uppercase;\n  }\n\n  #hide {\n    border-bottom: 1px dotted #ccc;\n    display: block;\n    font-size: 13px;\n    text-align: right;\n  }\n\n  .hide {\n    display: none;\n  }\n\n  .show {\n    display: block;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlzcGxheS9DOlxcVXNlcnNcXFNvdXJjZXNcXERlc2t0b3BcXG5ldyB0ZXN0XFxwcm9qL3NyY1xcYXBwXFxkaXNwbGF5XFxkaXNwbGF5LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9kaXNwbGF5L2Rpc3BsYXkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQ0FBQTtBQ0NKOztBRENFO0VBQ0Usc0JBQUE7RUFDQSx5QkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQ0VKOztBREFFO0VBQ0Usc0JBQUE7RUFDQSxZQUFBO0FDR0o7O0FEREU7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7QUNJSjs7QURGRTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FDS0o7O0FESEU7RUFDRTtJQUNFLFNBQUE7RUNNSjs7RURKRTtJQUNFLGFBQUE7RUNPSjs7RURMRTtJQUNFLDZCQUFBO0lBQ0EsY0FBQTtJQUNBLG1CQUFBO0VDUUo7O0VETkU7SUFDRSw4QkFBQTtJQUNBLGVBQUE7SUFDQSxpQkFBQTtFQ1NKOztFRFBFO0lBQ0UsZ0JBQUE7RUNVSjs7RURSRTtJQUNFLHlCQUFBO0lBQ0EsV0FBQTtJQUNBLGlCQUFBO0lBQ0EseUJBQUE7RUNXSjs7RURURTtJQUNJLDhCQUFBO0lBQ0EsY0FBQTtJQUNBLGVBQUE7SUFDQSxpQkFBQTtFQ1lOOztFRFZFO0lBQ0ksYUFBQTtFQ2FOOztFRFhFO0lBQ0ksY0FBQTtFQ2NOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9kaXNwbGF5L2Rpc3BsYXkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xyXG4gIH1cclxuICB0YWJsZSB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICAgIG1hcmdpbjowO1xyXG4gICAgcGFkZGluZzowO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIHRhYmxlIHRyIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgfVxyXG4gIHRhYmxlIHRoLCB0YWJsZSB0ZCB7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICB0YWJsZSB0aCB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICB9XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgIHRhYmxlIHtcclxuICAgICAgYm9yZGVyOiAwO1xyXG4gICAgfVxyXG4gICAgdGFibGUgdGhlYWQge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gICAgdGFibGUgdHIge1xyXG4gICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2RkZDtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICB9XHJcbiAgICB0YWJsZSB0ZCB7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQgI2NjYztcclxuICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIH1cclxuICAgIHRhYmxlIHRkOmxhc3QtY2hpbGQge1xyXG4gICAgICBib3JkZXItYm90dG9tOiAwO1xyXG4gICAgfVxyXG4gICAgdGFibGUgdGQ6YmVmb3JlIHtcclxuICAgICAgY29udGVudDogYXR0cihkYXRhLWxhYmVsKTtcclxuICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgfVxyXG4gICAgI2hpZGV7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZCAjY2NjO1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIH1cclxuICAgIC5oaWRle1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAuc2hvd3tcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuXHJcbiAgfSIsImJvZHkge1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbn1cblxudGFibGUge1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG50YWJsZSB0ciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gIHBhZGRpbmc6IDVweDtcbn1cblxudGFibGUgdGgsIHRhYmxlIHRkIHtcbiAgcGFkZGluZzogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG50YWJsZSB0aCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgdGFibGUge1xuICAgIGJvcmRlcjogMDtcbiAgfVxuXG4gIHRhYmxlIHRoZWFkIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgdGFibGUgdHIge1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZGRkO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIH1cblxuICB0YWJsZSB0ZCB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZCAjY2NjO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgfVxuXG4gIHRhYmxlIHRkOmxhc3QtY2hpbGQge1xuICAgIGJvcmRlci1ib3R0b206IDA7XG4gIH1cblxuICB0YWJsZSB0ZDpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IGF0dHIoZGF0YS1sYWJlbCk7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgfVxuXG4gICNoaWRlIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkICNjY2M7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICB9XG5cbiAgLmhpZGUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAuc2hvdyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/display/display.component.ts":
/*!**********************************************!*\
  !*** ./src/app/display/display.component.ts ***!
  \**********************************************/
/*! exports provided: DisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayComponent", function() { return DisplayComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _run_run_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../run/run.service */ "./src/app/run/run.service.ts");
/* harmony import */ var _account_account_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../account/account.service */ "./src/app/account/account.service.ts");
/* harmony import */ var _display_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./display.service */ "./src/app/display/display.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let DisplayComponent = class DisplayComponent {
    constructor(runService, accountService, displayService, router) {
        this.runService = runService;
        this.accountService = accountService;
        this.displayService = displayService;
        this.router = router;
        this.selectAccount = this.accountService.select;
        this.acarr = this.accountService.accountarr;
        this.data = [];
        this.money = this.displayService.money;
        this.toggle = "toggle";
        this.status = false;
    }
    ngOnInit() {
        this.accountService.getAccount().then(data => {
            console.log(data);
            this.accountService.select = data['id'];
            this.selectAccount = data['id'];
            this.selectAccount = this.accountService.select;
            this.select(this.selectAccount);
        });
        this.data = this.displayService.data;
        this.money = this.displayService.money;
    }
    select(e) {
        this.accountService.select = e;
        this.selectAccount = this.accountService.select;
        this.displayService.getDataAccount(this.selectAccount).then(() => {
            this.displayService.data = [];
            this.data = this.displayService.data;
            this.displayService.money = [];
            this.money = this.displayService.money;
            //console.log(this.money)
        });
    }
    clickEvent(i) {
        if ("toggle" + i == this.toggle) {
            this.status = !this.status;
            console.log(i);
        }
        else {
            this.status = true;
        }
        this.toggle = "toggle" + i;
    }
    check(i) {
        if ("toggle" + i == this.toggle) {
            if (this.status)
                return "show";
            else
                return "hide";
        }
        else {
            return "hide";
        }
    }
    delete(id, index, type, price) {
        if (type == "receive") {
            console.log(type);
            console.log(this.money);
            this.money[0]['receive'] -= price;
            this.money[0]['remain'] -= price;
        }
        if (type == "spend") {
            console.log(type);
            console.log(this.money);
            this.money[0]['spend'] -= price;
            this.money[0]['remain'] += price;
        }
        console.log(this.data.splice(index, 1));
        this.displayService.DelectDataAccount(id);
    }
    edit(id) {
        this.router.navigate(['/run'], { queryParams: { id: id } });
    }
};
DisplayComponent.ctorParameters = () => [
    { type: _run_run_service__WEBPACK_IMPORTED_MODULE_2__["RunService"] },
    { type: _account_account_service__WEBPACK_IMPORTED_MODULE_3__["AccountService"] },
    { type: _display_service__WEBPACK_IMPORTED_MODULE_4__["DisplayService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
DisplayComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-display',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./display.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/display/display.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./display.component.scss */ "./src/app/display/display.component.scss")).default]
    })
], DisplayComponent);



/***/ }),

/***/ "./src/app/display/display.service.ts":
/*!********************************************!*\
  !*** ./src/app/display/display.service.ts ***!
  \********************************************/
/*! exports provided: DisplayService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayService", function() { return DisplayService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_url__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.url */ "./src/app/app.url.ts");




let DisplayService = class DisplayService {
    constructor(http) {
        this.http = http;
        /*data = [{id:5,account_id:4,type:"recieve",price:150,detail:"โค๊ก"}
        ,{id:5,account_id:4,type:"recieve",price:150,detail:"โค๊ก",created:new Date,update:new Date},
        {id:5,account_id:4,type:"recieve",price:150,detail:"โค๊ก"}]*/
        this.data = [];
        this.money = [];
    }
    getDataAccount(e) {
        return new Promise((resolve, reject) => {
            (this.http.post(`${_app_url__WEBPACK_IMPORTED_MODULE_3__["AppUrl"].BackEndUrl}/data`, { account_id: e }).toPromise())
                .then((get) => {
                console.log(get);
                if (this.data[0] != undefined && this.money[0] != undefined) {
                }
                else {
                    if (get["money"]['spend'] == null) {
                        get["money"]['spend'] = 0;
                    }
                    if (get["money"]['receive'] == null) {
                        get["money"]['receive'] = 0;
                    }
                    this.money.push(get['money']);
                    //console.log(this.money)
                    for (let i = 0; i < Object.keys(get['account']).length; i++) {
                        this.data.push({ id: get['account'][i]['id'], account_id: get['account'][i]['account_id'], type: get['account'][i]['type'], price: get['account'][i]["price"], detail: get['account'][i]["detail"], created: get['account'][i]['created'], update: get['account'][i]["updated"] });
                    }
                    console.log(this.money);
                }
            });
            resolve();
        });
    }
    DelectDataAccount(id) {
        (this.http.post(`${_app_url__WEBPACK_IMPORTED_MODULE_3__["AppUrl"].BackEndUrl}/delete`, { id: id }).toPromise())
            .then((data) => {
            alert(data['Message']);
        });
    }
};
DisplayService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
DisplayService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], DisplayService);



/***/ }),

/***/ "./src/app/run/run.component.scss":
/*!****************************************!*\
  !*** ./src/app/run/run.component.scss ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3J1bi9ydW4uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/run/run.component.ts":
/*!**************************************!*\
  !*** ./src/app/run/run.component.ts ***!
  \**************************************/
/*! exports provided: RunComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RunComponent", function() { return RunComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _account_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../account/account.service */ "./src/app/account/account.service.ts");
/* harmony import */ var _run_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./run.service */ "./src/app/run/run.service.ts");
/* harmony import */ var _display_display_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../display/display.service */ "./src/app/display/display.service.ts");





let RunComponent = class RunComponent {
    constructor(account, run, displayService) {
        this.account = account;
        this.run = run;
        this.displayService = displayService;
        this.accountlist = [];
        this.selectAccount = this.account.select;
        this.type = null;
        this.data = [];
        this.mockData = [];
    }
    ngOnInit() {
        this.accountlist = this.account.accountarr;
        this.account.getAccount().then(data => {
            //console.log(data)
            this.account.select = data['id'];
            this.selectAccount = data['id'];
            this.displayService.getDataAccount(this.selectAccount).then(() => {
            });
        });
        var url = window.location.search;
        var id = url.split("=", 2);
        this.id = id[1];
        if (this.id != undefined) {
            console.log(this.id);
            //this.data.push(this.displayService.data.find(data=>data['id']))
            this.displayService.data.find((data) => {
                if (data.id == this.id) {
                    this.type = data.type;
                    this.detail = data.detail;
                    this.monValue = data.price;
                }
            });
            //this.type =
        }
    }
    select(e) {
        this.account.select = e;
        this.displayService.getDataAccount(e).then(() => {
            this.displayService.data = [];
            this.displayService.money = [];
            console.log(this.displayService.data);
        });
    }
    save() {
        console.log(this.selectAccount);
        this.run.testsave(this.selectAccount, this.type, this.detail, this.monValue, this.id);
    }
};
RunComponent.ctorParameters = () => [
    { type: _account_account_service__WEBPACK_IMPORTED_MODULE_2__["AccountService"] },
    { type: _run_service__WEBPACK_IMPORTED_MODULE_3__["RunService"] },
    { type: _display_display_service__WEBPACK_IMPORTED_MODULE_4__["DisplayService"] }
];
RunComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-run',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./run.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/run/run.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./run.component.scss */ "./src/app/run/run.component.scss")).default]
    })
], RunComponent);



/***/ }),

/***/ "./src/app/run/run.service.ts":
/*!************************************!*\
  !*** ./src/app/run/run.service.ts ***!
  \************************************/
/*! exports provided: RunService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RunService", function() { return RunService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _account_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../account/account.service */ "./src/app/account/account.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _display_display_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../display/display.service */ "./src/app/display/display.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_url__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../app.url */ "./src/app/app.url.ts");







let RunService = class RunService {
    constructor(accountService, http, displayService, router) {
        this.accountService = accountService;
        this.http = http;
        this.displayService = displayService;
        this.router = router;
    }
    ngOnInit() {
    }
    testsave(a, t, d, p, id) {
        (this.http.post(`${_app_url__WEBPACK_IMPORTED_MODULE_6__["AppUrl"].BackEndUrl}/run`, ({ account: a, type: t, detail: d, price: p, id: id })).toPromise())
            .then(() => {
            this.displayService.getDataAccount(a).then(() => {
                this.displayService.data = [];
                this.displayService.money = [];
                console.log(this.displayService.data);
                this.router.navigate(['/display']);
            });
        });
    }
};
RunService.ctorParameters = () => [
    { type: _account_account_service__WEBPACK_IMPORTED_MODULE_2__["AccountService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _display_display_service__WEBPACK_IMPORTED_MODULE_4__["DisplayService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
RunService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], RunService);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Sources\Desktop\new test\proj\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);