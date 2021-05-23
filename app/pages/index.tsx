import { BlitzPage } from "blitz"
import Layout from "app/core/layouts/Layout"

const Home: BlitzPage = () => {
  return (
    <div>
      Gr8, you're here. This app is super incomplete, but please have a look around. The data
      doesn't sync automatically yet, so you might want to press the refresh button :D
      <br />
      Only contains v2 proto pool atm.
      <br />
    </div>
  )
}

Home.suppressFirstRenderFlicker = true
Home.getLayout = (page) => <Layout title="Home">{page}</Layout>

export default Home
