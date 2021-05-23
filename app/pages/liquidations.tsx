import { BlitzPage, useRouter } from "blitz"
import Layout from "app/core/layouts/Layout"
import { ReserveFilter } from "app/core/components/ReserveFilter"
import { PoolFilter } from "app/core/components/PoolFilter"
import { LiquidationCallsTable } from "app/core/components/tables/LiquidationCallsTable"

const Liquidations: BlitzPage = () => {
  const { query } = useRouter()
  const { order, orderBy, principalReserveId, collateralReserveId, poolId } = query as {
    order: "asc" | "desc" | undefined
    orderBy: string | undefined
    principalReserveId: string | undefined
    collateralReserveId: string | undefined
    poolId: string | undefined
  }

  return (
    <div>
      <PoolFilter />
      <ReserveFilter fieldName="principalReserveId" label="PrincipalReserve" />
      <ReserveFilter fieldName="collateralReserveId" label="CollateralReserve" />
      <LiquidationCallsTable
        where={{ principalReserveId, collateralReserveId, poolId }}
        orderBy={{ [orderBy || "timestamp"]: order || "desc" }}
      />
    </div>
  )
}

Liquidations.suppressFirstRenderFlicker = true
Liquidations.getLayout = (page) => <Layout title="Home">{page}</Layout>

export default Liquidations
