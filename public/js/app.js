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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/scss/app.scss":
/*!***************************!*\
  !*** ./src/scss/app.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/css-loader/index.js):\nModuleBuildError: Module build failed (from ./node_modules/sass-loader/lib/loader.js):\n\r\n$stringa_verde {\r\n              ^\r\n      Expected \":\".\n  ╷\n1 │ $stringa_verde {\r\n  │                ^\n  ╵\n  src\\scss\\_variables.scss 1:16  root stylesheet\n  stdin 1:9                      root stylesheet\r\n      in C:\\MAMP\\htdocs\\esercizi\\php-ex-2\\src\\scss\\_variables.scss (line 1, column 16)\n    at runLoaders (C:\\MAMP\\htdocs\\esercizi\\php-ex-2\\node_modules\\webpack\\lib\\NormalModule.js:302:20)\n    at C:\\MAMP\\htdocs\\esercizi\\php-ex-2\\node_modules\\loader-runner\\lib\\LoaderRunner.js:367:11\n    at C:\\MAMP\\htdocs\\esercizi\\php-ex-2\\node_modules\\loader-runner\\lib\\LoaderRunner.js:233:18\n    at context.callback (C:\\MAMP\\htdocs\\esercizi\\php-ex-2\\node_modules\\loader-runner\\lib\\LoaderRunner.js:111:13)\n    at render (C:\\MAMP\\htdocs\\esercizi\\php-ex-2\\node_modules\\sass-loader\\lib\\loader.js:52:13)\n    at Function.$2 (C:\\MAMP\\htdocs\\esercizi\\php-ex-2\\node_modules\\sass\\sass.dart.js:24300:48)\n    at yb.$2 (C:\\MAMP\\htdocs\\esercizi\\php-ex-2\\node_modules\\sass\\sass.dart.js:15220:15)\n    at wf.lI (C:\\MAMP\\htdocs\\esercizi\\php-ex-2\\node_modules\\sass\\sass.dart.js:9168:42)\n    at wf.lH (C:\\MAMP\\htdocs\\esercizi\\php-ex-2\\node_modules\\sass\\sass.dart.js:9170:32)\n    at iQ.w2 (C:\\MAMP\\htdocs\\esercizi\\php-ex-2\\node_modules\\sass\\sass.dart.js:8439:46)\n    at vC.$0 (C:\\MAMP\\htdocs\\esercizi\\php-ex-2\\node_modules\\sass\\sass.dart.js:8575:7)\n    at Object.eU (C:\\MAMP\\htdocs\\esercizi\\php-ex-2\\node_modules\\sass\\sass.dart.js:1461:80)\n    at al.bc (C:\\MAMP\\htdocs\\esercizi\\php-ex-2\\node_modules\\sass\\sass.dart.js:8492:3)\n    at j3.bc (C:\\MAMP\\htdocs\\esercizi\\php-ex-2\\node_modules\\sass\\sass.dart.js:8434:25)\n    at j3.cA (C:\\MAMP\\htdocs\\esercizi\\php-ex-2\\node_modules\\sass\\sass.dart.js:8421:12)\n    at pV.cA (C:\\MAMP\\htdocs\\esercizi\\php-ex-2\\node_modules\\sass\\sass.dart.js:8203:35)\n    at Object.m (C:\\MAMP\\htdocs\\esercizi\\php-ex-2\\node_modules\\sass\\sass.dart.js:1351:19)\n    at C:\\MAMP\\htdocs\\esercizi\\php-ex-2\\node_modules\\sass\\sass.dart.js:5080:51\n    at yG.a (C:\\MAMP\\htdocs\\esercizi\\php-ex-2\\node_modules\\sass\\sass.dart.js:1359:71)\n    at yG.$2 (C:\\MAMP\\htdocs\\esercizi\\php-ex-2\\node_modules\\sass\\sass.dart.js:8222:23)\n    at xd.$2 (C:\\MAMP\\htdocs\\esercizi\\php-ex-2\\node_modules\\sass\\sass.dart.js:8217:25)\n    at wf.lI (C:\\MAMP\\htdocs\\esercizi\\php-ex-2\\node_modules\\sass\\sass.dart.js:9168:42)\n    at wf.lH (C:\\MAMP\\htdocs\\esercizi\\php-ex-2\\node_modules\\sass\\sass.dart.js:9170:32)\n    at iQ.w2 (C:\\MAMP\\htdocs\\esercizi\\php-ex-2\\node_modules\\sass\\sass.dart.js:8439:46)\n    at vC.$0 (C:\\MAMP\\htdocs\\esercizi\\php-ex-2\\node_modules\\sass\\sass.dart.js:8575:7)\n    at Object.eU (C:\\MAMP\\htdocs\\esercizi\\php-ex-2\\node_modules\\sass\\sass.dart.js:1461:80)\n    at al.bc (C:\\MAMP\\htdocs\\esercizi\\php-ex-2\\node_modules\\sass\\sass.dart.js:8492:3)\n    at j3.bc (C:\\MAMP\\htdocs\\esercizi\\php-ex-2\\node_modules\\sass\\sass.dart.js:8434:25)\n    at j3.cA (C:\\MAMP\\htdocs\\esercizi\\php-ex-2\\node_modules\\sass\\sass.dart.js:8421:12)\n    at Object.eval (eval at Eg (C:\\MAMP\\htdocs\\esercizi\\php-ex-2\\node_modules\\sass\\sass.dart.js:628:8), <anonymous>:3:37)\n    at wf.lI (C:\\MAMP\\htdocs\\esercizi\\php-ex-2\\node_modules\\sass\\sass.dart.js:9168:42)\n    at wf.lH (C:\\MAMP\\htdocs\\esercizi\\php-ex-2\\node_modules\\sass\\sass.dart.js:9170:32)\n    at iQ.w2 (C:\\MAMP\\htdocs\\esercizi\\php-ex-2\\node_modules\\sass\\sass.dart.js:8439:46)\n    at vC.$0 (C:\\MAMP\\htdocs\\esercizi\\php-ex-2\\node_modules\\sass\\sass.dart.js:8575:7)\n    at Object.eU (C:\\MAMP\\htdocs\\esercizi\\php-ex-2\\node_modules\\sass\\sass.dart.js:1461:80)\n    at al.bc (C:\\MAMP\\htdocs\\esercizi\\php-ex-2\\node_modules\\sass\\sass.dart.js:8492:3)");

/***/ }),

/***/ 0:
/*!*************************************************!*\
  !*** multi ./src/js/app.js ./src/scss/app.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\MAMP\htdocs\esercizi\php-ex-2\src\js\app.js */"./src/js/app.js");
module.exports = __webpack_require__(/*! C:\MAMP\htdocs\esercizi\php-ex-2\src\scss\app.scss */"./src/scss/app.scss");


/***/ })

/******/ });