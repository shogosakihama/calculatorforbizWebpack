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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_getTime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/getTime.js */ \"./src/modules/getTime.js\");\n// getTime.jsをインポート\n // getTime.jsに定義された機能を実行。\n\nvar getTime = new _modules_getTime_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\ngetTime.show();\nconsole.log(getTime);\n\nfunction AlertSplitByComma() {\n  // ▼出力用の変数\n  var RetSource1 = []; // ▼テキスト入力欄に入力された文字列を得て、カンマ記号で分割して配列に得る\n\n  var resArray1 = document.getElementById('sampleCommaInput1').value.split(\",\");\n\n  if (resArray1 == \"\") {\n    resArray1 = [];\n  }\n\n  ; // ▼配列1つ1つに対して処理\n\n  for (var i = 0; i < resArray1.length; i++) {\n    RetSource1.push(resArray1[i]);\n  } // ▼出力用の変数\n\n\n  var RetSource2 = []; // ▼テキスト入力欄に入力された文字列を得て、カンマ記号で分割して配列に得る\n\n  var resArray2 = document.getElementById('sampleCommaInput2').value.split(\",\");\n\n  if (resArray2 == \"\") {\n    resArray2 = [];\n  }\n\n  ; // ▼配列1つ1つに対して処理\n\n  for (var i = 0; i < resArray2.length; i++) {\n    RetSource2.push(resArray2[i]);\n    console.log(RetSource2);\n  } // ▼出力用の変数\n\n\n  var RetSource3 = []; // ▼テキスト入力欄に入力された文字列を得て、カンマ記号で分割して配列に得る\n\n  var resArray3 = document.getElementById('sampleCommaInput3').value.split(\",\");\n\n  if (resArray3 == \"\") {\n    resArray3 = [];\n  }\n\n  ; // ▼配列1つ1つに対して処理\n\n  for (var i = 0; i < resArray3.length; i++) {\n    RetSource3.push(resArray3[i]);\n    console.log(RetSource3);\n  }\n\n  var arr1 = RetSource1;\n  var arr2 = RetSource2;\n  var arr3 = RetSource3; //配列内の重複を削除\n\n  arr1 = arr1.filter(function (x, i, self) {\n    return self.indexOf(x) === i;\n  });\n  arr2 = arr2.filter(function (x, i, self) {\n    return self.indexOf(x) === i;\n  });\n  arr3 = arr3.filter(function (x, i, self) {\n    return self.indexOf(x) === i;\n  }); //配列を1つにまとめる\n  //var arrs = [arr1, arr2, arr3];\n\n  var arrsCon = arr1.concat(arr2).concat(arr3);\n  var arrx = arrsCon.filter(function (val, idx, arr) {\n    // 最初に見つかった位置と最後に見つかった位置が一緒であれば\n    return arr.indexOf(val) === arr.lastIndexOf(val);\n  }); //文字列ならシングルクォーテーションを加える\n\n  for (var i = 0, n = arrx.length; i < n; ++i) {\n    if (isNaN(arrx[i])) {\n      arrx[i] = \"\\'\" + arrx[i] + \"\\'\";\n    }\n  }\n\n  var arr1a = arr1.filter(function (val, idx, arrx) {\n    // 最初に見つかった位置と最後に見つかった位置が一緒であれば\n    return arr1.indexOf(val) === arrx.indexOf(val);\n  });\n  console.log(\"arr1: \" + arr1a);\n\n  if (RetSource1 == [\"e\", \"e\"]) {\n    console.log(\"一致\");\n  }\n\n  var arr2a = arrx.filter(function (val, idx, arr2) {\n    // 最初に見つかった位置と最後に見つかった位置が一緒であれば\n    return arr2.indexOf(val) === arrx.indexOf(val);\n  });\n  console.log(\"arr2: \" + arr2a);\n  var arr3a = arrx.filter(function (val, idx, arr3) {\n    // 最初に見つかった位置と最後に見つかった位置が一緒であれば\n    return arr3.indexOf(val) === arrx.indexOf(val);\n  });\n  console.log(\"arr3: \" + arr3a);\n  var h1 = document.getElementById(\"title\");\n  h1.textContent = arr3a;\n}\n\n//# sourceURL=webpack://js/./src/index.js?");

/***/ }),

/***/ "./src/modules/getTime.js":
/*!********************************!*\
  !*** ./src/modules/getTime.js ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ GetTime)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\n// export文を使ってGetTimeを定義。\nvar GetTime = /*#__PURE__*/function () {\n  function GetTime() {\n    _classCallCheck(this, GetTime);\n\n    this.now = new Date();\n    this.hour = this.now.getHours();\n    this.min = this.now.getMinutes();\n    this.sec = this.now.getSeconds();\n  } // 現在時刻を表示\n\n\n  _createClass(GetTime, [{\n    key: \"show\",\n    value: function show() {\n      alert(\"\".concat(this.hour, \"\\u6642\").concat(this.min, \"\\u5206\").concat(this.sec, \"\\u79D2\"));\n    }\n  }]);\n\n  return GetTime;\n}();\n\n\n\n//# sourceURL=webpack://js/./src/modules/getTime.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;