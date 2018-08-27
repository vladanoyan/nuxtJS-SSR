webpackHotUpdate(6,{

/***/ "./pages/index/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__("./node_modules/react-redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_components_Layout__ = __webpack_require__("./src/components/Layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_components_Owl_corousel_pages_Coarousel_pages_js__ = __webpack_require__("./src/components/Owl-corousel-pages/Coarousel-pages.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_components_Owl_corousel_Coarousel_js__ = __webpack_require__("./src/components/Owl-corousel/Coarousel.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_components_Owl_corousel__ = __webpack_require__("./src/components/Owl-corousel/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_components_Owl_corousel_pages__ = __webpack_require__("./src/components/Owl-corousel-pages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__fortawesome_react_fontawesome__ = __webpack_require__("./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__fortawesome_fontawesome_svg_core__ = __webpack_require__("./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__fortawesome_free_solid_svg_icons__ = __webpack_require__("./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__component_css__ = __webpack_require__("./pages/index/component.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__component_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__component_css__);
var _jsxFileName = "/Users/admin/Desktop/nextjs/pages/index/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }












__WEBPACK_IMPORTED_MODULE_8__fortawesome_fontawesome_svg_core__["b" /* library */].add(__WEBPACK_IMPORTED_MODULE_9__fortawesome_free_solid_svg_icons__["a" /* faTh */]);
__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("style", {
  jsx: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  }
}, css);

var Home =
/*#__PURE__*/
function (_Component) {
  _inherits(Home, _Component);

  function Home() {
    var _this;

    _classCallCheck(this, Home);

    _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this));
    Object.defineProperty(_assertThisInitialized(_this), "toggleClick", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState({
          toggle: !_this.state.toggle
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "redirectPage", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e, id) {
        _this.toggleClick();

        _this.setState({
          Visible: !_this.state.Visible
        });

        _this.setState({
          route: e,
          position: id
        });
      }
    });
    _this.state = {
      Visible: false,
      toggle: true,
      route: '',
      position: ''
    };
    return _this;
  }

  _createClass(Home, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__src_components_Layout__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, "asjhdajshdjaks"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: __WEBPACK_IMPORTED_MODULE_10__component_css___default.a.home,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__src_components_Owl_corousel_Coarousel_js__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__src_components_Owl_corousel__["a" /* default */], {
        items: this.props.list,
        toggle: this.state.toggle,
        animate: this.redirectPage,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: __WEBPACK_IMPORTED_MODULE_10__component_css___default.a.content,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "fadeIn",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__fortawesome_react_fontawesome__["a" /* FontAwesomeIcon */], {
        icon: "th",
        size: "2x",
        className: __WEBPACK_IMPORTED_MODULE_10__component_css___default.a.IconToggle,
        onClick: this.toggleClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__src_components_Owl_corousel_pages_Coarousel_pages_js__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__src_components_Owl_corousel_pages__["a" /* default */], {
        items: this.props.list,
        position: this.state.position,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }))))));
    }
  }]);

  return Home;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    list: state.list
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["b" /* connect */])(mapStateToProps)(Home));
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/index")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=6.6d57467066896c57cdf2.hot-update.js.map