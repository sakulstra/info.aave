import { useInfiniteQuery } from "blitz"
import getUserReserves from "app/user-reserves/queries/getUserReserves"
import LoadingButton from "@material-ui/lab/LoadingButton"
import { FormattedUserReserve, Prisma, Reserve as ReserveType } from "@prisma/client"
import { CellConfig, EnhancedTable, EnhancedTableProps } from "app/core/components/Table"
import { IconButton, Paper } from "@material-ui/core"
import Person from "@material-ui/icons/Person"
import { POOL_NAME_MAP } from "../PoolFilter"

const cells: CellConfig<FormattedUserReserve & { reserve: ReserveType }>[] = [
  {
    id: "lastUpdateTimestamp",
    sortable: true,
    label: "Last updated",
    getValue: (obj) => new Date(obj.lastUpdateTimestamp * 1000).toLocaleString("en-GB"),
    getLink: (obj) => `https://etherscan.io/address/${obj.userId}`,
  },
  {
    id: "poolId",
    sortable: true,
    label: "Pool",
    getValue: (obj) => POOL_NAME_MAP[obj.poolId],
  },
  {
    id: "principalStableDebt",
    numeric: true,
    sortable: true,
    label: "Principal stable debt",
  },
  {
    id: "scaledVariableDebt",
    numeric: true,
    sortable: true,
    label: "Scaled variable debt",
  },
  {
    id: "stableBorrowRate",
    numeric: true,
    sortable: true,
    label: "Stable rate",
  },
  {
    id: "scaledATokenBalance",
    numeric: true,
    sortable: true,
    label: "Balance",
  },
  {
    id: "reserveId",
    label: "Symbol",
    sortable: true,
    getValue: (obj) => obj.reserve.symbol,
  },
  {
    id: "userId",
    sortable: true,
    label: "User",
    getValue: () => (
      <IconButton size="small">
        <Person color="primary" fontSize="inherit" />
      </IconButton>
    ),
    getLink: (obj) => `/user/${obj.userId}`,
    hideOnDetailView: true,
  },
]

type FormattedUserReservesTableProps = {
  where?: Prisma.FormattedUserReserveWhereInput
  orderBy?: Prisma.FormattedUserReserveOrderByInput
} & Partial<EnhancedTableProps>

export function FormattedUserReservesTable({
  where,
  orderBy = { lastUpdateTimestamp: "desc" },
  ...rest
}: FormattedUserReservesTableProps) {
  const [groups, { isFetching, isFetchingNextPage, fetchNextPage, hasNextPage }] = useInfiniteQuery(
    getUserReserves,
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
      <EnhancedTable groups={groups} cells={cells} {...rest} title="User Reserves" />
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
