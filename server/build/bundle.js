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

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js!./src/components/Header/index.css":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--7-1!./node_modules/postcss-loader/src!./src/components/Header/index.css ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".index_header_container-2FMYF {\n    width: 500px;\n    height: 30px;\n    margin: 5px 10px;\n}\n\n.index_header_item-34OnZ {\n    display: inline-block;\n    padding: 3px 3px;\n    margin: 0 4px;\n    color: #000;\n    text-decoration: none;\n    border-radius: 5px;\n    border: 1px solid #eee;\n}\n\n\n.index_header_item-34OnZ:hover {\n    cursor: pointer;\n    color: #999;\n}", ""]);
// Exports
exports.locals = {
	"header_container": "index_header_container-2FMYF",
	"header_item": "index_header_item-34OnZ"
};
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js!./src/containers/Home/style.css":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--7-1!./node_modules/postcss-loader/src!./src/containers/Home/style.css ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".style_home_container-XGyFH {\n    margin: 5px 10px;\n    \n}\n\n.style_home_listItem-1yfBl {\n    margin: 5px 0;\n}\n\n.style_home_btn-2x2J9 {\n    width: 100px;\n    height: 60px;\n}", ""]);
// Exports
exports.locals = {
	"home_container": "style_home_container-XGyFH",
	"home_listItem": "style_home_listItem-1yfBl",
	"home_btn": "style_home_btn-2x2J9"
};
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js!./src/containers/Translation/style.css":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--7-1!./node_modules/postcss-loader/src!./src/containers/Translation/style.css ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".style_translation_container-2glXW {\n    width: 800px;\n    height: 600px;\n    margin: 5px 10px;\n    /* background: url('./bg.png'); */\n}\n\n.style_translation_item-1QUqi {\n    margin: 5px;\n}\n.style_translation_item-1QUqi:hover {\n    cursor: pointer;\n    color: #eee;\n}", ""]);
// Exports
exports.locals = {
	"translation_container": "style_translation_container-2glXW",
	"translation_item": "style_translation_item-1QUqi"
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
  var route = props.route,
      staticContext = props.staticContext;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header___WEBPACK_IMPORTED_MODULE_2__["default"], {
    staticContext: staticContext
  }), // 二级路由渲染
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

/***/ "./src/components/Header/index.css":
/*!*****************************************!*\
  !*** ./src/components/Header/index.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    var refs = 0;
    var css = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--7-1!../../../node_modules/postcss-loader/src!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js!./src/components/Header/index.css");
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
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.css */ "./src/components/Header/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks */ "./src/hooks/index.ts");







var Header = function Header(props) {
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  var headerState = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.header;
  }, react_redux__WEBPACK_IMPORTED_MODULE_2__["shallowEqual"]);
  var isLogin = headerState.isLogin;
  Object(_hooks__WEBPACK_IMPORTED_MODULE_5__["useWithStyle"])(props, _index_css__WEBPACK_IMPORTED_MODULE_4___default.a);

  var handleLogin = function handleLogin() {
    dispatch(_store__WEBPACK_IMPORTED_MODULE_3__["actionCreators"].login());
  };

  var handleLogout = function handleLogout() {
    dispatch(_store__WEBPACK_IMPORTED_MODULE_3__["actionCreators"].logout());
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _index_css__WEBPACK_IMPORTED_MODULE_4___default.a.header_container
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    className: _index_css__WEBPACK_IMPORTED_MODULE_4___default.a.header_item,
    to: "/"
  }, "\u9996\u9875"), isLogin ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    className: _index_css__WEBPACK_IMPORTED_MODULE_4___default.a.header_item,
    to: "/translation"
  }, "\u7FFB\u8BD1\u5217\u8868"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _index_css__WEBPACK_IMPORTED_MODULE_4___default.a.header_item,
    onClick: handleLogout
  }, "\u9000\u51FA")) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _index_css__WEBPACK_IMPORTED_MODULE_4___default.a.header_item,
    onClick: handleLogin
  }, "\u767B\u9646"), "islogin: ".concat(isLogin));
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
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-helmet */ "react-helmet");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./store */ "./src/containers/Home/store/index.ts");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../hooks */ "./src/hooks/index.ts");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./style.css */ "./src/containers/Home/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_8__);










var Home = function Home(props) {
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();
  var homeState = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.home;
  }, react_redux__WEBPACK_IMPORTED_MODULE_4__["shallowEqual"]);
  var name = homeState.name,
      newsList = homeState.newsList;
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (newsList.length === 0) {
      dispatch(_store__WEBPACK_IMPORTED_MODULE_6__["actionCreators"].getHomeList());
    }
  }, []);
  Object(_hooks__WEBPACK_IMPORTED_MODULE_7__["useWithStyle"])(props, _style_css__WEBPACK_IMPORTED_MODULE_8___default.a);

  var handleChangeName = function handleChangeName() {
    dispatch(_store__WEBPACK_IMPORTED_MODULE_6__["actionCreators"].changeName());
  };

  var getList = function getList() {
    return _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_2___default()(newsList).call(newsList, function (item) {
      var _context;

      return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: _style_css__WEBPACK_IMPORTED_MODULE_8___default.a.home_listItem,
        key: item.id
      }, _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_1___default()(_context = "".concat(item.id, "  ")).call(_context, item.title));
    });
  };

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_5__["Helmet"], null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("title", null, "CregskiN \u7684 ssr Home\u754C\u9762"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("meta", {
    name: "description",
    content: "CregskiN \u7684 ssr \u65B0\u95FB\u754C\u9762\u6FC0\u52B1\u5496\u55B1\u554A"
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: _style_css__WEBPACK_IMPORTED_MODULE_8___default.a.home_container
  }, getList(), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button", {
    className: _style_css__WEBPACK_IMPORTED_MODULE_8___default.a.home_btn,
    onClick: handleChangeName
  }, "click"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: _style_css__WEBPACK_IMPORTED_MODULE_8___default.a.home_name
  }, name)));
};

var loadData = function loadData(store) {
  return store.dispatch(_store__WEBPACK_IMPORTED_MODULE_6__["actionCreators"].getHomeList());
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
    var css = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--7-1!../../../node_modules/postcss-loader/src!./style.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js!./src/containers/Home/style.css");
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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-helmet */ "react-helmet");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./store */ "./src/containers/Translation/store/index.ts");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hooks */ "./src/hooks/index.ts");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./style.css */ "./src/containers/Translation/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_7__);









var Translation = function Translation(props) {
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  var isLogin = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.header.isLogin;
  }, react_redux__WEBPACK_IMPORTED_MODULE_2__["shallowEqual"]);
  var translationState = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.translation;
  });
  var translationsList = translationState.translationsList;
  Object(_hooks__WEBPACK_IMPORTED_MODULE_6__["useWithStyle"])(props, _style_css__WEBPACK_IMPORTED_MODULE_7___default.a);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (translationsList.length === 0) {
      dispatch(_store__WEBPACK_IMPORTED_MODULE_5__["actionCreators"].getTranslationsList());
    }
  }, []);
  return isLogin ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: _style_css__WEBPACK_IMPORTED_MODULE_7___default.a.translation_container
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_4__["Helmet"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", null, "CregskiN \u7684 ssr Translation\u754C\u9762"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    name: "description",
    content: "CregskiN \u7684 ssr translation\u754C\u9762\u6FC0\u52B1\u5496\u55B1\u554A"
  })), _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0___default()(translationsList).call(translationsList, function (listItem) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: _style_css__WEBPACK_IMPORTED_MODULE_7___default.a.translation_item,
      key: listItem.id
    }, listItem.title);
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    onClick: function onClick() {
      console.log('on click');
    }
  }, "click")) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Redirect"], {
    to: "/"
  });
};

var loadData = function loadData(store) {
  return store.dispatch(_store__WEBPACK_IMPORTED_MODULE_5__["actionCreators"].getTranslationsList());
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

/***/ "./src/containers/Translation/style.css":
/*!**********************************************!*\
  !*** ./src/containers/Translation/style.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    var refs = 0;
    var css = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--7-1!../../../node_modules/postcss-loader/src!./style.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js!./src/containers/Translation/style.css");
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

/***/ "./src/hooks/index.ts":
/*!****************************!*\
  !*** ./src/hooks/index.ts ***!
  \****************************/
/*! exports provided: useWithStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _useWithStyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useWithStyle */ "./src/hooks/useWithStyle.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useWithStyle", function() { return _useWithStyle__WEBPACK_IMPORTED_MODULE_0__["useWithStyle"]; });



/***/ }),

/***/ "./src/hooks/useWithStyle.ts":
/*!***********************************!*\
  !*** ./src/hooks/useWithStyle.ts ***!
  \***********************************/
/*! exports provided: useWithStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useWithStyle", function() { return useWithStyle; });
function useWithStyle(props, styles) {
  if (props.staticContext) {
    props.staticContext.css.push(styles._getCss());
  }
}

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
              NOT_FOUND: false,
              css: []
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
/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.join */ "core-js/modules/es.array.join");
/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "core-js/modules/es.object.to-string");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "core-js/modules/es.regexp.to-string");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/regenerator */ "@babel/runtime-corejs3/regenerator");
/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/json/stringify */ "@babel/runtime-corejs3/core-js-stable/json/stringify");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/concat */ "@babel/runtime-corejs3/core-js-stable/instance/concat");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! regenerator-runtime/runtime */ "regenerator-runtime/runtime");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/asyncToGenerator */ "@babel/runtime-corejs3/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-dom/server */ "react-dom/server");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-router-config */ "react-router-config");
/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-helmet */ "react-helmet");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_13__);















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
  _render = _babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7___default()( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee(req, store, routes, context) {
    var _context$css, _context, _context2, _context3, _context4;

    var content, helmet, cssStr;
    return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            content = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_10__["renderToString"])(react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_9__["Provider"], {
              store: store
            }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__["StaticRouter"], {
              location: req.path,
              context: context
            }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_8__["Fragment"], null, // 一级路由渲染
            Object(react_router_config__WEBPACK_IMPORTED_MODULE_12__["renderRoutes"])(routes) // routes.map(route => {
            // 	return <Route {...route} />
            // })
            ))));
            helmet = react_helmet__WEBPACK_IMPORTED_MODULE_13__["Helmet"].renderStatic();
            cssStr = ((_context$css = context.css) === null || _context$css === void 0 ? void 0 : _context$css.length) ? context.css.join('\n') : '';
            console.log(cssStr);
            return _context5.abrupt("return", _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_5___default()(_context = _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_5___default()(_context2 = _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_5___default()(_context3 = _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_5___default()(_context4 = "\n\t\t<html>\n\t\t\t<head>\n\t\t\t\t".concat(helmet.title.toString(), "\n\t\t\t\t")).call(_context4, helmet.meta.toString(), "\n\t\t\t\t<style>")).call(_context3, cssStr, "</style>\n\t\t\t</head>\n\t\t\t\t<body>\n\t\t\t\t\t<div id='root'>")).call(_context2, content, "</div>\n\t\t\t\t</body>\n\t\t\t\t<script>\n\t\t\t\t\twindow.context = {\n\t\t\t\t\t\tstate: ")).call(_context, _babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_4___default()(store.getState()), "\n\t\t\t\t\t}\n\t\t\t\t</script>\n\t\t\t<script src='/index.js'></script>\n\t\t</html>\n    "));

          case 5:
          case "end":
            return _context5.stop();
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

/***/ "core-js/modules/es.array.join":
/*!************************************************!*\
  !*** external "core-js/modules/es.array.join" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.join");

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

/***/ "core-js/modules/es.regexp.to-string":
/*!******************************************************!*\
  !*** external "core-js/modules/es.regexp.to-string" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.regexp.to-string");

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

/***/ "react-helmet":
/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy8uL2NvbmZpZy9jb25maWcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL2luZGV4LmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9Ib21lL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9UcmFuc2xhdGlvbi9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvaW5zZXJ0Q3NzLmpzIiwid2VicGFjazovLy8uL3NyYy9BcHAudHN4Iiwid2VicGFjazovLy8uL3NyYy9Sb3V0ZXMudHN4Iiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvcmVxdWlyZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvaW5kZXguY3NzPzYxNGMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvc3RvcmUvYWN0aW9uQ3JlYXRvcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL3N0b3JlL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0hlYWRlci9zdG9yZS9yZWR1Y2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9jb250YWluZXJzL0hvbWUvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb250YWluZXJzL0hvbWUvc3RvcmUvYWN0aW9uQ3JlYXRvcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRhaW5lcnMvSG9tZS9zdG9yZS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9Ib21lL3N0b3JlL3JlZHVjZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRhaW5lcnMvSG9tZS9zdHlsZS5jc3M/NjA3YyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9Ob3RGb3VuZC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRhaW5lcnMvVHJhbnNsYXRpb24vaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb250YWluZXJzL1RyYW5zbGF0aW9uL3N0b3JlL2FjdGlvbkNyZWF0b3JzLnRzIiwid2VicGFjazovLy8uL3NyYy9jb250YWluZXJzL1RyYW5zbGF0aW9uL3N0b3JlL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9jb250YWluZXJzL1RyYW5zbGF0aW9uL3N0b3JlL3JlZHVjZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRhaW5lcnMvVHJhbnNsYXRpb24vc3R5bGUuY3NzPzY1N2UiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hvb2tzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9ob29rcy91c2VXaXRoU3R5bGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21pZGRsZXdhcmVzL2NhdGNoRXJyb3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL3JlcXVpcmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci91dGlsLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGJhYmVsL3J1bnRpbWUtY29yZWpzMy9jb3JlLWpzLXN0YWJsZS9pbnN0YW5jZS9jb25jYXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYmFiZWwvcnVudGltZS1jb3JlanMzL2NvcmUtanMtc3RhYmxlL2luc3RhbmNlL2ZpbHRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBiYWJlbC9ydW50aW1lLWNvcmVqczMvY29yZS1qcy1zdGFibGUvaW5zdGFuY2UvZm9yLWVhY2hcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYmFiZWwvcnVudGltZS1jb3JlanMzL2NvcmUtanMtc3RhYmxlL2luc3RhbmNlL21hcFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBiYWJlbC9ydW50aW1lLWNvcmVqczMvY29yZS1qcy1zdGFibGUvanNvbi9zdHJpbmdpZnlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYmFiZWwvcnVudGltZS1jb3JlanMzL2NvcmUtanMtc3RhYmxlL29iamVjdC9kZWZpbmUtcHJvcGVydGllc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBiYWJlbC9ydW50aW1lLWNvcmVqczMvY29yZS1qcy1zdGFibGUvb2JqZWN0L2RlZmluZS1wcm9wZXJ0eVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBiYWJlbC9ydW50aW1lLWNvcmVqczMvY29yZS1qcy1zdGFibGUvb2JqZWN0L2dldC1vd24tcHJvcGVydHktZGVzY3JpcHRvclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBiYWJlbC9ydW50aW1lLWNvcmVqczMvY29yZS1qcy1zdGFibGUvb2JqZWN0L2dldC1vd24tcHJvcGVydHktZGVzY3JpcHRvcnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYmFiZWwvcnVudGltZS1jb3JlanMzL2NvcmUtanMtc3RhYmxlL29iamVjdC9nZXQtb3duLXByb3BlcnR5LXN5bWJvbHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYmFiZWwvcnVudGltZS1jb3JlanMzL2NvcmUtanMtc3RhYmxlL29iamVjdC9rZXlzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGJhYmVsL3J1bnRpbWUtY29yZWpzMy9jb3JlLWpzLXN0YWJsZS9wcm9taXNlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGJhYmVsL3J1bnRpbWUtY29yZWpzMy9oZWxwZXJzL2FzeW5jVG9HZW5lcmF0b3JcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYmFiZWwvcnVudGltZS1jb3JlanMzL2hlbHBlcnMvZGVmaW5lUHJvcGVydHlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYmFiZWwvcnVudGltZS1jb3JlanMzL3JlZ2VuZXJhdG9yXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuaXRlcmF0b3JcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuam9pblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcmUtanMvbW9kdWxlcy9lcy5mdW5jdGlvbi5uYW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yZS1qcy9tb2R1bGVzL2VzLm9iamVjdC50by1zdHJpbmdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL21vZHVsZXMvZXMucHJvbWlzZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcmUtanMvbW9kdWxlcy9lcy5yZWdleHAudG8tc3RyaW5nXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yZS1qcy9tb2R1bGVzL2VzLnN0cmluZy5pdGVyYXRvclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcmUtanMvbW9kdWxlcy93ZWIuZG9tLWNvbGxlY3Rpb25zLml0ZXJhdG9yXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXhwcmVzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3MtaHR0cC1wcm94eVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtZG9tL3NlcnZlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWhlbG1ldFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtcm91dGVyLWNvbmZpZ1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJvdXRlci1kb21cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXRodW5rXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lXCIiXSwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvc2VydmVyL2luZGV4LnRzXCIpO1xuIiwiaW50ZXJmYWNlIENvbmZpZyB7XG4gICAgc2VjcmV0OiBzdHJpbmc7XG59XG5jb25zdCBjb25maWc6IENvbmZpZyA9IHtcbiAgICBzZWNyZXQ6ICdQUDg3QU5USVBJUkFURSdcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29uZmlnOyIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuaW5kZXhfaGVhZGVyX2NvbnRhaW5lci0yRk1ZRiB7XFxuICAgIHdpZHRoOiA1MDBweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBtYXJnaW46IDVweCAxMHB4O1xcbn1cXG5cXG4uaW5kZXhfaGVhZGVyX2l0ZW0tMzRPbloge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHBhZGRpbmc6IDNweCAzcHg7XFxuICAgIG1hcmdpbjogMCA0cHg7XFxuICAgIGNvbG9yOiAjMDAwO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcXG59XFxuXFxuXFxuLmluZGV4X2hlYWRlcl9pdGVtLTM0T25aOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBjb2xvcjogIzk5OTtcXG59XCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcImhlYWRlcl9jb250YWluZXJcIjogXCJpbmRleF9oZWFkZXJfY29udGFpbmVyLTJGTVlGXCIsXG5cdFwiaGVhZGVyX2l0ZW1cIjogXCJpbmRleF9oZWFkZXJfaXRlbS0zNE9uWlwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5zdHlsZV9ob21lX2NvbnRhaW5lci1YR3lGSCB7XFxuICAgIG1hcmdpbjogNXB4IDEwcHg7XFxuICAgIFxcbn1cXG5cXG4uc3R5bGVfaG9tZV9saXN0SXRlbS0xeWZCbCB7XFxuICAgIG1hcmdpbjogNXB4IDA7XFxufVxcblxcbi5zdHlsZV9ob21lX2J0bi0yeDJKOSB7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgaGVpZ2h0OiA2MHB4O1xcbn1cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwiaG9tZV9jb250YWluZXJcIjogXCJzdHlsZV9ob21lX2NvbnRhaW5lci1YR3lGSFwiLFxuXHRcImhvbWVfbGlzdEl0ZW1cIjogXCJzdHlsZV9ob21lX2xpc3RJdGVtLTF5ZkJsXCIsXG5cdFwiaG9tZV9idG5cIjogXCJzdHlsZV9ob21lX2J0bi0yeDJKOVwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5zdHlsZV90cmFuc2xhdGlvbl9jb250YWluZXItMmdsWFcge1xcbiAgICB3aWR0aDogODAwcHg7XFxuICAgIGhlaWdodDogNjAwcHg7XFxuICAgIG1hcmdpbjogNXB4IDEwcHg7XFxuICAgIC8qIGJhY2tncm91bmQ6IHVybCgnLi9iZy5wbmcnKTsgKi9cXG59XFxuXFxuLnN0eWxlX3RyYW5zbGF0aW9uX2l0ZW0tMVFVcWkge1xcbiAgICBtYXJnaW46IDVweDtcXG59XFxuLnN0eWxlX3RyYW5zbGF0aW9uX2l0ZW0tMVFVcWk6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGNvbG9yOiAjZWVlO1xcbn1cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwidHJhbnNsYXRpb25fY29udGFpbmVyXCI6IFwic3R5bGVfdHJhbnNsYXRpb25fY29udGFpbmVyLTJnbFhXXCIsXG5cdFwidHJhbnNsYXRpb25faXRlbVwiOiBcInN0eWxlX3RyYW5zbGF0aW9uX2l0ZW0tMVFVcWlcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsIi8qISBJc29tb3JwaGljIFN0eWxlIExvYWRlciB8IE1JVCBMaWNlbnNlIHwgaHR0cHM6Ly9naXRodWIuY29tL2tyaWFzb2Z0L2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIGluc2VydGVkID0ge307XG5cbmZ1bmN0aW9uIGI2NEVuY29kZVVuaWNvZGUoc3RyKSB7XG4gIHJldHVybiBidG9hKGVuY29kZVVSSUNvbXBvbmVudChzdHIpLnJlcGxhY2UoLyUoWzAtOUEtRl17Mn0pL2csIGZ1bmN0aW9uIChtYXRjaCwgcDEpIHtcbiAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZShcIjB4XCIgKyBwMSk7XG4gIH0pKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlQ3NzKGlkcykge1xuICBpZHMuZm9yRWFjaChmdW5jdGlvbiAoaWQpIHtcbiAgICBpZiAoLS1pbnNlcnRlZFtpZF0gPD0gMCkge1xuICAgICAgdmFyIGVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG5cbiAgICAgIGlmIChlbGVtKSB7XG4gICAgICAgIGVsZW0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbGVtKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRDc3Moc3R5bGVzLCBfdGVtcCkge1xuICB2YXIgX3JlZiA9IF90ZW1wID09PSB2b2lkIDAgPyB7fSA6IF90ZW1wLFxuICAgICAgX3JlZiRyZXBsYWNlID0gX3JlZi5yZXBsYWNlLFxuICAgICAgcmVwbGFjZSA9IF9yZWYkcmVwbGFjZSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcmVmJHJlcGxhY2UsXG4gICAgICBfcmVmJHByZXBlbmQgPSBfcmVmLnByZXBlbmQsXG4gICAgICBwcmVwZW5kID0gX3JlZiRwcmVwZW5kID09PSB2b2lkIDAgPyBmYWxzZSA6IF9yZWYkcHJlcGVuZCxcbiAgICAgIF9yZWYkcHJlZml4ID0gX3JlZi5wcmVmaXgsXG4gICAgICBwcmVmaXggPSBfcmVmJHByZWZpeCA9PT0gdm9pZCAwID8gJ3MnIDogX3JlZiRwcmVmaXg7XG5cbiAgdmFyIGlkcyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIF9zdHlsZXMkaSA9IHN0eWxlc1tpXSxcbiAgICAgICAgbW9kdWxlSWQgPSBfc3R5bGVzJGlbMF0sXG4gICAgICAgIGNzcyA9IF9zdHlsZXMkaVsxXSxcbiAgICAgICAgbWVkaWEgPSBfc3R5bGVzJGlbMl0sXG4gICAgICAgIHNvdXJjZU1hcCA9IF9zdHlsZXMkaVszXTtcbiAgICB2YXIgaWQgPSBcIlwiICsgcHJlZml4ICsgbW9kdWxlSWQgKyBcIi1cIiArIGk7XG4gICAgaWRzLnB1c2goaWQpO1xuXG4gICAgaWYgKGluc2VydGVkW2lkXSkge1xuICAgICAgaWYgKCFyZXBsYWNlKSB7XG4gICAgICAgIGluc2VydGVkW2lkXSsrO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpbnNlcnRlZFtpZF0gPSAxO1xuICAgIHZhciBlbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuICAgIHZhciBjcmVhdGUgPSBmYWxzZTtcblxuICAgIGlmICghZWxlbSkge1xuICAgICAgY3JlYXRlID0gdHJ1ZTtcbiAgICAgIGVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgICAgZWxlbS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dC9jc3MnKTtcbiAgICAgIGVsZW0uaWQgPSBpZDtcblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGVsZW0uc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgY3NzVGV4dCA9IGNzcztcblxuICAgIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNzc1RleHQgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYjY0RW5jb2RlVW5pY29kZShKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSArIFwiKi9cIjtcbiAgICAgIGNzc1RleHQgKz0gXCJcXG4vKiMgc291cmNlVVJMPVwiICsgc291cmNlTWFwLmZpbGUgKyBcIj9cIiArIGlkICsgXCIqL1wiO1xuICAgIH1cblxuICAgIGlmICgndGV4dENvbnRlbnQnIGluIGVsZW0pIHtcbiAgICAgIGVsZW0udGV4dENvbnRlbnQgPSBjc3NUZXh0O1xuICAgIH0gZWxzZSB7XG4gICAgICBlbGVtLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzc1RleHQ7XG4gICAgfVxuXG4gICAgaWYgKGNyZWF0ZSkge1xuICAgICAgaWYgKHByZXBlbmQpIHtcbiAgICAgICAgZG9jdW1lbnQuaGVhZC5pbnNlcnRCZWZvcmUoZWxlbSwgZG9jdW1lbnQuaGVhZC5jaGlsZE5vZGVzWzBdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoZWxlbSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlbW92ZUNzcy5iaW5kKG51bGwsIGlkcyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0Q3NzO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5zZXJ0Q3NzLmpzLm1hcFxuIiwiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgU3RvcmUgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgeyByZW5kZXJSb3V0ZXMsIFJvdXRlQ29uZmlnIH0gZnJvbSAncmVhY3Qtcm91dGVyLWNvbmZpZyc7XG5cbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9jb21wb25lbnRzL0hlYWRlci8nO1xuaW1wb3J0IHsgYWN0aW9uQ3JlYXRvcnMgfSBmcm9tICcuL2NvbXBvbmVudHMvSGVhZGVyL3N0b3JlJztcbmltcG9ydCB7IEhlYWRlclN0YXRlLCBTdGF0aWNSb3V0ZXJDb250ZXh0RXh0ZW5kcyB9IGZyb20gJy4vdHlwZXMnO1xuXG5pbnRlcmZhY2UgQXBwUHJvcHMgZXh0ZW5kcyBSb3V0ZUNvbmZpZyB7XG4gICAgcm91dGU/OiBSb3V0ZUNvbmZpZyxcbiAgICBzdGF0aWNDb250ZXh0PzogU3RhdGljUm91dGVyQ29udGV4dEV4dGVuZHNcbn1cblxuY29uc3QgQXBwOiBSZWFjdC5GQzxBcHBQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICAgIHJvdXRlLFxuICAgICAgICBzdGF0aWNDb250ZXh0XG4gICAgfSA9IHByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgICAgIDxIZWFkZXIgc3RhdGljQ29udGV4dD17c3RhdGljQ29udGV4dH0vPlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIC8vIOS6jOe6p+i3r+eUsea4suafk1xuICAgICAgICAgICAgICAgIHJlbmRlclJvdXRlcyhyb3V0ZT8ucm91dGVzKVxuICAgICAgICAgICAgfVxuICAgICAgICA8L0ZyYWdtZW50PlxuICAgIClcbn07XG5cbmV4cG9ydCBjb25zdCBsb2FkRGF0YSA9IChzdG9yZTogU3RvcmU8SGVhZGVyU3RhdGUsIGFueT4pID0+IHtcbiAgIHJldHVybiBzdG9yZS5kaXNwYXRjaChhY3Rpb25DcmVhdG9ycy5nZXRIZWFkZXJJbmZvKCkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7IiwiaW1wb3J0IHsgUm91dGVDb25maWcgfSBmcm9tICdyZWFjdC1yb3V0ZXItY29uZmlnJztcblxuaW1wb3J0IEFwcCwgeyBsb2FkRGF0YSBhcyBhcHBMb2FkRGF0YSB9IGZyb20gJy4vQXBwJztcbmltcG9ydCBIb21lLCB7IGxvYWREYXRhIGFzIGhvbWVMb2FkRGF0YSB9IGZyb20gJy4vY29udGFpbmVycy9Ib21lL2luZGV4JztcbmltcG9ydCBUcmFuc2xhdGlvbiwgeyBsb2FkRGF0YSBhcyB0cmFuc2xhdGlvbkxvYWREYXRhIH0gZnJvbSAnLi9jb250YWluZXJzL1RyYW5zbGF0aW9uL2luZGV4JztcbmltcG9ydCBOb3RGb3VuZCBmcm9tICcuL2NvbnRhaW5lcnMvTm90Rm91bmQnO1xuXG4vKipcbiAqIOWkmue6p+i3r+eUseeahOWGmeazlVxuICovXG5cbmNvbnN0IHJvdXRlczogUm91dGVDb25maWdbXSA9IFt7XG4gICAgcGF0aDogJy8nLFxuICAgIGNvbXBvbmVudDogQXBwLCAvLyDmraTlpITmnInnsbvlnovlkI3np7Dlhbzlrrnpl67popgg5LiN5YW85a65UmVhY3QuRkPvvIzlrp7pmYXkuIrkuozogIXnm7jlkIxcbiAgICBsb2FkRGF0YTogYXBwTG9hZERhdGEsXG4gICAgcm91dGVzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIHBhdGg6ICcvJyxcbiAgICAgICAgICAgIGNvbXBvbmVudDogSG9tZSxcbiAgICAgICAgICAgIGV4YWN0OiB0cnVlLFxuICAgICAgICAgICAgbG9hZERhdGE6IGhvbWVMb2FkRGF0YSxcbiAgICAgICAgICAgIGtleTogJ2hvbWUnLFxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBwYXRoOiAnL3RyYW5zbGF0aW9uJyxcbiAgICAgICAgICAgIGNvbXBvbmVudDogVHJhbnNsYXRpb24sXG4gICAgICAgICAgICBleGFjdDogdHJ1ZSxcbiAgICAgICAgICAgIGxvYWREYXRhOiB0cmFuc2xhdGlvbkxvYWREYXRhLFxuICAgICAgICAgICAga2V5OiAnbG9naW4nLFxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBjb21wb25lbnQ6IE5vdEZvdW5kLFxuICAgICAgICB9XG4gICAgXSxcbiAgICBrZXk6ICdBcHAnXG59XTtcblxuXG4vLyBjb25zdCByb3V0ZXM6IFJvdXRlQ29uZmlnW10gPSBcblxuZXhwb3J0IGRlZmF1bHQgcm91dGVzO1xuXG5cblxuLy8gZXhwb3J0IGRlZmF1bHQgKFxuLy8gICAgIDxGcmFnbWVudD5cbi8vICAgICAgICAgPFJvdXRlIHBhdGg9Jy8nIGV4YWN0IGNvbXBvbmVudD17SG9tZX0gLz5cbi8vICAgICAgICAgPFJvdXRlIHBhdGg9Jy9sb2dpbicgZXhhY3QgY29tcG9uZW50PXtMb2dpbn0gLz5cbi8vICAgICA8L0ZyYWdtZW50PlxuLy8gKSIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgY29uZmlnIGZyb20gJy4uLy4uL2NvbmZpZy9jb25maWcnO1xuXG5jb25zdCBjcmVhdGVJbnN0YW5jZSA9ICgpID0+IHtcbiAgICByZXR1cm4gYXhpb3MuY3JlYXRlKHtcbiAgICAgICAgYmFzZVVSTDogJy8nLFxuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgIHNlY3JldDogY29uZmlnLnNlY3JldFxuICAgICAgICB9XG4gICAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlSW5zdGFuY2U7IiwiXG4gICAgdmFyIHJlZnMgPSAwO1xuICAgIHZhciBjc3MgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS03LTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcyEuL2luZGV4LmNzc1wiKTtcbiAgICB2YXIgaW5zZXJ0Q3NzID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvaW5zZXJ0Q3NzLmpzXCIpO1xuICAgIHZhciBjb250ZW50ID0gdHlwZW9mIGNzcyA9PT0gJ3N0cmluZycgPyBbW21vZHVsZS5pZCwgY3NzLCAnJ11dIDogY3NzO1xuXG4gICAgZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gY3NzLmxvY2FscyB8fCB7fTtcbiAgICBleHBvcnRzLl9nZXRDb250ZW50ID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50OyB9O1xuICAgIGV4cG9ydHMuX2dldENzcyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gJycgKyBjc3M7IH07XG4gICAgZXhwb3J0cy5faW5zZXJ0Q3NzID0gZnVuY3Rpb24ob3B0aW9ucykgeyByZXR1cm4gaW5zZXJ0Q3NzKGNvbnRlbnQsIG9wdGlvbnMpIH07XG5cbiAgICAvLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG4gICAgLy8gaHR0cHM6Ly93ZWJwYWNrLmdpdGh1Yi5pby9kb2NzL2hvdC1tb2R1bGUtcmVwbGFjZW1lbnRcbiAgICAvLyBPbmx5IGFjdGl2YXRlZCBpbiBicm93c2VyIGNvbnRleHRcbiAgICBpZiAobW9kdWxlLmhvdCAmJiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuZG9jdW1lbnQpIHtcbiAgICAgIHZhciByZW1vdmVDc3MgPSBmdW5jdGlvbigpIHt9O1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTctMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzIS4vaW5kZXguY3NzXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICBjc3MgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS03LTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcyEuL2luZGV4LmNzc1wiKTtcbiAgICAgICAgY29udGVudCA9IHR5cGVvZiBjc3MgPT09ICdzdHJpbmcnID8gW1ttb2R1bGUuaWQsIGNzcywgJyddXSA6IGNzcztcbiAgICAgICAgcmVtb3ZlQ3NzID0gaW5zZXJ0Q3NzKGNvbnRlbnQsIHsgcmVwbGFjZTogdHJ1ZSB9KTtcbiAgICAgIH0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyByZW1vdmVDc3MoKTsgfSk7XG4gICAgfVxuICAiLCJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2gsIHNoYWxsb3dFcXVhbCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IFJvb3RTdGF0ZSwgSGVhZGVyU3RhdGUsIFN0YXRpY1JvdXRlckNvbnRleHRFeHRlbmRzIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuaW1wb3J0IHsgYWN0aW9uQ3JlYXRvcnMgfSBmcm9tICcuL3N0b3JlJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9pbmRleC5jc3MnO1xuXG5pbXBvcnQgeyB1c2VXaXRoU3R5bGUgfSBmcm9tICcuLi8uLi9ob29rcyc7XG5cbmludGVyZmFjZSBIZWFkZXJQcm9wcyB7XG4gICAgc3RhdGljQ29udGV4dD86IFN0YXRpY1JvdXRlckNvbnRleHRFeHRlbmRzXG59XG5cbmNvbnN0IEhlYWRlcjogUmVhY3QuRkM8SGVhZGVyUHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICAgIGNvbnN0IGhlYWRlclN0YXRlID0gdXNlU2VsZWN0b3I8Um9vdFN0YXRlLCBIZWFkZXJTdGF0ZT4oc3RhdGUgPT4geyByZXR1cm4gc3RhdGUuaGVhZGVyIH0sIHNoYWxsb3dFcXVhbClcbiAgICBjb25zdCB7IGlzTG9naW4gfSA9IGhlYWRlclN0YXRlXG5cbiAgICB1c2VXaXRoU3R5bGUocHJvcHMsIHN0eWxlcyk7XG5cbiAgICBjb25zdCBoYW5kbGVMb2dpbiA9ICgpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goYWN0aW9uQ3JlYXRvcnMubG9naW4oKSk7XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlTG9nb3V0ID0gKCkgPT4ge1xuICAgICAgICBkaXNwYXRjaChhY3Rpb25DcmVhdG9ycy5sb2dvdXQoKSk7XG4gICAgfVxuXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcl9jb250YWluZXJ9PlxuICAgICAgICAgICAgPExpbmsgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyX2l0ZW19IHRvPScvJz7pppbpobU8L0xpbms+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpc0xvZ2luID9cbiAgICAgICAgICAgICAgICAgICAgPEZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyX2l0ZW19IHRvPScvdHJhbnNsYXRpb24nPue/u+ivkeWIl+ihqDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyX2l0ZW19IG9uQ2xpY2s9e2hhbmRsZUxvZ291dH0+6YCA5Ye6PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgIDogPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJfaXRlbX0gb25DbGljaz17aGFuZGxlTG9naW59PueZu+mZhjwvZGl2PlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAge2Bpc2xvZ2luOiAke2lzTG9naW59YH1cbiAgICAgICAgPC9kaXYgPlxuICAgIClcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjsiLCJpbXBvcnQgeyBEaXNwYXRjaCB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB7IEF4aW9zSW5zdGFuY2UgfSBmcm9tICdheGlvcyc7XG5cbmltcG9ydCB7IENoYW5nZUlzTG9naW5BY3Rpb24gfSBmcm9tICcuLi8uLi8uLi90eXBlcyc7XG5cbmNvbnN0IGNoYW5nZUlzTG9naW5BY3Rpb246IChpc0xvZ2luOiBib29sZWFuKSA9PiBDaGFuZ2VJc0xvZ2luQWN0aW9uID0gKGlzTG9naW4pID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiAnY2hhbmdlX2lzX2xvZ2luJyxcbiAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgaXNMb2dpblxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgZ2V0SGVhZGVySW5mbyA9ICgpID0+IHtcbiAgICByZXR1cm4gKGRpc3BhdGNoOiBEaXNwYXRjaCwgZ2V0U3RhdGU6IGFueSwgYXhpb3NJbnN0YW5jZTogQXhpb3NJbnN0YW5jZSkgPT4ge1xuICAgICAgICByZXR1cm4gYXhpb3NJbnN0YW5jZS5nZXQoJy9hcGkvaXNMb2dpbi5qc29uJylcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXNMb2dpbjogYm9vbGVhbiA9IHJlcy5kYXRhPy5kYXRhLmxvZ2luO1xuICAgICAgICAgICAgICAgIGRpc3BhdGNoKGNoYW5nZUlzTG9naW5BY3Rpb24oaXNMb2dpbikpXG4gICAgICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgICB9KVxuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IGxvZ2luID0gKCkgPT4ge1xuICAgIHJldHVybiAoZGlzcGF0Y2g6IERpc3BhdGNoLCBnZXRTdGF0ZTogYW55LCBheGlvc0luc3RhbmNlOiBBeGlvc0luc3RhbmNlKSA9PiB7XG4gICAgICAgIHJldHVybiBheGlvc0luc3RhbmNlLmdldCgnL2FwaS9sb2dpbi5qc29uJylcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXNMb2dpbjogYm9vbGVhbiA9IHJlcy5kYXRhPy5kYXRhLmxvZ2luO1xuICAgICAgICAgICAgICAgIGRpc3BhdGNoKGNoYW5nZUlzTG9naW5BY3Rpb24oaXNMb2dpbikpXG4gICAgICAgICAgICB9KVxuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IGxvZ291dCA9ICgpID0+IHtcbiAgICByZXR1cm4gKGRpc3BhdGNoOiBEaXNwYXRjaCwgZ2V0U3RhdGU6IGFueSwgYXhpb3NJbnN0YW5jZTogQXhpb3NJbnN0YW5jZSkgPT4ge1xuICAgICAgICByZXR1cm4gYXhpb3NJbnN0YW5jZS5nZXQoJy9hcGkvbG9nb3V0Lmpzb24nKVxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBpc0xvZ291dDogYm9vbGVhbiA9IHJlcy5kYXRhPy5kYXRhLmxvZ291dDtcbiAgICAgICAgICAgICAgICBkaXNwYXRjaChjaGFuZ2VJc0xvZ2luQWN0aW9uKGZhbHNlKSlcbiAgICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICAgIH0pXG4gICAgfVxufSIsImltcG9ydCByZWR1Y2VyIGZyb20gJy4vcmVkdWNlcic7XG5pbXBvcnQgKiBhcyBhY3Rpb25DcmVhdG9ycyBmcm9tICcuL2FjdGlvbkNyZWF0b3JzJztcblxuZXhwb3J0IHtcbiAgICByZWR1Y2VyLFxuICAgIGFjdGlvbkNyZWF0b3JzXG59IiwiaW1wb3J0IHsgQ2hhbmdlSXNMb2dpbkFjdGlvbiwgSGVhZGVyU3RhdGUgfSBmcm9tICcuLi8uLi8uLi90eXBlcyc7XG5cbmNvbnN0IGRlZmF1bHRTdGF0ZTogSGVhZGVyU3RhdGUgPSB7XG4gICAgaXNMb2dpbjogdHJ1ZSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgKHN0YXRlID0gZGVmYXVsdFN0YXRlLCBhY3Rpb246IGFueSkgPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSAnY2hhbmdlX2lzX2xvZ2luJzoge1xuICAgICAgICAgICAgY29uc3QgdGhpc0FjdGlvbjogQ2hhbmdlSXNMb2dpbkFjdGlvbiA9IGFjdGlvbjtcbiAgICAgICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgICAgICBpc0xvZ2luXG4gICAgICAgICAgICB9ID0gdGhpc0FjdGlvbi5wYXlsb2FkO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBpc0xvZ2luXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG59IiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2gsIHNoYWxsb3dFcXVhbCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHsgSGVsbWV0IH0gZnJvbSAncmVhY3QtaGVsbWV0JztcblxuaW1wb3J0IHsgYWN0aW9uQ3JlYXRvcnMgfSBmcm9tICcuL3N0b3JlJ1xuaW1wb3J0IHsgUm9vdFN0YXRlLCBIb21lU3RhdGUgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5pbXBvcnQgeyB1c2VXaXRoU3R5bGUgfSBmcm9tICcuLi8uLi9ob29rcyc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGUuY3NzJztcblxuY29uc3QgSG9tZTogUmVhY3QuRkMgPSAocHJvcHM6IGFueSkgPT4ge1xuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgICBjb25zdCBob21lU3RhdGUgPSB1c2VTZWxlY3RvcjxSb290U3RhdGUsIEhvbWVTdGF0ZT4oc3RhdGUgPT4geyByZXR1cm4gc3RhdGUuaG9tZSB9LCBzaGFsbG93RXF1YWwpO1xuICAgIGNvbnN0IHsgbmFtZSwgbmV3c0xpc3QgfSA9IGhvbWVTdGF0ZTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChuZXdzTGlzdC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIGRpc3BhdGNoKGFjdGlvbkNyZWF0b3JzLmdldEhvbWVMaXN0KCkpO1xuICAgICAgICB9XG4gICAgfSwgW10pO1xuXG4gICAgdXNlV2l0aFN0eWxlKHByb3BzLCBzdHlsZXMpO1xuXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlTmFtZSA9ICgpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goYWN0aW9uQ3JlYXRvcnMuY2hhbmdlTmFtZSgpKVxuICAgIH1cblxuICAgIGNvbnN0IGdldExpc3QgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBuZXdzTGlzdC5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhvbWVfbGlzdEl0ZW19IGtleT17aXRlbS5pZH0+e2Ake2l0ZW0uaWR9ICAke2l0ZW0udGl0bGV9YH08L2Rpdj5cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8RnJhZ21lbnQ+XG4gICAgICAgICAgICA8SGVsbWV0PlxuICAgICAgICAgICAgICAgIDx0aXRsZT5DcmVnc2tpTiDnmoQgc3NyIEhvbWXnlYzpnaI8L3RpdGxlPlxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9J2Rlc2NyaXB0aW9uJyBjb250ZW50PSdDcmVnc2tpTiDnmoQgc3NyIOaWsOmXu+eVjOmdoua/gOWKseWSluWWseWViicgLz5cbiAgICAgICAgICAgIDwvSGVsbWV0PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ob21lX2NvbnRhaW5lcn0gPlxuICAgICAgICAgICAgICAgIHtnZXRMaXN0KCl9XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5ob21lX2J0bn0gb25DbGljaz17aGFuZGxlQ2hhbmdlTmFtZX0+Y2xpY2s8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhvbWVfbmFtZX0+e25hbWV9PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9GcmFnbWVudD5cbiAgICApXG59O1xuXG5leHBvcnQgY29uc3QgbG9hZERhdGEgPSAoc3RvcmU6IFN0b3JlPEhvbWVTdGF0ZSwgYW55PikgPT4ge1xuICAgIHJldHVybiBzdG9yZS5kaXNwYXRjaChhY3Rpb25DcmVhdG9ycy5nZXRIb21lTGlzdCgpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZTsiLCJpbXBvcnQgeyBEaXNwYXRjaCB9IGZyb20gJ3JlZHV4JztcblxuaW1wb3J0IHsgQXhpb3NJbnN0YW5jZSB9IGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IE5ld3NMaXN0SXRlbSwgQ2hhbmdlSG9tZUxpc3RBY3Rpb24sIFJlc3BvbnNlUmVzdWx0IH0gZnJvbSAnLi4vLi4vLi4vdHlwZXMnO1xuXG5cbmV4cG9ydCBjb25zdCBjaGFuZ2VIb21lTGlzdEFjdGlvbiA9IChsaXN0OiBOZXdzTGlzdEl0ZW1bXSkgPT4ge1xuICAgIGNvbnN0IGFjdGlvbjogQ2hhbmdlSG9tZUxpc3RBY3Rpb24gPSB7XG4gICAgICAgIHR5cGU6ICdjaGFuZ2VfaG9tZV9saXN0JyxcbiAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgbGlzdFxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBhY3Rpb247XG59XG5cbi8qKlxuICogYXhpb3MgR0VU5YiX6KGoXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRIb21lTGlzdCA9ICgpID0+IHtcbiAgICByZXR1cm4gKGRpc3BhdGNoOiBEaXNwYXRjaCwgZ2V0U3RhdGU6IGFueSwgYXhpb3NJbnN0YW5jZTogQXhpb3NJbnN0YW5jZSkgPT4ge1xuICAgICAgICByZXR1cm4gYXhpb3NJbnN0YW5jZS5nZXQoJy9hcGkvbmV3cy5qc29uJylcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2VSZXN1bHQ6IFJlc3BvbnNlUmVzdWx0ID0gcmVzLmRhdGE7XG4gICAgICAgICAgICAgICAgY29uc3QgYWN0aW9uID0gY2hhbmdlSG9tZUxpc3RBY3Rpb24ocmVzcG9uc2VSZXN1bHQ/LmRhdGEpO1xuICAgICAgICAgICAgICAgIGRpc3BhdGNoKGFjdGlvbik7XG4gICAgICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdBUEkgZ2VpSG9tZUxpc3Qg5pWw5o2u6I635Y+W5Ye66ZSZJyxlcnIpO1xuICAgICAgICAgICAgfSlcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBjaGFuZ2VOYW1lID0gKCkgPT4ge1xuICAgIHJldHVybiAoZGlzcGF0Y2g6IERpc3BhdGNoKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgIHR5cGU6ICdjaGFuZ2VfbmFtZScsXG4gICAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ2xlZSdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG59IiwiaW1wb3J0IHJlZHVjZXIgZnJvbSAnLi9yZWR1Y2VyJztcbmltcG9ydCAqIGFzIGFjdGlvbkNyZWF0b3JzIGZyb20gJy4vYWN0aW9uQ3JlYXRvcnMnO1xuXG5leHBvcnR7XG4gICAgcmVkdWNlcixcbiAgICBhY3Rpb25DcmVhdG9yc1xufSIsImltcG9ydCB7IEhvbWVTdGF0ZSwgQ2hhbmdlSG9tZUxpc3RBY3Rpb24gfSBmcm9tICcuLi8uLi8uLi90eXBlcyc7XG5cbmNvbnN0IGRlZmF1bHRTdGF0ZTogSG9tZVN0YXRlID0ge1xuICAgIG5hbWU6ICdkZWxsJyxcbiAgICBuZXdzTGlzdDogW10sXG59XG5cbmV4cG9ydCBkZWZhdWx0IChzdGF0ZSA9IGRlZmF1bHRTdGF0ZSwgYWN0aW9uOiBhbnkpID0+IHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgJ2NoYW5nZV9ob21lX2xpc3QnOiB7XG4gICAgICAgICAgICBjb25zdCB0aGlzQWN0aW9uOiBDaGFuZ2VIb21lTGlzdEFjdGlvbiA9IGFjdGlvbjtcbiAgICAgICAgICAgIGNvbnN0IHsgbGlzdCB9ID0gdGhpc0FjdGlvbi5wYXlsb2FkO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBuZXdzTGlzdDogbGlzdFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNhc2UgJ2NoYW5nZV9uYW1lJzoge1xuICAgICAgICAgICAgY29uc3QgeyBuYW1lIH0gPSBhY3Rpb24ucGF5bG9hZDtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgbmFtZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG59XG5cbiIsIlxuICAgIHZhciByZWZzID0gMDtcbiAgICB2YXIgY3NzID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNy0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanMhLi9zdHlsZS5jc3NcIik7XG4gICAgdmFyIGluc2VydENzcyA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2luc2VydENzcy5qc1wiKTtcbiAgICB2YXIgY29udGVudCA9IHR5cGVvZiBjc3MgPT09ICdzdHJpbmcnID8gW1ttb2R1bGUuaWQsIGNzcywgJyddXSA6IGNzcztcblxuICAgIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGNzcy5sb2NhbHMgfHwge307XG4gICAgZXhwb3J0cy5fZ2V0Q29udGVudCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudDsgfTtcbiAgICBleHBvcnRzLl9nZXRDc3MgPSBmdW5jdGlvbigpIHsgcmV0dXJuICcnICsgY3NzOyB9O1xuICAgIGV4cG9ydHMuX2luc2VydENzcyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHsgcmV0dXJuIGluc2VydENzcyhjb250ZW50LCBvcHRpb25zKSB9O1xuXG4gICAgLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuICAgIC8vIGh0dHBzOi8vd2VicGFjay5naXRodWIuaW8vZG9jcy9ob3QtbW9kdWxlLXJlcGxhY2VtZW50XG4gICAgLy8gT25seSBhY3RpdmF0ZWQgaW4gYnJvd3NlciBjb250ZXh0XG4gICAgaWYgKG1vZHVsZS5ob3QgJiYgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmRvY3VtZW50KSB7XG4gICAgICB2YXIgcmVtb3ZlQ3NzID0gZnVuY3Rpb24oKSB7fTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS03LTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcyEuL3N0eWxlLmNzc1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgY3NzID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNy0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanMhLi9zdHlsZS5jc3NcIik7XG4gICAgICAgIGNvbnRlbnQgPSB0eXBlb2YgY3NzID09PSAnc3RyaW5nJyA/IFtbbW9kdWxlLmlkLCBjc3MsICcnXV0gOiBjc3M7XG4gICAgICAgIHJlbW92ZUNzcyA9IGluc2VydENzcyhjb250ZW50LCB7IHJlcGxhY2U6IHRydWUgfSk7XG4gICAgICB9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgcmVtb3ZlQ3NzKCk7IH0pO1xuICAgIH1cbiAgIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJvdXRlQ29tcG9uZW50UHJvcHMgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuXG5pbXBvcnQgeyBTdGF0aWNSb3V0ZXJDb250ZXh0RXh0ZW5kcyB9IGZyb20gJy4uLy4uL3R5cGVzJztcblxuXG5jb25zdCBOb3RGb3VuZDogUmVhY3QuRkM8Um91dGVDb21wb25lbnRQcm9wczxhbnksIFN0YXRpY1JvdXRlckNvbnRleHRFeHRlbmRzLCBhbnk+PiA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IHsgc3RhdGljQ29udGV4dCB9ID0gcHJvcHM7XG4gICAgc3RhdGljQ29udGV4dCAmJiAoc3RhdGljQ29udGV4dC5OT1RfRk9VTkQgPSB0cnVlKTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgc29ycnnvvIzmgqjorr/pl67nmoTpobXpnaLkuI3lrZjlnKhcbiAgICAgICAgPC9kaXY+XG4gICAgKVxufTtcblxuZXhwb3J0IGRlZmF1bHQgTm90Rm91bmQ7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3Rvciwgc2hhbGxvd0VxdWFsIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgU3RvcmUgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgeyBSZWRpcmVjdCB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgSGVsbWV0IH0gZnJvbSAncmVhY3QtaGVsbWV0JztcbmltcG9ydCB7IGFjdGlvbkNyZWF0b3JzIH0gZnJvbSAnLi9zdG9yZSc7XG5pbXBvcnQgeyBUcmFuc2xhdGlvblN0YXRlLCBSb290U3RhdGUgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5pbXBvcnQgeyB1c2VXaXRoU3R5bGUgfSBmcm9tICcuLi8uLi9ob29rcyc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGUuY3NzJztcblxuXG5jb25zdCBUcmFuc2xhdGlvbjogUmVhY3QuRkMgPSAocHJvcHM6IGFueSkgPT4ge1xuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgICBjb25zdCBpc0xvZ2luOiBib29sZWFuID0gdXNlU2VsZWN0b3I8Um9vdFN0YXRlLCBhbnk+KHN0YXRlID0+IHN0YXRlLmhlYWRlci5pc0xvZ2luLCBzaGFsbG93RXF1YWwpO1xuICAgIGNvbnN0IHRyYW5zbGF0aW9uU3RhdGU6IFRyYW5zbGF0aW9uU3RhdGUgPSB1c2VTZWxlY3RvcjxSb290U3RhdGUsIGFueT4oc3RhdGUgPT4geyByZXR1cm4gc3RhdGUudHJhbnNsYXRpb24gfSlcbiAgICBjb25zdCB7IHRyYW5zbGF0aW9uc0xpc3QgfSA9IHRyYW5zbGF0aW9uU3RhdGU7XG5cbiAgICB1c2VXaXRoU3R5bGUocHJvcHMsIHN0eWxlcyk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAodHJhbnNsYXRpb25zTGlzdC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIGRpc3BhdGNoKGFjdGlvbkNyZWF0b3JzLmdldFRyYW5zbGF0aW9uc0xpc3QoKSlcbiAgICAgICAgfVxuICAgIH0sIFtdKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgaXNMb2dpbiA/XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRyYW5zbGF0aW9uX2NvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAgPEhlbG1ldD5cbiAgICAgICAgICAgICAgICAgICAgPHRpdGxlPkNyZWdza2lOIOeahCBzc3IgVHJhbnNsYXRpb27nlYzpnaI8L3RpdGxlPlxuICAgICAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPSdkZXNjcmlwdGlvbicgY29udGVudD0nQ3JlZ3NraU4g55qEIHNzciB0cmFuc2xhdGlvbueVjOmdoua/gOWKseWSluWWseWViicgLz5cbiAgICAgICAgICAgICAgICA8L0hlbG1ldD5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0aW9uc0xpc3QubWFwKGxpc3RJdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRyYW5zbGF0aW9uX2l0ZW19IGtleT17bGlzdEl0ZW0uaWR9PntsaXN0SXRlbS50aXRsZX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7IGNvbnNvbGUubG9nKCdvbiBjbGljaycpIH19PmNsaWNrPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDogPFJlZGlyZWN0IHRvPScvJyAvPlxuICAgIClcbn07XG5cbmV4cG9ydCBjb25zdCBsb2FkRGF0YSA9IChzdG9yZTogU3RvcmU8VHJhbnNsYXRpb25TdGF0ZSwgYW55PikgPT4ge1xuICAgIHJldHVybiBzdG9yZS5kaXNwYXRjaChhY3Rpb25DcmVhdG9ycy5nZXRUcmFuc2xhdGlvbnNMaXN0KCkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBUcmFuc2xhdGlvbjsiLCJpbXBvcnQgeyBEaXNwYXRjaCB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB7IEF4aW9zSW5zdGFuY2UgfSBmcm9tICdheGlvcyc7XG5pbXBvcnQgeyBUcmFuc2xhdGlvbnNMaXN0SXRlbSwgUmVzcG9uc2VSZXN1bHQsIENoYW5nZVRyYW5zbGF0aW9uc0FjdGlvbiB9IGZyb20gJy4uLy4uLy4uL3R5cGVzJztcblxuXG5jb25zdCBjaGFuZ2VUcmFuc2xhdGlvbnNMaXN0QWN0aW9uOiAodHJhbnNsYXRpb25zTGlzdDogVHJhbnNsYXRpb25zTGlzdEl0ZW1bXSkgPT4gQ2hhbmdlVHJhbnNsYXRpb25zQWN0aW9uID0gKHRyYW5zbGF0aW9uc0xpc3QpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiAnZ2V0X3RyYW5zbGF0aW9uc19saXN0JyxcbiAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgdHJhbnNsYXRpb25zTGlzdFxuICAgICAgICB9XG4gICAgfVxufVxuXG5cbmV4cG9ydCBjb25zdCBnZXRUcmFuc2xhdGlvbnNMaXN0ID0gKCkgPT4ge1xuICAgIHJldHVybiAoZGlzcGF0Y2g6IERpc3BhdGNoLCBnZXRTdGF0ZTogYW55LCBheGlvc0luc3RhbmNlOiBBeGlvc0luc3RhbmNlKSA9PiB7XG4gICAgICAgIHJldHVybiBheGlvc0luc3RhbmNlLmdldCgnL2FwaS90cmFuc2xhdGlvbnMuanNvbicpXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlUmVzdWx0OiBSZXNwb25zZVJlc3VsdCA9IHJlcy5kYXRhO1xuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZVJlc3VsdC5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKGNoYW5nZVRyYW5zbGF0aW9uc0xpc3RBY3Rpb24ocmVzcG9uc2VSZXN1bHQuZGF0YSkpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KCfor7flhYjnmbvlvZUnKVxuICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaChjaGFuZ2VUcmFuc2xhdGlvbnNMaXN0QWN0aW9uKFtdKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICAgICAgfSlcbiAgICB9XG59IiwiaW1wb3J0ICogYXMgYWN0aW9uQ3JlYXRvcnMgZnJvbSAnLi9hY3Rpb25DcmVhdG9ycyc7XG5pbXBvcnQgcmVkdWNlciBmcm9tICcuL3JlZHVjZXInO1xuXG5leHBvcnQge1xuICAgIGFjdGlvbkNyZWF0b3JzLFxuICAgIHJlZHVjZXJcbn0iLCJcbmltcG9ydCB7IFRyYW5zbGF0aW9uU3RhdGUsIENoYW5nZVRyYW5zbGF0aW9uc0FjdGlvbiB9IGZyb20gJy4uLy4uLy4uL3R5cGVzJztcblxuY29uc3QgZGVmYXVsdFN0YXRlOiBUcmFuc2xhdGlvblN0YXRlID0ge1xuICAgIHRyYW5zbGF0aW9uc0xpc3Q6IFtdXG59XG5cbmV4cG9ydCBkZWZhdWx0IChzdGF0ZSA9IGRlZmF1bHRTdGF0ZSwgYWN0aW9uOiBhbnkpID0+IHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgJ2dldF90cmFuc2xhdGlvbnNfbGlzdCc6IHtcbiAgICAgICAgICAgIGNvbnN0IHRoaXNBY3Rpb246IENoYW5nZVRyYW5zbGF0aW9uc0FjdGlvbiA9IGFjdGlvbjtcbiAgICAgICAgICAgIGNvbnN0IHsgdHJhbnNsYXRpb25zTGlzdCB9ID0gdGhpc0FjdGlvbi5wYXlsb2FkO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGlvbnNMaXN0XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG59XG5cbiIsIlxuICAgIHZhciByZWZzID0gMDtcbiAgICB2YXIgY3NzID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNy0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanMhLi9zdHlsZS5jc3NcIik7XG4gICAgdmFyIGluc2VydENzcyA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2luc2VydENzcy5qc1wiKTtcbiAgICB2YXIgY29udGVudCA9IHR5cGVvZiBjc3MgPT09ICdzdHJpbmcnID8gW1ttb2R1bGUuaWQsIGNzcywgJyddXSA6IGNzcztcblxuICAgIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGNzcy5sb2NhbHMgfHwge307XG4gICAgZXhwb3J0cy5fZ2V0Q29udGVudCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudDsgfTtcbiAgICBleHBvcnRzLl9nZXRDc3MgPSBmdW5jdGlvbigpIHsgcmV0dXJuICcnICsgY3NzOyB9O1xuICAgIGV4cG9ydHMuX2luc2VydENzcyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHsgcmV0dXJuIGluc2VydENzcyhjb250ZW50LCBvcHRpb25zKSB9O1xuXG4gICAgLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuICAgIC8vIGh0dHBzOi8vd2VicGFjay5naXRodWIuaW8vZG9jcy9ob3QtbW9kdWxlLXJlcGxhY2VtZW50XG4gICAgLy8gT25seSBhY3RpdmF0ZWQgaW4gYnJvd3NlciBjb250ZXh0XG4gICAgaWYgKG1vZHVsZS5ob3QgJiYgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmRvY3VtZW50KSB7XG4gICAgICB2YXIgcmVtb3ZlQ3NzID0gZnVuY3Rpb24oKSB7fTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS03LTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcyEuL3N0eWxlLmNzc1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgY3NzID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNy0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanMhLi9zdHlsZS5jc3NcIik7XG4gICAgICAgIGNvbnRlbnQgPSB0eXBlb2YgY3NzID09PSAnc3RyaW5nJyA/IFtbbW9kdWxlLmlkLCBjc3MsICcnXV0gOiBjc3M7XG4gICAgICAgIHJlbW92ZUNzcyA9IGluc2VydENzcyhjb250ZW50LCB7IHJlcGxhY2U6IHRydWUgfSk7XG4gICAgICB9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgcmVtb3ZlQ3NzKCk7IH0pO1xuICAgIH1cbiAgIiwiZXhwb3J0ICogZnJvbSAnLi91c2VXaXRoU3R5bGUnOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VXaXRoU3R5bGUocHJvcHM6IGFueSwgc3R5bGVzOiBhbnkpIHtcbiAgICBpZihwcm9wcy5zdGF0aWNDb250ZXh0KXtcbiAgICAgICAgcHJvcHMuc3RhdGljQ29udGV4dC5jc3MhLnB1c2goc3R5bGVzLl9nZXRDc3MoKSk7XG4gICAgfVxufSIsImltcG9ydCB7IFJlcXVlc3QsIFJlc3BvbnNlLCBOZXh0RnVuY3Rpb24gfSBmcm9tICdleHByZXNzJztcblxuXG5leHBvcnQgY29uc3QgY2F0Y2hFcnJvciA9ICgpID0+IHtcbiAgICByZXR1cm4gKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSwgbmV4dDogTmV4dEZ1bmN0aW9uKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBuZXh0KCk7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgcmVzLmpzb24oe1xuICAgICAgICAgICAgICAgIG1zZzogJ2Vycm9yJ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgZXhwcmVzcywgeyBSZXF1ZXN0LCBSZXNwb25zZSB9IGZyb20gXCJleHByZXNzXCI7XG5pbXBvcnQgcHJveHkgZnJvbSAnZXhwcmVzcy1odHRwLXByb3h5JztcblxuaW1wb3J0IHsgY2F0Y2hFcnJvciB9IGZyb20gJy4uL21pZGRsZXdhcmVzL2NhdGNoRXJyb3InO1xuaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSAnLi91dGlsJztcbmltcG9ydCB7IGdldFN0b3JlIH0gZnJvbSAnLi4vc3RvcmUnO1xuaW1wb3J0IHsgUm91dGVUeXBlLCBTdGF0aWNSb3V0ZXJDb250ZXh0RXh0ZW5kcyB9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCByb3V0ZXMgZnJvbSAnLi4vUm91dGVzJztcbmltcG9ydCB7IG1hdGNoUm91dGVzIH0gZnJvbSAncmVhY3Qtcm91dGVyLWNvbmZpZyc7XG5cblxuY29uc3QgYXBwID0gZXhwcmVzcygpO1xuXG5hcHAudXNlKGV4cHJlc3Muc3RhdGljKCdwdWJsaWMnKSk7IC8vIOWmguaenOivt+axgumdmeaAgeaWh+S7tu+8jGV4cHJlc3PkvJrku45wdWJsaWPnm67lvZXlr7vmib5cblxuLyoqXG4gKiDlr7kvYXBp5byA5aS055qEaHR0cO+8jOS7o+eQhuWIsGh0dHA6Ly80Ny45NS4xMTMuNjNcbiAqL1xuYXBwLnVzZSgnL2FwaScsIHByb3h5KCdodHRwOi8vbG9jYWxob3N0OjcwMDEnLCB7IFxuXHRwcm94eVJlcVBhdGhSZXNvbHZlcjogZnVuY3Rpb24gKHJlcSkge1xuXHRcdHJldHVybiAnL3Nzci9hcGknICsgcmVxLnVybDtcblx0fVxufSkpO1xuXG4gXG5hcHAuZ2V0KCcqJywgYXN5bmMgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xuXHRjb25zdCBzdG9yZSA9IGdldFN0b3JlKHJlcSk7XG5cdC8vIOi3r+eUseWMuemFjVxuXHRjb25zdCBtYXRjaGVkUm91dGVzID0gbWF0Y2hSb3V0ZXMocm91dGVzLCByZXEucGF0aCk7XG5cblx0Ly8g6K6pbWF0Y2hlZFJvdXRlc+WGheaJgOaciei3r+eUseeahGxvYWREYXRhKOW8guatpeWKoOi9vSnmiafooYzkuIDmrKFcblx0Y29uc3QgcHJvbWlzZXM6IGFueVtdID0gW107XG5cdG1hdGNoZWRSb3V0ZXMuZm9yRWFjaChpdGVtID0+IHtcblx0XHRjb25zdCByb3V0ZTogUm91dGVUeXBlID0gaXRlbS5yb3V0ZTtcblx0XHRpZiAocm91dGUubG9hZERhdGEpIHtcblx0XHRcdHByb21pc2VzLnB1c2gocm91dGUubG9hZERhdGEoc3RvcmUpKTtcblx0XHR9XG5cdH0pXG5cdGF3YWl0IFByb21pc2UuYWxsKHByb21pc2VzKTtcblxuXHRjb25zdCBjb250ZXh0OiBTdGF0aWNSb3V0ZXJDb250ZXh0RXh0ZW5kcyA9IHtcblx0XHROT1RfRk9VTkQ6IGZhbHNlLFxuXHRcdGNzczogW11cblx0fVxuXG5cdGNvbnN0IHNzckhUTUwgPSBhd2FpdCByZW5kZXIocmVxLCBzdG9yZSwgcm91dGVzLCBjb250ZXh0KTtcblxuXHQvLyBjb25zb2xlLmxvZyhjb250ZXh0KTtcblxuXHRpZiAoY29udGV4dC5hY3Rpb24gPT09ICdSRVBMQUNFJykge1xuXHRcdHJlcy5yZWRpcmVjdCgzMDEsIGNvbnRleHQudXJsISk7XG5cdH0gZWxzZSBpZiAoY29udGV4dC5OT1RfRk9VTkQpIHtcblx0XHRyZXMuc3RhdHVzKDQwNCk7XG5cdH1cblxuXHRyZXMuc2VuZChzc3JIVE1MKTtcblxufSk7XG5cbmFwcC51c2UoY2F0Y2hFcnJvcigpKTtcblxuYXBwLmxpc3RlbigzMDAwLCAoKSA9PiB7XG5cdGNvbnNvbGUubG9nKGBsaXN0ZW4gMzAwMC4uLmApO1xufSk7IiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IFJlcXVlc3QgfSBmcm9tICdleHByZXNzJztcblxuaW1wb3J0IGNvbmZpZyBmcm9tICcuLi8uLi9jb25maWcvY29uZmlnJztcblxuY29uc3QgY3JlYXRlSW5zdGFuY2UgPSAocmVxOiBSZXF1ZXN0KSA9PiB7XG4gICAgcmV0dXJuIGF4aW9zLmNyZWF0ZSh7XG4gICAgICAgIGJhc2VVUkw6ICdodHRwOi8vbG9jYWxob3N0OjcwMDEvc3NyJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgY29va2llOiByZXEuZ2V0KCdjb29raWUnKSB8fCAnJ1xuICAgICAgICB9LFxuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgIHNlY3JldDogY29uZmlnLnNlY3JldFxuICAgICAgICB9XG4gICAgfSlcbn1cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUluc3RhbmNlOyIsImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgUmVxdWVzdCB9IGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IHsgcmVuZGVyVG9TdHJpbmcgfSBmcm9tICdyZWFjdC1kb20vc2VydmVyJztcbmltcG9ydCB7IFN0YXRpY1JvdXRlciB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgU3RvcmUgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgeyByZW5kZXJSb3V0ZXMgfSBmcm9tICdyZWFjdC1yb3V0ZXItY29uZmlnJztcbmltcG9ydCB7IEhlbG1ldCB9IGZyb20gJ3JlYWN0LWhlbG1ldCc7XG5cbmltcG9ydCB7IFJvdXRlVHlwZSwgU3RhdGljUm91dGVyQ29udGV4dEV4dGVuZHMgfSBmcm9tICcuLi90eXBlcyc7XG5cbi8qKlxuICogXG4gKiBAcGFyYW0gcmVxIFxuICogQHBhcmFtIHN0b3JlIGdldFN0b3Jl5Yib5bu6XG4gKiBAcGFyYW0gcm91dGVzIFJvdXRlci50c1xuICovXG5hc3luYyBmdW5jdGlvbiByZW5kZXIocmVxOiBSZXF1ZXN0LCBzdG9yZTogU3RvcmUsIHJvdXRlczogUm91dGVUeXBlW10sIGNvbnRleHQ6IFN0YXRpY1JvdXRlckNvbnRleHRFeHRlbmRzKSB7XG5cblx0Y29uc3QgY29udGVudCA9IHJlbmRlclRvU3RyaW5nKFxuXHRcdDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuXHRcdFx0PFN0YXRpY1JvdXRlciBsb2NhdGlvbj17cmVxLnBhdGh9IGNvbnRleHQ9e2NvbnRleHR9PlxuXHRcdFx0XHQ8RnJhZ21lbnQ+XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0Ly8g5LiA57qn6Lev55Sx5riy5p+TXG5cdFx0XHRcdFx0XHRyZW5kZXJSb3V0ZXMocm91dGVzKVxuXHRcdFx0XHRcdFx0Ly8gcm91dGVzLm1hcChyb3V0ZSA9PiB7XG5cdFx0XHRcdFx0XHQvLyBcdHJldHVybiA8Um91dGUgey4uLnJvdXRlfSAvPlxuXHRcdFx0XHRcdFx0Ly8gfSlcblx0XHRcdFx0XHR9XG5cdFx0XHRcdDwvRnJhZ21lbnQ+XG5cdFx0XHQ8L1N0YXRpY1JvdXRlcj5cblx0XHQ8L1Byb3ZpZGVyPlxuXHQpO1xuXG5cdGNvbnN0IGhlbG1ldCA9IEhlbG1ldC5yZW5kZXJTdGF0aWMoKTtcblxuXHRjb25zdCBjc3NTdHIgPSBjb250ZXh0LmNzcz8ubGVuZ3RoID8gY29udGV4dC5jc3Muam9pbignXFxuJykgOiAnJztcblxuXHRjb25zb2xlLmxvZyhjc3NTdHIpO1xuXHRcblxuXG5cdHJldHVybiAoYFxuXHRcdDxodG1sPlxuXHRcdFx0PGhlYWQ+XG5cdFx0XHRcdCR7aGVsbWV0LnRpdGxlLnRvU3RyaW5nKCl9XG5cdFx0XHRcdCR7aGVsbWV0Lm1ldGEudG9TdHJpbmcoKX1cblx0XHRcdFx0PHN0eWxlPiR7Y3NzU3RyfTwvc3R5bGU+XG5cdFx0XHQ8L2hlYWQ+XG5cdFx0XHRcdDxib2R5PlxuXHRcdFx0XHRcdDxkaXYgaWQ9J3Jvb3QnPiR7Y29udGVudH08L2Rpdj5cblx0XHRcdFx0PC9ib2R5PlxuXHRcdFx0XHQ8c2NyaXB0PlxuXHRcdFx0XHRcdHdpbmRvdy5jb250ZXh0ID0ge1xuXHRcdFx0XHRcdFx0c3RhdGU6ICR7SlNPTi5zdHJpbmdpZnkoc3RvcmUuZ2V0U3RhdGUoKSl9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQ8L3NjcmlwdD5cblx0XHRcdDxzY3JpcHQgc3JjPScvaW5kZXguanMnPjwvc2NyaXB0PlxuXHRcdDwvaHRtbD5cbiAgICBgKVxufVxuXG5leHBvcnQge1xuXHRyZW5kZXJcbn0iLCJpbXBvcnQgeyBSZXF1ZXN0IH0gZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgdGh1bmsgZnJvbSAncmVkdXgtdGh1bmsnO1xuaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSwgY29tcG9zZSwgY29tYmluZVJlZHVjZXJzIH0gZnJvbSBcInJlZHV4XCI7XG5cbmltcG9ydCB7IHJlZHVjZXIgYXMgaGVhZGVyUmVkdWNlciB9IGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyL3N0b3JlJztcbmltcG9ydCB7IHJlZHVjZXIgYXMgaG9tZVJlZHVjZXIgfSBmcm9tICcuLi9jb250YWluZXJzL0hvbWUvc3RvcmUnO1xuaW1wb3J0IHsgcmVkdWNlciBhcyB0cmFuc2xhdGlvblJlZHVjZXIgfSBmcm9tICcuLi9jb250YWluZXJzL1RyYW5zbGF0aW9uL3N0b3JlJztcbmltcG9ydCBjbGllbnRBeGlvcyBmcm9tICcuLi9jbGllbnQvcmVxdWlyZSc7XG5pbXBvcnQgc2VydmVyQXhpb3MgZnJvbSAnLi4vc2VydmVyL3JlcXVpcmUnO1xuXG5jb25zdCByZWR1Y2VycyA9IGNvbWJpbmVSZWR1Y2Vycyh7XG4gICAgaGVhZGVyOiBoZWFkZXJSZWR1Y2VyLFxuICAgIGhvbWU6IGhvbWVSZWR1Y2VyLFxuICAgIHRyYW5zbGF0aW9uOiB0cmFuc2xhdGlvblJlZHVjZXJcbn0pXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTdG9yZShyZXE6IFJlcXVlc3QpIHtcbiAgICByZXR1cm4gY3JlYXRlU3RvcmUocmVkdWNlcnMsIGFwcGx5TWlkZGxld2FyZSh0aHVuay53aXRoRXh0cmFBcmd1bWVudChzZXJ2ZXJBeGlvcyhyZXEpKSkpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDbGllbnRTdG9yZSgpIHtcbiAgICBjb25zdCBkZWZhdWx0U3RvcmUgPSAod2luZG93IGFzIGFueSkuY29udGV4dC5zdGF0ZTtcbiAgICBjb25zdCBjb21wb3NlRW5oYW5jZXJzID0gKHdpbmRvdyBhcyBhbnkpLl9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX0NPTVBPU0VfXyB8fCBjb21wb3NlO1xuICAgIHJldHVybiBjcmVhdGVTdG9yZShyZWR1Y2VycywgZGVmYXVsdFN0b3JlLCBjb21wb3NlRW5oYW5jZXJzKFxuICAgICAgICBhcHBseU1pZGRsZXdhcmUodGh1bmsud2l0aEV4dHJhQXJndW1lbnQoY2xpZW50QXhpb3MoKSkpXG4gICAgKSk7XG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUtY29yZWpzMy9jb3JlLWpzLXN0YWJsZS9pbnN0YW5jZS9jb25jYXRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUtY29yZWpzMy9jb3JlLWpzLXN0YWJsZS9pbnN0YW5jZS9maWx0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUtY29yZWpzMy9jb3JlLWpzLXN0YWJsZS9pbnN0YW5jZS9mb3ItZWFjaFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS1jb3JlanMzL2NvcmUtanMtc3RhYmxlL2luc3RhbmNlL21hcFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS1jb3JlanMzL2NvcmUtanMtc3RhYmxlL2pzb24vc3RyaW5naWZ5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lLWNvcmVqczMvY29yZS1qcy1zdGFibGUvb2JqZWN0L2RlZmluZS1wcm9wZXJ0aWVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lLWNvcmVqczMvY29yZS1qcy1zdGFibGUvb2JqZWN0L2RlZmluZS1wcm9wZXJ0eVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS1jb3JlanMzL2NvcmUtanMtc3RhYmxlL29iamVjdC9nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3JcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUtY29yZWpzMy9jb3JlLWpzLXN0YWJsZS9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS1jb3JlanMzL2NvcmUtanMtc3RhYmxlL29iamVjdC9nZXQtb3duLXByb3BlcnR5LXN5bWJvbHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUtY29yZWpzMy9jb3JlLWpzLXN0YWJsZS9vYmplY3Qva2V5c1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS1jb3JlanMzL2NvcmUtanMtc3RhYmxlL3Byb21pc2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUtY29yZWpzMy9oZWxwZXJzL2FzeW5jVG9HZW5lcmF0b3JcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUtY29yZWpzMy9oZWxwZXJzL2RlZmluZVByb3BlcnR5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lLWNvcmVqczMvcmVnZW5lcmF0b3JcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5Lml0ZXJhdG9yXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5qb2luXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvbW9kdWxlcy9lcy5mdW5jdGlvbi5uYW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvbW9kdWxlcy9lcy5vYmplY3QudG8tc3RyaW5nXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvbW9kdWxlcy9lcy5wcm9taXNlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvbW9kdWxlcy9lcy5yZWdleHAudG8tc3RyaW5nXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvbW9kdWxlcy9lcy5zdHJpbmcuaXRlcmF0b3JcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9tb2R1bGVzL3dlYi5kb20tY29sbGVjdGlvbnMuaXRlcmF0b3JcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzLWh0dHAtcHJveHlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZG9tL3NlcnZlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1oZWxtZXRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtcm91dGVyLWNvbmZpZ1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yb3V0ZXItZG9tXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXRodW5rXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZVwiKTsiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDL0VBO0FBQUE7QUFDQTtBQURBO0FBSUE7Ozs7Ozs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQzdGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUM1RkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFPQTtBQUFBO0FBQUE7QUFLQTtBQUVBO0FBQUE7QUFHQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7O0FDL0JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFEQTtBQUlBO0FBckJBO0FBQ0E7QUEwQkE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUMvQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFGQTtBQU1BO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBUUE7QUFDQTs7Ozs7Ozs7Ozs7O0FDdkJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBS0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUN6Q0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFGQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDOUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNDQTtBQUNBO0FBREE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFLQTtBQUVBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQWJBO0FBZUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RCQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFGQTtBQUFBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7QUM5Q0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFGQTtBQU1BO0FBQ0E7QUFFQTs7OztBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUZBO0FBTUE7QUFDQTs7Ozs7Ozs7Ozs7O0FDekNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNDQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBRUE7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUVBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQW5CQTtBQXFCQTs7Ozs7Ozs7Ozs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQVFBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3ZCQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBS0E7QUFBQTtBQUVBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEJBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBSEE7QUFNQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7QUMxQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUZBO0FBTUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUM5QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0VBO0FBQ0E7QUFEQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBRUE7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBWEE7QUFhQTs7Ozs7Ozs7Ozs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQVFBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3ZCQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0VBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNIQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBRUE7QUFDQTtBQUNBOzs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQU9BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWJBO0FBQUE7QUFDQTtBQURBO0FBZUE7QUFDQTtBQUNBO0FBRkE7QUFmQTtBQUFBO0FBQ0E7QUFEQTtBQW9CQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBL0JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQWtDQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDL0RBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQURBO0FBTEE7QUFTQTtBQUNBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEJBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBR0E7Ozs7OztBQU1BOzs7OztBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFJQTtBQUVBO0FBQ0E7QUFOQTtBQWFBO0FBRUE7QUFFQTtBQXRCQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTs7Ozs7Ozs7Ozs7QUMxQkE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==