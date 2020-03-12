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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./config/config.ts":
/*!**************************!*\
  !*** ./config/config.ts ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var config = {
  secret: 'PP87ANTIPIRATE'
};
/* harmony default export */ __webpack_exports__["default"] = (config);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js!./src/containers/Home/style.css":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./node_modules/postcss-loader/src!./src/containers/Home/style.css ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".style_btn-3JaE8 {\n    width: 100px;\n    height: 60px;\n}", ""]);
// Exports
exports.locals = {
	"btn": "style_btn-3JaE8"
};
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/isomorphic-style-loader/insertCss.js":
/*!***********************************************************!*\
  !*** ./node_modules/isomorphic-style-loader/insertCss.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! Isomorphic Style Loader | MIT License | https://github.com/kriasoft/isomorphic-style-loader */



var inserted = {};

function b64EncodeUnicode(str) {
  return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {
    return String.fromCharCode("0x" + p1);
  }));
}

function removeCss(ids) {
  ids.forEach(function (id) {
    if (--inserted[id] <= 0) {
      var elem = document.getElementById(id);

      if (elem) {
        elem.parentNode.removeChild(elem);
      }
    }
  });
}

function insertCss(styles, _temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      _ref$replace = _ref.replace,
      replace = _ref$replace === void 0 ? false : _ref$replace,
      _ref$prepend = _ref.prepend,
      prepend = _ref$prepend === void 0 ? false : _ref$prepend,
      _ref$prefix = _ref.prefix,
      prefix = _ref$prefix === void 0 ? 's' : _ref$prefix;

  var ids = [];

  for (var i = 0; i < styles.length; i++) {
    var _styles$i = styles[i],
        moduleId = _styles$i[0],
        css = _styles$i[1],
        media = _styles$i[2],
        sourceMap = _styles$i[3];
    var id = "" + prefix + moduleId + "-" + i;
    ids.push(id);

    if (inserted[id]) {
      if (!replace) {
        inserted[id]++;
        continue;
      }
    }

    inserted[id] = 1;
    var elem = document.getElementById(id);
    var create = false;

    if (!elem) {
      create = true;
      elem = document.createElement('style');
      elem.setAttribute('type', 'text/css');
      elem.id = id;

      if (media) {
        elem.setAttribute('media', media);
      }
    }

    var cssText = css;

    if (sourceMap && typeof btoa === 'function') {
      cssText += "\n/*# sourceMappingURL=data:application/json;base64," + b64EncodeUnicode(JSON.stringify(sourceMap)) + "*/";
      cssText += "\n/*# sourceURL=" + sourceMap.file + "?" + id + "*/";
    }

    if ('textContent' in elem) {
      elem.textContent = cssText;
    } else {
      elem.styleSheet.cssText = cssText;
    }

    if (create) {
      if (prepend) {
        document.head.insertBefore(elem, document.head.childNodes[0]);
      } else {
        document.head.appendChild(elem);
      }
    }
  }

  return removeCss.bind(null, ids);
}

module.exports = insertCss;
//# sourceMappingURL=insertCss.js.map


/***/ }),

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/*! exports provided: loadData, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadData", function() { return loadData; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-config */ "react-router-config");
/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Header___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Header/ */ "./src/components/Header/index.tsx");
/* harmony import */ var _components_Header_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Header/store */ "./src/components/Header/store/index.ts");





var App = function App(props) {
  var route = props.route;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header___WEBPACK_IMPORTED_MODULE_2__["default"], null), // 二级路由渲染
  Object(react_router_config__WEBPACK_IMPORTED_MODULE_1__["renderRoutes"])(route === null || route === void 0 ? void 0 : route.routes));
};

var loadData = function loadData(store) {
  return store.dispatch(_components_Header_store__WEBPACK_IMPORTED_MODULE_3__["actionCreators"].getHeaderInfo());
};
/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/Routes.tsx":
/*!************************!*\
  !*** ./src/Routes.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App */ "./src/App.tsx");
/* harmony import */ var _containers_Home_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./containers/Home/index */ "./src/containers/Home/index.tsx");
/* harmony import */ var _containers_Translation_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./containers/Translation/index */ "./src/containers/Translation/index.tsx");
/* harmony import */ var _containers_NotFound__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./containers/NotFound */ "./src/containers/NotFound/index.tsx");




/**
 * 多级路由的写法
 */

var routes = [{
  path: '/',
  component: _App__WEBPACK_IMPORTED_MODULE_0__["default"],
  // 此处有类型名称兼容问题 不兼容React.FC，实际上二者相同
  loadData: _App__WEBPACK_IMPORTED_MODULE_0__["loadData"],
  routes: [{
    path: '/',
    component: _containers_Home_index__WEBPACK_IMPORTED_MODULE_1__["default"],
    exact: true,
    loadData: _containers_Home_index__WEBPACK_IMPORTED_MODULE_1__["loadData"],
    key: 'home'
  }, {
    path: '/translation',
    component: _containers_Translation_index__WEBPACK_IMPORTED_MODULE_2__["default"],
    exact: true,
    loadData: _containers_Translation_index__WEBPACK_IMPORTED_MODULE_2__["loadData"],
    key: 'login'
  }, {
    component: _containers_NotFound__WEBPACK_IMPORTED_MODULE_3__["default"]
  }],
  key: 'App'
}]; // const routes: RouteConfig[] = 

/* harmony default export */ __webpack_exports__["default"] = (routes); // export default (
//     <Fragment>
//         <Route path='/' exact component={Home} />
//         <Route path='/login' exact component={Login} />
//     </Fragment>
// )

/***/ }),

/***/ "./src/client/require.ts":
/*!*******************************!*\
  !*** ./src/client/require.ts ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config/config */ "./config/config.ts");



var createInstance = function createInstance() {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
    baseURL: '/',
    params: {
      secret: _config_config__WEBPACK_IMPORTED_MODULE_1__["default"].secret
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (createInstance);

/***/ }),

/***/ "./src/components/Header/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/Header/index.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store */ "./src/components/Header/store/index.ts");



 // import './index.css';

var Header = function Header() {
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  var headerState = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.header;
  }, react_redux__WEBPACK_IMPORTED_MODULE_2__["shallowEqual"]);
  var isLogin = headerState.isLogin;

  var handleLogin = function handleLogin() {
    dispatch(_store__WEBPACK_IMPORTED_MODULE_3__["actionCreators"].login());
  };

  var handleLogout = function handleLogout() {
    dispatch(_store__WEBPACK_IMPORTED_MODULE_3__["actionCreators"].logout());
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/"
  }, "\u9996\u9875"), "islogin: ".concat(isLogin), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), isLogin ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/translation"
  }, "\u7FFB\u8BD1\u5217\u8868"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "click",
    onClick: handleLogout
  }, "\u9000\u51FA")) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "click",
    onClick: handleLogin
  }, "\u767B\u9646"));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./src/components/Header/store/actionCreators.ts":
/*!*******************************************************!*\
  !*** ./src/components/Header/store/actionCreators.ts ***!
  \*******************************************************/
/*! exports provided: getHeaderInfo, login, logout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHeaderInfo", function() { return getHeaderInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return logout; });
var changeIsLoginAction = function changeIsLoginAction(isLogin) {
  return {
    type: 'change_is_login',
    payload: {
      isLogin: isLogin
    }
  };
};

var getHeaderInfo = function getHeaderInfo() {
  return function (dispatch, getState, axiosInstance) {
    return axiosInstance.get('/api/isLogin.json').then(function (res) {
      var _res$data;

      var isLogin = (_res$data = res.data) === null || _res$data === void 0 ? void 0 : _res$data.data.login;
      dispatch(changeIsLoginAction(isLogin));
    }).catch(function (err) {
      console.log(err);
    });
  };
};
var login = function login() {
  return function (dispatch, getState, axiosInstance) {
    return axiosInstance.get('/api/login.json').then(function (res) {
      var _res$data2;

      var isLogin = (_res$data2 = res.data) === null || _res$data2 === void 0 ? void 0 : _res$data2.data.login;
      dispatch(changeIsLoginAction(isLogin));
    });
  };
};
var logout = function logout() {
  return function (dispatch, getState, axiosInstance) {
    return axiosInstance.get('/api/logout.json').then(function (res) {
      var _res$data3;

      var isLogout = (_res$data3 = res.data) === null || _res$data3 === void 0 ? void 0 : _res$data3.data.logout;
      dispatch(changeIsLoginAction(false));
    }).catch(function (err) {
      console.log(err);
    });
  };
};

/***/ }),

/***/ "./src/components/Header/store/index.ts":
/*!**********************************************!*\
  !*** ./src/components/Header/store/index.ts ***!
  \**********************************************/
/*! exports provided: reducer, actionCreators */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducer */ "./src/components/Header/store/reducer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return _reducer__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _actionCreators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actionCreators */ "./src/components/Header/store/actionCreators.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "actionCreators", function() { return _actionCreators__WEBPACK_IMPORTED_MODULE_1__; });




/***/ }),

/***/ "./src/components/Header/store/reducer.ts":
/*!************************************************!*\
  !*** ./src/components/Header/store/reducer.ts ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ "@babel/runtime-corejs3/core-js-stable/object/define-property");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-properties */ "@babel/runtime-corejs3/core-js-stable/object/define-properties");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors */ "@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/for-each */ "@babel/runtime-corejs3/core-js-stable/instance/for-each");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor */ "@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/filter */ "@babel/runtime-corejs3/core-js-stable/instance/filter");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols */ "@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/keys */ "@babel/runtime-corejs3/core-js-stable/object/keys");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/defineProperty */ "@babel/runtime-corejs3/helpers/defineProperty");
/* harmony import */ var _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__);










function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_7___default()(object); if (_babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_6___default.a) { var symbols = _babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_6___default()(object); if (enumerableOnly) symbols = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_5___default()(symbols).call(symbols, function (sym) { return _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_4___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context; _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_3___default()(_context = ownKeys(Object(source), true)).call(_context, function (key) { _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(target, key, source[key]); }); } else if (_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs3_core_js_stable_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { var _context2; _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_3___default()(_context2 = ownKeys(Object(source))).call(_context2, function (key) { _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_4___default()(source, key)); }); } } return target; }

var defaultState = {
  isLogin: true
};
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'change_is_login':
      {
        var thisAction = action;
        var isLogin = thisAction.payload.isLogin;
        return _objectSpread({}, state, {
          isLogin: isLogin
        });
      }

    default:
      return state;
  }
});

/***/ }),

/***/ "./src/containers/Home/index.tsx":
/*!***************************************!*\
  !*** ./src/containers/Home/index.tsx ***!
  \***************************************/
/*! exports provided: loadData, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadData", function() { return loadData; });
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name */ "core-js/modules/es.function.name");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/concat */ "@babel/runtime-corejs3/core-js-stable/instance/concat");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ "@babel/runtime-corejs3/core-js-stable/instance/map");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./store */ "./src/containers/Home/store/index.ts");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style.css */ "./src/containers/Home/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_6__);








var Home = function Home() {
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();
  var homeState = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.home;
  }, react_redux__WEBPACK_IMPORTED_MODULE_4__["shallowEqual"]);
  var name = homeState.name,
      newsList = homeState.newsList;
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (newsList.length === 0) {
      dispatch(_store__WEBPACK_IMPORTED_MODULE_5__["actionCreators"].getHomeList());
    }
  }, []);

  var handleChangeName = function handleChangeName() {
    dispatch(_store__WEBPACK_IMPORTED_MODULE_5__["actionCreators"].changeName());
  };

  var getList = function getList() {
    return _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_2___default()(newsList).call(newsList, function (item) {
      var _context;

      return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        key: item.id
      }, _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_1___default()(_context = "".concat(item.id, "  ")).call(_context, item.title));
    });
  };

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    onClick: handleChangeName
  }, name), getList(), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button", {
    className: "".concat(_style_css__WEBPACK_IMPORTED_MODULE_6__["btn"]),
    onClick: function onClick() {
      console.log('on click');
    }
  }, "click"));
};

var loadData = function loadData(store) {
  return store.dispatch(_store__WEBPACK_IMPORTED_MODULE_5__["actionCreators"].getHomeList());
};
/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./src/containers/Home/store/actionCreators.ts":
/*!*****************************************************!*\
  !*** ./src/containers/Home/store/actionCreators.ts ***!
  \*****************************************************/
/*! exports provided: changeHomeListAction, getHomeList, changeName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeHomeListAction", function() { return changeHomeListAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHomeList", function() { return getHomeList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeName", function() { return changeName; });
var changeHomeListAction = function changeHomeListAction(list) {
  var action = {
    type: 'change_home_list',
    payload: {
      list: list
    }
  };
  return action;
};
/**
 * axios GET列表
 */

var getHomeList = function getHomeList() {
  return function (dispatch, getState, axiosInstance) {
    return axiosInstance.get('/api/news.json').then(function (res) {
      var responseResult = res.data;
      var action = changeHomeListAction(responseResult === null || responseResult === void 0 ? void 0 : responseResult.data);
      dispatch(action);
    }).catch(function (err) {
      console.log('API geiHomeList 数据获取出错', err);
    });
  };
};
var changeName = function changeName() {
  return function (dispatch) {
    dispatch({
      type: 'change_name',
      payload: {
        name: 'lee'
      }
    });
  };
};

/***/ }),

/***/ "./src/containers/Home/store/index.ts":
/*!********************************************!*\
  !*** ./src/containers/Home/store/index.ts ***!
  \********************************************/
/*! exports provided: reducer, actionCreators */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducer */ "./src/containers/Home/store/reducer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return _reducer__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _actionCreators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actionCreators */ "./src/containers/Home/store/actionCreators.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "actionCreators", function() { return _actionCreators__WEBPACK_IMPORTED_MODULE_1__; });




/***/ }),

/***/ "./src/containers/Home/store/reducer.ts":
/*!**********************************************!*\
  !*** ./src/containers/Home/store/reducer.ts ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name */ "core-js/modules/es.function.name");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ "@babel/runtime-corejs3/core-js-stable/object/define-property");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_properties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-properties */ "@babel/runtime-corejs3/core-js-stable/object/define-properties");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_properties__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_define_properties__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors */ "@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/for-each */ "@babel/runtime-corejs3/core-js-stable/instance/for-each");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor */ "@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/filter */ "@babel/runtime-corejs3/core-js-stable/instance/filter");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols */ "@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/keys */ "@babel/runtime-corejs3/core-js-stable/object/keys");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/defineProperty */ "@babel/runtime-corejs3/helpers/defineProperty");
/* harmony import */ var _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9__);











function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_8___default()(object); if (_babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_7___default.a) { var symbols = _babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_7___default()(object); if (enumerableOnly) symbols = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_6___default()(symbols).call(symbols, function (sym) { return _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_5___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context; _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_4___default()(_context = ownKeys(Object(source), true)).call(_context, function (key) { _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(target, key, source[key]); }); } else if (_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_3___default.a) { _babel_runtime_corejs3_core_js_stable_object_define_properties__WEBPACK_IMPORTED_MODULE_2___default()(target, _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_3___default()(source)); } else { var _context2; _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_4___default()(_context2 = ownKeys(Object(source))).call(_context2, function (key) { _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_1___default()(target, key, _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_5___default()(source, key)); }); } } return target; }

var defaultState = {
  name: 'dell',
  newsList: []
};
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'change_home_list':
      {
        var thisAction = action;
        var list = thisAction.payload.list;
        return _objectSpread({}, state, {
          newsList: list
        });
      }

    case 'change_name':
      {
        var name = action.payload.name;
        return _objectSpread({}, state, {
          name: name
        });
      }

    default:
      return state;
  }
});

/***/ }),

/***/ "./src/containers/Home/style.css":
/*!***************************************!*\
  !*** ./src/containers/Home/style.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    var refs = 0;
    var css = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-1!../../../node_modules/postcss-loader/src!./style.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js!./src/containers/Home/style.css");
    var insertCss = __webpack_require__(/*! ../../../node_modules/isomorphic-style-loader/insertCss.js */ "./node_modules/isomorphic-style-loader/insertCss.js");
    var content = typeof css === 'string' ? [[module.i, css, '']] : css;

    exports = module.exports = css.locals || {};
    exports._getContent = function() { return content; };
    exports._getCss = function() { return '' + css; };
    exports._insertCss = function(options) { return insertCss(content, options) };

    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) { var removeCss; }
  

/***/ }),

/***/ "./src/containers/NotFound/index.tsx":
/*!*******************************************!*\
  !*** ./src/containers/NotFound/index.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var NotFound = function NotFound(props) {
  var staticContext = props.staticContext;
  staticContext && (staticContext.NOT_FOUND = true);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "sorry\uFF0C\u60A8\u8BBF\u95EE\u7684\u9875\u9762\u4E0D\u5B58\u5728");
};

/* harmony default export */ __webpack_exports__["default"] = (NotFound);

/***/ }),

/***/ "./src/containers/Translation/index.tsx":
/*!**********************************************!*\
  !*** ./src/containers/Translation/index.tsx ***!
  \**********************************************/
/*! exports provided: loadData, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadData", function() { return loadData; });
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ "@babel/runtime-corejs3/core-js-stable/instance/map");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store */ "./src/containers/Translation/store/index.ts");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_4__);






var Translation = function Translation() {
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  var isLogin = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.header.isLogin;
  });
  var translationState = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.translation;
  });
  var translationsList = translationState.translationsList;
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (translationsList.length === 0) {
      dispatch(_store__WEBPACK_IMPORTED_MODULE_2__["actionCreators"].getTranslationsList());
    }
  }, []);
  return isLogin ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0___default()(translationsList).call(translationsList, function (listItem) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      key: listItem.id
    }, listItem.title);
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    onClick: function onClick() {
      console.log('on click');
    }
  }, "click")) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Redirect"], {
    to: "/"
  });
};

var loadData = function loadData(store) {
  return store.dispatch(_store__WEBPACK_IMPORTED_MODULE_2__["actionCreators"].getTranslationsList());
};
/* harmony default export */ __webpack_exports__["default"] = (Translation);

/***/ }),

/***/ "./src/containers/Translation/store/actionCreators.ts":
/*!************************************************************!*\
  !*** ./src/containers/Translation/store/actionCreators.ts ***!
  \************************************************************/
/*! exports provided: getTranslationsList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTranslationsList", function() { return getTranslationsList; });
var changeTranslationsListAction = function changeTranslationsListAction(translationsList) {
  return {
    type: 'get_translations_list',
    payload: {
      translationsList: translationsList
    }
  };
};

var getTranslationsList = function getTranslationsList() {
  return function (dispatch, getState, axiosInstance) {
    return axiosInstance.get('/api/translations.json').then(function (res) {
      var responseResult = res.data;

      if (responseResult.success) {
        dispatch(changeTranslationsListAction(responseResult.data));
      } else {
        alert('请先登录');
        dispatch(changeTranslationsListAction([]));
      }
    }).catch(function (err) {
      console.log(err);
    });
  };
};

/***/ }),

/***/ "./src/containers/Translation/store/index.ts":
/*!***************************************************!*\
  !*** ./src/containers/Translation/store/index.ts ***!
  \***************************************************/
/*! exports provided: actionCreators, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actionCreators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actionCreators */ "./src/containers/Translation/store/actionCreators.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "actionCreators", function() { return _actionCreators__WEBPACK_IMPORTED_MODULE_0__; });
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducer */ "./src/containers/Translation/store/reducer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return _reducer__WEBPACK_IMPORTED_MODULE_1__["default"]; });





/***/ }),

/***/ "./src/containers/Translation/store/reducer.ts":
/*!*****************************************************!*\
  !*** ./src/containers/Translation/store/reducer.ts ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ "@babel/runtime-corejs3/core-js-stable/object/define-property");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-properties */ "@babel/runtime-corejs3/core-js-stable/object/define-properties");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors */ "@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/for-each */ "@babel/runtime-corejs3/core-js-stable/instance/for-each");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor */ "@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/filter */ "@babel/runtime-corejs3/core-js-stable/instance/filter");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols */ "@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/keys */ "@babel/runtime-corejs3/core-js-stable/object/keys");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/defineProperty */ "@babel/runtime-corejs3/helpers/defineProperty");
/* harmony import */ var _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__);










function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_7___default()(object); if (_babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_6___default.a) { var symbols = _babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_6___default()(object); if (enumerableOnly) symbols = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_5___default()(symbols).call(symbols, function (sym) { return _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_4___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context; _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_3___default()(_context = ownKeys(Object(source), true)).call(_context, function (key) { _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(target, key, source[key]); }); } else if (_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs3_core_js_stable_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { var _context2; _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_3___default()(_context2 = ownKeys(Object(source))).call(_context2, function (key) { _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_4___default()(source, key)); }); } } return target; }

var defaultState = {
  translationsList: []
};
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'get_translations_list':
      {
        var thisAction = action;
        var translationsList = thisAction.payload.translationsList;
        return _objectSpread({}, state, {
          translationsList: translationsList
        });
      }

    default:
      return state;
  }
});

/***/ }),

/***/ "./src/middlewares/catchError.ts":
/*!***************************************!*\
  !*** ./src/middlewares/catchError.ts ***!
  \***************************************/
/*! exports provided: catchError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "catchError", function() { return catchError; });
var catchError = function catchError() {
  return function (req, res, next) {
    try {
      next();
    } catch (err) {
      res.json({
        msg: 'error'
      });
    }
  };
};

/***/ }),

/***/ "./src/server/index.ts":
/*!*****************************!*\
  !*** ./src/server/index.ts ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "core-js/modules/es.array.iterator");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "core-js/modules/es.object.to-string");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.promise */ "core-js/modules/es.promise");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "core-js/modules/es.string.iterator");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "core-js/modules/web.dom-collections.iterator");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs3/regenerator */ "@babel/runtime-corejs3/regenerator");
/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/promise */ "@babel/runtime-corejs3/core-js-stable/promise");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/for-each */ "@babel/runtime-corejs3/core-js-stable/instance/for-each");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! regenerator-runtime/runtime */ "regenerator-runtime/runtime");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/asyncToGenerator */ "@babel/runtime-corejs3/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var express_http_proxy__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! express-http-proxy */ "express-http-proxy");
/* harmony import */ var express_http_proxy__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(express_http_proxy__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _middlewares_catchError__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../middlewares/catchError */ "./src/middlewares/catchError.ts");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./util */ "./src/server/util.tsx");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../store */ "./src/store/index.ts");
/* harmony import */ var _Routes__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../Routes */ "./src/Routes.tsx");
/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-router-config */ "react-router-config");
/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_16__);

















var app = express__WEBPACK_IMPORTED_MODULE_10___default()();
app.use(express__WEBPACK_IMPORTED_MODULE_10___default.a.static('public')); // 如果请求静态文件，express会从public目录寻找

/**
 * 对/api开头的http，代理到http://47.95.113.63
 */

app.use('/api', express_http_proxy__WEBPACK_IMPORTED_MODULE_11___default()('http://localhost:7001', {
  proxyReqPathResolver: function proxyReqPathResolver(req) {
    return '/ssr/api' + req.url;
  }
}));
app.get('*', /*#__PURE__*/function () {
  var _ref = _babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_9___default()( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee(req, res) {
    var store, matchedRoutes, promises, context, ssrHTML;
    return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            store = Object(_store__WEBPACK_IMPORTED_MODULE_14__["getStore"])(req); // 路由匹配

            matchedRoutes = Object(react_router_config__WEBPACK_IMPORTED_MODULE_16__["matchRoutes"])(_Routes__WEBPACK_IMPORTED_MODULE_15__["default"], req.path); // 让matchedRoutes内所有路由的loadData(异步加载)执行一次

            promises = [];

            _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_7___default()(matchedRoutes).call(matchedRoutes, function (item) {
              var route = item.route;

              if (route.loadData) {
                promises.push(route.loadData(store));
              }
            });

            _context.next = 6;
            return _babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_6___default.a.all(promises);

          case 6:
            context = {
              NOT_FOUND: false
            };
            _context.next = 9;
            return Object(_util__WEBPACK_IMPORTED_MODULE_13__["render"])(req, store, _Routes__WEBPACK_IMPORTED_MODULE_15__["default"], context);

          case 9:
            ssrHTML = _context.sent;

            // console.log(context);
            if (context.action === 'REPLACE') {
              res.redirect(301, context.url);
            } else if (context.NOT_FOUND) {
              res.status(404);
            }

            res.send(ssrHTML);

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
app.use(Object(_middlewares_catchError__WEBPACK_IMPORTED_MODULE_12__["catchError"])());
app.listen(3000, function () {
  console.log("listen 3000...");
});

/***/ }),

/***/ "./src/server/require.ts":
/*!*******************************!*\
  !*** ./src/server/require.ts ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config/config */ "./config/config.ts");



var createInstance = function createInstance(req) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
    baseURL: 'http://localhost:7001/ssr',
    headers: {
      cookie: req.get('cookie') || ''
    },
    params: {
      secret: _config_config__WEBPACK_IMPORTED_MODULE_1__["default"].secret
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (createInstance);

/***/ }),

/***/ "./src/server/util.tsx":
/*!*****************************!*\
  !*** ./src/server/util.tsx ***!
  \*****************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/regenerator */ "@babel/runtime-corejs3/regenerator");
/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/json/stringify */ "@babel/runtime-corejs3/core-js-stable/json/stringify");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/concat */ "@babel/runtime-corejs3/core-js-stable/instance/concat");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! regenerator-runtime/runtime */ "regenerator-runtime/runtime");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/asyncToGenerator */ "@babel/runtime-corejs3/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-dom/server */ "react-dom/server");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-config */ "react-router-config");
/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_9__);











/**
 * 
 * @param req 
 * @param store getStore创建
 * @param routes Router.ts
 */
function render(_x, _x2, _x3, _x4) {
  return _render.apply(this, arguments);
}

function _render() {
  _render = _babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default()( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(req, store, routes, context) {
    var _context;

    var content;
    return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            content = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_7__["renderToString"])(react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_6__["Provider"], {
              store: store
            }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["StaticRouter"], {
              location: req.path,
              context: context
            }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5__["Fragment"], null, // 一级路由渲染
            Object(react_router_config__WEBPACK_IMPORTED_MODULE_9__["renderRoutes"])(routes) // routes.map(route => {
            // 	return <Route {...route} />
            // })
            ))));
            return _context2.abrupt("return", _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_2___default()(_context = "\n\t\t<html>\n\t\t\t<head>\n\t\t\t\t<title>ssr</title>\n\t\t\t</head>\n\t\t\t\t<body>\n\t\t\t\t\t<div id='root'>".concat(content, "</div>\n\t\t\t\t</body>\n\t\t\t\t<script>\n\t\t\t\t\twindow.context = {\n\t\t\t\t\t\tstate: ")).call(_context, _babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(store.getState()), "\n\t\t\t\t\t}\n\t\t\t\t</script>\n\t\t\t<script src='/index.js'></script>\n\t\t</html>\n    "));

          case 2:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee);
  }));
  return _render.apply(this, arguments);
}



/***/ }),

/***/ "./src/store/index.ts":
/*!****************************!*\
  !*** ./src/store/index.ts ***!
  \****************************/
/*! exports provided: getStore, getClientStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStore", function() { return getStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getClientStore", function() { return getClientStore; });
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Header_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header/store */ "./src/components/Header/store/index.ts");
/* harmony import */ var _containers_Home_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../containers/Home/store */ "./src/containers/Home/store/index.ts");
/* harmony import */ var _containers_Translation_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../containers/Translation/store */ "./src/containers/Translation/store/index.ts");
/* harmony import */ var _client_require__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../client/require */ "./src/client/require.ts");
/* harmony import */ var _server_require__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../server/require */ "./src/server/require.ts");







var reducers = Object(redux__WEBPACK_IMPORTED_MODULE_1__["combineReducers"])({
  header: _components_Header_store__WEBPACK_IMPORTED_MODULE_2__["reducer"],
  home: _containers_Home_store__WEBPACK_IMPORTED_MODULE_3__["reducer"],
  translation: _containers_Translation_store__WEBPACK_IMPORTED_MODULE_4__["reducer"]
});
function getStore(req) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_1__["createStore"])(reducers, Object(redux__WEBPACK_IMPORTED_MODULE_1__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_0___default.a.withExtraArgument(Object(_server_require__WEBPACK_IMPORTED_MODULE_6__["default"])(req))));
}
function getClientStore() {
  var defaultStore = window.context.state;
  var composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || redux__WEBPACK_IMPORTED_MODULE_1__["compose"];
  return Object(redux__WEBPACK_IMPORTED_MODULE_1__["createStore"])(reducers, defaultStore, composeEnhancers(Object(redux__WEBPACK_IMPORTED_MODULE_1__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_0___default.a.withExtraArgument(Object(_client_require__WEBPACK_IMPORTED_MODULE_5__["default"])()))));
}

/***/ }),

/***/ "@babel/runtime-corejs3/core-js-stable/instance/concat":
/*!************************************************************************!*\
  !*** external "@babel/runtime-corejs3/core-js-stable/instance/concat" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime-corejs3/core-js-stable/instance/concat");

/***/ }),

/***/ "@babel/runtime-corejs3/core-js-stable/instance/filter":
/*!************************************************************************!*\
  !*** external "@babel/runtime-corejs3/core-js-stable/instance/filter" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime-corejs3/core-js-stable/instance/filter");

/***/ }),

/***/ "@babel/runtime-corejs3/core-js-stable/instance/for-each":
/*!**************************************************************************!*\
  !*** external "@babel/runtime-corejs3/core-js-stable/instance/for-each" ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime-corejs3/core-js-stable/instance/for-each");

/***/ }),

/***/ "@babel/runtime-corejs3/core-js-stable/instance/map":
/*!*********************************************************************!*\
  !*** external "@babel/runtime-corejs3/core-js-stable/instance/map" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime-corejs3/core-js-stable/instance/map");

/***/ }),

/***/ "@babel/runtime-corejs3/core-js-stable/json/stringify":
/*!***********************************************************************!*\
  !*** external "@babel/runtime-corejs3/core-js-stable/json/stringify" ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime-corejs3/core-js-stable/json/stringify");

/***/ }),

/***/ "@babel/runtime-corejs3/core-js-stable/object/define-properties":
/*!*********************************************************************************!*\
  !*** external "@babel/runtime-corejs3/core-js-stable/object/define-properties" ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime-corejs3/core-js-stable/object/define-properties");

/***/ }),

/***/ "@babel/runtime-corejs3/core-js-stable/object/define-property":
/*!*******************************************************************************!*\
  !*** external "@babel/runtime-corejs3/core-js-stable/object/define-property" ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

/***/ }),

/***/ "@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor":
/*!*******************************************************************************************!*\
  !*** external "@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor" ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor");

/***/ }),

/***/ "@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors":
/*!********************************************************************************************!*\
  !*** external "@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors" ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors");

/***/ }),

/***/ "@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols":
/*!****************************************************************************************!*\
  !*** external "@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols" ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols");

/***/ }),

/***/ "@babel/runtime-corejs3/core-js-stable/object/keys":
/*!********************************************************************!*\
  !*** external "@babel/runtime-corejs3/core-js-stable/object/keys" ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime-corejs3/core-js-stable/object/keys");

/***/ }),

/***/ "@babel/runtime-corejs3/core-js-stable/promise":
/*!****************************************************************!*\
  !*** external "@babel/runtime-corejs3/core-js-stable/promise" ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime-corejs3/core-js-stable/promise");

/***/ }),

/***/ "@babel/runtime-corejs3/helpers/asyncToGenerator":
/*!******************************************************************!*\
  !*** external "@babel/runtime-corejs3/helpers/asyncToGenerator" ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime-corejs3/helpers/asyncToGenerator");

/***/ }),

/***/ "@babel/runtime-corejs3/helpers/defineProperty":
/*!****************************************************************!*\
  !*** external "@babel/runtime-corejs3/helpers/defineProperty" ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime-corejs3/helpers/defineProperty");

/***/ }),

/***/ "@babel/runtime-corejs3/regenerator":
/*!*****************************************************!*\
  !*** external "@babel/runtime-corejs3/regenerator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime-corejs3/regenerator");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "core-js/modules/es.array.iterator":
/*!****************************************************!*\
  !*** external "core-js/modules/es.array.iterator" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.iterator");

/***/ }),

/***/ "core-js/modules/es.function.name":
/*!***************************************************!*\
  !*** external "core-js/modules/es.function.name" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.function.name");

/***/ }),

/***/ "core-js/modules/es.object.to-string":
/*!******************************************************!*\
  !*** external "core-js/modules/es.object.to-string" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.object.to-string");

/***/ }),

/***/ "core-js/modules/es.promise":
/*!*********************************************!*\
  !*** external "core-js/modules/es.promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.promise");

/***/ }),

/***/ "core-js/modules/es.string.iterator":
/*!*****************************************************!*\
  !*** external "core-js/modules/es.string.iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.string.iterator");

/***/ }),

/***/ "core-js/modules/web.dom-collections.iterator":
/*!***************************************************************!*\
  !*** external "core-js/modules/web.dom-collections.iterator" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/web.dom-collections.iterator");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "express-http-proxy":
/*!*************************************!*\
  !*** external "express-http-proxy" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express-http-proxy");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-router-config":
/*!**************************************!*\
  !*** external "react-router-config" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router-config");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),

/***/ "regenerator-runtime/runtime":
/*!**********************************************!*\
  !*** external "regenerator-runtime/runtime" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime/runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy8uL2NvbmZpZy9jb25maWcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRhaW5lcnMvSG9tZS9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvaW5zZXJ0Q3NzLmpzIiwid2VicGFjazovLy8uL3NyYy9BcHAudHN4Iiwid2VicGFjazovLy8uL3NyYy9Sb3V0ZXMudHN4Iiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvcmVxdWlyZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0hlYWRlci9zdG9yZS9hY3Rpb25DcmVhdG9ycy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvc3RvcmUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL3N0b3JlL3JlZHVjZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRhaW5lcnMvSG9tZS9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRhaW5lcnMvSG9tZS9zdG9yZS9hY3Rpb25DcmVhdG9ycy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9Ib21lL3N0b3JlL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9jb250YWluZXJzL0hvbWUvc3RvcmUvcmVkdWNlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9Ib21lL3N0eWxlLmNzcz9jNmQ2Iiwid2VicGFjazovLy8uL3NyYy9jb250YWluZXJzL05vdEZvdW5kL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9UcmFuc2xhdGlvbi9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRhaW5lcnMvVHJhbnNsYXRpb24vc3RvcmUvYWN0aW9uQ3JlYXRvcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRhaW5lcnMvVHJhbnNsYXRpb24vc3RvcmUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRhaW5lcnMvVHJhbnNsYXRpb24vc3RvcmUvcmVkdWNlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWlkZGxld2FyZXMvY2F0Y2hFcnJvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2ZXIvcmVxdWlyZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL3V0aWwudHN4Iiwid2VicGFjazovLy8uL3NyYy9zdG9yZS9pbmRleC50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYmFiZWwvcnVudGltZS1jb3JlanMzL2NvcmUtanMtc3RhYmxlL2luc3RhbmNlL2NvbmNhdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBiYWJlbC9ydW50aW1lLWNvcmVqczMvY29yZS1qcy1zdGFibGUvaW5zdGFuY2UvZmlsdGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGJhYmVsL3J1bnRpbWUtY29yZWpzMy9jb3JlLWpzLXN0YWJsZS9pbnN0YW5jZS9mb3ItZWFjaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBiYWJlbC9ydW50aW1lLWNvcmVqczMvY29yZS1qcy1zdGFibGUvaW5zdGFuY2UvbWFwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGJhYmVsL3J1bnRpbWUtY29yZWpzMy9jb3JlLWpzLXN0YWJsZS9qc29uL3N0cmluZ2lmeVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBiYWJlbC9ydW50aW1lLWNvcmVqczMvY29yZS1qcy1zdGFibGUvb2JqZWN0L2RlZmluZS1wcm9wZXJ0aWVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGJhYmVsL3J1bnRpbWUtY29yZWpzMy9jb3JlLWpzLXN0YWJsZS9vYmplY3QvZGVmaW5lLXByb3BlcnR5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGJhYmVsL3J1bnRpbWUtY29yZWpzMy9jb3JlLWpzLXN0YWJsZS9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGJhYmVsL3J1bnRpbWUtY29yZWpzMy9jb3JlLWpzLXN0YWJsZS9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBiYWJlbC9ydW50aW1lLWNvcmVqczMvY29yZS1qcy1zdGFibGUvb2JqZWN0L2dldC1vd24tcHJvcGVydHktc3ltYm9sc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBiYWJlbC9ydW50aW1lLWNvcmVqczMvY29yZS1qcy1zdGFibGUvb2JqZWN0L2tleXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYmFiZWwvcnVudGltZS1jb3JlanMzL2NvcmUtanMtc3RhYmxlL3Byb21pc2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYmFiZWwvcnVudGltZS1jb3JlanMzL2hlbHBlcnMvYXN5bmNUb0dlbmVyYXRvclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBiYWJlbC9ydW50aW1lLWNvcmVqczMvaGVscGVycy9kZWZpbmVQcm9wZXJ0eVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBiYWJlbC9ydW50aW1lLWNvcmVqczMvcmVnZW5lcmF0b3JcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5pdGVyYXRvclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcmUtanMvbW9kdWxlcy9lcy5mdW5jdGlvbi5uYW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yZS1qcy9tb2R1bGVzL2VzLm9iamVjdC50by1zdHJpbmdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL21vZHVsZXMvZXMucHJvbWlzZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcmUtanMvbW9kdWxlcy9lcy5zdHJpbmcuaXRlcmF0b3JcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL21vZHVsZXMvd2ViLmRvbS1jb2xsZWN0aW9ucy5pdGVyYXRvclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJleHByZXNzLWh0dHAtcHJveHlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWRvbS9zZXJ2ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJvdXRlci1jb25maWdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yb3V0ZXItZG9tXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC10aHVua1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZVwiIl0sInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3NlcnZlci9pbmRleC50c1wiKTtcbiIsImludGVyZmFjZSBDb25maWcge1xuICAgIHNlY3JldDogc3RyaW5nO1xufVxuY29uc3QgY29uZmlnOiBDb25maWcgPSB7XG4gICAgc2VjcmV0OiAnUFA4N0FOVElQSVJBVEUnXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbmZpZzsiLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnN0eWxlX2J0bi0zSmFFOCB7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgaGVpZ2h0OiA2MHB4O1xcbn1cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwiYnRuXCI6IFwic3R5bGVfYnRuLTNKYUU4XCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCIvKiEgSXNvbW9ycGhpYyBTdHlsZSBMb2FkZXIgfCBNSVQgTGljZW5zZSB8IGh0dHBzOi8vZ2l0aHViLmNvbS9rcmlhc29mdC9pc29tb3JwaGljLXN0eWxlLWxvYWRlciAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBpbnNlcnRlZCA9IHt9O1xuXG5mdW5jdGlvbiBiNjRFbmNvZGVVbmljb2RlKHN0cikge1xuICByZXR1cm4gYnRvYShlbmNvZGVVUklDb21wb25lbnQoc3RyKS5yZXBsYWNlKC8lKFswLTlBLUZdezJ9KS9nLCBmdW5jdGlvbiAobWF0Y2gsIHAxKSB7XG4gICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoXCIweFwiICsgcDEpO1xuICB9KSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUNzcyhpZHMpIHtcbiAgaWRzLmZvckVhY2goZnVuY3Rpb24gKGlkKSB7XG4gICAgaWYgKC0taW5zZXJ0ZWRbaWRdIDw9IDApIHtcbiAgICAgIHZhciBlbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuXG4gICAgICBpZiAoZWxlbSkge1xuICAgICAgICBlbGVtLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWxlbSk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gaW5zZXJ0Q3NzKHN0eWxlcywgX3RlbXApIHtcbiAgdmFyIF9yZWYgPSBfdGVtcCA9PT0gdm9pZCAwID8ge30gOiBfdGVtcCxcbiAgICAgIF9yZWYkcmVwbGFjZSA9IF9yZWYucmVwbGFjZSxcbiAgICAgIHJlcGxhY2UgPSBfcmVmJHJlcGxhY2UgPT09IHZvaWQgMCA/IGZhbHNlIDogX3JlZiRyZXBsYWNlLFxuICAgICAgX3JlZiRwcmVwZW5kID0gX3JlZi5wcmVwZW5kLFxuICAgICAgcHJlcGVuZCA9IF9yZWYkcHJlcGVuZCA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcmVmJHByZXBlbmQsXG4gICAgICBfcmVmJHByZWZpeCA9IF9yZWYucHJlZml4LFxuICAgICAgcHJlZml4ID0gX3JlZiRwcmVmaXggPT09IHZvaWQgMCA/ICdzJyA6IF9yZWYkcHJlZml4O1xuXG4gIHZhciBpZHMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBfc3R5bGVzJGkgPSBzdHlsZXNbaV0sXG4gICAgICAgIG1vZHVsZUlkID0gX3N0eWxlcyRpWzBdLFxuICAgICAgICBjc3MgPSBfc3R5bGVzJGlbMV0sXG4gICAgICAgIG1lZGlhID0gX3N0eWxlcyRpWzJdLFxuICAgICAgICBzb3VyY2VNYXAgPSBfc3R5bGVzJGlbM107XG4gICAgdmFyIGlkID0gXCJcIiArIHByZWZpeCArIG1vZHVsZUlkICsgXCItXCIgKyBpO1xuICAgIGlkcy5wdXNoKGlkKTtcblxuICAgIGlmIChpbnNlcnRlZFtpZF0pIHtcbiAgICAgIGlmICghcmVwbGFjZSkge1xuICAgICAgICBpbnNlcnRlZFtpZF0rKztcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaW5zZXJ0ZWRbaWRdID0gMTtcbiAgICB2YXIgZWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcbiAgICB2YXIgY3JlYXRlID0gZmFsc2U7XG5cbiAgICBpZiAoIWVsZW0pIHtcbiAgICAgIGNyZWF0ZSA9IHRydWU7XG4gICAgICBlbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICAgIGVsZW0uc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQvY3NzJyk7XG4gICAgICBlbGVtLmlkID0gaWQ7XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBlbGVtLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGNzc1RleHQgPSBjc3M7XG5cbiAgICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjc3NUZXh0ICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGI2NEVuY29kZVVuaWNvZGUoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkgKyBcIiovXCI7XG4gICAgICBjc3NUZXh0ICs9IFwiXFxuLyojIHNvdXJjZVVSTD1cIiArIHNvdXJjZU1hcC5maWxlICsgXCI/XCIgKyBpZCArIFwiKi9cIjtcbiAgICB9XG5cbiAgICBpZiAoJ3RleHRDb250ZW50JyBpbiBlbGVtKSB7XG4gICAgICBlbGVtLnRleHRDb250ZW50ID0gY3NzVGV4dDtcbiAgICB9IGVsc2Uge1xuICAgICAgZWxlbS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3NUZXh0O1xuICAgIH1cblxuICAgIGlmIChjcmVhdGUpIHtcbiAgICAgIGlmIChwcmVwZW5kKSB7XG4gICAgICAgIGRvY3VtZW50LmhlYWQuaW5zZXJ0QmVmb3JlKGVsZW0sIGRvY3VtZW50LmhlYWQuY2hpbGROb2Rlc1swXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGVsZW0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZW1vdmVDc3MuYmluZChudWxsLCBpZHMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydENzcztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluc2VydENzcy5qcy5tYXBcbiIsImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHsgcmVuZGVyUm91dGVzLCBSb3V0ZUNvbmZpZyB9IGZyb20gJ3JlYWN0LXJvdXRlci1jb25maWcnO1xuXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vY29tcG9uZW50cy9IZWFkZXIvJztcbmltcG9ydCB7IGFjdGlvbkNyZWF0b3JzIH0gZnJvbSAnLi9jb21wb25lbnRzL0hlYWRlci9zdG9yZSc7XG5pbXBvcnQgeyBIZWFkZXJTdGF0ZSB9IGZyb20gJy4vdHlwZXMnO1xuXG5pbnRlcmZhY2UgQXBwUHJvcHMgZXh0ZW5kcyBSb3V0ZUNvbmZpZyB7XG4gICAgcm91dGU/OiBSb3V0ZUNvbmZpZ1xufVxuXG5jb25zdCBBcHA6IFJlYWN0LkZDPEFwcFByb3BzPiA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgICAgcm91dGVcbiAgICB9ID0gcHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPEZyYWdtZW50PlxuICAgICAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIC8vIOS6jOe6p+i3r+eUsea4suafk1xuICAgICAgICAgICAgICAgIHJlbmRlclJvdXRlcyhyb3V0ZT8ucm91dGVzKVxuICAgICAgICAgICAgfVxuICAgICAgICA8L0ZyYWdtZW50PlxuICAgIClcbn07XG5cbmV4cG9ydCBjb25zdCBsb2FkRGF0YSA9IChzdG9yZTogU3RvcmU8SGVhZGVyU3RhdGUsIGFueT4pID0+IHtcbiAgIHJldHVybiBzdG9yZS5kaXNwYXRjaChhY3Rpb25DcmVhdG9ycy5nZXRIZWFkZXJJbmZvKCkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7IiwiaW1wb3J0IHsgUm91dGVDb25maWcgfSBmcm9tICdyZWFjdC1yb3V0ZXItY29uZmlnJztcblxuaW1wb3J0IEFwcCwgeyBsb2FkRGF0YSBhcyBhcHBMb2FkRGF0YSB9IGZyb20gJy4vQXBwJztcbmltcG9ydCBIb21lLCB7IGxvYWREYXRhIGFzIGhvbWVMb2FkRGF0YSB9IGZyb20gJy4vY29udGFpbmVycy9Ib21lL2luZGV4JztcbmltcG9ydCBUcmFuc2xhdGlvbiwgeyBsb2FkRGF0YSBhcyB0cmFuc2xhdGlvbkxvYWREYXRhIH0gZnJvbSAnLi9jb250YWluZXJzL1RyYW5zbGF0aW9uL2luZGV4JztcbmltcG9ydCBOb3RGb3VuZCBmcm9tICcuL2NvbnRhaW5lcnMvTm90Rm91bmQnO1xuXG4vKipcbiAqIOWkmue6p+i3r+eUseeahOWGmeazlVxuICovXG5cbmNvbnN0IHJvdXRlczogUm91dGVDb25maWdbXSA9IFt7XG4gICAgcGF0aDogJy8nLFxuICAgIGNvbXBvbmVudDogQXBwLCAvLyDmraTlpITmnInnsbvlnovlkI3np7Dlhbzlrrnpl67popgg5LiN5YW85a65UmVhY3QuRkPvvIzlrp7pmYXkuIrkuozogIXnm7jlkIxcbiAgICBsb2FkRGF0YTogYXBwTG9hZERhdGEsXG4gICAgcm91dGVzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIHBhdGg6ICcvJyxcbiAgICAgICAgICAgIGNvbXBvbmVudDogSG9tZSxcbiAgICAgICAgICAgIGV4YWN0OiB0cnVlLFxuICAgICAgICAgICAgbG9hZERhdGE6IGhvbWVMb2FkRGF0YSxcbiAgICAgICAgICAgIGtleTogJ2hvbWUnLFxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBwYXRoOiAnL3RyYW5zbGF0aW9uJyxcbiAgICAgICAgICAgIGNvbXBvbmVudDogVHJhbnNsYXRpb24sXG4gICAgICAgICAgICBleGFjdDogdHJ1ZSxcbiAgICAgICAgICAgIGxvYWREYXRhOiB0cmFuc2xhdGlvbkxvYWREYXRhLFxuICAgICAgICAgICAga2V5OiAnbG9naW4nLFxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBjb21wb25lbnQ6IE5vdEZvdW5kLFxuICAgICAgICB9XG4gICAgXSxcbiAgICBrZXk6ICdBcHAnXG59XTtcblxuXG4vLyBjb25zdCByb3V0ZXM6IFJvdXRlQ29uZmlnW10gPSBcblxuZXhwb3J0IGRlZmF1bHQgcm91dGVzO1xuXG5cblxuLy8gZXhwb3J0IGRlZmF1bHQgKFxuLy8gICAgIDxGcmFnbWVudD5cbi8vICAgICAgICAgPFJvdXRlIHBhdGg9Jy8nIGV4YWN0IGNvbXBvbmVudD17SG9tZX0gLz5cbi8vICAgICAgICAgPFJvdXRlIHBhdGg9Jy9sb2dpbicgZXhhY3QgY29tcG9uZW50PXtMb2dpbn0gLz5cbi8vICAgICA8L0ZyYWdtZW50PlxuLy8gKSIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgY29uZmlnIGZyb20gJy4uLy4uL2NvbmZpZy9jb25maWcnO1xuXG5jb25zdCBjcmVhdGVJbnN0YW5jZSA9ICgpID0+IHtcbiAgICByZXR1cm4gYXhpb3MuY3JlYXRlKHtcbiAgICAgICAgYmFzZVVSTDogJy8nLFxuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgIHNlY3JldDogY29uZmlnLnNlY3JldFxuICAgICAgICB9XG4gICAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlSW5zdGFuY2U7IiwiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoLCBzaGFsbG93RXF1YWwgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBSb290U3RhdGUsIEhlYWRlclN0YXRlIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuaW1wb3J0IHsgYWN0aW9uQ3JlYXRvcnMgfSBmcm9tICcuL3N0b3JlJztcbi8vIGltcG9ydCAnLi9pbmRleC5jc3MnO1xuXG5jb25zdCBIZWFkZXI6IFJlYWN0LkZDID0gKCkgPT4ge1xuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgICBjb25zdCBoZWFkZXJTdGF0ZSA9IHVzZVNlbGVjdG9yPFJvb3RTdGF0ZSwgSGVhZGVyU3RhdGU+KHN0YXRlID0+IHsgcmV0dXJuIHN0YXRlLmhlYWRlciB9LCBzaGFsbG93RXF1YWwpXG5cbiAgICBjb25zdCB7XG4gICAgICAgIGlzTG9naW4sXG4gICAgfSA9IGhlYWRlclN0YXRlXG5cbiAgICBjb25zdCBoYW5kbGVMb2dpbiA9ICgpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goYWN0aW9uQ3JlYXRvcnMubG9naW4oKSk7XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlTG9nb3V0ID0gKCkgPT4ge1xuICAgICAgICBkaXNwYXRjaChhY3Rpb25DcmVhdG9ycy5sb2dvdXQoKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxMaW5rIHRvPScvJz7pppbpobU8L0xpbms+XG4gICAgICAgICAgICB7YGlzbG9naW46ICR7aXNMb2dpbn1gfVxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaXNMb2dpbiA/XG4gICAgICAgICAgICAgICAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPScvdHJhbnNsYXRpb24nPue/u+ivkeWIl+ihqDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NsaWNrJyBvbkNsaWNrPXtoYW5kbGVMb2dvdXR9PumAgOWHujwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L0ZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICA6IDxkaXYgY2xhc3NOYW1lPSdjbGljaycgb25DbGljaz17aGFuZGxlTG9naW59PueZu+mZhjwvZGl2PlxuICAgICAgICAgICAgfVxuICAgICAgICA8L2RpdiA+XG4gICAgKVxufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyOyIsImltcG9ydCB7IERpc3BhdGNoIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHsgQXhpb3NJbnN0YW5jZSB9IGZyb20gJ2F4aW9zJztcblxuaW1wb3J0IHsgQ2hhbmdlSXNMb2dpbkFjdGlvbiB9IGZyb20gJy4uLy4uLy4uL3R5cGVzJztcblxuY29uc3QgY2hhbmdlSXNMb2dpbkFjdGlvbjogKGlzTG9naW46IGJvb2xlYW4pID0+IENoYW5nZUlzTG9naW5BY3Rpb24gPSAoaXNMb2dpbikgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6ICdjaGFuZ2VfaXNfbG9naW4nLFxuICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICBpc0xvZ2luXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBnZXRIZWFkZXJJbmZvID0gKCkgPT4ge1xuICAgIHJldHVybiAoZGlzcGF0Y2g6IERpc3BhdGNoLCBnZXRTdGF0ZTogYW55LCBheGlvc0luc3RhbmNlOiBBeGlvc0luc3RhbmNlKSA9PiB7XG4gICAgICAgIHJldHVybiBheGlvc0luc3RhbmNlLmdldCgnL2FwaS9pc0xvZ2luLmpzb24nKVxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBpc0xvZ2luOiBib29sZWFuID0gcmVzLmRhdGE/LmRhdGEubG9naW47XG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goY2hhbmdlSXNMb2dpbkFjdGlvbihpc0xvZ2luKSlcbiAgICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICAgIH0pXG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgbG9naW4gPSAoKSA9PiB7XG4gICAgcmV0dXJuIChkaXNwYXRjaDogRGlzcGF0Y2gsIGdldFN0YXRlOiBhbnksIGF4aW9zSW5zdGFuY2U6IEF4aW9zSW5zdGFuY2UpID0+IHtcbiAgICAgICAgcmV0dXJuIGF4aW9zSW5zdGFuY2UuZ2V0KCcvYXBpL2xvZ2luLmpzb24nKVxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBpc0xvZ2luOiBib29sZWFuID0gcmVzLmRhdGE/LmRhdGEubG9naW47XG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goY2hhbmdlSXNMb2dpbkFjdGlvbihpc0xvZ2luKSlcbiAgICAgICAgICAgIH0pXG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgbG9nb3V0ID0gKCkgPT4ge1xuICAgIHJldHVybiAoZGlzcGF0Y2g6IERpc3BhdGNoLCBnZXRTdGF0ZTogYW55LCBheGlvc0luc3RhbmNlOiBBeGlvc0luc3RhbmNlKSA9PiB7XG4gICAgICAgIHJldHVybiBheGlvc0luc3RhbmNlLmdldCgnL2FwaS9sb2dvdXQuanNvbicpXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGlzTG9nb3V0OiBib29sZWFuID0gcmVzLmRhdGE/LmRhdGEubG9nb3V0O1xuICAgICAgICAgICAgICAgIGRpc3BhdGNoKGNoYW5nZUlzTG9naW5BY3Rpb24oZmFsc2UpKVxuICAgICAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICAgICAgfSlcbiAgICB9XG59IiwiaW1wb3J0IHJlZHVjZXIgZnJvbSAnLi9yZWR1Y2VyJztcbmltcG9ydCAqIGFzIGFjdGlvbkNyZWF0b3JzIGZyb20gJy4vYWN0aW9uQ3JlYXRvcnMnO1xuXG5leHBvcnQge1xuICAgIHJlZHVjZXIsXG4gICAgYWN0aW9uQ3JlYXRvcnNcbn0iLCJpbXBvcnQgeyBDaGFuZ2VJc0xvZ2luQWN0aW9uLCBIZWFkZXJTdGF0ZSB9IGZyb20gJy4uLy4uLy4uL3R5cGVzJztcblxuY29uc3QgZGVmYXVsdFN0YXRlOiBIZWFkZXJTdGF0ZSA9IHtcbiAgICBpc0xvZ2luOiB0cnVlLFxufVxuXG5leHBvcnQgZGVmYXVsdCAoc3RhdGUgPSBkZWZhdWx0U3RhdGUsIGFjdGlvbjogYW55KSA9PiB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlICdjaGFuZ2VfaXNfbG9naW4nOiB7XG4gICAgICAgICAgICBjb25zdCB0aGlzQWN0aW9uOiBDaGFuZ2VJc0xvZ2luQWN0aW9uID0gYWN0aW9uO1xuICAgICAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgICAgIGlzTG9naW5cbiAgICAgICAgICAgIH0gPSB0aGlzQWN0aW9uLnBheWxvYWQ7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIGlzTG9naW5cbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbn0iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoLCBzaGFsbG93RXF1YWwgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gJ3JlZHV4JztcblxuaW1wb3J0IHsgYWN0aW9uQ3JlYXRvcnMgfSBmcm9tICcuL3N0b3JlJ1xuaW1wb3J0IHsgUm9vdFN0YXRlLCBIb21lU3RhdGUgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5cbmltcG9ydCAqIGFzIHN0eWxlcyBmcm9tICcuL3N0eWxlLmNzcyc7XG5cbmNvbnN0IEhvbWU6IFJlYWN0LkZDID0gKCkgPT4ge1xuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgICBjb25zdCBob21lU3RhdGUgPSB1c2VTZWxlY3RvcjxSb290U3RhdGUsIEhvbWVTdGF0ZT4oc3RhdGUgPT4geyByZXR1cm4gc3RhdGUuaG9tZSB9LCBzaGFsbG93RXF1YWwpO1xuICAgIGNvbnN0IHsgbmFtZSwgbmV3c0xpc3QgfSA9IGhvbWVTdGF0ZTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChuZXdzTGlzdC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIGRpc3BhdGNoKGFjdGlvbkNyZWF0b3JzLmdldEhvbWVMaXN0KCkpO1xuICAgICAgICB9XG4gICAgfSwgW10pO1xuXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlTmFtZSA9ICgpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goYWN0aW9uQ3JlYXRvcnMuY2hhbmdlTmFtZSgpKVxuICAgIH1cblxuXG4gICAgY29uc3QgZ2V0TGlzdCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIG5ld3NMaXN0Lm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIDxkaXYga2V5PXtpdGVtLmlkfT57YCR7aXRlbS5pZH0gICR7aXRlbS50aXRsZX1gfTwvZGl2PlxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9e2hhbmRsZUNoYW5nZU5hbWV9PntuYW1lfTwvZGl2PlxuICAgICAgICAgICAge2dldExpc3QoKX1cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtgJHtzdHlsZXMuYnRufWB9IG9uQ2xpY2s9eygpID0+IHsgY29uc29sZS5sb2coJ29uIGNsaWNrJykgfX0+Y2xpY2s8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufTtcblxuZXhwb3J0IGNvbnN0IGxvYWREYXRhID0gKHN0b3JlOiBTdG9yZTxIb21lU3RhdGUsIGFueT4pID0+IHtcbiAgICByZXR1cm4gc3RvcmUuZGlzcGF0Y2goYWN0aW9uQ3JlYXRvcnMuZ2V0SG9tZUxpc3QoKSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7IiwiaW1wb3J0IHsgRGlzcGF0Y2ggfSBmcm9tICdyZWR1eCc7XG5cbmltcG9ydCB7IEF4aW9zSW5zdGFuY2UgfSBmcm9tICdheGlvcyc7XG5pbXBvcnQgeyBOZXdzTGlzdEl0ZW0sIENoYW5nZUhvbWVMaXN0QWN0aW9uLCBSZXNwb25zZVJlc3VsdCB9IGZyb20gJy4uLy4uLy4uL3R5cGVzJztcblxuXG5leHBvcnQgY29uc3QgY2hhbmdlSG9tZUxpc3RBY3Rpb24gPSAobGlzdDogTmV3c0xpc3RJdGVtW10pID0+IHtcbiAgICBjb25zdCBhY3Rpb246IENoYW5nZUhvbWVMaXN0QWN0aW9uID0ge1xuICAgICAgICB0eXBlOiAnY2hhbmdlX2hvbWVfbGlzdCcsXG4gICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgIGxpc3RcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYWN0aW9uO1xufVxuXG4vKipcbiAqIGF4aW9zIEdFVOWIl+ihqFxuICovXG5leHBvcnQgY29uc3QgZ2V0SG9tZUxpc3QgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChkaXNwYXRjaDogRGlzcGF0Y2gsIGdldFN0YXRlOiBhbnksIGF4aW9zSW5zdGFuY2U6IEF4aW9zSW5zdGFuY2UpID0+IHtcbiAgICAgICAgcmV0dXJuIGF4aW9zSW5zdGFuY2UuZ2V0KCcvYXBpL25ld3MuanNvbicpXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlUmVzdWx0OiBSZXNwb25zZVJlc3VsdCA9IHJlcy5kYXRhO1xuICAgICAgICAgICAgICAgIGNvbnN0IGFjdGlvbiA9IGNoYW5nZUhvbWVMaXN0QWN0aW9uKHJlc3BvbnNlUmVzdWx0Py5kYXRhKTtcbiAgICAgICAgICAgICAgICBkaXNwYXRjaChhY3Rpb24pO1xuICAgICAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQVBJIGdlaUhvbWVMaXN0IOaVsOaNruiOt+WPluWHuumUmScsZXJyKTtcbiAgICAgICAgICAgIH0pXG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgY2hhbmdlTmFtZSA9ICgpID0+IHtcbiAgICByZXR1cm4gKGRpc3BhdGNoOiBEaXNwYXRjaCkgPT4ge1xuICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICB0eXBlOiAnY2hhbmdlX25hbWUnLFxuICAgICAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdsZWUnXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxufSIsImltcG9ydCByZWR1Y2VyIGZyb20gJy4vcmVkdWNlcic7XG5pbXBvcnQgKiBhcyBhY3Rpb25DcmVhdG9ycyBmcm9tICcuL2FjdGlvbkNyZWF0b3JzJztcblxuZXhwb3J0e1xuICAgIHJlZHVjZXIsXG4gICAgYWN0aW9uQ3JlYXRvcnNcbn0iLCJpbXBvcnQgeyBIb21lU3RhdGUsIENoYW5nZUhvbWVMaXN0QWN0aW9uIH0gZnJvbSAnLi4vLi4vLi4vdHlwZXMnO1xuXG5jb25zdCBkZWZhdWx0U3RhdGU6IEhvbWVTdGF0ZSA9IHtcbiAgICBuYW1lOiAnZGVsbCcsXG4gICAgbmV3c0xpc3Q6IFtdLFxufVxuXG5leHBvcnQgZGVmYXVsdCAoc3RhdGUgPSBkZWZhdWx0U3RhdGUsIGFjdGlvbjogYW55KSA9PiB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlICdjaGFuZ2VfaG9tZV9saXN0Jzoge1xuICAgICAgICAgICAgY29uc3QgdGhpc0FjdGlvbjogQ2hhbmdlSG9tZUxpc3RBY3Rpb24gPSBhY3Rpb247XG4gICAgICAgICAgICBjb25zdCB7IGxpc3QgfSA9IHRoaXNBY3Rpb24ucGF5bG9hZDtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgbmV3c0xpc3Q6IGxpc3RcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICBjYXNlICdjaGFuZ2VfbmFtZSc6IHtcbiAgICAgICAgICAgIGNvbnN0IHsgbmFtZSB9ID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIG5hbWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxufVxuXG4iLCJcbiAgICB2YXIgcmVmcyA9IDA7XG4gICAgdmFyIGNzcyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzIS4vc3R5bGUuY3NzXCIpO1xuICAgIHZhciBpbnNlcnRDc3MgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9pc29tb3JwaGljLXN0eWxlLWxvYWRlci9pbnNlcnRDc3MuanNcIik7XG4gICAgdmFyIGNvbnRlbnQgPSB0eXBlb2YgY3NzID09PSAnc3RyaW5nJyA/IFtbbW9kdWxlLmlkLCBjc3MsICcnXV0gOiBjc3M7XG5cbiAgICBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBjc3MubG9jYWxzIHx8IHt9O1xuICAgIGV4cG9ydHMuX2dldENvbnRlbnQgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQ7IH07XG4gICAgZXhwb3J0cy5fZ2V0Q3NzID0gZnVuY3Rpb24oKSB7IHJldHVybiAnJyArIGNzczsgfTtcbiAgICBleHBvcnRzLl9pbnNlcnRDc3MgPSBmdW5jdGlvbihvcHRpb25zKSB7IHJldHVybiBpbnNlcnRDc3MoY29udGVudCwgb3B0aW9ucykgfTtcblxuICAgIC8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbiAgICAvLyBodHRwczovL3dlYnBhY2suZ2l0aHViLmlvL2RvY3MvaG90LW1vZHVsZS1yZXBsYWNlbWVudFxuICAgIC8vIE9ubHkgYWN0aXZhdGVkIGluIGJyb3dzZXIgY29udGV4dFxuICAgIGlmIChtb2R1bGUuaG90ICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5kb2N1bWVudCkge1xuICAgICAgdmFyIHJlbW92ZUNzcyA9IGZ1bmN0aW9uKCkge307XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanMhLi9zdHlsZS5jc3NcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNzcyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzIS4vc3R5bGUuY3NzXCIpO1xuICAgICAgICBjb250ZW50ID0gdHlwZW9mIGNzcyA9PT0gJ3N0cmluZycgPyBbW21vZHVsZS5pZCwgY3NzLCAnJ11dIDogY3NzO1xuICAgICAgICByZW1vdmVDc3MgPSBpbnNlcnRDc3MoY29udGVudCwgeyByZXBsYWNlOiB0cnVlIH0pO1xuICAgICAgfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHJlbW92ZUNzcygpOyB9KTtcbiAgICB9XG4gICIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBSb3V0ZUNvbXBvbmVudFByb3BzIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcblxuaW1wb3J0IHsgQ29udGV4dCB9IGZyb20gJy4uLy4uL3R5cGVzJztcblxuXG5jb25zdCBOb3RGb3VuZDogUmVhY3QuRkM8Um91dGVDb21wb25lbnRQcm9wczxhbnksIENvbnRleHQsIGFueT4+ID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgeyBzdGF0aWNDb250ZXh0IH0gPSBwcm9wcztcbiAgICBzdGF0aWNDb250ZXh0ICYmIChzdGF0aWNDb250ZXh0Lk5PVF9GT1VORCA9IHRydWUpO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICBzb3Jyee+8jOaCqOiuv+mXrueahOmhtemdouS4jeWtmOWcqFxuICAgICAgICA8L2Rpdj5cbiAgICApXG59O1xuXG5leHBvcnQgZGVmYXVsdCBOb3RGb3VuZDsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgYWN0aW9uQ3JlYXRvcnMgfSBmcm9tICcuL3N0b3JlJztcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3Rvciwgc2hhbGxvd0VxdWFsIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgVHJhbnNsYXRpb25TdGF0ZSwgUm9vdFN0YXRlIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuaW1wb3J0IHsgU3RvcmUgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgeyBSZWRpcmVjdCB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuXG5cbmNvbnN0IFRyYW5zbGF0aW9uOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gICAgY29uc3QgaXNMb2dpbjogYm9vbGVhbiA9IHVzZVNlbGVjdG9yPFJvb3RTdGF0ZSwgYW55PihzdGF0ZSA9PiBzdGF0ZS5oZWFkZXIuaXNMb2dpbik7XG4gICAgY29uc3QgdHJhbnNsYXRpb25TdGF0ZTogVHJhbnNsYXRpb25TdGF0ZSA9IHVzZVNlbGVjdG9yPFJvb3RTdGF0ZSwgYW55PihzdGF0ZSA9PiB7IHJldHVybiBzdGF0ZS50cmFuc2xhdGlvbiB9KVxuICAgIGNvbnN0IHtcbiAgICAgICAgdHJhbnNsYXRpb25zTGlzdFxuICAgIH0gPSB0cmFuc2xhdGlvblN0YXRlO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKHRyYW5zbGF0aW9uc0xpc3QubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBkaXNwYXRjaChhY3Rpb25DcmVhdG9ycy5nZXRUcmFuc2xhdGlvbnNMaXN0KCkpXG4gICAgICAgIH1cblxuICAgIH0sIFtdKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgaXNMb2dpbiA/XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNsYXRpb25zTGlzdC5tYXAobGlzdEl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxkaXYga2V5PXtsaXN0SXRlbS5pZH0+e2xpc3RJdGVtLnRpdGxlfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHsgY29uc29sZS5sb2coJ29uIGNsaWNrJykgfX0+Y2xpY2s8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgOiA8UmVkaXJlY3QgdG89Jy8nIC8+XG4gICAgKVxufTtcblxuZXhwb3J0IGNvbnN0IGxvYWREYXRhID0gKHN0b3JlOiBTdG9yZTxUcmFuc2xhdGlvblN0YXRlLCBhbnk+KSA9PiB7XG4gICAgcmV0dXJuIHN0b3JlLmRpc3BhdGNoKGFjdGlvbkNyZWF0b3JzLmdldFRyYW5zbGF0aW9uc0xpc3QoKSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRyYW5zbGF0aW9uOyIsImltcG9ydCB7IERpc3BhdGNoIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHsgQXhpb3NJbnN0YW5jZSB9IGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IFRyYW5zbGF0aW9uc0xpc3RJdGVtLCBSZXNwb25zZVJlc3VsdCwgQ2hhbmdlVHJhbnNsYXRpb25zQWN0aW9uIH0gZnJvbSAnLi4vLi4vLi4vdHlwZXMnO1xuXG5cbmNvbnN0IGNoYW5nZVRyYW5zbGF0aW9uc0xpc3RBY3Rpb246ICh0cmFuc2xhdGlvbnNMaXN0OiBUcmFuc2xhdGlvbnNMaXN0SXRlbVtdKSA9PiBDaGFuZ2VUcmFuc2xhdGlvbnNBY3Rpb24gPSAodHJhbnNsYXRpb25zTGlzdCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6ICdnZXRfdHJhbnNsYXRpb25zX2xpc3QnLFxuICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICB0cmFuc2xhdGlvbnNMaXN0XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuZXhwb3J0IGNvbnN0IGdldFRyYW5zbGF0aW9uc0xpc3QgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChkaXNwYXRjaDogRGlzcGF0Y2gsIGdldFN0YXRlOiBhbnksIGF4aW9zSW5zdGFuY2U6IEF4aW9zSW5zdGFuY2UpID0+IHtcbiAgICAgICAgcmV0dXJuIGF4aW9zSW5zdGFuY2UuZ2V0KCcvYXBpL3RyYW5zbGF0aW9ucy5qc29uJylcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2VSZXN1bHQ6IFJlc3BvbnNlUmVzdWx0ID0gcmVzLmRhdGE7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlUmVzdWx0LnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goY2hhbmdlVHJhbnNsYXRpb25zTGlzdEFjdGlvbihyZXNwb25zZVJlc3VsdC5kYXRhKSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ+ivt+WFiOeZu+W9lScpXG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKGNoYW5nZVRyYW5zbGF0aW9uc0xpc3RBY3Rpb24oW10pKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgICB9KVxuICAgIH1cbn0iLCJpbXBvcnQgKiBhcyBhY3Rpb25DcmVhdG9ycyBmcm9tICcuL2FjdGlvbkNyZWF0b3JzJztcbmltcG9ydCByZWR1Y2VyIGZyb20gJy4vcmVkdWNlcic7XG5cbmV4cG9ydCB7XG4gICAgYWN0aW9uQ3JlYXRvcnMsXG4gICAgcmVkdWNlclxufSIsIlxuaW1wb3J0IHsgVHJhbnNsYXRpb25TdGF0ZSwgQ2hhbmdlVHJhbnNsYXRpb25zQWN0aW9uIH0gZnJvbSAnLi4vLi4vLi4vdHlwZXMnO1xuXG5jb25zdCBkZWZhdWx0U3RhdGU6IFRyYW5zbGF0aW9uU3RhdGUgPSB7XG4gICAgdHJhbnNsYXRpb25zTGlzdDogW11cbn1cblxuZXhwb3J0IGRlZmF1bHQgKHN0YXRlID0gZGVmYXVsdFN0YXRlLCBhY3Rpb246IGFueSkgPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSAnZ2V0X3RyYW5zbGF0aW9uc19saXN0Jzoge1xuICAgICAgICAgICAgY29uc3QgdGhpc0FjdGlvbjogQ2hhbmdlVHJhbnNsYXRpb25zQWN0aW9uID0gYWN0aW9uO1xuICAgICAgICAgICAgY29uc3QgeyB0cmFuc2xhdGlvbnNMaXN0IH0gPSB0aGlzQWN0aW9uLnBheWxvYWQ7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIHRyYW5zbGF0aW9uc0xpc3RcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbn1cblxuIiwiaW1wb3J0IHsgUmVxdWVzdCwgUmVzcG9uc2UsIE5leHRGdW5jdGlvbiB9IGZyb20gJ2V4cHJlc3MnO1xuXG5cbmV4cG9ydCBjb25zdCBjYXRjaEVycm9yID0gKCkgPT4ge1xuICAgIHJldHVybiAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlLCBuZXh0OiBOZXh0RnVuY3Rpb24pID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIG5leHQoKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICByZXMuanNvbih7XG4gICAgICAgICAgICAgICAgbXNnOiAnZXJyb3InXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCBleHByZXNzLCB7IFJlcXVlc3QsIFJlc3BvbnNlIH0gZnJvbSBcImV4cHJlc3NcIjtcbmltcG9ydCBwcm94eSBmcm9tICdleHByZXNzLWh0dHAtcHJveHknO1xuXG5pbXBvcnQgeyBjYXRjaEVycm9yIH0gZnJvbSAnLi4vbWlkZGxld2FyZXMvY2F0Y2hFcnJvcic7XG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tICcuL3V0aWwnO1xuaW1wb3J0IHsgZ2V0U3RvcmUgfSBmcm9tICcuLi9zdG9yZSc7XG5pbXBvcnQgeyBSb3V0ZVR5cGUsIENvbnRleHQgfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgcm91dGVzIGZyb20gJy4uL1JvdXRlcyc7XG5pbXBvcnQgeyBtYXRjaFJvdXRlcyB9IGZyb20gJ3JlYWN0LXJvdXRlci1jb25maWcnO1xuXG5cbmNvbnN0IGFwcCA9IGV4cHJlc3MoKTtcblxuYXBwLnVzZShleHByZXNzLnN0YXRpYygncHVibGljJykpOyAvLyDlpoLmnpzor7fmsYLpnZnmgIHmlofku7bvvIxleHByZXNz5Lya5LuOcHVibGlj55uu5b2V5a+75om+XG5cbi8qKlxuICog5a+5L2FwaeW8gOWktOeahGh0dHDvvIzku6PnkIbliLBodHRwOi8vNDcuOTUuMTEzLjYzXG4gKi9cbmFwcC51c2UoJy9hcGknLCBwcm94eSgnaHR0cDovL2xvY2FsaG9zdDo3MDAxJywge1xuXHRwcm94eVJlcVBhdGhSZXNvbHZlcjogZnVuY3Rpb24gKHJlcSkge1xuXHRcdHJldHVybiAnL3Nzci9hcGknICsgcmVxLnVybDtcblx0fVxufSkpO1xuXG5cbmFwcC5nZXQoJyonLCBhc3luYyAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XG5cdGNvbnN0IHN0b3JlID0gZ2V0U3RvcmUocmVxKTtcblx0Ly8g6Lev55Sx5Yy56YWNXG5cdGNvbnN0IG1hdGNoZWRSb3V0ZXMgPSBtYXRjaFJvdXRlcyhyb3V0ZXMsIHJlcS5wYXRoKTtcblxuXG5cdC8vIOiuqW1hdGNoZWRSb3V0ZXPlhoXmiYDmnInot6/nlLHnmoRsb2FkRGF0YSjlvILmraXliqDovb0p5omn6KGM5LiA5qyhXG5cdGNvbnN0IHByb21pc2VzOiBhbnlbXSA9IFtdO1xuXHRtYXRjaGVkUm91dGVzLmZvckVhY2goaXRlbSA9PiB7XG5cdFx0Y29uc3Qgcm91dGU6IFJvdXRlVHlwZSA9IGl0ZW0ucm91dGU7XG5cdFx0aWYgKHJvdXRlLmxvYWREYXRhKSB7XG5cdFx0XHRwcm9taXNlcy5wdXNoKHJvdXRlLmxvYWREYXRhKHN0b3JlKSk7XG5cdFx0fVxuXHR9KVxuXHRhd2FpdCBQcm9taXNlLmFsbChwcm9taXNlcyk7XG5cblx0Y29uc3QgY29udGV4dDogQ29udGV4dCA9IHtcblx0XHROT1RfRk9VTkQ6IGZhbHNlXG5cdH1cblxuXHRjb25zdCBzc3JIVE1MID0gYXdhaXQgcmVuZGVyKHJlcSwgc3RvcmUsIHJvdXRlcywgY29udGV4dCk7XG5cblx0Ly8gY29uc29sZS5sb2coY29udGV4dCk7XG5cblx0aWYgKGNvbnRleHQuYWN0aW9uID09PSAnUkVQTEFDRScpIHtcblx0XHRyZXMucmVkaXJlY3QoMzAxLCBjb250ZXh0LnVybCEpO1xuXHR9IGVsc2UgaWYgKGNvbnRleHQuTk9UX0ZPVU5EKSB7XG5cdFx0cmVzLnN0YXR1cyg0MDQpO1xuXHR9XG5cblx0cmVzLnNlbmQoc3NySFRNTCk7XG5cbn0pO1xuXG5hcHAudXNlKGNhdGNoRXJyb3IoKSk7XG5cbmFwcC5saXN0ZW4oMzAwMCwgKCkgPT4ge1xuXHRjb25zb2xlLmxvZyhgbGlzdGVuIDMwMDAuLi5gKTtcbn0pOyIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgeyBSZXF1ZXN0IH0gZnJvbSAnZXhwcmVzcyc7XG5cbmltcG9ydCBjb25maWcgZnJvbSAnLi4vLi4vY29uZmlnL2NvbmZpZyc7XG5cbmNvbnN0IGNyZWF0ZUluc3RhbmNlID0gKHJlcTogUmVxdWVzdCkgPT4ge1xuICAgIHJldHVybiBheGlvcy5jcmVhdGUoe1xuICAgICAgICBiYXNlVVJMOiAnaHR0cDovL2xvY2FsaG9zdDo3MDAxL3NzcicsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIGNvb2tpZTogcmVxLmdldCgnY29va2llJykgfHwgJydcbiAgICAgICAgfSxcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICBzZWNyZXQ6IGNvbmZpZy5zZWNyZXRcbiAgICAgICAgfVxuICAgIH0pXG59XG5leHBvcnQgZGVmYXVsdCBjcmVhdGVJbnN0YW5jZTsiLCJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IFJlcXVlc3QgfSBmcm9tICdleHByZXNzJztcbmltcG9ydCB7IHJlbmRlclRvU3RyaW5nIH0gZnJvbSAncmVhY3QtZG9tL3NlcnZlcic7XG5pbXBvcnQgeyBTdGF0aWNSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHsgcmVuZGVyUm91dGVzIH0gZnJvbSAncmVhY3Qtcm91dGVyLWNvbmZpZyc7XG5cbmltcG9ydCB7IFJvdXRlVHlwZSwgQ29udGV4dCB9IGZyb20gJy4uL3R5cGVzJztcblxuLyoqXG4gKiBcbiAqIEBwYXJhbSByZXEgXG4gKiBAcGFyYW0gc3RvcmUgZ2V0U3RvcmXliJvlu7pcbiAqIEBwYXJhbSByb3V0ZXMgUm91dGVyLnRzXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIHJlbmRlcihyZXE6IFJlcXVlc3QsIHN0b3JlOiBTdG9yZSwgcm91dGVzOiBSb3V0ZVR5cGVbXSwgY29udGV4dDogQ29udGV4dCkge1xuXG5cblxuXHRjb25zdCBjb250ZW50ID0gcmVuZGVyVG9TdHJpbmcoXG5cdFx0PFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG5cdFx0XHQ8U3RhdGljUm91dGVyIGxvY2F0aW9uPXtyZXEucGF0aH0gY29udGV4dD17Y29udGV4dH0+XG5cdFx0XHRcdDxGcmFnbWVudD5cblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHQvLyDkuIDnuqfot6/nlLHmuLLmn5Ncblx0XHRcdFx0XHRcdHJlbmRlclJvdXRlcyhyb3V0ZXMpXG5cdFx0XHRcdFx0XHQvLyByb3V0ZXMubWFwKHJvdXRlID0+IHtcblx0XHRcdFx0XHRcdC8vIFx0cmV0dXJuIDxSb3V0ZSB7Li4ucm91dGV9IC8+XG5cdFx0XHRcdFx0XHQvLyB9KVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0PC9GcmFnbWVudD5cblx0XHRcdDwvU3RhdGljUm91dGVyPlxuXHRcdDwvUHJvdmlkZXI+XG5cdCk7XG5cblx0cmV0dXJuIChgXG5cdFx0PGh0bWw+XG5cdFx0XHQ8aGVhZD5cblx0XHRcdFx0PHRpdGxlPnNzcjwvdGl0bGU+XG5cdFx0XHQ8L2hlYWQ+XG5cdFx0XHRcdDxib2R5PlxuXHRcdFx0XHRcdDxkaXYgaWQ9J3Jvb3QnPiR7Y29udGVudH08L2Rpdj5cblx0XHRcdFx0PC9ib2R5PlxuXHRcdFx0XHQ8c2NyaXB0PlxuXHRcdFx0XHRcdHdpbmRvdy5jb250ZXh0ID0ge1xuXHRcdFx0XHRcdFx0c3RhdGU6ICR7SlNPTi5zdHJpbmdpZnkoc3RvcmUuZ2V0U3RhdGUoKSl9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQ8L3NjcmlwdD5cblx0XHRcdDxzY3JpcHQgc3JjPScvaW5kZXguanMnPjwvc2NyaXB0PlxuXHRcdDwvaHRtbD5cbiAgICBgKVxufVxuXG5leHBvcnQge1xuXHRyZW5kZXJcbn0iLCJpbXBvcnQgeyBSZXF1ZXN0IH0gZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgdGh1bmsgZnJvbSAncmVkdXgtdGh1bmsnO1xuaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSwgY29tcG9zZSwgY29tYmluZVJlZHVjZXJzIH0gZnJvbSBcInJlZHV4XCI7XG5cbmltcG9ydCB7IHJlZHVjZXIgYXMgaGVhZGVyUmVkdWNlciB9IGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyL3N0b3JlJztcbmltcG9ydCB7IHJlZHVjZXIgYXMgaG9tZVJlZHVjZXIgfSBmcm9tICcuLi9jb250YWluZXJzL0hvbWUvc3RvcmUnO1xuaW1wb3J0IHsgcmVkdWNlciBhcyB0cmFuc2xhdGlvblJlZHVjZXIgfSBmcm9tICcuLi9jb250YWluZXJzL1RyYW5zbGF0aW9uL3N0b3JlJztcbmltcG9ydCBjbGllbnRBeGlvcyBmcm9tICcuLi9jbGllbnQvcmVxdWlyZSc7XG5pbXBvcnQgc2VydmVyQXhpb3MgZnJvbSAnLi4vc2VydmVyL3JlcXVpcmUnO1xuXG5jb25zdCByZWR1Y2VycyA9IGNvbWJpbmVSZWR1Y2Vycyh7XG4gICAgaGVhZGVyOiBoZWFkZXJSZWR1Y2VyLFxuICAgIGhvbWU6IGhvbWVSZWR1Y2VyLFxuICAgIHRyYW5zbGF0aW9uOiB0cmFuc2xhdGlvblJlZHVjZXJcbn0pXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTdG9yZShyZXE6IFJlcXVlc3QpIHtcbiAgICByZXR1cm4gY3JlYXRlU3RvcmUocmVkdWNlcnMsIGFwcGx5TWlkZGxld2FyZSh0aHVuay53aXRoRXh0cmFBcmd1bWVudChzZXJ2ZXJBeGlvcyhyZXEpKSkpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDbGllbnRTdG9yZSgpIHtcbiAgICBjb25zdCBkZWZhdWx0U3RvcmUgPSAod2luZG93IGFzIGFueSkuY29udGV4dC5zdGF0ZTtcbiAgICBjb25zdCBjb21wb3NlRW5oYW5jZXJzID0gKHdpbmRvdyBhcyBhbnkpLl9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX0NPTVBPU0VfXyB8fCBjb21wb3NlO1xuICAgIHJldHVybiBjcmVhdGVTdG9yZShyZWR1Y2VycywgZGVmYXVsdFN0b3JlLCBjb21wb3NlRW5oYW5jZXJzKFxuICAgICAgICBhcHBseU1pZGRsZXdhcmUodGh1bmsud2l0aEV4dHJhQXJndW1lbnQoY2xpZW50QXhpb3MoKSkpXG4gICAgKSk7XG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUtY29yZWpzMy9jb3JlLWpzLXN0YWJsZS9pbnN0YW5jZS9jb25jYXRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUtY29yZWpzMy9jb3JlLWpzLXN0YWJsZS9pbnN0YW5jZS9maWx0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUtY29yZWpzMy9jb3JlLWpzLXN0YWJsZS9pbnN0YW5jZS9mb3ItZWFjaFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS1jb3JlanMzL2NvcmUtanMtc3RhYmxlL2luc3RhbmNlL21hcFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS1jb3JlanMzL2NvcmUtanMtc3RhYmxlL2pzb24vc3RyaW5naWZ5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lLWNvcmVqczMvY29yZS1qcy1zdGFibGUvb2JqZWN0L2RlZmluZS1wcm9wZXJ0aWVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lLWNvcmVqczMvY29yZS1qcy1zdGFibGUvb2JqZWN0L2RlZmluZS1wcm9wZXJ0eVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS1jb3JlanMzL2NvcmUtanMtc3RhYmxlL29iamVjdC9nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3JcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUtY29yZWpzMy9jb3JlLWpzLXN0YWJsZS9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS1jb3JlanMzL2NvcmUtanMtc3RhYmxlL29iamVjdC9nZXQtb3duLXByb3BlcnR5LXN5bWJvbHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUtY29yZWpzMy9jb3JlLWpzLXN0YWJsZS9vYmplY3Qva2V5c1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS1jb3JlanMzL2NvcmUtanMtc3RhYmxlL3Byb21pc2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUtY29yZWpzMy9oZWxwZXJzL2FzeW5jVG9HZW5lcmF0b3JcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUtY29yZWpzMy9oZWxwZXJzL2RlZmluZVByb3BlcnR5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lLWNvcmVqczMvcmVnZW5lcmF0b3JcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5Lml0ZXJhdG9yXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvbW9kdWxlcy9lcy5mdW5jdGlvbi5uYW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvbW9kdWxlcy9lcy5vYmplY3QudG8tc3RyaW5nXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvbW9kdWxlcy9lcy5wcm9taXNlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvbW9kdWxlcy9lcy5zdHJpbmcuaXRlcmF0b3JcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9tb2R1bGVzL3dlYi5kb20tY29sbGVjdGlvbnMuaXRlcmF0b3JcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzLWh0dHAtcHJveHlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZG9tL3NlcnZlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yb3V0ZXItY29uZmlnXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJvdXRlci1kb21cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtdGh1bmtcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lXCIpOyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUMvRUE7QUFBQTtBQUNBO0FBREE7QUFJQTs7Ozs7Ozs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUM3RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDNUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBTUE7QUFBQTtBQUlBO0FBS0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7OztBQzdCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBREE7QUFJQTtBQXJCQTtBQUNBO0FBMEJBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDL0NBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBRkE7QUFNQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ1pBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUZBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBTUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDcENBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBRkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQzlDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQ0E7QUFDQTtBQURBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBS0E7QUFFQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFiQTtBQWVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0QkE7QUFDQTtBQUdBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFGQTtBQUFBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7OztBQ3RDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUZBO0FBTUE7QUFDQTtBQUVBOzs7O0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBRkE7QUFNQTtBQUNBOzs7Ozs7Ozs7Ozs7QUN6Q0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0NBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFFQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBbkJBO0FBcUJBOzs7Ozs7Ozs7OztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBUUE7QUFDQTs7Ozs7Ozs7Ozs7O0FDdkJBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFLQTtBQUFBO0FBRUE7QUFDQTtBQUtBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEJBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBSEE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7O0FDcENBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFGQTtBQU1BO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDOUJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNFQTtBQUNBO0FBREE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUVBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQVhBO0FBYUE7Ozs7Ozs7Ozs7OztBQ2xCQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBRUE7QUFDQTtBQUNBOzs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQU9BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWRBO0FBQUE7QUFDQTtBQURBO0FBZ0JBO0FBQ0E7QUFEQTtBQWhCQTtBQUFBO0FBQ0E7QUFEQTtBQW9CQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBL0JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQWtDQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDL0RBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQURBO0FBTEE7QUFTQTtBQUNBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFHQTs7Ozs7O0FBTUE7Ozs7O0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUlBO0FBRUE7QUFDQTtBQU5BO0FBUEE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7O0FDZkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTs7Ozs7Ozs7Ozs7QUMxQkE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==