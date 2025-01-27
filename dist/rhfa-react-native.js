(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@react-native-community/checkbox"), require("@react-native-community/slider"), require("@react-native-picker/picker"), require("react"), require("react-hook-form"), require("react-native"));
	else if(typeof define === 'function' && define.amd)
		define(["@react-native-community/checkbox", "@react-native-community/slider", "@react-native-picker/picker", "react", "react-hook-form", "react-native"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("@react-native-community/checkbox"), require("@react-native-community/slider"), require("@react-native-picker/picker"), require("react"), require("react-hook-form"), require("react-native")) : factory(root["@react-native-community/checkbox"], root["@react-native-community/slider"], root["@react-native-picker/picker"], root["react"], root["react-hook-form"], root["react-native"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE__react_native_community_checkbox__, __WEBPACK_EXTERNAL_MODULE__react_native_community_slider__, __WEBPACK_EXTERNAL_MODULE__react_native_picker_picker__, __WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_react_hook_form__, __WEBPACK_EXTERNAL_MODULE_react_native__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/react-hook-form-auto/dist/base.js":
/*!********************************************************!*\
  !*** ./node_modules/react-hook-form-auto/dist/base.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
  if (true) module.exports = factory(__webpack_require__(/*! react */ "react"), __webpack_require__(/*! react-hook-form */ "react-hook-form"));else { var i, a; }
})(window, function (__WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_react_hook_form__) {
  return (
    /******/
    function (modules) {
      // webpackBootstrap

      /******/
      // The module cache

      /******/
      var installedModules = {};
      /******/

      /******/
      // The require function

      /******/

      function __webpack_require__(moduleId) {
        /******/

        /******/
        // Check if module is in cache

        /******/
        if (installedModules[moduleId]) {
          /******/
          return installedModules[moduleId].exports;
          /******/
        }
        /******/
        // Create a new module (and put it into the cache)

        /******/


        var module = installedModules[moduleId] = {
          /******/
          i: moduleId,

          /******/
          l: false,

          /******/
          exports: {}
          /******/

        };
        /******/

        /******/
        // Execute the module function

        /******/

        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/

        /******/
        // Flag the module as loaded

        /******/

        module.l = true;
        /******/

        /******/
        // Return the exports of the module

        /******/

        return module.exports;
        /******/
      }
      /******/

      /******/

      /******/
      // expose the modules object (__webpack_modules__)

      /******/


      __webpack_require__.m = modules;
      /******/

      /******/
      // expose the module cache

      /******/

      __webpack_require__.c = installedModules;
      /******/

      /******/
      // define getter function for harmony exports

      /******/

      __webpack_require__.d = function (exports, name, getter) {
        /******/
        if (!__webpack_require__.o(exports, name)) {
          /******/
          Object.defineProperty(exports, name, {
            enumerable: true,
            get: getter
          });
          /******/
        }
        /******/

      };
      /******/

      /******/
      // define __esModule on exports

      /******/


      __webpack_require__.r = function (exports) {
        /******/
        if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
          /******/
          Object.defineProperty(exports, Symbol.toStringTag, {
            value: 'Module'
          });
          /******/
        }
        /******/


        Object.defineProperty(exports, '__esModule', {
          value: true
        });
        /******/
      };
      /******/

      /******/
      // create a fake namespace object

      /******/
      // mode & 1: value is a module id, require it

      /******/
      // mode & 2: merge all properties of value into the ns

      /******/
      // mode & 4: return value when already ns object

      /******/
      // mode & 8|1: behave like require

      /******/


      __webpack_require__.t = function (value, mode) {
        /******/
        if (mode & 1) value = __webpack_require__(value);
        /******/

        if (mode & 8) return value;
        /******/

        if (mode & 4 && typeof value === 'object' && value && value.__esModule) return value;
        /******/

        var ns = Object.create(null);
        /******/

        __webpack_require__.r(ns);
        /******/


        Object.defineProperty(ns, 'default', {
          enumerable: true,
          value: value
        });
        /******/

        if (mode & 2 && typeof value != 'string') for (var key in value) __webpack_require__.d(ns, key, function (key) {
          return value[key];
        }.bind(null, key));
        /******/

        return ns;
        /******/
      };
      /******/

      /******/
      // getDefaultExport function for compatibility with non-harmony modules

      /******/


      __webpack_require__.n = function (module) {
        /******/
        var getter = module && module.__esModule ?
        /******/
        function getDefault() {
          return module['default'];
        } :
        /******/
        function getModuleExports() {
          return module;
        };
        /******/

        __webpack_require__.d(getter, 'a', getter);
        /******/


        return getter;
        /******/
      };
      /******/

      /******/
      // Object.prototype.hasOwnProperty.call

      /******/


      __webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      };
      /******/

      /******/
      // __webpack_public_path__

      /******/


      __webpack_require__.p = "";
      /******/

      /******/

      /******/
      // Load entry module and return exports

      /******/

      return __webpack_require__(__webpack_require__.s = 0);
      /******/
    }
    /************************************************************************/

    /******/
    ({
      /***/
      "./node_modules/classnames/index.js":
      /*!******************************************!*\
        !*** ./node_modules/classnames/index.js ***!
        \******************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
        /*!
        Copyright (c) 2018 Jed Watson.
        Licensed under the MIT License (MIT), see
        http://jedwatson.github.io/classnames
        */

        /* global define */


        (function () {
          'use strict';

          var hasOwn = {}.hasOwnProperty;

          function classNames() {
            var classes = [];

            for (var i = 0; i < arguments.length; i++) {
              var arg = arguments[i];
              if (!arg) continue;
              var argType = typeof arg;

              if (argType === 'string' || argType === 'number') {
                classes.push(arg);
              } else if (Array.isArray(arg)) {
                if (arg.length) {
                  var inner = classNames.apply(null, arg);

                  if (inner) {
                    classes.push(inner);
                  }
                }
              } else if (argType === 'object') {
                if (arg.toString === Object.prototype.toString) {
                  for (var key in arg) {
                    if (hasOwn.call(arg, key) && arg[key]) {
                      classes.push(key);
                    }
                  }
                } else {
                  classes.push(arg.toString());
                }
              }
            }

            return classes.join(' ');
          }

          if ( true && module.exports) {
            classNames.default = classNames;
            module.exports = classNames;
          } else if (true) {
            // register as 'classnames', consistent with npm package name
            !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
              return classNames;
            }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
          } else {}
        })();
        /***/

      },

      /***/
      "./node_modules/object-assign/index.js":
      /*!*********************************************!*\
        !*** ./node_modules/object-assign/index.js ***!
        \*********************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        "use strict";
        /*
        object-assign
        (c) Sindre Sorhus
        @license MIT
        */

        /* eslint-disable no-unused-vars */

        var getOwnPropertySymbols = Object.getOwnPropertySymbols;
        var hasOwnProperty = Object.prototype.hasOwnProperty;
        var propIsEnumerable = Object.prototype.propertyIsEnumerable;

        function toObject(val) {
          if (val === null || val === undefined) {
            throw new TypeError('Object.assign cannot be called with null or undefined');
          }

          return Object(val);
        }

        function shouldUseNative() {
          try {
            if (!Object.assign) {
              return false;
            } // Detect buggy property enumeration order in older V8 versions.
            // https://bugs.chromium.org/p/v8/issues/detail?id=4118


            var test1 = new String('abc'); // eslint-disable-line no-new-wrappers

            test1[5] = 'de';

            if (Object.getOwnPropertyNames(test1)[0] === '5') {
              return false;
            } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


            var test2 = {};

            for (var i = 0; i < 10; i++) {
              test2['_' + String.fromCharCode(i)] = i;
            }

            var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
              return test2[n];
            });

            if (order2.join('') !== '0123456789') {
              return false;
            } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


            var test3 = {};
            'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
              test3[letter] = letter;
            });

            if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
              return false;
            }

            return true;
          } catch (err) {
            // We don't expect any of the above to throw, but better to be safe.
            return false;
          }
        }

        module.exports = shouldUseNative() ? Object.assign : function (target, source) {
          var from;
          var to = toObject(target);
          var symbols;

          for (var s = 1; s < arguments.length; s++) {
            from = Object(arguments[s]);

            for (var key in from) {
              if (hasOwnProperty.call(from, key)) {
                to[key] = from[key];
              }
            }

            if (getOwnPropertySymbols) {
              symbols = getOwnPropertySymbols(from);

              for (var i = 0; i < symbols.length; i++) {
                if (propIsEnumerable.call(from, symbols[i])) {
                  to[symbols[i]] = from[symbols[i]];
                }
              }
            }
          }

          return to;
        };
        /***/
      },

      /***/
      "./node_modules/react/cjs/react-jsx-runtime.development.js":
      /*!*****************************************************************!*\
        !*** ./node_modules/react/cjs/react-jsx-runtime.development.js ***!
        \*****************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        "use strict";
        /** @license React v17.0.2
         * react-jsx-runtime.development.js
         *
         * Copyright (c) Facebook, Inc. and its affiliates.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         */

        if (true) {
          (function () {
            'use strict';

            var React = __webpack_require__(
            /*! react */
            "react");

            var _assign = __webpack_require__(
            /*! object-assign */
            "./node_modules/object-assign/index.js"); // ATTENTION
            // When adding new symbols to this file,
            // Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
            // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
            // nor polyfill, then a plain number is used for performance.


            var REACT_ELEMENT_TYPE = 0xeac7;
            var REACT_PORTAL_TYPE = 0xeaca;
            exports.Fragment = 0xeacb;
            var REACT_STRICT_MODE_TYPE = 0xeacc;
            var REACT_PROFILER_TYPE = 0xead2;
            var REACT_PROVIDER_TYPE = 0xeacd;
            var REACT_CONTEXT_TYPE = 0xeace;
            var REACT_FORWARD_REF_TYPE = 0xead0;
            var REACT_SUSPENSE_TYPE = 0xead1;
            var REACT_SUSPENSE_LIST_TYPE = 0xead8;
            var REACT_MEMO_TYPE = 0xead3;
            var REACT_LAZY_TYPE = 0xead4;
            var REACT_BLOCK_TYPE = 0xead9;
            var REACT_SERVER_BLOCK_TYPE = 0xeada;
            var REACT_FUNDAMENTAL_TYPE = 0xead5;
            var REACT_SCOPE_TYPE = 0xead7;
            var REACT_OPAQUE_ID_TYPE = 0xeae0;
            var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
            var REACT_OFFSCREEN_TYPE = 0xeae2;
            var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;

            if (typeof Symbol === 'function' && Symbol.for) {
              var symbolFor = Symbol.for;
              REACT_ELEMENT_TYPE = symbolFor('react.element');
              REACT_PORTAL_TYPE = symbolFor('react.portal');
              exports.Fragment = symbolFor('react.fragment');
              REACT_STRICT_MODE_TYPE = symbolFor('react.strict_mode');
              REACT_PROFILER_TYPE = symbolFor('react.profiler');
              REACT_PROVIDER_TYPE = symbolFor('react.provider');
              REACT_CONTEXT_TYPE = symbolFor('react.context');
              REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
              REACT_SUSPENSE_TYPE = symbolFor('react.suspense');
              REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
              REACT_MEMO_TYPE = symbolFor('react.memo');
              REACT_LAZY_TYPE = symbolFor('react.lazy');
              REACT_BLOCK_TYPE = symbolFor('react.block');
              REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
              REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
              REACT_SCOPE_TYPE = symbolFor('react.scope');
              REACT_OPAQUE_ID_TYPE = symbolFor('react.opaque.id');
              REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
              REACT_OFFSCREEN_TYPE = symbolFor('react.offscreen');
              REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
            }

            var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
            var FAUX_ITERATOR_SYMBOL = '@@iterator';

            function getIteratorFn(maybeIterable) {
              if (maybeIterable === null || typeof maybeIterable !== 'object') {
                return null;
              }

              var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

              if (typeof maybeIterator === 'function') {
                return maybeIterator;
              }

              return null;
            }

            var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

            function error(format) {
              {
                for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                  args[_key2 - 1] = arguments[_key2];
                }

                printWarning('error', format, args);
              }
            }

            function printWarning(level, format, args) {
              // When changing this logic, you might want to also
              // update consoleWithStackDev.www.js as well.
              {
                var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
                var stack = ReactDebugCurrentFrame.getStackAddendum();

                if (stack !== '') {
                  format += '%s';
                  args = args.concat([stack]);
                }

                var argsWithFormat = args.map(function (item) {
                  return '' + item;
                }); // Careful: RN currently depends on this prefix

                argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
                // breaks IE9: https://github.com/facebook/react/issues/13610
                // eslint-disable-next-line react-internal/no-production-logging

                Function.prototype.apply.call(console[level], console, argsWithFormat);
              }
            } // Filter certain DOM attributes (e.g. src, href) if their values are empty strings.


            var enableScopeAPI = false; // Experimental Create Event Handle API.

            function isValidElementType(type) {
              if (typeof type === 'string' || typeof type === 'function') {
                return true;
              } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


              if (type === exports.Fragment || type === REACT_PROFILER_TYPE || type === REACT_DEBUG_TRACING_MODE_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI) {
                return true;
              }

              if (typeof type === 'object' && type !== null) {
                if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
                  return true;
                }
              }

              return false;
            }

            function getWrappedName(outerType, innerType, wrapperName) {
              var functionName = innerType.displayName || innerType.name || '';
              return outerType.displayName || (functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName);
            }

            function getContextName(type) {
              return type.displayName || 'Context';
            }

            function getComponentName(type) {
              if (type == null) {
                // Host root, text node or just invalid type.
                return null;
              }

              {
                if (typeof type.tag === 'number') {
                  error('Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
                }
              }

              if (typeof type === 'function') {
                return type.displayName || type.name || null;
              }

              if (typeof type === 'string') {
                return type;
              }

              switch (type) {
                case exports.Fragment:
                  return 'Fragment';

                case REACT_PORTAL_TYPE:
                  return 'Portal';

                case REACT_PROFILER_TYPE:
                  return 'Profiler';

                case REACT_STRICT_MODE_TYPE:
                  return 'StrictMode';

                case REACT_SUSPENSE_TYPE:
                  return 'Suspense';

                case REACT_SUSPENSE_LIST_TYPE:
                  return 'SuspenseList';
              }

              if (typeof type === 'object') {
                switch (type.$$typeof) {
                  case REACT_CONTEXT_TYPE:
                    var context = type;
                    return getContextName(context) + '.Consumer';

                  case REACT_PROVIDER_TYPE:
                    var provider = type;
                    return getContextName(provider._context) + '.Provider';

                  case REACT_FORWARD_REF_TYPE:
                    return getWrappedName(type, type.render, 'ForwardRef');

                  case REACT_MEMO_TYPE:
                    return getComponentName(type.type);

                  case REACT_BLOCK_TYPE:
                    return getComponentName(type._render);

                  case REACT_LAZY_TYPE:
                    {
                      var lazyComponent = type;
                      var payload = lazyComponent._payload;
                      var init = lazyComponent._init;

                      try {
                        return getComponentName(init(payload));
                      } catch (x) {
                        return null;
                      }
                    }
                }
              }

              return null;
            } // Helpers to patch console.logs to avoid logging during side-effect free
            // replaying on render function. This currently only patches the object
            // lazily which won't cover if the log function was extracted eagerly.
            // We could also eagerly patch the method.


            var disabledDepth = 0;
            var prevLog;
            var prevInfo;
            var prevWarn;
            var prevError;
            var prevGroup;
            var prevGroupCollapsed;
            var prevGroupEnd;

            function disabledLog() {}

            disabledLog.__reactDisabledLog = true;

            function disableLogs() {
              {
                if (disabledDepth === 0) {
                  /* eslint-disable react-internal/no-production-logging */
                  prevLog = console.log;
                  prevInfo = console.info;
                  prevWarn = console.warn;
                  prevError = console.error;
                  prevGroup = console.group;
                  prevGroupCollapsed = console.groupCollapsed;
                  prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

                  var props = {
                    configurable: true,
                    enumerable: true,
                    value: disabledLog,
                    writable: true
                  }; // $FlowFixMe Flow thinks console is immutable.

                  Object.defineProperties(console, {
                    info: props,
                    log: props,
                    warn: props,
                    error: props,
                    group: props,
                    groupCollapsed: props,
                    groupEnd: props
                  });
                  /* eslint-enable react-internal/no-production-logging */
                }

                disabledDepth++;
              }
            }

            function reenableLogs() {
              {
                disabledDepth--;

                if (disabledDepth === 0) {
                  /* eslint-disable react-internal/no-production-logging */
                  var props = {
                    configurable: true,
                    enumerable: true,
                    writable: true
                  }; // $FlowFixMe Flow thinks console is immutable.

                  Object.defineProperties(console, {
                    log: _assign({}, props, {
                      value: prevLog
                    }),
                    info: _assign({}, props, {
                      value: prevInfo
                    }),
                    warn: _assign({}, props, {
                      value: prevWarn
                    }),
                    error: _assign({}, props, {
                      value: prevError
                    }),
                    group: _assign({}, props, {
                      value: prevGroup
                    }),
                    groupCollapsed: _assign({}, props, {
                      value: prevGroupCollapsed
                    }),
                    groupEnd: _assign({}, props, {
                      value: prevGroupEnd
                    })
                  });
                  /* eslint-enable react-internal/no-production-logging */
                }

                if (disabledDepth < 0) {
                  error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
                }
              }
            }

            var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
            var prefix;

            function describeBuiltInComponentFrame(name, source, ownerFn) {
              {
                if (prefix === undefined) {
                  // Extract the VM specific prefix used by each line.
                  try {
                    throw Error();
                  } catch (x) {
                    var match = x.stack.trim().match(/\n( *(at )?)/);
                    prefix = match && match[1] || '';
                  }
                } // We use the prefix to ensure our stacks line up with native stack frames.


                return '\n' + prefix + name;
              }
            }

            var reentry = false;
            var componentFrameCache;
            {
              var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
              componentFrameCache = new PossiblyWeakMap();
            }

            function describeNativeComponentFrame(fn, construct) {
              // If something asked for a stack inside a fake render, it should get ignored.
              if (!fn || reentry) {
                return '';
              }

              {
                var frame = componentFrameCache.get(fn);

                if (frame !== undefined) {
                  return frame;
                }
              }
              var control;
              reentry = true;
              var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

              Error.prepareStackTrace = undefined;
              var previousDispatcher;
              {
                previousDispatcher = ReactCurrentDispatcher.current; // Set the dispatcher in DEV because this might be call in the render function
                // for warnings.

                ReactCurrentDispatcher.current = null;
                disableLogs();
              }

              try {
                // This should throw.
                if (construct) {
                  // Something should be setting the props in the constructor.
                  var Fake = function () {
                    throw Error();
                  }; // $FlowFixMe


                  Object.defineProperty(Fake.prototype, 'props', {
                    set: function () {
                      // We use a throwing setter instead of frozen or non-writable props
                      // because that won't throw in a non-strict mode function.
                      throw Error();
                    }
                  });

                  if (typeof Reflect === 'object' && Reflect.construct) {
                    // We construct a different control for this case to include any extra
                    // frames added by the construct call.
                    try {
                      Reflect.construct(Fake, []);
                    } catch (x) {
                      control = x;
                    }

                    Reflect.construct(fn, [], Fake);
                  } else {
                    try {
                      Fake.call();
                    } catch (x) {
                      control = x;
                    }

                    fn.call(Fake.prototype);
                  }
                } else {
                  try {
                    throw Error();
                  } catch (x) {
                    control = x;
                  }

                  fn();
                }
              } catch (sample) {
                // This is inlined manually because closure doesn't do it for us.
                if (sample && control && typeof sample.stack === 'string') {
                  // This extracts the first frame from the sample that isn't also in the control.
                  // Skipping one frame that we assume is the frame that calls the two.
                  var sampleLines = sample.stack.split('\n');
                  var controlLines = control.stack.split('\n');
                  var s = sampleLines.length - 1;
                  var c = controlLines.length - 1;

                  while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
                    // We expect at least one stack frame to be shared.
                    // Typically this will be the root most one. However, stack frames may be
                    // cut off due to maximum stack limits. In this case, one maybe cut off
                    // earlier than the other. We assume that the sample is longer or the same
                    // and there for cut off earlier. So we should find the root most frame in
                    // the sample somewhere in the control.
                    c--;
                  }

                  for (; s >= 1 && c >= 0; s--, c--) {
                    // Next we find the first one that isn't the same which should be the
                    // frame that called our sample function and the control.
                    if (sampleLines[s] !== controlLines[c]) {
                      // In V8, the first line is describing the message but other VMs don't.
                      // If we're about to return the first line, and the control is also on the same
                      // line, that's a pretty good indicator that our sample threw at same line as
                      // the control. I.e. before we entered the sample frame. So we ignore this result.
                      // This can happen if you passed a class to function component, or non-function.
                      if (s !== 1 || c !== 1) {
                        do {
                          s--;
                          c--; // We may still have similar intermediate frames from the construct call.
                          // The next one that isn't the same should be our match though.

                          if (c < 0 || sampleLines[s] !== controlLines[c]) {
                            // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                            var _frame = '\n' + sampleLines[s].replace(' at new ', ' at ');

                            {
                              if (typeof fn === 'function') {
                                componentFrameCache.set(fn, _frame);
                              }
                            } // Return the line we found.

                            return _frame;
                          }
                        } while (s >= 1 && c >= 0);
                      }

                      break;
                    }
                  }
                }
              } finally {
                reentry = false;
                {
                  ReactCurrentDispatcher.current = previousDispatcher;
                  reenableLogs();
                }
                Error.prepareStackTrace = previousPrepareStackTrace;
              } // Fallback to just using the name if we couldn't make it throw.


              var name = fn ? fn.displayName || fn.name : '';
              var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';
              {
                if (typeof fn === 'function') {
                  componentFrameCache.set(fn, syntheticFrame);
                }
              }
              return syntheticFrame;
            }

            function describeFunctionComponentFrame(fn, source, ownerFn) {
              {
                return describeNativeComponentFrame(fn, false);
              }
            }

            function shouldConstruct(Component) {
              var prototype = Component.prototype;
              return !!(prototype && prototype.isReactComponent);
            }

            function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
              if (type == null) {
                return '';
              }

              if (typeof type === 'function') {
                {
                  return describeNativeComponentFrame(type, shouldConstruct(type));
                }
              }

              if (typeof type === 'string') {
                return describeBuiltInComponentFrame(type);
              }

              switch (type) {
                case REACT_SUSPENSE_TYPE:
                  return describeBuiltInComponentFrame('Suspense');

                case REACT_SUSPENSE_LIST_TYPE:
                  return describeBuiltInComponentFrame('SuspenseList');
              }

              if (typeof type === 'object') {
                switch (type.$$typeof) {
                  case REACT_FORWARD_REF_TYPE:
                    return describeFunctionComponentFrame(type.render);

                  case REACT_MEMO_TYPE:
                    // Memo may contain any component type so we recursively resolve it.
                    return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

                  case REACT_BLOCK_TYPE:
                    return describeFunctionComponentFrame(type._render);

                  case REACT_LAZY_TYPE:
                    {
                      var lazyComponent = type;
                      var payload = lazyComponent._payload;
                      var init = lazyComponent._init;

                      try {
                        // Lazy may contain any component type so we recursively resolve it.
                        return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
                      } catch (x) {}
                    }
                }
              }

              return '';
            }

            var loggedTypeFailures = {};
            var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;

            function setCurrentlyValidatingElement(element) {
              {
                if (element) {
                  var owner = element._owner;
                  var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
                  ReactDebugCurrentFrame.setExtraStackFrame(stack);
                } else {
                  ReactDebugCurrentFrame.setExtraStackFrame(null);
                }
              }
            }

            function checkPropTypes(typeSpecs, values, location, componentName, element) {
              {
                // $FlowFixMe This is okay but Flow doesn't know it.
                var has = Function.call.bind(Object.prototype.hasOwnProperty);

                for (var typeSpecName in typeSpecs) {
                  if (has(typeSpecs, typeSpecName)) {
                    var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
                    // fail the render phase where it didn't fail before. So we log it.
                    // After these have been cleaned up, we'll let them throw.

                    try {
                      // This is intentionally an invariant that gets caught. It's the same
                      // behavior as without this statement except with a better message.
                      if (typeof typeSpecs[typeSpecName] !== 'function') {
                        var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
                        err.name = 'Invariant Violation';
                        throw err;
                      }

                      error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
                    } catch (ex) {
                      error$1 = ex;
                    }

                    if (error$1 && !(error$1 instanceof Error)) {
                      setCurrentlyValidatingElement(element);
                      error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);
                      setCurrentlyValidatingElement(null);
                    }

                    if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
                      // Only monitor this failure once because there tends to be a lot of the
                      // same error.
                      loggedTypeFailures[error$1.message] = true;
                      setCurrentlyValidatingElement(element);
                      error('Failed %s type: %s', location, error$1.message);
                      setCurrentlyValidatingElement(null);
                    }
                  }
                }
              }
            }

            var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
            var hasOwnProperty = Object.prototype.hasOwnProperty;
            var RESERVED_PROPS = {
              key: true,
              ref: true,
              __self: true,
              __source: true
            };
            var specialPropKeyWarningShown;
            var specialPropRefWarningShown;
            var didWarnAboutStringRefs;
            {
              didWarnAboutStringRefs = {};
            }

            function hasValidRef(config) {
              {
                if (hasOwnProperty.call(config, 'ref')) {
                  var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

                  if (getter && getter.isReactWarning) {
                    return false;
                  }
                }
              }
              return config.ref !== undefined;
            }

            function hasValidKey(config) {
              {
                if (hasOwnProperty.call(config, 'key')) {
                  var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

                  if (getter && getter.isReactWarning) {
                    return false;
                  }
                }
              }
              return config.key !== undefined;
            }

            function warnIfStringRefCannotBeAutoConverted(config, self) {
              {
                if (typeof config.ref === 'string' && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
                  var componentName = getComponentName(ReactCurrentOwner.current.type);

                  if (!didWarnAboutStringRefs[componentName]) {
                    error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', getComponentName(ReactCurrentOwner.current.type), config.ref);
                    didWarnAboutStringRefs[componentName] = true;
                  }
                }
              }
            }

            function defineKeyPropWarningGetter(props, displayName) {
              {
                var warnAboutAccessingKey = function () {
                  if (!specialPropKeyWarningShown) {
                    specialPropKeyWarningShown = true;
                    error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
                  }
                };

                warnAboutAccessingKey.isReactWarning = true;
                Object.defineProperty(props, 'key', {
                  get: warnAboutAccessingKey,
                  configurable: true
                });
              }
            }

            function defineRefPropWarningGetter(props, displayName) {
              {
                var warnAboutAccessingRef = function () {
                  if (!specialPropRefWarningShown) {
                    specialPropRefWarningShown = true;
                    error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
                  }
                };

                warnAboutAccessingRef.isReactWarning = true;
                Object.defineProperty(props, 'ref', {
                  get: warnAboutAccessingRef,
                  configurable: true
                });
              }
            }
            /**
             * Factory method to create a new React element. This no longer adheres to
             * the class pattern, so do not use new to call it. Also, instanceof check
             * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
             * if something is a React Element.
             *
             * @param {*} type
             * @param {*} props
             * @param {*} key
             * @param {string|object} ref
             * @param {*} owner
             * @param {*} self A *temporary* helper to detect places where `this` is
             * different from the `owner` when React.createElement is called, so that we
             * can warn. We want to get rid of owner and replace string `ref`s with arrow
             * functions, and as long as `this` and owner are the same, there will be no
             * change in behavior.
             * @param {*} source An annotation object (added by a transpiler or otherwise)
             * indicating filename, line number, and/or other information.
             * @internal
             */


            var ReactElement = function (type, key, ref, self, source, owner, props) {
              var element = {
                // This tag allows us to uniquely identify this as a React Element
                $$typeof: REACT_ELEMENT_TYPE,
                // Built-in properties that belong on the element
                type: type,
                key: key,
                ref: ref,
                props: props,
                // Record the component responsible for creating this element.
                _owner: owner
              };
              {
                // The validation flag is currently mutative. We put it on
                // an external backing store so that we can freeze the whole object.
                // This can be replaced with a WeakMap once they are implemented in
                // commonly used development environments.
                element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
                // the validation flag non-enumerable (where possible, which should
                // include every environment we run tests in), so the test framework
                // ignores it.

                Object.defineProperty(element._store, 'validated', {
                  configurable: false,
                  enumerable: false,
                  writable: true,
                  value: false
                }); // self and source are DEV only properties.

                Object.defineProperty(element, '_self', {
                  configurable: false,
                  enumerable: false,
                  writable: false,
                  value: self
                }); // Two elements created in two different places should be considered
                // equal for testing purposes and therefore we hide it from enumeration.

                Object.defineProperty(element, '_source', {
                  configurable: false,
                  enumerable: false,
                  writable: false,
                  value: source
                });

                if (Object.freeze) {
                  Object.freeze(element.props);
                  Object.freeze(element);
                }
              }
              return element;
            };
            /**
             * https://github.com/reactjs/rfcs/pull/107
             * @param {*} type
             * @param {object} props
             * @param {string} key
             */


            function jsxDEV(type, config, maybeKey, source, self) {
              {
                var propName; // Reserved names are extracted

                var props = {};
                var key = null;
                var ref = null; // Currently, key can be spread in as a prop. This causes a potential
                // issue if key is also explicitly declared (ie. <div {...props} key="Hi" />
                // or <div key="Hi" {...props} /> ). We want to deprecate key spread,
                // but as an intermediary step, we will use jsxDEV for everything except
                // <div {...props} key="Hi" />, because we aren't currently able to tell if
                // key is explicitly declared to be undefined or not.

                if (maybeKey !== undefined) {
                  key = '' + maybeKey;
                }

                if (hasValidKey(config)) {
                  key = '' + config.key;
                }

                if (hasValidRef(config)) {
                  ref = config.ref;
                  warnIfStringRefCannotBeAutoConverted(config, self);
                } // Remaining properties are added to a new props object


                for (propName in config) {
                  if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                    props[propName] = config[propName];
                  }
                } // Resolve default props


                if (type && type.defaultProps) {
                  var defaultProps = type.defaultProps;

                  for (propName in defaultProps) {
                    if (props[propName] === undefined) {
                      props[propName] = defaultProps[propName];
                    }
                  }
                }

                if (key || ref) {
                  var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

                  if (key) {
                    defineKeyPropWarningGetter(props, displayName);
                  }

                  if (ref) {
                    defineRefPropWarningGetter(props, displayName);
                  }
                }

                return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
              }
            }

            var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
            var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

            function setCurrentlyValidatingElement$1(element) {
              {
                if (element) {
                  var owner = element._owner;
                  var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
                  ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
                } else {
                  ReactDebugCurrentFrame$1.setExtraStackFrame(null);
                }
              }
            }

            var propTypesMisspellWarningShown;
            {
              propTypesMisspellWarningShown = false;
            }
            /**
             * Verifies the object is a ReactElement.
             * See https://reactjs.org/docs/react-api.html#isvalidelement
             * @param {?object} object
             * @return {boolean} True if `object` is a ReactElement.
             * @final
             */

            function isValidElement(object) {
              {
                return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
              }
            }

            function getDeclarationErrorAddendum() {
              {
                if (ReactCurrentOwner$1.current) {
                  var name = getComponentName(ReactCurrentOwner$1.current.type);

                  if (name) {
                    return '\n\nCheck the render method of `' + name + '`.';
                  }
                }

                return '';
              }
            }

            function getSourceInfoErrorAddendum(source) {
              {
                if (source !== undefined) {
                  var fileName = source.fileName.replace(/^.*[\\\/]/, '');
                  var lineNumber = source.lineNumber;
                  return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
                }

                return '';
              }
            }
            /**
             * Warn if there's no key explicitly set on dynamic arrays of children or
             * object keys are not valid. This allows us to keep track of children between
             * updates.
             */


            var ownerHasKeyUseWarning = {};

            function getCurrentComponentErrorInfo(parentType) {
              {
                var info = getDeclarationErrorAddendum();

                if (!info) {
                  var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

                  if (parentName) {
                    info = "\n\nCheck the top-level render call using <" + parentName + ">.";
                  }
                }

                return info;
              }
            }
            /**
             * Warn if the element doesn't have an explicit key assigned to it.
             * This element is in an array. The array could grow and shrink or be
             * reordered. All children that haven't already been validated are required to
             * have a "key" property assigned to it. Error statuses are cached so a warning
             * will only be shown once.
             *
             * @internal
             * @param {ReactElement} element Element that requires a key.
             * @param {*} parentType element's parent's type.
             */


            function validateExplicitKey(element, parentType) {
              {
                if (!element._store || element._store.validated || element.key != null) {
                  return;
                }

                element._store.validated = true;
                var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

                if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
                  return;
                }

                ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
                // property, it may be the creator of the child that's responsible for
                // assigning it a key.

                var childOwner = '';

                if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
                  // Give the component that originally created this child.
                  childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
                }

                setCurrentlyValidatingElement$1(element);
                error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);
                setCurrentlyValidatingElement$1(null);
              }
            }
            /**
             * Ensure that every element either is passed in a static location, in an
             * array with an explicit keys property defined, or in an object literal
             * with valid key property.
             *
             * @internal
             * @param {ReactNode} node Statically passed child of any type.
             * @param {*} parentType node's parent's type.
             */


            function validateChildKeys(node, parentType) {
              {
                if (typeof node !== 'object') {
                  return;
                }

                if (Array.isArray(node)) {
                  for (var i = 0; i < node.length; i++) {
                    var child = node[i];

                    if (isValidElement(child)) {
                      validateExplicitKey(child, parentType);
                    }
                  }
                } else if (isValidElement(node)) {
                  // This element was passed in a valid location.
                  if (node._store) {
                    node._store.validated = true;
                  }
                } else if (node) {
                  var iteratorFn = getIteratorFn(node);

                  if (typeof iteratorFn === 'function') {
                    // Entry iterators used to provide implicit keys,
                    // but now we print a separate warning for them later.
                    if (iteratorFn !== node.entries) {
                      var iterator = iteratorFn.call(node);
                      var step;

                      while (!(step = iterator.next()).done) {
                        if (isValidElement(step.value)) {
                          validateExplicitKey(step.value, parentType);
                        }
                      }
                    }
                  }
                }
              }
            }
            /**
             * Given an element, validate that its props follow the propTypes definition,
             * provided by the type.
             *
             * @param {ReactElement} element
             */


            function validatePropTypes(element) {
              {
                var type = element.type;

                if (type === null || type === undefined || typeof type === 'string') {
                  return;
                }

                var propTypes;

                if (typeof type === 'function') {
                  propTypes = type.propTypes;
                } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
                // Inner props are checked in the reconciler.
                type.$$typeof === REACT_MEMO_TYPE)) {
                  propTypes = type.propTypes;
                } else {
                  return;
                }

                if (propTypes) {
                  // Intentionally inside to avoid triggering lazy initializers:
                  var name = getComponentName(type);
                  checkPropTypes(propTypes, element.props, 'prop', name, element);
                } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
                  propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

                  var _name = getComponentName(type);

                  error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
                }

                if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
                  error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
                }
              }
            }
            /**
             * Given a fragment, validate that it can only be provided with fragment props
             * @param {ReactElement} fragment
             */


            function validateFragmentProps(fragment) {
              {
                var keys = Object.keys(fragment.props);

                for (var i = 0; i < keys.length; i++) {
                  var key = keys[i];

                  if (key !== 'children' && key !== 'key') {
                    setCurrentlyValidatingElement$1(fragment);
                    error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);
                    setCurrentlyValidatingElement$1(null);
                    break;
                  }
                }

                if (fragment.ref !== null) {
                  setCurrentlyValidatingElement$1(fragment);
                  error('Invalid attribute `ref` supplied to `React.Fragment`.');
                  setCurrentlyValidatingElement$1(null);
                }
              }
            }

            function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
              {
                var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
                // succeed and there will likely be errors in render.

                if (!validType) {
                  var info = '';

                  if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
                    info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
                  }

                  var sourceInfo = getSourceInfoErrorAddendum(source);

                  if (sourceInfo) {
                    info += sourceInfo;
                  } else {
                    info += getDeclarationErrorAddendum();
                  }

                  var typeString;

                  if (type === null) {
                    typeString = 'null';
                  } else if (Array.isArray(type)) {
                    typeString = 'array';
                  } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
                    typeString = "<" + (getComponentName(type.type) || 'Unknown') + " />";
                    info = ' Did you accidentally export a JSX literal instead of a component?';
                  } else {
                    typeString = typeof type;
                  }

                  error('React.jsx: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
                }

                var element = jsxDEV(type, props, key, source, self); // The result can be nullish if a mock or a custom function is used.
                // TODO: Drop this when these are no longer allowed as the type argument.

                if (element == null) {
                  return element;
                } // Skip key warning if the type isn't valid since our key validation logic
                // doesn't expect a non-string/function type and can throw confusing errors.
                // We don't want exception behavior to differ between dev and prod.
                // (Rendering will throw with a helpful message and as soon as the type is
                // fixed, the key warnings will appear.)


                if (validType) {
                  var children = props.children;

                  if (children !== undefined) {
                    if (isStaticChildren) {
                      if (Array.isArray(children)) {
                        for (var i = 0; i < children.length; i++) {
                          validateChildKeys(children[i], type);
                        }

                        if (Object.freeze) {
                          Object.freeze(children);
                        }
                      } else {
                        error('React.jsx: Static children should always be an array. ' + 'You are likely explicitly calling React.jsxs or React.jsxDEV. ' + 'Use the Babel transform instead.');
                      }
                    } else {
                      validateChildKeys(children, type);
                    }
                  }
                }

                if (type === exports.Fragment) {
                  validateFragmentProps(element);
                } else {
                  validatePropTypes(element);
                }

                return element;
              }
            } // These two functions exist to still get child warnings in dev
            // even with the prod transform. This means that jsxDEV is purely
            // opt-in behavior for better messages but that we won't stop
            // giving you warnings if you use production apis.


            function jsxWithValidationStatic(type, props, key) {
              {
                return jsxWithValidation(type, props, key, true);
              }
            }

            function jsxWithValidationDynamic(type, props, key) {
              {
                return jsxWithValidation(type, props, key, false);
              }
            }

            var jsx = jsxWithValidationDynamic; // we may want to special case jsxs internally to take advantage of static children.
            // for now we can ship identical prod functions

            var jsxs = jsxWithValidationStatic;
            exports.jsx = jsx;
            exports.jsxs = jsxs;
          })();
        }
        /***/

      },

      /***/
      "./node_modules/react/jsx-runtime.js":
      /*!*******************************************!*\
        !*** ./node_modules/react/jsx-runtime.js ***!
        \*******************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        "use strict";

        if (false) {} else {
          module.exports = __webpack_require__(
          /*! ./cjs/react-jsx-runtime.development.js */
          "./node_modules/react/cjs/react-jsx-runtime.development.js");
        }
        /***/

      },

      /***/
      "./src/autoform_state.js":
      /*!*******************************!*\
        !*** ./src/autoform_state.js ***!
        \*******************************/

      /*! exports provided: useAutoformState, useAutofieldState */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "useAutoformState", function () {
          return useAutoformState;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "useAutofieldState", function () {
          return useAutofieldState;
        });
        /* harmony import */


        var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! react */
        "react");
        /* harmony import */


        var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
        /* harmony import */


        var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! ./utils */
        "./src/utils.js");
        /* harmony import */


        var _coercing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! ./coercing */
        "./src/coercing.js");
        /* harmony import */


        var _pubsub__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! ./pubsub */
        "./src/pubsub.js");

        function ownKeys(object, enumerableOnly) {
          var keys = Object.keys(object);

          if (Object.getOwnPropertySymbols) {
            var symbols = Object.getOwnPropertySymbols(object);

            if (enumerableOnly) {
              symbols = symbols.filter(function (sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
              });
            }

            keys.push.apply(keys, symbols);
          }

          return keys;
        }

        function _objectSpread(target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i] != null ? arguments[i] : {};

            if (i % 2) {
              ownKeys(Object(source), true).forEach(function (key) {
                _defineProperty(target, key, source[key]);
              });
            } else if (Object.getOwnPropertyDescriptors) {
              Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
            } else {
              ownKeys(Object(source)).forEach(function (key) {
                Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
              });
            }
          }

          return target;
        }

        function _defineProperty(obj, key, value) {
          if (key in obj) {
            Object.defineProperty(obj, key, {
              value: value,
              enumerable: true,
              configurable: true,
              writable: true
            });
          } else {
            obj[key] = value;
          }

          return obj;
        }

        const useAutoformState = ({
          initialValues,
          onSubmit,
          onChange,
          schema,
          skin,
          formHook,
          skipManualReset
        }) => {
          const stateRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])({
            stateControl: new _pubsub__WEBPACK_IMPORTED_MODULE_3__["PubSub"](),
            fields: {}
          });
          const {
            stateControl
          } = stateRef.current;
          const coercersBase = {
            initialValues,
            stateRef,
            skin,
            onSubmit,
            schema
          };
          const coercedSubmit = Object(_coercing__WEBPACK_IMPORTED_MODULE_2__["createCoercers"])(_objectSpread(_objectSpread({}, coercersBase), {}, {
            notify: onSubmit
          }));
          let coercedChange;

          if (onChange) {
            const coercedChangeDoc = onChange && Object(_coercing__WEBPACK_IMPORTED_MODULE_2__["createCoercers"])(_objectSpread(_objectSpread({}, coercersBase), {}, {
              notify: onChange
            }));

            coercedChange = () => {
              const doc = formHook.getValues();
              return coercedChangeDoc(doc);
            };
          } else {
            coercedChange = null;
          }

          const schemaDef = schema.getSchema();

          const findOrInitState = name => {
            return Object(_utils__WEBPACK_IMPORTED_MODULE_1__["valueOrCreate"])(stateRef.current.fields, name, () => {
              const nameForVisible = `${name}.initiallyVisible`;
              const initiallyVisible = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["objectTraverse"])(schemaDef, nameForVisible, {
                returnValue: true
              });
              return {
                visible: initiallyVisible === null ? true : initiallyVisible,
                helperText: null
              };
            });
          };

          const setValue = (name, value, options = {}) => {
            const fieldState = findOrInitState(name);

            const newState = _objectSpread(_objectSpread({}, fieldState), {}, {
              value,
              changed: true
            });

            if (!options.skipSetInput) formHook.setValue(name, value, options);
          };

          stateControl.findOrInitState = findOrInitState;
          stateControl.setValue = setValue;
          /**
           * Sets values in the stateRef. Doesn't trigger.
           */

          const setValues = (values, {
            parent = null,
            field
          }) => {
            const fields = Object.keys(values);
            fields.forEach(field => {
              const cur = values[field];

              if (typeof cur == 'object') {
                return setValues(cur, {
                  parent: field,
                  field
                });
              } else {
                const name = inputName({
                  parent,
                  field
                });
                findOrInitState(fieldName);
              }
            });
          };

          const resetState = (values, omit) => {
            stateRef.current.fields = {};
            setValues(values || {});
            const currentValues = formHook.getValues();

            if (!skipManualReset) {
              // Reset by setting everything to initialValues or null.
              function resetValues(obj, initials = {}, path = '', isArray = false) {
                const fields = Object.keys(obj);
                fields.forEach((field, idx) => {
                  const value = obj[field];
                  const elPath = isArray ? `${path}.${idx}` : path ? `${path}.${field}` : field;
                  const initial = initials[field];
                  if (typeof value == 'object') resetValues(value, initial, elPath, Array.isArray(value));else {
                    const initialOrNull = typeof initial == 'undefined' ? null : initial;
                    formHook.setValue(elPath, initialOrNull);
                  }
                });
              }

              resetValues(currentValues, initialValues);
            }

            formHook.reset(values, omit);
          };

          const changeAndPublish = (name, attr, value) => {
            const state = findOrInitState(name);
            stateControl.publish(name, _objectSpread(_objectSpread({}, state), {}, {
              [attr]: value
            }));
            state[attr] = value;
          };

          const setVisible = (name, visible) => {
            changeAndPublish(name, 'visible', visible);
          };

          const setHelperText = (name, text) => {
            changeAndPublish(name, 'helperText', text);
          };

          return {
            coercedSubmit,
            coercedChange,
            setValue,
            setVisible,
            setHelperText,
            resetState,
            stateControl
          };
        }; // Subscribes to visible, helperText and potential future additions


        const useAutofieldState = ({
          name,
          stateControl
        }) => {
          const initialState = stateControl.findOrInitState(name);
          const [state, setState] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(_objectSpread({}, initialState));
          Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
            stateControl.subscribe(name, setState);
            return () => {
              stateControl.unsubscribe(name, setState);
            };
          }, []);
          return state;
        };
        /***/

      },

      /***/
      "./src/coercing.js":
      /*!*************************!*\
        !*** ./src/coercing.js ***!
        \*************************/

      /*! exports provided: createCoercers */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "createCoercers", function () {
          return createCoercers;
        });
        /* harmony import */


        var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! ./utils */
        "./src/utils.js");

        function createCoercers({
          initialValues,
          stateRef,
          skin,
          notify,
          schema
        }) {
          return function coercedSubmit(doc) {
            const coerceObject = ({
              object,
              schemaDef
            }) => {
              const fields = Object.keys(schemaDef);
              const result = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["deepmerge"])({}, object);
              fields.forEach(fieldName => {
                const fieldSchema = schemaDef[fieldName];
                const {
                  type
                } = fieldSchema;
                const typeKey = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["schemaTypeEx"])(type);
                const {
                  coerce
                } = fieldSchema.coerce ? fieldSchema : skin[typeKey];
                const value = object[fieldName];

                if (coerce) {
                  result[fieldName] = coerce(value, {
                    coerceObject,
                    schemaDef,
                    fieldName
                  });
                }
              });
              return result;
            };

            const coerceWithSchema = ({
              doc,
              schema
            }) => {
              const schemaDef = schema.getSchema();
              return coerceObject({
                object: doc,
                schemaDef
              });
            };

            const fields = Object.keys(stateRef.current.fields);
            const values = fields.reduce((values, field) => {
              const state = stateRef.current.fields[field];

              if (state.visible) {
                const [container, attr] = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["objectTraverse"])(values, field, {
                  createIfMissing: true
                });
                const [docContainer] = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["objectTraverse"])(doc, field);

                if (container && attr) {
                  if (state.changed) container[attr] = state.value;else if (docContainer) container[attr] = docContainer[attr];
                }
              }

              return values;
            }, {});
            const wholeObj = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["deepmerge"])({}, initialValues, values);
            const coerced = coerceWithSchema({
              doc: wholeObj,
              schema
            });
            notify(coerced, doc);
          };
        }
        /***/

      },

      /***/
      "./src/createSchema.js":
      /*!*****************************!*\
        !*** ./src/createSchema.js ***!
        \*****************************/

      /*! exports provided: createSchema */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "createSchema", function () {
          return createSchema;
        });
        /**
         * Creates a Schema from the specification.
         *
         * @function
         * @param {string} typeName Name of the model being created.
         *    It can be chosen freely.
         * @param {object} schema Schema specification.
         */


        function createSchema(typeName, schema) {
          return {
            _type: 'schema',

            /**
             * Returns the schema specification.
             *
             * @returns {object} Schema specification.
             */
            getSchema: () => schema,

            /**
             * Returns the schema specification.
             *
             * @returns {object} Schema specification.
             */
            getFieldSchema: name => schema[name],

            /**
             * Returns the schema name.
             *
             * @returns {string} Schema name (also called ``typeName``).
             */
            getType: () => typeName,

            /**
             * Returns the name of the fields.
             */
            getFieldNames: () => Object.keys(schema)
          };
        }
        /***/

      },

      /***/
      "./src/index_base.js":
      /*!***************************!*\
        !*** ./src/index_base.js ***!
        \***************************/

      /*! exports provided: addTranslations, setTranslator, tr, stringExists, setTranslateVariableRegex, setTranslateReferenceRegex, processOptions, objectTraverse, setLanguageByName, addLanguageTranslations, trModel, trField, trError, trPath, trPathSetBase, createSchema, AutoformBase, validationRules, registerValidation, renderInput, renderInputs */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony import */


        var _translate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! ./translate */
        "./src/translate.js");
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "addTranslations", function () {
          return _translate__WEBPACK_IMPORTED_MODULE_0__["addTranslations"];
        });
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "setTranslator", function () {
          return _translate__WEBPACK_IMPORTED_MODULE_0__["setTranslator"];
        });
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "tr", function () {
          return _translate__WEBPACK_IMPORTED_MODULE_0__["tr"];
        });
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "stringExists", function () {
          return _translate__WEBPACK_IMPORTED_MODULE_0__["stringExists"];
        });
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "setTranslateVariableRegex", function () {
          return _translate__WEBPACK_IMPORTED_MODULE_0__["setTranslateVariableRegex"];
        });
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "setTranslateReferenceRegex", function () {
          return _translate__WEBPACK_IMPORTED_MODULE_0__["setTranslateReferenceRegex"];
        });
        /* harmony import */


        var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! ./utils */
        "./src/utils.js");
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "processOptions", function () {
          return _utils__WEBPACK_IMPORTED_MODULE_1__["processOptions"];
        });
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "objectTraverse", function () {
          return _utils__WEBPACK_IMPORTED_MODULE_1__["objectTraverse"];
        });
        /* harmony import */


        var _translation_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! ./translation_utils */
        "./src/translation_utils.js");
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "setLanguageByName", function () {
          return _translation_utils__WEBPACK_IMPORTED_MODULE_2__["setLanguageByName"];
        });
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "addLanguageTranslations", function () {
          return _translation_utils__WEBPACK_IMPORTED_MODULE_2__["addLanguageTranslations"];
        });
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "trModel", function () {
          return _translation_utils__WEBPACK_IMPORTED_MODULE_2__["trModel"];
        });
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "trField", function () {
          return _translation_utils__WEBPACK_IMPORTED_MODULE_2__["trField"];
        });
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "trError", function () {
          return _translation_utils__WEBPACK_IMPORTED_MODULE_2__["trError"];
        });
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "trPath", function () {
          return _translation_utils__WEBPACK_IMPORTED_MODULE_2__["trPath"];
        });
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "trPathSetBase", function () {
          return _translation_utils__WEBPACK_IMPORTED_MODULE_2__["trPathSetBase"];
        });
        /* harmony import */


        var _createSchema__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! ./createSchema */
        "./src/createSchema.js");
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "createSchema", function () {
          return _createSchema__WEBPACK_IMPORTED_MODULE_3__["createSchema"];
        });
        /* harmony import */


        var _ui_AutoformBase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
        /*! ./ui/AutoformBase */
        "./src/ui/AutoformBase.jsx");
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "AutoformBase", function () {
          return _ui_AutoformBase__WEBPACK_IMPORTED_MODULE_4__["AutoformBase"];
        });
        /* harmony import */


        var _ui_componentRender__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
        /*! ./ui/componentRender */
        "./src/ui/componentRender.jsx");
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "validationRules", function () {
          return _ui_componentRender__WEBPACK_IMPORTED_MODULE_5__["validationRules"];
        });
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "registerValidation", function () {
          return _ui_componentRender__WEBPACK_IMPORTED_MODULE_5__["registerValidation"];
        });
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "renderInput", function () {
          return _ui_componentRender__WEBPACK_IMPORTED_MODULE_5__["renderInput"];
        });
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "renderInputs", function () {
          return _ui_componentRender__WEBPACK_IMPORTED_MODULE_5__["renderInputs"];
        });
        /***/

      },

      /***/
      "./src/pubsub.js":
      /*!***********************!*\
        !*** ./src/pubsub.js ***!
        \***********************/

      /*! exports provided: PubSub */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "PubSub", function () {
          return PubSub;
        });
        /* harmony import */


        var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! ./utils */
        "./src/utils.js");

        class PubSub {
          constructor() {
            this.handlers = {};
          }

          subscribe(name, callback) {
            const handlers = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["valueOrCreate"])(this.handlers, name, () => []);
            const formerIndex = handlers.indexOf(callback);
            if (formerIndex == -1) handlers.push(callback);
          }

          unsubscribe(name, callback) {
            const handlers = this.handlers[name];

            if (handlers) {
              const index = handlers.indexOf(callback);
              if (index != -1) handlers.splice(index, 1);
            }
          }

          publish(name, data) {
            const handlers = this.handlers[name];

            if (handlers) {
              handlers.forEach(handler => {
                handler(data);
              });
            }
          }

        }
        /***/

      },

      /***/
      "./src/translate.js":
      /*!**************************!*\
        !*** ./src/translate.js ***!
        \**************************/

      /*! exports provided: tr, stringExists, setLanguage, addTranslations, setTranslator, setTranslateVariableRegex, setTranslateReferenceRegex */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "tr", function () {
          return tr;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "stringExists", function () {
          return stringExists;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "setLanguage", function () {
          return setLanguage;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "addTranslations", function () {
          return addTranslations;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "setTranslator", function () {
          return setTranslator;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "setTranslateVariableRegex", function () {
          return setTranslateVariableRegex;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "setTranslateReferenceRegex", function () {
          return setTranslateReferenceRegex;
        });
        /* harmony import */


        var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! ./utils.js */
        "./src/utils.js");

        let translations = {};
        let varRegex = /__(.*?)__/g;
        let refRegex = /@@(.*?)@@/g;

        function findString(id = '') {
          const part = id.split('.');
          const lastIndex = part.length - 1;
          return part.reduce((nodeInfo, cur, index) => {
            const {
              node,
              found
            } = nodeInfo;
            const isLast = index == lastIndex;
            const isString = typeof node == 'string';

            if (isString) {
              return {
                found,
                node
              };
            } else {
              if (node && node[cur]) {
                if (isLast && node[cur]._) {
                  return {
                    found: true,
                    node: node[cur]._
                  };
                } else {
                  return {
                    found: isLast,
                    node: node[cur]
                  };
                }
              } else {
                return {
                  found: node && '_' in node,
                  node: node && node._
                };
              }
            }
          }, {
            node: translations
          });
        }

        function regexReplace(regex, str, callback) {
          let match;
          let result = str;
          const re = new RegExp(regex);

          while ((match = re.exec(str)) !== null) {
            const value = callback(match[1]);
            if (typeof value != 'undefined') result = result.replace(match[0], value);
          }

          return result;
        }
        /**
         * Translates a string given its id.
         *
         * @param {string} id Identifier in the form
         * 	`key1.key2.key3`
         * @param {object} vars Object with substitution variables. It will
         * 	substitute ocurrences when string contains this expression:
         * 	`__variable__`. For example the string `"My name is __name__"` with
         * 	`vars = { name: 'David' }` will return `"My name is David"`.
         *
         * 	Keys will be searched by partitioning the path.
         *
         * 	It will get the latest found key if any. For example, given the
         * 	strings `{ "a": { "b": 'Hello' } }` and looking for `'a.b.c'` it will
         * 	return `'a.b'` (`"Hello"`).
         * @returns Translated string
         */


        function tr(id, vars = {}) {
          let {
            node
          } = findString(id);

          if (node) {
            // Find variables
            node = regexReplace(varRegex, node, match => vars[match]); // Find references

            node = regexReplace(refRegex, node, match => tr(match, vars));
            return node;
          } else return id;
        }
        /**
         * Returns if the string does exist
         *
         * @param {string} id Identifier
         *
         * @returns { boolean } true if it exists
         */


        function stringExists(id) {
          const {
            found
          } = findString(id);
          return found;
        }
        /**
         * Sets the language.
         *
         * At the moment this does the same as addTranslations. The
         * reason is not to lose translations reference until a better
         * way is figured out.
         *
         * @param {lang} Translations object with the format
         * 	{ key: { _: 'Some string', inner: 'Some other string' } }
         * 	Then, we have the following paths
         * 	- key -> 'Some string'
         * 	- key.inner -> 'Some other string'
         */


        function setLanguage(lang) {
          addTranslations(lang);
        }
        /**
         * Appends translations to current translation table
         *
         * @param {object} lang Translations merged into current.
         */


        function addTranslations(lang) {
          translations = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["deepmerge"])(translations, lang);
        }
        /**
         * Sets the translation engine that responds to tr().
         *
         * @param {function} translate Function with signature
         * 	translate(id, params).
         */


        function setTranslator(translate) {
          tr = translate;
        }
        /**
         * Sets the regex for the variables
         */


        function setTranslateVariableRegex(newVarRegex) {
          varRegex = newVarRegex;
        }
        /**
         * Sets the regex for the substitutions
         */


        function setTranslateReferenceRegex(newRefRegex) {
          refRegex = newRefRegex;
        }
        /***/

      },

      /***/
      "./src/translation_utils.js":
      /*!**********************************!*\
        !*** ./src/translation_utils.js ***!
        \**********************************/

      /*! exports provided: tr, setLanguage, setLanguageByName, addLanguageTranslations, trModel, trField, trError, trPath, trPathSetBase */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "setLanguageByName", function () {
          return setLanguageByName;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "addLanguageTranslations", function () {
          return addLanguageTranslations;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "trModel", function () {
          return trModel;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "trField", function () {
          return trField;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "trError", function () {
          return trError;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "trPath", function () {
          return trPath;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "trPathSetBase", function () {
          return trPathSetBase;
        });
        /* harmony import */


        var _translations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! ./translations */
        "./src/translations/index.js");
        /* harmony import */


        var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! ./utils.js */
        "./src/utils.js");
        /* harmony import */


        var _translate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! ./translate */
        "./src/translate.js");
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "tr", function () {
          return _translate__WEBPACK_IMPORTED_MODULE_2__["tr"];
        });
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "setLanguage", function () {
          return _translate__WEBPACK_IMPORTED_MODULE_2__["setLanguage"];
        });

        const defLangs = {
          en: _translations__WEBPACK_IMPORTED_MODULE_0__["en"],
          es: _translations__WEBPACK_IMPORTED_MODULE_0__["es"]
        };
        let modelBasePath = 'models';
        /**
         * Loads a language from the languages table.
         *
         * @param {string} name Language code as in `'en'` or `'fr'`.
         */

        function setLanguageByName(name) {
          if (name in defLangs) Object(_translate__WEBPACK_IMPORTED_MODULE_2__["setLanguage"])(defLangs[name]);
        }
        /**
         * Allows to add a bunch of strings to a language
         */


        function addLanguageTranslations(lang, strings) {
          defLangs[lang] = Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["deepmerge"])(defLangs[lang], strings);
        }
        /**
         * Multipurpose semantic-ish translation.
         *
         * @param {string} modelName Object name, usually what
         *    you pass as the first parameter when you create
         *    the schema.
         * @param {string} field Field name
         * @param {string} op Thing that varies based on
         *    the type.
         */


        function trModel(modelName, field, op) {
          return Object(_translate__WEBPACK_IMPORTED_MODULE_2__["tr"])(trPath(modelName, field, op));
        }
        /**
         * Translate field name
         *
         * @param {string|object} modelName Object name, usually what
         *    you pass as the first parameter when you create
         *    the schema. It can also be an object with component
         *    props so it will figure out the values
         * @param {string} field Field name
         */


        function trField(modelName, field) {
          if (typeof modelName == 'object') {
            field = modelName.field;
            modelName = modelName.schemaTypeName;
          }

          return Object(_translate__WEBPACK_IMPORTED_MODULE_2__["tr"])(trPath(modelName, field, '_field'));
        }
        /**
         * Translates error message.
         *
         * @param {string} error Code of the error (usually the
         *    validation code-name)
         * @param {object} data Field configuration from `createSchema()`.
         */


        function trError(error, data) {
          return Object(_translate__WEBPACK_IMPORTED_MODULE_2__["tr"])(`error.${error}`, data);
        }
        /**
         * Generates a model translation path.
         *
         * @param {string} model Name of the model (ie: 'client')
         * @param {string} field Name of the field
         * @param {string} op Name of the option or any subthing.
         *
         * @returns {string} id for the translation string
         */


        function trPath(model, field, op) {
          if (typeof op == 'undefined') return [modelBasePath, model, field].join('.');else return [modelBasePath, model, field, op].join('.');
        }
        /**
         * Sets the base for the semantich(ish) translation, so
         * instead of 'models.<model>.<field>' can be
         * 'my.base.<model>.<field>'
         *
         * @param {string} newBasePath New path prepended to all
         *    string paths.
         */


        function trPathSetBase(newBasePath) {
          modelBasePath = newBasePath;
        }
        /***/

      },

      /***/
      "./src/translations/en.js":
      /*!********************************!*\
        !*** ./src/translations/en.js ***!
        \********************************/

      /*! exports provided: en */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "en", function () {
          return en;
        });

        const en = {
          add: 'Add',
          remove: 'Remove',
          error: {
            _: 'Error',
            type: 'Incorrect value, expecting a __type__',
            min: 'Value must be more than __min__',
            max: 'Value must be less than __max__',
            minLength: 'Value must be more than __minLength__ characters long',
            maxLength: 'Value must be less than __maxLength__ characters long',
            required: 'Required',
            minChildren: 'Expected to have at least __minChildren__',
            maxChildren: 'Can only have __maxChildren__'
          }
        };
        /***/
      },

      /***/
      "./src/translations/es.js":
      /*!********************************!*\
        !*** ./src/translations/es.js ***!
        \********************************/

      /*! exports provided: es */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "es", function () {
          return es;
        });

        const es = {
          add: 'Añadir',
          remove: 'Quitar',
          error: {
            _: 'Error',
            type: 'Valor incorrecto, esperando __type__',
            min: 'El valor debe ser superior a __min__',
            max: 'El valor debe ser inferior a __max__',
            minLength: 'El valor debe tener como mínimo __minLength__ caracteres',
            maxLength: 'El valor debe tener como máximo __maxLength__ caracteres',
            required: 'Requerido',
            minChildren: 'Se esperan __minChildren__',
            maxChildren: 'Sólo puede haber __maxChildren__'
          }
        };
        /***/
      },

      /***/
      "./src/translations/index.js":
      /*!***********************************!*\
        !*** ./src/translations/index.js ***!
        \***********************************/

      /*! exports provided: en, es */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony import */


        var _en__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! ./en */
        "./src/translations/en.js");
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "en", function () {
          return _en__WEBPACK_IMPORTED_MODULE_0__["en"];
        });
        /* harmony import */


        var _es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! ./es */
        "./src/translations/es.js");
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "es", function () {
          return _es__WEBPACK_IMPORTED_MODULE_1__["es"];
        });
        /***/

      },

      /***/
      "./src/ui/Autofield.jsx":
      /*!******************************!*\
        !*** ./src/ui/Autofield.jsx ***!
        \******************************/

      /*! exports provided: Autofield */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "Autofield", function () {
          return Autofield;
        });
        /* harmony import */


        var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! react */
        "react");
        /* harmony import */


        var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
        /* harmony import */


        var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! react-hook-form */
        "react-hook-form");
        /* harmony import */


        var react_hook_form__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_hook_form__WEBPACK_IMPORTED_MODULE_1__);
        /* harmony import */


        var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! ../utils */
        "./src/utils.js");
        /* harmony import */


        var _translate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! ../translate */
        "./src/translate.js");
        /* harmony import */


        var _translation_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
        /*! ../translation_utils */
        "./src/translation_utils.js");
        /* harmony import */


        var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
        /*! classnames */
        "./node_modules/classnames/index.js");
        /* harmony import */


        var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
        /* harmony import */


        var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
        /*! react/jsx-runtime */
        "./node_modules/react/jsx-runtime.js");
        /* harmony import */


        var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);

        const _excluded = ["id", "name", "wrapper", "component", "field", "formHook", "formHook", "defaultValue", "fieldSchema", "helperText", "inputRef", "type", "option", "inline", "styles", "skinElement", "noRef", "noAutocomplete", "onChange", "onBlur"];

        function ownKeys(object, enumerableOnly) {
          var keys = Object.keys(object);

          if (Object.getOwnPropertySymbols) {
            var symbols = Object.getOwnPropertySymbols(object);

            if (enumerableOnly) {
              symbols = symbols.filter(function (sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
              });
            }

            keys.push.apply(keys, symbols);
          }

          return keys;
        }

        function _objectSpread(target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i] != null ? arguments[i] : {};

            if (i % 2) {
              ownKeys(Object(source), true).forEach(function (key) {
                _defineProperty(target, key, source[key]);
              });
            } else if (Object.getOwnPropertyDescriptors) {
              Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
            } else {
              ownKeys(Object(source)).forEach(function (key) {
                Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
              });
            }
          }

          return target;
        }

        function _defineProperty(obj, key, value) {
          if (key in obj) {
            Object.defineProperty(obj, key, {
              value: value,
              enumerable: true,
              configurable: true,
              writable: true
            });
          } else {
            obj[key] = value;
          }

          return obj;
        }

        function _objectWithoutProperties(source, excluded) {
          if (source == null) return {};

          var target = _objectWithoutPropertiesLoose(source, excluded);

          var key, i;

          if (Object.getOwnPropertySymbols) {
            var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

            for (i = 0; i < sourceSymbolKeys.length; i++) {
              key = sourceSymbolKeys[i];
              if (excluded.indexOf(key) >= 0) continue;
              if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
              target[key] = source[key];
            }
          }

          return target;
        }

        function _objectWithoutPropertiesLoose(source, excluded) {
          if (source == null) return {};
          var target = {};
          var sourceKeys = Object.keys(source);
          var key, i;

          for (i = 0; i < sourceKeys.length; i++) {
            key = sourceKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            target[key] = source[key];
          }

          return target;
        }

        const Autofield = props => {
          const {
            id,
            name,
            wrapper = props.skin.defaultWrap,
            component,
            field,
            formHook: {
              control
            },
            formHook,
            defaultValue,
            fieldSchema,
            helperText,
            inputRef,
            type,
            option,
            inline,
            styles,
            skinElement,
            noRef,
            noAutocomplete,
            onChange,
            onBlur
          } = props,
                rest = _objectWithoutProperties(props, _excluded);

          const nameForErrors = skinElement.nameForErrors ? skinElement.nameForErrors(name) : name;
          const {
            errors
          } = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_1__["useFormState"])({
            control,
            name: nameForErrors
          });
          const fieldErrors = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["objectTraverse"])(errors, nameForErrors, {
            returnValue: true
          });
          const errorText = fieldErrors && fieldErrors.message;
          const actualKey = option ? `${name}.${option}` : name;
          const $wrapper = wrapper;
          const $component = component;
          const isComponent = typeof component != 'string';

          let componentBaseProps = _objectSpread({
            id,
            key: actualKey,
            name,
            type,
            defaultValue,
            onChange,
            onBlur,
            className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(styles.input, styles.standard, {
              [styles.errored]: fieldErrors
            })
          }, fieldSchema.addInputProps);

          if (option) componentBaseProps.value = option;
          let finalHelperText = helperText || fieldSchema.helperText;

          if (!finalHelperText) {
            const helperId = Object(_translation_utils__WEBPACK_IMPORTED_MODULE_4__["trPath"])(props.schemaTypeName, field, '_helper');
            if (Object(_translate__WEBPACK_IMPORTED_MODULE_3__["stringExists"])(helperId)) finalHelperText = Object(_translate__WEBPACK_IMPORTED_MODULE_3__["tr"])(helperId);
          }

          let componentProps;

          if (isComponent) {
            componentProps = _objectSpread(_objectSpread(_objectSpread({}, rest), componentBaseProps), {}, {
              field,
              errorText,
              fieldSchema,
              formHook,
              styles,
              skinElement,
              inputRef,
              helperText: finalHelperText
            });
          } else {
            componentProps = _objectSpread(_objectSpread({}, componentBaseProps), {}, {
              ref: inputRef
            });
          }

          if (noAutocomplete || fieldSchema.noAutocomplete) componentProps.autoComplete = 'off';
          return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])($wrapper, _objectSpread(_objectSpread({}, rest), {}, {
            id: id,
            key: actualKey,
            name: name,
            field: field,
            styles: styles,
            fieldSchema: fieldSchema,
            errorText: errorText,
            helperText: finalHelperText,
            inline: inline,
            addWrapperProps: fieldSchema.addWrapperProps
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])($component, _objectSpread({}, componentProps)));
        };
        /***/

      },

      /***/
      "./src/ui/AutofieldContainer.jsx":
      /*!***************************************!*\
        !*** ./src/ui/AutofieldContainer.jsx ***!
        \***************************************/

      /*! exports provided: AutofieldContainer */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "AutofieldContainer", function () {
          return AutofieldContainer;
        });
        /* harmony import */


        var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! react */
        "react");
        /* harmony import */


        var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
        /* harmony import */


        var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! react-hook-form */
        "react-hook-form");
        /* harmony import */


        var react_hook_form__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_hook_form__WEBPACK_IMPORTED_MODULE_1__);
        /* harmony import */


        var _Autofield__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! ./Autofield */
        "./src/ui/Autofield.jsx");
        /* harmony import */


        var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! ../utils */
        "./src/utils.js");
        /* harmony import */


        var _autoform_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
        /*! ../autoform_state */
        "./src/autoform_state.js");
        /* harmony import */


        var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
        /*! react/jsx-runtime */
        "./node_modules/react/jsx-runtime.js");
        /* harmony import */


        var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);

        function ownKeys(object, enumerableOnly) {
          var keys = Object.keys(object);

          if (Object.getOwnPropertySymbols) {
            var symbols = Object.getOwnPropertySymbols(object);

            if (enumerableOnly) {
              symbols = symbols.filter(function (sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
              });
            }

            keys.push.apply(keys, symbols);
          }

          return keys;
        }

        function _objectSpread(target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i] != null ? arguments[i] : {};

            if (i % 2) {
              ownKeys(Object(source), true).forEach(function (key) {
                _defineProperty(target, key, source[key]);
              });
            } else if (Object.getOwnPropertyDescriptors) {
              Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
            } else {
              ownKeys(Object(source)).forEach(function (key) {
                Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
              });
            }
          }

          return target;
        }

        function _defineProperty(obj, key, value) {
          if (key in obj) {
            Object.defineProperty(obj, key, {
              value: value,
              enumerable: true,
              configurable: true,
              writable: true
            });
          } else {
            obj[key] = value;
          }

          return obj;
        }

        const AutofieldContainer = props => {
          const {
            id,
            name,
            fieldSchema,
            defaultValue,
            schemaTypeName,
            skinElement,
            formHook: {
              control
            },
            formHook,
            register,
            rules,
            overrides,
            skin,
            stateControl,
            setVisible,
            setHelperText,
            setValue,
            arrayControl
          } = props;
          const {
            visible,
            helperText
          } = Object(_autoform_state__WEBPACK_IMPORTED_MODULE_4__["useAutofieldState"])({
            name,
            stateControl
          });
          let baseProps = Object.assign({}, props, {
            helperText
          });
          const {
            controlled
          } = skinElement;

          if (controlled) {
            const {
              field
            } = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_1__["useController"])({
              name,
              control: control,
              rules
            });
            baseProps.onChange = field.onChange;
            baseProps.onBlur = field.onBlur;
            baseProps.value = field.value;
          } else {
            if (!skinElement.skipRegister) {
              const registerProps = register(name, rules);
              baseProps.onBlur = registerProps.onBlur;
              baseProps.onChange = registerProps.onChange;
              baseProps.inputRef = registerProps.ref;
            }
          } // Allow field schema or overrides onChange


          if ('onChange' in fieldSchema || 'onChange' in overrides) {
            const baseOnChange = baseProps.onChange;
            const overrideOnChange = overrides.onChange;
            if (overrideOnChange) delete overrides.onChange;
            const onChangeArguments = {
              name,
              setVisible,
              setHelperText,
              formHook,
              setValue,
              arrayControl
            };

            const fireOnChange = value => {
              if (fieldSchema.onChange) fieldSchema.onChange(value, onChangeArguments);
              if (overrideOnChange) overrideOnChange(value, onChangeArguments);
            };

            baseProps.onChange = event => {
              const value = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["valueFromEvent"])(event);
              baseOnChange(event);
              fireOnChange(value);
            };

            baseProps.setValue = (name, value) => {
              setValue(name, value);
              fireOnChange(value);
            };
          } // Allow general onChange, passed to <Autoform />


          if (props.onChange) {
            const oldOnChange = baseProps.onChange;

            baseProps.onChange = event => {
              oldOnChange(event);
              props.onChange();
            };
          }

          const propsTransform = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getPropsTransform"])(skinElement);
          let transformedProps;
          if (typeof propsTransform == 'function') transformedProps = propsTransform ? propsTransform(baseProps) : baseProps;else transformedProps = _objectSpread(_objectSpread({}, baseProps), propsTransform);
          transformedProps = _objectSpread(_objectSpread({}, transformedProps), overrides);
          const component = transformedProps.component || skinElement.component;

          if (visible && component) {
            return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_Autofield__WEBPACK_IMPORTED_MODULE_2__["Autofield"], _objectSpread(_objectSpread({}, transformedProps), {}, {
              component: component
            }));
          } else {
            return null;
          }
        };
        /***/

      },

      /***/
      "./src/ui/AutoformBase.jsx":
      /*!*********************************!*\
        !*** ./src/ui/AutoformBase.jsx ***!
        \*********************************/

      /*! exports provided: AutoformBase */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "AutoformBase", function () {
          return AutoformBase;
        });
        /* harmony import */


        var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! react */
        "react");
        /* harmony import */


        var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
        /* harmony import */


        var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! ../utils */
        "./src/utils.js");
        /* harmony import */


        var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! react-hook-form */
        "react-hook-form");
        /* harmony import */


        var react_hook_form__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_hook_form__WEBPACK_IMPORTED_MODULE_2__);
        /* harmony import */


        var _componentRender__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! ./componentRender */
        "./src/ui/componentRender.jsx");
        /* harmony import */


        var _autoform_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
        /*! ../autoform_state */
        "./src/autoform_state.js");
        /* harmony import */


        var _baseSkin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
        /*! ./baseSkin */
        "./src/ui/baseSkin.js");
        /* harmony import */


        var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
        /*! react/jsx-runtime */
        "./node_modules/react/jsx-runtime.js");
        /* harmony import */


        var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);

        const _excluded = ["schema", "elementProps", "initialValues", "children", "onSubmit", "onErrors", "styles", "submitButton", "submitButtonText", "skin", "skinOverride", "skipManualReset"];

        function ownKeys(object, enumerableOnly) {
          var keys = Object.keys(object);

          if (Object.getOwnPropertySymbols) {
            var symbols = Object.getOwnPropertySymbols(object);

            if (enumerableOnly) {
              symbols = symbols.filter(function (sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
              });
            }

            keys.push.apply(keys, symbols);
          }

          return keys;
        }

        function _objectSpread(target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i] != null ? arguments[i] : {};

            if (i % 2) {
              ownKeys(Object(source), true).forEach(function (key) {
                _defineProperty(target, key, source[key]);
              });
            } else if (Object.getOwnPropertyDescriptors) {
              Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
            } else {
              ownKeys(Object(source)).forEach(function (key) {
                Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
              });
            }
          }

          return target;
        }

        function _defineProperty(obj, key, value) {
          if (key in obj) {
            Object.defineProperty(obj, key, {
              value: value,
              enumerable: true,
              configurable: true,
              writable: true
            });
          } else {
            obj[key] = value;
          }

          return obj;
        }

        function _objectWithoutProperties(source, excluded) {
          if (source == null) return {};

          var target = _objectWithoutPropertiesLoose(source, excluded);

          var key, i;

          if (Object.getOwnPropertySymbols) {
            var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

            for (i = 0; i < sourceSymbolKeys.length; i++) {
              key = sourceSymbolKeys[i];
              if (excluded.indexOf(key) >= 0) continue;
              if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
              target[key] = source[key];
            }
          }

          return target;
        }

        function _objectWithoutPropertiesLoose(source, excluded) {
          if (source == null) return {};
          var target = {};
          var sourceKeys = Object.keys(source);
          var key, i;

          for (i = 0; i < sourceKeys.length; i++) {
            key = sourceKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            target[key] = source[key];
          }

          return target;
        }
        /**
         * Creates a form using the provided skin. The form
         * has all the needed fields, styles and validation
         * errors in order to work.
         */


        let AutoformBase = (props, ref) => {
          const {
            schema,
            elementProps,
            initialValues = {},
            children,
            onSubmit,
            onErrors,
            styles,
            submitButton,
            submitButtonText,
            skin,
            skinOverride,
            skipManualReset
          } = props,
                rest = _objectWithoutProperties(props, _excluded);

          if (!schema) {
            throw new Error('<Autoform /> was rendered without schema.');
          }

          const formHook = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_2__["useForm"])({
            mode: 'all',
            defaultValues: initialValues
          });
          const {
            control,
            formState,
            register,
            unregister,
            handleSubmit,
            reset,
            getValues
          } = formHook;

          const finalSkin = _objectSpread(_objectSpread(_objectSpread({}, _baseSkin__WEBPACK_IMPORTED_MODULE_5__["default"]), skin), skinOverride);

          const {
            coercedSubmit,
            coercedChange,
            setValue,
            setVisible,
            setHelperText,
            resetState,
            stateControl
          } = Object(_autoform_state__WEBPACK_IMPORTED_MODULE_4__["useAutoformState"])({
            initialValues,
            onSubmit,
            onChange: props.onChange,
            schema,
            skin: finalSkin,
            formHook,
            skipManualReset
          });
          const submit = handleSubmit(coercedSubmit, onErrors);
          Object(react__WEBPACK_IMPORTED_MODULE_0__["useImperativeHandle"])(ref, () => ({
            submit,
            formHook: () => formHook,
            setValue,
            setVisible,
            reset: resetState
          }));

          const inputProps = _objectSpread(_objectSpread(_objectSpread({}, rest), elementProps), {}, {
            reset,
            children,
            initialValues,
            schema,
            register,
            unregister,
            styles,
            skin: finalSkin,
            formHook,
            autoformProps: props,
            stateControl,
            setValue,
            setVisible,
            setHelperText,
            onChange: coercedChange
          });

          const Button = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getSkinComponent"])(finalSkin.button);
          const Form = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getSkinComponent"])(finalSkin.form);
          return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxs"])(Form, {
            onSubmit: submit,
            children: [Object(_componentRender__WEBPACK_IMPORTED_MODULE_3__["renderInputs"])(inputProps), submitButton && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(Button, {
              styles: styles,
              onClick: submit,
              type: "submit",
              children: submitButtonText
            }), children]
          });
        };

        AutoformBase = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(AutoformBase);
        /***/
      },

      /***/
      "./src/ui/baseSkin.js":
      /*!****************************!*\
        !*** ./src/ui/baseSkin.js ***!
        \****************************/

      /*! exports provided: default */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony import */


        var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! react */
        "react");
        /* harmony import */


        var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
        /* harmony import */


        var _components_InputArrayWrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! ./components/InputArrayWrap */
        "./src/ui/components/InputArrayWrap.jsx");
        /* harmony import */


        var _components_Submodel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! ./components/Submodel */
        "./src/ui/components/Submodel.jsx");
        /* harmony import */


        var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! ../utils */
        "./src/utils.js");
        /* harmony import */


        var _deletedMark__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
        /*! ./deletedMark */
        "./src/ui/deletedMark.js");

        const _excluded = ["config", "fieldSchema", "skin"];

        function ownKeys(object, enumerableOnly) {
          var keys = Object.keys(object);

          if (Object.getOwnPropertySymbols) {
            var symbols = Object.getOwnPropertySymbols(object);

            if (enumerableOnly) {
              symbols = symbols.filter(function (sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
              });
            }

            keys.push.apply(keys, symbols);
          }

          return keys;
        }

        function _objectSpread(target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i] != null ? arguments[i] : {};

            if (i % 2) {
              ownKeys(Object(source), true).forEach(function (key) {
                _defineProperty(target, key, source[key]);
              });
            } else if (Object.getOwnPropertyDescriptors) {
              Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
            } else {
              ownKeys(Object(source)).forEach(function (key) {
                Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
              });
            }
          }

          return target;
        }

        function _defineProperty(obj, key, value) {
          if (key in obj) {
            Object.defineProperty(obj, key, {
              value: value,
              enumerable: true,
              configurable: true,
              writable: true
            });
          } else {
            obj[key] = value;
          }

          return obj;
        }

        function _objectWithoutProperties(source, excluded) {
          if (source == null) return {};

          var target = _objectWithoutPropertiesLoose(source, excluded);

          var key, i;

          if (Object.getOwnPropertySymbols) {
            var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

            for (i = 0; i < sourceSymbolKeys.length; i++) {
              key = sourceSymbolKeys[i];
              if (excluded.indexOf(key) >= 0) continue;
              if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
              target[key] = source[key];
            }
          }

          return target;
        }

        function _objectWithoutPropertiesLoose(source, excluded) {
          if (source == null) return {};
          var target = {};
          var sourceKeys = Object.keys(source);
          var key, i;

          for (i = 0; i < sourceKeys.length; i++) {
            key = sourceKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            target[key] = source[key];
          }

          return target;
        }

        function getOtherSchema(schemaDef, fieldName, {
          isArray
        }) {
          const field = schemaDef[fieldName];
          const {
            type
          } = field;
          const other = isArray ? type[0] : type;
          return other.getSchema();
        }
        /* harmony default export */


        __webpack_exports__["default"] = {
          array: {
            skipRegister: true,
            nameForErrors: name => `${name}__count`,
            coerce: (arr = [], {
              coerceObject,
              schemaDef,
              fieldName
            }) => {
              const otherSchema = getOtherSchema(schemaDef, fieldName, {
                isArray: true
              });

              if (Array.isArray(arr)) {
                return arr.map(entry => {
                  if (entry[_deletedMark__WEBPACK_IMPORTED_MODULE_4__["deletedMark"]]) return null;else return coerceObject({
                    object: entry,
                    schemaDef: otherSchema
                  });
                }).filter(entry => entry !== null);
              } else {
                return [];
              }
            },
            props: props => {
              const {
                config = {},
                fieldSchema,
                skin
              } = props,
                    rest = _objectWithoutProperties(props, _excluded);

              const {
                arrayMode
              } = config;
              const isTable = arrayMode == 'table';
              const ArrayTable = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getSkinComponent"])(skin.arrayTable);
              const ArrayPanel = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getSkinComponent"])(skin.arrayPanel);
              const arrayHandler = isTable ? ArrayTable : ArrayPanel;
              return _objectSpread(_objectSpread({}, rest), {}, {
                config,
                component: _components_InputArrayWrap__WEBPACK_IMPORTED_MODULE_1__["InputArrayWrap"],
                initiallyEmpty: fieldSchema.initiallyEmpty,
                fieldSchema,
                arrayHandler,
                inline: true,
                noRef: true,
                isTable,
                skin
              });
            }
          },
          schema: {
            skipRegister: true,
            coerce: (obj = {}, {
              coerceObject,
              schemaDef,
              fieldName
            }) => {
              const otherSchema = getOtherSchema(schemaDef, fieldName, {
                isArray: false
              });
              return coerceObject({
                object: obj,
                schemaDef: otherSchema
              });
            },
            component: _components_Submodel__WEBPACK_IMPORTED_MODULE_2__["Submodel"]
          }
        };
        /***/
      },

      /***/
      "./src/ui/componentRender.jsx":
      /*!************************************!*\
        !*** ./src/ui/componentRender.jsx ***!
        \************************************/

      /*! exports provided: validationRules, registerValidation, renderInput, renderInputs */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "validationRules", function () {
          return validationRules;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "registerValidation", function () {
          return registerValidation;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "renderInput", function () {
          return renderInput;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "renderInputs", function () {
          return renderInputs;
        });
        /* harmony import */


        var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! react */
        "react");
        /* harmony import */


        var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
        /* harmony import */


        var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! ../utils */
        "./src/utils.js");
        /* harmony import */


        var _translate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! ../translate */
        "./src/translate.js");
        /* harmony import */


        var _translation_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! ../translation_utils */
        "./src/translation_utils.js");
        /* harmony import */


        var _components_FieldPropsOverride__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
        /*! ./components/FieldPropsOverride */
        "./src/ui/components/FieldPropsOverride.jsx");
        /* harmony import */


        var _AutofieldContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
        /*! ./AutofieldContainer */
        "./src/ui/AutofieldContainer.jsx");

        const _excluded = ["field", "fieldSchema", "fieldSchema", "initialValue", "parent", "children", "propOverrides", "schemaTypeName", "config", "index", "skin", "styles"],
              _excluded2 = ["schema", "config", "children", "propOverrides", "initialValues", "styles"];

        function ownKeys(object, enumerableOnly) {
          var keys = Object.keys(object);

          if (Object.getOwnPropertySymbols) {
            var symbols = Object.getOwnPropertySymbols(object);

            if (enumerableOnly) {
              symbols = symbols.filter(function (sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
              });
            }

            keys.push.apply(keys, symbols);
          }

          return keys;
        }

        function _objectSpread(target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i] != null ? arguments[i] : {};

            if (i % 2) {
              ownKeys(Object(source), true).forEach(function (key) {
                _defineProperty(target, key, source[key]);
              });
            } else if (Object.getOwnPropertyDescriptors) {
              Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
            } else {
              ownKeys(Object(source)).forEach(function (key) {
                Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
              });
            }
          }

          return target;
        }

        function _defineProperty(obj, key, value) {
          if (key in obj) {
            Object.defineProperty(obj, key, {
              value: value,
              enumerable: true,
              configurable: true,
              writable: true
            });
          } else {
            obj[key] = value;
          }

          return obj;
        }

        function _objectWithoutProperties(source, excluded) {
          if (source == null) return {};

          var target = _objectWithoutPropertiesLoose(source, excluded);

          var key, i;

          if (Object.getOwnPropertySymbols) {
            var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

            for (i = 0; i < sourceSymbolKeys.length; i++) {
              key = sourceSymbolKeys[i];
              if (excluded.indexOf(key) >= 0) continue;
              if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
              target[key] = source[key];
            }
          }

          return target;
        }

        function _objectWithoutPropertiesLoose(source, excluded) {
          if (source == null) return {};
          var target = {};
          var sourceKeys = Object.keys(source);
          var key, i;

          for (i = 0; i < sourceKeys.length; i++) {
            key = sourceKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            target[key] = source[key];
          }

          return target;
        }

        const validations = {
          required: ({
            value,
            message
          }) => message,
          maxLength: 'maxLength',
          minLength: 'minLength',
          max: 'max',
          min: 'min',
          pattern: 'pattern',
          validate: 'validate'
        };
        /**
         * Creates validation rules after schema
         *
         * @param {object} fieldSchema
         */

        function validationRules(fieldSchema) {
          const validationKeys = Object.keys(validations);
          return validationKeys.reduce((result, key) => {
            if (key in fieldSchema) {
              const validation = fieldSchema[key];
              let data;

              if (typeof validation == 'object') {
                if (validation.message && typeof validation.message == 'function') validation.message = validation.message(fieldSchema);
                data = validation;
              } else {
                data = {
                  value: fieldSchema[key],
                  message: Object(_translation_utils__WEBPACK_IMPORTED_MODULE_3__["trError"])(key, fieldSchema)
                };
              }

              result[key] = typeof validations[key] == 'function' ? validations[key](data) : data;
            }

            return result;
          }, {});
        }
        /**
         * Passes the validation parameters to react-hook-form
         *
         * @param {string} name Field name
         * @param {object} fieldSchema Schema for the field
         * @param {function} register react-hook-form register
         */


        function registerValidation(name, fieldSchema, register) {
          const rules = validationRules(fieldSchema);
          return register(name, rules);
        }
        /**
         * Searches in children to find overrides.
         */


        function searchForOverrides(parent, name, children = []) {
          const childrenArr = react__WEBPACK_IMPORTED_MODULE_0__["Children"].map(children, child => child);
          return childrenArr.reduce((override, child) => {
            const childName = child.props.name;
            const dottedChild = childName && childName.replace(/(\[|\]\.)/g, '.');
            const isOverride = child.type == _components_FieldPropsOverride__WEBPACK_IMPORTED_MODULE_4__["FieldPropsOverride"];

            if (isOverride && dottedChild == name) {
              const cloned = Object.assign({}, child.props);
              delete cloned.name;
              return cloned;
            } else {
              return override;
            }
          }, {});
        }
        /**
         * Renders a single field.
         *
         * @param {object} params
         * @param {string} params.field Name of the field
         * @param {object} params.fieldSchema Schema specification
         *    for the field
         * @param {string} params.parent Prefix of the field name
         * @param {string} params.schemaTypeName Name of the schema
         *    (first argument while instantiating a schema)
         * @param {object} params.config Form configuration
         * @param {...object} params.rest props passed to the component
         */


        function renderInput(_ref) {
          let {
            field,
            fieldSchema,
            fieldSchema: {
              type,
              required,
              defaultValue
            },
            initialValue,
            parent,
            children,
            propOverrides,
            schemaTypeName,
            config = {},
            index,
            skin,
            styles
          } = _ref,
              rest = _objectWithoutProperties(_ref, _excluded);

          const strType = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["schemaTypeEx"])(type);

          function describePlace() {
            return `Schema "${schemaTypeName}" has field "${field}"`;
          }

          if (!strType) {
            throw `${describePlace()} that lacks type description.`;
          }

          const skinElement = skin[strType];

          if (!skinElement) {
            throw `${describePlace()} with type "${strType}" ` + 'that doesn\'t exist in skin.';
          }

          const rules = validationRules(fieldSchema);
          const fullField = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["inputName"])({
            parent,
            index,
            field
          });
          const id = `${schemaTypeName}-${fullField}`;
          const overrides = searchForOverrides(parent, fullField, propOverrides);
          defaultValue = typeof initialValue == 'undefined' ? defaultValue : initialValue;
          return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_AutofieldContainer__WEBPACK_IMPORTED_MODULE_5__["AutofieldContainer"], _objectSpread(_objectSpread({}, rest), {}, {
            id: id,
            key: fullField,
            name: fullField,
            field: field,
            fieldSchema: fieldSchema,
            schemaTypeName: schemaTypeName,
            config: config,
            parent: parent,
            propOverrides: propOverrides,
            rules: rules,
            styles: styles,
            skin: skin,
            skinElement: skinElement,
            defaultValue: defaultValue,
            overrides: overrides
          }));
        }
        /**
         * Renders the inputs to make the schema work.
         *
         * @param {object} params
         * @param {Schema} params.schema Schema instance
         * @param {object} params.config Rendering configuration
         * @param {string} params.config.arrayMode 'panels' or 'table'
         * @param {...object} params.rest Props passed to every input
         *
         * @returns {array} React elements with the form and inputs.
         */


        function renderInputs(_ref2) {
          let {
            schema,
            config = {},
            children,
            propOverrides,
            initialValues = {},
            styles = {}
          } = _ref2,
              rest = _objectWithoutProperties(_ref2, _excluded2);

          const schemaDef = schema.getSchema();
          const schemaKeys = Object.keys(schemaDef);
          return schemaKeys.map(field => renderInput(_objectSpread(_objectSpread({}, rest), {}, {
            field,
            config,
            propOverrides: propOverrides || children,
            fieldSchema: schemaDef[field],
            schemaTypeName: schema.getType(),
            initialValue: initialValues[field],
            styles
          })));
        }
        /***/

      },

      /***/
      "./src/ui/components/FieldPropsOverride.jsx":
      /*!**************************************************!*\
        !*** ./src/ui/components/FieldPropsOverride.jsx ***!
        \**************************************************/

      /*! exports provided: FieldPropsOverride */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "FieldPropsOverride", function () {
          return FieldPropsOverride;
        });
        /* harmony import */


        var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! react */
        "react");
        /* harmony import */


        var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
        /**
         * Allows to specify extra props for a field in runtime.
         */


        const FieldPropsOverride = () => null;
        /***/

      },

      /***/
      "./src/ui/components/InputArrayWrap.jsx":
      /*!**********************************************!*\
        !*** ./src/ui/components/InputArrayWrap.jsx ***!
        \**********************************************/

      /*! exports provided: InputArrayWrap */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "InputArrayWrap", function () {
          return InputArrayWrap;
        });
        /* harmony import */


        var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! react */
        "react");
        /* harmony import */


        var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
        /* harmony import */


        var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! classnames */
        "./node_modules/classnames/index.js");
        /* harmony import */


        var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
        /* harmony import */


        var _componentRender__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! ../componentRender */
        "./src/ui/componentRender.jsx");
        /* harmony import */


        var _ducks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! ../ducks */
        "./src/ui/ducks/index.js");
        /* harmony import */


        var _translation_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
        /*! ../../translation_utils */
        "./src/translation_utils.js");
        /* harmony import */


        var _deletedMark__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
        /*! ../deletedMark */
        "./src/ui/deletedMark.js");
        /* harmony import */


        var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
        /*! ../../utils */
        "./src/utils.js");
        /* harmony import */


        var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
        /*! react/jsx-runtime */
        "./node_modules/react/jsx-runtime.js");
        /* harmony import */


        var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);

        const _excluded = ["name", "newObject", "arrayHandler", "register", "unregister", "errorText", "fieldSchema", "fieldSchema", "schemaTypeName", "formHook", "defaultValue", "initiallyEmpty", "onRemove", "config", "styles", "isTable", "setValue", "skin", "skinElement"];

        function ownKeys(object, enumerableOnly) {
          var keys = Object.keys(object);

          if (Object.getOwnPropertySymbols) {
            var symbols = Object.getOwnPropertySymbols(object);

            if (enumerableOnly) {
              symbols = symbols.filter(function (sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
              });
            }

            keys.push.apply(keys, symbols);
          }

          return keys;
        }

        function _objectSpread(target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i] != null ? arguments[i] : {};

            if (i % 2) {
              ownKeys(Object(source), true).forEach(function (key) {
                _defineProperty(target, key, source[key]);
              });
            } else if (Object.getOwnPropertyDescriptors) {
              Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
            } else {
              ownKeys(Object(source)).forEach(function (key) {
                Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
              });
            }
          }

          return target;
        }

        function _defineProperty(obj, key, value) {
          if (key in obj) {
            Object.defineProperty(obj, key, {
              value: value,
              enumerable: true,
              configurable: true,
              writable: true
            });
          } else {
            obj[key] = value;
          }

          return obj;
        }

        function _objectWithoutProperties(source, excluded) {
          if (source == null) return {};

          var target = _objectWithoutPropertiesLoose(source, excluded);

          var key, i;

          if (Object.getOwnPropertySymbols) {
            var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

            for (i = 0; i < sourceSymbolKeys.length; i++) {
              key = sourceSymbolKeys[i];
              if (excluded.indexOf(key) >= 0) continue;
              if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
              target[key] = source[key];
            }
          }

          return target;
        }

        function _objectWithoutPropertiesLoose(source, excluded) {
          if (source == null) return {};
          var target = {};
          var sourceKeys = Object.keys(source);
          var key, i;

          for (i = 0; i < sourceKeys.length; i++) {
            key = sourceKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            target[key] = source[key];
          }

          return target;
        }

        const renderAddButton = ({
          onAdd,
          styles,
          Button,
          AddGlyph
        }) => {
          const boundAdd = e => {
            e.preventDefault();
            onAdd();
          };

          return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(Button, {
            onClick: boundAdd,
            styles: styles,
            intent: "add",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(AddGlyph, {
              styles: styles
            })
          });
        };

        const renderCloseButton = ({
          onRemove,
          idx,
          styles,
          Button,
          RemoveGlyph
        }) => {
          const boundRemove = e => {
            e.preventDefault();
            onRemove(idx);
          };

          return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(Button, {
            onClick: boundRemove,
            styles: styles,
            intent: "remove",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(RemoveGlyph, {
              styles: styles
            })
          });
        };

        const renderPanelHeader = ({
          onAdd,
          schemaTypeName,
          aliveItems,
          name,
          styles,
          Button,
          AddGlyph,
          Div,
          Text
        }) => {
          const addButton = renderAddButton({
            onAdd,
            styles,
            Button,
            AddGlyph
          });
          return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxs"])(Div, {
            className: styles.inputPanelWrap,
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(Text, {
              className: styles.inputPanelEntity,
              children: Object(_translation_utils__WEBPACK_IMPORTED_MODULE_4__["trModel"])(schemaTypeName, name) + ' '
            }), addButton]
          });
        };
        /**
         * Used for the arrays in models, for
         * example clients: [Clients]
         *
         */


        let InputArrayWrap = _ref => {
          let {
            name,
            newObject,
            arrayHandler,
            register,
            unregister,
            errorText = '',
            fieldSchema,
            fieldSchema: {
              type
            },
            schemaTypeName,
            formHook,
            defaultValue,
            initiallyEmpty,
            onRemove,
            config,
            styles,
            isTable,
            setValue,
            skin,
            skinElement
          } = _ref,
              rest = _objectWithoutProperties(_ref, _excluded);

          const [items, dispatch] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(_ducks__WEBPACK_IMPORTED_MODULE_3__["inputArray"].reducer, _ducks__WEBPACK_IMPORTED_MODULE_3__["inputArray"].initialFromDefault(defaultValue, initiallyEmpty));
          const schema = type[0];
          const $arrayHandler = arrayHandler;
          const Button = Object(_utils__WEBPACK_IMPORTED_MODULE_6__["getSkinComponent"])(skin.arrayButton);
          const AddGlyph = Object(_utils__WEBPACK_IMPORTED_MODULE_6__["getSkinComponent"])(skin.addGlyph);
          const RemoveGlyph = Object(_utils__WEBPACK_IMPORTED_MODULE_6__["getSkinComponent"])(skin.removeGlyph);
          const Panel = Object(_utils__WEBPACK_IMPORTED_MODULE_6__["getSkinComponent"])(skin.panel);
          const Div = Object(_utils__WEBPACK_IMPORTED_MODULE_6__["getSkinComponent"])(skin.div);
          const Text = Object(_utils__WEBPACK_IMPORTED_MODULE_6__["getSkinComponent"])(skin.text);
          const aliveItems = items.keys.filter(idx => idx !== null);
          const counterField = skinElement.nameForErrors(name);

          const getErrorMessage = num => {
            if ('minChildren' in fieldSchema) {
              const {
                minChildren
              } = fieldSchema;
              if (num < minChildren) return Object(_translation_utils__WEBPACK_IMPORTED_MODULE_4__["tr"])('error.minChildren', {
                minChildren
              });
            }

            if ('maxChildren' in fieldSchema) {
              const {
                maxChildren
              } = fieldSchema;
              if (num > maxChildren) return Object(_translation_utils__WEBPACK_IMPORTED_MODULE_4__["tr"])('error.maxChildren', {
                maxChildren
              });
            }
          };

          const checkSetErrorMessage = num => {
            const message = getErrorMessage(num);

            if (message) {
              formHook.setError(counterField, {
                type: 'manual',
                message
              });
            } else {
              formHook.clearErrors(counterField);
            }
          };

          const handleAdd = () => {
            dispatch(_ducks__WEBPACK_IMPORTED_MODULE_3__["inputArray"].add());
            checkSetErrorMessage(items.num + 1);
          };

          const itemsInputs = aliveItems.map(idx => {
            const handleRemove = removeIdx => {
              dispatch(_ducks__WEBPACK_IMPORTED_MODULE_3__["inputArray"].remove(removeIdx));
              checkSetErrorMessage(items.num - 1);
              const taint = `${name}.${removeIdx}.${_deletedMark__WEBPACK_IMPORTED_MODULE_5__["deletedMark"]}`;
              setValue(taint, true);
              const fieldNames = schema.getFieldNames();
              fieldNames.forEach(fieldName => {
                const toUnregister = Object(_utils__WEBPACK_IMPORTED_MODULE_6__["inputName"])({
                  parent: name,
                  index: removeIdx,
                  field: fieldName
                });
                unregister(toUnregister);
              });
            };

            const closeButton = renderCloseButton({
              onRemove: handleRemove,
              idx,
              styles,
              Button,
              RemoveGlyph
            });
            let itemDefault;
            if (defaultValue && Array.isArray(defaultValue)) itemDefault = defaultValue[idx];else itemDefault = defaultValue;
            return {
              idx,
              closeButton,
              inputs: Object(_componentRender__WEBPACK_IMPORTED_MODULE_2__["renderInputs"])(_objectSpread(_objectSpread({}, rest), {}, {
                inline: isTable,
                schema,
                schemaTypeName,
                setValue,
                parent: name,
                index: idx,
                initialValues: itemDefault,
                formHook,
                styles,
                register,
                unregister,
                arrayIdx: idx,
                arrayInitialValues: itemDefault,
                skin,
                arrayControl: {
                  items,
                  index: idx,
                  remove: handleRemove,
                  add: handleAdd
                }
              }))
            };
          });
          const panelProps = {
            onAdd: handleAdd,
            schemaTypeName,
            dispatch,
            name,
            styles,
            Button,
            AddGlyph,
            Div,
            Text
          };
          const panelClasses = classnames__WEBPACK_IMPORTED_MODULE_1___default()({
            [styles.errored]: errorText
          });
          return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(Panel, {
            className: panelClasses,
            header: renderPanelHeader(panelProps),
            styles: styles,
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])($arrayHandler, _objectSpread({
              schema: schema,
              config: config,
              name: name,
              component: arrayHandler,
              onAdd: handleAdd,
              newObject: newObject,
              items: itemsInputs,
              defaultValue: defaultValue,
              schemaTypeName: schemaTypeName,
              styles: styles,
              skin: skin
            }, rest))
          });
        };
        /***/

      },

      /***/
      "./src/ui/components/Submodel.jsx":
      /*!****************************************!*\
        !*** ./src/ui/components/Submodel.jsx ***!
        \****************************************/

      /*! exports provided: Submodel */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "Submodel", function () {
          return Submodel;
        });
        /* harmony import */


        var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! react */
        "react");
        /* harmony import */


        var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
        /* harmony import */


        var _componentRender__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! ../componentRender */
        "./src/ui/componentRender.jsx");
        /* harmony import */


        var _translation_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! ../../translation_utils */
        "./src/translation_utils.js");
        /* harmony import */


        var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! ../../utils */
        "./src/utils.js");
        /* harmony import */


        var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
        /*! react/jsx-runtime */
        "./node_modules/react/jsx-runtime.js");
        /* harmony import */


        var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);

        const _excluded = ["config", "name", "field", "fieldSchema", "defaultValue", "styles", "skin"];

        function ownKeys(object, enumerableOnly) {
          var keys = Object.keys(object);

          if (Object.getOwnPropertySymbols) {
            var symbols = Object.getOwnPropertySymbols(object);

            if (enumerableOnly) {
              symbols = symbols.filter(function (sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
              });
            }

            keys.push.apply(keys, symbols);
          }

          return keys;
        }

        function _objectSpread(target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i] != null ? arguments[i] : {};

            if (i % 2) {
              ownKeys(Object(source), true).forEach(function (key) {
                _defineProperty(target, key, source[key]);
              });
            } else if (Object.getOwnPropertyDescriptors) {
              Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
            } else {
              ownKeys(Object(source)).forEach(function (key) {
                Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
              });
            }
          }

          return target;
        }

        function _defineProperty(obj, key, value) {
          if (key in obj) {
            Object.defineProperty(obj, key, {
              value: value,
              enumerable: true,
              configurable: true,
              writable: true
            });
          } else {
            obj[key] = value;
          }

          return obj;
        }

        function _objectWithoutProperties(source, excluded) {
          if (source == null) return {};

          var target = _objectWithoutPropertiesLoose(source, excluded);

          var key, i;

          if (Object.getOwnPropertySymbols) {
            var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

            for (i = 0; i < sourceSymbolKeys.length; i++) {
              key = sourceSymbolKeys[i];
              if (excluded.indexOf(key) >= 0) continue;
              if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
              target[key] = source[key];
            }
          }

          return target;
        }

        function _objectWithoutPropertiesLoose(source, excluded) {
          if (source == null) return {};
          var target = {};
          var sourceKeys = Object.keys(source);
          var key, i;

          for (i = 0; i < sourceKeys.length; i++) {
            key = sourceKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            target[key] = source[key];
          }

          return target;
        }

        let Submodel = (_ref, ref) => {
          let {
            config = {},
            name,
            field,
            fieldSchema: {
              type
            },
            defaultValue,
            styles,
            skin
          } = _ref,
              rest = _objectWithoutProperties(_ref, _excluded);

          const inputsConf = _objectSpread(_objectSpread({}, rest), {}, {
            schema: type,
            config,
            parent: name,
            initialValues: defaultValue,
            styles,
            skin
          });

          const schemaTypeName = type.getType();
          const Panel = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getSkinComponent"])(skin.panel);
          return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])(Panel, {
            styles: styles,
            header: Object(_translation_utils__WEBPACK_IMPORTED_MODULE_2__["trModel"])(schemaTypeName, field),
            children: Object(_componentRender__WEBPACK_IMPORTED_MODULE_1__["renderInputs"])(inputsConf)
          });
        };

        Submodel = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(Submodel);
        /***/
      },

      /***/
      "./src/ui/deletedMark.js":
      /*!*******************************!*\
        !*** ./src/ui/deletedMark.js ***!
        \*******************************/

      /*! exports provided: deletedMark */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "deletedMark", function () {
          return deletedMark;
        }); // We will put this thing in a field in
        // order to consider it deleted


        const deletedMark = '__rhfa_deleted';
        /***/
      },

      /***/
      "./src/ui/ducks/index.js":
      /*!*******************************!*\
        !*** ./src/ui/ducks/index.js ***!
        \*******************************/

      /*! exports provided: inputArray */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony import */


        var _inputArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! ./inputArray */
        "./src/ui/ducks/inputArray.js");
        /* harmony reexport (module object) */


        __webpack_require__.d(__webpack_exports__, "inputArray", function () {
          return _inputArray__WEBPACK_IMPORTED_MODULE_0__;
        });
        /***/

      },

      /***/
      "./src/ui/ducks/inputArray.js":
      /*!************************************!*\
        !*** ./src/ui/ducks/inputArray.js ***!
        \************************************/

      /*! exports provided: REMOVE, ADD, remove, add, initialEmpty, initial, initialFromDefault, reducer */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "REMOVE", function () {
          return REMOVE;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "ADD", function () {
          return ADD;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "remove", function () {
          return remove;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "add", function () {
          return add;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "initialEmpty", function () {
          return initialEmpty;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "initial", function () {
          return initial;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "initialFromDefault", function () {
          return initialFromDefault;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "reducer", function () {
          return reducer;
        });

        function _toConsumableArray(arr) {
          return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
        }

        function _nonIterableSpread() {
          throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }

        function _unsupportedIterableToArray(o, minLen) {
          if (!o) return;
          if (typeof o === "string") return _arrayLikeToArray(o, minLen);
          var n = Object.prototype.toString.call(o).slice(8, -1);
          if (n === "Object" && o.constructor) n = o.constructor.name;
          if (n === "Map" || n === "Set") return Array.from(o);
          if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
        }

        function _iterableToArray(iter) {
          if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
        }

        function _arrayWithoutHoles(arr) {
          if (Array.isArray(arr)) return _arrayLikeToArray(arr);
        }

        function _arrayLikeToArray(arr, len) {
          if (len == null || len > arr.length) len = arr.length;

          for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

          return arr2;
        }

        const REMOVE = 'REMOVE';
        const ADD = 'ADD';

        const remove = idx => ({
          type: REMOVE,
          idx
        });

        const add = () => ({
          type: ADD
        });

        const initialEmpty = {
          last: 0,
          num: 0,
          keys: []
        };
        const initial = {
          last: 1,
          num: 1,
          keys: [0]
        };

        const initialFromDefault = (defaultValue, initiallyEmpty) => {
          if (defaultValue && Array.isArray(defaultValue)) {
            return {
              last: defaultValue.length,
              num: defaultValue.length,
              keys: defaultValue.map((_, idx) => idx)
            };
          } else {
            return initiallyEmpty ? initialEmpty : initial;
          }
        };

        const reducer = (state = initial, action) => {
          switch (action.type) {
            case REMOVE:
              const {
                keys
              } = state;
              return {
                last: state.last,
                num: state.num - 1,
                keys: [].concat(_toConsumableArray(keys.slice(0, action.idx)), [null], _toConsumableArray(keys.slice(action.idx + 1)))
              };

            case ADD:
              return {
                last: state.last + 1,
                num: state.num + 1,
                keys: [].concat(_toConsumableArray(state.keys), [state.last])
              };

            default:
              return state;
          }
        };
        /***/

      },

      /***/
      "./src/utils.js":
      /*!**********************!*\
        !*** ./src/utils.js ***!
        \**********************/

      /*! exports provided: schemaType, schemaTypeEx, isObject, deepmerge, createNumberedArray, processOptions, pathToArray, objectTraverse, inputName, valueOrCreate, valueFromEvent, getPropsTransform, getSkinComponent */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "schemaType", function () {
          return schemaType;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "schemaTypeEx", function () {
          return schemaTypeEx;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "isObject", function () {
          return isObject;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "deepmerge", function () {
          return deepmerge;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "createNumberedArray", function () {
          return createNumberedArray;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "processOptions", function () {
          return processOptions;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "pathToArray", function () {
          return pathToArray;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "objectTraverse", function () {
          return objectTraverse;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "inputName", function () {
          return inputName;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "valueOrCreate", function () {
          return valueOrCreate;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "valueFromEvent", function () {
          return valueFromEvent;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "getPropsTransform", function () {
          return getPropsTransform;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "getSkinComponent", function () {
          return getSkinComponent;
        });
        /* harmony import */


        var _translation_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! ./translation_utils */
        "./src/translation_utils.js");

        const _excluded = ["fieldSchema", "schemaTypeName", "field", "options", "addDefault"];

        function _toConsumableArray(arr) {
          return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
        }

        function _nonIterableSpread() {
          throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }

        function _unsupportedIterableToArray(o, minLen) {
          if (!o) return;
          if (typeof o === "string") return _arrayLikeToArray(o, minLen);
          var n = Object.prototype.toString.call(o).slice(8, -1);
          if (n === "Object" && o.constructor) n = o.constructor.name;
          if (n === "Map" || n === "Set") return Array.from(o);
          if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
        }

        function _iterableToArray(iter) {
          if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
        }

        function _arrayWithoutHoles(arr) {
          if (Array.isArray(arr)) return _arrayLikeToArray(arr);
        }

        function _arrayLikeToArray(arr, len) {
          if (len == null || len > arr.length) len = arr.length;

          for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

          return arr2;
        }

        function ownKeys(object, enumerableOnly) {
          var keys = Object.keys(object);

          if (Object.getOwnPropertySymbols) {
            var symbols = Object.getOwnPropertySymbols(object);

            if (enumerableOnly) {
              symbols = symbols.filter(function (sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
              });
            }

            keys.push.apply(keys, symbols);
          }

          return keys;
        }

        function _objectSpread(target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i] != null ? arguments[i] : {};

            if (i % 2) {
              ownKeys(Object(source), true).forEach(function (key) {
                _defineProperty(target, key, source[key]);
              });
            } else if (Object.getOwnPropertyDescriptors) {
              Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
            } else {
              ownKeys(Object(source)).forEach(function (key) {
                Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
              });
            }
          }

          return target;
        }

        function _defineProperty(obj, key, value) {
          if (key in obj) {
            Object.defineProperty(obj, key, {
              value: value,
              enumerable: true,
              configurable: true,
              writable: true
            });
          } else {
            obj[key] = value;
          }

          return obj;
        }

        function _objectWithoutProperties(source, excluded) {
          if (source == null) return {};

          var target = _objectWithoutPropertiesLoose(source, excluded);

          var key, i;

          if (Object.getOwnPropertySymbols) {
            var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

            for (i = 0; i < sourceSymbolKeys.length; i++) {
              key = sourceSymbolKeys[i];
              if (excluded.indexOf(key) >= 0) continue;
              if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
              target[key] = source[key];
            }
          }

          return target;
        }

        function _objectWithoutPropertiesLoose(source, excluded) {
          if (source == null) return {};
          var target = {};
          var sourceKeys = Object.keys(source);
          var key, i;

          for (i = 0; i < sourceKeys.length; i++) {
            key = sourceKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            target[key] = source[key];
          }

          return target;
        }
        /**
         * Translates schema specification type. Types can
         * be specified with a string or a constructor like
         * String.
         *
         * @param {string|function} type Type specification.
         *
         * @returns {string} Type as string.
         */


        const schemaType = type => {
          if (typeof type == 'function') return typeof type();else return type;
        };
        /**
         * Translates the schema's type specification. Type
         * can be specified as with schemaType and also can
         * be a subschema or an array of other schema.
         *
         * @param {any} type Can be:
         *    - String like 'number'
         *    - Constructor like Number
         *    - Schema instance
         *    - Array with schema instance in the first element.
         *        Example: [client]
         */


        function schemaTypeEx(type) {
          if (typeof type == 'object' && type._type == 'schema') return 'schema';else {
            const isArray = Array.isArray(type);
            const first = type && type[0];
            const isSchema = isArray && type.length > 0 && first._type && first._type == 'schema';
            if (isSchema) return 'array';else return schemaType(type);
          }
        } // Thanks Mariuzzo
        // https://stackoverflow.com/questions/27936772/how-to-deep-merge-instead-of-shallow-merge

        /**
         * Simple object check.
         * @param item
         * @returns {boolean}
         */


        function isObject(item) {
          return typeof item == 'object' && !(item instanceof Date);
        }
        /**
         * Deep merge two objects.
         * @param target
         * @param ...sources
         */


        function deepmerge(target, ...sources) {
          if (!sources.length) return target;
          const source = sources.shift();

          if (isObject(target) && isObject(source)) {
            for (const key in source) {
              if (isObject(source[key])) {
                if (!target[key]) {
                  if (Array.isArray(source[key])) Object.assign(target, {
                    [key]: []
                  });else Object.assign(target, {
                    [key]: {}
                  });
                }

                deepmerge(target[key], source[key]);
              } else {
                Object.assign(target, {
                  [key]: source[key]
                });
              }
            }
          }

          return deepmerge.apply(void 0, [target].concat(sources));
        }

        function createNumberedArray(length) {
          return Array.from({
            length
          }, (_, k) => k);
        }
        /**
         * Converts options from different formats to
         * [ { label, value } ]
         *
         * You can usually pass control props here. Options will
         * be acquired from fieldSchema.
         *
         * @param {string} schemaTypeName Model name
         * @param {string} field Field name
         * @param {function|array} options Array with options. If
         *  it's a function it will be called with props.
         *  Array (or resulting one after calling) will be processed
         *  to populate label and value.
         */


        function processOptions(_ref) {
          let {
            fieldSchema,
            schemaTypeName,
            field,
            options,
            addDefault
          } = _ref,
              rest = _objectWithoutProperties(_ref, _excluded);

          if (fieldSchema && !options) options = fieldSchema.options;
          const extracted = typeof options == 'function' ? options(_objectSpread({
            name,
            field,
            schemaTypeName
          }, rest)) : options;

          const getLabel = option => Object(_translation_utils__WEBPACK_IMPORTED_MODULE_0__["trModel"])(schemaTypeName, field, option);

          const processed = extracted.map(option => {
            if (typeof option == 'string') {
              return {
                value: option,
                label: getLabel(option)
              };
            } else {
              if ('key' in option) {
                return _objectSpread(_objectSpread({}, option), {}, {
                  label: option.label || getLabel(option.key)
                });
              } else return option;
            }
          });

          if (addDefault) {
            return [{
              label: Object(_translation_utils__WEBPACK_IMPORTED_MODULE_0__["trModel"])(schemaTypeName, field, '_default'),
              value: ''
            }].concat(_toConsumableArray(processed));
          } else {
            return processed;
          }
        }
        /**
         * Transforms typical form path to array. Example:
         *
         * `pathToArray("pets[4].name") --> ['pets', '4', 'name']`
         * `pathToArray("pets.4.name") --> ['pets', '4', 'name']`
         */


        function pathToArray(path) {
          const unsquared = path.replace(/[[.](.*?)[\].]/g, '.$1.');
          return unsquared.split('.');
        }
        /**
         * Traverses an object using an array of keys.
         *
         * @param {object} object Object to traverse
         * @param {string|array} path Path in the form `"pets.4.name"`,
         *  `"pets[4].name"` or `['pets', '4', 'name']`
         * @param {object} options Optional options:
         *  {
         *    createIfMissing: false, // Creates missing entities with objects,
         *    returnValue: false,     // Ultimate value if you are not interested
         *                            // in context
         *  }
         *
         * @returns {array} Array in the form `[ object, attribute ]`
         *  (or empty if subobject is not found).
         *
         *  This allows you to mutate original object like this:
         *
         *  const [ container, attribute ] = objectTraverse(obj, path)
         *  container[attribute] = newValue
         *
         * TODO When createIfMissing, use path brackets as a
         * hint to when to create arrays or objects
         */


        function objectTraverse(object, pathOrArray, options = {}) {
          const {
            createIfMissing,
            returnValue
          } = options;
          const arrayed = Array.isArray(pathOrArray) ? pathOrArray : pathToArray(pathOrArray);
          const [next, ...rest] = arrayed;

          if (next in object) {
            if (rest.length == 0) {
              if (returnValue) return object[next];else return [object, next];
            } else {
              if (createIfMissing && typeof object[next] == 'undefined') object[next] = {};
              return objectTraverse(object[next], rest, options);
            }
          } else {
            if (createIfMissing) {
              object[next] = {}; // Repeat

              return objectTraverse(object, arrayed, options);
            } else {
              if (returnValue) return null;else return [];
            }
          }
        }
        /**
         * Returns input name in the form 'parent.index.field'
         *
         * @param {string} parent Optional parent
         * @param {number|string} index Optional index
         * @param {string} field Field
         *
         * @returns {string} Depends:
         *      - If you passed index, then '<parent>.<index>.<field>'
         *      - Else if you passed parent, then '<parent>.<field>'
         *      - Else field
         */


        function inputName({
          parent,
          index,
          field
        }) {
          if (typeof index == 'undefined') return parent ? `${parent}.${field}` : field;else return `${parent || ''}.${index}.${field}`;
        }
        /**
         * If attr is not found in object, we create it in the form
         * object[attr] = defaultObject
         *
         * @param {object} object Object
         * @param {string} attr Key
         * @param {function} create Function that returns a brand new
         *    object to assign if it didn't exist. Important: It must be
         *    a new object.
         *
         * @returns New or existing object[attr]
         *
         * @example
         *  const obj = { existing: { count: 42 } }
         *
         *  valueOrCreate(obj, 'existing', () => ({ count: 0 }))
         *    // -> { count: 42 }
         *  valueOrCreate(obj, 'invented', () => ({ count: 0 }))
         *    // -> { count: 0 }
         */


        function valueOrCreate(object, attr, create) {
          if (!(attr in object)) object[attr] = create();
          return object[attr];
        }
        /**
         * @param {any} thing If thing is an event, value
         *  will be extracted. I consider event anything
         *  that has target with type
         * @returns {any} value
         */


        function valueFromEvent(thing) {
          if ('target' in thing) {
            const {
              target,
              target: {
                type,
                value
              }
            } = thing;

            switch (type) {
              case 'checkbox':
                return target.checked;

              default:
                return value;
            }
          } else {
            return thing;
          }
        }
        /**
         * Gets props transform from skin element (formelly `render`)
         */


        function getPropsTransform(skinElement) {
          return skinElement.props || skinElement.render;
        }
        /**
         * Gets component from skin element
         */


        function getSkinComponent(skinElement) {
          return skinElement.component || skinElement.render;
        }
        /***/

      },

      /***/
      0:
      /*!*********************************!*\
        !*** multi ./src/index_base.js ***!
        \*********************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
        /*! ./src/index_base.js */
        "./src/index_base.js");
        /***/
      },

      /***/
      "react":
      /*!************************!*\
        !*** external "react" ***!
        \************************/

      /*! no static exports found */

      /***/
      function (module, exports) {
        module.exports = __WEBPACK_EXTERNAL_MODULE_react__;
        /***/
      },

      /***/
      "react-hook-form":
      /*!**********************************!*\
        !*** external "react-hook-form" ***!
        \**********************************/

      /*! no static exports found */

      /***/
      function (module, exports) {
        module.exports = __WEBPACK_EXTERNAL_MODULE_react_hook_form__;
        /***/
      }
      /******/

    })
  );
});

/***/ }),

/***/ "./src/components/ArrayPanel.js":
/*!**************************************!*\
  !*** ./src/components/ArrayPanel.js ***!
  \**************************************/
/*! exports provided: ArrayPanel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrayPanel", function() { return ArrayPanel; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_native__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-native */ "react-native");
/* harmony import */ var react_native__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_native__WEBPACK_IMPORTED_MODULE_1__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const renderItems = ({
  items,
  Panel,
  styles
}) => items.map(({
  idx,
  closeButton,
  inputs
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Panel, {
  key: idx,
  styles: styles,
  header: closeButton
}, inputs));

const ArrayPanel = props => {
  const {
    name,
    skin
  } = props;
  const Panel = skin.panel.render;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_native__WEBPACK_IMPORTED_MODULE_1__["View"], {
    key: name
  }, renderItems(_objectSpread(_objectSpread({}, props), {}, {
    Panel
  })));
};

/***/ }),

/***/ "./src/components/ArrayTable.js":
/*!**************************************!*\
  !*** ./src/components/ArrayTable.js ***!
  \**************************************/
/*! exports provided: ArrayTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrayTable", function() { return ArrayTable; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_hook_form_auto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-hook-form-auto */ "./node_modules/react-hook-form-auto/dist/base.js");
/* harmony import */ var react_hook_form_auto__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_hook_form_auto__WEBPACK_IMPORTED_MODULE_1__);
 // import { renderLectures } from './renderLectures'

const {
  Column,
  Table,
  Cell
} = {};


const renderColumns = ({
  items,
  subType,
  fieldNames
}) => {
  const someItem = items[0];

  const createCellRenderer = (column, colIdx) => rowIdx => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Cell, {
      key: column
    }, items[rowIdx].inputs[colIdx]);
  };

  return fieldNames.map((columnName, colIdx) => {
    const displayName = Object(react_hook_form_auto__WEBPACK_IMPORTED_MODULE_1__["trField"])(subType, columnName);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Column, {
      key: columnName,
      name: displayName,
      cellRenderer: createCellRenderer(columnName, colIdx)
    });
  });
};

const ArrayTable = ({
  items,
  schema
}) => {
  const subType = schema.getType();
  const schemaDef = schema.getSchema();
  const fieldNames = Object.keys(schemaDef);

  if (items.length > 0) {
    const renderRemove = rowIdx => {
      const {
        idx,
        closeButton
      } = items[rowIdx];
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Cell, {
        key: "remove"
      }, closeButton);
    };

    console.log("ITEMS", items);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Table, {
      numRows: items.length,
      defaultRowHeight: 31
    }, renderColumns({
      items,
      subType,
      fieldNames
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Column, {
      key: "remove",
      name: "",
      cellRenderer: renderRemove
    })));
  } else return null;
};

/***/ }),

/***/ "./src/components/Autoform.jsx":
/*!*************************************!*\
  !*** ./src/components/Autoform.jsx ***!
  \*************************************/
/*! exports provided: Autoform */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Autoform", function() { return Autoform; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _skin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../skin */ "./src/skin.js");
/* harmony import */ var react_hook_form_auto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hook-form-auto */ "./node_modules/react-hook-form-auto/dist/base.js");
/* harmony import */ var react_hook_form_auto__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_hook_form_auto__WEBPACK_IMPORTED_MODULE_2__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




let Autoform = (props, ref) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_hook_form_auto__WEBPACK_IMPORTED_MODULE_2__["AutoformBase"], _extends({}, props, {
  skin: _skin__WEBPACK_IMPORTED_MODULE_1__["default"],
  ref: ref
}));
Autoform = Object(react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(Autoform);

/***/ }),

/***/ "./src/components/Button.js":
/*!**********************************!*\
  !*** ./src/components/Button.js ***!
  \**********************************/
/*! exports provided: Button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_native__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-native */ "react-native");
/* harmony import */ var react_native__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_native__WEBPACK_IMPORTED_MODULE_1__);
const _excluded = ["className", "styles", "children", "type", "onClick", "intent", "mini"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



const Button = _ref => {
  let {
    className,
    styles,
    children,
    type,
    onClick,
    intent,
    mini
  } = _ref,
      rest = _objectWithoutProperties(_ref, _excluded);

  styles = styles || className;
  const rnIntent = type == 'submit' ? 'primary' : null;
  let buttonStyle = [styles.button, mini && styles.buttonMini, intent == 'add' && styles.buttonAdd, intent == 'remove' && styles.buttonRemove].filter(style => style);

  if (typeof children == 'string') {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_native__WEBPACK_IMPORTED_MODULE_1__["Button"], _extends({
      title: children,
      intent: rnIntent,
      style: buttonStyle,
      onPress: onClick
    }, rest));
  } else {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_native__WEBPACK_IMPORTED_MODULE_1__["TouchableOpacity"], _extends({
      style: buttonStyle,
      onPress: onClick
    }, rest), children);
  }
};

/***/ }),

/***/ "./src/components/Panel.jsx":
/*!**********************************!*\
  !*** ./src/components/Panel.jsx ***!
  \**********************************/
/*! exports provided: Panel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Panel", function() { return Panel; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_native__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-native */ "react-native");
/* harmony import */ var react_native__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_native__WEBPACK_IMPORTED_MODULE_1__);


const Panel = ({
  header,
  children,
  styles
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_native__WEBPACK_IMPORTED_MODULE_1__["View"], {
  style: styles.panel
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_native__WEBPACK_IMPORTED_MODULE_1__["View"], {
  style: styles.panelHeader
}, typeof header == 'string' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_native__WEBPACK_IMPORTED_MODULE_1__["Text"], {
  style: styles.panelHeaderText
}, header) || header), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_native__WEBPACK_IMPORTED_MODULE_1__["View"], {
  style: styles.panelContents
}, children));

/***/ }),

/***/ "./src/components/Radios.js":
/*!**********************************!*\
  !*** ./src/components/Radios.js ***!
  \**********************************/
/*! exports provided: Radios */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Radios", function() { return Radios; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_native__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-native */ "react-native");
/* harmony import */ var react_native__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_native__WEBPACK_IMPORTED_MODULE_1__);


const Radios = ({
  options,
  value,
  onChange,
  styles
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_native__WEBPACK_IMPORTED_MODULE_1__["View"], {
  style: styles.radioContainer
}, options.map(option => {
  const handleChange = () => {
    onChange(option.value);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_native__WEBPACK_IMPORTED_MODULE_1__["TouchableWithoutFeedback"], {
    key: option.value,
    onPress: handleChange
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_native__WEBPACK_IMPORTED_MODULE_1__["View"], {
    style: styles.radioLine
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_native__WEBPACK_IMPORTED_MODULE_1__["View"], {
    style: styles.radioWrap
  }, option.value == value && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_native__WEBPACK_IMPORTED_MODULE_1__["View"], {
    style: styles.radioSelected
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_native__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    style: styles.radioLabel
  }, option.label)));
}));

/***/ }),

/***/ "./src/components/TextInput.jsx":
/*!**************************************!*\
  !*** ./src/components/TextInput.jsx ***!
  \**************************************/
/*! exports provided: TextInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextInput", function() { return TextInput; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_native__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-native */ "react-native");
/* harmony import */ var react_native__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_native__WEBPACK_IMPORTED_MODULE_1__);


const TextInput = ({
  value,
  onChange,
  style,
  type
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_native__WEBPACK_IMPORTED_MODULE_1__["TextInput"], {
    value: value,
    onChangeText: onChange,
    style: style,
    type: type
  });
};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_hook_form_auto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-hook-form-auto */ "./node_modules/react-hook-form-auto/dist/base.js");
/* harmony import */ var react_hook_form_auto__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_hook_form_auto__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in react_hook_form_auto__WEBPACK_IMPORTED_MODULE_0__) if(["default","Panel","Autoform"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return react_hook_form_auto__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _components_Panel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Panel */ "./src/components/Panel.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Panel", function() { return _components_Panel__WEBPACK_IMPORTED_MODULE_1__["Panel"]; });

/* harmony import */ var _components_Autoform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Autoform */ "./src/components/Autoform.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Autoform", function() { return _components_Autoform__WEBPACK_IMPORTED_MODULE_2__["Autoform"]; });




Object(react_hook_form_auto__WEBPACK_IMPORTED_MODULE_0__["setLanguageByName"])('en');
Object(react_hook_form_auto__WEBPACK_IMPORTED_MODULE_0__["addTranslations"])({
  requiredLabel: '(required)'
});


/***/ }),

/***/ "./src/skin.js":
/*!*********************!*\
  !*** ./src/skin.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_native__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-native */ "react-native");
/* harmony import */ var react_native__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_native__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_ArrayTable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/ArrayTable */ "./src/components/ArrayTable.js");
/* harmony import */ var _components_ArrayPanel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/ArrayPanel */ "./src/components/ArrayPanel.js");
/* harmony import */ var _components_Radios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Radios */ "./src/components/Radios.js");
/* harmony import */ var _components_Panel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Panel */ "./src/components/Panel.jsx");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/Button */ "./src/components/Button.js");
/* harmony import */ var _components_TextInput__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/TextInput */ "./src/components/TextInput.jsx");
/* harmony import */ var react_hook_form_auto__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-hook-form-auto */ "./node_modules/react-hook-form-auto/dist/base.js");
/* harmony import */ var react_hook_form_auto__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_hook_form_auto__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _react_native_community_checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @react-native-community/checkbox */ "@react-native-community/checkbox");
/* harmony import */ var _react_native_community_checkbox__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_react_native_community_checkbox__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _react_native_community_slider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @react-native-community/slider */ "@react-native-community/slider");
/* harmony import */ var _react_native_community_slider__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_react_native_community_slider__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _react_native_picker_picker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @react-native-picker/picker */ "@react-native-picker/picker");
/* harmony import */ var _react_native_picker_picker__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_react_native_picker_picker__WEBPACK_IMPORTED_MODULE_11__);
const _excluded = ["name", "defaultValue", "value", "errorText", "field", "fieldSchema", "formHook", "rules", "adaptorComponent", "children", "controlProps", "setValue", "styles", "render"],
      _excluded2 = ["className"],
      _excluded3 = ["className"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }














function createChanger(setValue, name) {
  return function onChange(value) {
    setValue(name, value, {
      shouldValidate: true
    });
  };
}

const GroupAdaptor = ({
  name,
  field,
  fieldSchema,
  schemaTypeName,
  errorText,
  helperText,
  inline,
  children,
  labelOverride,
  addWrapperProps,
  styles
}) => {
  if (inline) {
    return children;
  } else {
    const label = typeof labelOverride != 'undefined' ? labelOverride : Object(react_hook_form_auto__WEBPACK_IMPORTED_MODULE_8__["trField"])({
      fieldSchema,
      schemaTypeName,
      field
    });
    if (errorText) helperText = errorText;
    const infoId = Object(react_hook_form_auto__WEBPACK_IMPORTED_MODULE_8__["trPath"])(schemaTypeName, field, '_labelInfo');
    const labelInfo = Object(react_hook_form_auto__WEBPACK_IMPORTED_MODULE_8__["stringExists"])(infoId) ? Object(react_hook_form_auto__WEBPACK_IMPORTED_MODULE_8__["tr"])(infoId) : fieldSchema.required && Object(react_hook_form_auto__WEBPACK_IMPORTED_MODULE_8__["tr"])('requiredLabel');
    let containerStyles = [styles.container, errorText && styles.erroredContainer].filter(style => style);
    let helperTextStyles = [styles.helperText, errorText && styles.erroredHelperText];
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_native__WEBPACK_IMPORTED_MODULE_1__["View"], {
      style: containerStyles
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_native__WEBPACK_IMPORTED_MODULE_1__["View"], {
      style: styles.labelContainer
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_native__WEBPACK_IMPORTED_MODULE_1__["Text"], {
      style: styles.label
    }, label), labelInfo && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_native__WEBPACK_IMPORTED_MODULE_1__["Text"], {
      style: styles.labelInfo
    }, labelInfo)), children, helperText && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_native__WEBPACK_IMPORTED_MODULE_1__["Text"], {
      style: helperTextStyles
    }, helperText));
  }
}; // Both render and adaptorComponent will do.


const ControlAdaptor = _ref => {
  let {
    name,
    defaultValue,
    value,
    errorText,
    field,
    fieldSchema,
    formHook,
    rules,
    adaptorComponent,
    children,
    controlProps,
    setValue,
    styles,
    render
  } = _ref,
      rest = _objectWithoutProperties(_ref, _excluded);

  let inputStyle = [styles.input, errorText && styles.erroredInput]; // Will use my own onChange instead of Control's to
  // make it work with coercers

  const handleChange = createChanger(setValue, name);
  const Comp = adaptorComponent;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Comp, _extends({}, controlProps, rest, {
    value: value,
    onChange: handleChange,
    styles: styles,
    style: inputStyle
  }));
};

/* harmony default export */ __webpack_exports__["default"] = ({
  defaultWrap: GroupAdaptor,
  string: {
    controlled: true,
    render: props => {
      return _objectSpread(_objectSpread({}, props), {}, {
        component: ControlAdaptor,
        adaptorComponent: _components_TextInput__WEBPACK_IMPORTED_MODULE_7__["TextInput"]
      });
    }
  },
  number: {
    coerce: value => value && parseFloat(value) || 0,
    controlled: true,
    render: props => {
      return _objectSpread(_objectSpread({}, props), {}, {
        component: ControlAdaptor,
        adaptorComponent: _components_TextInput__WEBPACK_IMPORTED_MODULE_7__["TextInput"],
        controlProps: {
          type: 'number'
        }
      });
    }
  },
  password: {
    controlled: true,
    render: props => {
      return _objectSpread(_objectSpread({}, props), {}, {
        component: ControlAdaptor,
        adaptorComponent: _components_TextInput__WEBPACK_IMPORTED_MODULE_7__["TextInput"],
        controlProps: {
          type: 'password'
        }
      });
    }
  },
  select: {
    controlled: true,
    render: {
      component: props => {
        const {
          schemaTypeName,
          name,
          formHook,
          defaultValue,
          styles,
          value,
          setValue
        } = props;
        const label = Object(react_hook_form_auto__WEBPACK_IMPORTED_MODULE_8__["trField"])(props);
        const options = Object(react_hook_form_auto__WEBPACK_IMPORTED_MODULE_8__["processOptions"])(_objectSpread(_objectSpread({}, props), {}, {
          addDefault: true
        }));
        const handleChange = createChanger(setValue, name);
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_react_native_picker_picker__WEBPACK_IMPORTED_MODULE_11__["Picker"], {
          selectedValue: value,
          onValueChange: handleChange,
          style: styles.select
        }, options.map(({
          label,
          value
        }) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_react_native_picker_picker__WEBPACK_IMPORTED_MODULE_11__["Picker"].Item, {
          key: value,
          label: label,
          value: value
        })));
      }
    }
  },
  boolean: {
    wrapper: props => props.children,
    coerce: value => Boolean(value),
    controlled: true,
    render: {
      component: props => {
        const {
          name,
          defaultValue,
          formHook,
          control,
          styles,
          value,
          setValue,
          onBlur
        } = props;
        const label = Object(react_hook_form_auto__WEBPACK_IMPORTED_MODULE_8__["trField"])(props);
        const handleChange = createChanger(setValue, name);
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_native__WEBPACK_IMPORTED_MODULE_1__["View"], {
          style: styles.checkboxWrap
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_react_native_community_checkbox__WEBPACK_IMPORTED_MODULE_9___default.a, {
          key: name,
          name: name,
          value: value,
          onValueChange: handleChange
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_native__WEBPACK_IMPORTED_MODULE_1__["Text"], {
          style: styles.checkboxLabel
        }, label));
      }
    }
  },
  radios: {
    controlled: true,
    render: {
      component: props => {
        const {
          name,
          formHook,
          defaultValue,
          styles,
          value,
          setValue,
          onBlur
        } = props;
        const label = Object(react_hook_form_auto__WEBPACK_IMPORTED_MODULE_8__["trField"])(props);
        const options = Object(react_hook_form_auto__WEBPACK_IMPORTED_MODULE_8__["processOptions"])(props);
        const handleChange = createChanger(setValue, name);
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Radios__WEBPACK_IMPORTED_MODULE_4__["Radios"], {
          options: options,
          value: value,
          onChange: handleChange,
          styles: styles
        });
      }
    }
  },
  range: {
    coerce: value => parseFloat(value),
    controlled: true,
    render: {
      component: props => {
        const {
          name,
          fieldSchema: {
            min,
            max,
            step,
            sliderParams
          },
          formHook,
          styles,
          value,
          setValue,
          onBlur
        } = props;
        const defaultValue = typeof props.defaultValue == 'undefined' ? min : props.defaultValue;
        const stepExp = Math.log10(step);
        const stepDecimals = stepExp >= 0 ? 0 : -stepExp;
        const change = createChanger(setValue, name);

        const handleChange = newValue => {
          if (!step) {
            change(newValue);
          } else {
            const steps = parseInt((newValue - min) / step);
            const steppedValue = min + steps * step;
            const prettyValue = steppedValue.toFixed(stepDecimals);
            change(parseFloat(prettyValue));
          }
        };

        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_native__WEBPACK_IMPORTED_MODULE_1__["View"], {
          style: styles.sliderContainer
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_native__WEBPACK_IMPORTED_MODULE_1__["Text"], {
          style: styles.sliderValue
        }, value), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_react_native_community_slider__WEBPACK_IMPORTED_MODULE_10___default.a, _extends({}, sliderParams, {
          minimumValue: min,
          maximumValue: max,
          value: value,
          step: step,
          onValueChange: handleChange,
          style: styles.slider
        })));
      }
    }
  },
  button: {
    render: _components_Button__WEBPACK_IMPORTED_MODULE_6__["Button"]
  },
  arrayButton: {
    render: props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Button__WEBPACK_IMPORTED_MODULE_6__["Button"], _extends({}, props, {
      mini: true
    }))
  },
  form: {
    render: ({
      children
    }) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_native__WEBPACK_IMPORTED_MODULE_1__["View"], null, children)
  },
  panel: {
    render: ({
      children,
      header,
      styles
    }) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Panel__WEBPACK_IMPORTED_MODULE_5__["Panel"], {
      header: header,
      styles: styles
    }, children)
  },
  addGlyph: {
    render: ({
      styles
    }) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_native__WEBPACK_IMPORTED_MODULE_1__["Text"], {
      style: styles && styles.addText
    }, "+")
  },
  removeGlyph: {
    render: ({
      styles
    }) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_native__WEBPACK_IMPORTED_MODULE_1__["Text"], {
      style: styles && styles.removeText
    }, "-")
  },
  arrayTable: {
    render: _components_ArrayTable__WEBPACK_IMPORTED_MODULE_2__["ArrayTable"]
  },
  arrayPanel: {
    render: _components_ArrayPanel__WEBPACK_IMPORTED_MODULE_3__["ArrayPanel"]
  },
  div: {
    render: _ref2 => {
      let {
        className
      } = _ref2,
          rest = _objectWithoutProperties(_ref2, _excluded2);

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_native__WEBPACK_IMPORTED_MODULE_1__["View"], _extends({
        style: className
      }, rest));
    }
  },
  text: {
    render: _ref3 => {
      let {
        className
      } = _ref3,
          rest = _objectWithoutProperties(_ref3, _excluded3);

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_native__WEBPACK_IMPORTED_MODULE_1__["Text"], _extends({
        style: className
      }, rest));
    }
  }
});

/***/ }),

/***/ "@react-native-community/checkbox":
/*!***************************************************!*\
  !*** external "@react-native-community/checkbox" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__react_native_community_checkbox__;

/***/ }),

/***/ "@react-native-community/slider":
/*!*************************************************!*\
  !*** external "@react-native-community/slider" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__react_native_community_slider__;

/***/ }),

/***/ "@react-native-picker/picker":
/*!**********************************************!*\
  !*** external "@react-native-picker/picker" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__react_native_picker_picker__;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ }),

/***/ "react-hook-form":
/*!**********************************!*\
  !*** external "react-hook-form" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react_hook_form__;

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
//# sourceMappingURL=rhfa-react-native.js.map