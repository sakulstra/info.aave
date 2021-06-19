import {
  AppProps,
  ErrorComponent,
  useRouter,
  ErrorFallbackProps,
  Head,
  useQueryErrorResetBoundary,
} from "blitz"
import { ErrorBoundary } from "blitz"
import { ThemeProvider } from "@material-ui/core/styles"
import { CacheProvider } from "@emotion/react"
import CssBaseline from "@material-ui/core/CssBaseline"
import createCache from "@emotion/cache"
import { useEffect } from "react"
import { getTheme } from "app/core/layouts/theme"
import AdapterDayjs from "@material-ui/lab/AdapterDayjs"
import LocalizationProvider from "@material-ui/lab/LocalizationProvider"
// import useDarkMode from "use-dark-mode"

export const cache = createCache({ key: "css", prepend: true })

export default function App({ Component, pageProps }: AppProps) {
  const getLayout = Component.getLayout || ((page) => page)
  const router = useRouter()
  const { reset } = useQueryErrorResetBoundary()
  // const { value: isDarkMode } = useDarkMode(true)

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side")
    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles)
    }
  }, [])

  return (
    <CacheProvider value={cache}>
      <Head>
        <title>My page</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <ThemeProvider theme={getTheme(true)}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />

          <ErrorBoundary
            FallbackComponent={RootErrorFallback}
            resetKeys={[router.asPath]}
            onReset={reset}
          >
            {getLayout(<Component {...pageProps} />)}
          </ErrorBoundary>
        </ThemeProvider>
      </LocalizationProvider>
    </CacheProvider>
  )
}

function RootErrorFallback({ error }: ErrorFallbackProps) {
  return <ErrorComponent statusCode={error.statusCode || 400} title={error.message || error.name} />
}
