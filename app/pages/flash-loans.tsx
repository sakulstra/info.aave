import { BlitzPage, useRouterQuery } from "blitz"
import Layout from "app/core/layouts/Layout"
import { ReserveFilter } from "app/core/components/ReserveFilter"
import { PoolFilter } from "app/core/components/PoolFilter"
import { FlashLoansTable } from "app/core/components/tables/FlashLoans"

const FlashLoans: BlitzPage = () => {
  const { order, orderBy, poolId, underlyingAsset } = useRouterQuery() as {
    order: "asc" | "desc" | undefined
    orderBy: string | undefined
    poolId: string | undefined
    underlyingAsset: string | undefined
  }

  return (
    <div>
      <PoolFilter />
      <ReserveFilter />
      <FlashLoansTable
        where={{ poolId, underlyingAsset }}
        orderBy={{ [orderBy || "timestamp"]: order || "desc" }}
      />
    </div>
  )
}

FlashLoans.suppressFirstRenderFlicker = true
FlashLoans.getLayout = (page) => <Layout title="Home">{page}</Layout>

export default FlashLoans
