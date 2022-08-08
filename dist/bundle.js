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

eval("__webpack_require__.r(__webpack_exports__);\n// getTime.jsをインポート\n//import GetTime from './modules/getTime.js';\n// getTime.jsに定義された機能を実行。\nvar getTime = new GetTime();\ngetTime.show();\nconsole.log(getTime);\n\nfunction AlertSplitByComma() {\n  // ▼出力用の変数\n  var RetSource1 = []; // ▼テキスト入力欄に入力された文字列を得て、カンマ記号で分割して配列に得る\n\n  var resArray1 = document.getElementById('sampleCommaInput1').value.split(\",\");\n\n  if (resArray1 == \"\") {\n    resArray1 = [];\n  }\n\n  ; // ▼配列1つ1つに対して処理\n\n  for (var i = 0; i < resArray1.length; i++) {\n    RetSource1.push(resArray1[i]);\n  } // ▼出力用の変数\n\n\n  var RetSource2 = []; // ▼テキスト入力欄に入力された文字列を得て、カンマ記号で分割して配列に得る\n\n  var resArray2 = document.getElementById('sampleCommaInput2').value.split(\",\");\n\n  if (resArray2 == \"\") {\n    resArray2 = [];\n  }\n\n  ; // ▼配列1つ1つに対して処理\n\n  for (var i = 0; i < resArray2.length; i++) {\n    RetSource2.push(resArray2[i]);\n    console.log(RetSource2);\n  } // ▼出力用の変数\n\n\n  var RetSource3 = []; // ▼テキスト入力欄に入力された文字列を得て、カンマ記号で分割して配列に得る\n\n  var resArray3 = document.getElementById('sampleCommaInput3').value.split(\",\");\n\n  if (resArray3 == \"\") {\n    resArray3 = [];\n  }\n\n  ; // ▼配列1つ1つに対して処理\n\n  for (var i = 0; i < resArray3.length; i++) {\n    RetSource3.push(resArray3[i]);\n    console.log(RetSource3);\n  }\n\n  var arr1 = RetSource1;\n  var arr2 = RetSource2;\n  var arr3 = RetSource3; //配列内の重複を削除\n\n  arr1 = arr1.filter(function (x, i, self) {\n    return self.indexOf(x) === i;\n  });\n  arr2 = arr2.filter(function (x, i, self) {\n    return self.indexOf(x) === i;\n  });\n  arr3 = arr3.filter(function (x, i, self) {\n    return self.indexOf(x) === i;\n  }); //配列を1つにまとめる\n  //var arrs = [arr1, arr2, arr3];\n\n  var arrsCon = arr1.concat(arr2).concat(arr3);\n  var arrx = arrsCon.filter(function (val, idx, arr) {\n    // 最初に見つかった位置と最後に見つかった位置が一緒であれば\n    return arr.indexOf(val) === arr.lastIndexOf(val);\n  }); //文字列ならシングルクォーテーションを加える\n\n  for (var i = 0, n = arrx.length; i < n; ++i) {\n    if (isNaN(arrx[i])) {\n      arrx[i] = \"\\'\" + arrx[i] + \"\\'\";\n    }\n  }\n\n  var arr1a = arr1.filter(function (val, idx, arrx) {\n    // 最初に見つかった位置と最後に見つかった位置が一緒であれば\n    return arr1.indexOf(val) === arrx.indexOf(val);\n  });\n  console.log(\"arr1: \" + arr1a);\n\n  if (RetSource1 == [\"e\", \"e\"]) {\n    console.log(\"一致\");\n  }\n\n  var arr2a = arrx.filter(function (val, idx, arr2) {\n    // 最初に見つかった位置と最後に見つかった位置が一緒であれば\n    return arr2.indexOf(val) === arrx.indexOf(val);\n  });\n  console.log(\"arr2: \" + arr2a);\n  var arr3a = arrx.filter(function (val, idx, arr3) {\n    // 最初に見つかった位置と最後に見つかった位置が一緒であれば\n    return arr3.indexOf(val) === arrx.indexOf(val);\n  });\n  console.log(\"arr3: \" + arr3a);\n  var h1 = document.getElementById(\"title\");\n  h1.textContent = arr3a;\n}\n\n//# sourceURL=webpack://js/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;