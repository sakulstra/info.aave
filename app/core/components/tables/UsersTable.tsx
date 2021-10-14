import { useInfiniteQuery } from "blitz"
import getUsers from "app/users/queries/getUsers"
import LoadingButton from "@mui/lab/LoadingButton"
import { User, Prisma, Reserve as ReserveType } from "@prisma/client"
import { CellConfig, EnhancedTable, EnhancedTableProps } from "app/core/components/Table"
import { IconButton, Paper } from "@mui/material"
import Person from "@mui/icons-material/Person"

const cells: CellConfig<User & { reserve: ReserveType }>[] = [
  {
    id: "lastUpdateTimestamp",
    sortable: true,
    label: "Last updated",
    getValue: (obj) => new Date(obj.lastUpdateTimestamp * 1000).toLocaleString("en-GB"),
  },
  {
    id: "healthFactor",
    sortable: true,
    label: "Health Factor",
    getValue: (obj) => obj.healthFactor,
  },
  {
    id: "totalBorrowsUSD",
    numeric: true,
    sortable: true,
    label: "Total Borrows",
    suffix: "USD",
  },
  {
    id: "totalCollateralUSD",
    numeric: true,
    sortable: true,
    label: "Total Collateral",
    suffix: "USD",
  },
  {
    id: "totalLiquidityUSD",
    numeric: true,
    sortable: true,
    label: "Total Liquidity",
    suffix: "USD",
  },
  {
    id: "userId",
    sortable: true,
    label: "User",
    /*getValue: () => (
      <IconButton size="small">
        <Person color="primary" fontSize="inherit" />
      </IconButton>
    ),*/
    // getLink: (obj) => explorerLink({ poolId: obj.poolId, tx: obj.userId }), //`/user/${obj.userId}`,
  },
]

type UsersTableProps = {
  where?: Prisma.UserWhereInput
  orderBy?: Prisma.UserOrderByWithRelationInput
} & Partial<EnhancedTableProps>

export function UsersTable({ where, orderBy, ...rest }: UsersTableProps) {
  const [groups, { isFetching, isFetchingNextPage, fetchNextPage, hasNextPage }] = useInfiniteQuery(
    getUsers,
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
    <Paper sx={{ marginBottom: 2 }}>
      <EnhancedTable groups={groups} cells={cells} title={"Users"} {...rest} />
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
