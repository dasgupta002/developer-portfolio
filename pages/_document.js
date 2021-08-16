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
            <link rel = "preconnect" href = "https://fonts.googleapis.com" />
            <link rel = "preconnect" href = "https://fonts.gstatic.com" crossorigin />
            <link href = "https://fonts.googleapis.com/css2?family=Kalam&display=swap" rel = "stylesheet" />
            <link href = "https://fonts.googleapis.com/css2?family=Shadows+Into+Light&display=swap" rel = "stylesheet" />
            <link href = "https://fonts.googleapis.com/css2?family=Rancho&display=swap" rel = "stylesheet" />
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