import { useInfiniteQuery } from "blitz"
import getUsers from "app/users/queries/getUsers"
import LoadingButton from "@material-ui/lab/LoadingButton"
import { User, Prisma, Reserve as ReserveType } from "@prisma/client"
import { CellConfig, EnhancedTable, EnhancedTableProps } from "app/core/components/Table"
import { IconButton, Paper } from "@material-ui/core"
import Person from "@material-ui/icons/Person"

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
    id: "totalBorrowsETH",
    numeric: true,
    sortable: true,
    label: "Total Borrows",
    suffix: "ETH",
  },
  {
    id: "totalCollateralETH",
    numeric: true,
    sortable: true,
    label: "Total Collateral",
    suffix: "ETH",
  },
  {
    id: "totalLiquidityETH",
    numeric: true,
    sortable: true,
    label: "Total Liquidity",
    suffix: "ETH",
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
    // getLink: (obj) => `https://etherscan.io/address/${obj.userId}`, //`/user/${obj.userId}`,
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
