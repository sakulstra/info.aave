import { BlitzPage, useQuery, useRouterQuery } from "blitz"
import Layout from "app/core/layouts/Layout"
import getUserReserveStats from "app/user-reserves/queries/getUserReserveStats"
import { Box, Grid } from "@mui/material"
import { ReserveFilter } from "app/core/components/ReserveFilter"
import { StatBox } from "app/core/components/StatBox"
import { PoolFilter } from "app/core/components/PoolFilter"
import { UserReservesTable } from "app/core/components/tables/UserReservesTable"
import { FromToInput } from "app/core/components/FromToInput"
import { Prisma } from "@prisma/client"

type UserReservesStatsProps = {
  where?: Prisma.UserReserveWhereInput
}

function UserReservesStats({ where }: UserReservesStatsProps) {
  const [
    stats = { emptyReserves: 0, nonEmptyReserves: 0, activeReserves24h: 0, activeReserves30d: 0 },
  ] = useQuery(getUserReserveStats, { where })
  return (
    <Grid container spacing={2} sx={{ my: 1 }}>
      <Grid item xs={6} sm={3}>
        <StatBox value={stats.emptyReserves + stats.nonEmptyReserves} title="User reserves" />
      </Grid>
      <Grid item xs={6} sm={3}>
        <StatBox value={stats.nonEmptyReserves} title="Non empty" />
      </Grid>
      <Grid item xs={6} sm={3}>
        <StatBox value={stats.activeReserves24h} title="Altered (24h)" />
      </Grid>
      <Grid item xs={6} sm={3}>
        <StatBox value={stats.activeReserves30d} title="Altered (30d)" />
      </Grid>
    </Grid>
  )
}

const UserReserves: BlitzPage = () => {
  const {
    order,
    orderBy,
    underlyingAsset,
    poolId,
    fromlastUpdateTimestamp,
    tolastUpdateTimestamp,
  } = useRouterQuery() as {
    order: "asc" | "desc" | undefined
    orderBy: string | undefined
    underlyingAsset: string | undefined
    poolId: string | undefined
    fromlastUpdateTimestamp: string | number
    tolastUpdateTimestamp: string | number
  }

  return (
    <div>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <PoolFilter />
        <ReserveFilter fieldName="underlyingAsset" />
        <FromToInput fieldName="lastUpdateTimestamp" />
      </Box>
      <UserReservesStats
        where={{
          poolId,
          underlyingAsset,
        }}
      />
      <UserReservesTable
        where={{
          poolId,
          underlyingAsset,
          lastUpdateTimestamp: {
            ...(fromlastUpdateTimestamp ? { gte: Number(fromlastUpdateTimestamp) } : {}),
            ...(tolastUpdateTimestamp ? { lte: Number(tolastUpdateTimestamp) } : {}),
          },
        }}
        orderBy={{ [orderBy || "lastUpdateTimestamp"]: order || "desc" }}
      />
    </div>
  )
}

// UserReserves.suppressFirstRenderFlicker = true
UserReserves.getLayout = (page) => <Layout title="User Reserves">{page}</Layout>

export default UserReserves
