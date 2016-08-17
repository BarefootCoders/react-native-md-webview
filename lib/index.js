import React from 'react';
import { WebView } from 'react-native';
import defaultHtml from './default-html';
import { omit, pick } from 'lodash';
import showdown from 'showdown';

const REMOVED_WEBVIEW_PROPS = ['url', 'html', 'source'];

export default React.createClass({
  propTypes: Object.assign({}, WebView.PropTypes, {
    children: React.PropTypes.string.isRequired,
  }),

  getDefaultProps() {
    return {
      showdownOptions: {},
      css: '',
    };
  },

  filterProps() {
    const thisProps = omit(this.props, Object.keys(WebView.propTypes));
    const webViewProps = omit(
      pick(this.props, Object.keys(WebView.propTypes)),
      REMOVED_WEBVIEW_PROPS
    );

    return { thisProps, webViewProps };
  },

  markdownHtml() {
    const { children, showdownOptions } = this.props;
    const converter = new showdown.Converter(showdownOptions);

    return converter.makeHtml(this.props.children);
  },

  render() {
    const { thisProps, webViewProps } = this.filterProps();
    const markdownHtml = this.markdownHtml();
    const html = defaultHtml
      .replace('$body', markdownHtml)
      .replace('$css', this.props.css);

    return (
      <WebView
        source={{ html: html, baseUrl: 'about:blank', }}
        {...webViewProps}
      />
    );
  },
});
