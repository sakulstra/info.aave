import { BlitzPage, useParams, useQuery } from "blitz"
import Layout from "app/core/layouts/Layout"
import { DepositsTable } from "app/core/components/tables/DepositsTable"
import { Grid, Typography, Paper } from "@mui/material"
import { WithdrawalsTable } from "app/core/components/tables/WithdrawalsTable"
import { BorrowsTable } from "app/core/components/tables/BorrowsTable"
import { RepaysTable } from "app/core/components/tables/RepaysTable"
import { LiquidationCallsTable } from "app/core/components/tables/LiquidationCallsTable"
import { FlashLoansTable } from "app/core/components/tables/FlashLoans"
import { UserReservesTable } from "app/core/components/tables/UserReservesTable"
import getUser from "app/users/queries/getUser"
import { POOL_NAME_MAP } from "app/core/components/PoolFilter"
import Link from "app/core/components/Link"
import LinkIcon from "@mui/icons-material/Link"

const User: BlitzPage = () => {
  const { address } = useParams() as { address: string }
  const [data] = useQuery(getUser, { where: { userId: address } })

  return (
    <Grid container spacing={2} sx={{ position: "relative" }}>
      <Link
        href={`https://etherscan.io/address/${address}`}
        target="__BLANK"
        sx={{ position: "absolute", right: 0, top: 0, display: "flex", alignItems: "center" }}
      >
        <span>Etherscan</span> <LinkIcon fontSize="small" sx={{ mx: 1 }} />
      </Link>
      {data.items.map((user) => (
        <Grid item xs={12} md={4} lg={3} key={user.poolId}>
          <Paper square sx={{ p: 2 }}>
            <Typography variant="h6">{POOL_NAME_MAP[user.poolId]}</Typography>
            <Typography sx={{ display: "flex" }} component="div">
              <Typography sx={{ flexGrow: 1 }}>HF</Typography>
              {user.healthFactor.toLocaleString("en", { maximumFractionDigits: 4 })}
            </Typography>
            <Typography sx={{ display: "flex" }} component="div">
              <Typography sx={{ flexGrow: 1 }}>Borrows</Typography>
              {user.totalBorrowsUSD.toLocaleString("en", { maximumFractionDigits: 2 })}
            </Typography>
            <Typography sx={{ display: "flex" }} component="div">
              <Typography sx={{ flexGrow: 1 }}>Collateral</Typography>
              {user.totalCollateralUSD.toLocaleString("en", { maximumFractionDigits: 2 })}
            </Typography>
            <Typography sx={{ display: "flex" }} component="div">
              <Typography sx={{ flexGrow: 1 }}>Liquidity</Typography>
              {user.totalLiquidityUSD.toLocaleString("en", { maximumFractionDigits: 2 })}
            </Typography>
          </Paper>
        </Grid>
      ))}
      <Grid item xs={12}>
        <UserReservesTable where={{ userId: address }} disableSorting detailView />
      </Grid>
      <Grid item xs={12} md={6}>
        <DepositsTable where={{ userId: address }} disableSorting detailView />
      </Grid>
      <Grid item xs={12} md={6}>
        <WithdrawalsTable where={{ userId: address }} disableSorting detailView />
      </Grid>
      <Grid item xs={12} md={6}>
        <BorrowsTable where={{ userId: address }} disableSorting detailView />
      </Grid>
      <Grid item xs={12} md={6}>
        <RepaysTable where={{ userId: address }} disableSorting detailView />
      </Grid>
      <Grid item xs={12} md={6}>
        <LiquidationCallsTable where={{ userId: address }} disableSorting detailView />
      </Grid>
      <Grid item xs={12} md={6}>
        <FlashLoansTable where={{ initiatorId: address }} disableSorting detailView />
      </Grid>
    </Grid>
  )
}

User.suppressFirstRenderFlicker = true
User.getLayout = (page) => <Layout title="Home">{page}</Layout>

export default User
