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
    return axiosInstance.get('/api/isLogin.json?secret=PP87ANTIPIRATE').then(function (res) {
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
      dispatch(changeIsLoginAction(true));
    });
  };
};
var logout = function logout() {
  return function (dispatch, getState, axiosInstance) {
    return axiosInstance.get('/api/logout.json').then(function (res) {
      var _res$data3;

      var isLogout = (_res$data3 = res.data) === null || _res$data3 === void 0 ? void 0 : _res$data3.data.logout;
      dispatch(changeIsLoginAction(false));
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
      console.log(err);
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

        var newState = _objectSpread({}, state, {
          newsList: list
        });

        return newState;
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
  console.log(isLogin);
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

app.use('/api', express_http_proxy__WEBPACK_IMPORTED_MODULE_11___default()('http://47.95.113.63', {
  proxyReqPathResolver: function proxyReqPathResolver(req) {
    return '/ssr/api' + req.url;
  }
}));
app.get('*', /*#__PURE__*/function () {
  var _ref = _babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_9___default()( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee(req, res) {
    var store, matchedRoutes, promises, ssrHTML;
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
            _context.next = 8;
            return Object(_util__WEBPACK_IMPORTED_MODULE_13__["render"])(req, store, _Routes__WEBPACK_IMPORTED_MODULE_15__["default"]);

          case 8:
            ssrHTML = _context.sent;
            res.send(ssrHTML);

          case 10:
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
    baseURL: 'http://47.95.113.63/ssr',
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
function render(_x, _x2, _x3) {
  return _render.apply(this, arguments);
}

function _render() {
  _render = _babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default()( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(req, store, routes) {
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
              context: {}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy8uL2NvbmZpZy9jb25maWcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL1JvdXRlcy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9yZXF1aXJlLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0hlYWRlci9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL3N0b3JlL2FjdGlvbkNyZWF0b3JzLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0hlYWRlci9zdG9yZS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvc3RvcmUvcmVkdWNlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9Ib21lL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9Ib21lL3N0b3JlL2FjdGlvbkNyZWF0b3JzLnRzIiwid2VicGFjazovLy8uL3NyYy9jb250YWluZXJzL0hvbWUvc3RvcmUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRhaW5lcnMvSG9tZS9zdG9yZS9yZWR1Y2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9jb250YWluZXJzL1RyYW5zbGF0aW9uL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9UcmFuc2xhdGlvbi9zdG9yZS9hY3Rpb25DcmVhdG9ycy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9UcmFuc2xhdGlvbi9zdG9yZS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9UcmFuc2xhdGlvbi9zdG9yZS9yZWR1Y2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9taWRkbGV3YXJlcy9jYXRjaEVycm9yLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2ZXIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci9yZXF1aXJlLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2ZXIvdXRpbC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlL2luZGV4LnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBiYWJlbC9ydW50aW1lLWNvcmVqczMvY29yZS1qcy1zdGFibGUvaW5zdGFuY2UvY29uY2F0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGJhYmVsL3J1bnRpbWUtY29yZWpzMy9jb3JlLWpzLXN0YWJsZS9pbnN0YW5jZS9maWx0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYmFiZWwvcnVudGltZS1jb3JlanMzL2NvcmUtanMtc3RhYmxlL2luc3RhbmNlL2Zvci1lYWNoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGJhYmVsL3J1bnRpbWUtY29yZWpzMy9jb3JlLWpzLXN0YWJsZS9pbnN0YW5jZS9tYXBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYmFiZWwvcnVudGltZS1jb3JlanMzL2NvcmUtanMtc3RhYmxlL2pzb24vc3RyaW5naWZ5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGJhYmVsL3J1bnRpbWUtY29yZWpzMy9jb3JlLWpzLXN0YWJsZS9vYmplY3QvZGVmaW5lLXByb3BlcnRpZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYmFiZWwvcnVudGltZS1jb3JlanMzL2NvcmUtanMtc3RhYmxlL29iamVjdC9kZWZpbmUtcHJvcGVydHlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYmFiZWwvcnVudGltZS1jb3JlanMzL2NvcmUtanMtc3RhYmxlL29iamVjdC9nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3JcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYmFiZWwvcnVudGltZS1jb3JlanMzL2NvcmUtanMtc3RhYmxlL29iamVjdC9nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3JzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGJhYmVsL3J1bnRpbWUtY29yZWpzMy9jb3JlLWpzLXN0YWJsZS9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1zeW1ib2xzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGJhYmVsL3J1bnRpbWUtY29yZWpzMy9jb3JlLWpzLXN0YWJsZS9vYmplY3Qva2V5c1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBiYWJlbC9ydW50aW1lLWNvcmVqczMvY29yZS1qcy1zdGFibGUvcHJvbWlzZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBiYWJlbC9ydW50aW1lLWNvcmVqczMvaGVscGVycy9hc3luY1RvR2VuZXJhdG9yXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGJhYmVsL3J1bnRpbWUtY29yZWpzMy9oZWxwZXJzL2RlZmluZVByb3BlcnR5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGJhYmVsL3J1bnRpbWUtY29yZWpzMy9yZWdlbmVyYXRvclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5Lml0ZXJhdG9yXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yZS1qcy9tb2R1bGVzL2VzLmZ1bmN0aW9uLm5hbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL21vZHVsZXMvZXMub2JqZWN0LnRvLXN0cmluZ1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcmUtanMvbW9kdWxlcy9lcy5wcm9taXNlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yZS1qcy9tb2R1bGVzL2VzLnN0cmluZy5pdGVyYXRvclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcmUtanMvbW9kdWxlcy93ZWIuZG9tLWNvbGxlY3Rpb25zLml0ZXJhdG9yXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXhwcmVzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3MtaHR0cC1wcm94eVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtZG9tL3NlcnZlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtcm91dGVyLWNvbmZpZ1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJvdXRlci1kb21cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXRodW5rXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lXCIiXSwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvc2VydmVyL2luZGV4LnRzXCIpO1xuIiwiaW50ZXJmYWNlIENvbmZpZyB7XG4gICAgc2VjcmV0OiBzdHJpbmc7XG59XG5jb25zdCBjb25maWc6IENvbmZpZyA9IHtcbiAgICBzZWNyZXQ6ICdQUDg3QU5USVBJUkFURSdcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29uZmlnOyIsImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHsgcmVuZGVyUm91dGVzLCBSb3V0ZUNvbmZpZyB9IGZyb20gJ3JlYWN0LXJvdXRlci1jb25maWcnO1xuXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vY29tcG9uZW50cy9IZWFkZXIvJztcbmltcG9ydCB7IGFjdGlvbkNyZWF0b3JzIH0gZnJvbSAnLi9jb21wb25lbnRzL0hlYWRlci9zdG9yZSc7XG5pbXBvcnQgeyBIZWFkZXJTdGF0ZSB9IGZyb20gJy4vdHlwZXMnO1xuXG5pbnRlcmZhY2UgQXBwUHJvcHMgZXh0ZW5kcyBSb3V0ZUNvbmZpZyB7XG4gICAgcm91dGU/OiBSb3V0ZUNvbmZpZ1xufVxuXG5jb25zdCBBcHA6IFJlYWN0LkZDPEFwcFByb3BzPiA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgICAgcm91dGVcbiAgICB9ID0gcHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPEZyYWdtZW50PlxuICAgICAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIC8vIOS6jOe6p+i3r+eUsea4suafk1xuICAgICAgICAgICAgICAgIHJlbmRlclJvdXRlcyhyb3V0ZT8ucm91dGVzKVxuICAgICAgICAgICAgfVxuICAgICAgICA8L0ZyYWdtZW50PlxuICAgIClcbn07XG5cbmV4cG9ydCBjb25zdCBsb2FkRGF0YSA9IChzdG9yZTogU3RvcmU8SGVhZGVyU3RhdGUsIGFueT4pID0+IHtcbiAgIHJldHVybiBzdG9yZS5kaXNwYXRjaChhY3Rpb25DcmVhdG9ycy5nZXRIZWFkZXJJbmZvKCkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7IiwiaW1wb3J0IHsgUm91dGVDb25maWcgfSBmcm9tICdyZWFjdC1yb3V0ZXItY29uZmlnJztcblxuaW1wb3J0IEFwcCwgeyBsb2FkRGF0YSBhcyBhcHBMb2FkRGF0YSB9IGZyb20gJy4vQXBwJztcbmltcG9ydCBIb21lLCB7IGxvYWREYXRhIGFzIGhvbWVMb2FkRGF0YSB9IGZyb20gJy4vY29udGFpbmVycy9Ib21lL2luZGV4JztcbmltcG9ydCBUcmFuc2xhdGlvbiwgeyBsb2FkRGF0YSBhcyB0cmFuc2xhdGlvbkxvYWREYXRhIH0gZnJvbSAnLi9jb250YWluZXJzL1RyYW5zbGF0aW9uL2luZGV4JztcblxuXG4vKipcbiAqIOWkmue6p+i3r+eUseeahOWGmeazlVxuICovXG5cbmNvbnN0IHJvdXRlczogUm91dGVDb25maWdbXSA9IFt7XG4gICAgcGF0aDogJy8nLFxuICAgIGNvbXBvbmVudDogQXBwLCAvLyDmraTlpITmnInnsbvlnovlkI3np7Dlhbzlrrnpl67popgg5LiN5YW85a65UmVhY3QuRkPvvIzlrp7pmYXkuIrkuozogIXnm7jlkIxcbiAgICBsb2FkRGF0YTogYXBwTG9hZERhdGEsXG4gICAgcm91dGVzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIHBhdGg6ICcvJyxcbiAgICAgICAgICAgIGNvbXBvbmVudDogSG9tZSxcbiAgICAgICAgICAgIGV4YWN0OiB0cnVlLFxuICAgICAgICAgICAgbG9hZERhdGE6IGhvbWVMb2FkRGF0YSxcbiAgICAgICAgICAgIGtleTogJ2hvbWUnLFxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBwYXRoOiAnL3RyYW5zbGF0aW9uJyxcbiAgICAgICAgICAgIGNvbXBvbmVudDogVHJhbnNsYXRpb24sXG4gICAgICAgICAgICBleGFjdDogdHJ1ZSxcbiAgICAgICAgICAgIGxvYWREYXRhOiB0cmFuc2xhdGlvbkxvYWREYXRhLFxuICAgICAgICAgICAga2V5OiAnbG9naW4nLFxuICAgICAgICB9XG4gICAgXSxcbiAgICBrZXk6ICdBcHAnXG59XTtcblxuXG4vLyBjb25zdCByb3V0ZXM6IFJvdXRlQ29uZmlnW10gPSBcblxuZXhwb3J0IGRlZmF1bHQgcm91dGVzO1xuXG5cblxuLy8gZXhwb3J0IGRlZmF1bHQgKFxuLy8gICAgIDxGcmFnbWVudD5cbi8vICAgICAgICAgPFJvdXRlIHBhdGg9Jy8nIGV4YWN0IGNvbXBvbmVudD17SG9tZX0gLz5cbi8vICAgICAgICAgPFJvdXRlIHBhdGg9Jy9sb2dpbicgZXhhY3QgY29tcG9uZW50PXtMb2dpbn0gLz5cbi8vICAgICA8L0ZyYWdtZW50PlxuLy8gKSIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgY29uZmlnIGZyb20gJy4uLy4uL2NvbmZpZy9jb25maWcnO1xuXG5jb25zdCBjcmVhdGVJbnN0YW5jZSA9ICgpID0+IHtcbiAgICByZXR1cm4gYXhpb3MuY3JlYXRlKHtcbiAgICAgICAgYmFzZVVSTDogJy8nLFxuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgIHNlY3JldDogY29uZmlnLnNlY3JldFxuICAgICAgICB9XG4gICAgfSlcbn1cblxuXG5cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlSW5zdGFuY2U7IiwiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoLCBzaGFsbG93RXF1YWwgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBSb290U3RhdGUsIEhlYWRlclN0YXRlIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuaW1wb3J0IHsgYWN0aW9uQ3JlYXRvcnMgfSBmcm9tICcuL3N0b3JlJztcbi8vIGltcG9ydCAnLi9pbmRleC5jc3MnO1xuXG5jb25zdCBIZWFkZXI6IFJlYWN0LkZDID0gKCkgPT4ge1xuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgICBjb25zdCBoZWFkZXJTdGF0ZSA9IHVzZVNlbGVjdG9yPFJvb3RTdGF0ZSwgSGVhZGVyU3RhdGU+KHN0YXRlID0+IHsgcmV0dXJuIHN0YXRlLmhlYWRlciB9LCBzaGFsbG93RXF1YWwpXG5cbiAgICBjb25zdCB7XG4gICAgICAgIGlzTG9naW4sXG4gICAgfSA9IGhlYWRlclN0YXRlXG5cbiAgICBjb25zdCBoYW5kbGVMb2dpbiA9ICgpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goYWN0aW9uQ3JlYXRvcnMubG9naW4oKSk7XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlTG9nb3V0ID0gKCkgPT4ge1xuICAgICAgICBkaXNwYXRjaChhY3Rpb25DcmVhdG9ycy5sb2dvdXQoKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxMaW5rIHRvPScvJz7pppbpobU8L0xpbms+XG4gICAgICAgICAgICB7YGlzbG9naW46ICR7aXNMb2dpbn1gfVxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaXNMb2dpbiA/XG4gICAgICAgICAgICAgICAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPScvdHJhbnNsYXRpb24nPue/u+ivkeWIl+ihqDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NsaWNrJyBvbkNsaWNrPXtoYW5kbGVMb2dvdXR9PumAgOWHujwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L0ZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICA6IDxkaXYgY2xhc3NOYW1lPSdjbGljaycgb25DbGljaz17aGFuZGxlTG9naW59PueZu+mZhjwvZGl2PlxuICAgICAgICAgICAgfVxuICAgICAgICA8L2RpdiA+XG4gICAgKVxufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyOyIsImltcG9ydCB7IERpc3BhdGNoIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHsgQXhpb3NJbnN0YW5jZSB9IGZyb20gJ2F4aW9zJztcblxuaW1wb3J0IHsgQ2hhbmdlSXNMb2dpbkFjdGlvbiB9IGZyb20gJy4uLy4uLy4uL3R5cGVzJztcblxuY29uc3QgY2hhbmdlSXNMb2dpbkFjdGlvbjogKGlzTG9naW46IGJvb2xlYW4pID0+IENoYW5nZUlzTG9naW5BY3Rpb24gPSAoaXNMb2dpbikgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6ICdjaGFuZ2VfaXNfbG9naW4nLFxuICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICBpc0xvZ2luXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBnZXRIZWFkZXJJbmZvID0gKCkgPT4ge1xuICAgIHJldHVybiAoZGlzcGF0Y2g6IERpc3BhdGNoLCBnZXRTdGF0ZTogYW55LCBheGlvc0luc3RhbmNlOiBBeGlvc0luc3RhbmNlKSA9PiB7XG4gICAgICAgIHJldHVybiBheGlvc0luc3RhbmNlLmdldCgnL2FwaS9pc0xvZ2luLmpzb24/c2VjcmV0PVBQODdBTlRJUElSQVRFJylcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXNMb2dpbjogYm9vbGVhbiA9IHJlcy5kYXRhPy5kYXRhLmxvZ2luO1xuICAgICAgICAgICAgICAgIGRpc3BhdGNoKGNoYW5nZUlzTG9naW5BY3Rpb24oaXNMb2dpbikpXG4gICAgICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgICB9KVxuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IGxvZ2luID0gKCkgPT4ge1xuICAgIHJldHVybiAoZGlzcGF0Y2g6IERpc3BhdGNoLCBnZXRTdGF0ZTogYW55LCBheGlvc0luc3RhbmNlOiBBeGlvc0luc3RhbmNlKSA9PiB7XG4gICAgICAgIHJldHVybiBheGlvc0luc3RhbmNlLmdldCgnL2FwaS9sb2dpbi5qc29uJylcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXNMb2dpbjogYm9vbGVhbiA9IHJlcy5kYXRhPy5kYXRhLmxvZ2luO1xuICAgICAgICAgICAgICAgIGRpc3BhdGNoKGNoYW5nZUlzTG9naW5BY3Rpb24odHJ1ZSkpXG4gICAgICAgICAgICB9KVxuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IGxvZ291dCA9ICgpID0+IHtcbiAgICByZXR1cm4gKGRpc3BhdGNoOiBEaXNwYXRjaCwgZ2V0U3RhdGU6IGFueSwgYXhpb3NJbnN0YW5jZTogQXhpb3NJbnN0YW5jZSkgPT4ge1xuICAgICAgICByZXR1cm4gYXhpb3NJbnN0YW5jZS5nZXQoJy9hcGkvbG9nb3V0Lmpzb24nKVxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBpc0xvZ291dDogYm9vbGVhbiA9IHJlcy5kYXRhPy5kYXRhLmxvZ291dDtcbiAgICAgICAgICAgICAgICBkaXNwYXRjaChjaGFuZ2VJc0xvZ2luQWN0aW9uKGZhbHNlKSlcbiAgICAgICAgICAgIH0pXG4gICAgfVxufSIsImltcG9ydCByZWR1Y2VyIGZyb20gJy4vcmVkdWNlcic7XG5pbXBvcnQgKiBhcyBhY3Rpb25DcmVhdG9ycyBmcm9tICcuL2FjdGlvbkNyZWF0b3JzJztcblxuZXhwb3J0IHtcbiAgICByZWR1Y2VyLFxuICAgIGFjdGlvbkNyZWF0b3JzXG59IiwiaW1wb3J0IHsgQ2hhbmdlSXNMb2dpbkFjdGlvbiwgSGVhZGVyU3RhdGUgfSBmcm9tICcuLi8uLi8uLi90eXBlcyc7XG5cbmNvbnN0IGRlZmF1bHRTdGF0ZTogSGVhZGVyU3RhdGUgPSB7XG4gICAgaXNMb2dpbjogdHJ1ZSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgKHN0YXRlID0gZGVmYXVsdFN0YXRlLCBhY3Rpb246IGFueSkgPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSAnY2hhbmdlX2lzX2xvZ2luJzoge1xuICAgICAgICAgICAgY29uc3QgdGhpc0FjdGlvbjogQ2hhbmdlSXNMb2dpbkFjdGlvbiA9IGFjdGlvbjtcbiAgICAgICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgICAgICBpc0xvZ2luXG4gICAgICAgICAgICB9ID0gdGhpc0FjdGlvbi5wYXlsb2FkO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBpc0xvZ2luXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG59IiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCxzaGFsbG93RXF1YWwgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gJ3JlZHV4JztcblxuaW1wb3J0IHsgYWN0aW9uQ3JlYXRvcnMgfSBmcm9tICcuL3N0b3JlJ1xuaW1wb3J0IHsgUm9vdFN0YXRlLCBIb21lU3RhdGUsSGVhZGVyU3RhdGUgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5cblxuY29uc3QgSG9tZTogUmVhY3QuRkMgPSAoKSA9PiB7XG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICAgIGNvbnN0IGhvbWVTdGF0ZSA9IHVzZVNlbGVjdG9yPFJvb3RTdGF0ZSwgSG9tZVN0YXRlPihzdGF0ZSA9PiB7IHJldHVybiBzdGF0ZS5ob21lIH0sc2hhbGxvd0VxdWFsKTtcbiAgICBjb25zdCB7XG4gICAgICAgIG5hbWUsXG4gICAgICAgIG5ld3NMaXN0XG4gICAgfSA9IGhvbWVTdGF0ZTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChuZXdzTGlzdC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIGRpc3BhdGNoKGFjdGlvbkNyZWF0b3JzLmdldEhvbWVMaXN0KCkpO1xuICAgICAgICB9XG4gICAgfSwgW10pO1xuXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlTmFtZSA9ICgpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goYWN0aW9uQ3JlYXRvcnMuY2hhbmdlTmFtZSgpKVxuICAgIH1cblxuXG4gICAgY29uc3QgZ2V0TGlzdCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIG5ld3NMaXN0Lm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIDxkaXYga2V5PXtpdGVtLmlkfT57YCR7aXRlbS5pZH0gICR7aXRlbS50aXRsZX1gfTwvZGl2PlxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9e2hhbmRsZUNoYW5nZU5hbWV9PntuYW1lfTwvZGl2PlxuICAgICAgICAgICAge2dldExpc3QoKX1cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4geyBjb25zb2xlLmxvZygnb24gY2xpY2snKSB9fT5jbGljazwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59O1xuXG5leHBvcnQgY29uc3QgbG9hZERhdGEgPSAoc3RvcmU6IFN0b3JlPEhvbWVTdGF0ZSwgYW55PikgPT4ge1xuICAgIHJldHVybiBzdG9yZS5kaXNwYXRjaChhY3Rpb25DcmVhdG9ycy5nZXRIb21lTGlzdCgpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZTsiLCJpbXBvcnQgeyBEaXNwYXRjaCB9IGZyb20gJ3JlZHV4JztcblxuaW1wb3J0IHsgQXhpb3NJbnN0YW5jZSB9IGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IE5ld3NMaXN0SXRlbSwgQ2hhbmdlSG9tZUxpc3RBY3Rpb24sIFJlc3BvbnNlUmVzdWx0IH0gZnJvbSAnLi4vLi4vLi4vdHlwZXMnO1xuXG5cbmV4cG9ydCBjb25zdCBjaGFuZ2VIb21lTGlzdEFjdGlvbiA9IChsaXN0OiBOZXdzTGlzdEl0ZW1bXSkgPT4ge1xuICAgIGNvbnN0IGFjdGlvbjogQ2hhbmdlSG9tZUxpc3RBY3Rpb24gPSB7XG4gICAgICAgIHR5cGU6ICdjaGFuZ2VfaG9tZV9saXN0JyxcbiAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgbGlzdFxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBhY3Rpb247XG59XG5cbi8qKlxuICogYXhpb3MgR0VU5YiX6KGoXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRIb21lTGlzdCA9ICgpID0+IHtcbiAgICByZXR1cm4gKGRpc3BhdGNoOiBEaXNwYXRjaCwgZ2V0U3RhdGU6IGFueSwgYXhpb3NJbnN0YW5jZTogQXhpb3NJbnN0YW5jZSkgPT4ge1xuICAgICAgICByZXR1cm4gYXhpb3NJbnN0YW5jZS5nZXQoJy9hcGkvbmV3cy5qc29uJylcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2VSZXN1bHQ6IFJlc3BvbnNlUmVzdWx0ID0gcmVzLmRhdGE7XG4gICAgICAgICAgICAgICAgY29uc3QgYWN0aW9uID0gY2hhbmdlSG9tZUxpc3RBY3Rpb24ocmVzcG9uc2VSZXN1bHQ/LmRhdGEpO1xuICAgICAgICAgICAgICAgIGRpc3BhdGNoKGFjdGlvbik7XG4gICAgICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgICB9KVxuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IGNoYW5nZU5hbWUgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChkaXNwYXRjaDogRGlzcGF0Y2gpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgdHlwZTogJ2NoYW5nZV9uYW1lJyxcbiAgICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnbGVlJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cbn0iLCJpbXBvcnQgcmVkdWNlciBmcm9tICcuL3JlZHVjZXInO1xuaW1wb3J0ICogYXMgYWN0aW9uQ3JlYXRvcnMgZnJvbSAnLi9hY3Rpb25DcmVhdG9ycyc7XG5cbmV4cG9ydHtcbiAgICByZWR1Y2VyLFxuICAgIGFjdGlvbkNyZWF0b3JzXG59IiwiaW1wb3J0IHsgSG9tZVN0YXRlLCBDaGFuZ2VIb21lTGlzdEFjdGlvbiB9IGZyb20gJy4uLy4uLy4uL3R5cGVzJztcblxuY29uc3QgZGVmYXVsdFN0YXRlOiBIb21lU3RhdGUgPSB7XG4gICAgbmFtZTogJ2RlbGwnLFxuICAgIG5ld3NMaXN0OiBbXSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgKHN0YXRlID0gZGVmYXVsdFN0YXRlLCBhY3Rpb246IGFueSkgPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSAnY2hhbmdlX2hvbWVfbGlzdCc6IHtcbiAgICAgICAgICAgIGNvbnN0IHRoaXNBY3Rpb246IENoYW5nZUhvbWVMaXN0QWN0aW9uID0gYWN0aW9uO1xuICAgICAgICAgICAgY29uc3QgeyBsaXN0IH0gPSB0aGlzQWN0aW9uLnBheWxvYWQ7XG5cbiAgICAgICAgICAgIGNvbnN0IG5ld1N0YXRlID0ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIG5ld3NMaXN0OiBsaXN0XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbmV3U3RhdGU7XG4gICAgICAgIH1cblxuICAgICAgICBjYXNlICdjaGFuZ2VfbmFtZSc6IHtcbiAgICAgICAgICAgIGNvbnN0IHsgbmFtZSB9ID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIG5hbWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxufVxuXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgYWN0aW9uQ3JlYXRvcnMgfSBmcm9tICcuL3N0b3JlJztcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3Rvciwgc2hhbGxvd0VxdWFsIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgVHJhbnNsYXRpb25TdGF0ZSwgUm9vdFN0YXRlIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuaW1wb3J0IHsgU3RvcmUgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgeyBSZWRpcmVjdCB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuXG5cbmNvbnN0IFRyYW5zbGF0aW9uOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gICAgY29uc3QgaXNMb2dpbjogYm9vbGVhbiA9IHVzZVNlbGVjdG9yPFJvb3RTdGF0ZSwgYW55PihzdGF0ZSA9PiBzdGF0ZS5oZWFkZXIuaXNMb2dpbik7XG4gICAgY29uc3QgdHJhbnNsYXRpb25TdGF0ZTogVHJhbnNsYXRpb25TdGF0ZSA9IHVzZVNlbGVjdG9yPFJvb3RTdGF0ZSwgYW55PihzdGF0ZSA9PiB7IHJldHVybiBzdGF0ZS50cmFuc2xhdGlvbiB9KVxuICAgIGNvbnN0IHtcbiAgICAgICAgdHJhbnNsYXRpb25zTGlzdFxuICAgIH0gPSB0cmFuc2xhdGlvblN0YXRlO1xuXG4gICAgY29uc29sZS5sb2coaXNMb2dpbik7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAodHJhbnNsYXRpb25zTGlzdC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIGRpc3BhdGNoKGFjdGlvbkNyZWF0b3JzLmdldFRyYW5zbGF0aW9uc0xpc3QoKSlcbiAgICAgICAgfVxuXG4gICAgfSwgW10pXG5cbiAgICByZXR1cm4gKFxuICAgICAgICBpc0xvZ2luID9cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGlvbnNMaXN0Lm1hcChsaXN0SXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGRpdiBrZXk9e2xpc3RJdGVtLmlkfT57bGlzdEl0ZW0udGl0bGV9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4geyBjb25zb2xlLmxvZygnb24gY2xpY2snKSB9fT5jbGljazwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA6IDxSZWRpcmVjdCB0bz0nLycgLz5cbiAgICApXG59O1xuXG5leHBvcnQgY29uc3QgbG9hZERhdGEgPSAoc3RvcmU6IFN0b3JlPFRyYW5zbGF0aW9uU3RhdGUsIGFueT4pID0+IHtcbiAgICByZXR1cm4gc3RvcmUuZGlzcGF0Y2goYWN0aW9uQ3JlYXRvcnMuZ2V0VHJhbnNsYXRpb25zTGlzdCgpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgVHJhbnNsYXRpb247IiwiaW1wb3J0IHsgRGlzcGF0Y2ggfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgeyBBeGlvc0luc3RhbmNlIH0gZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHsgVHJhbnNsYXRpb25zTGlzdEl0ZW0sIFJlc3BvbnNlUmVzdWx0LCBDaGFuZ2VUcmFuc2xhdGlvbnNBY3Rpb24gfSBmcm9tICcuLi8uLi8uLi90eXBlcyc7XG5cblxuY29uc3QgY2hhbmdlVHJhbnNsYXRpb25zTGlzdEFjdGlvbjogKHRyYW5zbGF0aW9uc0xpc3Q6IFRyYW5zbGF0aW9uc0xpc3RJdGVtW10pID0+IENoYW5nZVRyYW5zbGF0aW9uc0FjdGlvbiA9ICh0cmFuc2xhdGlvbnNMaXN0KSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogJ2dldF90cmFuc2xhdGlvbnNfbGlzdCcsXG4gICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgIHRyYW5zbGF0aW9uc0xpc3RcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5leHBvcnQgY29uc3QgZ2V0VHJhbnNsYXRpb25zTGlzdCA9ICgpID0+IHtcbiAgICByZXR1cm4gKGRpc3BhdGNoOiBEaXNwYXRjaCwgZ2V0U3RhdGU6IGFueSwgYXhpb3NJbnN0YW5jZTogQXhpb3NJbnN0YW5jZSkgPT4ge1xuICAgICAgICByZXR1cm4gYXhpb3NJbnN0YW5jZS5nZXQoJy9hcGkvdHJhbnNsYXRpb25zLmpzb24nKVxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZVJlc3VsdDogUmVzcG9uc2VSZXN1bHQgPSByZXMuZGF0YTtcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2VSZXN1bHQuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaChjaGFuZ2VUcmFuc2xhdGlvbnNMaXN0QWN0aW9uKHJlc3BvbnNlUmVzdWx0LmRhdGEpKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBhbGVydCgn6K+35YWI55m75b2VJylcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goY2hhbmdlVHJhbnNsYXRpb25zTGlzdEFjdGlvbihbXSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICAgIH0pXG4gICAgfVxufSIsImltcG9ydCAqIGFzIGFjdGlvbkNyZWF0b3JzIGZyb20gJy4vYWN0aW9uQ3JlYXRvcnMnO1xuaW1wb3J0IHJlZHVjZXIgZnJvbSAnLi9yZWR1Y2VyJztcblxuZXhwb3J0IHtcbiAgICBhY3Rpb25DcmVhdG9ycyxcbiAgICByZWR1Y2VyXG59IiwiXG5pbXBvcnQgeyBUcmFuc2xhdGlvblN0YXRlLCBDaGFuZ2VUcmFuc2xhdGlvbnNBY3Rpb24gfSBmcm9tICcuLi8uLi8uLi90eXBlcyc7XG5cbmNvbnN0IGRlZmF1bHRTdGF0ZTogVHJhbnNsYXRpb25TdGF0ZSA9IHtcbiAgICB0cmFuc2xhdGlvbnNMaXN0OiBbXVxufVxuXG5leHBvcnQgZGVmYXVsdCAoc3RhdGUgPSBkZWZhdWx0U3RhdGUsIGFjdGlvbjogYW55KSA9PiB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlICdnZXRfdHJhbnNsYXRpb25zX2xpc3QnOiB7XG4gICAgICAgICAgICBjb25zdCB0aGlzQWN0aW9uOiBDaGFuZ2VUcmFuc2xhdGlvbnNBY3Rpb24gPSBhY3Rpb247XG4gICAgICAgICAgICBjb25zdCB7IHRyYW5zbGF0aW9uc0xpc3QgfSA9IHRoaXNBY3Rpb24ucGF5bG9hZDtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgdHJhbnNsYXRpb25zTGlzdFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxufVxuXG4iLCJpbXBvcnQgeyBSZXF1ZXN0LCBSZXNwb25zZSwgTmV4dEZ1bmN0aW9uIH0gZnJvbSAnZXhwcmVzcyc7XG5cblxuZXhwb3J0IGNvbnN0IGNhdGNoRXJyb3IgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UsIG5leHQ6IE5leHRGdW5jdGlvbikgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgbmV4dCgpO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIHJlcy5qc29uKHtcbiAgICAgICAgICAgICAgICBtc2c6ICdlcnJvcidcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IGV4cHJlc3MsIHsgUmVxdWVzdCwgUmVzcG9uc2UgfSBmcm9tIFwiZXhwcmVzc1wiO1xuaW1wb3J0IHByb3h5IGZyb20gJ2V4cHJlc3MtaHR0cC1wcm94eSc7XG5cbmltcG9ydCB7IGNhdGNoRXJyb3IgfSBmcm9tICcuLi9taWRkbGV3YXJlcy9jYXRjaEVycm9yJztcbmltcG9ydCB7IHJlbmRlciB9IGZyb20gJy4vdXRpbCc7XG5pbXBvcnQgeyBnZXRTdG9yZSB9IGZyb20gJy4uL3N0b3JlJztcbmltcG9ydCB7IFJvdXRlVHlwZSB9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCByb3V0ZXMgZnJvbSAnLi4vUm91dGVzJztcbmltcG9ydCB7IG1hdGNoUm91dGVzIH0gZnJvbSAncmVhY3Qtcm91dGVyLWNvbmZpZyc7XG5cblxuY29uc3QgYXBwID0gZXhwcmVzcygpO1xuXG5hcHAudXNlKGV4cHJlc3Muc3RhdGljKCdwdWJsaWMnKSk7IC8vIOWmguaenOivt+axgumdmeaAgeaWh+S7tu+8jGV4cHJlc3PkvJrku45wdWJsaWPnm67lvZXlr7vmib5cblxuLyoqXG4gKiDlr7kvYXBp5byA5aS055qEaHR0cO+8jOS7o+eQhuWIsGh0dHA6Ly80Ny45NS4xMTMuNjNcbiAqL1xuYXBwLnVzZSgnL2FwaScsIHByb3h5KCdodHRwOi8vNDcuOTUuMTEzLjYzJywge1xuXHRwcm94eVJlcVBhdGhSZXNvbHZlcjogZnVuY3Rpb24gKHJlcSkge1xuXHRcdHJldHVybiAnL3Nzci9hcGknICsgcmVxLnVybDtcblx0fVxufSkpO1xuXG5cbmFwcC5nZXQoJyonLCBhc3luYyAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XG5cdGNvbnN0IHN0b3JlID0gZ2V0U3RvcmUocmVxKTtcblx0Ly8g6Lev55Sx5Yy56YWNXG5cdGNvbnN0IG1hdGNoZWRSb3V0ZXMgPSBtYXRjaFJvdXRlcyhyb3V0ZXMsIHJlcS5wYXRoKTsgXG5cblx0Ly8g6K6pbWF0Y2hlZFJvdXRlc+WGheaJgOaciei3r+eUseeahGxvYWREYXRhKOW8guatpeWKoOi9vSnmiafooYzkuIDmrKFcblx0Y29uc3QgcHJvbWlzZXM6IGFueVtdID0gW107XG5cdG1hdGNoZWRSb3V0ZXMuZm9yRWFjaChpdGVtID0+IHtcblx0XHRjb25zdCByb3V0ZTogUm91dGVUeXBlID0gaXRlbS5yb3V0ZTtcblx0XHRpZiAocm91dGUubG9hZERhdGEpIHtcblx0XHRcdHByb21pc2VzLnB1c2gocm91dGUubG9hZERhdGEoc3RvcmUpKTtcblx0XHR9XG5cdH0pXG5cdGF3YWl0IFByb21pc2UuYWxsKHByb21pc2VzKTtcblxuXHRjb25zdCBzc3JIVE1MID0gYXdhaXQgcmVuZGVyKHJlcSwgc3RvcmUsIHJvdXRlcyk7XG5cdHJlcy5zZW5kKHNzckhUTUwpO1xufSk7XG5cbmFwcC51c2UoY2F0Y2hFcnJvcigpKTtcblxuYXBwLmxpc3RlbigzMDAwLCAoKSA9PiB7XG5cdGNvbnNvbGUubG9nKGBsaXN0ZW4gMzAwMC4uLmApO1xufSk7IiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IFJlcXVlc3QgfSBmcm9tICdleHByZXNzJztcblxuaW1wb3J0IGNvbmZpZyBmcm9tICcuLi8uLi9jb25maWcvY29uZmlnJztcblxuY29uc3QgY3JlYXRlSW5zdGFuY2UgPSAocmVxOiBSZXF1ZXN0KSA9PiB7XG4gICAgcmV0dXJuIGF4aW9zLmNyZWF0ZSh7XG4gICAgICAgIGJhc2VVUkw6ICdodHRwOi8vNDcuOTUuMTEzLjYzL3NzcicsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIGNvb2tpZTogcmVxLmdldCgnY29va2llJykgfHwgJydcbiAgICAgICAgfSxcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICBzZWNyZXQ6IGNvbmZpZy5zZWNyZXRcbiAgICAgICAgfVxuICAgIH0pXG59XG5leHBvcnQgZGVmYXVsdCBjcmVhdGVJbnN0YW5jZTsiLCJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBSZXF1ZXN0IH0gZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgcmVuZGVyVG9TdHJpbmcgfSBmcm9tICdyZWFjdC1kb20vc2VydmVyJztcbmltcG9ydCB7IFN0YXRpY1JvdXRlciwgUm91dGUgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHsgcmVuZGVyUm91dGVzIH0gZnJvbSAncmVhY3Qtcm91dGVyLWNvbmZpZyc7XG5cbmltcG9ydCB7IFJvdXRlVHlwZSB9IGZyb20gJy4uL3R5cGVzJztcblxuXG4vKipcbiAqIFxuICogQHBhcmFtIHJlcSBcbiAqIEBwYXJhbSBzdG9yZSBnZXRTdG9yZeWIm+W7ulxuICogQHBhcmFtIHJvdXRlcyBSb3V0ZXIudHNcbiAqL1xuYXN5bmMgZnVuY3Rpb24gcmVuZGVyKHJlcTogUmVxdWVzdCwgc3RvcmU6IFN0b3JlLCByb3V0ZXM6IFJvdXRlVHlwZVtdKSB7XG5cblx0Y29uc3QgY29udGVudCA9IHJlbmRlclRvU3RyaW5nKFxuXHRcdDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuXHRcdFx0PFN0YXRpY1JvdXRlciBsb2NhdGlvbj17cmVxLnBhdGh9IGNvbnRleHQ9e3t9fT5cblx0XHRcdFx0PEZyYWdtZW50PlxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdC8vIOS4gOe6p+i3r+eUsea4suafk1xuXHRcdFx0XHRcdFx0cmVuZGVyUm91dGVzKHJvdXRlcylcblx0XHRcdFx0XHRcdC8vIHJvdXRlcy5tYXAocm91dGUgPT4ge1xuXHRcdFx0XHRcdFx0Ly8gXHRyZXR1cm4gPFJvdXRlIHsuLi5yb3V0ZX0gLz5cblx0XHRcdFx0XHRcdC8vIH0pXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQ8L0ZyYWdtZW50PlxuXHRcdFx0PC9TdGF0aWNSb3V0ZXI+XG5cdFx0PC9Qcm92aWRlcj5cblx0KTtcblxuXHRyZXR1cm4gKGBcblx0XHQ8aHRtbD5cblx0XHRcdDxoZWFkPlxuXHRcdFx0XHQ8dGl0bGU+c3NyPC90aXRsZT5cblx0XHRcdDwvaGVhZD5cblx0XHRcdFx0PGJvZHk+XG5cdFx0XHRcdFx0PGRpdiBpZD0ncm9vdCc+JHtjb250ZW50fTwvZGl2PlxuXHRcdFx0XHQ8L2JvZHk+XG5cdFx0XHRcdDxzY3JpcHQ+XG5cdFx0XHRcdFx0d2luZG93LmNvbnRleHQgPSB7XG5cdFx0XHRcdFx0XHRzdGF0ZTogJHtKU09OLnN0cmluZ2lmeShzdG9yZS5nZXRTdGF0ZSgpKX1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdDwvc2NyaXB0PlxuXHRcdFx0PHNjcmlwdCBzcmM9Jy9pbmRleC5qcyc+PC9zY3JpcHQ+XG5cdFx0PC9odG1sPlxuICAgIGApXG59XG5cbmV4cG9ydCB7XG5cdHJlbmRlclxufSIsImltcG9ydCB7IFJlcXVlc3QgfSBmcm9tICdleHByZXNzJztcbmltcG9ydCB0aHVuayBmcm9tICdyZWR1eC10aHVuayc7XG5pbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlLCBjb21wb3NlLCBjb21iaW5lUmVkdWNlcnMgfSBmcm9tIFwicmVkdXhcIjtcblxuaW1wb3J0IHsgcmVkdWNlciBhcyBoZWFkZXJSZWR1Y2VyIH0gZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXIvc3RvcmUnO1xuaW1wb3J0IHsgcmVkdWNlciBhcyBob21lUmVkdWNlciB9IGZyb20gJy4uL2NvbnRhaW5lcnMvSG9tZS9zdG9yZSc7XG5pbXBvcnQgeyByZWR1Y2VyIGFzIHRyYW5zbGF0aW9uUmVkdWNlciB9IGZyb20gJy4uL2NvbnRhaW5lcnMvVHJhbnNsYXRpb24vc3RvcmUnO1xuaW1wb3J0IGNsaWVudEF4aW9zIGZyb20gJy4uL2NsaWVudC9yZXF1aXJlJztcbmltcG9ydCBzZXJ2ZXJBeGlvcyBmcm9tICcuLi9zZXJ2ZXIvcmVxdWlyZSc7XG5cbmNvbnN0IHJlZHVjZXJzID0gY29tYmluZVJlZHVjZXJzKHtcbiAgICBoZWFkZXI6IGhlYWRlclJlZHVjZXIsXG4gICAgaG9tZTogaG9tZVJlZHVjZXIsXG4gICAgdHJhbnNsYXRpb246IHRyYW5zbGF0aW9uUmVkdWNlclxufSlcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFN0b3JlKHJlcTogUmVxdWVzdCkge1xuICAgIHJldHVybiBjcmVhdGVTdG9yZShyZWR1Y2VycywgYXBwbHlNaWRkbGV3YXJlKHRodW5rLndpdGhFeHRyYUFyZ3VtZW50KHNlcnZlckF4aW9zKHJlcSkpKSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldENsaWVudFN0b3JlKCkge1xuICAgIGNvbnN0IGRlZmF1bHRTdG9yZSA9ICh3aW5kb3cgYXMgYW55KS5jb250ZXh0LnN0YXRlO1xuICAgIGNvbnN0IGNvbXBvc2VFbmhhbmNlcnMgPSAod2luZG93IGFzIGFueSkuX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fQ09NUE9TRV9fIHx8IGNvbXBvc2U7XG4gICAgcmV0dXJuIGNyZWF0ZVN0b3JlKHJlZHVjZXJzLCBkZWZhdWx0U3RvcmUsIGNvbXBvc2VFbmhhbmNlcnMoXG4gICAgICAgIGFwcGx5TWlkZGxld2FyZSh0aHVuay53aXRoRXh0cmFBcmd1bWVudChjbGllbnRBeGlvcygpKSlcbiAgICApKTtcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS1jb3JlanMzL2NvcmUtanMtc3RhYmxlL2luc3RhbmNlL2NvbmNhdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS1jb3JlanMzL2NvcmUtanMtc3RhYmxlL2luc3RhbmNlL2ZpbHRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS1jb3JlanMzL2NvcmUtanMtc3RhYmxlL2luc3RhbmNlL2Zvci1lYWNoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lLWNvcmVqczMvY29yZS1qcy1zdGFibGUvaW5zdGFuY2UvbWFwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lLWNvcmVqczMvY29yZS1qcy1zdGFibGUvanNvbi9zdHJpbmdpZnlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUtY29yZWpzMy9jb3JlLWpzLXN0YWJsZS9vYmplY3QvZGVmaW5lLXByb3BlcnRpZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUtY29yZWpzMy9jb3JlLWpzLXN0YWJsZS9vYmplY3QvZGVmaW5lLXByb3BlcnR5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lLWNvcmVqczMvY29yZS1qcy1zdGFibGUvb2JqZWN0L2dldC1vd24tcHJvcGVydHktZGVzY3JpcHRvclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS1jb3JlanMzL2NvcmUtanMtc3RhYmxlL29iamVjdC9nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3JzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lLWNvcmVqczMvY29yZS1qcy1zdGFibGUvb2JqZWN0L2dldC1vd24tcHJvcGVydHktc3ltYm9sc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS1jb3JlanMzL2NvcmUtanMtc3RhYmxlL29iamVjdC9rZXlzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lLWNvcmVqczMvY29yZS1qcy1zdGFibGUvcHJvbWlzZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS1jb3JlanMzL2hlbHBlcnMvYXN5bmNUb0dlbmVyYXRvclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS1jb3JlanMzL2hlbHBlcnMvZGVmaW5lUHJvcGVydHlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUtY29yZWpzMy9yZWdlbmVyYXRvclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuaXRlcmF0b3JcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9tb2R1bGVzL2VzLmZ1bmN0aW9uLm5hbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9tb2R1bGVzL2VzLm9iamVjdC50by1zdHJpbmdcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9tb2R1bGVzL2VzLnByb21pc2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9tb2R1bGVzL2VzLnN0cmluZy5pdGVyYXRvclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL21vZHVsZXMvd2ViLmRvbS1jb2xsZWN0aW9ucy5pdGVyYXRvclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3MtaHR0cC1wcm94eVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1kb20vc2VydmVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJvdXRlci1jb25maWdcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtcm91dGVyLWRvbVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC10aHVua1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWVcIik7Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQy9FQTtBQUFBO0FBQ0E7QUFEQTtBQUlBOzs7Ozs7Ozs7Ozs7QUNQQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQU1BO0FBQUE7QUFJQTtBQUtBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7QUM3QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFHQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQVFBO0FBbkJBO0FBQ0E7QUF3QkE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUM3Q0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFGQTtBQU1BO0FBQ0E7QUFJQTs7Ozs7Ozs7Ozs7O0FDZkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRkE7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFNQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBSUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNwQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFGQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUM1Q0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0NBO0FBQ0E7QUFEQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUtBO0FBRUE7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBYkE7QUFlQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RCQTtBQUNBO0FBR0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFGQTtBQUFBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7QUN4Q0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFGQTtBQU1BO0FBQ0E7QUFFQTs7OztBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUZBO0FBTUE7QUFDQTs7Ozs7Ozs7Ozs7O0FDekNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNDQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFFQTtBQUZBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUVBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQXJCQTtBQXVCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0JBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBSEE7QUFRQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7QUN0Q0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUZBO0FBTUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUM5QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0VBO0FBQ0E7QUFEQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBRUE7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBWEE7QUFhQTs7Ozs7Ozs7Ozs7O0FDbEJBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2JBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBT0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBYkE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQWVBO0FBQ0E7QUFDQTtBQWpCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFtQkE7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2hEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFEQTtBQUxBO0FBU0E7QUFDQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQkE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBSUE7Ozs7OztBQU1BOzs7OztBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFJQTtBQUVBO0FBQ0E7QUFOQTtBQUxBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUdBOzs7Ozs7Ozs7OztBQzFCQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7OztBIiwic291cmNlUm9vdCI6IiJ9