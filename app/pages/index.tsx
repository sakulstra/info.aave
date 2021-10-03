import { BlitzPage } from "blitz"
import Layout from "app/core/layouts/Layout"

const Home: BlitzPage = () => {
  return (
    <div>
      Gr8, you are here. This app is super incomplete, but please have a look around. Aavewatch was
      out of date and I didn&apos;t have the time to maintain it.
      <br />
      This app contains all the transactions from aave v2 mainnet/polygon/avalanche similar to
      aavewatch, but without the charts &amp; the stats.
      <br />
    </div>
  )
}

Home.suppressFirstRenderFlicker = true
Home.getLayout = (page) => <Layout title="Home">{page}</Layout>

export default Home
