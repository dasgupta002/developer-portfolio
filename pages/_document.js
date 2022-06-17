import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(context) {
    const initialProps = await Document.getInitialProps(context)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel = "icon" type = "image/x-icon" href = "/favicon.png" />
          <link rel = "preconnect" href = "https://fonts.googleapis.com" />
          <link rel = "preconnect" href = "https://fonts.gstatic.com" crossorigin />
          <link href = "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500&display=swap" rel = "stylesheet" />
          <title>dg | Dev Portfolio</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument