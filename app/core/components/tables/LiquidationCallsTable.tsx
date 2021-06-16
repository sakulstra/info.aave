import { useInfiniteQuery } from "blitz"
import getLiquidationCalls from "app/transactions/queries/getLiquidationCalls"
import LoadingButton from "@material-ui/lab/LoadingButton"
import { LiquidationCall, Prisma, Reserve as ReserveType } from "@prisma/client"
import { CellConfig, EnhancedTable, EnhancedTableProps } from "app/core/components/Table"
import { IconButton, Paper } from "@material-ui/core"
import Person from "@material-ui/icons/Person"

const cells: CellConfig<
  LiquidationCall & { principalReserve: ReserveType; collateralReserve: ReserveType }
>[] = [
  {
    id: "timestamp",
    sortable: true,
    label: "Date",
    getValue: (obj) => new Date(obj.timestamp * 1000).toLocaleString("en-GB"),
    getLink: (obj) => `https://etherscan.io/tx/${obj.id.replace(/:.*/, "")}`,
  },
  {
    id: "principalAmount",
    numeric: true,
    sortable: true,
    label: "Principal Amount",
  },
  {
    id: "principalReserveId",
    label: "Symbol",
    sortable: true,
    getValue: (obj) => obj.principalReserve.symbol,
  },
  {
    id: "collateralAmount",
    numeric: true,
    sortable: true,
    label: "Collateral Amount",
  },
  {
    id: "collateralReserveId",
    label: "Symbol",
    sortable: true,
    getValue: (obj) => obj.collateralReserve.symbol,
  },
  {
    id: "liquidatorId",
    label: "Liquidator",
    getValue: () => (
      <IconButton size="small">
        <Person color="primary" fontSize="inherit" />
      </IconButton>
    ),
    getLink: (obj) => `/user/${obj.liquidatorId}`,
  },
  {
    id: "userId",
    label: "User",
    getValue: () => (
      <IconButton size="small">
        <Person color="secondary" fontSize="inherit" />
      </IconButton>
    ),
    getLink: (obj) => `/user/${obj.userId}`,
    hideOnDetailView: true,
  },
]

type LiquidationCallsTableProps = {
  where?: Prisma.LiquidationCallWhereInput
  orderBy?: Prisma.LiquidationCallOrderByInput
} & Partial<EnhancedTableProps>

export function LiquidationCallsTable({
  where,
  orderBy = { timestamp: "desc" },
  ...rest
}: LiquidationCallsTableProps) {
  const [groups, { isFetching, isFetchingNextPage, fetchNextPage, hasNextPage }] = useInfiniteQuery(
    getLiquidationCalls,
    (page = { take: 30, skip: 0 }) => ({
      where,
      orderBy,
      ...page,
    }),
    {
      getNextPageParam: (lastGroup) => lastGroup.nextPage,
    }
  )
  return (
    <Paper sx={{ width: "100%", marginBottom: 2 }}>
      <EnhancedTable groups={groups} cells={cells} title="Liquidations" {...rest} />
      <LoadingButton
        sx={{ mx: 2, my: 2 }}
        loading={isFetching}
        onClick={() => fetchNextPage()}
        variant="outlined"
        disabled={!hasNextPage || !!isFetchingNextPage}
      >
        {hasNextPage ? "Load More" : "Nothing more to load"}
      </LoadingButton>
    </Paper>
  )
}
