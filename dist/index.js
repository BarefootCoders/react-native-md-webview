'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

var _defaultHtml = require('./default-html');

var _defaultHtml2 = _interopRequireDefault(_defaultHtml);

var _lodash = require('lodash');

var _showdown = require('showdown');

var _showdown2 = _interopRequireDefault(_showdown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var REMOVED_WEBVIEW_PROPS = ['url', 'html', 'source'];

exports.default = _react2.default.createClass({
  displayName: 'lib',

  propTypes: Object.assign({}, _reactNative.WebView.PropTypes, {
    children: _react2.default.PropTypes.string.isRequired
  }),

  getDefaultProps: function getDefaultProps() {
    return {
      showdownOptions: {},
      css: ''
    };
  },
  filterProps: function filterProps() {
    var thisProps = (0, _lodash.omit)(this.props, Object.keys(_reactNative.WebView.propTypes));
    var webViewProps = (0, _lodash.omit)((0, _lodash.pick)(this.props, Object.keys(_reactNative.WebView.propTypes)), REMOVED_WEBVIEW_PROPS);

    return { thisProps: thisProps, webViewProps: webViewProps };
  },
  markdownHtml: function markdownHtml() {
    var _props = this.props;
    var children = _props.children;
    var showdownOptions = _props.showdownOptions;

    var converter = new _showdown2.default.Converter(showdownOptions);

    return converter.makeHtml(this.props.children);
  },
  render: function render() {
    var _filterProps = this.filterProps();

    var thisProps = _filterProps.thisProps;
    var webViewProps = _filterProps.webViewProps;

    var markdownHtml = this.markdownHtml();
    var html = _defaultHtml2.default.replace('$body', markdownHtml).replace('$css', this.props.css);

    return _react2.default.createElement(_reactNative.WebView, _extends({
      source: { html: html, baseUrl: 'about:blank' }
    }, webViewProps));
  }
});