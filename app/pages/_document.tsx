import React from "react"
import { Document, Html, Main, BlitzScript, DocumentContext, DocumentHead } from "blitz"
import { ServerStyleSheets } from "@material-ui/styles"
import createEmotionServer from "@emotion/server/create-instance"
import { cache } from "./_app"
import theme from "app/core/layouts/theme"

const { extractCritical } = createEmotionServer(cache)

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheets = new ServerStyleSheets()
    const originalRenderPage = ctx.renderPage

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
      })

    const initialProps = await Document.getInitialProps(ctx)
    const styles = extractCritical(initialProps.html)

    return {
      ...initialProps,
      // Styles fragment is rendered after the app and page rendering finish.
      styles: [
        ...React.Children.toArray(initialProps.styles),
        sheets.getStyleElement(),
        <style
          key="emotion-style-tag"
          data-emotion={`css ${styles.ids.join(" ")}`}
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: styles.css }}
        />,
      ],
    }
  }

  render() {
    return (
      <Html lang="en">
        <DocumentHead>
          {/* PWA primary color */}
          <meta name="theme-color" content={theme.palette.primary.main} />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
        </DocumentHead>
        <body>
          <Main />
          <BlitzScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
