/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n  font-family: \\\"Orbitron\\\", sans-serif;\\n  text-transform: uppercase;\\n  margin: 0;\\n  box-sizing: border-box;\\n  height: 100vh;\\n  letter-spacing: 3px;\\n  color: rgb(245, 123, 42);\\n  touch-action: none;\\n  -webkit-touch-callout: none;\\n  -webkit-user-select: none;\\n  -khtml-user-select: none;\\n  -moz-user-select: none;\\n  -ms-user-select: none;\\n  user-select: none;\\n}\\n\\nh1,\\nh3,\\np {\\n  margin: 0;\\n}\\n\\nh1 {\\n  margin-left: 15px;\\n}\\n\\nfooter > p {\\n  margin-right: 10px;\\n}\\n\\nbutton {\\n  width: fit-content;\\n  height: 35px;\\n  font-family: \\\"Orbitron\\\", sans-serif;\\n  font-size: 0.8em;\\n  letter-spacing: 3px;\\n  color: #f57b2a;\\n  text-transform: capitalize;\\n  cursor: pointer;\\n  border: none;\\n  background: #1370ad;\\n  background-image: -webkit-linear-gradient(top, #1370ad, #050e14);\\n  background-image: -moz-linear-gradient(top, #1370ad, #050e14);\\n  background-image: -ms-linear-gradient(top, #1370ad, #050e14);\\n  background-image: -o-linear-gradient(top, #1370ad, #050e14);\\n  background-image: linear-gradient(to bottom, #1370ad, #050e14);\\n  -webkit-border-radius: 10;\\n  -moz-border-radius: 10;\\n  border-radius: 10px;\\n  padding: 0px 10px;\\n  text-decoration: none;\\n  text-shadow: 1px 1px 3px #050e14;\\n  border: 4px double #f57b2a;\\n  position: relative;\\n  top: 0;\\n}\\n\\nbutton:hover {\\n  background: #050e14;\\n  background-image: -webkit-linear-gradient(top, #050e14, #1370ad);\\n  background-image: -moz-linear-gradient(top, #050e14, #1370ad);\\n  background-image: -ms-linear-gradient(top, #050e14, #1370ad);\\n  background-image: -o-linear-gradient(top, #050e14, #1370ad);\\n  background-image: linear-gradient(to bottom, #050e14, #1370ad);\\n  text-decoration: none;\\n}\\n\\nbutton:active {\\n  position: relative;\\n  top: 1px;\\n}\\n\\nnav,\\n.pre-game .title,\\n.pre-game .buttons {\\n  height: 4%;\\n  width: 100%;\\n  background-color: #00385e;\\n  display: flex;\\n  align-items: center;\\n  position: relative;\\n  z-index: 1;\\n  -webkit-box-shadow: 0px 2px 7px 2px #050e14;\\n  box-shadow: 0px 2px 7px 2px #050e14;\\n}\\n\\nmain {\\n  height: 93%;\\n  background-color: #f57b2a;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n  gap: 5px;\\n}\\n\\nfooter {\\n  background-color: #00385e;\\n  height: 3%;\\n  display: flex;\\n  justify-content: end;\\n  align-items: center;\\n  font-size: 0.7em;\\n}\\n\\n.pre-game-container,\\n.notification-container {\\n  position: absolute;\\n  top: 0;\\n  width: 100%;\\n  height: 100%;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  background-color: #f57b2a;\\n  visibility: hidden;\\n}\\n\\n.notification-container {\\n  visibility: hidden;\\n}\\n\\n.pre-game {\\n  width: 90%;\\n  display: flex;\\n  flex-direction: column;\\n  flex-wrap: wrap;\\n  border-radius: 10px;\\n  background-color: #1370ad;\\n}\\n\\n.pre-game img {\\n  width: 80px;\\n  margin-bottom: -12px;\\n  filter: invert(48%) sepia(13%) saturate(3207%) hue-rotate(130deg)\\n    brightness(95%) contrast(80%);\\n}\\n\\n.pre-game .title {\\n  margin-bottom: 10px;\\n}\\n.pre-game .title h3 {\\n  font-size: 0.8em;\\n  margin-left: 10px;\\n}\\n.pre-game .ship-placement {\\n  display: flex;\\n  width: 100%;\\n  justify-content: space-evenly;\\n}\\n\\n.pre-game .preview-container {\\n  width: 40%;\\n}\\n\\n.pre-game .ships-container {\\n  width: 40%;\\n  height: 100%;\\n  padding: 15px 20px;\\n  background-color: #00385e;\\n  font-size: 0.7em;\\n  border-radius: 25px;\\n  border: 7px double #f57b2a;\\n  background: #012b47;\\n  display: flex;\\n  flex-wrap: wrap;\\n  justify-content: center;\\n  align-items: center;\\n  -webkit-box-shadow: inset 0px 0px 20px 3px #000000,\\n    inset 0px 0px 20px 3px #000000;\\n  box-shadow: inset 0px 0px 20px 3px #000000, inset 0px 0px 25px 3px #000000;\\n  background: -moz-linear-gradient(45deg, #012b47 0%, #0f3f5e 100%);\\n  background: -webkit-linear-gradient(45deg, #012b47 0%, #0f3f5e 100%);\\n  background: linear-gradient(45deg, #012b47 0%, #0f3f5e 100%);\\n}\\n\\n.pre-game .buttons button {\\n  margin: 10px 0px;\\n}\\n\\n.p1-container,\\n.p2-container,\\n.preview-container {\\n  width: 300px;\\n  height: 300px;\\n  background-color: #012b47;\\n  border-radius: 10px;\\n  border: 2px solid black;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  -webkit-box-shadow: 5px 5px 5px 0px #050e14, inset 4px 4px 15px 0px #050e14,\\n    5px 5px 15px 5px rgba(0, 0, 0, 0);\\n  box-shadow: 5px 5px 5px 0px #050e14, inset 4px 4px 15px 0px #050e14,\\n    5px 5px 15px 5px rgba(0, 0, 0, 0);\\n}\\n\\n.p1-container {\\n  margin-top: -87px;\\n  margin-bottom: -87px;\\n  transform: scale(0.4);\\n}\\n\\n.board {\\n  color: #f57b2a;\\n  font-size: 0.8em;\\n  width: 90%;\\n  height: 90%;\\n  background-color: #012b47;\\n  border-radius: 10px;\\n  border-bottom-right-radius: 0px;\\n  border-collapse: collapse;\\n}\\n\\n.board td,\\n.board th {\\n  width: 9%;\\n  height: 9%;\\n}\\n\\n.board td {\\n  border: 0.5px solid #f57b2a;\\n}\\n\\n.ship-stat-container {\\n  margin: 5px 0;\\n  width: 300px;\\n  height: 120px;\\n  border-radius: 25px;\\n  border: 7px double #f57b2a;\\n  background: #012b47;\\n  display: flex;\\n  flex-wrap: wrap;\\n  justify-content: center;\\n  align-items: center;\\n  -webkit-box-shadow: inset 0px 0px 20px 3px #000000,\\n    inset 0px 0px 20px 3px #000000;\\n  box-shadow: inset 0px 0px 20px 3px #000000, inset 0px 0px 25px 3px #000000;\\n  background: -moz-linear-gradient(45deg, #012b47 0%, #0f3f5e 100%);\\n  background: -webkit-linear-gradient(45deg, #012b47 0%, #0f3f5e 100%);\\n  background: linear-gradient(45deg, #012b47 0%, #0f3f5e 100%);\\n}\\n\\n.ship-stat-container img {\\n  width: 80px;\\n  margin-bottom: -12px;\\n  filter: invert(48%) sepia(13%) saturate(3207%) hue-rotate(130deg)\\n    brightness(95%) contrast(80%);\\n  /* filter: invert(31%) sepia(29%) saturate(4815%) hue-rotate(184deg); */\\n}\\n\\n.ship-stat-container > div {\\n  display: flex;\\n  column-gap: 8px;\\n}\\n\\n.ship-stat-container > div:first-child {\\n  margin-top: -10px;\\n  margin-bottom: -30px;\\n}\\n\\n.ship-stat {\\n  display: flex;\\n  justify-content: center;\\n}\\n\\n.ship-stat div {\\n  display: flex;\\n}\\n\\n.ship-stat div div {\\n  width: 6px;\\n  height: 6px;\\n  border: 0.5px solid #00385e;\\n  background-color: #f57b2a;\\n}\\n\\n.zoom-in {\\n  pointer-events: none;\\n  animation: zoomIn 300ms ease-in-out forwards;\\n}\\n\\n.zoom-out {\\n  pointer-events: none;\\n  animation: zoomOut 300ms ease-in-out forwards;\\n}\\n\\n@keyframes zoomIn {\\n  0% {\\n    margin-top: -87px;\\n    margin-bottom: -87px;\\n    transform: scale(0.4);\\n  }\\n  100% {\\n    margin-top: 0px;\\n    margin-bottom: 0px;\\n    transform: scale(1);\\n  }\\n}\\n\\n@keyframes zoomOut {\\n  0% {\\n    margin-top: 0px;\\n    margin-bottom: 0px;\\n    transform: scale(1);\\n    /* z-index: 1; */\\n  }\\n  100% {\\n    margin-top: -87px;\\n    margin-bottom: -87px;\\n    transform: scale(0.4);\\n    /* z-index: -1; */\\n  }\\n}\\n\\n@media (max-width: 280px) {\\n  .p1-container,\\n  .p2-container {\\n    width: 270px;\\n    height: 270px;\\n    border: 2px solid black;\\n  }\\n\\n  .ship-stat-container {\\n    width: 260px;\\n    margin: 5px 0;\\n  }\\n}\\n\\n@media (min-height: 667px) {\\n  .ship-stat-container {\\n    height: 100px;\\n    margin: 3px 0;\\n  }\\n}\\n\\n@media (min-width: 280px) {\\n  .pre-game .ship-placement {\\n    display: flex;\\n    flex-direction: column;\\n    width: 100%;\\n    justify-content: space-evenly;\\n    align-items: center;\\n    row-gap: 10px;\\n  }\\n\\n  .pre-game .preview-container {\\n    width: 90%;\\n    height: 40%;\\n  }\\n\\n  .pre-game .ships-container {\\n    width: 70%;\\n    height: 40%;\\n  }\\n\\n  .pre-game .info {\\n    display: none;\\n  }\\n}\\n\\n@media (min-width: 350px) {\\n  .pre-game {\\n    margin-top: 12px;\\n  }\\n  .pre-game .ship-placement {\\n    display: flex;\\n    flex-direction: column;\\n    width: 100%;\\n    justify-content: space-evenly;\\n    align-items: center;\\n    row-gap: 10px;\\n  }\\n\\n  .pre-game .preview-container {\\n    width: 300px;\\n    height: 300px;\\n  }\\n\\n  .pre-game .ships-container {\\n    width: 80%;\\n  }\\n\\n  .pre-game .ships-container {\\n    width: 250px;\\n  }\\n  .pre-game .info {\\n    display: block;\\n  }\\n}\\n\\n@media (min-width: 680px) {\\n  .pre-game .ship-placement {\\n    display: flex;\\n    flex-direction: row;\\n    justify-content: center;\\n    padding: 10px 0;\\n    gap: 10px;\\n  }\\n\\n  .pre-game .ship-placement .ships-container {\\n    width: 200px;\\n  }\\n  .pre-game .info {\\n    display: block;\\n  }\\n}\\n@media (min-width: 768px) {\\n  .p1-container,\\n  .p2-container {\\n    width: 430px;\\n    height: 430px;\\n    border: 2px solid black;\\n  }\\n  .pre-game .info {\\n    display: block;\\n  }\\n\\n  .pre-game {\\n    width: 80%;\\n  }\\n}\\n\\n@media (min-width: 1024px) {\\n  main {\\n    display: flex;\\n    flex-direction: row;\\n    flex-wrap: wrap;\\n    gap: 30px;\\n  }\\n\\n  .p1-container {\\n    width: 430px;\\n    height: 430px;\\n    transform: scale(1);\\n  }\\n\\n  .ship-stat-container {\\n    width: 230px;\\n    height: 300px;\\n    display: flex;\\n  }\\n\\n  .ship-stat-container > div {\\n    width: 70%;\\n    display: flex;\\n    flex-direction: column;\\n    flex-wrap: nowrap;\\n  }\\n\\n  .ship-stat-container > div:first-child {\\n    height: 50px;\\n  }\\n\\n  .ship-stat-container img {\\n    width: 90px;\\n  }\\n\\n  .ship-stat-container > div > div {\\n    display: flex;\\n    align-items: center;\\n    column-gap: 30px;\\n  }\\n\\n  .ship-stat {\\n    height: 25px;\\n    display: flex;\\n    align-items: flex-end;\\n  }\\n\\n  .pre-game .info {\\n    display: block;\\n  }\\n\\n  .pre-game {\\n    width: 60%;\\n  }\\n}\\n\\n@media (min-width: 2048px) {\\n  .pre-game {\\n    width: 40%;\\n  }\\n}\\n\\n/* .pre-game-container {\\n  display: none;\\n} */\\n\\n.show {\\n  visibility: visible;\\n}\\n\\n.board .body-hor {\\n  background-color: #f57b2a;\\n  border-top: 3px solid #1370ad;\\n  border-bottom: 3px solid #1370ad;\\n}\\n\\n.board .body-ver {\\n  background-color: #f57b2a;\\n  border-left: 3px solid #1370ad;\\n  border-right: 3px solid #1370ad;\\n}\\n\\n.board .missed {\\n  background-color: #1370ad;\\n}\\n\\n.board .head-hor {\\n  border-left: 3px solid #1370ad;\\n}\\n\\n.board .tail-hor {\\n  border-right: 3px solid #1370ad;\\n}\\n\\n.board .head-ver {\\n  border-top: 3px solid #1370ad;\\n}\\n\\n.board .tail-ver {\\n  border-bottom: 3px solid #1370ad;\\n}\\n\\n.board .hit {\\n  background-color: #b10000;\\n  border: 3px solid #b10000;\\n}\\n\\n.ship-stat .hit {\\n  background-color: #b10000;\\n}\\n\\n.pre-game .buttons {\\n  width: 100%;\\n  flex-wrap: wrap;\\n  justify-content: space-evenly;\\n  margin-top: 10px;\\n  font-size: 0.8em;\\n  -webkit-box-shadow: 0px -2px 7px 2px #050e14;\\n  box-shadow: 0px -2px 7px 2px #050e14;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/dom/components/game-board-components.js":
/*!*****************************************************!*\
  !*** ./src/dom/components/game-board-components.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ GameBoardComponent)\n/* harmony export */ });\n/* harmony import */ var _helpers_alphabets__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/alphabets */ \"./src/helpers/alphabets.js\");\n\n\nconst defaultClassName = \"board\";\n\nclass GameBoardComponent {\n  constructor(board, type, className = defaultClassName) {\n    this.board = board;\n    this.type = type;\n    this.className = className;\n    this.fragment = document.createDocumentFragment();\n    this.component = document.createElement(\"table\");\n    this.component.className = this.className;\n    this.xAxisLabelHead = document.createElement(\"thead\");\n    this.component.appendChild(this.xAxisLabelHead);\n    this.xAxisLabelRow = document.createElement(\"tr\");\n    this.xAxisLabelHead.appendChild(this.xAxisLabelRow);\n    this.cornerTile = document.createElement(\"th\");\n    this.xAxisLabelRow.appendChild(this.cornerTile);\n    for (let i = 0; i < this.board.length; i += 1) {\n      this.xAxisLabelTile = document.createElement(\"th\");\n      this.xAxisLabelTile.textContent = i + 1;\n      this.xAxisLabelRow.appendChild(this.xAxisLabelTile);\n    }\n    this.body = document.createElement(\"tbody\");\n    this.component.appendChild(this.body);\n    for (let i = 0; i < this.board.length; i += 1) {\n      this.row = document.createElement(\"tr\");\n      this.body.appendChild(this.row);\n      this.yAxisLabel = document.createElement(\"th\");\n      this.yAxisLabel.textContent = _helpers_alphabets__WEBPACK_IMPORTED_MODULE_0__[\"default\"][i];\n      this.row.appendChild(this.yAxisLabel);\n      for (let j = 0; j < this.board.length; j += 1) {\n        this.tile = document.createElement(\"td\");\n        this.tile.dataset.cord = this.board[i][j].cord;\n\n        if (this.board[i][j].ship && this.type !== \"ai\") {\n          const { loc } = this.board[i][j].ship;\n          const hor = loc.every((pos) => pos[0] === loc[0][0]);\n          for (let k = 0; k < loc.length; k += 1) {\n            if (hor) {\n              this.tile.classList.add(\"body-hor\");\n              if (loc[0] === this.tile.dataset.cord) {\n                this.tile.classList.add(\"head-hor\");\n              } else if (loc[loc.length - 1] === this.tile.dataset.cord) {\n                this.tile.classList.add(\"tail-hor\");\n              }\n            } else {\n              this.tile.classList.add(\"body-ver\");\n              if (loc[0] === this.tile.dataset.cord) {\n                this.tile.classList.add(\"head-ver\");\n              } else if (loc[loc.length - 1] === this.tile.dataset.cord) {\n                this.tile.classList.add(\"tail-ver\");\n              }\n            }\n          }\n        }\n        if (this.board[i][j].isHit) {\n          this.tile.className = \"\";\n          this.tile.classList.add(\"hit\");\n        } else if (this.board[i][j].isMissed) {\n          this.tile.className = \"\";\n          this.tile.classList.add(\"missed\");\n        }\n\n        this.row.appendChild(this.tile);\n      }\n    }\n    this.fragment.appendChild(this.component);\n  }\n}\n\n\n//# sourceURL=webpack://battleship/./src/dom/components/game-board-components.js?");

/***/ }),

/***/ "./src/dom/ele.js":
/*!************************!*\
  !*** ./src/dom/ele.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst ele = (() => {\n  const p1Container = document.querySelector(\".p1-container\");\n  const p2Container = document.querySelector(\".p2-container\");\n  const shipStatContainer = document.querySelector(\".ship-stat-container\");\n  const restartBtn = document.querySelector(\".restart\");\n  const pregameContainer = document.querySelector(\".pre-game-container\");\n  const previewContainer = document.querySelector(\".preview-container\");\n  const shipsContainer = document.querySelector(\".shipsContainer\");\n  const resetBtn = document.querySelector(\".reset\");\n  const randomizeBtn = document.querySelector(\".randomize\");\n  const startBtn = document.querySelector(\".start\");\n  const notificationContainer = document.querySelector(\n    \".notification-container\"\n  );\n  const shipsStat = Array.from(document.querySelectorAll(\".ship-stat\"));\n\n  return {\n    p1Container,\n    p2Container,\n    shipStatContainer,\n    restartBtn,\n    pregameContainer,\n    previewContainer,\n    shipsContainer,\n    resetBtn,\n    randomizeBtn,\n    startBtn,\n    notificationContainer,\n    shipsStat,\n  };\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ele);\n\n\n//# sourceURL=webpack://battleship/./src/dom/ele.js?");

/***/ }),

/***/ "./src/dom/events.js":
/*!***************************!*\
  !*** ./src/dom/events.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _ele__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ele */ \"./src/dom/ele.js\");\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../game */ \"./src/game.js\");\n/* harmony import */ var _helpers_alphabets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/alphabets */ \"./src/helpers/alphabets.js\");\n\n\n\n\nconst events = (() => {\n  function addP2BoardClickEvt() {\n    _ele__WEBPACK_IMPORTED_MODULE_0__[\"default\"].p2Container.addEventListener(\"click\", () => {\n      const mediaQuery = window.matchMedia(\"(min-width: 1024px)\");\n      if (!mediaQuery.matches) {\n        _ele__WEBPACK_IMPORTED_MODULE_0__[\"default\"].p1Container.classList.add(\"zoom-in\");\n        _ele__WEBPACK_IMPORTED_MODULE_0__[\"default\"].p1Container.classList.remove(\"zoom-out\");\n        _ele__WEBPACK_IMPORTED_MODULE_0__[\"default\"].p2Container.classList.add(\"zoom-out\");\n\n        setTimeout(() => {\n          _ele__WEBPACK_IMPORTED_MODULE_0__[\"default\"].p1Container.classList.remove(\"zoom-in\");\n          _ele__WEBPACK_IMPORTED_MODULE_0__[\"default\"].p1Container.classList.add(\"zoom-out\");\n          _ele__WEBPACK_IMPORTED_MODULE_0__[\"default\"].p2Container.classList.remove(\"zoom-out\");\n          _ele__WEBPACK_IMPORTED_MODULE_0__[\"default\"].p2Container.classList.add(\"zoom-in\");\n        }, 1200);\n      }\n      setTimeout(() => {\n        _ele__WEBPACK_IMPORTED_MODULE_0__[\"default\"].p1Container.classList.remove(\"zoom-out\");\n        _ele__WEBPACK_IMPORTED_MODULE_0__[\"default\"].p1Container.classList.remove(\"zoom-in\");\n        _ele__WEBPACK_IMPORTED_MODULE_0__[\"default\"].p2Container.classList.remove(\"zoom-out\");\n        _ele__WEBPACK_IMPORTED_MODULE_0__[\"default\"].p2Container.classList.remove(\"zoom-in\");\n      }, 1500);\n    });\n  }\n\n  function start() {\n    _game__WEBPACK_IMPORTED_MODULE_1__[\"default\"].start();\n    _ele__WEBPACK_IMPORTED_MODULE_0__[\"default\"].pregameContainer.classList.remove(\"show\");\n  }\n\n  function addStartEvt() {\n    _ele__WEBPACK_IMPORTED_MODULE_0__[\"default\"].startBtn.addEventListener(\"click\", start);\n  }\n\n  function addRandomizeEvt() {\n    _ele__WEBPACK_IMPORTED_MODULE_0__[\"default\"].randomizeBtn.addEventListener(\"click\", () => {\n      _game__WEBPACK_IMPORTED_MODULE_1__[\"default\"].randomize();\n    });\n  }\n\n  function addResetEvt() {\n    _ele__WEBPACK_IMPORTED_MODULE_0__[\"default\"].resetBtn.addEventListener(\"click\", () => {\n      _game__WEBPACK_IMPORTED_MODULE_1__[\"default\"].reset();\n    });\n  }\n\n  function addRestartEvt() {\n    _ele__WEBPACK_IMPORTED_MODULE_0__[\"default\"].restartBtn.addEventListener(\"click\", () => {\n      _game__WEBPACK_IMPORTED_MODULE_1__[\"default\"].restart();\n      _ele__WEBPACK_IMPORTED_MODULE_0__[\"default\"].pregameContainer.classList.add(\"show\");\n    });\n  }\n\n  function addAttackEvt(data) {\n    const { board, boardData } = data;\n    board.fragment.firstChild.lastChild.childNodes.forEach((row) => {\n      row.childNodes.forEach((tile) => {\n        const { cord } = tile.dataset;\n        if (cord) {\n          const x = _helpers_alphabets__WEBPACK_IMPORTED_MODULE_2__[\"default\"].indexOf(cord.slice(0, 1));\n          const y = parseInt(cord.slice(1), 10) - 1;\n          if (!boardData[x][y].isHit && !boardData[x][y].isMissed)\n            tile.addEventListener(\"click\", () => {\n              _game__WEBPACK_IMPORTED_MODULE_1__[\"default\"].attack(cord);\n            });\n        }\n      });\n    });\n  }\n\n  return {\n    addP2BoardClickEvt,\n    addStartEvt,\n    addRandomizeEvt,\n    addResetEvt,\n    addRestartEvt,\n    addAttackEvt,\n  };\n})();\n\n_game__WEBPACK_IMPORTED_MODULE_1__[\"default\"].on(\"initialize\", \"addStartEvt\", events);\n_game__WEBPACK_IMPORTED_MODULE_1__[\"default\"].on(\"initialize\", \"addRandomizeEvt\", events);\n_game__WEBPACK_IMPORTED_MODULE_1__[\"default\"].on(\"initialize\", \"addResetEvt\", events);\n_game__WEBPACK_IMPORTED_MODULE_1__[\"default\"].on(\"initialize\", \"addRestartEvt\", events);\n_game__WEBPACK_IMPORTED_MODULE_1__[\"default\"].on(\"initialize\", \"addP2BoardClickEvt\", events);\n_game__WEBPACK_IMPORTED_MODULE_1__[\"default\"].on(\"add attack events\", \"addAttackEvt\", events);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (events);\n\n\n//# sourceURL=webpack://battleship/./src/dom/events.js?");

/***/ }),

/***/ "./src/dom/ui.js":
/*!***********************!*\
  !*** ./src/dom/ui.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../game */ \"./src/game.js\");\n/* harmony import */ var _components_game_board_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/game-board-components */ \"./src/dom/components/game-board-components.js\");\n\n\n\nconst ui = (() => {\n  const renderBoard = (data) => {\n    const { appendTo, boardData, type } = data;\n    const board = new _components_game_board_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"](boardData, type);\n    if (type === \"ai\") _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"].emit(\"add attack events\", { board, boardData });\n    const newNode = board.fragment;\n    const oldNode = appendTo.firstChild || null;\n    if (oldNode) oldNode.replaceWith(newNode);\n    else appendTo.appendChild(newNode);\n  };\n\n  const renderShipsStat = (data) => {\n    const { appendTo, shipsData } = data;\n    const ships = Object.keys(shipsData);\n    const fragment = document.createDocumentFragment();\n    for (let i = 0; i < appendTo.length; i += 1) {\n      while (appendTo[i].childNodes.length > 0) {\n        appendTo[i].removeChild(appendTo[i].firstChild);\n      }\n      const component = document.createElement(\"div\");\n      for (let j = 0; j < shipsData[ships[i]].loc.length; j += 1) {\n        const div = document.createElement(\"div\");\n        div.dataset.cord = shipsData[ships[i]].loc[j];\n        if (shipsData[ships[i]].loc[j].includes(\"hit\"))\n          div.classList.add(\"hit\");\n        component.appendChild(div);\n      }\n      fragment.appendChild(component);\n      appendTo[i].appendChild(fragment);\n    }\n  };\n\n  return {\n    renderBoard,\n    renderShipsStat,\n  };\n})();\n\n_game__WEBPACK_IMPORTED_MODULE_0__[\"default\"].on(\"render board\", \"renderBoard\", ui);\n_game__WEBPACK_IMPORTED_MODULE_0__[\"default\"].on(\"render ships status\", \"renderShipsStat\", ui);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ui);\n\n\n//# sourceURL=webpack://battleship/./src/dom/ui.js?");

/***/ }),

/***/ "./src/factories/game-board.js":
/*!*************************************!*\
  !*** ./src/factories/game-board.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ GameBoard)\n/* harmony export */ });\n/* harmony import */ var _helpers_create_board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/create-board */ \"./src/helpers/create-board.js\");\n/* harmony import */ var _helpers_alphabets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/alphabets */ \"./src/helpers/alphabets.js\");\n/* harmony import */ var _helpers_create_ship__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/create-ship */ \"./src/helpers/create-ship.js\");\n/* harmony import */ var _helpers_generate_random__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/generate-random */ \"./src/helpers/generate-random.js\");\n\n\n\n\n\nclass GameBoard {\n  constructor(size) {\n    this.board = (0,_helpers_create_board__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(size);\n    this.ships = {};\n    this.occupied = [];\n    this.missed = [];\n  }\n\n  placeShip(firstCord, len, dir, type, size = 10) {\n    if (firstCord.length === 0) return;\n    const x = firstCord.slice(0, 1);\n    const y = parseInt(firstCord.slice(1), 10);\n    const cords = [];\n    for (let i = 0; i < len; i += 1) {\n      if (dir === \"X\") {\n        if (y - 1 > 10 - len) throw new Error(\"Out of Boundary\");\n        cords.push(`${x}${y + i}`);\n      } else if (dir === \"Y\") {\n        const xIndex = _helpers_alphabets__WEBPACK_IMPORTED_MODULE_1__[\"default\"].indexOf(x);\n        if (xIndex > size - len) throw new Error(\"Out of Boundary\");\n        const alphabet = _helpers_alphabets__WEBPACK_IMPORTED_MODULE_1__[\"default\"][xIndex + i];\n        cords.push(`${alphabet}${y}`);\n      }\n      if (this.occupied.includes(cords[i]))\n        throw new Error(\"Ship already exists\");\n    }\n    const ship = (0,_helpers_create_ship__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(cords, type);\n    if (typeof this.ships[type] === \"undefined\") this.ships[type] = ship;\n    this.board.map((row) =>\n      row.map((tile) => {\n        const at = tile;\n        if (cords.includes(at.cord)) at.ship = ship;\n        return at;\n      })\n    );\n    this.occupied.push(...cords);\n  }\n\n  receiveAttack(cord) {\n    const found = this.board.flat().find((tile) => tile.cord === cord);\n    if (found.ship !== null) {\n      found.ship.hit(cord);\n      found.isHit = true;\n    } else {\n      found.isMissed = true;\n      this.missed.push(cord);\n    }\n  }\n\n  generateRandomPlacement(len, totalShips, type) {\n    const { randCord, randDir } = (0,_helpers_generate_random__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n    const firstCord = randCord;\n    const dir = randDir;\n    try {\n      this.placeShip(firstCord, len, dir, type);\n    } catch (e) {\n      if (!(e instanceof Error)) throw Error;\n    }\n    while (Object.keys(this.ships).length < totalShips)\n      this.generateRandomPlacement(len, totalShips, type);\n  }\n\n  placeShipsRandomly(fleet) {\n    for (let i = 0; i < fleet.length; i += 1)\n      this.generateRandomPlacement(fleet[i].len, i + 1, fleet[i].type);\n  }\n\n  checkAllSunk() {\n    let totalSunk = 0;\n    const ships = Object.keys(this.ships);\n    ships.forEach((ship) => {\n      if (this.ships[ship].sunk === true) totalSunk += 1;\n    });\n    if (totalSunk === ships.length) return true;\n    return false;\n  }\n}\n\n\n//# sourceURL=webpack://battleship/./src/factories/game-board.js?");

/***/ }),

/***/ "./src/factories/player.js":
/*!*********************************!*\
  !*** ./src/factories/player.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Player)\n/* harmony export */ });\n/* harmony import */ var _helpers_shuffle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/shuffle */ \"./src/helpers/shuffle.js\");\n/* harmony import */ var _game_board__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game-board */ \"./src/factories/game-board.js\");\n\n\n\nclass Player {\n  constructor(player) {\n    this.gameBoard = new _game_board__WEBPACK_IMPORTED_MODULE_1__[\"default\"](10);\n    this.enemyGameBoard = null;\n    if (player === \"ai\") this.aiAttacks = (0,_helpers_shuffle__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  }\n\n  assignEnemyGameBoard(enemyGameBoard) {\n    this.enemyGameBoard = enemyGameBoard;\n  }\n\n  attack(cord) {\n    this.enemyGameBoard.receiveAttack(cord);\n  }\n\n  aiAttack() {\n    const randomCord = this.aiAttacks.pop();\n    this.enemyGameBoard.receiveAttack(randomCord);\n  }\n}\n\n\n//# sourceURL=webpack://battleship/./src/factories/player.js?");

/***/ }),

/***/ "./src/factories/ship.js":
/*!*******************************!*\
  !*** ./src/factories/ship.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Ship)\n/* harmony export */ });\nclass Ship {\n  constructor(cords, type) {\n    this.loc = cords;\n    this.type = type;\n    this.sunk = false;\n  }\n\n  hit(cord) {\n    this.loc = this.loc.map((pos) => {\n      let at = pos;\n      if (at === cord) {\n        at = `${cord}-hit`;\n      }\n      return at;\n    });\n    this.isSunk();\n  }\n\n  isSunk() {\n    if (this.loc.every((pos) => pos.includes(\"hit\"))) this.sunk = true;\n    else this.sunk = false;\n  }\n}\n\n\n//# sourceURL=webpack://battleship/./src/factories/ship.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers_publisher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers/publisher */ \"./src/helpers/publisher.js\");\n/* harmony import */ var _factories_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./factories/player */ \"./src/factories/player.js\");\n/* harmony import */ var _dom_ele__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom/ele */ \"./src/dom/ele.js\");\n/* harmony import */ var _helpers_fleet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers/fleet */ \"./src/helpers/fleet.js\");\n\n\n\n\n\nconst game = {\n  mode: \"\",\n\n  setMode(mode) {\n    this.mode = mode;\n  },\n\n  init() {\n    this.hu = new _factories_player__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n    this.ai = new _factories_player__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"ai\");\n    this.hu.assignEnemyGameBoard(this.ai.gameBoard);\n    this.ai.assignEnemyGameBoard(this.hu.gameBoard);\n    const appendToPreview = _dom_ele__WEBPACK_IMPORTED_MODULE_2__[\"default\"].previewContainer;\n    const huBoardData = this.hu.gameBoard.board;\n    this.emit(\"render board\", {\n      appendTo: appendToPreview,\n      boardData: huBoardData,\n      type: \"preview\",\n    });\n    this.emit(\"initialize\");\n  },\n\n  start() {\n    this.turn = \"hu\";\n    const p1AppendTo = _dom_ele__WEBPACK_IMPORTED_MODULE_2__[\"default\"].p1Container;\n    const huBoardData = this.hu.gameBoard.board;\n    const p2AppendTo = _dom_ele__WEBPACK_IMPORTED_MODULE_2__[\"default\"].p2Container;\n    const aiBoardData = this.ai.gameBoard.board;\n    this.hu.assignEnemyGameBoard(this.ai.gameBoard);\n    this.ai.assignEnemyGameBoard(this.hu.gameBoard);\n    this.emit(\"render board\", {\n      appendTo: p1AppendTo,\n      boardData: huBoardData,\n      type: \"hu\",\n    });\n    this.emit(\"render board\", {\n      appendTo: p2AppendTo,\n      boardData: aiBoardData,\n      type: \"ai\",\n    });\n  },\n\n  restart() {\n    this.init();\n  },\n\n  reset() {\n    this.init();\n  },\n\n  randomize() {\n    this.hu = new _factories_player__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n    this.ai = new _factories_player__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"ai\");\n    this.hu.gameBoard.placeShipsRandomly(_helpers_fleet__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n    this.ai.gameBoard.placeShipsRandomly(_helpers_fleet__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n    const appendToPreview = _dom_ele__WEBPACK_IMPORTED_MODULE_2__[\"default\"].previewContainer;\n    const huBoardData = this.hu.gameBoard.board;\n    this.emit(\"render board\", {\n      appendTo: appendToPreview,\n      boardData: huBoardData,\n      type: \"preview\",\n    });\n    const appendTo = _dom_ele__WEBPACK_IMPORTED_MODULE_2__[\"default\"].shipsStat;\n    const shipsData = this.ai.gameBoard.ships;\n    this.emit(\"render ships status\", { appendTo, shipsData });\n  },\n\n  attack(cord) {\n    this.hu.attack(cord);\n    const p2AppendTo = _dom_ele__WEBPACK_IMPORTED_MODULE_2__[\"default\"].p2Container;\n    const aiBoardData = this.ai.gameBoard.board;\n    this.emit(\"render board\", {\n      appendTo: p2AppendTo,\n      boardData: aiBoardData,\n      type: \"ai\",\n    });\n    const appendTo = _dom_ele__WEBPACK_IMPORTED_MODULE_2__[\"default\"].shipsStat;\n    const shipsData = this.ai.gameBoard.ships;\n    this.emit(\"render ships status\", { appendTo, shipsData });\n    this.aiAttack();\n  },\n\n  aiAttack() {\n    this.ai.aiAttack();\n    const p1AppendTo = _dom_ele__WEBPACK_IMPORTED_MODULE_2__[\"default\"].p1Container;\n    const huBoardData = this.hu.gameBoard.board;\n    setTimeout(() => {\n      this.emit(\"render board\", {\n        appendTo: p1AppendTo,\n        boardData: huBoardData,\n        type: \"hu\",\n      });\n    }, 700);\n  },\n\n  placeShip() {},\n\n  checkWinner() {},\n};\n\n(0,_helpers_publisher__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(game);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (game);\n\n\n//# sourceURL=webpack://battleship/./src/game.js?");

/***/ }),

/***/ "./src/helpers/alphabets.js":
/*!**********************************!*\
  !*** ./src/helpers/alphabets.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst alphabets = [\"A\", \"B\", \"C\", \"D\", \"E\", \"F\", \"G\", \"H\", \"I\", \"J\"];\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (alphabets);\n\n\n//# sourceURL=webpack://battleship/./src/helpers/alphabets.js?");

/***/ }),

/***/ "./src/helpers/create-board.js":
/*!*************************************!*\
  !*** ./src/helpers/create-board.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _alphabets__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alphabets */ \"./src/helpers/alphabets.js\");\n\n\nconst createBoard = (size = 10) => {\n  const board = [];\n  for (let i = 0; i < size; i += 1) {\n    const row = [];\n    board.push(row);\n    for (let j = 0; j < size; j += 1) {\n      const tile = {\n        cord: `${_alphabets__WEBPACK_IMPORTED_MODULE_0__[\"default\"][i]}${j + 1}`,\n        ship: null,\n        isHit: false,\n        isMissed: false,\n      };\n      row.push(tile);\n    }\n  }\n  return board;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createBoard);\n\n\n//# sourceURL=webpack://battleship/./src/helpers/create-board.js?");

/***/ }),

/***/ "./src/helpers/create-ship.js":
/*!************************************!*\
  !*** ./src/helpers/create-ship.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _factories_ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../factories/ship */ \"./src/factories/ship.js\");\n\n\nfunction createShip(cords, type) {\n  const ship = new _factories_ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](cords, type);\n  return ship;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createShip);\n\n\n//# sourceURL=webpack://battleship/./src/helpers/create-ship.js?");

/***/ }),

/***/ "./src/helpers/fleet.js":
/*!******************************!*\
  !*** ./src/helpers/fleet.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst fleet = [\n  {\n    type: \"Carrier\",\n    len: 5,\n  },\n  {\n    type: \"Battleship\",\n    len: 4,\n  },\n  {\n    type: \"Cruiser\",\n    len: 3,\n  },\n  {\n    type: \"Destroyer\",\n    len: 3,\n  },\n  {\n    type: \"PatrolBoat\",\n    len: 2,\n  },\n];\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fleet);\n\n\n//# sourceURL=webpack://battleship/./src/helpers/fleet.js?");

/***/ }),

/***/ "./src/helpers/generate-random.js":
/*!****************************************!*\
  !*** ./src/helpers/generate-random.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _alphabets__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alphabets */ \"./src/helpers/alphabets.js\");\n\n\nfunction generateRandom() {\n  const randAlphabet = _alphabets__WEBPACK_IMPORTED_MODULE_0__[\"default\"][Math.floor(Math.random() * 10)];\n  const randDigit = Math.ceil(Math.random() * 10);\n  const randDir = [\"X\", \"Y\"][Math.floor(Math.random() * 2)];\n  const randCord = `${randAlphabet}${randDigit}`;\n  return { randCord, randDir };\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateRandom);\n\n\n//# sourceURL=webpack://battleship/./src/helpers/generate-random.js?");

/***/ }),

/***/ "./src/helpers/publisher.js":
/*!**********************************!*\
  !*** ./src/helpers/publisher.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst publisher = {\n  subscribers: {\n    any: [],\n  },\n\n  on(type, fn, context) {\n    const subType = type || \"any\";\n    const subFn = typeof fn === \"function\" ? fn : context[fn];\n\n    if (typeof this.subscribers[subType] === \"undefined\") {\n      this.subscribers[subType] = [];\n    }\n    this.subscribers[subType].push({ fn: subFn, context: context || this });\n  },\n\n  off(type, fn, context) {\n    this.visitSubscribers(\"unsubscribe\", type, fn, context);\n  },\n\n  emit(type, publication) {\n    this.visitSubscribers(\"publish\", type, publication);\n  },\n\n  visitSubscribers(action, type, arg, context) {\n    const pubType = type || \"any\";\n    const subscribers = this.subscribers[pubType];\n    let i;\n    const max = subscribers ? subscribers.length : 0;\n    for (i = 0; i < max; i += 1) {\n      if (action === \"publish\") {\n        subscribers[i].fn.call(subscribers[i].context, arg);\n      }\n      if (subscribers[i].fn === arg && subscribers[i].context === context) {\n        subscribers.splice(i, 1);\n      }\n    }\n  },\n};\n\nfunction makePublisher(o) {\n  const newPublisher = o;\n  Object.keys(publisher).forEach((ele) => {\n    if (typeof publisher[ele] === \"function\") {\n      newPublisher[ele] = publisher[ele];\n    }\n  });\n  newPublisher.subscribers = { any: [] };\n  return newPublisher;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (makePublisher);\n\n\n//# sourceURL=webpack://battleship/./src/helpers/publisher.js?");

/***/ }),

/***/ "./src/helpers/shuffle.js":
/*!********************************!*\
  !*** ./src/helpers/shuffle.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _alphabets__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alphabets */ \"./src/helpers/alphabets.js\");\n\n\nconst shuffle = () => {\n  let shuffledArray = [];\n  for (let x = 0; x < _alphabets__WEBPACK_IMPORTED_MODULE_0__[\"default\"].length; x += 1) {\n    const row = [];\n    shuffledArray.push(row);\n    for (let y = 0; y < _alphabets__WEBPACK_IMPORTED_MODULE_0__[\"default\"].length; y += 1) {\n      const coord = `${_alphabets__WEBPACK_IMPORTED_MODULE_0__[\"default\"][x]}${y + 1}`;\n      row.push(coord);\n    }\n  }\n  shuffledArray = shuffledArray.flat();\n\n  let i = shuffledArray.length;\n  let j = 0;\n  let temp;\n\n  // eslint-disable-next-line no-plusplus\n  while (i--) {\n    j = Math.floor(Math.random() * (i + 1));\n\n    // swap randomly chosen element with current element\n    temp = shuffledArray[i];\n    shuffledArray[i] = shuffledArray[j];\n    shuffledArray[j] = temp;\n  }\n\n  return shuffledArray;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (shuffle);\n\n\n//# sourceURL=webpack://battleship/./src/helpers/shuffle.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n/* harmony import */ var _dom_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom/ui */ \"./src/dom/ui.js\");\n/* harmony import */ var _dom_events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dom/events */ \"./src/dom/events.js\");\n/* harmony import */ var _images_carrier_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/carrier.png */ \"./src/images/carrier.png\");\n/* harmony import */ var _images_battleship_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/battleship.png */ \"./src/images/battleship.png\");\n/* harmony import */ var _images_cruiser_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/cruiser.png */ \"./src/images/cruiser.png\");\n/* harmony import */ var _images_destroyer_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/destroyer.png */ \"./src/images/destroyer.png\");\n/* harmony import */ var _images_patrol_boat_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/patrol-boat.png */ \"./src/images/patrol-boat.png\");\n\n\n// eslint-disable-next-line no-unused-vars\n\n// eslint-disable-next-line no-unused-vars\n\n\n\n\n\n\n\n\n_game__WEBPACK_IMPORTED_MODULE_1__[\"default\"].init();\n\n// ele.p2Container.addEventListener(\"click\", () => {\n//   const mediaQuery = window.matchMedia(\"(min-width: 1024px)\");\n\n//   if (!mediaQuery.matches) {\n//     ele.p1Container.classList.add(\"zoom-in\");\n//     ele.p1Container.classList.remove(\"zoom-out\");\n//     ele.p2Container.classList.add(\"zoom-out\");\n\n//     setTimeout(() => {\n//       ele.p1Container.classList.remove(\"zoom-in\");\n//       ele.p1Container.classList.add(\"zoom-out\");\n//       ele.p2Container.classList.remove(\"zoom-out\");\n//       ele.p2Container.classList.add(\"zoom-in\");\n//     }, 1000);\n//   }\n//   setTimeout(() => {\n//     ele.p1Container.classList.remove(\"zoom-out\");\n//     ele.p1Container.classList.remove(\"zoom-in\");\n//     ele.p2Container.classList.remove(\"zoom-out\");\n//     ele.p2Container.classList.remove(\"zoom-in\");\n//   }, 1400);\n// });\n\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/images/battleship.png":
/*!***********************************!*\
  !*** ./src/images/battleship.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"41e8244a8220ca1444b6.png\";\n\n//# sourceURL=webpack://battleship/./src/images/battleship.png?");

/***/ }),

/***/ "./src/images/carrier.png":
/*!********************************!*\
  !*** ./src/images/carrier.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2fe170a2ff162352da8a.png\";\n\n//# sourceURL=webpack://battleship/./src/images/carrier.png?");

/***/ }),

/***/ "./src/images/cruiser.png":
/*!********************************!*\
  !*** ./src/images/cruiser.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4d3c6418989f3d61ded2.png\";\n\n//# sourceURL=webpack://battleship/./src/images/cruiser.png?");

/***/ }),

/***/ "./src/images/destroyer.png":
/*!**********************************!*\
  !*** ./src/images/destroyer.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d041560f9135989a2b34.png\";\n\n//# sourceURL=webpack://battleship/./src/images/destroyer.png?");

/***/ }),

/***/ "./src/images/patrol-boat.png":
/*!************************************!*\
  !*** ./src/images/patrol-boat.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"578c3bc69693c7e17e54.png\";\n\n//# sourceURL=webpack://battleship/./src/images/patrol-boat.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;