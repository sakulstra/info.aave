import { useInfiniteQuery } from "blitz"
import getBorrows from "app/transactions/queries/getBorrows"
import LoadingButton from "@mui/lab/LoadingButton"
import { Borrow, Prisma, Reserve as ReserveType } from "@prisma/client"
import { CellConfig, EnhancedTable, EnhancedTableProps } from "app/core/components/Table"
import { IconButton, Paper } from "@mui/material"
import Person from "@mui/icons-material/Person"
import { explorerLink } from "app/core/utils/explorerLinkBuilder"

const cells: CellConfig<Borrow & { reserve: ReserveType }>[] = [
  {
    id: "timestamp",
    sortable: true,
    label: "Date",
    getValue: (obj) => new Date(obj.timestamp * 1000).toLocaleString("en-GB"),
    getLink: (obj) => explorerLink({ poolId: obj.poolId, tx: obj.id }),
  },
  {
    id: "amount",
    numeric: true,
    sortable: true,
    label: "Amount",
  },
  {
    id: "underlyingAsset",
    label: "Symbol",
    sortable: true,
    getValue: (obj) => obj.reserve.symbol,
  },
  {
    id: "userId",
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

type BorrowsTableProps = {
  where?: Prisma.BorrowWhereInput
  orderBy?: Prisma.BorrowOrderByWithRelationInput
} & Partial<EnhancedTableProps>

export function BorrowsTable({
  where,
  orderBy = { timestamp: "desc" },
  ...rest
}: BorrowsTableProps) {
  const [groups, { isFetching, isFetchingNextPage, fetchNextPage, hasNextPage }] = useInfiniteQuery(
    getBorrows,
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
      <EnhancedTable groups={groups} cells={cells} title="Borrows" {...rest} />
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
