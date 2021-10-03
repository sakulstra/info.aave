import { useInfiniteQuery } from "blitz"
import getWithdrawals from "app/transactions/queries/getWithdrawals"
import LoadingButton from "@mui/lab/LoadingButton"
import { Withdrawal, Prisma, Reserve as ReserveType } from "@prisma/client"
import { CellConfig, EnhancedTable, EnhancedTableProps } from "app/core/components/Table"
import { IconButton, Paper } from "@mui/material"
import Person from "@mui/icons-material/Person"

const cells: CellConfig<Withdrawal & { reserve: ReserveType }>[] = [
  {
    id: "timestamp",
    sortable: true,
    label: "Date",
    getValue: (obj) => new Date(obj.timestamp * 1000).toLocaleString("en-GB"),
    getLink: (obj) => `https://etherscan.io/tx/${obj.id.replace(/:.*/, "")}`,
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
    getValue: (obj) => obj.reserve.symbol,
    sortable: true,
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

type WithdrawalsTableProps = {
  where?: Prisma.WithdrawalWhereInput
  orderBy?: Prisma.WithdrawalOrderByWithRelationInput
} & Partial<EnhancedTableProps>

export function WithdrawalsTable({
  where,
  orderBy = { timestamp: "desc" },
  ...rest
}: WithdrawalsTableProps) {
  const [groups, { isFetching, isFetchingNextPage, fetchNextPage, hasNextPage }] = useInfiniteQuery(
    getWithdrawals,
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
      <EnhancedTable groups={groups} cells={cells} title="Withdrawals" {...rest} />
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
