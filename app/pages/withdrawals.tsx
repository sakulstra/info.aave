import { BlitzPage, useRouterQuery } from "blitz"
import Layout from "app/core/layouts/Layout"
import { ReserveFilter } from "app/core/components/ReserveFilter"
import { PoolFilter } from "app/core/components/PoolFilter"
import { WithdrawalsTable } from "app/core/components/tables/WithdrawalsTable"

const Withdrawals: BlitzPage = () => {
  const { order, orderBy, poolId, reserveId } = useRouterQuery() as {
    order: "asc" | "desc" | undefined
    orderBy: string | undefined
    poolId: string | undefined
    reserveId: string | undefined
  }

  return (
    <div>
      <PoolFilter />
      <ReserveFilter />
      <WithdrawalsTable
        where={{ poolId, reserveId }}
        orderBy={{ [orderBy || "timestamp"]: order || "desc" }}
      />
    </div>
  )
}

Withdrawals.suppressFirstRenderFlicker = true
Withdrawals.getLayout = (page) => <Layout title="Home">{page}</Layout>

export default Withdrawals
