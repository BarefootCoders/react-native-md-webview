# react-native-md-webview

A simple webview wrapper that renders markdown using [showdown].

[showdown]: https://github.com/showdownjs/showdown

## Usage

The markdown you want to render should be passed directly as a child. eg:
`<MDWebView>{'# Hello!'}</MDWebView>`

This package accepts the same props as [`WebView`][WebView] with the exception
of `url`, `html`, and `source`, as these are used internally when rendering
Markdown.

The following props can be passed in to customize the markdown:

* `css`: CSS to render directly in the markdown HTML.
* `showdownOptions`: Options to pass to `showdown.Converter`.

[WebView]: https://facebook.github.io/react-native/docs/webview.html

## Example

```javascript
import MDWebView from 'react-native-md-webview';

export default React.createClass({
  render() {
    return (
      <MDWebView css={css} style={{ flex: 1 }}>
        {this.props.markdown}
      </MDWebView>
    );
  },
});

const css = `
  img {
    width: 100%,
  }
`;
```

## About thoughtbot

![thoughtbot](https://thoughtbot.com/logo.png)

react-native-md-webview is maintained and funded by thoughtbot.
The names and logos for thoughtbot are trademarks of thoughtbot, inc.

We love open source software!
See [our other projects][community] or
[hire us][hire] to design, develop, and grow your product.

[community]: https://thoughtbot.com/community?utm_source=github
[hire]: https://thoughtbot.com?utm_source=github
