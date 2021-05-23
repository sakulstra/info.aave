import { ReactNode, Suspense } from "react"
import { Head } from "blitz"
import { Header } from "../components/Header"

type LayoutProps = {
  title?: string
  children: ReactNode
}

const Layout = ({ title, children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{title || "aave-blitz"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header>
        <Suspense fallback={<h1>Loading...</h1>}>{children}</Suspense>
      </Header>
    </>
  )
}

export default Layout
