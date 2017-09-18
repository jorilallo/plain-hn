import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    );
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <html>
        <Head>
          <title>Plain HN</title>
          {this.props.styleTags}
          <meta
            name="description"
            content="Clean HackerNews without comments"
          />
          <link rel="icon" type="image/png" href="/static/images/favicon.png" />
          <link
            rel="apple-touch-icon"
            href="/static/images/ios.png"
            sizes="144x144"
          />
          <link rel="stylesheet" type="text/css" href="/static/css/fonts.css" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta property="og:title" content="PlainHN" />
          <meta
            property="og:description"
            content="Clean HackerNews without comments"
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://plainhn.com" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
