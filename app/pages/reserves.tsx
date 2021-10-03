import { BlitzPage, useQuery, useRouterQuery } from "blitz"
import Layout from "app/core/layouts/Layout"
import getReserves from "app/reserves/queries/getReserves"
import { Paper, styled, Table, TableBody } from "@mui/material"
import { CellConfig, EnhancedTableHead, EnhancedTableRow } from "app/core/components/Table"
import { PoolFilter, POOL_NAME_MAP } from "app/core/components/PoolFilter"

type ThenArg<T> = T extends PromiseLike<infer U> ? U : T
type QueryResult = ThenArg<ReturnType<typeof getReserves>>

function renderPercent(value: string | number) {
  return (Number(value) * 100).toLocaleString("en", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })
}

const cells: CellConfig<QueryResult["reserves"][0]>[] = [
  {
    id: "symbol",
    label: "Symbol",
    sortable: true,
    getLink: (obj) => `/reserve/${obj.poolId}/${obj.underlyingAsset}`,
  },
  {
    id: "poolId",
    label: "Pool",
    sortable: true,
    getValue: (obj) => POOL_NAME_MAP[obj.poolId] || "Unknown pool",
  },
  {
    id: "totalLiquidity",
    numeric: true,
    label: "Total liquidity",
    getValue: (obj) => Number(obj.totalLiquidity),
  },
  {
    id: "totalBorrows",
    numeric: true,
    label: "Total Borrows",
    getValue: (obj) => Number(obj.totalDebt),
  },
  {
    id: "stableBorrowRate",
    numeric: true,
    sortable: true,
    label: "Stable rate (now/avg)",
    getValue: (obj) =>
      obj.stableBorrowRateEnabled
        ? `${renderPercent(obj.stableBorrowRate)} / ${(
            Number(obj.averageStableRate) /
            10 ** 25
          ).toLocaleString("en")}`
        : "disabled",
  },
  {
    id: "variableBorrowRate",
    numeric: true,
    sortable: true,
    label: "Variable rate % (now)", // /30d/90d
    getValue: (obj) => renderPercent(obj.variableBorrowRate),
    /*getValue: (obj) =>
      `${renderPercent(obj.variableBorrowRate)} / ${renderPercent(
        obj.avg30DaysVariableBorrowRate
      )} / ${renderPercent(obj.avg90DaysVariableBorrowRate)}`,*/
  },
  {
    id: "liquidityRate",
    numeric: true,
    sortable: true,
    label: "Liquidity rate % (now)", // /30d/90d
    getValue: (obj) => renderPercent(obj.liquidityRate),
    /*getValue: (obj) =>
      `${renderPercent(obj.liquidityRate)} / ${renderPercent(
        obj.avg30DaysLiquidityRate
      )}  / ${renderPercent(obj.avg90DaysLiquidityRate)}`,*/
  },
  {
    id: "lastUpdateTimestamp",
    sortable: true,
    numeric: true,
    label: "Last updated",
    getValue: (obj) => new Date(obj.lastUpdateTimestamp * 1000).toLocaleString("en-GB"),
  },
]

const CustomPaper = styled(Paper)(({ theme }) => ({
  root: {
    width: "100%",
    marginBottom: theme.spacing(2),
  },
}))

const Reserves: BlitzPage = () => {
  const {
    order = "desc",
    orderBy = "liquidityRate",
    poolId,
  } = useRouterQuery() as {
    order: "asc" | "desc"
    orderBy: string
    poolId: string | undefined
  }
  const [data] = useQuery(getReserves, { where: { poolId } }, { staleTime: 90000 })
  return (
    <div>
      <PoolFilter />
      <CustomPaper>
        <Table
          // className={classes.table}
          aria-labelledby="tableTitle"
          size={"small"}
          aria-label="enhanced table"
        >
          <EnhancedTableHead cells={cells} />
          <TableBody>
            {[...data.reserves]
              .sort((a, b) => {
                const cell = cells.find((cell) => cell.id === orderBy)
                if (order === "asc") {
                  if (cell?.numeric) return Number(a[orderBy]) - Number(b[orderBy])
                  return a[orderBy].localeCompare(b[orderBy])
                }
                if (cell?.numeric) return Number(b[orderBy]) - Number(a[orderBy])
                return b[orderBy].localeCompare(a[orderBy])
              })
              .map((reserve) => (
                <EnhancedTableRow key={reserve.id} cells={cells} field={reserve} />
              ))}
          </TableBody>
        </Table>
      </CustomPaper>
    </div>
  )
}

Reserves.suppressFirstRenderFlicker = true
Reserves.getLayout = (page) => <Layout title="Reserves">{page}</Layout>

export default Reserves
