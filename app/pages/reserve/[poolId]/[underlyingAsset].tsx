import { BlitzPage, useParams } from "blitz"
import Layout from "app/core/layouts/Layout"
import { Grid } from "@mui/material"
import { BorrowsTable } from "app/core/components/tables/BorrowsTable"
import { DepositsTable } from "app/core/components/tables/DepositsTable"
import { WithdrawalsTable } from "app/core/components/tables/WithdrawalsTable"
import { RepaysTable } from "app/core/components/tables/RepaysTable"
import { LiquidationCallsTable } from "app/core/components/tables/LiquidationCallsTable"
import { FlashLoansTable } from "app/core/components/tables/FlashLoans"

const Reserve: BlitzPage = () => {
  const { poolId, underlyingAsset } = useParams() as { poolId: string; underlyingAsset: string }
  return (
    <Grid container spacing={2} sx={{ position: "relative" }}>
      <Grid item xs={12} md={6}>
        <DepositsTable where={{ poolId, underlyingAsset }} disableSorting detailView />
      </Grid>
      <Grid item xs={12} md={6}>
        <WithdrawalsTable where={{ poolId, underlyingAsset }} disableSorting detailView />
      </Grid>
      <Grid item xs={12} md={6}>
        <BorrowsTable where={{ poolId, underlyingAsset }} disableSorting detailView />
      </Grid>
      <Grid item xs={12} md={6}>
        <RepaysTable where={{ poolId, underlyingAsset }} disableSorting detailView />
      </Grid>
      <Grid item xs={12} md={6}>
        <LiquidationCallsTable
          where={{ poolId, collateralUnderlyingAsset: underlyingAsset }}
          disableSorting
          detailView
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <FlashLoansTable where={{ poolId, underlyingAsset }} disableSorting detailView />
      </Grid>
    </Grid>
  )
}

Reserve.suppressFirstRenderFlicker = true
Reserve.getLayout = (page) => <Layout title="Reserve">{page}</Layout>

export default Reserve
