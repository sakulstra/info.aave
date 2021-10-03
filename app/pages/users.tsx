import { BlitzPage, useRouter, useQuery } from "blitz"
import { Box, Grid } from "@mui/material"
import Layout from "app/core/layouts/Layout"
import getStats from "app/users/queries/getStats"
import { StatBox } from "app/core/components/StatBox"
import { PoolFilter } from "app/core/components/PoolFilter"
import { UsersTable } from "app/core/components/tables/UsersTable"
import { Prisma } from "@prisma/client"
import { MinMaxInput } from "app/core/components/MinMaxInput"

type UserStatsProps = {
  where?: Prisma.UserWhereInput
}

function UserStats({ where }: UserStatsProps) {
  const [stats] = useQuery(getStats, { where })
  return (
    <Grid container spacing={2} sx={{ my: 1 }}>
      <Grid item xs={6} sm={3}>
        <StatBox value={stats.total} title="Total users" />
      </Grid>
      <Grid item xs={6} sm={3}>
        <StatBox value={stats.borrowers} title="Borrowers" />
      </Grid>
      <Grid item xs={6} sm={3}>
        <StatBox value={stats.liquidityProviders} title="Liquidity providers" />
      </Grid>
      <Grid item xs={6} sm={3}>
        <StatBox value={stats.hfDangerZone} title="hf(x): 1 <= x <= 1.2" />
      </Grid>
    </Grid>
  )
}

const Users: BlitzPage = () => {
  const { query } = useRouter()
  const { order, orderBy, poolId, minhealthFactor, maxhealthFactor } = query as {
    order: "asc" | "desc"
    orderBy: string
    poolId: string | undefined
    minhealthFactor: string
    maxhealthFactor: string
  }

  return (
    <div>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <PoolFilter />
        <MinMaxInput fieldName="healthFactor" />
      </Box>
      {/*<UserStats where={{ poolId }} />*/}
      <UsersTable
        where={{
          poolId,
          healthFactor: {
            ...(minhealthFactor ? { gte: Number(minhealthFactor) } : {}),
            ...(maxhealthFactor ? { lte: Number(maxhealthFactor) } : {}),
          },
        }}
        orderBy={{ [orderBy || "lastUpdateTimestamp"]: order || "desc" }}
      />
    </div>
  )
}

// Users.suppressFirstRenderFlicker = true
Users.getLayout = (page) => <Layout title="Home">{page}</Layout>

export default Users
