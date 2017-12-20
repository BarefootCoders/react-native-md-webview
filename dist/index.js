'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

var _defaultHtml = require('./default-html');

var _defaultHtml2 = _interopRequireDefault(_defaultHtml);

var _lodash = require('lodash.omit');

var _lodash2 = _interopRequireDefault(_lodash);

var _lodash3 = require('lodash.pick');

var _lodash4 = _interopRequireDefault(_lodash3);

var _showdown = require('showdown');

var _showdown2 = _interopRequireDefault(_showdown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var REMOVED_WEBVIEW_PROPS = ['url', 'html', 'source'];

var ReactNativeWebMDWebView = function (_React$Component) {
  _inherits(ReactNativeWebMDWebView, _React$Component);

  function ReactNativeWebMDWebView() {
    _classCallCheck(this, ReactNativeWebMDWebView);

    return _possibleConstructorReturn(this, (ReactNativeWebMDWebView.__proto__ || Object.getPrototypeOf(ReactNativeWebMDWebView)).apply(this, arguments));
  }

  _createClass(ReactNativeWebMDWebView, [{
    key: 'getDefaultProps',
    value: function getDefaultProps() {
      return {
        showdownOptions: {},
        css: ''
      };
    }
  }, {
    key: 'filterProps',
    value: function filterProps() {
      var thisProps = (0, _lodash2.default)(this.props, Object.keys(_reactNative.WebView.propTypes));
      var webViewProps = (0, _lodash2.default)((0, _lodash4.default)(this.props, Object.keys(_reactNative.WebView.propTypes)), REMOVED_WEBVIEW_PROPS);

      return { thisProps: thisProps, webViewProps: webViewProps };
    }
  }, {
    key: 'markdownHtml',
    value: function markdownHtml() {
      var _props = this.props,
          children = _props.children,
          showdownOptions = _props.showdownOptions;

      var converter = new _showdown2.default.Converter(showdownOptions);

      return converter.makeHtml(this.props.children);
    }
  }, {
    key: 'render',
    value: function render() {
      var _filterProps = this.filterProps(),
          thisProps = _filterProps.thisProps,
          webViewProps = _filterProps.webViewProps;

      var markdownHtml = this.markdownHtml();
      var html = _defaultHtml2.default.replace('$body', markdownHtml).replace('$css', this.props.css);

      return _react2.default.createElement(_reactNative.WebView, _extends({
        source: { html: html, baseUrl: 'about:blank' }
      }, webViewProps));
    }
  }]);

  return ReactNativeWebMDWebView;
}(_react2.default.Component);

exports.default = ReactNativeWebMDWebView;
;