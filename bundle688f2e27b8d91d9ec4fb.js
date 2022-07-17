"use strict";
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["bundle"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/main.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../src/asset/background.jpg */ "./src/asset/background.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&family=Ibarra+Real+Nova:wght@500;700&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  /* Colors */\n  --pink: #ffc4eb;\n  --tan: #e1dabd;\n  --white: #fdfefd;\n  --black: #0d1010;\n  --green: #abc798;\n  --bgc-container: rgba(0, 0, 0, 0.8);\n\n  /* Fonts */\n  --ff-title: \"Caveat\", serif;\n  --ff-nav: \"Ibarra Real Nova\", serif;\n  --ff-content: \"Caveat\", serif;\n  --ff-legend: \"Ibarra Real Nova\", serif;\n}\n\n/* CSS RESET */\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\nhtml {\n  font-size: 100%;\n  line-height: 1.6;\n\n  /* footer support */\n  position: relative;\n  min-height: 100%;\n}\n\nbody {\n  overflow-x: hidden;\n  width: 100vw;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-attachment: fixed;\n  background-size: cover;\n\n  /* footer support */\n  margin-bottom: 2rem;\n}\n\n.mainContainer {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.header {\n  display: flex;\n  flex-direction: column;\n  width: 100vw;\n  gap: 1rem;\n  margin-bottom: 1rem;\n  background-color: var(--white);\n}\n\n.title {\n  font-family: var(--ff-title);\n  font-size: 8rem;\n  padding-right: 1.5rem;\n  color: var(--black);\n  text-align: center;\n}\n\n.nav {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n}\n\n.nav .btn {\n  width: 150px;\n  font-family: var(--ff-nav);\n  font-size: 3rem;\n  color: var(--black);\n  border: none;\n  background-color: var(--white);\n}\n\n.btn:hover {\n  cursor: pointer;\n}\n\n/* Content */\n\n.contentContainer {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 1rem;\n}\n\n/* Home Content */\n\n.homeContent {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 4rem;\n  height: 50rem;\n  width: 50rem;\n  font-family: var(--ff-legend);\n  font-size: 3rem;\n  color: var(--white);\n  background: var(--bgc-container);\n  animation: fadeIn 1s;\n}\n\n.subTagLine {\n  font-size: 2rem;\n}\n\n.heroImage {\n  width: 60%;\n  height: 60%;\n  opacity: 1;\n}\n\n/* Menu Content */\n\n.menuContent {\n  display: flex;\n  flex-direction: column;\n  color: var(--white);\n  background: var(--bgc-container);\n  animation: fadeIn 1s;\n  margin-bottom: 1.5rem;\n}\n\n.fieldset {\n  margin: 2rem 2rem;\n  border: 2px solid var(--white);\n}\n\n.legend {\n  font-family: var(--ff-legend);\n  font-size: 3rem;\n  font-weight: 700;\n  text-align: center;\n}\n\n.contentSection {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  justify-content: center;\n  gap: 2rem;\n  margin: 2rem 2rem;\n  font-family: var(--ff-content);\n  font-size: 2rem;\n  font-weight: 800;\n  text-align: center;\n}\n\n.contentSection p {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.subText {\n  margin-top: 1rem;\n  font-family: var(--ff-nav);\n  font-size: 1.5rem;\n  font-weight: 500;\n  max-width: 25rem;\n}\n\n/* Contact Content */\n\n.contactContent {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  height: 45rem;\n  width: 50rem;\n  font-size: 2rem;\n  gap: 2rem;\n  padding: 2rem 2rem;\n  color: var(--white);\n  background: var(--bgc-container);\n  animation: fadeIn 1s;\n  margin-bottom: 1.5rem;\n}\n\n.contactMap {\n  width: 100%;\n}\n\n/* Scrollbar */\n/* width */\n::-webkit-scrollbar {\n  width: 0.5rem;\n}\n\n/* Track */\n::-webkit-scrollbar-track {\n  background: #f1f1f1;\n}\n\n/* Handle */\n::-webkit-scrollbar-thumb {\n  background: #888;\n}\n\n/* Handle on hover */\n::-webkit-scrollbar-thumb:hover {\n  background: #555;\n}\n\n/* Animations */\n\n@keyframes fadeIn {\n  0% {\n    opacity: 0;\n  }\n\n  100% {\n    opacity: 1;\n  }\n}\n\n/* FOOTER */\n\n.footer {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 1rem;\n  width: 100%;\n  padding: 1rem 0;\n  font-family: var(--ff-nav);\n  font-size: 1.5rem;\n  color: var(--white);\n  background-color: var(--bgc-container);\n}\n\n.fa-github {\n  color: var(--white);\n  font-size: 1.5rem;\n  transition: transform 0.3s ease-in-out;\n}\n\n.fa-github:hover {\n  transform: rotate(360deg) scale(1.2);\n}\n\n/* Media Queries */\n@media (max-width: 1200px) {\n  html {\n    font-size: 100%;\n  }\n}\n\n@media (max-width: 992px) {\n  html {\n    font-size: 80%;\n  }\n  .contentSection {\n    display: flex;\n    flex-direction: column;\n  }\n}\n\n@media (max-width: 768px) {\n  html {\n    font-size: 60%;\n  }\n  .contentSection {\n    display: flex;\n    flex-direction: column;\n  }\n}\n\n@media (max-width: 576px) {\n  html {\n    font-size: 50%;\n  }\n  .contentSection {\n    display: flex;\n    flex-direction: column;\n  }\n}\n\n@media (max-width: 425px) {\n  html {\n    font-size: 40%;\n  }\n  .contentSection {\n    display: flex;\n    flex-direction: column;\n  }\n}\n\n@media (max-width: 290px) {\n  html {\n    font-size: 35%;\n  }\n  .contentSection {\n    display: flex;\n    flex-direction: column;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/styles/main.css"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&family=Ibarra+Real+Nova:wght@500;700&display=swap\");\n\n:root {\n  /* Colors */\n  --pink: #ffc4eb;\n  --tan: #e1dabd;\n  --white: #fdfefd;\n  --black: #0d1010;\n  --green: #abc798;\n  --bgc-container: rgba(0, 0, 0, 0.8);\n\n  /* Fonts */\n  --ff-title: \"Caveat\", serif;\n  --ff-nav: \"Ibarra Real Nova\", serif;\n  --ff-content: \"Caveat\", serif;\n  --ff-legend: \"Ibarra Real Nova\", serif;\n}\n\n/* CSS RESET */\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\nhtml {\n  font-size: 100%;\n  line-height: 1.6;\n\n  /* footer support */\n  position: relative;\n  min-height: 100%;\n}\n\nbody {\n  overflow-x: hidden;\n  width: 100vw;\n  background: url(\"/src/asset/background.jpg\");\n  background-attachment: fixed;\n  background-size: cover;\n\n  /* footer support */\n  margin-bottom: 2rem;\n}\n\n.mainContainer {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.header {\n  display: flex;\n  flex-direction: column;\n  width: 100vw;\n  gap: 1rem;\n  margin-bottom: 1rem;\n  background-color: var(--white);\n}\n\n.title {\n  font-family: var(--ff-title);\n  font-size: 8rem;\n  padding-right: 1.5rem;\n  color: var(--black);\n  text-align: center;\n}\n\n.nav {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n}\n\n.nav .btn {\n  width: 150px;\n  font-family: var(--ff-nav);\n  font-size: 3rem;\n  color: var(--black);\n  border: none;\n  background-color: var(--white);\n}\n\n.btn:hover {\n  cursor: pointer;\n}\n\n/* Content */\n\n.contentContainer {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 1rem;\n}\n\n/* Home Content */\n\n.homeContent {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 4rem;\n  height: 50rem;\n  width: 50rem;\n  font-family: var(--ff-legend);\n  font-size: 3rem;\n  color: var(--white);\n  background: var(--bgc-container);\n  animation: fadeIn 1s;\n}\n\n.subTagLine {\n  font-size: 2rem;\n}\n\n.heroImage {\n  width: 60%;\n  height: 60%;\n  opacity: 1;\n}\n\n/* Menu Content */\n\n.menuContent {\n  display: flex;\n  flex-direction: column;\n  color: var(--white);\n  background: var(--bgc-container);\n  animation: fadeIn 1s;\n  margin-bottom: 1.5rem;\n}\n\n.fieldset {\n  margin: 2rem 2rem;\n  border: 2px solid var(--white);\n}\n\n.legend {\n  font-family: var(--ff-legend);\n  font-size: 3rem;\n  font-weight: 700;\n  text-align: center;\n}\n\n.contentSection {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  justify-content: center;\n  gap: 2rem;\n  margin: 2rem 2rem;\n  font-family: var(--ff-content);\n  font-size: 2rem;\n  font-weight: 800;\n  text-align: center;\n}\n\n.contentSection p {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.subText {\n  margin-top: 1rem;\n  font-family: var(--ff-nav);\n  font-size: 1.5rem;\n  font-weight: 500;\n  max-width: 25rem;\n}\n\n/* Contact Content */\n\n.contactContent {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  height: 45rem;\n  width: 50rem;\n  font-size: 2rem;\n  gap: 2rem;\n  padding: 2rem 2rem;\n  color: var(--white);\n  background: var(--bgc-container);\n  animation: fadeIn 1s;\n  margin-bottom: 1.5rem;\n}\n\n.contactMap {\n  width: 100%;\n}\n\n/* Scrollbar */\n/* width */\n::-webkit-scrollbar {\n  width: 0.5rem;\n}\n\n/* Track */\n::-webkit-scrollbar-track {\n  background: #f1f1f1;\n}\n\n/* Handle */\n::-webkit-scrollbar-thumb {\n  background: #888;\n}\n\n/* Handle on hover */\n::-webkit-scrollbar-thumb:hover {\n  background: #555;\n}\n\n/* Animations */\n\n@keyframes fadeIn {\n  0% {\n    opacity: 0;\n  }\n\n  100% {\n    opacity: 1;\n  }\n}\n\n/* FOOTER */\n\n.footer {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 1rem;\n  width: 100%;\n  padding: 1rem 0;\n  font-family: var(--ff-nav);\n  font-size: 1.5rem;\n  color: var(--white);\n  background-color: var(--bgc-container);\n}\n\n.fa-github {\n  color: var(--white);\n  font-size: 1.5rem;\n  transition: transform 0.3s ease-in-out;\n}\n\n.fa-github:hover {\n  transform: rotate(360deg) scale(1.2);\n}\n\n/* Media Queries */\n@media (max-width: 1200px) {\n  html {\n    font-size: 100%;\n  }\n}\n\n@media (max-width: 992px) {\n  html {\n    font-size: 80%;\n  }\n  .contentSection {\n    display: flex;\n    flex-direction: column;\n  }\n}\n\n@media (max-width: 768px) {\n  html {\n    font-size: 60%;\n  }\n  .contentSection {\n    display: flex;\n    flex-direction: column;\n  }\n}\n\n@media (max-width: 576px) {\n  html {\n    font-size: 50%;\n  }\n  .contentSection {\n    display: flex;\n    flex-direction: column;\n  }\n}\n\n@media (max-width: 425px) {\n  html {\n    font-size: 40%;\n  }\n  .contentSection {\n    display: flex;\n    flex-direction: column;\n  }\n}\n\n@media (max-width: 290px) {\n  html {\n    font-size: 35%;\n  }\n  .contentSection {\n    display: flex;\n    flex-direction: column;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/reset.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/reset.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\nbody {\n  line-height: 1;\n}\nol,\nul {\n  list-style: none;\n}\nblockquote,\nq {\n  quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: \"\";\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n", "",{"version":3,"sources":["webpack://./src/styles/reset.css"],"names":[],"mappings":"AAAA;;;CAGC;;AAED;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;EAiFE,SAAS;EACT,UAAU;EACV,SAAS;EACT,eAAe;EACf,aAAa;EACb,wBAAwB;AAC1B;AACA,gDAAgD;AAChD;;;;;;;;;;;EAWE,cAAc;AAChB;AACA;EACE,cAAc;AAChB;AACA;;EAEE,gBAAgB;AAClB;AACA;;EAEE,YAAY;AACd;AACA;;;;EAIE,WAAW;EACX,aAAa;AACf;AACA;EACE,yBAAyB;EACzB,iBAAiB;AACnB","sourcesContent":["/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\nbody {\n  line-height: 1;\n}\nol,\nul {\n  list-style: none;\n}\nblockquote,\nq {\n  quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: \"\";\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/main.css":
/*!*****************************!*\
  !*** ./src/styles/main.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/reset.css":
/*!******************************!*\
  !*** ./src/styles/reset.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./reset.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/reset.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_reset_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/reset.css */ "./src/styles/reset.css");
/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/main.css */ "./src/styles/main.css");
/* harmony import */ var _pages_generateHome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/generateHome */ "./src/pages/generateHome.js");
/* harmony import */ var _pages_generateMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/generateMenu */ "./src/pages/generateMenu.js");
/* harmony import */ var _pages_generateContact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/generateContact */ "./src/pages/generateContact.js");






const head = document.head;
const body = document.body;
const mainContainer = document.createElement("div");

// Header
const header = document.createElement("header");
const title = document.createElement("h1");

// Nav
const nav = document.createElement("nav");
const homeBtn = document.createElement("button");
const menuBtn = document.createElement("button");
const contactBtn = document.createElement("button");

// Content
const contentContainer = document.createElement("div");

// Creating Classes
mainContainer.classList.add("mainContainer");
header.classList.add("header");
title.classList.add("title");
nav.classList.add("nav");
homeBtn.classList.add("homeBtn");
homeBtn.classList.add("btn");
menuBtn.classList.add("menuBtn");
menuBtn.classList.add("btn");
contactBtn.classList.add("contactBtn");
contactBtn.classList.add("btn");
contentContainer.classList.add("contentContainer");

// Adding textContent
title.textContent = "Culinary Compound";
homeBtn.textContent = "Home";
menuBtn.textContent = "Menu";
contactBtn.textContent = "Contact";

// Building HTML Structure
body.appendChild(mainContainer);
mainContainer.appendChild(header);
mainContainer.appendChild(nav);
mainContainer.appendChild(contentContainer);
header.appendChild(title);
header.appendChild(nav);
nav.appendChild(homeBtn);
nav.appendChild(menuBtn);
nav.appendChild(contactBtn);
contentContainer.appendChild((0,_pages_generateHome__WEBPACK_IMPORTED_MODULE_2__["default"])());

// Button On Click
homeBtn.onclick = () => {
  contentContainer.replaceChildren();
  contentContainer.appendChild((0,_pages_generateHome__WEBPACK_IMPORTED_MODULE_2__["default"])());
};
menuBtn.onclick = () => {
  contentContainer.replaceChildren();
  contentContainer.appendChild((0,_pages_generateMenu__WEBPACK_IMPORTED_MODULE_3__["default"])());
};
contactBtn.onclick = () => {
  contentContainer.replaceChildren();
  contentContainer.appendChild((0,_pages_generateContact__WEBPACK_IMPORTED_MODULE_4__["default"])());
};

// Footer Script
const footerScript = document.createElement("script");
footerScript.src = "https://kit.fontawesome.com/aa27ee4dff.js";
footerScript.crossOrigin = "anonymous";
head.appendChild(footerScript);

// Footer

const footer = document.createElement("div");
footer.classList.add("footer");
footer.innerHTML = `<p>
Copyright ©
<script>
  document.write(new Date().getFullYear());
</script>
CodingWithDude
</p>
<a href="https://github.com/codingwithdude" target="_blank">
<i class="fab fa-github"></i
></a>`;
body.appendChild(footer);


/***/ }),

/***/ "./src/pages/generateContact.js":
/*!**************************************!*\
  !*** ./src/pages/generateContact.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _asset_restaurant_location_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../asset/restaurant-location.png */ "./src/asset/restaurant-location.png");

function generateContact() {
  const content = document.createElement("div");
  content.classList.add("contactContent");

  const phone = document.createElement("p");
  phone.textContent = "Phone: 123-456-7890";

  const address = document.createElement("p");
  address.textContent = "Address: Hollywood Boulevard 42, Los Angeles";

  const map = new Image();
  map.src = _asset_restaurant_location_png__WEBPACK_IMPORTED_MODULE_0__;
  map.classList.add("contactMap");

  content.appendChild(phone);
  content.appendChild(address);
  content.appendChild(map);

  return content;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateContact);


/***/ }),

/***/ "./src/pages/generateHome.js":
/*!***********************************!*\
  !*** ./src/pages/generateHome.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _asset_heroImage_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../asset/heroImage.png */ "./src/asset/heroImage.png");


function generateHome() {
  // Content
  const content = document.createElement("div");
  const tagLine = document.createElement("p");
  const image = new Image();
  image.src = _asset_heroImage_png__WEBPACK_IMPORTED_MODULE_0__;
  const callToAction = document.createElement("p");

  // Creating Classes
  content.classList.add("homeContent");
  tagLine.classList.add("tagLine");
  image.classList.add("heroImage");
  callToAction.classList.add("callToAction");

  // Adding textContent
  tagLine.textContent = "Where every ingredient tells a story";
  callToAction.textContent = "Reserve a table today";

  // Building HTML Structure
  content.appendChild(tagLine);
  content.appendChild(image);
  content.appendChild(callToAction);

  return content;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateHome);


/***/ }),

/***/ "./src/pages/generateMenu.js":
/*!***********************************!*\
  !*** ./src/pages/generateMenu.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function generateMenu() {
  // Content
  const content = document.createElement("div");
  content.classList.add("menuContent");

  // Meat and Cheese
  const meatCheeseFieldset = document.createElement("fieldset");
  meatCheeseFieldset.classList.add("fieldset");
  content.appendChild(meatCheeseFieldset);

  // Legend
  const meatCheeseLegend = document.createElement("legend");
  meatCheeseLegend.classList.add("legend");
  meatCheeseLegend.innerText = "MEAT & CHEESE";
  meatCheeseFieldset.appendChild(meatCheeseLegend);

  // Content
  const meatCheeseContent = document.createElement("div");
  meatCheeseContent.classList.add("contentSection");
  meatCheeseFieldset.appendChild(meatCheeseContent);

  const MOLINARI_SOPRESSATA = document.createElement("p");
  MOLINARI_SOPRESSATA.textContent = "MOLINARI SOPRESSATA 6";
  meatCheeseContent.appendChild(MOLINARI_SOPRESSATA);

  const HOT_COPPA = document.createElement("p");
  HOT_COPPA.textContent = "HOT COPPA 7";
  meatCheeseContent.appendChild(HOT_COPPA);

  const PROSCIUTTO_DI_SAN_DANIELE = document.createElement("p");
  PROSCIUTTO_DI_SAN_DANIELE.textContent = "PROSCIUTTO DI SAN DANIELE 8";
  meatCheeseContent.appendChild(PROSCIUTTO_DI_SAN_DANIELE);

  const BRESAOLA = document.createElement("p");
  BRESAOLA.textContent = "BRESAOLA 7";
  meatCheeseContent.appendChild(BRESAOLA);

  const PRAIRIE_BREEZE_CHEDDAR = document.createElement("p");
  PRAIRIE_BREEZE_CHEDDAR.textContent = "PRAIRIE BREEZE CHEDDAR 5";
  meatCheeseContent.appendChild(PRAIRIE_BREEZE_CHEDDAR);

  const AGED_MANCHEGO = document.createElement("p");
  AGED_MANCHEGO.textContent = "AGED MANCHEGO 4";
  meatCheeseContent.appendChild(AGED_MANCHEGO);

  const DOLCE_GORGONZOLA = document.createElement("p");
  DOLCE_GORGONZOLA.textContent = "DOLCE GORGONZOLA 5";
  meatCheeseContent.appendChild(DOLCE_GORGONZOLA);

  const PIMENTO_CHEESE = document.createElement("p");
  PIMENTO_CHEESE.textContent = "PIMENTO CHEESE 6";
  meatCheeseContent.appendChild(PIMENTO_CHEESE);

  // Snacks
  const snacksFieldset = document.createElement("fieldset");
  snacksFieldset.classList.add("fieldset");
  content.appendChild(snacksFieldset);

  // Legend
  const snacksLegend = document.createElement("legend");
  snacksLegend.classList.add("legend");
  snacksLegend.innerText = "SNACKS";
  snacksFieldset.appendChild(snacksLegend);

  // Content
  const snacksContent = document.createElement("div");
  snacksContent.classList.add("contentSection");
  snacksFieldset.appendChild(snacksContent);

  const GOCHUJANG_BRUSSELS_SPROUTS = document.createElement("p");
  GOCHUJANG_BRUSSELS_SPROUTS.textContent = "GOCHUJANG BRUSSELS SPROUTS 7";
  snacksContent.appendChild(GOCHUJANG_BRUSSELS_SPROUTS);

  const CRUSTY_BREAD_GARLIC_OIL_BALSAMIC = document.createElement("p");
  CRUSTY_BREAD_GARLIC_OIL_BALSAMIC.textContent =
    "CRUSTY BREAD, GARLIC OIL & BALSAMIC 4";
  snacksContent.appendChild(CRUSTY_BREAD_GARLIC_OIL_BALSAMIC);

  const GRILLED_ASPARAGUS = document.createElement("p");
  GRILLED_ASPARAGUS.textContent = "GRILLED ASPARAGUS 5";
  snacksContent.appendChild(GRILLED_ASPARAGUS);

  const MARINATED_OLIVES = document.createElement("p");
  MARINATED_OLIVES.textContent = "MARINATED OLIVES 5";
  snacksContent.appendChild(MARINATED_OLIVES);

  const MARCONA_ALMONDS = document.createElement("p");
  MARCONA_ALMONDS.textContent = "MARCONA ALMONDS 4";
  snacksContent.appendChild(MARCONA_ALMONDS);

  const PROSCIUTTO_DEVILED_EGGS = document.createElement("p");
  PROSCIUTTO_DEVILED_EGGS.textContent = "PROSCIUTTO DEVILED EGGS 5";
  snacksContent.appendChild(PROSCIUTTO_DEVILED_EGGS);

  // Salads
  const saladsFieldset = document.createElement("fieldset");
  saladsFieldset.classList.add("fieldset");
  content.appendChild(saladsFieldset);

  // Legend
  const saladsLegend = document.createElement("legend");
  saladsLegend.classList.add("legend");
  saladsLegend.innerText = "SALADS";
  saladsFieldset.appendChild(saladsLegend);

  // Content
  const saladsContent = document.createElement("div");
  saladsContent.classList.add("contentSection");
  saladsFieldset.appendChild(saladsContent);

  const CHEAP_HOUSE_SALAD = document.createElement("p");
  CHEAP_HOUSE_SALAD.textContent = "CHEAP HOUSE SALAD 7";
  const CHEAP_HOUSE_SALAD_SubText = document.createElement("p");
  CHEAP_HOUSE_SALAD_SubText.classList.add("subText");
  CHEAP_HOUSE_SALAD_SubText.textContent = "buttermilk ranch";
  CHEAP_HOUSE_SALAD.appendChild(CHEAP_HOUSE_SALAD_SubText);
  saladsContent.appendChild(CHEAP_HOUSE_SALAD);

  const LITTLE_GEM_CAESAR = document.createElement("p");
  LITTLE_GEM_CAESAR.textContent = "LITTLE GEM CAESAR 13";
  const LITTLE_GEM_CAESAR_SubText = document.createElement("p");
  LITTLE_GEM_CAESAR_SubText.classList.add("subText");
  LITTLE_GEM_CAESAR_SubText.textContent = "shaved parmesan, croutons";
  LITTLE_GEM_CAESAR.appendChild(LITTLE_GEM_CAESAR_SubText);
  saladsContent.appendChild(LITTLE_GEM_CAESAR);

  const STRAWBERRY_KALE = document.createElement("p");
  STRAWBERRY_KALE.textContent = "STRAWBERRY & KALE 15";
  const STRAWBERRY_KALE_SubText = document.createElement("p");
  STRAWBERRY_KALE_SubText.classList.add("subText");
  STRAWBERRY_KALE_SubText.textContent =
    "farro, snap pea, golden raisin, smoked almond, goat cheese, poppyseed vinaigrette";
  STRAWBERRY_KALE.appendChild(STRAWBERRY_KALE_SubText);
  saladsContent.appendChild(STRAWBERRY_KALE);

  const CHOPPED_CHICKEN = document.createElement("p");
  CHOPPED_CHICKEN.textContent = "CHOPPED CHICKEN 16.5";
  const CHOPPED_CHICKEN_SubText = document.createElement("p");
  CHOPPED_CHICKEN_SubText.classList.add("subText");
  CHOPPED_CHICKEN_SubText.textContent =
    "avocado, bacon, heirloom tomato, white cheddar, deviled egg, bacon bbq ranch";
  CHOPPED_CHICKEN.appendChild(CHOPPED_CHICKEN_SubText);
  saladsContent.appendChild(CHOPPED_CHICKEN);

  const WEDGED_ICEBERG = document.createElement("p");
  WEDGED_ICEBERG.textContent = "WEDGED ICEBERG 14.5";
  const WEDGED_ICEBERG_SubText = document.createElement("p");
  WEDGED_ICEBERG_SubText.classList.add("subText");
  WEDGED_ICEBERG_SubText.textContent =
    "maple glazed bacon, heirloom cherry tomato, avocado, crouton, blue cheese dressing";
  WEDGED_ICEBERG.appendChild(WEDGED_ICEBERG_SubText);
  saladsContent.appendChild(WEDGED_ICEBERG);

  // ENTREES
  const entreesFieldset = document.createElement("fieldset");
  entreesFieldset.classList.add("fieldset");
  content.appendChild(entreesFieldset);

  // Legend
  const entreesLegend = document.createElement("legend");
  entreesLegend.classList.add("legend");
  entreesLegend.innerText = "ENTRÉES";
  entreesFieldset.appendChild(entreesLegend);

  // Content
  const entreesContent = document.createElement("div");
  entreesContent.classList.add("contentSection");
  entreesFieldset.appendChild(entreesContent);

  const HOUR_PORK_RIBS = document.createElement("p");
  HOUR_PORK_RIBS.textContent = "36-HOUR PORK RIBS 27";
  const HOUR_PORK_RIBS_SubText = document.createElement("p");
  HOUR_PORK_RIBS_SubText.classList.add("subText");
  HOUR_PORK_RIBS_SubText.textContent = "jalapeño, molasses, fries";
  HOUR_PORK_RIBS.appendChild(HOUR_PORK_RIBS_SubText);
  entreesContent.appendChild(HOUR_PORK_RIBS);

  const MEATLOAF = document.createElement("p");
  MEATLOAF.textContent = "MA...THE MEATLOAF!?! 18";
  const MEATLOAF_SubText = document.createElement("p");
  MEATLOAF_SubText.classList.add("subText");
  MEATLOAF_SubText.textContent = "green bean, smashed potato, gravy";
  MEATLOAF.appendChild(MEATLOAF_SubText);
  entreesContent.appendChild(MEATLOAF);

  const RAINBOW_TROUT = document.createElement("p");
  RAINBOW_TROUT.textContent = "RAINBOW TROUT 23";
  const RAINBOW_TROUT_SubText = document.createElement("p");
  RAINBOW_TROUT_SubText.classList.add("subText");
  RAINBOW_TROUT_SubText.textContent =
    "frenched green bean, toasted almond, caramelized shallot, lemon brown butter";
  RAINBOW_TROUT.appendChild(RAINBOW_TROUT_SubText);
  entreesContent.appendChild(RAINBOW_TROUT);

  const STEAK_FRITES = document.createElement("p");
  STEAK_FRITES.textContent = "STEAK FRITES* 29.5";
  const STEAK_FRITES_SubText = document.createElement("p");
  STEAK_FRITES_SubText.classList.add("subText");
  STEAK_FRITES_SubText.textContent =
    "prime skirt steak, black truffle butter, french frie";
  STEAK_FRITES.appendChild(STEAK_FRITES_SubText);
  entreesContent.appendChild(STEAK_FRITES);

  const MADE_TO_ORDER_LASAGNA = document.createElement("p");
  MADE_TO_ORDER_LASAGNA.textContent = "MADE TO ORDER LASAGNA 17";
  const MADE_TO_ORDER_LASAGNA_SubText = document.createElement("p");
  MADE_TO_ORDER_LASAGNA_SubText.classList.add("subText");
  MADE_TO_ORDER_LASAGNA_SubText.textContent =
    "summer corn, spinach ricotta, mozzarella, pomodoro, garlic ciabatta";
  MADE_TO_ORDER_LASAGNA.appendChild(MADE_TO_ORDER_LASAGNA_SubText);
  entreesContent.appendChild(MADE_TO_ORDER_LASAGNA);

  const FRIED_CHICKEN = document.createElement("p");
  FRIED_CHICKEN.textContent = "FRIED CHICKEN 18.5";
  const FRIED_CHICKEN_SubText = document.createElement("p");
  FRIED_CHICKEN_SubText.classList.add("subText");
  FRIED_CHICKEN_SubText.textContent =
    "Buttermilk biscuit, smashed potato, gravy (be patient - it's worth it!)";
  FRIED_CHICKEN.appendChild(FRIED_CHICKEN_SubText);
  entreesContent.appendChild(FRIED_CHICKEN);

  const SPICY_KOREAN_SKIRT_STEAK = document.createElement("p");
  SPICY_KOREAN_SKIRT_STEAK.textContent = "SPICY KOREAN SKIRT STEAK* 29.5";
  const SPICY_KOREAN_SKIRT_STEAK_SubText = document.createElement("p");
  SPICY_KOREAN_SKIRT_STEAK_SubText.classList.add("subText");
  SPICY_KOREAN_SKIRT_STEAK_SubText.textContent =
    "forbidden rice, zucchini, mushroom, ginger chili sauce";
  SPICY_KOREAN_SKIRT_STEAK.appendChild(SPICY_KOREAN_SKIRT_STEAK_SubText);
  entreesContent.appendChild(SPICY_KOREAN_SKIRT_STEAK);

  const BEER_BATTERED_FISH = document.createElement("p");
  BEER_BATTERED_FISH.textContent = "BEER BATTERED FISH & CHIPS 18";
  const BEER_BATTERED_FISH_SubText = document.createElement("p");
  BEER_BATTERED_FISH_SubText.classList.add("subText");
  BEER_BATTERED_FISH_SubText.textContent = "coleslaw, tartar sauce";
  BEER_BATTERED_FISH.appendChild(BEER_BATTERED_FISH_SubText);
  entreesContent.appendChild(BEER_BATTERED_FISH);

  const SPICY_VEGAN_CURRY = document.createElement("p");
  SPICY_VEGAN_CURRY.textContent = "SPICY VEGAN CURRY 17";
  const SPICY_VEGAN_CURRY_SubText = document.createElement("p");
  SPICY_VEGAN_CURRY_SubText.classList.add("subText");
  SPICY_VEGAN_CURRY_SubText.textContent =
    "griddled sweet potato, eggplant, snap pea, cauliflower, shiitake mushroom, black rice";
  SPICY_VEGAN_CURRY.appendChild(SPICY_VEGAN_CURRY_SubText);
  entreesContent.appendChild(SPICY_VEGAN_CURRY);

  const ROASTED_SALMON = document.createElement("p");
  ROASTED_SALMON.textContent = "ROASTED SALMON* 26.5";
  const ROASTED_SALMON_SubText = document.createElement("p");
  ROASTED_SALMON_SubText.classList.add("subText");
  ROASTED_SALMON_SubText.textContent =
    "creamy farro, sweet corn, blistered tomato, asparagus, garden herb pesto";
  ROASTED_SALMON.appendChild(ROASTED_SALMON_SubText);
  entreesContent.appendChild(ROASTED_SALMON);

  return content;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateMenu);


/***/ }),

/***/ "./src/asset/background.jpg":
/*!**********************************!*\
  !*** ./src/asset/background.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9a6e0fdf2e4260394709.jpg";

/***/ }),

/***/ "./src/asset/heroImage.png":
/*!*********************************!*\
  !*** ./src/asset/heroImage.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "14fd97c53468b0e38472.png";

/***/ }),

/***/ "./src/asset/restaurant-location.png":
/*!*******************************************!*\
  !*** ./src/asset/restaurant-location.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5d4ead59a4044100f85f.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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c0ZBQXNGLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGNBQWMsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sV0FBVyxPQUFPLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsY0FBYyxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sV0FBVyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxhQUFhLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sYUFBYSxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sYUFBYSxNQUFNLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sVUFBVSxVQUFVLEtBQUssVUFBVSxNQUFNLFVBQVUsS0FBSyxZQUFZLE9BQU8sVUFBVSxLQUFLLFlBQVksT0FBTyxZQUFZLE1BQU0sWUFB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QUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpRUFBZSxZQUFZLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGVzL21haW4uY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZXMvcmVzZXQuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGVzL21haW4uY3NzP2U4MGEiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlcy9yZXNldC5jc3M/NGNmYiIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZXMvZ2VuZXJhdGVDb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9wYWdlcy9nZW5lcmF0ZUhvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BhZ2VzL2dlbmVyYXRlTWVudS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiL3NyYy9hc3NldC9iYWNrZ3JvdW5kLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Q2F2ZWF0OndnaHRANDAwOzcwMCZmYW1pbHk9SWJhcnJhK1JlYWwrTm92YTp3Z2h0QDUwMDs3MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gIC8qIENvbG9ycyAqL1xcbiAgLS1waW5rOiAjZmZjNGViO1xcbiAgLS10YW46ICNlMWRhYmQ7XFxuICAtLXdoaXRlOiAjZmRmZWZkO1xcbiAgLS1ibGFjazogIzBkMTAxMDtcXG4gIC0tZ3JlZW46ICNhYmM3OTg7XFxuICAtLWJnYy1jb250YWluZXI6IHJnYmEoMCwgMCwgMCwgMC44KTtcXG5cXG4gIC8qIEZvbnRzICovXFxuICAtLWZmLXRpdGxlOiBcXFwiQ2F2ZWF0XFxcIiwgc2VyaWY7XFxuICAtLWZmLW5hdjogXFxcIkliYXJyYSBSZWFsIE5vdmFcXFwiLCBzZXJpZjtcXG4gIC0tZmYtY29udGVudDogXFxcIkNhdmVhdFxcXCIsIHNlcmlmO1xcbiAgLS1mZi1sZWdlbmQ6IFxcXCJJYmFycmEgUmVhbCBOb3ZhXFxcIiwgc2VyaWY7XFxufVxcblxcbi8qIENTUyBSRVNFVCAqL1xcblxcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5odG1sIHtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjY7XFxuXFxuICAvKiBmb290ZXIgc3VwcG9ydCAqL1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWluLWhlaWdodDogMTAwJTtcXG59XFxuXFxuYm9keSB7XFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICB3aWR0aDogMTAwdnc7XFxuICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuXFxuICAvKiBmb290ZXIgc3VwcG9ydCAqL1xcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG59XFxuXFxuLm1haW5Db250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogMTAwdnc7XFxuICBnYXA6IDFyZW07XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcbn1cXG5cXG4udGl0bGUge1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZmLXRpdGxlKTtcXG4gIGZvbnQtc2l6ZTogOHJlbTtcXG4gIHBhZGRpbmctcmlnaHQ6IDEuNXJlbTtcXG4gIGNvbG9yOiB2YXIoLS1ibGFjayk7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5uYXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMXJlbTtcXG59XFxuXFxuLm5hdiAuYnRuIHtcXG4gIHdpZHRoOiAxNTBweDtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mZi1uYXYpO1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgY29sb3I6IHZhcigtLWJsYWNrKTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXG59XFxuXFxuLmJ0bjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qIENvbnRlbnQgKi9cXG5cXG4uY29udGVudENvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XFxuXFxuLyogSG9tZSBDb250ZW50ICovXFxuXFxuLmhvbWVDb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA0cmVtO1xcbiAgaGVpZ2h0OiA1MHJlbTtcXG4gIHdpZHRoOiA1MHJlbTtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mZi1sZWdlbmQpO1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWJnYy1jb250YWluZXIpO1xcbiAgYW5pbWF0aW9uOiBmYWRlSW4gMXM7XFxufVxcblxcbi5zdWJUYWdMaW5lIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuLmhlcm9JbWFnZSB7XFxuICB3aWR0aDogNjAlO1xcbiAgaGVpZ2h0OiA2MCU7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4vKiBNZW51IENvbnRlbnQgKi9cXG5cXG4ubWVudUNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tYmdjLWNvbnRhaW5lcik7XFxuICBhbmltYXRpb246IGZhZGVJbiAxcztcXG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcXG59XFxuXFxuLmZpZWxkc2V0IHtcXG4gIG1hcmdpbjogMnJlbSAycmVtO1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0td2hpdGUpO1xcbn1cXG5cXG4ubGVnZW5kIHtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mZi1sZWdlbmQpO1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmNvbnRlbnRTZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMnJlbTtcXG4gIG1hcmdpbjogMnJlbSAycmVtO1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZmLWNvbnRlbnQpO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgZm9udC13ZWlnaHQ6IDgwMDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmNvbnRlbnRTZWN0aW9uIHAge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uc3ViVGV4dCB7XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZmLW5hdik7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBtYXgtd2lkdGg6IDI1cmVtO1xcbn1cXG5cXG4vKiBDb250YWN0IENvbnRlbnQgKi9cXG5cXG4uY29udGFjdENvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGhlaWdodDogNDVyZW07XFxuICB3aWR0aDogNTByZW07XFxuICBmb250LXNpemU6IDJyZW07XFxuICBnYXA6IDJyZW07XFxuICBwYWRkaW5nOiAycmVtIDJyZW07XFxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tYmdjLWNvbnRhaW5lcik7XFxuICBhbmltYXRpb246IGZhZGVJbiAxcztcXG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcXG59XFxuXFxuLmNvbnRhY3RNYXAge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi8qIFNjcm9sbGJhciAqL1xcbi8qIHdpZHRoICovXFxuOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICB3aWR0aDogMC41cmVtO1xcbn1cXG5cXG4vKiBUcmFjayAqL1xcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcbiAgYmFja2dyb3VuZDogI2YxZjFmMTtcXG59XFxuXFxuLyogSGFuZGxlICovXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICBiYWNrZ3JvdW5kOiAjODg4O1xcbn1cXG5cXG4vKiBIYW5kbGUgb24gaG92ZXIgKi9cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6ICM1NTU7XFxufVxcblxcbi8qIEFuaW1hdGlvbnMgKi9cXG5cXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuXFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG59XFxuXFxuLyogRk9PVEVSICovXFxuXFxuLmZvb3RlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMXJlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMXJlbSAwO1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZmLW5hdik7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZ2MtY29udGFpbmVyKTtcXG59XFxuXFxuLmZhLWdpdGh1YiB7XFxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmZhLWdpdGh1Yjpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpIHNjYWxlKDEuMik7XFxufVxcblxcbi8qIE1lZGlhIFF1ZXJpZXMgKi9cXG5AbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XFxuICBodG1sIHtcXG4gICAgZm9udC1zaXplOiAxMDAlO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcXG4gIGh0bWwge1xcbiAgICBmb250LXNpemU6IDgwJTtcXG4gIH1cXG4gIC5jb250ZW50U2VjdGlvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xcbiAgaHRtbCB7XFxuICAgIGZvbnQtc2l6ZTogNjAlO1xcbiAgfVxcbiAgLmNvbnRlbnRTZWN0aW9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XFxuICBodG1sIHtcXG4gICAgZm9udC1zaXplOiA1MCU7XFxuICB9XFxuICAuY29udGVudFNlY3Rpb24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNDI1cHgpIHtcXG4gIGh0bWwge1xcbiAgICBmb250LXNpemU6IDQwJTtcXG4gIH1cXG4gIC5jb250ZW50U2VjdGlvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiAyOTBweCkge1xcbiAgaHRtbCB7XFxuICAgIGZvbnQtc2l6ZTogMzUlO1xcbiAgfVxcbiAgLmNvbnRlbnRTZWN0aW9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9tYWluLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLFdBQVc7RUFDWCxlQUFlO0VBQ2YsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLG1DQUFtQzs7RUFFbkMsVUFBVTtFQUNWLDJCQUEyQjtFQUMzQixtQ0FBbUM7RUFDbkMsNkJBQTZCO0VBQzdCLHNDQUFzQztBQUN4Qzs7QUFFQSxjQUFjOztBQUVkOzs7RUFHRSxzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7O0VBRWhCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixtREFBNEM7RUFDNUMsNEJBQTRCO0VBQzVCLHNCQUFzQjs7RUFFdEIs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QUNFO0lBQ0UsZUFBZTtFQUNqQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxjQUFjO0VBQ2hCO0VBQ0E7SUFDRSxhQUFhO0lBQ2Isc0JBQXNCO0VBQ3hCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGNBQWM7RUFDaEI7RUFDQTtJQUNFLGFBQWE7SUFDYixzQkFBc0I7RUFDeEI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsY0FBYztFQUNoQjtFQUNBO0lBQ0UsYUFBYTtJQUNiLHNCQUFzQjtFQUN4QjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxjQUFjO0VBQ2hCO0VBQ0E7SUFDRSxhQUFhO0lBQ2Isc0JBQXNCO0VBQ3hCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGNBQWM7RUFDaEI7RUFDQTtJQUNFLGFBQWE7SUFDYixzQkFBc0I7RUFDeEI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1DYXZlYXQ6d2dodEA0MDA7NzAwJmZhbWlseT1JYmFycmErUmVhbCtOb3ZhOndnaHRANTAwOzcwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXG5cXG46cm9vdCB7XFxuICAvKiBDb2xvcnMgKi9cXG4gIC0tcGluazogI2ZmYzRlYjtcXG4gIC0tdGFuOiAjZTFkYWJkO1xcbiAgLS13aGl0ZTogI2ZkZmVmZDtcXG4gIC0tYmxhY2s6ICMwZDEwMTA7XFxuICAtLWdyZWVuOiAjYWJjNzk4O1xcbiAgLS1iZ2MtY29udGFpbmVyOiByZ2JhKDAsIDAsIDAsIDAuOCk7XFxuXFxuICAvKiBGb250cyAqL1xcbiAgLS1mZi10aXRsZTogXFxcIkNhdmVhdFxcXCIsIHNlcmlmO1xcbiAgLS1mZi1uYXY6IFxcXCJJYmFycmEgUmVhbCBOb3ZhXFxcIiwgc2VyaWY7XFxuICAtLWZmLWNvbnRlbnQ6IFxcXCJDYXZlYXRcXFwiLCBzZXJpZjtcXG4gIC0tZmYtbGVnZW5kOiBcXFwiSWJhcnJhIFJlYWwgTm92YVxcXCIsIHNlcmlmO1xcbn1cXG5cXG4vKiBDU1MgUkVTRVQgKi9cXG5cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuaHRtbCB7XFxuICBmb250LXNpemU6IDEwMCU7XFxuICBsaW5lLWhlaWdodDogMS42O1xcblxcbiAgLyogZm9vdGVyIHN1cHBvcnQgKi9cXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XFxufVxcblxcbmJvZHkge1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgYmFja2dyb3VuZDogdXJsKFxcXCIvc3JjL2Fzc2V0L2JhY2tncm91bmQuanBnXFxcIik7XFxuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG5cXG4gIC8qIGZvb3RlciBzdXBwb3J0ICovXFxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbn1cXG5cXG4ubWFpbkNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGdhcDogMXJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxufVxcblxcbi50aXRsZSB7XFxuICBmb250LWZhbWlseTogdmFyKC0tZmYtdGl0bGUpO1xcbiAgZm9udC1zaXplOiA4cmVtO1xcbiAgcGFkZGluZy1yaWdodDogMS41cmVtO1xcbiAgY29sb3I6IHZhcigtLWJsYWNrKTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLm5hdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4ubmF2IC5idG4ge1xcbiAgd2lkdGg6IDE1MHB4O1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZmLW5hdik7XFxuICBmb250LXNpemU6IDNyZW07XFxuICBjb2xvcjogdmFyKC0tYmxhY2spO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcbn1cXG5cXG4uYnRuOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLyogQ29udGVudCAqL1xcblxcbi5jb250ZW50Q29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbn1cXG5cXG4vKiBIb21lIENvbnRlbnQgKi9cXG5cXG4uaG9tZUNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDRyZW07XFxuICBoZWlnaHQ6IDUwcmVtO1xcbiAgd2lkdGg6IDUwcmVtO1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZmLWxlZ2VuZCk7XFxuICBmb250LXNpemU6IDNyZW07XFxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tYmdjLWNvbnRhaW5lcik7XFxuICBhbmltYXRpb246IGZhZGVJbiAxcztcXG59XFxuXFxuLnN1YlRhZ0xpbmUge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4uaGVyb0ltYWdlIHtcXG4gIHdpZHRoOiA2MCU7XFxuICBoZWlnaHQ6IDYwJTtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblxcbi8qIE1lbnUgQ29udGVudCAqL1xcblxcbi5tZW51Q29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZ2MtY29udGFpbmVyKTtcXG4gIGFuaW1hdGlvbjogZmFkZUluIDFzO1xcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xcbn1cXG5cXG4uZmllbGRzZXQge1xcbiAgbWFyZ2luOiAycmVtIDJyZW07XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS13aGl0ZSk7XFxufVxcblxcbi5sZWdlbmQge1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZmLWxlZ2VuZCk7XFxuICBmb250LXNpemU6IDNyZW07XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uY29udGVudFNlY3Rpb24ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAycmVtO1xcbiAgbWFyZ2luOiAycmVtIDJyZW07XFxuICBmb250LWZhbWlseTogdmFyKC0tZmYtY29udGVudCk7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBmb250LXdlaWdodDogODAwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uY29udGVudFNlY3Rpb24gcCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5zdWJUZXh0IHtcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxuICBmb250LWZhbWlseTogdmFyKC0tZmYtbmF2KTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIG1heC13aWR0aDogMjVyZW07XFxufVxcblxcbi8qIENvbnRhY3QgQ29udGVudCAqL1xcblxcbi5jb250YWN0Q29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgaGVpZ2h0OiA0NXJlbTtcXG4gIHdpZHRoOiA1MHJlbTtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGdhcDogMnJlbTtcXG4gIHBhZGRpbmc6IDJyZW0gMnJlbTtcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZ2MtY29udGFpbmVyKTtcXG4gIGFuaW1hdGlvbjogZmFkZUluIDFzO1xcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xcbn1cXG5cXG4uY29udGFjdE1hcCB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLyogU2Nyb2xsYmFyICovXFxuLyogd2lkdGggKi9cXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIHdpZHRoOiAwLjVyZW07XFxufVxcblxcbi8qIFRyYWNrICovXFxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxuICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xcbn1cXG5cXG4vKiBIYW5kbGUgKi9cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gIGJhY2tncm91bmQ6ICM4ODg7XFxufVxcblxcbi8qIEhhbmRsZSBvbiBob3ZlciAqL1xcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogIzU1NTtcXG59XFxuXFxuLyogQW5pbWF0aW9ucyAqL1xcblxcbkBrZXlmcmFtZXMgZmFkZUluIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG5cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cXG5cXG4vKiBGT09URVIgKi9cXG5cXG4uZm9vdGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAxcmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAxcmVtIDA7XFxuICBmb250LWZhbWlseTogdmFyKC0tZmYtbmF2KTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnYy1jb250YWluZXIpO1xcbn1cXG5cXG4uZmEtZ2l0aHViIHtcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uZmEtZ2l0aHViOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZykgc2NhbGUoMS4yKTtcXG59XFxuXFxuLyogTWVkaWEgUXVlcmllcyAqL1xcbkBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIHtcXG4gIGh0bWwge1xcbiAgICBmb250LXNpemU6IDEwMCU7XFxuICB9XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xcbiAgaHRtbCB7XFxuICAgIGZvbnQtc2l6ZTogODAlO1xcbiAgfVxcbiAgLmNvbnRlbnRTZWN0aW9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxuICBodG1sIHtcXG4gICAgZm9udC1zaXplOiA2MCU7XFxuICB9XFxuICAuY29udGVudFNlY3Rpb24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcXG4gIGh0bWwge1xcbiAgICBmb250LXNpemU6IDUwJTtcXG4gIH1cXG4gIC5jb250ZW50U2VjdGlvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA0MjVweCkge1xcbiAgaHRtbCB7XFxuICAgIGZvbnQtc2l6ZTogNDAlO1xcbiAgfVxcbiAgLmNvbnRlbnRTZWN0aW9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDI5MHB4KSB7XFxuICBodG1sIHtcXG4gICAgZm9udC1zaXplOiAzNSU7XFxuICB9XFxuICAuY29udGVudFNlY3Rpb24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0LyBcXG4gICB2Mi4wIHwgMjAxMTAxMjZcXG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxcbiovXFxuXFxuaHRtbCxcXG5ib2R5LFxcbmRpdixcXG5zcGFuLFxcbmFwcGxldCxcXG5vYmplY3QsXFxuaWZyYW1lLFxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2LFxcbnAsXFxuYmxvY2txdW90ZSxcXG5wcmUsXFxuYSxcXG5hYmJyLFxcbmFjcm9ueW0sXFxuYWRkcmVzcyxcXG5iaWcsXFxuY2l0ZSxcXG5jb2RlLFxcbmRlbCxcXG5kZm4sXFxuZW0sXFxuaW1nLFxcbmlucyxcXG5rYmQsXFxucSxcXG5zLFxcbnNhbXAsXFxuc21hbGwsXFxuc3RyaWtlLFxcbnN0cm9uZyxcXG5zdWIsXFxuc3VwLFxcbnR0LFxcbnZhcixcXG5iLFxcbnUsXFxuaSxcXG5jZW50ZXIsXFxuZGwsXFxuZHQsXFxuZGQsXFxub2wsXFxudWwsXFxubGksXFxuZmllbGRzZXQsXFxuZm9ybSxcXG5sYWJlbCxcXG5sZWdlbmQsXFxudGFibGUsXFxuY2FwdGlvbixcXG50Ym9keSxcXG50Zm9vdCxcXG50aGVhZCxcXG50cixcXG50aCxcXG50ZCxcXG5hcnRpY2xlLFxcbmFzaWRlLFxcbmNhbnZhcyxcXG5kZXRhaWxzLFxcbmVtYmVkLFxcbmZpZ3VyZSxcXG5maWdjYXB0aW9uLFxcbmZvb3RlcixcXG5oZWFkZXIsXFxuaGdyb3VwLFxcbm1lbnUsXFxubmF2LFxcbm91dHB1dCxcXG5ydWJ5LFxcbnNlY3Rpb24sXFxuc3VtbWFyeSxcXG50aW1lLFxcbm1hcmssXFxuYXVkaW8sXFxudmlkZW8ge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogMDtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLFxcbmFzaWRlLFxcbmRldGFpbHMsXFxuZmlnY2FwdGlvbixcXG5maWd1cmUsXFxuZm9vdGVyLFxcbmhlYWRlcixcXG5oZ3JvdXAsXFxubWVudSxcXG5uYXYsXFxuc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuYm9keSB7XFxuICBsaW5lLWhlaWdodDogMTtcXG59XFxub2wsXFxudWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuYmxvY2txdW90ZSxcXG5xIHtcXG4gIHF1b3Rlczogbm9uZTtcXG59XFxuYmxvY2txdW90ZTpiZWZvcmUsXFxuYmxvY2txdW90ZTphZnRlcixcXG5xOmJlZm9yZSxcXG5xOmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgY29udGVudDogbm9uZTtcXG59XFxudGFibGUge1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gIGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3Jlc2V0LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7O0NBR0M7O0FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQWlGRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLFNBQVM7RUFDVCxlQUFlO0VBQ2YsYUFBYTtFQUNiLHdCQUF3QjtBQUMxQjtBQUNBLGdEQUFnRDtBQUNoRDs7Ozs7Ozs7Ozs7RUFXRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7O0VBRUUsZ0JBQWdCO0FBQ2xCO0FBQ0E7O0VBRUUsWUFBWTtBQUNkO0FBQ0E7Ozs7RUFJRSxXQUFXO0VBQ1gsYUFBYTtBQUNmO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsaUJBQWlCO0FBQ25CXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxcbiAgIHYyLjAgfCAyMDExMDEyNlxcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXFxuKi9cXG5cXG5odG1sLFxcbmJvZHksXFxuZGl2LFxcbnNwYW4sXFxuYXBwbGV0LFxcbm9iamVjdCxcXG5pZnJhbWUsXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYsXFxucCxcXG5ibG9ja3F1b3RlLFxcbnByZSxcXG5hLFxcbmFiYnIsXFxuYWNyb255bSxcXG5hZGRyZXNzLFxcbmJpZyxcXG5jaXRlLFxcbmNvZGUsXFxuZGVsLFxcbmRmbixcXG5lbSxcXG5pbWcsXFxuaW5zLFxcbmtiZCxcXG5xLFxcbnMsXFxuc2FtcCxcXG5zbWFsbCxcXG5zdHJpa2UsXFxuc3Ryb25nLFxcbnN1YixcXG5zdXAsXFxudHQsXFxudmFyLFxcbmIsXFxudSxcXG5pLFxcbmNlbnRlcixcXG5kbCxcXG5kdCxcXG5kZCxcXG5vbCxcXG51bCxcXG5saSxcXG5maWVsZHNldCxcXG5mb3JtLFxcbmxhYmVsLFxcbmxlZ2VuZCxcXG50YWJsZSxcXG5jYXB0aW9uLFxcbnRib2R5LFxcbnRmb290LFxcbnRoZWFkLFxcbnRyLFxcbnRoLFxcbnRkLFxcbmFydGljbGUsXFxuYXNpZGUsXFxuY2FudmFzLFxcbmRldGFpbHMsXFxuZW1iZWQsXFxuZmlndXJlLFxcbmZpZ2NhcHRpb24sXFxuZm9vdGVyLFxcbmhlYWRlcixcXG5oZ3JvdXAsXFxubWVudSxcXG5uYXYsXFxub3V0cHV0LFxcbnJ1YnksXFxuc2VjdGlvbixcXG5zdW1tYXJ5LFxcbnRpbWUsXFxubWFyayxcXG5hdWRpbyxcXG52aWRlbyB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyOiAwO1xcbiAgZm9udC1zaXplOiAxMDAlO1xcbiAgZm9udDogaW5oZXJpdDtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsXFxuYXNpZGUsXFxuZGV0YWlscyxcXG5maWdjYXB0aW9uLFxcbmZpZ3VyZSxcXG5mb290ZXIsXFxuaGVhZGVyLFxcbmhncm91cCxcXG5tZW51LFxcbm5hdixcXG5zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5ib2R5IHtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5vbCxcXG51bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlLFxcbnEge1xcbiAgcXVvdGVzOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlOmJlZm9yZSxcXG5ibG9ja3F1b3RlOmFmdGVyLFxcbnE6YmVmb3JlLFxcbnE6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBjb250ZW50OiBub25lO1xcbn1cXG50YWJsZSB7XFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcmVzZXQuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9yZXNldC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHJlc2V0IGZyb20gXCIuL3N0eWxlcy9yZXNldC5jc3NcIjtcbmltcG9ydCBjc3MgZnJvbSBcIi4vc3R5bGVzL21haW4uY3NzXCI7XG5pbXBvcnQgZ2VuZXJhdGVIb21lIGZyb20gXCIuL3BhZ2VzL2dlbmVyYXRlSG9tZVwiO1xuaW1wb3J0IGdlbmVyYXRlTWVudSBmcm9tIFwiLi9wYWdlcy9nZW5lcmF0ZU1lbnVcIjtcbmltcG9ydCBnZW5lcmF0ZUNvbnRhY3QgZnJvbSBcIi4vcGFnZXMvZ2VuZXJhdGVDb250YWN0XCI7XG5cbmNvbnN0IGhlYWQgPSBkb2N1bWVudC5oZWFkO1xuY29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHk7XG5jb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuLy8gSGVhZGVyXG5jb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xuY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG5cbi8vIE5hdlxuY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm5hdlwiKTtcbmNvbnN0IGhvbWVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5jb25zdCBjb250YWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblxuLy8gQ29udGVudFxuY29uc3QgY29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbi8vIENyZWF0aW5nIENsYXNzZXNcbm1haW5Db250YWluZXIuY2xhc3NMaXN0LmFkZChcIm1haW5Db250YWluZXJcIik7XG5oZWFkZXIuY2xhc3NMaXN0LmFkZChcImhlYWRlclwiKTtcbnRpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0aXRsZVwiKTtcbm5hdi5jbGFzc0xpc3QuYWRkKFwibmF2XCIpO1xuaG9tZUJ0bi5jbGFzc0xpc3QuYWRkKFwiaG9tZUJ0blwiKTtcbmhvbWVCdG4uY2xhc3NMaXN0LmFkZChcImJ0blwiKTtcbm1lbnVCdG4uY2xhc3NMaXN0LmFkZChcIm1lbnVCdG5cIik7XG5tZW51QnRuLmNsYXNzTGlzdC5hZGQoXCJidG5cIik7XG5jb250YWN0QnRuLmNsYXNzTGlzdC5hZGQoXCJjb250YWN0QnRuXCIpO1xuY29udGFjdEJ0bi5jbGFzc0xpc3QuYWRkKFwiYnRuXCIpO1xuY29udGVudENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY29udGVudENvbnRhaW5lclwiKTtcblxuLy8gQWRkaW5nIHRleHRDb250ZW50XG50aXRsZS50ZXh0Q29udGVudCA9IFwiQ3VsaW5hcnkgQ29tcG91bmRcIjtcbmhvbWVCdG4udGV4dENvbnRlbnQgPSBcIkhvbWVcIjtcbm1lbnVCdG4udGV4dENvbnRlbnQgPSBcIk1lbnVcIjtcbmNvbnRhY3RCdG4udGV4dENvbnRlbnQgPSBcIkNvbnRhY3RcIjtcblxuLy8gQnVpbGRpbmcgSFRNTCBTdHJ1Y3R1cmVcbmJvZHkuYXBwZW5kQ2hpbGQobWFpbkNvbnRhaW5lcik7XG5tYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRlcik7XG5tYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKG5hdik7XG5tYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRlbnRDb250YWluZXIpO1xuaGVhZGVyLmFwcGVuZENoaWxkKHRpdGxlKTtcbmhlYWRlci5hcHBlbmRDaGlsZChuYXYpO1xubmF2LmFwcGVuZENoaWxkKGhvbWVCdG4pO1xubmF2LmFwcGVuZENoaWxkKG1lbnVCdG4pO1xubmF2LmFwcGVuZENoaWxkKGNvbnRhY3RCdG4pO1xuY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChnZW5lcmF0ZUhvbWUoKSk7XG5cbi8vIEJ1dHRvbiBPbiBDbGlja1xuaG9tZUJ0bi5vbmNsaWNrID0gKCkgPT4ge1xuICBjb250ZW50Q29udGFpbmVyLnJlcGxhY2VDaGlsZHJlbigpO1xuICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGdlbmVyYXRlSG9tZSgpKTtcbn07XG5tZW51QnRuLm9uY2xpY2sgPSAoKSA9PiB7XG4gIGNvbnRlbnRDb250YWluZXIucmVwbGFjZUNoaWxkcmVuKCk7XG4gIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoZ2VuZXJhdGVNZW51KCkpO1xufTtcbmNvbnRhY3RCdG4ub25jbGljayA9ICgpID0+IHtcbiAgY29udGVudENvbnRhaW5lci5yZXBsYWNlQ2hpbGRyZW4oKTtcbiAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChnZW5lcmF0ZUNvbnRhY3QoKSk7XG59O1xuXG4vLyBGb290ZXIgU2NyaXB0XG5jb25zdCBmb290ZXJTY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xuZm9vdGVyU2NyaXB0LnNyYyA9IFwiaHR0cHM6Ly9raXQuZm9udGF3ZXNvbWUuY29tL2FhMjdlZTRkZmYuanNcIjtcbmZvb3RlclNjcmlwdC5jcm9zc09yaWdpbiA9IFwiYW5vbnltb3VzXCI7XG5oZWFkLmFwcGVuZENoaWxkKGZvb3RlclNjcmlwdCk7XG5cbi8vIEZvb3RlclxuXG5jb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuZm9vdGVyLmNsYXNzTGlzdC5hZGQoXCJmb290ZXJcIik7XG5mb290ZXIuaW5uZXJIVE1MID0gYDxwPlxuQ29weXJpZ2h0IMKpXG48c2NyaXB0PlxuICBkb2N1bWVudC53cml0ZShuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCkpO1xuPC9zY3JpcHQ+XG5Db2RpbmdXaXRoRHVkZVxuPC9wPlxuPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9jb2Rpbmd3aXRoZHVkZVwiIHRhcmdldD1cIl9ibGFua1wiPlxuPGkgY2xhc3M9XCJmYWIgZmEtZ2l0aHViXCI+PC9pXG4+PC9hPmA7XG5ib2R5LmFwcGVuZENoaWxkKGZvb3Rlcik7XG4iLCJpbXBvcnQgbG9jYXRpb24gZnJvbSBcIi4uL2Fzc2V0L3Jlc3RhdXJhbnQtbG9jYXRpb24ucG5nXCI7XG5mdW5jdGlvbiBnZW5lcmF0ZUNvbnRhY3QoKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250ZW50LmNsYXNzTGlzdC5hZGQoXCJjb250YWN0Q29udGVudFwiKTtcblxuICBjb25zdCBwaG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBwaG9uZS50ZXh0Q29udGVudCA9IFwiUGhvbmU6IDEyMy00NTYtNzg5MFwiO1xuXG4gIGNvbnN0IGFkZHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgYWRkcmVzcy50ZXh0Q29udGVudCA9IFwiQWRkcmVzczogSG9sbHl3b29kIEJvdWxldmFyZCA0MiwgTG9zIEFuZ2VsZXNcIjtcblxuICBjb25zdCBtYXAgPSBuZXcgSW1hZ2UoKTtcbiAgbWFwLnNyYyA9IGxvY2F0aW9uO1xuICBtYXAuY2xhc3NMaXN0LmFkZChcImNvbnRhY3RNYXBcIik7XG5cbiAgY29udGVudC5hcHBlbmRDaGlsZChwaG9uZSk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYWRkcmVzcyk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWFwKTtcblxuICByZXR1cm4gY29udGVudDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2VuZXJhdGVDb250YWN0O1xuIiwiaW1wb3J0IGhlcm9JbWFnZSBmcm9tIFwiLi4vYXNzZXQvaGVyb0ltYWdlLnBuZ1wiO1xuXG5mdW5jdGlvbiBnZW5lcmF0ZUhvbWUoKSB7XG4gIC8vIENvbnRlbnRcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHRhZ0xpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgaW1hZ2Uuc3JjID0gaGVyb0ltYWdlO1xuICBjb25zdCBjYWxsVG9BY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblxuICAvLyBDcmVhdGluZyBDbGFzc2VzXG4gIGNvbnRlbnQuY2xhc3NMaXN0LmFkZChcImhvbWVDb250ZW50XCIpO1xuICB0YWdMaW5lLmNsYXNzTGlzdC5hZGQoXCJ0YWdMaW5lXCIpO1xuICBpbWFnZS5jbGFzc0xpc3QuYWRkKFwiaGVyb0ltYWdlXCIpO1xuICBjYWxsVG9BY3Rpb24uY2xhc3NMaXN0LmFkZChcImNhbGxUb0FjdGlvblwiKTtcblxuICAvLyBBZGRpbmcgdGV4dENvbnRlbnRcbiAgdGFnTGluZS50ZXh0Q29udGVudCA9IFwiV2hlcmUgZXZlcnkgaW5ncmVkaWVudCB0ZWxscyBhIHN0b3J5XCI7XG4gIGNhbGxUb0FjdGlvbi50ZXh0Q29udGVudCA9IFwiUmVzZXJ2ZSBhIHRhYmxlIHRvZGF5XCI7XG5cbiAgLy8gQnVpbGRpbmcgSFRNTCBTdHJ1Y3R1cmVcbiAgY29udGVudC5hcHBlbmRDaGlsZCh0YWdMaW5lKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChpbWFnZSk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY2FsbFRvQWN0aW9uKTtcblxuICByZXR1cm4gY29udGVudDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2VuZXJhdGVIb21lO1xuIiwiZnVuY3Rpb24gZ2VuZXJhdGVNZW51KCkge1xuICAvLyBDb250ZW50XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250ZW50LmNsYXNzTGlzdC5hZGQoXCJtZW51Q29udGVudFwiKTtcblxuICAvLyBNZWF0IGFuZCBDaGVlc2VcbiAgY29uc3QgbWVhdENoZWVzZUZpZWxkc2V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZpZWxkc2V0XCIpO1xuICBtZWF0Q2hlZXNlRmllbGRzZXQuY2xhc3NMaXN0LmFkZChcImZpZWxkc2V0XCIpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKG1lYXRDaGVlc2VGaWVsZHNldCk7XG5cbiAgLy8gTGVnZW5kXG4gIGNvbnN0IG1lYXRDaGVlc2VMZWdlbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGVnZW5kXCIpO1xuICBtZWF0Q2hlZXNlTGVnZW5kLmNsYXNzTGlzdC5hZGQoXCJsZWdlbmRcIik7XG4gIG1lYXRDaGVlc2VMZWdlbmQuaW5uZXJUZXh0ID0gXCJNRUFUICYgQ0hFRVNFXCI7XG4gIG1lYXRDaGVlc2VGaWVsZHNldC5hcHBlbmRDaGlsZChtZWF0Q2hlZXNlTGVnZW5kKTtcblxuICAvLyBDb250ZW50XG4gIGNvbnN0IG1lYXRDaGVlc2VDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWVhdENoZWVzZUNvbnRlbnQuY2xhc3NMaXN0LmFkZChcImNvbnRlbnRTZWN0aW9uXCIpO1xuICBtZWF0Q2hlZXNlRmllbGRzZXQuYXBwZW5kQ2hpbGQobWVhdENoZWVzZUNvbnRlbnQpO1xuXG4gIGNvbnN0IE1PTElOQVJJX1NPUFJFU1NBVEEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgTU9MSU5BUklfU09QUkVTU0FUQS50ZXh0Q29udGVudCA9IFwiTU9MSU5BUkkgU09QUkVTU0FUQSA2XCI7XG4gIG1lYXRDaGVlc2VDb250ZW50LmFwcGVuZENoaWxkKE1PTElOQVJJX1NPUFJFU1NBVEEpO1xuXG4gIGNvbnN0IEhPVF9DT1BQQSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBIT1RfQ09QUEEudGV4dENvbnRlbnQgPSBcIkhPVCBDT1BQQSA3XCI7XG4gIG1lYXRDaGVlc2VDb250ZW50LmFwcGVuZENoaWxkKEhPVF9DT1BQQSk7XG5cbiAgY29uc3QgUFJPU0NJVVRUT19ESV9TQU5fREFOSUVMRSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBQUk9TQ0lVVFRPX0RJX1NBTl9EQU5JRUxFLnRleHRDb250ZW50ID0gXCJQUk9TQ0lVVFRPIERJIFNBTiBEQU5JRUxFIDhcIjtcbiAgbWVhdENoZWVzZUNvbnRlbnQuYXBwZW5kQ2hpbGQoUFJPU0NJVVRUT19ESV9TQU5fREFOSUVMRSk7XG5cbiAgY29uc3QgQlJFU0FPTEEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgQlJFU0FPTEEudGV4dENvbnRlbnQgPSBcIkJSRVNBT0xBIDdcIjtcbiAgbWVhdENoZWVzZUNvbnRlbnQuYXBwZW5kQ2hpbGQoQlJFU0FPTEEpO1xuXG4gIGNvbnN0IFBSQUlSSUVfQlJFRVpFX0NIRUREQVIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgUFJBSVJJRV9CUkVFWkVfQ0hFRERBUi50ZXh0Q29udGVudCA9IFwiUFJBSVJJRSBCUkVFWkUgQ0hFRERBUiA1XCI7XG4gIG1lYXRDaGVlc2VDb250ZW50LmFwcGVuZENoaWxkKFBSQUlSSUVfQlJFRVpFX0NIRUREQVIpO1xuXG4gIGNvbnN0IEFHRURfTUFOQ0hFR08gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgQUdFRF9NQU5DSEVHTy50ZXh0Q29udGVudCA9IFwiQUdFRCBNQU5DSEVHTyA0XCI7XG4gIG1lYXRDaGVlc2VDb250ZW50LmFwcGVuZENoaWxkKEFHRURfTUFOQ0hFR08pO1xuXG4gIGNvbnN0IERPTENFX0dPUkdPTlpPTEEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgRE9MQ0VfR09SR09OWk9MQS50ZXh0Q29udGVudCA9IFwiRE9MQ0UgR09SR09OWk9MQSA1XCI7XG4gIG1lYXRDaGVlc2VDb250ZW50LmFwcGVuZENoaWxkKERPTENFX0dPUkdPTlpPTEEpO1xuXG4gIGNvbnN0IFBJTUVOVE9fQ0hFRVNFID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIFBJTUVOVE9fQ0hFRVNFLnRleHRDb250ZW50ID0gXCJQSU1FTlRPIENIRUVTRSA2XCI7XG4gIG1lYXRDaGVlc2VDb250ZW50LmFwcGVuZENoaWxkKFBJTUVOVE9fQ0hFRVNFKTtcblxuICAvLyBTbmFja3NcbiAgY29uc3Qgc25hY2tzRmllbGRzZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZmllbGRzZXRcIik7XG4gIHNuYWNrc0ZpZWxkc2V0LmNsYXNzTGlzdC5hZGQoXCJmaWVsZHNldFwiKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChzbmFja3NGaWVsZHNldCk7XG5cbiAgLy8gTGVnZW5kXG4gIGNvbnN0IHNuYWNrc0xlZ2VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsZWdlbmRcIik7XG4gIHNuYWNrc0xlZ2VuZC5jbGFzc0xpc3QuYWRkKFwibGVnZW5kXCIpO1xuICBzbmFja3NMZWdlbmQuaW5uZXJUZXh0ID0gXCJTTkFDS1NcIjtcbiAgc25hY2tzRmllbGRzZXQuYXBwZW5kQ2hpbGQoc25hY2tzTGVnZW5kKTtcblxuICAvLyBDb250ZW50XG4gIGNvbnN0IHNuYWNrc0NvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBzbmFja3NDb250ZW50LmNsYXNzTGlzdC5hZGQoXCJjb250ZW50U2VjdGlvblwiKTtcbiAgc25hY2tzRmllbGRzZXQuYXBwZW5kQ2hpbGQoc25hY2tzQ29udGVudCk7XG5cbiAgY29uc3QgR09DSFVKQU5HX0JSVVNTRUxTX1NQUk9VVFMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgR09DSFVKQU5HX0JSVVNTRUxTX1NQUk9VVFMudGV4dENvbnRlbnQgPSBcIkdPQ0hVSkFORyBCUlVTU0VMUyBTUFJPVVRTIDdcIjtcbiAgc25hY2tzQ29udGVudC5hcHBlbmRDaGlsZChHT0NIVUpBTkdfQlJVU1NFTFNfU1BST1VUUyk7XG5cbiAgY29uc3QgQ1JVU1RZX0JSRUFEX0dBUkxJQ19PSUxfQkFMU0FNSUMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgQ1JVU1RZX0JSRUFEX0dBUkxJQ19PSUxfQkFMU0FNSUMudGV4dENvbnRlbnQgPVxuICAgIFwiQ1JVU1RZIEJSRUFELCBHQVJMSUMgT0lMICYgQkFMU0FNSUMgNFwiO1xuICBzbmFja3NDb250ZW50LmFwcGVuZENoaWxkKENSVVNUWV9CUkVBRF9HQVJMSUNfT0lMX0JBTFNBTUlDKTtcblxuICBjb25zdCBHUklMTEVEX0FTUEFSQUdVUyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBHUklMTEVEX0FTUEFSQUdVUy50ZXh0Q29udGVudCA9IFwiR1JJTExFRCBBU1BBUkFHVVMgNVwiO1xuICBzbmFja3NDb250ZW50LmFwcGVuZENoaWxkKEdSSUxMRURfQVNQQVJBR1VTKTtcblxuICBjb25zdCBNQVJJTkFURURfT0xJVkVTID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIE1BUklOQVRFRF9PTElWRVMudGV4dENvbnRlbnQgPSBcIk1BUklOQVRFRCBPTElWRVMgNVwiO1xuICBzbmFja3NDb250ZW50LmFwcGVuZENoaWxkKE1BUklOQVRFRF9PTElWRVMpO1xuXG4gIGNvbnN0IE1BUkNPTkFfQUxNT05EUyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBNQVJDT05BX0FMTU9ORFMudGV4dENvbnRlbnQgPSBcIk1BUkNPTkEgQUxNT05EUyA0XCI7XG4gIHNuYWNrc0NvbnRlbnQuYXBwZW5kQ2hpbGQoTUFSQ09OQV9BTE1PTkRTKTtcblxuICBjb25zdCBQUk9TQ0lVVFRPX0RFVklMRURfRUdHUyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBQUk9TQ0lVVFRPX0RFVklMRURfRUdHUy50ZXh0Q29udGVudCA9IFwiUFJPU0NJVVRUTyBERVZJTEVEIEVHR1MgNVwiO1xuICBzbmFja3NDb250ZW50LmFwcGVuZENoaWxkKFBST1NDSVVUVE9fREVWSUxFRF9FR0dTKTtcblxuICAvLyBTYWxhZHNcbiAgY29uc3Qgc2FsYWRzRmllbGRzZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZmllbGRzZXRcIik7XG4gIHNhbGFkc0ZpZWxkc2V0LmNsYXNzTGlzdC5hZGQoXCJmaWVsZHNldFwiKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChzYWxhZHNGaWVsZHNldCk7XG5cbiAgLy8gTGVnZW5kXG4gIGNvbnN0IHNhbGFkc0xlZ2VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsZWdlbmRcIik7XG4gIHNhbGFkc0xlZ2VuZC5jbGFzc0xpc3QuYWRkKFwibGVnZW5kXCIpO1xuICBzYWxhZHNMZWdlbmQuaW5uZXJUZXh0ID0gXCJTQUxBRFNcIjtcbiAgc2FsYWRzRmllbGRzZXQuYXBwZW5kQ2hpbGQoc2FsYWRzTGVnZW5kKTtcblxuICAvLyBDb250ZW50XG4gIGNvbnN0IHNhbGFkc0NvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBzYWxhZHNDb250ZW50LmNsYXNzTGlzdC5hZGQoXCJjb250ZW50U2VjdGlvblwiKTtcbiAgc2FsYWRzRmllbGRzZXQuYXBwZW5kQ2hpbGQoc2FsYWRzQ29udGVudCk7XG5cbiAgY29uc3QgQ0hFQVBfSE9VU0VfU0FMQUQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgQ0hFQVBfSE9VU0VfU0FMQUQudGV4dENvbnRlbnQgPSBcIkNIRUFQIEhPVVNFIFNBTEFEIDdcIjtcbiAgY29uc3QgQ0hFQVBfSE9VU0VfU0FMQURfU3ViVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBDSEVBUF9IT1VTRV9TQUxBRF9TdWJUZXh0LmNsYXNzTGlzdC5hZGQoXCJzdWJUZXh0XCIpO1xuICBDSEVBUF9IT1VTRV9TQUxBRF9TdWJUZXh0LnRleHRDb250ZW50ID0gXCJidXR0ZXJtaWxrIHJhbmNoXCI7XG4gIENIRUFQX0hPVVNFX1NBTEFELmFwcGVuZENoaWxkKENIRUFQX0hPVVNFX1NBTEFEX1N1YlRleHQpO1xuICBzYWxhZHNDb250ZW50LmFwcGVuZENoaWxkKENIRUFQX0hPVVNFX1NBTEFEKTtcblxuICBjb25zdCBMSVRUTEVfR0VNX0NBRVNBUiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBMSVRUTEVfR0VNX0NBRVNBUi50ZXh0Q29udGVudCA9IFwiTElUVExFIEdFTSBDQUVTQVIgMTNcIjtcbiAgY29uc3QgTElUVExFX0dFTV9DQUVTQVJfU3ViVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBMSVRUTEVfR0VNX0NBRVNBUl9TdWJUZXh0LmNsYXNzTGlzdC5hZGQoXCJzdWJUZXh0XCIpO1xuICBMSVRUTEVfR0VNX0NBRVNBUl9TdWJUZXh0LnRleHRDb250ZW50ID0gXCJzaGF2ZWQgcGFybWVzYW4sIGNyb3V0b25zXCI7XG4gIExJVFRMRV9HRU1fQ0FFU0FSLmFwcGVuZENoaWxkKExJVFRMRV9HRU1fQ0FFU0FSX1N1YlRleHQpO1xuICBzYWxhZHNDb250ZW50LmFwcGVuZENoaWxkKExJVFRMRV9HRU1fQ0FFU0FSKTtcblxuICBjb25zdCBTVFJBV0JFUlJZX0tBTEUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgU1RSQVdCRVJSWV9LQUxFLnRleHRDb250ZW50ID0gXCJTVFJBV0JFUlJZICYgS0FMRSAxNVwiO1xuICBjb25zdCBTVFJBV0JFUlJZX0tBTEVfU3ViVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBTVFJBV0JFUlJZX0tBTEVfU3ViVGV4dC5jbGFzc0xpc3QuYWRkKFwic3ViVGV4dFwiKTtcbiAgU1RSQVdCRVJSWV9LQUxFX1N1YlRleHQudGV4dENvbnRlbnQgPVxuICAgIFwiZmFycm8sIHNuYXAgcGVhLCBnb2xkZW4gcmFpc2luLCBzbW9rZWQgYWxtb25kLCBnb2F0IGNoZWVzZSwgcG9wcHlzZWVkIHZpbmFpZ3JldHRlXCI7XG4gIFNUUkFXQkVSUllfS0FMRS5hcHBlbmRDaGlsZChTVFJBV0JFUlJZX0tBTEVfU3ViVGV4dCk7XG4gIHNhbGFkc0NvbnRlbnQuYXBwZW5kQ2hpbGQoU1RSQVdCRVJSWV9LQUxFKTtcblxuICBjb25zdCBDSE9QUEVEX0NISUNLRU4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgQ0hPUFBFRF9DSElDS0VOLnRleHRDb250ZW50ID0gXCJDSE9QUEVEIENISUNLRU4gMTYuNVwiO1xuICBjb25zdCBDSE9QUEVEX0NISUNLRU5fU3ViVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBDSE9QUEVEX0NISUNLRU5fU3ViVGV4dC5jbGFzc0xpc3QuYWRkKFwic3ViVGV4dFwiKTtcbiAgQ0hPUFBFRF9DSElDS0VOX1N1YlRleHQudGV4dENvbnRlbnQgPVxuICAgIFwiYXZvY2FkbywgYmFjb24sIGhlaXJsb29tIHRvbWF0bywgd2hpdGUgY2hlZGRhciwgZGV2aWxlZCBlZ2csIGJhY29uIGJicSByYW5jaFwiO1xuICBDSE9QUEVEX0NISUNLRU4uYXBwZW5kQ2hpbGQoQ0hPUFBFRF9DSElDS0VOX1N1YlRleHQpO1xuICBzYWxhZHNDb250ZW50LmFwcGVuZENoaWxkKENIT1BQRURfQ0hJQ0tFTik7XG5cbiAgY29uc3QgV0VER0VEX0lDRUJFUkcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgV0VER0VEX0lDRUJFUkcudGV4dENvbnRlbnQgPSBcIldFREdFRCBJQ0VCRVJHIDE0LjVcIjtcbiAgY29uc3QgV0VER0VEX0lDRUJFUkdfU3ViVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBXRURHRURfSUNFQkVSR19TdWJUZXh0LmNsYXNzTGlzdC5hZGQoXCJzdWJUZXh0XCIpO1xuICBXRURHRURfSUNFQkVSR19TdWJUZXh0LnRleHRDb250ZW50ID1cbiAgICBcIm1hcGxlIGdsYXplZCBiYWNvbiwgaGVpcmxvb20gY2hlcnJ5IHRvbWF0bywgYXZvY2FkbywgY3JvdXRvbiwgYmx1ZSBjaGVlc2UgZHJlc3NpbmdcIjtcbiAgV0VER0VEX0lDRUJFUkcuYXBwZW5kQ2hpbGQoV0VER0VEX0lDRUJFUkdfU3ViVGV4dCk7XG4gIHNhbGFkc0NvbnRlbnQuYXBwZW5kQ2hpbGQoV0VER0VEX0lDRUJFUkcpO1xuXG4gIC8vIEVOVFJFRVNcbiAgY29uc3QgZW50cmVlc0ZpZWxkc2V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZpZWxkc2V0XCIpO1xuICBlbnRyZWVzRmllbGRzZXQuY2xhc3NMaXN0LmFkZChcImZpZWxkc2V0XCIpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGVudHJlZXNGaWVsZHNldCk7XG5cbiAgLy8gTGVnZW5kXG4gIGNvbnN0IGVudHJlZXNMZWdlbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGVnZW5kXCIpO1xuICBlbnRyZWVzTGVnZW5kLmNsYXNzTGlzdC5hZGQoXCJsZWdlbmRcIik7XG4gIGVudHJlZXNMZWdlbmQuaW5uZXJUZXh0ID0gXCJFTlRSw4lFU1wiO1xuICBlbnRyZWVzRmllbGRzZXQuYXBwZW5kQ2hpbGQoZW50cmVlc0xlZ2VuZCk7XG5cbiAgLy8gQ29udGVudFxuICBjb25zdCBlbnRyZWVzQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGVudHJlZXNDb250ZW50LmNsYXNzTGlzdC5hZGQoXCJjb250ZW50U2VjdGlvblwiKTtcbiAgZW50cmVlc0ZpZWxkc2V0LmFwcGVuZENoaWxkKGVudHJlZXNDb250ZW50KTtcblxuICBjb25zdCBIT1VSX1BPUktfUklCUyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBIT1VSX1BPUktfUklCUy50ZXh0Q29udGVudCA9IFwiMzYtSE9VUiBQT1JLIFJJQlMgMjdcIjtcbiAgY29uc3QgSE9VUl9QT1JLX1JJQlNfU3ViVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBIT1VSX1BPUktfUklCU19TdWJUZXh0LmNsYXNzTGlzdC5hZGQoXCJzdWJUZXh0XCIpO1xuICBIT1VSX1BPUktfUklCU19TdWJUZXh0LnRleHRDb250ZW50ID0gXCJqYWxhcGXDsW8sIG1vbGFzc2VzLCBmcmllc1wiO1xuICBIT1VSX1BPUktfUklCUy5hcHBlbmRDaGlsZChIT1VSX1BPUktfUklCU19TdWJUZXh0KTtcbiAgZW50cmVlc0NvbnRlbnQuYXBwZW5kQ2hpbGQoSE9VUl9QT1JLX1JJQlMpO1xuXG4gIGNvbnN0IE1FQVRMT0FGID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIE1FQVRMT0FGLnRleHRDb250ZW50ID0gXCJNQS4uLlRIRSBNRUFUTE9BRiE/ISAxOFwiO1xuICBjb25zdCBNRUFUTE9BRl9TdWJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIE1FQVRMT0FGX1N1YlRleHQuY2xhc3NMaXN0LmFkZChcInN1YlRleHRcIik7XG4gIE1FQVRMT0FGX1N1YlRleHQudGV4dENvbnRlbnQgPSBcImdyZWVuIGJlYW4sIHNtYXNoZWQgcG90YXRvLCBncmF2eVwiO1xuICBNRUFUTE9BRi5hcHBlbmRDaGlsZChNRUFUTE9BRl9TdWJUZXh0KTtcbiAgZW50cmVlc0NvbnRlbnQuYXBwZW5kQ2hpbGQoTUVBVExPQUYpO1xuXG4gIGNvbnN0IFJBSU5CT1dfVFJPVVQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgUkFJTkJPV19UUk9VVC50ZXh0Q29udGVudCA9IFwiUkFJTkJPVyBUUk9VVCAyM1wiO1xuICBjb25zdCBSQUlOQk9XX1RST1VUX1N1YlRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgUkFJTkJPV19UUk9VVF9TdWJUZXh0LmNsYXNzTGlzdC5hZGQoXCJzdWJUZXh0XCIpO1xuICBSQUlOQk9XX1RST1VUX1N1YlRleHQudGV4dENvbnRlbnQgPVxuICAgIFwiZnJlbmNoZWQgZ3JlZW4gYmVhbiwgdG9hc3RlZCBhbG1vbmQsIGNhcmFtZWxpemVkIHNoYWxsb3QsIGxlbW9uIGJyb3duIGJ1dHRlclwiO1xuICBSQUlOQk9XX1RST1VULmFwcGVuZENoaWxkKFJBSU5CT1dfVFJPVVRfU3ViVGV4dCk7XG4gIGVudHJlZXNDb250ZW50LmFwcGVuZENoaWxkKFJBSU5CT1dfVFJPVVQpO1xuXG4gIGNvbnN0IFNURUFLX0ZSSVRFUyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBTVEVBS19GUklURVMudGV4dENvbnRlbnQgPSBcIlNURUFLIEZSSVRFUyogMjkuNVwiO1xuICBjb25zdCBTVEVBS19GUklURVNfU3ViVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBTVEVBS19GUklURVNfU3ViVGV4dC5jbGFzc0xpc3QuYWRkKFwic3ViVGV4dFwiKTtcbiAgU1RFQUtfRlJJVEVTX1N1YlRleHQudGV4dENvbnRlbnQgPVxuICAgIFwicHJpbWUgc2tpcnQgc3RlYWssIGJsYWNrIHRydWZmbGUgYnV0dGVyLCBmcmVuY2ggZnJpZVwiO1xuICBTVEVBS19GUklURVMuYXBwZW5kQ2hpbGQoU1RFQUtfRlJJVEVTX1N1YlRleHQpO1xuICBlbnRyZWVzQ29udGVudC5hcHBlbmRDaGlsZChTVEVBS19GUklURVMpO1xuXG4gIGNvbnN0IE1BREVfVE9fT1JERVJfTEFTQUdOQSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBNQURFX1RPX09SREVSX0xBU0FHTkEudGV4dENvbnRlbnQgPSBcIk1BREUgVE8gT1JERVIgTEFTQUdOQSAxN1wiO1xuICBjb25zdCBNQURFX1RPX09SREVSX0xBU0FHTkFfU3ViVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBNQURFX1RPX09SREVSX0xBU0FHTkFfU3ViVGV4dC5jbGFzc0xpc3QuYWRkKFwic3ViVGV4dFwiKTtcbiAgTUFERV9UT19PUkRFUl9MQVNBR05BX1N1YlRleHQudGV4dENvbnRlbnQgPVxuICAgIFwic3VtbWVyIGNvcm4sIHNwaW5hY2ggcmljb3R0YSwgbW96emFyZWxsYSwgcG9tb2Rvcm8sIGdhcmxpYyBjaWFiYXR0YVwiO1xuICBNQURFX1RPX09SREVSX0xBU0FHTkEuYXBwZW5kQ2hpbGQoTUFERV9UT19PUkRFUl9MQVNBR05BX1N1YlRleHQpO1xuICBlbnRyZWVzQ29udGVudC5hcHBlbmRDaGlsZChNQURFX1RPX09SREVSX0xBU0FHTkEpO1xuXG4gIGNvbnN0IEZSSUVEX0NISUNLRU4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgRlJJRURfQ0hJQ0tFTi50ZXh0Q29udGVudCA9IFwiRlJJRUQgQ0hJQ0tFTiAxOC41XCI7XG4gIGNvbnN0IEZSSUVEX0NISUNLRU5fU3ViVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBGUklFRF9DSElDS0VOX1N1YlRleHQuY2xhc3NMaXN0LmFkZChcInN1YlRleHRcIik7XG4gIEZSSUVEX0NISUNLRU5fU3ViVGV4dC50ZXh0Q29udGVudCA9XG4gICAgXCJCdXR0ZXJtaWxrIGJpc2N1aXQsIHNtYXNoZWQgcG90YXRvLCBncmF2eSAoYmUgcGF0aWVudCAtIGl0J3Mgd29ydGggaXQhKVwiO1xuICBGUklFRF9DSElDS0VOLmFwcGVuZENoaWxkKEZSSUVEX0NISUNLRU5fU3ViVGV4dCk7XG4gIGVudHJlZXNDb250ZW50LmFwcGVuZENoaWxkKEZSSUVEX0NISUNLRU4pO1xuXG4gIGNvbnN0IFNQSUNZX0tPUkVBTl9TS0lSVF9TVEVBSyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBTUElDWV9LT1JFQU5fU0tJUlRfU1RFQUsudGV4dENvbnRlbnQgPSBcIlNQSUNZIEtPUkVBTiBTS0lSVCBTVEVBSyogMjkuNVwiO1xuICBjb25zdCBTUElDWV9LT1JFQU5fU0tJUlRfU1RFQUtfU3ViVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBTUElDWV9LT1JFQU5fU0tJUlRfU1RFQUtfU3ViVGV4dC5jbGFzc0xpc3QuYWRkKFwic3ViVGV4dFwiKTtcbiAgU1BJQ1lfS09SRUFOX1NLSVJUX1NURUFLX1N1YlRleHQudGV4dENvbnRlbnQgPVxuICAgIFwiZm9yYmlkZGVuIHJpY2UsIHp1Y2NoaW5pLCBtdXNocm9vbSwgZ2luZ2VyIGNoaWxpIHNhdWNlXCI7XG4gIFNQSUNZX0tPUkVBTl9TS0lSVF9TVEVBSy5hcHBlbmRDaGlsZChTUElDWV9LT1JFQU5fU0tJUlRfU1RFQUtfU3ViVGV4dCk7XG4gIGVudHJlZXNDb250ZW50LmFwcGVuZENoaWxkKFNQSUNZX0tPUkVBTl9TS0lSVF9TVEVBSyk7XG5cbiAgY29uc3QgQkVFUl9CQVRURVJFRF9GSVNIID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIEJFRVJfQkFUVEVSRURfRklTSC50ZXh0Q29udGVudCA9IFwiQkVFUiBCQVRURVJFRCBGSVNIICYgQ0hJUFMgMThcIjtcbiAgY29uc3QgQkVFUl9CQVRURVJFRF9GSVNIX1N1YlRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgQkVFUl9CQVRURVJFRF9GSVNIX1N1YlRleHQuY2xhc3NMaXN0LmFkZChcInN1YlRleHRcIik7XG4gIEJFRVJfQkFUVEVSRURfRklTSF9TdWJUZXh0LnRleHRDb250ZW50ID0gXCJjb2xlc2xhdywgdGFydGFyIHNhdWNlXCI7XG4gIEJFRVJfQkFUVEVSRURfRklTSC5hcHBlbmRDaGlsZChCRUVSX0JBVFRFUkVEX0ZJU0hfU3ViVGV4dCk7XG4gIGVudHJlZXNDb250ZW50LmFwcGVuZENoaWxkKEJFRVJfQkFUVEVSRURfRklTSCk7XG5cbiAgY29uc3QgU1BJQ1lfVkVHQU5fQ1VSUlkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgU1BJQ1lfVkVHQU5fQ1VSUlkudGV4dENvbnRlbnQgPSBcIlNQSUNZIFZFR0FOIENVUlJZIDE3XCI7XG4gIGNvbnN0IFNQSUNZX1ZFR0FOX0NVUlJZX1N1YlRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgU1BJQ1lfVkVHQU5fQ1VSUllfU3ViVGV4dC5jbGFzc0xpc3QuYWRkKFwic3ViVGV4dFwiKTtcbiAgU1BJQ1lfVkVHQU5fQ1VSUllfU3ViVGV4dC50ZXh0Q29udGVudCA9XG4gICAgXCJncmlkZGxlZCBzd2VldCBwb3RhdG8sIGVnZ3BsYW50LCBzbmFwIHBlYSwgY2F1bGlmbG93ZXIsIHNoaWl0YWtlIG11c2hyb29tLCBibGFjayByaWNlXCI7XG4gIFNQSUNZX1ZFR0FOX0NVUlJZLmFwcGVuZENoaWxkKFNQSUNZX1ZFR0FOX0NVUlJZX1N1YlRleHQpO1xuICBlbnRyZWVzQ29udGVudC5hcHBlbmRDaGlsZChTUElDWV9WRUdBTl9DVVJSWSk7XG5cbiAgY29uc3QgUk9BU1RFRF9TQUxNT04gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgUk9BU1RFRF9TQUxNT04udGV4dENvbnRlbnQgPSBcIlJPQVNURUQgU0FMTU9OKiAyNi41XCI7XG4gIGNvbnN0IFJPQVNURURfU0FMTU9OX1N1YlRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgUk9BU1RFRF9TQUxNT05fU3ViVGV4dC5jbGFzc0xpc3QuYWRkKFwic3ViVGV4dFwiKTtcbiAgUk9BU1RFRF9TQUxNT05fU3ViVGV4dC50ZXh0Q29udGVudCA9XG4gICAgXCJjcmVhbXkgZmFycm8sIHN3ZWV0IGNvcm4sIGJsaXN0ZXJlZCB0b21hdG8sIGFzcGFyYWd1cywgZ2FyZGVuIGhlcmIgcGVzdG9cIjtcbiAgUk9BU1RFRF9TQUxNT04uYXBwZW5kQ2hpbGQoUk9BU1RFRF9TQUxNT05fU3ViVGV4dCk7XG4gIGVudHJlZXNDb250ZW50LmFwcGVuZENoaWxkKFJPQVNURURfU0FMTU9OKTtcblxuICByZXR1cm4gY29udGVudDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2VuZXJhdGVNZW51O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9