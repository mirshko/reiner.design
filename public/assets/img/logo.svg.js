/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 18);
/******/ })
/************************************************************************/
/******/ ({

/***/ 18:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(19);


/***/ }),

/***/ 19:
/***/ (function(module, exports) {

module.exports = "<svg width=\"28\" height=\"28\" viewBox=\"0 0 28 28\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns:figma=\"http://www.figma.com/figma/ns\">\n<title>B</title>\n<desc>Created using Figma</desc>\n<g id=\"Canvas\" transform=\"translate(540 573)\" figma:type=\"canvas\">\n<g id=\"B\" figma:type=\"vector\">\n<use xlink:href=\"#path0_fill\" transform=\"translate(-540 -573)\" fill=\"#212121\"/>\n</g>\n</g>\n<defs>\n<path id=\"path0_fill\" fill-rule=\"evenodd\" d=\"M 0 0L 28 0L 28 28L 0 28L 0 0ZM 12 16L 4 16L 4 24L 6 24L 6 21L 10 21L 10 19L 6 19L 6 18L 12 18L 12 16ZM 24 16L 16 16L 16 24L 18 24L 18 21L 22 21L 22 19L 18 19L 18 18L 24 18L 24 16ZM 16 12L 16 4L 24 4L 24 6L 18 6L 18 7L 22 7L 22 9L 18 9L 18 10L 24 10L 24 12L 16 12ZM 12 4L 4 4L 4 6L 8 6L 8 10L 6 10L 6 8L 4 8L 4 12L 10 12L 10 6L 12 6L 12 4Z\"/>\n</defs>\n</svg>\n"

/***/ })

/******/ });