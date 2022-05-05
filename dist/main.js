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

/***/ "./src/components/ProductItem.js":
/*!***************************************!*\
  !*** ./src/components/ProductItem.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ProductItem\": () => (/* binding */ ProductItem)\n/* harmony export */ });\n\n\nfunction ProductItem({product}) {\n  return `\n    <div class=\"product ${product.isOnStock ? \"is-on-stock\" : \"is-not-on-stock\"}\">\n      <div class=\"product-field\">\n        <span class=\"product-label\">Name:</span>${product.name}\n      </div>\n      <div class=\"product-field\">\n        <span class=\"product-label\">Type:</span>${product.type}\n      </div>\n      <div class=\"product-field\">\n        <span class=\"product-label\">Price:</span>${product.price}\n      </div>\n      <div class=\"product-field\">\n        <span class=\"product-label\">Currency:</span>${product.currency}\n      </div>\n      <div class=\"product-field\">\n        <span class=\"product-label\">Image:</span>${product.image}\n      </div>\n      <div class=\"product-field\">\n        <span class=\"product-label\">IsOnStock:</span>${product.isOnStock}\n      </div>\n    </div>\n  `\n}\n\n//# sourceURL=webpack://product-app/./src/components/ProductItem.js?");

/***/ }),

/***/ "./src/components/ProductPage.js":
/*!***************************************!*\
  !*** ./src/components/ProductPage.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ProductPage\": () => (/* binding */ ProductPage)\n/* harmony export */ });\n\n\nfunction ProductPage({children}) {\n\n  return `\n    <div class=\"page\">\n      <div class=\"container\">\n        <h1>New Items!</h1>\n        <div class=\"product-grid\">\n          ${children.join(\" \")}\n        </div>\n      </div>\n    </div>\n  `\n}\n\n//# sourceURL=webpack://product-app/./src/components/ProductPage.js?");

/***/ }),

/***/ "./src/fetch-products.js":
/*!*******************************!*\
  !*** ./src/fetch-products.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fetchProducts\": () => (/* binding */ fetchProducts)\n/* harmony export */ });\n\n\nasync function fetchProducts() {\n  const response = await fetch(\"https://product-app-101-server.vercel.app/api/products\");\n  return response.json();\n}\n\n//# sourceURL=webpack://product-app/./src/fetch-products.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _fetch_products__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetch-products */ \"./src/fetch-products.js\");\n/* harmony import */ var _components_ProductItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/ProductItem */ \"./src/components/ProductItem.js\");\n/* harmony import */ var _components_ProductPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/ProductPage */ \"./src/components/ProductPage.js\");\n/* harmony import */ var _reactivity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reactivity */ \"./src/reactivity.js\");\n\n\n\n\n\n\n(function() {\n  runApp();\n\n  async function runApp() {\n    try {\n      const products = await (0,_fetch_products__WEBPACK_IMPORTED_MODULE_0__.fetchProducts)();\n      const children = products.map(product => (0,_components_ProductItem__WEBPACK_IMPORTED_MODULE_1__.ProductItem)({product}))\n      _reactivity__WEBPACK_IMPORTED_MODULE_3__.ReactivityDOM.render((0,_components_ProductPage__WEBPACK_IMPORTED_MODULE_2__.ProductPage)({children}));\n    } catch(error) {\n      console.error(error.message);\n    }\n  }\n})()\n\n\n\n//# sourceURL=webpack://product-app/./src/main.js?");

/***/ }),

/***/ "./src/reactivity.js":
/*!***************************!*\
  !*** ./src/reactivity.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ReactivityDOM\": () => (/* binding */ ReactivityDOM)\n/* harmony export */ });\n\n\n\nconst ReactivityDOM = (function() {\n  function render(child) {  \n    const app = document.getElementById(\"app\");\n    veryUnsecureFunction();\n\n    app.insertAdjacentHTML(\n      \"beforeend\", \n      child\n    ); \n  }\n\n  function veryUnsecureFunction() {\n    console.log(\"I am doing something important\");\n  }\n\n  // API\n  return {\n    render\n  }\n})()\n\n\n// This is our tiny example framework, we can call ReactivityDOM\n// Framework decides the rules how to work with framework, \n// what functions are accesible (API)\n// Benefits: easier to work, to collaborate, faster to develop,\n// you can focus on bussines logic of your app instead of handling DOM or html elements\n\n//# sourceURL=webpack://product-app/./src/reactivity.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;