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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"content-body\">\r\n  <section class=\"about\">\r\n    <h1>About</h1>\r\n    <p>Hello I'am Randika Rodrigo, I am 19 years old and a 3rd Year Software Engineering undergraduate at the university of westminster.\r\n      I am a Full Stack developer and a data science enthusiastic.<br/><br/>\r\n      In a nutshell I'm a Self-motivated enthusiastic undergraduate with excellent organizing and time management skills. Self and Fast learner with\r\n      Keen interest in the subject and highly passionate to become a skilled software engineer.\r\n      Proficient in mathematics and problem solving and eager to face challenging technical problems.<br/><br/>\r\n      I'm keen to find an internship in a challenging company to enhance the scope of my knowledge and to get familiar with the industry.\r\n      Through my internship I hope to get the necessary exposure needed to complete my Bachelor's degree and start my career.\r\n    </p>\r\n  </section>\r\n  <section class=\"myInterests\">\r\n    <h1>Interests</h1>\r\n    <div style=\"text-align: center\" *ngFor=\"let interest of interests\">\r\n      <h5><b>{{interest}}</b></h5>\r\n    </div>\r\n  </section>\r\n\r\n  <section class=\"mySkills\">\r\n    <h1>Skills</h1>\r\n    <div class=\"skillSection\">\r\n      <h5>Programming Languages</h5>\r\n      <ul *ngFor=\"let skills of programmingArray\">\r\n        <li>{{ skills.name}}\r\n        <div class=\"container\">\r\n          <div class=\"skills\" [ngStyle]=\"{'width':skills.confidence}\">{{skills.confidence}}</div>\r\n        </div>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n\r\n    <div class=\"skillSection\">\r\n      <h5>Web Design</h5>\r\n      <ul *ngFor=\"let skills of webDevopArray\" >\r\n        <li>{{ skills.name}}\r\n        <div class=\"container\">\r\n          <div class=\"skills\" [ngStyle]=\"{'width':skills.confidence}\">{{skills.confidence}}</div>\r\n        </div>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n    <div class=\"skillSection\">\r\n      <h5>Other technical skills</h5>\r\n      <ul *ngFor=\"let skills of otherSkills\">\r\n        <li>{{ skills.name}}\r\n        <div class=\"container\">\r\n          <div class=\"skills\" [ngStyle]=\"{'width':skills.confidence}\">{{skills.confidence}}</div>\r\n        </div>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </section>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"page\">\r\n  <div class=\"profile\">\r\n    <app-profile></app-profile>\r\n  </div>\r\n  <div class=\"navi\">\r\n    <div class=\"topnav\" id=\"myTopnav\">\r\n      <a href=\"#home\" (click)=\"selectedComponent(0)\" class=\"active\"><i class=\"fa fa-home\" style=\"margin-right: 5px\"></i>Home</a>\r\n      <a href=\"#Education\" (click)=\"selectedComponent(1)\"><i class=\"fa fa-graduation-cap\" style=\"margin-right: 5px\"></i>Education</a>\r\n      <a href=\"#Experience\" (click)=\"selectedComponent(2)\"><i class=\"fa fa-briefcase\" style=\"margin-right: 5px\"></i>Experience</a>\r\n      <a href=\"#Contact\" (click)=\"selectedComponent(3)\"><i class=\"fa fa-user\" style=\"margin-right: 5px\"></i>Contact</a>\r\n      <a href=\"javascript:void(0);\" class=\"icon\" (click)=\"myFunction()\">\r\n        <i class=\"fa fa-bars\"></i>\r\n      </a>\r\n    </div>\r\n    <script>\r\n\r\n    </script>\r\n  </div>\r\n  <div class=\"content\">\r\n    <app-about *ngIf=\"loadComponent==0\"></app-about>\r\n    <app-education *ngIf=\"loadComponent==1\"></app-education>\r\n    <app-experience *ngIf=\"loadComponent==2\"></app-experience>\r\n    <app-contact *ngIf=\"loadComponent==3\"></app-contact>\r\n  </div>\r\n  <div id=\"footer\">\r\n    <app-footer ></app-footer>\r\n  </div>\r\n\r\n\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section id=\"contact\">\r\n    <h1>Contact Details</h1>\r\n    <table>\r\n      <tbody>\r\n      <tr>\r\n        <th>Mobile phone</th>\r\n        <td>+94 76 9921810</td>\r\n      </tr>\r\n      <tr>\r\n        <th>Land phone</th>\r\n        <td>+94 31 2274330</td>\r\n      </tr>\r\n      <tr>\r\n        <th>Email (Primary)</th>\r\n        <td>randika.2018073@iit.ac.lk</td>\r\n      </tr>\r\n      <tr>\r\n        <th>Email (Secondary)</th>\r\n        <td>josephrandika@gmail.com</td>\r\n      </tr>\r\n      <tr>\r\n        <th>Address</th>\r\n        <td>265/B Daluwakotuwa,<br/> Kochchikade, <br/>Sri Lanka.</td>\r\n      </tr>\r\n      </tbody>\r\n    </table>\r\n  <h1>Contact Map</h1>\r\n  <iframe\r\n    src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7052.256505246931!2d79.85200537824971!3d7.247133813131444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2ee9745b7bcc9%3A0x77928ef40b077489!2sNegombo!5e0!3m2!1sen!2slk!4v1590319312949!5m2!1sen!2slk\"\r\n    width=\"100%\" height=\"450\" frameborder=\"0\" style=\"border:0;\"\r\n    allowfullscreen=\"\" aria-hidden=\"false\" tabindex=\"0\">\r\n  </iframe>\r\n</section>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/education/education.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/education/education.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"myEducation\">\r\n  <div class=\"timeline\">\r\n    <div class=\"container left\">\r\n      <div class=\"content contentAlign\">\r\n        <h5>BEng Software Engineering</h5>\r\n        <h6 ><a href=\"https://www.westminster.ac.uk/\" target=\"_blank\" class=\"place\">University of Westminster</a></h6>\r\n        <p class=\"date ongoing\"><span class=\"fa fa-calendar\" style=\"margin-right: 10px\"></span>09/2018 -present</p>\r\n        <button (click)=\"viewResults(2)\" class=\"resultsbtn\">{{toggleResults[2]}}</button>\r\n        <div style=\"width: 100% ; transition: 5s\" *ngIf=\"toView[2]\" >\r\n          <p><b>Second Year Results</b></p>\r\n          <table class=\"table table-striped\" style=\"text-align: left\">\r\n            <tbody>\r\n            <tr *ngFor=\"let sub of uniSecondYear\">\r\n              <td>{{sub.subject}}</td>\r\n              <td class=\"ongoing\">{{sub.marks}}</td>\r\n            </tr>\r\n            </tbody>\r\n          </table>\r\n\r\n          <p><b>First Year Results</b></p>\r\n          <table class=\"table table-striped\" style=\"text-align: left\">\r\n            <tbody>\r\n            <tr *ngFor=\"let sub of uniFirstYear\">\r\n              <td>{{sub.subject}}</td>\r\n              <td style=\"color: blue; font-weight: bold;\">{{sub.marks}}</td>\r\n            </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"container right\">\r\n      <div class=\"content\">\r\n        <h5>Certified Information Security Expert (CISE)</h5>\r\n        <h6><a href=\"http://www.netassist.com.lk/\" target=\"_blank\" class=\"place\">NetAssists Sri-Lanka</a></h6>\r\n        <p class=\"date ongoing\"><span class=\"fa fa-calendar\" style=\"margin-right: 10px\"></span>07/2018 - present</p>\r\n      </div>\r\n    </div>\r\n    <div class=\"container left\">\r\n      <div class=\"content contentAlign\">\r\n        <h5>Advance Level</h5>\r\n        <h6><a href=\"http://snic.lk/wp/\" target=\"_blank\" class=\"place\">St.Nicholas International College Negombo</a></h6>\r\n        <p class=\"date\"><span class=\"fa fa-calendar\" style=\"margin-right: 10px\"></span>09/2016 - 05/2018</p>\r\n        <p class=\"results\">2A* and A (Mathematics Stream)</p>\r\n        <button (click)=\"viewResults(1)\" class=\"resultsbtn\">{{toggleResults[1]}}</button>\r\n        <div style=\"width: 100%\" *ngIf=\"toView[1]\">\r\n          <table class=\"table table-striped\" style=\"text-align: left\">\r\n            <tbody>\r\n            <tr *ngFor=\"let sub of aLevels\">\r\n              <td>{{sub.subject}}</td>\r\n              <td style=\"color: blue; font-weight: bold;\">{{sub.grade}}</td>\r\n            </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"container right\">\r\n      <div class=\"content\" >\r\n        <h5>Ordinary Level</h5>\r\n        <h6><a href=\"http://snic.lk/wp/\" target=\"_blank\" class=\"place\">St.Nicholas International College Negombo</a></h6>\r\n        <p class=\"date\"><span class=\"fa fa-calendar\" style=\"margin-right: 10px\"></span>09/2013 - 05/2016</p>\r\n        <p class=\"results\">4A* and 4A (Science Stream)</p>\r\n        <button (click)=\"viewResults(0)\" class=\"resultsbtn\">{{toggleResults[0]}}</button>\r\n        <div style=\"width: 100%\" *ngIf=\"toView[0]\">\r\n          <table class=\"table table-striped\">\r\n            <tbody>\r\n            <tr *ngFor=\"let sub of oLevel\">\r\n              <td>{{sub.subject}}</td>\r\n              <td style=\"color: blue; font-weight: bold;\">{{sub.grade}}</td>\r\n            </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/experience/experience.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/experience/experience.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"experience\">\r\n  <div id=\"workExp\">\r\n    <h1>Work Experience</h1>\r\n    <ul>\r\n      <li>\r\n        <h4>Summer Internship</h4>\r\n        <h3 ><a  class=\"place\" href=\"https://attuneconsulting.com/\" target=\"_blank\"> a<span style=\"color: gold\">tt</span>une consulting</a></h3>\r\n        <p class=\"date\">07/2019 - One month</p>\r\n        <p><b>Learning outcomes:</b></p>\r\n        <ul>\r\n          <li>Learnt an overview of SAP</li>\r\n          <li>Learnt about project management, managing online presence, Career goals and development, Lean manufacturing and many more.</li>\r\n          <li>Met Industrial giants like Ajay Amalean (Director and co-founder of MAS Holding Pvt Ltd), Cheevaan Devavarathan Daniel (Group Director at Capital Maharaja Organisation), Sarinda Unamboowe(CEO of MAS Kreeda).</li>\r\n          <li>Factory visits to MAS Linea Aqua (Pvt) Ltd, Prym Intimates and Twinery Innovations by MAS.</li>\r\n          <li>Final project, Kids at Workday, a project to practice project management.</li>\r\n        </ul>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n  <div id=\"myProjects\">\r\n    <h1>My Projects</h1>\r\n    <app-my-projects></app-my-projects>\r\n  </div>\r\n\r\n</section>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section id=\"footer\">\r\n  <p>Find me on social media</p>\r\n  <p>\r\n    <a href=\"https://www.instagram.com/randika_rodrigo/\" target=\"_blank\" class=\"fa fa-instagram socialMediaIcon\"></a>\r\n    <a href=\"https://github.com/RandikaR21\" target=\"_blank\" class=\"fa fa-github socialMediaIcon\"></a>\r\n    <a href=\"https://www.linkedin.com/in/randikarodrigo/\" target=\"_blank\" class=\"fa fa-linkedin socialMediaIcon\"></a>\r\n  </p>\r\n  <p>Joseph Randika Dulshan Rodrigo</p>\r\n  <p><i class=\"fa fa-envelope-open\" style=\"margin-right: 10px\"></i>randika.2018073@iit.ac.lk <i class=\"fa fa-phone\" style=\"margin-left: 10px;margin-right: 10px\"></i> 0769921810</p>\r\n</section>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/my-projects/my-projects.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/my-projects/my-projects.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section id=\"myProjects\">\r\n  <div class=\"project\" *ngFor=\"let project of myProjects\">\r\n    <div class=\"container\">\r\n      <img [src]=project.image width=\"100%\" [alt]=project.name class=\"image\">\r\n      <div class=\"overlay\">\r\n        <div class=\"text\">\r\n          <h4 class=\"projectName\">{{project.name}}</h4>\r\n          {{project.overlay}}\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <p>\r\n      {{project.description}}\r\n    </p>\r\n  </div>\r\n</section>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main\">\r\n  <h1>Randika Rodrigo</h1>\r\n  <h4>Software Engineer Undergraduate</h4>\r\n</div>\r\n  <img [src]=\"imageSrc\"  width=\"100%\" alt=\"My Image\"/>\r\n<div class=\"info\">\r\n  <table class=\"table table-borderless\">\r\n    <tbody>\r\n    <tr>\r\n      <th scope=\"row\"><i class=\"fa fa-birthday-cake\"></i></th>\r\n      <td>21 September 2000</td>\r\n    </tr>\r\n    <tr>\r\n      <th scope=\"row\"><i class=\"fa fa-university\"></i></th>\r\n      <td>University of Westminster</td>\r\n    </tr>\r\n    <tr>\r\n      <th scope=\"row\"><i class=\"fa fa-phone\"></i></th>\r\n      <td>+94-76-9921810</td>\r\n    </tr>\r\n    <tr>\r\n      <th scope=\"row\"><i class=\"fa fa-envelope-open\"></i></th>\r\n      <td>randika.2018073@iit.ac.lk</td>\r\n    </tr>\r\n    </tbody>\r\n  </table>\r\n  <a [href]=\"cvLocation\" download style=\"padding: 0;margin: 0\"><button class=\"downloadButton\">Download CV <span class=\"fa fa-download downloadIcon\"></span></button></a>\r\n\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
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
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
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

const __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
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

const __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".content-body{\r\n  padding:2% 0 2% 0;\r\n  display: block;\r\n}\r\n.content-body h1{\r\n  margin-bottom: 5%;\r\n  color: #6e6e6e;\r\n  font-weight: bold;\r\n  -webkit-text-decoration: underline #ffd000;\r\n          text-decoration: underline #ffd000;\r\n  text-align: center;\r\n}\r\n.content-body p{\r\n  padding: 0 4% 0 4%;\r\n}\r\n.content-body h5{\r\n  margin-bottom: 2%;\r\n  font-weight: bold;\r\n}\r\n* {box-sizing: border-box}\r\n.container {\r\n  width: 100%;\r\n  padding: 0;\r\n  background-color: #ddd;\r\n  border-radius: 20px;\r\n}\r\n.skills {\r\n  text-align: center;\r\n  color: white;\r\n  font-weight: bold;\r\n  background-color: #2196F3;\r\n  border-radius: 20px;\r\n  animation: load 2s 0s;\r\n  -webkit-animation: load 2s 0s;\r\n  -moz-animation: load 2s 0s;\r\n  -o-animation: load 2s 0s;\r\n}\r\n.gridSkills{\r\n  display: grid;\r\n  grid-template-columns: 50% 50%;\r\n  grid-gap: 30px;\r\n}\r\nh2{\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n.skillSection{\r\n  width: 70%;\r\n  margin:2% 15% 6% 15%;\r\n}\r\n.skillSection ul{\r\n  list-style-type: circle;\r\n  padding-left: 0;\r\n}\r\n.skillSection h5{\r\n  text-align: center;\r\n}\r\n.skillSection p{\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n.about,.myInterests,.mySkills{\r\n  padding:4% 1% 7% 1%;\r\n}\r\n.myInterests{\r\n  background-color: #eeeeee;\r\n}\r\n.myInterests h4{\r\n  margin-bottom: 3%;\r\n}\r\n/*Skill bar animation to support multiple browsers*/\r\n@keyframes load{\r\n  from {\r\n    width: 0%\r\n  }\r\n}\r\n@-webkit-keyframes load{\r\n  from {\r\n    width: 0%\r\n  }\r\n}\r\n@media only screen and (max-width:500px) {\r\n  .gridSkills{\r\n    display: block;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsY0FBYztFQUNkLGlCQUFpQjtFQUNqQiwwQ0FBa0M7VUFBbEMsa0NBQWtDO0VBQ2xDLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsaUJBQWlCO0FBQ25CO0FBQ0EsR0FBRyxzQkFBc0I7QUFFekI7RUFDRSxXQUFXO0VBQ1gsVUFBVTtFQUNWLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLDZCQUE2QjtFQUM3QiwwQkFBMEI7RUFDMUIsd0JBQXdCO0FBQzFCO0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLGNBQWM7QUFDaEI7QUFDQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0FBQ1o7QUFDQTtFQUNFLFVBQVU7RUFDVixvQkFBb0I7QUFDdEI7QUFDQTtFQUNFLHVCQUF1QjtFQUN2QixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLFVBQVU7RUFDVixTQUFTO0FBQ1g7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UseUJBQXlCO0FBQzNCO0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7QUFFQSxtREFBbUQ7QUFDbkQ7RUFDRTtJQUNFO0VBQ0Y7QUFDRjtBQUNBO0VBQ0U7SUFDRTtFQUNGO0FBQ0Y7QUFXQTtFQUNFO0lBQ0UsY0FBYztFQUNoQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50LWJvZHl7XHJcbiAgcGFkZGluZzoyJSAwIDIlIDA7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLmNvbnRlbnQtYm9keSBoMXtcclxuICBtYXJnaW4tYm90dG9tOiA1JTtcclxuICBjb2xvcjogIzZlNmU2ZTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSAjZmZkMDAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmNvbnRlbnQtYm9keSBwe1xyXG4gIHBhZGRpbmc6IDAgNCUgMCA0JTtcclxufVxyXG5cclxuLmNvbnRlbnQtYm9keSBoNXtcclxuICBtYXJnaW4tYm90dG9tOiAyJTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4qIHtib3gtc2l6aW5nOiBib3JkZXItYm94fVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbn1cclxuXHJcbi5za2lsbHMge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxOTZGMztcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIGFuaW1hdGlvbjogbG9hZCAycyAwcztcclxuICAtd2Via2l0LWFuaW1hdGlvbjogbG9hZCAycyAwcztcclxuICAtbW96LWFuaW1hdGlvbjogbG9hZCAycyAwcztcclxuICAtby1hbmltYXRpb246IGxvYWQgMnMgMHM7XHJcbn1cclxuXHJcbi5ncmlkU2tpbGxze1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1MCUgNTAlO1xyXG4gIGdyaWQtZ2FwOiAzMHB4O1xyXG59XHJcbmgye1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcbi5za2lsbFNlY3Rpb257XHJcbiAgd2lkdGg6IDcwJTtcclxuICBtYXJnaW46MiUgMTUlIDYlIDE1JTtcclxufVxyXG4uc2tpbGxTZWN0aW9uIHVse1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogY2lyY2xlO1xyXG4gIHBhZGRpbmctbGVmdDogMDtcclxufVxyXG4uc2tpbGxTZWN0aW9uIGg1e1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uc2tpbGxTZWN0aW9uIHB7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuLmFib3V0LC5teUludGVyZXN0cywubXlTa2lsbHN7XHJcbiAgcGFkZGluZzo0JSAxJSA3JSAxJTtcclxufVxyXG5cclxuLm15SW50ZXJlc3Rze1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWVlZWU7XHJcbn1cclxuXHJcbi5teUludGVyZXN0cyBoNHtcclxuICBtYXJnaW4tYm90dG9tOiAzJTtcclxufVxyXG5cclxuLypTa2lsbCBiYXIgYW5pbWF0aW9uIHRvIHN1cHBvcnQgbXVsdGlwbGUgYnJvd3NlcnMqL1xyXG5Aa2V5ZnJhbWVzIGxvYWR7XHJcbiAgZnJvbSB7XHJcbiAgICB3aWR0aDogMCVcclxuICB9XHJcbn1cclxuQC13ZWJraXQta2V5ZnJhbWVzIGxvYWR7XHJcbiAgZnJvbSB7XHJcbiAgICB3aWR0aDogMCVcclxuICB9XHJcbn1cclxuQC1tb3ota2V5ZnJhbWVzIGxvYWR7XHJcbiAgZnJvbSB7XHJcbiAgICB3aWR0aDogMCVcclxuICB9XHJcbn1cclxuQC1vLWtleWZyYW1lcyBsb2Fke1xyXG4gIGZyb20ge1xyXG4gICAgd2lkdGg6IDAlXHJcbiAgfVxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo1MDBweCkge1xyXG4gIC5ncmlkU2tpbGxze1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AboutComponent = class AboutComponent {
    constructor() {
        this.programmingArray = [
            {
                name: 'Python',
                confidence: '80%'
            },
            {
                name: 'Java',
                confidence: '80%'
            },
            {
                name: 'JavaScript',
                confidence: '70%'
            },
            {
                name: 'TypeScript',
                confidence: '70%'
            },
            {
                name: 'SQL',
                confidence: '80%'
            },
        ];
        this.webDevopArray = [
            {
                name: 'HTML',
                confidence: '90%'
            },
            {
                name: 'CSS',
                confidence: '80%'
            },
            {
                name: 'Angular',
                confidence: '80%'
            }
        ];
        this.otherSkills = [
            {
                name: 'Adobe Photoshop',
                confidence: '50%'
            },
            {
                name: 'Adobe Illustrator',
                confidence: '40%'
            }
        ];
        this.interests = [
            'Web Design and Development',
            'UI / UX Designing',
            'Cyber Security',
            'Machine Learning',
            'Game Development'
        ];
    }
    ngOnInit() {
    }
};
AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./about.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")).default]
    })
], AboutComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".profile,.content,.navi,#footer{\r\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n  border-radius: 8px;\r\n  background-color: #f6f6f6;\r\n}\r\n.page{\r\n  border: none;\r\n}\r\n.profile{\r\n  width: 25%;\r\n  position: fixed;\r\n  overflow-x: hidden;\r\n\r\n}\r\n.navi{\r\n  margin-left: 30%;\r\n  margin-bottom: 2%;\r\n  background-color: rgba(1, 172, 230, 0.28);\r\n}\r\n.content{\r\n  margin-left: 30%;\r\n  margin-bottom: 1%;\r\n}\r\n#footer{\r\n  margin-left: 30%;\r\n}\r\n@media only screen and (max-width:800px) {\r\n  .profile{\r\n    width: 100%;\r\n    position: static;\r\n    margin-bottom: 10%;\r\n  }\r\n  .navi , .content , #footer{\r\n    margin-left: 0;\r\n    margin-bottom: 5%;\r\n  }\r\n}\r\n.topnav {\r\n  overflow: hidden;\r\n  background-color: #f2f2f2;\r\n}\r\n.topnav a {\r\n  float: left;\r\n  display: block;\r\n  color: #000000;\r\n  font-weight: bold;\r\n  text-align: center;\r\n  padding: 20px 25px;\r\n  text-decoration: none;\r\n  font-size: 17px;\r\n}\r\n.topnav a:hover {\r\n  background-color: #ddd;\r\n  color: #000000;\r\n}\r\n.topnav a.active {\r\n  background-color: #ffd000;\r\n  color: #000000;\r\n}\r\n.topnav .icon {\r\n  display: none;\r\n}\r\n@media screen and (max-width: 800px) {\r\n  .topnav a:not(:first-child) {display: none;}\r\n  .topnav a.icon {\r\n    float: right;\r\n    display: block;\r\n  }\r\n}\r\n@media screen and (max-width: 800px) {\r\n  .topnav.responsive {position: relative;}\r\n  .topnav.responsive .icon {\r\n    position: absolute;\r\n    right: 0;\r\n    top: 0;\r\n  }\r\n  .topnav.responsive a {\r\n    float: none;\r\n    display: block;\r\n    text-align: left;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw0RUFBNEU7RUFDNUUsa0JBQWtCO0VBQ2xCLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsZUFBZTtFQUNmLGtCQUFrQjs7QUFFcEI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIseUNBQXlDO0FBQzNDO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFO0lBQ0UsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLGNBQWM7SUFDZCxpQkFBaUI7RUFDbkI7QUFDRjtBQUdBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtBQUMzQjtBQUVBO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGVBQWU7QUFDakI7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixjQUFjO0FBQ2hCO0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsY0FBYztBQUNoQjtBQUVBO0VBQ0UsYUFBYTtBQUNmO0FBRUE7RUFDRSw2QkFBNkIsYUFBYSxDQUFDO0VBQzNDO0lBQ0UsWUFBWTtJQUNaLGNBQWM7RUFDaEI7QUFDRjtBQUVBO0VBQ0Usb0JBQW9CLGtCQUFrQixDQUFDO0VBQ3ZDO0lBQ0Usa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixNQUFNO0VBQ1I7RUFDQTtJQUNFLFdBQVc7SUFDWCxjQUFjO0lBQ2QsZ0JBQWdCO0VBQ2xCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9maWxlLC5jb250ZW50LC5uYXZpLCNmb290ZXJ7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjtcclxufVxyXG4ucGFnZXtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuLnByb2ZpbGV7XHJcbiAgd2lkdGg6IDI1JTtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG5cclxufVxyXG4ubmF2aXtcclxuICBtYXJnaW4tbGVmdDogMzAlO1xyXG4gIG1hcmdpbi1ib3R0b206IDIlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMSwgMTcyLCAyMzAsIDAuMjgpO1xyXG59XHJcbi5jb250ZW50e1xyXG4gIG1hcmdpbi1sZWZ0OiAzMCU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMSU7XHJcbn1cclxuXHJcbiNmb290ZXJ7XHJcbiAgbWFyZ2luLWxlZnQ6IDMwJTtcclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ODAwcHgpIHtcclxuICAucHJvZmlsZXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcG9zaXRpb246IHN0YXRpYztcclxuICAgIG1hcmdpbi1ib3R0b206IDEwJTtcclxuICB9XHJcbiAgLm5hdmkgLCAuY29udGVudCAsICNmb290ZXJ7XHJcbiAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDUlO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbi50b3BuYXYge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcclxufVxyXG5cclxuLnRvcG5hdiBhIHtcclxuICBmbG9hdDogbGVmdDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBjb2xvcjogIzAwMDAwMDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMjBweCAyNXB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbn1cclxuXHJcbi50b3BuYXYgYTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcclxuICBjb2xvcjogIzAwMDAwMDtcclxufVxyXG5cclxuLnRvcG5hdiBhLmFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZDAwMDtcclxuICBjb2xvcjogIzAwMDAwMDtcclxufVxyXG5cclxuLnRvcG5hdiAuaWNvbiB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcclxuICAudG9wbmF2IGE6bm90KDpmaXJzdC1jaGlsZCkge2Rpc3BsYXk6IG5vbmU7fVxyXG4gIC50b3BuYXYgYS5pY29uIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcclxuICAudG9wbmF2LnJlc3BvbnNpdmUge3Bvc2l0aW9uOiByZWxhdGl2ZTt9XHJcbiAgLnRvcG5hdi5yZXNwb25zaXZlIC5pY29uIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gIH1cclxuICAudG9wbmF2LnJlc3BvbnNpdmUgYSB7XHJcbiAgICBmbG9hdDogbm9uZTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB9XHJcbn1cclxuIl19 */");

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
        this.title = 'cv';
        this.loadComponent = 0;
    }
    selectedComponent(i) {
        this.loadComponent = i;
    }
    myFunction() {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
            x.className += " responsive";
        }
        else {
            x.className = "topnav";
        }
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _education_education_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./education/education.component */ "./src/app/education/education.component.ts");
/* harmony import */ var _experience_experience_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./experience/experience.component */ "./src/app/experience/experience.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _my_projects_my_projects_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./my-projects/my-projects.component */ "./src/app/my-projects/my-projects.component.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");













let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"],
            _about_about_component__WEBPACK_IMPORTED_MODULE_6__["AboutComponent"],
            _education_education_component__WEBPACK_IMPORTED_MODULE_7__["EducationComponent"],
            _experience_experience_component__WEBPACK_IMPORTED_MODULE_8__["ExperienceComponent"],
            _contact_contact_component__WEBPACK_IMPORTED_MODULE_9__["ContactComponent"],
            _my_projects_my_projects_component__WEBPACK_IMPORTED_MODULE_10__["MyProjectsComponent"],
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__["FontAwesomeModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/contact/contact.component.css":
/*!***********************************************!*\
  !*** ./src/app/contact/contact.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#contact{\r\n  padding:2% 0% 2% 0%;\r\n}\r\n#contact table{\r\n  width: 100%;\r\n  text-align: center;\r\n}\r\n#contact td,th{\r\n  padding-bottom: 20px;\r\n}\r\n#contact h1{\r\n  margin-bottom: 5%;\r\n  color: #6e6e6e;\r\n  font-weight: bold;\r\n  -webkit-text-decoration: underline #ffd000;\r\n          text-decoration: underline #ffd000;\r\n  text-align: center;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLG9CQUFvQjtBQUN0QjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsMENBQWtDO1VBQWxDLGtDQUFrQztFQUNsQyxrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb250YWN0e1xyXG4gIHBhZGRpbmc6MiUgMCUgMiUgMCU7XHJcbn1cclxuI2NvbnRhY3QgdGFibGV7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbiNjb250YWN0IHRkLHRoe1xyXG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG59XHJcbiNjb250YWN0IGgxe1xyXG4gIG1hcmdpbi1ib3R0b206IDUlO1xyXG4gIGNvbG9yOiAjNmU2ZTZlO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lICNmZmQwMDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ContactComponent = class ContactComponent {
    constructor() { }
    ngOnInit() {
    }
};
ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contact',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contact.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contact.component.css */ "./src/app/contact/contact.component.css")).default]
    })
], ContactComponent);



/***/ }),

/***/ "./src/app/education/education.component.css":
/*!***************************************************!*\
  !*** ./src/app/education/education.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* The actual timeline (the vertical ruler) */\r\n.timeline {\r\n  position: relative;\r\n  margin: 0;\r\n}\r\n/* The actual timeline (the vertical ruler) */\r\n.timeline::after {\r\n  content: '';\r\n  position: absolute;\r\n  width: 6px;\r\n  background-color: #2196F3;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 50%;\r\n  margin-left: -3px;\r\n}\r\n/* Container around content */\r\n.container {\r\n  margin: 0;\r\n  position: relative;\r\n  background-color: inherit;\r\n  width: 50%;\r\n}\r\n/* The circles on the timeline */\r\n.container::after {\r\n  content: '';\r\n  position: absolute;\r\n  width: 16px;\r\n  height: 16px;\r\n  right: -8px;\r\n  background-color: #f2f2f2;\r\n  border: 4px solid #2196F3;\r\n  top: 25px;\r\n  border-radius: 50%;\r\n  z-index: 1;\r\n}\r\n/* Place the container to the left */\r\n.left {\r\n  left: 0;\r\n}\r\n/* Place the container to the right */\r\n.right {\r\n  left: 50%;\r\n}\r\n/* Add arrows to the left container (pointing right) */\r\n.left::before {\r\n  content: \" \";\r\n  height: 0;\r\n  position: absolute;\r\n  width: 0;\r\n  z-index: 1;\r\n  top:22px;\r\n  right: 10px;\r\n  border: medium solid white;\r\n  border-width: 10px 0 10px 10px;\r\n  border-color: transparent transparent transparent #2196F3;\r\n}\r\n/* Add arrows to the right container (pointing left) */\r\n.right::before {\r\n  content: \" \";\r\n  height: 0;\r\n  position: absolute;\r\n  top: 22px;\r\n  width: 0;\r\n  z-index: 1;\r\n  left: 10px;\r\n  border: medium solid white;\r\n  border-width: 10px 10px 10px 0;\r\n  border-color: transparent #2196F3 transparent transparent;\r\n}\r\n/* Fix the circle for containers on the right side */\r\n.right::after {\r\n  left: -8px;\r\n}\r\n/* The actual content */\r\n.content {\r\n  padding:4% 4%;\r\n  position: relative;\r\n  border-radius: 6px;\r\n}\r\n.contentAlign{\r\n  text-align: right;\r\n}\r\n.date{\r\n  color: #d60005;\r\n  font-style: italic;\r\n  font-weight: bold;\r\n}\r\n.ongoing{\r\n  color: #00bd02;\r\n  font-style: italic;\r\n}\r\n.place{\r\n  text-decoration: none;\r\n  color: grey;\r\n}\r\n.place:hover{\r\n  color: blue;\r\n  text-decoration: underline;\r\n}\r\n.resultsTable{\r\n  width: 100%;\r\n}\r\n.resultsbtn{\r\n  border: none;\r\n  background-color: inherit;\r\n  text-decoration: none;\r\n  color: blue;\r\n  outline: none;\r\n  margin-bottom: 10px;\r\n}\r\n.results{\r\n  font-weight: bold;\r\n  color: #0053ff;\r\n}\r\ntd{\r\n  padding: 2px;\r\n}\r\n/* Media queries - Responsive timeline on screens less than 600px wide */\r\n@media screen and (max-width: 600px) {\r\n  /* Place the timelime to the left */\r\n  .timeline::after {\r\n    left: 31px;\r\n  }\r\n\r\n  /* Full-width containers */\r\n  .container {\r\n    width: 100%;\r\n    padding-left: 70px;\r\n    padding-right: 25px;\r\n  }\r\n\r\n  /* Make sure that all arrows are pointing leftwards */\r\n  .container::before {\r\n    left: 60px;\r\n    border: medium solid white;\r\n    border-width: 10px 10px 10px 0;\r\n    border-color: transparent #2196F3 transparent transparent;\r\n  }\r\n\r\n  /* Make sure all circles are at the same spot */\r\n  .left::after, .right::after {\r\n    left: 22px;\r\n  }\r\n\r\n  /* Make all right containers behave like the left ones */\r\n  .right {\r\n    left: 0;\r\n  }\r\n  .content{\r\n    text-align: left;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWR1Y2F0aW9uL2VkdWNhdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZDQUE2QztBQUM3QztFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0FBQ1g7QUFFQSw2Q0FBNkM7QUFDN0M7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVix5QkFBeUI7RUFDekIsTUFBTTtFQUNOLFNBQVM7RUFDVCxTQUFTO0VBQ1QsaUJBQWlCO0FBQ25CO0FBRUEsNkJBQTZCO0FBQzdCO0VBQ0UsU0FBUztFQUNULGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsVUFBVTtBQUNaO0FBRUEsZ0NBQWdDO0FBQ2hDO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIsVUFBVTtBQUNaO0FBRUEsb0NBQW9DO0FBQ3BDO0VBQ0UsT0FBTztBQUNUO0FBRUEscUNBQXFDO0FBQ3JDO0VBQ0UsU0FBUztBQUNYO0FBRUEsc0RBQXNEO0FBQ3REO0VBQ0UsWUFBWTtFQUNaLFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFVBQVU7RUFDVixRQUFRO0VBQ1IsV0FBVztFQUNYLDBCQUEwQjtFQUMxQiw4QkFBOEI7RUFDOUIseURBQXlEO0FBQzNEO0FBRUEsc0RBQXNEO0FBQ3REO0VBQ0UsWUFBWTtFQUNaLFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFFBQVE7RUFDUixVQUFVO0VBQ1YsVUFBVTtFQUNWLDBCQUEwQjtFQUMxQiw4QkFBOEI7RUFDOUIseURBQXlEO0FBQzNEO0FBRUEsb0RBQW9EO0FBQ3BEO0VBQ0UsVUFBVTtBQUNaO0FBRUEsdUJBQXVCO0FBQ3ZCO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixXQUFXO0FBQ2I7QUFDQTtFQUNFLFdBQVc7RUFDWCwwQkFBMEI7QUFDNUI7QUFDQTtFQUNFLFdBQVc7QUFDYjtBQUNBO0VBQ0UsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsV0FBVztFQUNYLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7QUFDQSx3RUFBd0U7QUFDeEU7RUFDRSxtQ0FBbUM7RUFDbkM7SUFDRSxVQUFVO0VBQ1o7O0VBRUEsMEJBQTBCO0VBQzFCO0lBQ0UsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixtQkFBbUI7RUFDckI7O0VBRUEscURBQXFEO0VBQ3JEO0lBQ0UsVUFBVTtJQUNWLDBCQUEwQjtJQUMxQiw4QkFBOEI7SUFDOUIseURBQXlEO0VBQzNEOztFQUVBLCtDQUErQztFQUMvQztJQUNFLFVBQVU7RUFDWjs7RUFFQSx3REFBd0Q7RUFDeEQ7SUFDRSxPQUFPO0VBQ1Q7RUFDQTtJQUNFLGdCQUFnQjtFQUNsQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvZWR1Y2F0aW9uL2VkdWNhdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogVGhlIGFjdHVhbCB0aW1lbGluZSAodGhlIHZlcnRpY2FsIHJ1bGVyKSAqL1xyXG4udGltZWxpbmUge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi8qIFRoZSBhY3R1YWwgdGltZWxpbmUgKHRoZSB2ZXJ0aWNhbCBydWxlcikgKi9cclxuLnRpbWVsaW5lOjphZnRlciB7XHJcbiAgY29udGVudDogJyc7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiA2cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxOTZGMztcclxuICB0b3A6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDUwJTtcclxuICBtYXJnaW4tbGVmdDogLTNweDtcclxufVxyXG5cclxuLyogQ29udGFpbmVyIGFyb3VuZCBjb250ZW50ICovXHJcbi5jb250YWluZXIge1xyXG4gIG1hcmdpbjogMDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcclxuICB3aWR0aDogNTAlO1xyXG59XHJcblxyXG4vKiBUaGUgY2lyY2xlcyBvbiB0aGUgdGltZWxpbmUgKi9cclxuLmNvbnRhaW5lcjo6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTZweDtcclxuICBoZWlnaHQ6IDE2cHg7XHJcbiAgcmlnaHQ6IC04cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcclxuICBib3JkZXI6IDRweCBzb2xpZCAjMjE5NkYzO1xyXG4gIHRvcDogMjVweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgei1pbmRleDogMTtcclxufVxyXG5cclxuLyogUGxhY2UgdGhlIGNvbnRhaW5lciB0byB0aGUgbGVmdCAqL1xyXG4ubGVmdCB7XHJcbiAgbGVmdDogMDtcclxufVxyXG5cclxuLyogUGxhY2UgdGhlIGNvbnRhaW5lciB0byB0aGUgcmlnaHQgKi9cclxuLnJpZ2h0IHtcclxuICBsZWZ0OiA1MCU7XHJcbn1cclxuXHJcbi8qIEFkZCBhcnJvd3MgdG8gdGhlIGxlZnQgY29udGFpbmVyIChwb2ludGluZyByaWdodCkgKi9cclxuLmxlZnQ6OmJlZm9yZSB7XHJcbiAgY29udGVudDogXCIgXCI7XHJcbiAgaGVpZ2h0OiAwO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMDtcclxuICB6LWluZGV4OiAxO1xyXG4gIHRvcDoyMnB4O1xyXG4gIHJpZ2h0OiAxMHB4O1xyXG4gIGJvcmRlcjogbWVkaXVtIHNvbGlkIHdoaXRlO1xyXG4gIGJvcmRlci13aWR0aDogMTBweCAwIDEwcHggMTBweDtcclxuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50ICMyMTk2RjM7XHJcbn1cclxuXHJcbi8qIEFkZCBhcnJvd3MgdG8gdGhlIHJpZ2h0IGNvbnRhaW5lciAocG9pbnRpbmcgbGVmdCkgKi9cclxuLnJpZ2h0OjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiIFwiO1xyXG4gIGhlaWdodDogMDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAyMnB4O1xyXG4gIHdpZHRoOiAwO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgbGVmdDogMTBweDtcclxuICBib3JkZXI6IG1lZGl1bSBzb2xpZCB3aGl0ZTtcclxuICBib3JkZXItd2lkdGg6IDEwcHggMTBweCAxMHB4IDA7XHJcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCAjMjE5NkYzIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4vKiBGaXggdGhlIGNpcmNsZSBmb3IgY29udGFpbmVycyBvbiB0aGUgcmlnaHQgc2lkZSAqL1xyXG4ucmlnaHQ6OmFmdGVyIHtcclxuICBsZWZ0OiAtOHB4O1xyXG59XHJcblxyXG4vKiBUaGUgYWN0dWFsIGNvbnRlbnQgKi9cclxuLmNvbnRlbnQge1xyXG4gIHBhZGRpbmc6NCUgNCU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxufVxyXG4uY29udGVudEFsaWdue1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcbi5kYXRle1xyXG4gIGNvbG9yOiAjZDYwMDA1O1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4ub25nb2luZ3tcclxuICBjb2xvcjogIzAwYmQwMjtcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbn1cclxuLnBsYWNle1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogZ3JleTtcclxufVxyXG4ucGxhY2U6aG92ZXJ7XHJcbiAgY29sb3I6IGJsdWU7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuLnJlc3VsdHNUYWJsZXtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4ucmVzdWx0c2J0bntcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6IGJsdWU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbi5yZXN1bHRze1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiAjMDA1M2ZmO1xyXG59XHJcbnRke1xyXG4gIHBhZGRpbmc6IDJweDtcclxufVxyXG4vKiBNZWRpYSBxdWVyaWVzIC0gUmVzcG9uc2l2ZSB0aW1lbGluZSBvbiBzY3JlZW5zIGxlc3MgdGhhbiA2MDBweCB3aWRlICovXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgLyogUGxhY2UgdGhlIHRpbWVsaW1lIHRvIHRoZSBsZWZ0ICovXHJcbiAgLnRpbWVsaW5lOjphZnRlciB7XHJcbiAgICBsZWZ0OiAzMXB4O1xyXG4gIH1cclxuXHJcbiAgLyogRnVsbC13aWR0aCBjb250YWluZXJzICovXHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmctbGVmdDogNzBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDI1cHg7XHJcbiAgfVxyXG5cclxuICAvKiBNYWtlIHN1cmUgdGhhdCBhbGwgYXJyb3dzIGFyZSBwb2ludGluZyBsZWZ0d2FyZHMgKi9cclxuICAuY29udGFpbmVyOjpiZWZvcmUge1xyXG4gICAgbGVmdDogNjBweDtcclxuICAgIGJvcmRlcjogbWVkaXVtIHNvbGlkIHdoaXRlO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAxMHB4IDEwcHggMTBweCAwO1xyXG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCAjMjE5NkYzIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xyXG4gIH1cclxuXHJcbiAgLyogTWFrZSBzdXJlIGFsbCBjaXJjbGVzIGFyZSBhdCB0aGUgc2FtZSBzcG90ICovXHJcbiAgLmxlZnQ6OmFmdGVyLCAucmlnaHQ6OmFmdGVyIHtcclxuICAgIGxlZnQ6IDIycHg7XHJcbiAgfVxyXG5cclxuICAvKiBNYWtlIGFsbCByaWdodCBjb250YWluZXJzIGJlaGF2ZSBsaWtlIHRoZSBsZWZ0IG9uZXMgKi9cclxuICAucmlnaHQge1xyXG4gICAgbGVmdDogMDtcclxuICB9XHJcbiAgLmNvbnRlbnR7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIH1cclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/education/education.component.ts":
/*!**************************************************!*\
  !*** ./src/app/education/education.component.ts ***!
  \**************************************************/
/*! exports provided: EducationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EducationComponent", function() { return EducationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let EducationComponent = class EducationComponent {
    constructor() {
        this.oLevel = [
            {
                subject: 'Mathematics',
                grade: 'A*'
            },
            {
                subject: 'Computer Science',
                grade: 'A*'
            },
            {
                subject: 'Biology',
                grade: 'A*'
            },
            {
                subject: 'Environmental Management',
                grade: 'A*'
            },
            {
                subject: 'Physics',
                grade: 'A'
            },
            {
                subject: 'Chemistry',
                grade: 'A'
            },
            {
                subject: 'English Language',
                grade: 'A'
            },
            {
                subject: 'Religious Knowledge',
                grade: 'A'
            }
        ];
        this.aLevels = [
            {
                subject: 'Pure Maths and Mechanics',
                grade: 'A*'
            },
            {
                subject: 'Physics',
                grade: 'A*'
            },
            {
                subject: 'Chemistry',
                grade: 'A'
            }
        ];
        this.uniFirstYear = [
            {
                subject: 'Programing Principles 01',
                marks: '97'
            },
            {
                subject: 'Programing Principles 02',
                marks: '82'
            },
            {
                subject: 'Mathematics for Computing',
                marks: '100'
            },
            {
                subject: 'Computer System Fundamentals',
                marks: '86'
            },
            {
                subject: 'Computer Science Practice',
                marks: '77'
            },
            {
                subject: 'Web Design and Development',
                marks: '85'
            }
        ];
        this.uniSecondYear = [
            {
                subject: 'Software Development Group Project',
                marks: 'Pending'
            },
            {
                subject: 'Algorithms: Theory and Implementation',
                marks: 'Pending'
            },
            {
                subject: 'Client Server Architecture',
                marks: 'Pending'
            },
            {
                subject: 'Object Oriented Programming',
                marks: 'Pending'
            },
            {
                subject: 'Database Systems',
                marks: 'Pending'
            },
            {
                subject: 'Applied Maths and Physics for Games',
                marks: 'Pending'
            },
        ];
        this.toggleResults = ['View Results', "View Results", "View Results"];
        this.toView = [false, false, false];
    }
    ngOnInit() {
    }
    viewResults(index) {
        if (this.toView[index] == true) {
            this.toView[index] = false;
            this.toggleResults[index] = "View Results";
        }
        else {
            this.toView[index] = true;
            this.toggleResults[index] = "Hide Results";
        }
        // if (this.toggleResults=="View Results"){
        //   this.toggleResults="Hide Results";
        //   this.toView=index;
        // }else{
        //   this.toggleResults="View Results";
        //   this.toView=null;
        // }
    }
};
EducationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-education',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./education.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/education/education.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./education.component.css */ "./src/app/education/education.component.css")).default]
    })
], EducationComponent);



/***/ }),

/***/ "./src/app/experience/experience.component.css":
/*!*****************************************************!*\
  !*** ./src/app/experience/experience.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".experience{\r\n  padding:2% 6% 2% 6%;\r\n}\r\n.experience h1{\r\n  margin-top: 5%;\r\n  margin-bottom: 7%;\r\n  color: #6e6e6e;\r\n  font-weight: bold;\r\n  -webkit-text-decoration: underline #ffd000;\r\n          text-decoration: underline #ffd000;\r\n  text-align: center;\r\n}\r\n.place{\r\n  color: #6e6e6e;\r\n  font-weight: bold;\r\n  text-decoration: none;\r\n}\r\n.place:hover{\r\n  text-decoration: underline;\r\n}\r\n.date{\r\n  color: #00bd02;\r\n  font-weight: bold;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhwZXJpZW5jZS9leHBlcmllbmNlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsY0FBYztFQUNkLGlCQUFpQjtFQUNqQiwwQ0FBa0M7VUFBbEMsa0NBQWtDO0VBQ2xDLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixxQkFBcUI7QUFDdkI7QUFFQTtFQUNFLDBCQUEwQjtBQUM1QjtBQUNBO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2V4cGVyaWVuY2UvZXhwZXJpZW5jZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4cGVyaWVuY2V7XHJcbiAgcGFkZGluZzoyJSA2JSAyJSA2JTtcclxufVxyXG4uZXhwZXJpZW5jZSBoMXtcclxuICBtYXJnaW4tdG9wOiA1JTtcclxuICBtYXJnaW4tYm90dG9tOiA3JTtcclxuICBjb2xvcjogIzZlNmU2ZTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSAjZmZkMDAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ucGxhY2V7XHJcbiAgY29sb3I6ICM2ZTZlNmU7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4ucGxhY2U6aG92ZXJ7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuLmRhdGV7XHJcbiAgY29sb3I6ICMwMGJkMDI7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/experience/experience.component.ts":
/*!****************************************************!*\
  !*** ./src/app/experience/experience.component.ts ***!
  \****************************************************/
/*! exports provided: ExperienceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceComponent", function() { return ExperienceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ExperienceComponent = class ExperienceComponent {
    constructor() { }
    ngOnInit() {
    }
};
ExperienceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-experience',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./experience.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/experience/experience.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./experience.component.css */ "./src/app/experience/experience.component.css")).default]
    })
], ExperienceComponent);



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#footer{\r\n  padding: 2% 8% 2% 8%;\r\n  text-align: center;\r\n  background-color: #4a4a4a;\r\n  border-radius: 8px;\r\n}\r\n\r\n#footer p{\r\n  color: white;\r\n}\r\n\r\n.socialMediaIcon{\r\n  text-decoration: none;\r\n  margin-left: 2%;\r\n  margin-right: 2%;\r\n  color: black;\r\n  padding: 10px;\r\n  border-radius: 50%;\r\n  background-color: white;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsdUJBQXVCO0FBQ3pCIiwiZmlsZSI6InNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2Zvb3RlcntcclxuICBwYWRkaW5nOiAyJSA4JSAyJSA4JTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRhNGE0YTtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbn1cclxuXHJcbiNmb290ZXIgcHtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLnNvY2lhbE1lZGlhSWNvbntcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgbWFyZ2luLWxlZnQ6IDIlO1xyXG4gIG1hcmdpbi1yaWdodDogMiU7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/my-projects/my-projects.component.css":
/*!*******************************************************!*\
  !*** ./src/app/my-projects/my-projects.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#myProjects{\r\n  text-align: center;\r\n}\r\n\r\n.container {\r\n  position: relative;\r\n  padding: 0;\r\n  width: 50%;\r\n  margin-bottom: 4%;\r\n}\r\n\r\n.image {\r\n  display: block;\r\n  width: 100%;\r\n  height: auto;\r\n  margin: 0;\r\n}\r\n\r\n.overlay {\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  height: 100%;\r\n  width: 100%;\r\n  opacity: 0;\r\n  transition: .5s ease;\r\n  background-color: #008CBA;\r\n}\r\n\r\n.container:hover .overlay {\r\n  opacity: 0.9;\r\n}\r\n\r\n.text {\r\n  color: white;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  text-align: center;\r\n}\r\n\r\n.projectName{\r\n  display: block;\r\n  padding-bottom: 10px;\r\n  border-top:4px solid #dddddd;\r\n  border-bottom:4px solid #dddddd;\r\n}\r\n\r\n.project{\r\n  padding: 2%;\r\n  margin-bottom: 2%;\r\n}\r\n\r\n.project:hover{\r\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n\r\n@media only screen and (max-width:1000px) {\r\n  .container:hover .overlay {\r\n    opacity:0;\r\n  }\r\n  .project:hover{\r\n    box-shadow: none;\r\n  }\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXktcHJvamVjdHMvbXktcHJvamVjdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsVUFBVTtFQUNWLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxXQUFXO0VBQ1gsWUFBWTtFQUNaLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sU0FBUztFQUNULE9BQU87RUFDUCxRQUFRO0VBQ1IsWUFBWTtFQUNaLFdBQVc7RUFDWCxVQUFVO0VBQ1Ysb0JBQW9CO0VBQ3BCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFHVCxnQ0FBZ0M7RUFDaEMsa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0UsY0FBYztFQUNkLG9CQUFvQjtFQUNwQiw0QkFBNEI7RUFDNUIsK0JBQStCO0FBQ2pDOztBQUNBO0VBQ0UsV0FBVztFQUNYLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLDRFQUE0RTtBQUM5RTs7QUFFQTtFQUNFO0lBQ0UsU0FBUztFQUNYO0VBQ0E7SUFDRSxnQkFBZ0I7RUFDbEI7O0FBRUYiLCJmaWxlIjoic3JjL2FwcC9teS1wcm9qZWN0cy9teS1wcm9qZWN0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI215UHJvamVjdHN7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgcGFkZGluZzogMDtcclxuICB3aWR0aDogNTAlO1xyXG4gIG1hcmdpbi1ib3R0b206IDQlO1xyXG59XHJcblxyXG4uaW1hZ2Uge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5vdmVybGF5IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHRyYW5zaXRpb246IC41cyBlYXNlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDhDQkE7XHJcbn1cclxuXHJcbi5jb250YWluZXI6aG92ZXIgLm92ZXJsYXkge1xyXG4gIG9wYWNpdHk6IDAuOTtcclxufVxyXG5cclxuLnRleHQge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ucHJvamVjdE5hbWV7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgYm9yZGVyLXRvcDo0cHggc29saWQgI2RkZGRkZDtcclxuICBib3JkZXItYm90dG9tOjRweCBzb2xpZCAjZGRkZGRkO1xyXG59XHJcbi5wcm9qZWN0e1xyXG4gIHBhZGRpbmc6IDIlO1xyXG4gIG1hcmdpbi1ib3R0b206IDIlO1xyXG59XHJcblxyXG4ucHJvamVjdDpob3ZlcntcclxuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTAwMHB4KSB7XHJcbiAgLmNvbnRhaW5lcjpob3ZlciAub3ZlcmxheSB7XHJcbiAgICBvcGFjaXR5OjA7XHJcbiAgfVxyXG4gIC5wcm9qZWN0OmhvdmVye1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/my-projects/my-projects.component.ts":
/*!******************************************************!*\
  !*** ./src/app/my-projects/my-projects.component.ts ***!
  \******************************************************/
/*! exports provided: MyProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyProjectsComponent", function() { return MyProjectsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MyProjectsComponent = class MyProjectsComponent {
    constructor() {
        this.myProjects = [
            {
                name: "Ape හධ",
                overlay: "The Voice of the Voiceless",
                description: "Ape හධ is an approach to translate Sinhale Sign Language to Sinhala text using image classification." +
                    "The project was conducted in order to fulfill the Software Development Group Project." +
                    "In here we attempted to translate realtime camera footage of signs into its respective text." +
                    "The prototype was built with Angular, NodeJS, Python and Flask with MongoDB as a database.",
                image: "assets/apeHanda.PNG",
            },
            {
                name: "Westminster Rental Manager",
                overlay: "",
                description: "Westminster Rental Manager is GUI/CLI application that can be used by a manager of a vehicle rental." +
                    "The project was conducted as a coursework for the Object Oriented Programming Module. " +
                    "The application was built with a Angular FrontEnd, a Java BackEnd and a MySQL database. The API was established using Spring Boot",
                image: "assets/oop.PNG",
            },
            {
                name: "",
                overlay: "3D role playing game",
                description: "is a 3D role playing game built with Unity gaming engine and C# programming language. " +
                    "This was a group project for the game development competition in which my role was to build the movements of the characters.",
                image: "assets/gdc.PNG",
            },
            {
                name: "Physics Engine for Unity",
                overlay: "",
                description: "This is a physic engine built for the Unity gaming engine to demonstrate few aspects of physics and mathematics for gaming." +
                    " The development was done with Unity and C#",
                image: "assets/maths.PNG",
            },
            {
                name: "Fitness App",
                overlay: "",
                description: "This project is fitness web based mobile app for sprinters that will generate a random location in the map and will track the speed and distance of the sprinter." +
                    "To build this I used HTML, CSS and Javascript along with the MapBox API.",
                image: "assets/apeHanda.PNG",
            },
            {
                name: "4 Man Squad Gaming",
                overlay: "",
                description: "4 Man Squad gaming was a group project done as a coursework for the web design and development module in the first year." +
                    " 4 Man Squad Gaming is fully functional website that delivers latest games and news to its viewers." +
                    " My role in the team was to develop the home page, the navigation bar, a user feedback form and 2 individual pages describing 2 of the latest games." +
                    "The project was built with HTML, Javascript and CSS",
                image: "assets/4manSquad.PNG",
            },
        ];
    }
    ngOnInit() {
    }
};
MyProjectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-my-projects',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./my-projects.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/my-projects/my-projects.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./my-projects.component.css */ "./src/app/my-projects/my-projects.component.css")).default]
    })
], MyProjectsComponent);



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("*{\r\n  padding: 0;\r\n  margin:0;\r\n}\r\n\r\ndiv{\r\n  overflow: hidden;\r\n}\r\n\r\n.main{\r\n  padding: 6%;\r\n  text-align: left;\r\n  background-color: #ffd000;\r\n}\r\n\r\n.info{\r\n  display: block;\r\n  text-align: center;\r\n}\r\n\r\ntable{\r\n  padding: 0;\r\n  margin: 4%;\r\n  width: 92%;\r\n  text-align: left;\r\n  overflow: hidden;\r\n\r\n\r\n}\r\n\r\nth{\r\n  padding: 2%;\r\n  color: rgba(175, 175, 175,1);\r\n  text-align: center;\r\n  font-size: 100%;\r\n}\r\n\r\ntd{\r\n  padding: 2%;\r\n  font-weight: bold;\r\n  color: black;\r\n  text-align: center;\r\n}\r\n\r\n.details{\r\n  font-weight: bold;\r\n  color: black;\r\n  text-align: center;\r\n}\r\n\r\n.downloadButton{\r\n  border: none;\r\n  outline: none;\r\n  border-radius: 50px;\r\n  padding:5px 10px 5px 10px;\r\n  color: #000000;\r\n  background-color: #ffd000;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.downloadIcon{\r\n  color: black;\r\n  padding: 10px;\r\n  border-radius: 50%;\r\n  background-color: white;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0VBQ1YsUUFBUTtBQUNWOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUNBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtFQUNoQix5QkFBeUI7QUFDM0I7O0FBQ0E7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0UsVUFBVTtFQUNWLFVBQVU7RUFDVixVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGdCQUFnQjs7O0FBR2xCOztBQUNBO0VBQ0UsV0FBVztFQUNYLDRCQUE0QjtFQUM1QixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFDQTtFQUNFLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsbUJBQW1CO0FBQ3JCOztBQUNBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsdUJBQXVCO0FBQ3pCIiwiZmlsZSI6InNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqe1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOjA7XHJcbn1cclxuXHJcbmRpdntcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbi5tYWlue1xyXG4gIHBhZGRpbmc6IDYlO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZDAwMDtcclxufVxyXG4uaW5mb3tcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxudGFibGV7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDQlO1xyXG4gIHdpZHRoOiA5MiU7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuXHJcbn1cclxudGh7XHJcbiAgcGFkZGluZzogMiU7XHJcbiAgY29sb3I6IHJnYmEoMTc1LCAxNzUsIDE3NSwxKTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxMDAlO1xyXG59XHJcbnRke1xyXG4gIHBhZGRpbmc6IDIlO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmRldGFpbHN7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uZG93bmxvYWRCdXR0b257XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICBwYWRkaW5nOjVweCAxMHB4IDVweCAxMHB4O1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmQwMDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG4uZG93bmxvYWRJY29ue1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuIl19 */");

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");



let ProfileComponent = class ProfileComponent {
    constructor() {
        this.faCoffee = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faCoffee"];
        this.imageSrc = "assets/SELF.jpg";
        this.cvLocation = "assets/Randika Rodrigo CV.pdf";
    }
    ngOnInit() {
    }
};
ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")).default]
    })
], ProfileComponent);



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

module.exports = __webpack_require__(/*! E:\Angular_Projects\myResume\cv\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map