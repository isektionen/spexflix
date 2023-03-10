import Document, { Html, Head, Main, NextScript } from 'next/document';
import * as snippet from '@segment/snippet';

export default class MyDocument extends Document {
  renderSnippet() {
    const opts = {
      apiKey: process.env.SEGMENT_WRITE_KEY,
      // note: the page option only covers SSR tracking.
      // Page.js is used to track other events using `window.analytics.page()`
      page: true,
    };

    if (process.env.NEXT_PUBLIC_ENV === 'dev') {
      return snippet.max(opts);
    }

    return snippet.min(opts);
  }

  render() {
    return (
      <Html>
        <Head>
          {/* Inject the Segment snippet into the <head> of the document  */}
          <script dangerouslySetInnerHTML={{ __html: this.renderSnippet() }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
