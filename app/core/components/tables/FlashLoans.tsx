import { useInfiniteQuery } from "blitz"
import getFlashLoans from "app/transactions/queries/getFlashLoans"
import LoadingButton from "@material-ui/lab/LoadingButton"
import { FlashLoan, Prisma, Reserve as ReserveType } from "@prisma/client"
import { CellConfig, EnhancedTable, EnhancedTableProps } from "app/core/components/Table"
import { IconButton, Paper } from "@material-ui/core"
import Person from "@material-ui/icons/Person"

const cells: CellConfig<FlashLoan & { reserve: ReserveType }>[] = [
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
    id: "totalFee",
    numeric: true,
    sortable: true,
    label: "Fee",
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
    getLink: (obj) => `/user/${obj.initiatorId}`,
    hideOnDetailView: true,
  },
]

type FlashLoansTableProps = {
  where?: Prisma.FlashLoanWhereInput
  orderBy?: Prisma.FlashLoanOrderByInput
} & Partial<EnhancedTableProps>

export function FlashLoansTable({
  where,
  orderBy = { timestamp: "desc" },
  ...rest
}: FlashLoansTableProps) {
  const [groups, { isFetching, isFetchingNextPage, fetchNextPage, hasNextPage }] = useInfiniteQuery(
    getFlashLoans,
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
      <EnhancedTable groups={groups} cells={cells} title="Flash loans" {...rest} />
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
