import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel='icon' type='image/png' href='/images/ico/favicon.png' />
          <script
            type='text/javascript'
            src='static/jquery-3.2.1.min.js'
            defer
          ></script>
          <script
            type='text/javascript'
            src='static/plugins.min.js'
            defer
          ></script>
        </Head>
        <body>
          <Main />
          <NextScript />
          <script
            src='https://assets.calendly.com/assets/external/widget.js'
            type='text/javascript'
            async
          ></script>
        </body>
      </Html>
    );
  }
}
export default MyDocument;
