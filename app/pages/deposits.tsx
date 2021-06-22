import { BlitzPage, useRouterQuery } from "blitz"
import Layout from "app/core/layouts/Layout"
import { ReserveFilter } from "app/core/components/ReserveFilter"
import { PoolFilter } from "app/core/components/PoolFilter"
import { DepositsTable } from "app/core/components/tables/DepositsTable"

const Deposits: BlitzPage = () => {
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
      <DepositsTable
        where={{ poolId, underlyingAsset }}
        orderBy={{ [orderBy || "timestamp"]: order || "desc" }}
      />
    </div>
  )
}

Deposits.suppressFirstRenderFlicker = true
Deposits.getLayout = (page) => <Layout title="Home">{page}</Layout>

export default Deposits
