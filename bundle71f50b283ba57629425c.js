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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  /* Colors */\n  --pink: #ffc4eb;\n  --tan: #e1dabd;\n  --white: #fdfefd;\n  --black: #0d1010;\n  --green: #abc798;\n  --bgc-container: rgba(0, 0, 0, 0.8);\n\n  /* Fonts */\n  --ff-title: \"Caveat\", serif;\n  --ff-nav: \"Ibarra Real Nova\", serif;\n  --ff-content: \"Caveat\", serif;\n  --ff-legend: \"Ibarra Real Nova\", serif;\n}\n\n/* CSS RESET */\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\nhtml {\n  font-size: 100%;\n  line-height: 1.6;\n\n  /* footer support */\n  position: relative;\n  min-height: 100%;\n}\n\nbody {\n  overflow-x: hidden;\n  width: 100vw;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-attachment: fixed;\n  background-size: cover;\n\n  /* footer support */\n  margin-bottom: 2rem;\n}\n\n.mainContainer {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.header {\n  display: flex;\n  flex-direction: column;\n  width: 100vw;\n  gap: 1rem;\n  margin-bottom: 1rem;\n  background-color: var(--white);\n}\n\n.title {\n  font-family: var(--ff-title);\n  font-size: 8rem;\n  color: var(--black);\n  text-align: center;\n}\n\n.nav {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n}\n\n.nav .btn {\n  width: 150px;\n  font-family: var(--ff-nav);\n  font-size: 3rem;\n  color: var(--black);\n  border: none;\n  background-color: var(--white);\n}\n\n.btn:hover {\n  cursor: pointer;\n}\n\n/* Content */\n\n.contentContainer {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 1rem;\n}\n\n/* Home Content */\n\n.homeContent {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 4rem;\n  height: 50rem;\n  width: 50rem;\n  font-family: var(--ff-legend);\n  font-size: 3rem;\n  color: var(--white);\n  background: var(--bgc-container);\n  animation: fadeIn 1s;\n}\n\n.subTagLine {\n  font-size: 2rem;\n}\n\n.heroImage {\n  width: 60%;\n  height: 60%;\n  opacity: 1;\n}\n\n/* Menu Content */\n\n.menuContent {\n  display: flex;\n  flex-direction: column;\n  color: var(--white);\n  background: var(--bgc-container);\n  animation: fadeIn 1s;\n  margin-bottom: 1.5rem;\n}\n\n.fieldset {\n  margin: 2rem 2rem;\n  border: 2px solid var(--white);\n}\n\n.legend {\n  font-family: var(--ff-legend);\n  font-size: 3rem;\n  font-weight: 700;\n  text-align: center;\n}\n\n.contentSection {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  justify-content: center;\n  gap: 2rem;\n  margin: 2rem 2rem;\n  font-family: var(--ff-content);\n  font-size: 2rem;\n  font-weight: 800;\n  text-align: center;\n}\n\n.contentSection p {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.subText {\n  margin-top: 1rem;\n  font-family: var(--ff-nav);\n  font-size: 1.5rem;\n  font-weight: 500;\n  max-width: 25rem;\n}\n\n/* Contact Content */\n\n.contactContent {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  height: 45rem;\n  width: 50rem;\n  font-size: 2rem;\n  gap: 2rem;\n  padding: 2rem 2rem;\n  color: var(--white);\n  background: var(--bgc-container);\n  animation: fadeIn 1s;\n  margin-bottom: 1.5rem;\n}\n\n.contactMap {\n  width: 100%;\n}\n\n/* Scrollbar */\n/* width */\n::-webkit-scrollbar {\n  width: 0.5rem;\n}\n\n/* Track */\n::-webkit-scrollbar-track {\n  background: #f1f1f1;\n}\n\n/* Handle */\n::-webkit-scrollbar-thumb {\n  background: #888;\n}\n\n/* Handle on hover */\n::-webkit-scrollbar-thumb:hover {\n  background: #555;\n}\n\n/* Animations */\n\n@keyframes fadeIn {\n  0% {\n    opacity: 0;\n  }\n\n  100% {\n    opacity: 1;\n  }\n}\n\n/* FOOTER */\n\n.footer {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 1rem;\n  width: 100%;\n  padding: 1rem 0;\n  font-family: var(--ff-nav);\n  font-size: 1.5rem;\n  color: var(--white);\n  background-color: var(--bgc-container);\n}\n\n.fa-github {\n  color: var(--white);\n  font-size: 1.5rem;\n  transition: transform 0.3s ease-in-out;\n}\n\n.fa-github:hover {\n  transform: rotate(360deg) scale(1.2);\n}\n\n/* Media Queries */\n@media (max-width: 1200px) {\n  html {\n    font-size: 100%;\n  }\n}\n\n@media (max-width: 992px) {\n  html {\n    font-size: 80%;\n  }\n  .contentSection {\n    display: flex;\n    flex-direction: column;\n  }\n}\n\n@media (max-width: 768px) {\n  html {\n    font-size: 60%;\n  }\n  .contentSection {\n    display: flex;\n    flex-direction: column;\n  }\n}\n\n@media (max-width: 576px) {\n  html {\n    font-size: 50%;\n  }\n  .contentSection {\n    display: flex;\n    flex-direction: column;\n  }\n}\n\n@media (max-width: 425px) {\n  html {\n    font-size: 40%;\n  }\n  .contentSection {\n    display: flex;\n    flex-direction: column;\n  }\n}\n\n@media (max-width: 290px) {\n  html {\n    font-size: 35%;\n  }\n  .contentSection {\n    display: flex;\n    flex-direction: column;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/styles/main.css"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&family=Ibarra+Real+Nova:wght@500;700&display=swap\");\n\n:root {\n  /* Colors */\n  --pink: #ffc4eb;\n  --tan: #e1dabd;\n  --white: #fdfefd;\n  --black: #0d1010;\n  --green: #abc798;\n  --bgc-container: rgba(0, 0, 0, 0.8);\n\n  /* Fonts */\n  --ff-title: \"Caveat\", serif;\n  --ff-nav: \"Ibarra Real Nova\", serif;\n  --ff-content: \"Caveat\", serif;\n  --ff-legend: \"Ibarra Real Nova\", serif;\n}\n\n/* CSS RESET */\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\nhtml {\n  font-size: 100%;\n  line-height: 1.6;\n\n  /* footer support */\n  position: relative;\n  min-height: 100%;\n}\n\nbody {\n  overflow-x: hidden;\n  width: 100vw;\n  background: url(\"/src/asset/background.jpg\");\n  background-attachment: fixed;\n  background-size: cover;\n\n  /* footer support */\n  margin-bottom: 2rem;\n}\n\n.mainContainer {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.header {\n  display: flex;\n  flex-direction: column;\n  width: 100vw;\n  gap: 1rem;\n  margin-bottom: 1rem;\n  background-color: var(--white);\n}\n\n.title {\n  font-family: var(--ff-title);\n  font-size: 8rem;\n  color: var(--black);\n  text-align: center;\n}\n\n.nav {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n}\n\n.nav .btn {\n  width: 150px;\n  font-family: var(--ff-nav);\n  font-size: 3rem;\n  color: var(--black);\n  border: none;\n  background-color: var(--white);\n}\n\n.btn:hover {\n  cursor: pointer;\n}\n\n/* Content */\n\n.contentContainer {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 1rem;\n}\n\n/* Home Content */\n\n.homeContent {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 4rem;\n  height: 50rem;\n  width: 50rem;\n  font-family: var(--ff-legend);\n  font-size: 3rem;\n  color: var(--white);\n  background: var(--bgc-container);\n  animation: fadeIn 1s;\n}\n\n.subTagLine {\n  font-size: 2rem;\n}\n\n.heroImage {\n  width: 60%;\n  height: 60%;\n  opacity: 1;\n}\n\n/* Menu Content */\n\n.menuContent {\n  display: flex;\n  flex-direction: column;\n  color: var(--white);\n  background: var(--bgc-container);\n  animation: fadeIn 1s;\n  margin-bottom: 1.5rem;\n}\n\n.fieldset {\n  margin: 2rem 2rem;\n  border: 2px solid var(--white);\n}\n\n.legend {\n  font-family: var(--ff-legend);\n  font-size: 3rem;\n  font-weight: 700;\n  text-align: center;\n}\n\n.contentSection {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  justify-content: center;\n  gap: 2rem;\n  margin: 2rem 2rem;\n  font-family: var(--ff-content);\n  font-size: 2rem;\n  font-weight: 800;\n  text-align: center;\n}\n\n.contentSection p {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.subText {\n  margin-top: 1rem;\n  font-family: var(--ff-nav);\n  font-size: 1.5rem;\n  font-weight: 500;\n  max-width: 25rem;\n}\n\n/* Contact Content */\n\n.contactContent {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  height: 45rem;\n  width: 50rem;\n  font-size: 2rem;\n  gap: 2rem;\n  padding: 2rem 2rem;\n  color: var(--white);\n  background: var(--bgc-container);\n  animation: fadeIn 1s;\n  margin-bottom: 1.5rem;\n}\n\n.contactMap {\n  width: 100%;\n}\n\n/* Scrollbar */\n/* width */\n::-webkit-scrollbar {\n  width: 0.5rem;\n}\n\n/* Track */\n::-webkit-scrollbar-track {\n  background: #f1f1f1;\n}\n\n/* Handle */\n::-webkit-scrollbar-thumb {\n  background: #888;\n}\n\n/* Handle on hover */\n::-webkit-scrollbar-thumb:hover {\n  background: #555;\n}\n\n/* Animations */\n\n@keyframes fadeIn {\n  0% {\n    opacity: 0;\n  }\n\n  100% {\n    opacity: 1;\n  }\n}\n\n/* FOOTER */\n\n.footer {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 1rem;\n  width: 100%;\n  padding: 1rem 0;\n  font-family: var(--ff-nav);\n  font-size: 1.5rem;\n  color: var(--white);\n  background-color: var(--bgc-container);\n}\n\n.fa-github {\n  color: var(--white);\n  font-size: 1.5rem;\n  transition: transform 0.3s ease-in-out;\n}\n\n.fa-github:hover {\n  transform: rotate(360deg) scale(1.2);\n}\n\n/* Media Queries */\n@media (max-width: 1200px) {\n  html {\n    font-size: 100%;\n  }\n}\n\n@media (max-width: 992px) {\n  html {\n    font-size: 80%;\n  }\n  .contentSection {\n    display: flex;\n    flex-direction: column;\n  }\n}\n\n@media (max-width: 768px) {\n  html {\n    font-size: 60%;\n  }\n  .contentSection {\n    display: flex;\n    flex-direction: column;\n  }\n}\n\n@media (max-width: 576px) {\n  html {\n    font-size: 50%;\n  }\n  .contentSection {\n    display: flex;\n    flex-direction: column;\n  }\n}\n\n@media (max-width: 425px) {\n  html {\n    font-size: 40%;\n  }\n  .contentSection {\n    display: flex;\n    flex-direction: column;\n  }\n}\n\n@media (max-width: 290px) {\n  html {\n    font-size: 35%;\n  }\n  .contentSection {\n    display: flex;\n    flex-direction: column;\n  }\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsY0FBYyxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxXQUFXLE9BQU8sWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxjQUFjLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sV0FBVyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxhQUFhLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sYUFBYSxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sYUFBYSxNQUFNLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sVUFBVSxVQUFVLEtBQUssVUFBVSxNQUFNLFVBQVUsS0FBSyxZQUFZLE9BQU8sVUFBVSxLQUFLLFlBQVksT0FBTyxZQUFZLE1BQU0sWUFBWSxPQUFPLFdBQVcs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O0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlFQUFlLFlBQVksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZXMvbWFpbi5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlcy9yZXNldC5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZXMvbWFpbi5jc3M/ZTgwYSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGVzL3Jlc2V0LmNzcz80Y2ZiIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9wYWdlcy9nZW5lcmF0ZUNvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BhZ2VzL2dlbmVyYXRlSG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZXMvZ2VuZXJhdGVNZW51LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIvc3JjL2Fzc2V0L2JhY2tncm91bmQuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1DYXZlYXQ6d2dodEA0MDA7NzAwJmZhbWlseT1JYmFycmErUmVhbCtOb3ZhOndnaHRANTAwOzcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgLyogQ29sb3JzICovXFxuICAtLXBpbms6ICNmZmM0ZWI7XFxuICAtLXRhbjogI2UxZGFiZDtcXG4gIC0td2hpdGU6ICNmZGZlZmQ7XFxuICAtLWJsYWNrOiAjMGQxMDEwO1xcbiAgLS1ncmVlbjogI2FiYzc5ODtcXG4gIC0tYmdjLWNvbnRhaW5lcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xcblxcbiAgLyogRm9udHMgKi9cXG4gIC0tZmYtdGl0bGU6IFxcXCJDYXZlYXRcXFwiLCBzZXJpZjtcXG4gIC0tZmYtbmF2OiBcXFwiSWJhcnJhIFJlYWwgTm92YVxcXCIsIHNlcmlmO1xcbiAgLS1mZi1jb250ZW50OiBcXFwiQ2F2ZWF0XFxcIiwgc2VyaWY7XFxuICAtLWZmLWxlZ2VuZDogXFxcIkliYXJyYSBSZWFsIE5vdmFcXFwiLCBzZXJpZjtcXG59XFxuXFxuLyogQ1NTIFJFU0VUICovXFxuXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmh0bWwge1xcbiAgZm9udC1zaXplOiAxMDAlO1xcbiAgbGluZS1oZWlnaHQ6IDEuNjtcXG5cXG4gIC8qIGZvb3RlciBzdXBwb3J0ICovXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5ib2R5IHtcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG5cXG4gIC8qIGZvb3RlciBzdXBwb3J0ICovXFxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbn1cXG5cXG4ubWFpbkNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGdhcDogMXJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxufVxcblxcbi50aXRsZSB7XFxuICBmb250LWZhbWlseTogdmFyKC0tZmYtdGl0bGUpO1xcbiAgZm9udC1zaXplOiA4cmVtO1xcbiAgY29sb3I6IHZhcigtLWJsYWNrKTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLm5hdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4ubmF2IC5idG4ge1xcbiAgd2lkdGg6IDE1MHB4O1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZmLW5hdik7XFxuICBmb250LXNpemU6IDNyZW07XFxuICBjb2xvcjogdmFyKC0tYmxhY2spO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcbn1cXG5cXG4uYnRuOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLyogQ29udGVudCAqL1xcblxcbi5jb250ZW50Q29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbn1cXG5cXG4vKiBIb21lIENvbnRlbnQgKi9cXG5cXG4uaG9tZUNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDRyZW07XFxuICBoZWlnaHQ6IDUwcmVtO1xcbiAgd2lkdGg6IDUwcmVtO1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZmLWxlZ2VuZCk7XFxuICBmb250LXNpemU6IDNyZW07XFxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tYmdjLWNvbnRhaW5lcik7XFxuICBhbmltYXRpb246IGZhZGVJbiAxcztcXG59XFxuXFxuLnN1YlRhZ0xpbmUge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4uaGVyb0ltYWdlIHtcXG4gIHdpZHRoOiA2MCU7XFxuICBoZWlnaHQ6IDYwJTtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblxcbi8qIE1lbnUgQ29udGVudCAqL1xcblxcbi5tZW51Q29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZ2MtY29udGFpbmVyKTtcXG4gIGFuaW1hdGlvbjogZmFkZUluIDFzO1xcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xcbn1cXG5cXG4uZmllbGRzZXQge1xcbiAgbWFyZ2luOiAycmVtIDJyZW07XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS13aGl0ZSk7XFxufVxcblxcbi5sZWdlbmQge1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZmLWxlZ2VuZCk7XFxuICBmb250LXNpemU6IDNyZW07XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uY29udGVudFNlY3Rpb24ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAycmVtO1xcbiAgbWFyZ2luOiAycmVtIDJyZW07XFxuICBmb250LWZhbWlseTogdmFyKC0tZmYtY29udGVudCk7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBmb250LXdlaWdodDogODAwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uY29udGVudFNlY3Rpb24gcCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5zdWJUZXh0IHtcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxuICBmb250LWZhbWlseTogdmFyKC0tZmYtbmF2KTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIG1heC13aWR0aDogMjVyZW07XFxufVxcblxcbi8qIENvbnRhY3QgQ29udGVudCAqL1xcblxcbi5jb250YWN0Q29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgaGVpZ2h0OiA0NXJlbTtcXG4gIHdpZHRoOiA1MHJlbTtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGdhcDogMnJlbTtcXG4gIHBhZGRpbmc6IDJyZW0gMnJlbTtcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZ2MtY29udGFpbmVyKTtcXG4gIGFuaW1hdGlvbjogZmFkZUluIDFzO1xcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xcbn1cXG5cXG4uY29udGFjdE1hcCB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLyogU2Nyb2xsYmFyICovXFxuLyogd2lkdGggKi9cXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIHdpZHRoOiAwLjVyZW07XFxufVxcblxcbi8qIFRyYWNrICovXFxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxuICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xcbn1cXG5cXG4vKiBIYW5kbGUgKi9cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gIGJhY2tncm91bmQ6ICM4ODg7XFxufVxcblxcbi8qIEhhbmRsZSBvbiBob3ZlciAqL1xcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogIzU1NTtcXG59XFxuXFxuLyogQW5pbWF0aW9ucyAqL1xcblxcbkBrZXlmcmFtZXMgZmFkZUluIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG5cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cXG5cXG4vKiBGT09URVIgKi9cXG5cXG4uZm9vdGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAxcmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAxcmVtIDA7XFxuICBmb250LWZhbWlseTogdmFyKC0tZmYtbmF2KTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnYy1jb250YWluZXIpO1xcbn1cXG5cXG4uZmEtZ2l0aHViIHtcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uZmEtZ2l0aHViOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZykgc2NhbGUoMS4yKTtcXG59XFxuXFxuLyogTWVkaWEgUXVlcmllcyAqL1xcbkBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIHtcXG4gIGh0bWwge1xcbiAgICBmb250LXNpemU6IDEwMCU7XFxuICB9XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xcbiAgaHRtbCB7XFxuICAgIGZvbnQtc2l6ZTogODAlO1xcbiAgfVxcbiAgLmNvbnRlbnRTZWN0aW9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxuICBodG1sIHtcXG4gICAgZm9udC1zaXplOiA2MCU7XFxuICB9XFxuICAuY29udGVudFNlY3Rpb24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcXG4gIGh0bWwge1xcbiAgICBmb250LXNpemU6IDUwJTtcXG4gIH1cXG4gIC5jb250ZW50U2VjdGlvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA0MjVweCkge1xcbiAgaHRtbCB7XFxuICAgIGZvbnQtc2l6ZTogNDAlO1xcbiAgfVxcbiAgLmNvbnRlbnRTZWN0aW9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDI5MHB4KSB7XFxuICBodG1sIHtcXG4gICAgZm9udC1zaXplOiAzNSU7XFxuICB9XFxuICAuY29udGVudFNlY3Rpb24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL21haW4uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsbUNBQW1DOztFQUVuQyxVQUFVO0VBQ1YsMkJBQTJCO0VBQzNCLG1DQUFtQztFQUNuQyw2QkFBNkI7RUFDN0Isc0NBQXNDO0FBQ3hDOztBQUVBLGNBQWM7O0FBRWQ7OztFQUdFLHNCQUFzQjtFQUN0QixVQUFVO0VBQ1YsU0FBUztBQUNYOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjs7RUFFaEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLG1EQUE0QztFQUM1Qyw0QkFBNEI7RUFDNUIsc0JBQXNCOztFQUV0QixtQkFBbUI7RUFDbkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNi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Q0UsYUFBYTtJQUNiLHNCQUFzQjtFQUN4QjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxjQUFjO0VBQ2hCO0VBQ0E7SUFDRSxhQUFhO0lBQ2Isc0JBQXNCO0VBQ3hCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGNBQWM7RUFDaEI7RUFDQTtJQUNFLGFBQWE7SUFDYixzQkFBc0I7RUFDeEI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsY0FBYztFQUNoQjtFQUNBO0lBQ0UsYUFBYTtJQUNiLHNCQUFzQjtFQUN4QjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxjQUFjO0VBQ2hCO0VBQ0E7SUFDRSxhQUFhO0lBQ2Isc0JBQXNCO0VBQ3hCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Q2F2ZWF0OndnaHRANDAwOzcwMCZmYW1pbHk9SWJhcnJhK1JlYWwrTm92YTp3Z2h0QDUwMDs3MDAmZGlzcGxheT1zd2FwXFxcIik7XFxuXFxuOnJvb3Qge1xcbiAgLyogQ29sb3JzICovXFxuICAtLXBpbms6ICNmZmM0ZWI7XFxuICAtLXRhbjogI2UxZGFiZDtcXG4gIC0td2hpdGU6ICNmZGZlZmQ7XFxuICAtLWJsYWNrOiAjMGQxMDEwO1xcbiAgLS1ncmVlbjogI2FiYzc5ODtcXG4gIC0tYmdjLWNvbnRhaW5lcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xcblxcbiAgLyogRm9udHMgKi9cXG4gIC0tZmYtdGl0bGU6IFxcXCJDYXZlYXRcXFwiLCBzZXJpZjtcXG4gIC0tZmYtbmF2OiBcXFwiSWJhcnJhIFJlYWwgTm92YVxcXCIsIHNlcmlmO1xcbiAgLS1mZi1jb250ZW50OiBcXFwiQ2F2ZWF0XFxcIiwgc2VyaWY7XFxuICAtLWZmLWxlZ2VuZDogXFxcIkliYXJyYSBSZWFsIE5vdmFcXFwiLCBzZXJpZjtcXG59XFxuXFxuLyogQ1NTIFJFU0VUICovXFxuXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmh0bWwge1xcbiAgZm9udC1zaXplOiAxMDAlO1xcbiAgbGluZS1oZWlnaHQ6IDEuNjtcXG5cXG4gIC8qIGZvb3RlciBzdXBwb3J0ICovXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5ib2R5IHtcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGJhY2tncm91bmQ6IHVybChcXFwiL3NyYy9hc3NldC9iYWNrZ3JvdW5kLmpwZ1xcXCIpO1xcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuXFxuICAvKiBmb290ZXIgc3VwcG9ydCAqL1xcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG59XFxuXFxuLm1haW5Db250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogMTAwdnc7XFxuICBnYXA6IDFyZW07XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcbn1cXG5cXG4udGl0bGUge1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZmLXRpdGxlKTtcXG4gIGZvbnQtc2l6ZTogOHJlbTtcXG4gIGNvbG9yOiB2YXIoLS1ibGFjayk7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5uYXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMXJlbTtcXG59XFxuXFxuLm5hdiAuYnRuIHtcXG4gIHdpZHRoOiAxNTBweDtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mZi1uYXYpO1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgY29sb3I6IHZhcigtLWJsYWNrKTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXG59XFxuXFxuLmJ0bjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qIENvbnRlbnQgKi9cXG5cXG4uY29udGVudENvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XFxuXFxuLyogSG9tZSBDb250ZW50ICovXFxuXFxuLmhvbWVDb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA0cmVtO1xcbiAgaGVpZ2h0OiA1MHJlbTtcXG4gIHdpZHRoOiA1MHJlbTtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mZi1sZWdlbmQpO1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWJnYy1jb250YWluZXIpO1xcbiAgYW5pbWF0aW9uOiBmYWRlSW4gMXM7XFxufVxcblxcbi5zdWJUYWdMaW5lIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuLmhlcm9JbWFnZSB7XFxuICB3aWR0aDogNjAlO1xcbiAgaGVpZ2h0OiA2MCU7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4vKiBNZW51IENvbnRlbnQgKi9cXG5cXG4ubWVudUNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tYmdjLWNvbnRhaW5lcik7XFxuICBhbmltYXRpb246IGZhZGVJbiAxcztcXG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcXG59XFxuXFxuLmZpZWxkc2V0IHtcXG4gIG1hcmdpbjogMnJlbSAycmVtO1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0td2hpdGUpO1xcbn1cXG5cXG4ubGVnZW5kIHtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mZi1sZWdlbmQpO1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmNvbnRlbnRTZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMnJlbTtcXG4gIG1hcmdpbjogMnJlbSAycmVtO1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZmLWNvbnRlbnQpO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgZm9udC13ZWlnaHQ6IDgwMDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmNvbnRlbnRTZWN0aW9uIHAge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uc3ViVGV4dCB7XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZmLW5hdik7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBtYXgtd2lkdGg6IDI1cmVtO1xcbn1cXG5cXG4vKiBDb250YWN0IENvbnRlbnQgKi9cXG5cXG4uY29udGFjdENvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGhlaWdodDogNDVyZW07XFxuICB3aWR0aDogNTByZW07XFxuICBmb250LXNpemU6IDJyZW07XFxuICBnYXA6IDJyZW07XFxuICBwYWRkaW5nOiAycmVtIDJyZW07XFxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tYmdjLWNvbnRhaW5lcik7XFxuICBhbmltYXRpb246IGZhZGVJbiAxcztcXG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcXG59XFxuXFxuLmNvbnRhY3RNYXAge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi8qIFNjcm9sbGJhciAqL1xcbi8qIHdpZHRoICovXFxuOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICB3aWR0aDogMC41cmVtO1xcbn1cXG5cXG4vKiBUcmFjayAqL1xcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcbiAgYmFja2dyb3VuZDogI2YxZjFmMTtcXG59XFxuXFxuLyogSGFuZGxlICovXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICBiYWNrZ3JvdW5kOiAjODg4O1xcbn1cXG5cXG4vKiBIYW5kbGUgb24gaG92ZXIgKi9cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6ICM1NTU7XFxufVxcblxcbi8qIEFuaW1hdGlvbnMgKi9cXG5cXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuXFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG59XFxuXFxuLyogRk9PVEVSICovXFxuXFxuLmZvb3RlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMXJlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMXJlbSAwO1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZmLW5hdik7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZ2MtY29udGFpbmVyKTtcXG59XFxuXFxuLmZhLWdpdGh1YiB7XFxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmZhLWdpdGh1Yjpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpIHNjYWxlKDEuMik7XFxufVxcblxcbi8qIE1lZGlhIFF1ZXJpZXMgKi9cXG5AbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XFxuICBodG1sIHtcXG4gICAgZm9udC1zaXplOiAxMDAlO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcXG4gIGh0bWwge1xcbiAgICBmb250LXNpemU6IDgwJTtcXG4gIH1cXG4gIC5jb250ZW50U2VjdGlvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xcbiAgaHRtbCB7XFxuICAgIGZvbnQtc2l6ZTogNjAlO1xcbiAgfVxcbiAgLmNvbnRlbnRTZWN0aW9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XFxuICBodG1sIHtcXG4gICAgZm9udC1zaXplOiA1MCU7XFxuICB9XFxuICAuY29udGVudFNlY3Rpb24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNDI1cHgpIHtcXG4gIGh0bWwge1xcbiAgICBmb250LXNpemU6IDQwJTtcXG4gIH1cXG4gIC5jb250ZW50U2VjdGlvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiAyOTBweCkge1xcbiAgaHRtbCB7XFxuICAgIGZvbnQtc2l6ZTogMzUlO1xcbiAgfVxcbiAgLmNvbnRlbnRTZWN0aW9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gXFxuICAgdjIuMCB8IDIwMTEwMTI2XFxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcXG4qL1xcblxcbmh0bWwsXFxuYm9keSxcXG5kaXYsXFxuc3BhbixcXG5hcHBsZXQsXFxub2JqZWN0LFxcbmlmcmFtZSxcXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNixcXG5wLFxcbmJsb2NrcXVvdGUsXFxucHJlLFxcbmEsXFxuYWJicixcXG5hY3JvbnltLFxcbmFkZHJlc3MsXFxuYmlnLFxcbmNpdGUsXFxuY29kZSxcXG5kZWwsXFxuZGZuLFxcbmVtLFxcbmltZyxcXG5pbnMsXFxua2JkLFxcbnEsXFxucyxcXG5zYW1wLFxcbnNtYWxsLFxcbnN0cmlrZSxcXG5zdHJvbmcsXFxuc3ViLFxcbnN1cCxcXG50dCxcXG52YXIsXFxuYixcXG51LFxcbmksXFxuY2VudGVyLFxcbmRsLFxcbmR0LFxcbmRkLFxcbm9sLFxcbnVsLFxcbmxpLFxcbmZpZWxkc2V0LFxcbmZvcm0sXFxubGFiZWwsXFxubGVnZW5kLFxcbnRhYmxlLFxcbmNhcHRpb24sXFxudGJvZHksXFxudGZvb3QsXFxudGhlYWQsXFxudHIsXFxudGgsXFxudGQsXFxuYXJ0aWNsZSxcXG5hc2lkZSxcXG5jYW52YXMsXFxuZGV0YWlscyxcXG5lbWJlZCxcXG5maWd1cmUsXFxuZmlnY2FwdGlvbixcXG5mb290ZXIsXFxuaGVhZGVyLFxcbmhncm91cCxcXG5tZW51LFxcbm5hdixcXG5vdXRwdXQsXFxucnVieSxcXG5zZWN0aW9uLFxcbnN1bW1hcnksXFxudGltZSxcXG5tYXJrLFxcbmF1ZGlvLFxcbnZpZGVvIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IDA7XFxuICBmb250LXNpemU6IDEwMCU7XFxuICBmb250OiBpbmhlcml0O1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuYXJ0aWNsZSxcXG5hc2lkZSxcXG5kZXRhaWxzLFxcbmZpZ2NhcHRpb24sXFxuZmlndXJlLFxcbmZvb3RlcixcXG5oZWFkZXIsXFxuaGdyb3VwLFxcbm1lbnUsXFxubmF2LFxcbnNlY3Rpb24ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbmJvZHkge1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxufVxcbm9sLFxcbnVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGUsXFxucSB7XFxuICBxdW90ZXM6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGU6YmVmb3JlLFxcbmJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsXFxucTphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGNvbnRlbnQ6IG5vbmU7XFxufVxcbnRhYmxlIHtcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuICBib3JkZXItc3BhY2luZzogMDtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9yZXNldC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7OztDQUdDOztBQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFpRkUsU0FBUztFQUNULFVBQVU7RUFDVixTQUFTO0VBQ1QsZUFBZTtFQUNmLGFBQWE7RUFDYix3QkFBd0I7QUFDMUI7QUFDQSxnREFBZ0Q7QUFDaEQ7Ozs7Ozs7Ozs7O0VBV0UsY0FBYztBQUNoQjtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUNBOztFQUVFLGdCQUFnQjtBQUNsQjtBQUNBOztFQUVFLFlBQVk7QUFDZDtBQUNBOzs7O0VBSUUsV0FBVztFQUNYLGFBQWE7QUFDZjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLGlCQUFpQjtBQUNuQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0LyBcXG4gICB2Mi4wIHwgMjAxMTAxMjZcXG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxcbiovXFxuXFxuaHRtbCxcXG5ib2R5LFxcbmRpdixcXG5zcGFuLFxcbmFwcGxldCxcXG5vYmplY3QsXFxuaWZyYW1lLFxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2LFxcbnAsXFxuYmxvY2txdW90ZSxcXG5wcmUsXFxuYSxcXG5hYmJyLFxcbmFjcm9ueW0sXFxuYWRkcmVzcyxcXG5iaWcsXFxuY2l0ZSxcXG5jb2RlLFxcbmRlbCxcXG5kZm4sXFxuZW0sXFxuaW1nLFxcbmlucyxcXG5rYmQsXFxucSxcXG5zLFxcbnNhbXAsXFxuc21hbGwsXFxuc3RyaWtlLFxcbnN0cm9uZyxcXG5zdWIsXFxuc3VwLFxcbnR0LFxcbnZhcixcXG5iLFxcbnUsXFxuaSxcXG5jZW50ZXIsXFxuZGwsXFxuZHQsXFxuZGQsXFxub2wsXFxudWwsXFxubGksXFxuZmllbGRzZXQsXFxuZm9ybSxcXG5sYWJlbCxcXG5sZWdlbmQsXFxudGFibGUsXFxuY2FwdGlvbixcXG50Ym9keSxcXG50Zm9vdCxcXG50aGVhZCxcXG50cixcXG50aCxcXG50ZCxcXG5hcnRpY2xlLFxcbmFzaWRlLFxcbmNhbnZhcyxcXG5kZXRhaWxzLFxcbmVtYmVkLFxcbmZpZ3VyZSxcXG5maWdjYXB0aW9uLFxcbmZvb3RlcixcXG5oZWFkZXIsXFxuaGdyb3VwLFxcbm1lbnUsXFxubmF2LFxcbm91dHB1dCxcXG5ydWJ5LFxcbnNlY3Rpb24sXFxuc3VtbWFyeSxcXG50aW1lLFxcbm1hcmssXFxuYXVkaW8sXFxudmlkZW8ge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogMDtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLFxcbmFzaWRlLFxcbmRldGFpbHMsXFxuZmlnY2FwdGlvbixcXG5maWd1cmUsXFxuZm9vdGVyLFxcbmhlYWRlcixcXG5oZ3JvdXAsXFxubWVudSxcXG5uYXYsXFxuc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuYm9keSB7XFxuICBsaW5lLWhlaWdodDogMTtcXG59XFxub2wsXFxudWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuYmxvY2txdW90ZSxcXG5xIHtcXG4gIHF1b3Rlczogbm9uZTtcXG59XFxuYmxvY2txdW90ZTpiZWZvcmUsXFxuYmxvY2txdW90ZTphZnRlcixcXG5xOmJlZm9yZSxcXG5xOmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgY29udGVudDogbm9uZTtcXG59XFxudGFibGUge1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gIGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Jlc2V0LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcmVzZXQuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCByZXNldCBmcm9tIFwiLi9zdHlsZXMvcmVzZXQuY3NzXCI7XG5pbXBvcnQgY3NzIGZyb20gXCIuL3N0eWxlcy9tYWluLmNzc1wiO1xuaW1wb3J0IGdlbmVyYXRlSG9tZSBmcm9tIFwiLi9wYWdlcy9nZW5lcmF0ZUhvbWVcIjtcbmltcG9ydCBnZW5lcmF0ZU1lbnUgZnJvbSBcIi4vcGFnZXMvZ2VuZXJhdGVNZW51XCI7XG5pbXBvcnQgZ2VuZXJhdGVDb250YWN0IGZyb20gXCIuL3BhZ2VzL2dlbmVyYXRlQ29udGFjdFwiO1xuXG5jb25zdCBoZWFkID0gZG9jdW1lbnQuaGVhZDtcbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5ib2R5O1xuY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbi8vIEhlYWRlclxuY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcbmNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuXG4vLyBOYXZcbmNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIik7XG5jb25zdCBob21lQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbmNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuY29uc3QgY29udGFjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cbi8vIENvbnRlbnRcbmNvbnN0IGNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4vLyBDcmVhdGluZyBDbGFzc2VzXG5tYWluQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJtYWluQ29udGFpbmVyXCIpO1xuaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXJcIik7XG50aXRsZS5jbGFzc0xpc3QuYWRkKFwidGl0bGVcIik7XG5uYXYuY2xhc3NMaXN0LmFkZChcIm5hdlwiKTtcbmhvbWVCdG4uY2xhc3NMaXN0LmFkZChcImhvbWVCdG5cIik7XG5ob21lQnRuLmNsYXNzTGlzdC5hZGQoXCJidG5cIik7XG5tZW51QnRuLmNsYXNzTGlzdC5hZGQoXCJtZW51QnRuXCIpO1xubWVudUJ0bi5jbGFzc0xpc3QuYWRkKFwiYnRuXCIpO1xuY29udGFjdEJ0bi5jbGFzc0xpc3QuYWRkKFwiY29udGFjdEJ0blwiKTtcbmNvbnRhY3RCdG4uY2xhc3NMaXN0LmFkZChcImJ0blwiKTtcbmNvbnRlbnRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNvbnRlbnRDb250YWluZXJcIik7XG5cbi8vIEFkZGluZyB0ZXh0Q29udGVudFxudGl0bGUudGV4dENvbnRlbnQgPSBcIkN1bGluYXJ5IENvbXBvdW5kXCI7XG5ob21lQnRuLnRleHRDb250ZW50ID0gXCJIb21lXCI7XG5tZW51QnRuLnRleHRDb250ZW50ID0gXCJNZW51XCI7XG5jb250YWN0QnRuLnRleHRDb250ZW50ID0gXCJDb250YWN0XCI7XG5cbi8vIEJ1aWxkaW5nIEhUTUwgU3RydWN0dXJlXG5ib2R5LmFwcGVuZENoaWxkKG1haW5Db250YWluZXIpO1xubWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkZXIpO1xubWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChuYXYpO1xubWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250ZW50Q29udGFpbmVyKTtcbmhlYWRlci5hcHBlbmRDaGlsZCh0aXRsZSk7XG5oZWFkZXIuYXBwZW5kQ2hpbGQobmF2KTtcbm5hdi5hcHBlbmRDaGlsZChob21lQnRuKTtcbm5hdi5hcHBlbmRDaGlsZChtZW51QnRuKTtcbm5hdi5hcHBlbmRDaGlsZChjb250YWN0QnRuKTtcbmNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoZ2VuZXJhdGVIb21lKCkpO1xuXG4vLyBCdXR0b24gT24gQ2xpY2tcbmhvbWVCdG4ub25jbGljayA9ICgpID0+IHtcbiAgY29udGVudENvbnRhaW5lci5yZXBsYWNlQ2hpbGRyZW4oKTtcbiAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChnZW5lcmF0ZUhvbWUoKSk7XG59O1xubWVudUJ0bi5vbmNsaWNrID0gKCkgPT4ge1xuICBjb250ZW50Q29udGFpbmVyLnJlcGxhY2VDaGlsZHJlbigpO1xuICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGdlbmVyYXRlTWVudSgpKTtcbn07XG5jb250YWN0QnRuLm9uY2xpY2sgPSAoKSA9PiB7XG4gIGNvbnRlbnRDb250YWluZXIucmVwbGFjZUNoaWxkcmVuKCk7XG4gIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoZ2VuZXJhdGVDb250YWN0KCkpO1xufTtcblxuLy8gRm9vdGVyIFNjcmlwdFxuY29uc3QgZm9vdGVyU2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcbmZvb3RlclNjcmlwdC5zcmMgPSBcImh0dHBzOi8va2l0LmZvbnRhd2Vzb21lLmNvbS9hYTI3ZWU0ZGZmLmpzXCI7XG5mb290ZXJTY3JpcHQuY3Jvc3NPcmlnaW4gPSBcImFub255bW91c1wiO1xuaGVhZC5hcHBlbmRDaGlsZChmb290ZXJTY3JpcHQpO1xuXG4vLyBGb290ZXJcblxuY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmZvb3Rlci5jbGFzc0xpc3QuYWRkKFwiZm9vdGVyXCIpO1xuZm9vdGVyLmlubmVySFRNTCA9IGA8cD5cbkNvcHlyaWdodCDCqVxuPHNjcmlwdD5cbiAgZG9jdW1lbnQud3JpdGUobmV3IERhdGUoKS5nZXRGdWxsWWVhcigpKTtcbjwvc2NyaXB0PlxuQ29kaW5nV2l0aER1ZGVcbjwvcD5cbjxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vY29kaW5nd2l0aGR1ZGVcIiB0YXJnZXQ9XCJfYmxhbmtcIj5cbjxpIGNsYXNzPVwiZmFiIGZhLWdpdGh1YlwiPjwvaVxuPjwvYT5gO1xuYm9keS5hcHBlbmRDaGlsZChmb290ZXIpO1xuIiwiaW1wb3J0IGxvY2F0aW9uIGZyb20gXCIuLi9hc3NldC9yZXN0YXVyYW50LWxvY2F0aW9uLnBuZ1wiO1xuZnVuY3Rpb24gZ2VuZXJhdGVDb250YWN0KCkge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGVudC5jbGFzc0xpc3QuYWRkKFwiY29udGFjdENvbnRlbnRcIik7XG5cbiAgY29uc3QgcGhvbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgcGhvbmUudGV4dENvbnRlbnQgPSBcIlBob25lOiAxMjMtNDU2LTc4OTBcIjtcblxuICBjb25zdCBhZGRyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGFkZHJlc3MudGV4dENvbnRlbnQgPSBcIkFkZHJlc3M6IEhvbGx5d29vZCBCb3VsZXZhcmQgNDIsIExvcyBBbmdlbGVzXCI7XG5cbiAgY29uc3QgbWFwID0gbmV3IEltYWdlKCk7XG4gIG1hcC5zcmMgPSBsb2NhdGlvbjtcbiAgbWFwLmNsYXNzTGlzdC5hZGQoXCJjb250YWN0TWFwXCIpO1xuXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQocGhvbmUpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGFkZHJlc3MpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKG1hcCk7XG5cbiAgcmV0dXJuIGNvbnRlbnQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdlbmVyYXRlQ29udGFjdDtcbiIsImltcG9ydCBoZXJvSW1hZ2UgZnJvbSBcIi4uL2Fzc2V0L2hlcm9JbWFnZS5wbmdcIjtcblxuZnVuY3Rpb24gZ2VuZXJhdGVIb21lKCkge1xuICAvLyBDb250ZW50XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCB0YWdMaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XG4gIGltYWdlLnNyYyA9IGhlcm9JbWFnZTtcbiAgY29uc3QgY2FsbFRvQWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cbiAgLy8gQ3JlYXRpbmcgQ2xhc3Nlc1xuICBjb250ZW50LmNsYXNzTGlzdC5hZGQoXCJob21lQ29udGVudFwiKTtcbiAgdGFnTGluZS5jbGFzc0xpc3QuYWRkKFwidGFnTGluZVwiKTtcbiAgaW1hZ2UuY2xhc3NMaXN0LmFkZChcImhlcm9JbWFnZVwiKTtcbiAgY2FsbFRvQWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJjYWxsVG9BY3Rpb25cIik7XG5cbiAgLy8gQWRkaW5nIHRleHRDb250ZW50XG4gIHRhZ0xpbmUudGV4dENvbnRlbnQgPSBcIldoZXJlIGV2ZXJ5IGluZ3JlZGllbnQgdGVsbHMgYSBzdG9yeVwiO1xuICBjYWxsVG9BY3Rpb24udGV4dENvbnRlbnQgPSBcIlJlc2VydmUgYSB0YWJsZSB0b2RheVwiO1xuXG4gIC8vIEJ1aWxkaW5nIEhUTUwgU3RydWN0dXJlXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQodGFnTGluZSk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGNhbGxUb0FjdGlvbik7XG5cbiAgcmV0dXJuIGNvbnRlbnQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdlbmVyYXRlSG9tZTtcbiIsImZ1bmN0aW9uIGdlbmVyYXRlTWVudSgpIHtcbiAgLy8gQ29udGVudFxuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGVudC5jbGFzc0xpc3QuYWRkKFwibWVudUNvbnRlbnRcIik7XG5cbiAgLy8gTWVhdCBhbmQgQ2hlZXNlXG4gIGNvbnN0IG1lYXRDaGVlc2VGaWVsZHNldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmaWVsZHNldFwiKTtcbiAgbWVhdENoZWVzZUZpZWxkc2V0LmNsYXNzTGlzdC5hZGQoXCJmaWVsZHNldFwiKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChtZWF0Q2hlZXNlRmllbGRzZXQpO1xuXG4gIC8vIExlZ2VuZFxuICBjb25zdCBtZWF0Q2hlZXNlTGVnZW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxlZ2VuZFwiKTtcbiAgbWVhdENoZWVzZUxlZ2VuZC5jbGFzc0xpc3QuYWRkKFwibGVnZW5kXCIpO1xuICBtZWF0Q2hlZXNlTGVnZW5kLmlubmVyVGV4dCA9IFwiTUVBVCAmIENIRUVTRVwiO1xuICBtZWF0Q2hlZXNlRmllbGRzZXQuYXBwZW5kQ2hpbGQobWVhdENoZWVzZUxlZ2VuZCk7XG5cbiAgLy8gQ29udGVudFxuICBjb25zdCBtZWF0Q2hlZXNlQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1lYXRDaGVlc2VDb250ZW50LmNsYXNzTGlzdC5hZGQoXCJjb250ZW50U2VjdGlvblwiKTtcbiAgbWVhdENoZWVzZUZpZWxkc2V0LmFwcGVuZENoaWxkKG1lYXRDaGVlc2VDb250ZW50KTtcblxuICBjb25zdCBNT0xJTkFSSV9TT1BSRVNTQVRBID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIE1PTElOQVJJX1NPUFJFU1NBVEEudGV4dENvbnRlbnQgPSBcIk1PTElOQVJJIFNPUFJFU1NBVEEgNlwiO1xuICBtZWF0Q2hlZXNlQ29udGVudC5hcHBlbmRDaGlsZChNT0xJTkFSSV9TT1BSRVNTQVRBKTtcblxuICBjb25zdCBIT1RfQ09QUEEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgSE9UX0NPUFBBLnRleHRDb250ZW50ID0gXCJIT1QgQ09QUEEgN1wiO1xuICBtZWF0Q2hlZXNlQ29udGVudC5hcHBlbmRDaGlsZChIT1RfQ09QUEEpO1xuXG4gIGNvbnN0IFBST1NDSVVUVE9fRElfU0FOX0RBTklFTEUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgUFJPU0NJVVRUT19ESV9TQU5fREFOSUVMRS50ZXh0Q29udGVudCA9IFwiUFJPU0NJVVRUTyBESSBTQU4gREFOSUVMRSA4XCI7XG4gIG1lYXRDaGVlc2VDb250ZW50LmFwcGVuZENoaWxkKFBST1NDSVVUVE9fRElfU0FOX0RBTklFTEUpO1xuXG4gIGNvbnN0IEJSRVNBT0xBID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIEJSRVNBT0xBLnRleHRDb250ZW50ID0gXCJCUkVTQU9MQSA3XCI7XG4gIG1lYXRDaGVlc2VDb250ZW50LmFwcGVuZENoaWxkKEJSRVNBT0xBKTtcblxuICBjb25zdCBQUkFJUklFX0JSRUVaRV9DSEVEREFSID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIFBSQUlSSUVfQlJFRVpFX0NIRUREQVIudGV4dENvbnRlbnQgPSBcIlBSQUlSSUUgQlJFRVpFIENIRUREQVIgNVwiO1xuICBtZWF0Q2hlZXNlQ29udGVudC5hcHBlbmRDaGlsZChQUkFJUklFX0JSRUVaRV9DSEVEREFSKTtcblxuICBjb25zdCBBR0VEX01BTkNIRUdPID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIEFHRURfTUFOQ0hFR08udGV4dENvbnRlbnQgPSBcIkFHRUQgTUFOQ0hFR08gNFwiO1xuICBtZWF0Q2hlZXNlQ29udGVudC5hcHBlbmRDaGlsZChBR0VEX01BTkNIRUdPKTtcblxuICBjb25zdCBET0xDRV9HT1JHT05aT0xBID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIERPTENFX0dPUkdPTlpPTEEudGV4dENvbnRlbnQgPSBcIkRPTENFIEdPUkdPTlpPTEEgNVwiO1xuICBtZWF0Q2hlZXNlQ29udGVudC5hcHBlbmRDaGlsZChET0xDRV9HT1JHT05aT0xBKTtcblxuICBjb25zdCBQSU1FTlRPX0NIRUVTRSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBQSU1FTlRPX0NIRUVTRS50ZXh0Q29udGVudCA9IFwiUElNRU5UTyBDSEVFU0UgNlwiO1xuICBtZWF0Q2hlZXNlQ29udGVudC5hcHBlbmRDaGlsZChQSU1FTlRPX0NIRUVTRSk7XG5cbiAgLy8gU25hY2tzXG4gIGNvbnN0IHNuYWNrc0ZpZWxkc2V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZpZWxkc2V0XCIpO1xuICBzbmFja3NGaWVsZHNldC5jbGFzc0xpc3QuYWRkKFwiZmllbGRzZXRcIik7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoc25hY2tzRmllbGRzZXQpO1xuXG4gIC8vIExlZ2VuZFxuICBjb25zdCBzbmFja3NMZWdlbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGVnZW5kXCIpO1xuICBzbmFja3NMZWdlbmQuY2xhc3NMaXN0LmFkZChcImxlZ2VuZFwiKTtcbiAgc25hY2tzTGVnZW5kLmlubmVyVGV4dCA9IFwiU05BQ0tTXCI7XG4gIHNuYWNrc0ZpZWxkc2V0LmFwcGVuZENoaWxkKHNuYWNrc0xlZ2VuZCk7XG5cbiAgLy8gQ29udGVudFxuICBjb25zdCBzbmFja3NDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgc25hY2tzQ29udGVudC5jbGFzc0xpc3QuYWRkKFwiY29udGVudFNlY3Rpb25cIik7XG4gIHNuYWNrc0ZpZWxkc2V0LmFwcGVuZENoaWxkKHNuYWNrc0NvbnRlbnQpO1xuXG4gIGNvbnN0IEdPQ0hVSkFOR19CUlVTU0VMU19TUFJPVVRTID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIEdPQ0hVSkFOR19CUlVTU0VMU19TUFJPVVRTLnRleHRDb250ZW50ID0gXCJHT0NIVUpBTkcgQlJVU1NFTFMgU1BST1VUUyA3XCI7XG4gIHNuYWNrc0NvbnRlbnQuYXBwZW5kQ2hpbGQoR09DSFVKQU5HX0JSVVNTRUxTX1NQUk9VVFMpO1xuXG4gIGNvbnN0IENSVVNUWV9CUkVBRF9HQVJMSUNfT0lMX0JBTFNBTUlDID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIENSVVNUWV9CUkVBRF9HQVJMSUNfT0lMX0JBTFNBTUlDLnRleHRDb250ZW50ID1cbiAgICBcIkNSVVNUWSBCUkVBRCwgR0FSTElDIE9JTCAmIEJBTFNBTUlDIDRcIjtcbiAgc25hY2tzQ29udGVudC5hcHBlbmRDaGlsZChDUlVTVFlfQlJFQURfR0FSTElDX09JTF9CQUxTQU1JQyk7XG5cbiAgY29uc3QgR1JJTExFRF9BU1BBUkFHVVMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgR1JJTExFRF9BU1BBUkFHVVMudGV4dENvbnRlbnQgPSBcIkdSSUxMRUQgQVNQQVJBR1VTIDVcIjtcbiAgc25hY2tzQ29udGVudC5hcHBlbmRDaGlsZChHUklMTEVEX0FTUEFSQUdVUyk7XG5cbiAgY29uc3QgTUFSSU5BVEVEX09MSVZFUyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBNQVJJTkFURURfT0xJVkVTLnRleHRDb250ZW50ID0gXCJNQVJJTkFURUQgT0xJVkVTIDVcIjtcbiAgc25hY2tzQ29udGVudC5hcHBlbmRDaGlsZChNQVJJTkFURURfT0xJVkVTKTtcblxuICBjb25zdCBNQVJDT05BX0FMTU9ORFMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgTUFSQ09OQV9BTE1PTkRTLnRleHRDb250ZW50ID0gXCJNQVJDT05BIEFMTU9ORFMgNFwiO1xuICBzbmFja3NDb250ZW50LmFwcGVuZENoaWxkKE1BUkNPTkFfQUxNT05EUyk7XG5cbiAgY29uc3QgUFJPU0NJVVRUT19ERVZJTEVEX0VHR1MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgUFJPU0NJVVRUT19ERVZJTEVEX0VHR1MudGV4dENvbnRlbnQgPSBcIlBST1NDSVVUVE8gREVWSUxFRCBFR0dTIDVcIjtcbiAgc25hY2tzQ29udGVudC5hcHBlbmRDaGlsZChQUk9TQ0lVVFRPX0RFVklMRURfRUdHUyk7XG5cbiAgLy8gU2FsYWRzXG4gIGNvbnN0IHNhbGFkc0ZpZWxkc2V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZpZWxkc2V0XCIpO1xuICBzYWxhZHNGaWVsZHNldC5jbGFzc0xpc3QuYWRkKFwiZmllbGRzZXRcIik7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoc2FsYWRzRmllbGRzZXQpO1xuXG4gIC8vIExlZ2VuZFxuICBjb25zdCBzYWxhZHNMZWdlbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGVnZW5kXCIpO1xuICBzYWxhZHNMZWdlbmQuY2xhc3NMaXN0LmFkZChcImxlZ2VuZFwiKTtcbiAgc2FsYWRzTGVnZW5kLmlubmVyVGV4dCA9IFwiU0FMQURTXCI7XG4gIHNhbGFkc0ZpZWxkc2V0LmFwcGVuZENoaWxkKHNhbGFkc0xlZ2VuZCk7XG5cbiAgLy8gQ29udGVudFxuICBjb25zdCBzYWxhZHNDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgc2FsYWRzQ29udGVudC5jbGFzc0xpc3QuYWRkKFwiY29udGVudFNlY3Rpb25cIik7XG4gIHNhbGFkc0ZpZWxkc2V0LmFwcGVuZENoaWxkKHNhbGFkc0NvbnRlbnQpO1xuXG4gIGNvbnN0IENIRUFQX0hPVVNFX1NBTEFEID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIENIRUFQX0hPVVNFX1NBTEFELnRleHRDb250ZW50ID0gXCJDSEVBUCBIT1VTRSBTQUxBRCA3XCI7XG4gIGNvbnN0IENIRUFQX0hPVVNFX1NBTEFEX1N1YlRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgQ0hFQVBfSE9VU0VfU0FMQURfU3ViVGV4dC5jbGFzc0xpc3QuYWRkKFwic3ViVGV4dFwiKTtcbiAgQ0hFQVBfSE9VU0VfU0FMQURfU3ViVGV4dC50ZXh0Q29udGVudCA9IFwiYnV0dGVybWlsayByYW5jaFwiO1xuICBDSEVBUF9IT1VTRV9TQUxBRC5hcHBlbmRDaGlsZChDSEVBUF9IT1VTRV9TQUxBRF9TdWJUZXh0KTtcbiAgc2FsYWRzQ29udGVudC5hcHBlbmRDaGlsZChDSEVBUF9IT1VTRV9TQUxBRCk7XG5cbiAgY29uc3QgTElUVExFX0dFTV9DQUVTQVIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgTElUVExFX0dFTV9DQUVTQVIudGV4dENvbnRlbnQgPSBcIkxJVFRMRSBHRU0gQ0FFU0FSIDEzXCI7XG4gIGNvbnN0IExJVFRMRV9HRU1fQ0FFU0FSX1N1YlRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgTElUVExFX0dFTV9DQUVTQVJfU3ViVGV4dC5jbGFzc0xpc3QuYWRkKFwic3ViVGV4dFwiKTtcbiAgTElUVExFX0dFTV9DQUVTQVJfU3ViVGV4dC50ZXh0Q29udGVudCA9IFwic2hhdmVkIHBhcm1lc2FuLCBjcm91dG9uc1wiO1xuICBMSVRUTEVfR0VNX0NBRVNBUi5hcHBlbmRDaGlsZChMSVRUTEVfR0VNX0NBRVNBUl9TdWJUZXh0KTtcbiAgc2FsYWRzQ29udGVudC5hcHBlbmRDaGlsZChMSVRUTEVfR0VNX0NBRVNBUik7XG5cbiAgY29uc3QgU1RSQVdCRVJSWV9LQUxFID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIFNUUkFXQkVSUllfS0FMRS50ZXh0Q29udGVudCA9IFwiU1RSQVdCRVJSWSAmIEtBTEUgMTVcIjtcbiAgY29uc3QgU1RSQVdCRVJSWV9LQUxFX1N1YlRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgU1RSQVdCRVJSWV9LQUxFX1N1YlRleHQuY2xhc3NMaXN0LmFkZChcInN1YlRleHRcIik7XG4gIFNUUkFXQkVSUllfS0FMRV9TdWJUZXh0LnRleHRDb250ZW50ID1cbiAgICBcImZhcnJvLCBzbmFwIHBlYSwgZ29sZGVuIHJhaXNpbiwgc21va2VkIGFsbW9uZCwgZ29hdCBjaGVlc2UsIHBvcHB5c2VlZCB2aW5haWdyZXR0ZVwiO1xuICBTVFJBV0JFUlJZX0tBTEUuYXBwZW5kQ2hpbGQoU1RSQVdCRVJSWV9LQUxFX1N1YlRleHQpO1xuICBzYWxhZHNDb250ZW50LmFwcGVuZENoaWxkKFNUUkFXQkVSUllfS0FMRSk7XG5cbiAgY29uc3QgQ0hPUFBFRF9DSElDS0VOID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIENIT1BQRURfQ0hJQ0tFTi50ZXh0Q29udGVudCA9IFwiQ0hPUFBFRCBDSElDS0VOIDE2LjVcIjtcbiAgY29uc3QgQ0hPUFBFRF9DSElDS0VOX1N1YlRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgQ0hPUFBFRF9DSElDS0VOX1N1YlRleHQuY2xhc3NMaXN0LmFkZChcInN1YlRleHRcIik7XG4gIENIT1BQRURfQ0hJQ0tFTl9TdWJUZXh0LnRleHRDb250ZW50ID1cbiAgICBcImF2b2NhZG8sIGJhY29uLCBoZWlybG9vbSB0b21hdG8sIHdoaXRlIGNoZWRkYXIsIGRldmlsZWQgZWdnLCBiYWNvbiBiYnEgcmFuY2hcIjtcbiAgQ0hPUFBFRF9DSElDS0VOLmFwcGVuZENoaWxkKENIT1BQRURfQ0hJQ0tFTl9TdWJUZXh0KTtcbiAgc2FsYWRzQ29udGVudC5hcHBlbmRDaGlsZChDSE9QUEVEX0NISUNLRU4pO1xuXG4gIGNvbnN0IFdFREdFRF9JQ0VCRVJHID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIFdFREdFRF9JQ0VCRVJHLnRleHRDb250ZW50ID0gXCJXRURHRUQgSUNFQkVSRyAxNC41XCI7XG4gIGNvbnN0IFdFREdFRF9JQ0VCRVJHX1N1YlRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgV0VER0VEX0lDRUJFUkdfU3ViVGV4dC5jbGFzc0xpc3QuYWRkKFwic3ViVGV4dFwiKTtcbiAgV0VER0VEX0lDRUJFUkdfU3ViVGV4dC50ZXh0Q29udGVudCA9XG4gICAgXCJtYXBsZSBnbGF6ZWQgYmFjb24sIGhlaXJsb29tIGNoZXJyeSB0b21hdG8sIGF2b2NhZG8sIGNyb3V0b24sIGJsdWUgY2hlZXNlIGRyZXNzaW5nXCI7XG4gIFdFREdFRF9JQ0VCRVJHLmFwcGVuZENoaWxkKFdFREdFRF9JQ0VCRVJHX1N1YlRleHQpO1xuICBzYWxhZHNDb250ZW50LmFwcGVuZENoaWxkKFdFREdFRF9JQ0VCRVJHKTtcblxuICAvLyBFTlRSRUVTXG4gIGNvbnN0IGVudHJlZXNGaWVsZHNldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmaWVsZHNldFwiKTtcbiAgZW50cmVlc0ZpZWxkc2V0LmNsYXNzTGlzdC5hZGQoXCJmaWVsZHNldFwiKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChlbnRyZWVzRmllbGRzZXQpO1xuXG4gIC8vIExlZ2VuZFxuICBjb25zdCBlbnRyZWVzTGVnZW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxlZ2VuZFwiKTtcbiAgZW50cmVlc0xlZ2VuZC5jbGFzc0xpc3QuYWRkKFwibGVnZW5kXCIpO1xuICBlbnRyZWVzTGVnZW5kLmlubmVyVGV4dCA9IFwiRU5UUsOJRVNcIjtcbiAgZW50cmVlc0ZpZWxkc2V0LmFwcGVuZENoaWxkKGVudHJlZXNMZWdlbmQpO1xuXG4gIC8vIENvbnRlbnRcbiAgY29uc3QgZW50cmVlc0NvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBlbnRyZWVzQ29udGVudC5jbGFzc0xpc3QuYWRkKFwiY29udGVudFNlY3Rpb25cIik7XG4gIGVudHJlZXNGaWVsZHNldC5hcHBlbmRDaGlsZChlbnRyZWVzQ29udGVudCk7XG5cbiAgY29uc3QgSE9VUl9QT1JLX1JJQlMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgSE9VUl9QT1JLX1JJQlMudGV4dENvbnRlbnQgPSBcIjM2LUhPVVIgUE9SSyBSSUJTIDI3XCI7XG4gIGNvbnN0IEhPVVJfUE9SS19SSUJTX1N1YlRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgSE9VUl9QT1JLX1JJQlNfU3ViVGV4dC5jbGFzc0xpc3QuYWRkKFwic3ViVGV4dFwiKTtcbiAgSE9VUl9QT1JLX1JJQlNfU3ViVGV4dC50ZXh0Q29udGVudCA9IFwiamFsYXBlw7FvLCBtb2xhc3NlcywgZnJpZXNcIjtcbiAgSE9VUl9QT1JLX1JJQlMuYXBwZW5kQ2hpbGQoSE9VUl9QT1JLX1JJQlNfU3ViVGV4dCk7XG4gIGVudHJlZXNDb250ZW50LmFwcGVuZENoaWxkKEhPVVJfUE9SS19SSUJTKTtcblxuICBjb25zdCBNRUFUTE9BRiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBNRUFUTE9BRi50ZXh0Q29udGVudCA9IFwiTUEuLi5USEUgTUVBVExPQUYhPyEgMThcIjtcbiAgY29uc3QgTUVBVExPQUZfU3ViVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBNRUFUTE9BRl9TdWJUZXh0LmNsYXNzTGlzdC5hZGQoXCJzdWJUZXh0XCIpO1xuICBNRUFUTE9BRl9TdWJUZXh0LnRleHRDb250ZW50ID0gXCJncmVlbiBiZWFuLCBzbWFzaGVkIHBvdGF0bywgZ3JhdnlcIjtcbiAgTUVBVExPQUYuYXBwZW5kQ2hpbGQoTUVBVExPQUZfU3ViVGV4dCk7XG4gIGVudHJlZXNDb250ZW50LmFwcGVuZENoaWxkKE1FQVRMT0FGKTtcblxuICBjb25zdCBSQUlOQk9XX1RST1VUID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIFJBSU5CT1dfVFJPVVQudGV4dENvbnRlbnQgPSBcIlJBSU5CT1cgVFJPVVQgMjNcIjtcbiAgY29uc3QgUkFJTkJPV19UUk9VVF9TdWJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIFJBSU5CT1dfVFJPVVRfU3ViVGV4dC5jbGFzc0xpc3QuYWRkKFwic3ViVGV4dFwiKTtcbiAgUkFJTkJPV19UUk9VVF9TdWJUZXh0LnRleHRDb250ZW50ID1cbiAgICBcImZyZW5jaGVkIGdyZWVuIGJlYW4sIHRvYXN0ZWQgYWxtb25kLCBjYXJhbWVsaXplZCBzaGFsbG90LCBsZW1vbiBicm93biBidXR0ZXJcIjtcbiAgUkFJTkJPV19UUk9VVC5hcHBlbmRDaGlsZChSQUlOQk9XX1RST1VUX1N1YlRleHQpO1xuICBlbnRyZWVzQ29udGVudC5hcHBlbmRDaGlsZChSQUlOQk9XX1RST1VUKTtcblxuICBjb25zdCBTVEVBS19GUklURVMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgU1RFQUtfRlJJVEVTLnRleHRDb250ZW50ID0gXCJTVEVBSyBGUklURVMqIDI5LjVcIjtcbiAgY29uc3QgU1RFQUtfRlJJVEVTX1N1YlRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgU1RFQUtfRlJJVEVTX1N1YlRleHQuY2xhc3NMaXN0LmFkZChcInN1YlRleHRcIik7XG4gIFNURUFLX0ZSSVRFU19TdWJUZXh0LnRleHRDb250ZW50ID1cbiAgICBcInByaW1lIHNraXJ0IHN0ZWFrLCBibGFjayB0cnVmZmxlIGJ1dHRlciwgZnJlbmNoIGZyaWVcIjtcbiAgU1RFQUtfRlJJVEVTLmFwcGVuZENoaWxkKFNURUFLX0ZSSVRFU19TdWJUZXh0KTtcbiAgZW50cmVlc0NvbnRlbnQuYXBwZW5kQ2hpbGQoU1RFQUtfRlJJVEVTKTtcblxuICBjb25zdCBNQURFX1RPX09SREVSX0xBU0FHTkEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgTUFERV9UT19PUkRFUl9MQVNBR05BLnRleHRDb250ZW50ID0gXCJNQURFIFRPIE9SREVSIExBU0FHTkEgMTdcIjtcbiAgY29uc3QgTUFERV9UT19PUkRFUl9MQVNBR05BX1N1YlRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgTUFERV9UT19PUkRFUl9MQVNBR05BX1N1YlRleHQuY2xhc3NMaXN0LmFkZChcInN1YlRleHRcIik7XG4gIE1BREVfVE9fT1JERVJfTEFTQUdOQV9TdWJUZXh0LnRleHRDb250ZW50ID1cbiAgICBcInN1bW1lciBjb3JuLCBzcGluYWNoIHJpY290dGEsIG1venphcmVsbGEsIHBvbW9kb3JvLCBnYXJsaWMgY2lhYmF0dGFcIjtcbiAgTUFERV9UT19PUkRFUl9MQVNBR05BLmFwcGVuZENoaWxkKE1BREVfVE9fT1JERVJfTEFTQUdOQV9TdWJUZXh0KTtcbiAgZW50cmVlc0NvbnRlbnQuYXBwZW5kQ2hpbGQoTUFERV9UT19PUkRFUl9MQVNBR05BKTtcblxuICBjb25zdCBGUklFRF9DSElDS0VOID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIEZSSUVEX0NISUNLRU4udGV4dENvbnRlbnQgPSBcIkZSSUVEIENISUNLRU4gMTguNVwiO1xuICBjb25zdCBGUklFRF9DSElDS0VOX1N1YlRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgRlJJRURfQ0hJQ0tFTl9TdWJUZXh0LmNsYXNzTGlzdC5hZGQoXCJzdWJUZXh0XCIpO1xuICBGUklFRF9DSElDS0VOX1N1YlRleHQudGV4dENvbnRlbnQgPVxuICAgIFwiQnV0dGVybWlsayBiaXNjdWl0LCBzbWFzaGVkIHBvdGF0bywgZ3JhdnkgKGJlIHBhdGllbnQgLSBpdCdzIHdvcnRoIGl0ISlcIjtcbiAgRlJJRURfQ0hJQ0tFTi5hcHBlbmRDaGlsZChGUklFRF9DSElDS0VOX1N1YlRleHQpO1xuICBlbnRyZWVzQ29udGVudC5hcHBlbmRDaGlsZChGUklFRF9DSElDS0VOKTtcblxuICBjb25zdCBTUElDWV9LT1JFQU5fU0tJUlRfU1RFQUsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgU1BJQ1lfS09SRUFOX1NLSVJUX1NURUFLLnRleHRDb250ZW50ID0gXCJTUElDWSBLT1JFQU4gU0tJUlQgU1RFQUsqIDI5LjVcIjtcbiAgY29uc3QgU1BJQ1lfS09SRUFOX1NLSVJUX1NURUFLX1N1YlRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgU1BJQ1lfS09SRUFOX1NLSVJUX1NURUFLX1N1YlRleHQuY2xhc3NMaXN0LmFkZChcInN1YlRleHRcIik7XG4gIFNQSUNZX0tPUkVBTl9TS0lSVF9TVEVBS19TdWJUZXh0LnRleHRDb250ZW50ID1cbiAgICBcImZvcmJpZGRlbiByaWNlLCB6dWNjaGluaSwgbXVzaHJvb20sIGdpbmdlciBjaGlsaSBzYXVjZVwiO1xuICBTUElDWV9LT1JFQU5fU0tJUlRfU1RFQUsuYXBwZW5kQ2hpbGQoU1BJQ1lfS09SRUFOX1NLSVJUX1NURUFLX1N1YlRleHQpO1xuICBlbnRyZWVzQ29udGVudC5hcHBlbmRDaGlsZChTUElDWV9LT1JFQU5fU0tJUlRfU1RFQUspO1xuXG4gIGNvbnN0IEJFRVJfQkFUVEVSRURfRklTSCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBCRUVSX0JBVFRFUkVEX0ZJU0gudGV4dENvbnRlbnQgPSBcIkJFRVIgQkFUVEVSRUQgRklTSCAmIENISVBTIDE4XCI7XG4gIGNvbnN0IEJFRVJfQkFUVEVSRURfRklTSF9TdWJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIEJFRVJfQkFUVEVSRURfRklTSF9TdWJUZXh0LmNsYXNzTGlzdC5hZGQoXCJzdWJUZXh0XCIpO1xuICBCRUVSX0JBVFRFUkVEX0ZJU0hfU3ViVGV4dC50ZXh0Q29udGVudCA9IFwiY29sZXNsYXcsIHRhcnRhciBzYXVjZVwiO1xuICBCRUVSX0JBVFRFUkVEX0ZJU0guYXBwZW5kQ2hpbGQoQkVFUl9CQVRURVJFRF9GSVNIX1N1YlRleHQpO1xuICBlbnRyZWVzQ29udGVudC5hcHBlbmRDaGlsZChCRUVSX0JBVFRFUkVEX0ZJU0gpO1xuXG4gIGNvbnN0IFNQSUNZX1ZFR0FOX0NVUlJZID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIFNQSUNZX1ZFR0FOX0NVUlJZLnRleHRDb250ZW50ID0gXCJTUElDWSBWRUdBTiBDVVJSWSAxN1wiO1xuICBjb25zdCBTUElDWV9WRUdBTl9DVVJSWV9TdWJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIFNQSUNZX1ZFR0FOX0NVUlJZX1N1YlRleHQuY2xhc3NMaXN0LmFkZChcInN1YlRleHRcIik7XG4gIFNQSUNZX1ZFR0FOX0NVUlJZX1N1YlRleHQudGV4dENvbnRlbnQgPVxuICAgIFwiZ3JpZGRsZWQgc3dlZXQgcG90YXRvLCBlZ2dwbGFudCwgc25hcCBwZWEsIGNhdWxpZmxvd2VyLCBzaGlpdGFrZSBtdXNocm9vbSwgYmxhY2sgcmljZVwiO1xuICBTUElDWV9WRUdBTl9DVVJSWS5hcHBlbmRDaGlsZChTUElDWV9WRUdBTl9DVVJSWV9TdWJUZXh0KTtcbiAgZW50cmVlc0NvbnRlbnQuYXBwZW5kQ2hpbGQoU1BJQ1lfVkVHQU5fQ1VSUlkpO1xuXG4gIGNvbnN0IFJPQVNURURfU0FMTU9OID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIFJPQVNURURfU0FMTU9OLnRleHRDb250ZW50ID0gXCJST0FTVEVEIFNBTE1PTiogMjYuNVwiO1xuICBjb25zdCBST0FTVEVEX1NBTE1PTl9TdWJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIFJPQVNURURfU0FMTU9OX1N1YlRleHQuY2xhc3NMaXN0LmFkZChcInN1YlRleHRcIik7XG4gIFJPQVNURURfU0FMTU9OX1N1YlRleHQudGV4dENvbnRlbnQgPVxuICAgIFwiY3JlYW15IGZhcnJvLCBzd2VldCBjb3JuLCBibGlzdGVyZWQgdG9tYXRvLCBhc3BhcmFndXMsIGdhcmRlbiBoZXJiIHBlc3RvXCI7XG4gIFJPQVNURURfU0FMTU9OLmFwcGVuZENoaWxkKFJPQVNURURfU0FMTU9OX1N1YlRleHQpO1xuICBlbnRyZWVzQ29udGVudC5hcHBlbmRDaGlsZChST0FTVEVEX1NBTE1PTik7XG5cbiAgcmV0dXJuIGNvbnRlbnQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdlbmVyYXRlTWVudTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==