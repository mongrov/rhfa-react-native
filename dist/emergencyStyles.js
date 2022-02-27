(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react-native"));
	else if(typeof define === 'function' && define.amd)
		define(["react-native"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react-native")) : factory(root["react-native"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE_react_native__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/emergencyStyles.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/emergencyStyles.js":
/*!********************************!*\
  !*** ./src/emergencyStyles.js ***!
  \********************************/
/*! exports provided: createStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStyles", function() { return createStyles; });
/* harmony import */ var react_native__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-native */ "react-native");
/* harmony import */ var react_native__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_native__WEBPACK_IMPORTED_MODULE_0__);

function createStyles({
  backgroundColor = '#e0e0e0',
  height = 32,
  headerColor = '#a0a0a0',
  panelBorderColor = '#a0a0a0',
  inputBorderColor = '#c0c0c0',
  inputBackgroundColor = '#ffffff',
  radioRadio = 8,
  radioColor = '#808080',
  radioSelectedColor = '#404040',
  buttonColor = '#909090',
  addColor = '#70a070',
  addTextColor = '#104010',
  removeColor = '#a07070',
  removeTextColor = '#ffe0e0',
  errorColor = '#601010',
  errorBackgroundColor = '#ffe0e0',
  miniHeight = 24,
  fontSize = 16
} = {}) {
  return react_native__WEBPACK_IMPORTED_MODULE_0__["StyleSheet"].create({
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: buttonColor,
      width: height,
      height
    },
    buttonMini: {
      width: miniHeight,
      height: miniHeight
    },
    panel: {
      borderColor: panelBorderColor,
      marginBottom: 2,
      borderWidth: 1,
      borderRadius: 4,
      borderStyle: 'solid'
    },
    panelHeader: {
      flex: 1,
      flexDirection: 'row',
      paddingVertical: 12,
      paddingHorizontal: 4,
      backgroundColor,
      shadowColor: '#101010',
      shadowOffset: {
        width: 0,
        height: 1
      },
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 3
    },
    panelHeaderText: {
      fontSize: fontSize - 2,
      fontWeight: 'bold'
    },
    panelContents: {
      paddingVertical: 4,
      paddingHorizontal: 8
    },
    container: {
      marginVertical: 4,
      paddingHorizontal: 4
    },
    erroredContainer: {
      backgroundColor: errorBackgroundColor,
      borderRadius: 2
    },
    input: {
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: inputBorderColor,
      backgroundColor: inputBackgroundColor,
      borderRadius: 4,
      paddingVertical: 8,
      fontSize,
      height
    },
    erroredInput: {
      borderWidth: 1.5,
      borderStyle: 'solid',
      borderColor: errorColor
    },
    labelContainer: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center'
    },
    label: {
      fontWeight: 'bold',
      marginVertical: 2
    },
    labelInfo: {
      color: '#404040',
      fontSize: fontSize - 2,
      marginLeft: 4
    },
    helperText: {
      fontSize: fontSize - 4,
      color: '#606060'
    },
    erroredHelperText: {
      fontStyle: 'italic',
      color: errorColor
    },
    error: {
      fontSize: fontSize - 4,
      fontStyle: 'italic',
      color: errorColor
    },
    radioContainer: {
      flex: 1,
      flexDirection: 'column'
    },
    radioLine: {
      flex: 1,
      flexDirection: 'row',
      marginVertical: 2,
      alignItems: 'center'
    },
    radioWrap: {
      width: 2 * radioRadio,
      height: 2 * radioRadio,
      borderRadius: radioRadio,
      borderWidth: 2,
      borderColor: radioColor,
      alignItems: 'center',
      justifyContent: 'center',
      marginHorizontal: 6
    },
    radioSelected: {
      width: radioRadio,
      height: radioRadio,
      borderRadius: radioRadio / 2,
      backgroundColor: radioSelectedColor
    },
    radioLabel: {
      fontSize: fontSize - 2,
      marginLeft: 6
    },
    checkboxWrap: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      marginLeft: 2
    },
    checkboxLabel: {
      fontSize: fontSize - 2,
      marginLeft: 4
    },
    sliderContainer: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'stretch'
    },
    sliderValue: {
      alignSelf: 'center'
    },
    buttonAdd: {
      backgroundColor: addColor,
      borderRadius: 2,
      shadowColor: '#102010',
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 2
    },
    buttonRemove: {
      backgroundColor: removeColor,
      borderRadius: 2,
      shadowColor: '#102010',
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 2
    },
    addText: {
      color: addTextColor
    },
    removeText: {
      color: removeTextColor
    },
    inputPanelWrap: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    inputPanelEntity: {
      fontSize: fontSize,
      fontWeight: 'bold'
    }
  });
}

/***/ }),

/***/ "react-native":
/*!*******************************!*\
  !*** external "react-native" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react_native__;

/***/ })

/******/ });
});
//# sourceMappingURL=emergencyStyles.js.map