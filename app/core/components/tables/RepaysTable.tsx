import { useInfiniteQuery } from "blitz"
import getRepays from "app/transactions/queries/getRepays"
import LoadingButton from "@material-ui/lab/LoadingButton"
import { Repay, Prisma, Reserve as ReserveType } from "@prisma/client"
import { CellConfig, EnhancedTable, EnhancedTableProps } from "app/core/components/Table"
import { IconButton, Paper } from "@material-ui/core"
import Person from "@material-ui/icons/Person"

const cells: CellConfig<Repay & { reserve: ReserveType }>[] = [
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

type RepaysTableProps = {
  where?: Prisma.RepayWhereInput
  orderBy?: Prisma.RepayOrderByWithRelationInput
} & Partial<EnhancedTableProps>

export function RepaysTable({ where, orderBy = { timestamp: "desc" }, ...rest }: RepaysTableProps) {
  const [groups, { isFetching, isFetchingNextPage, fetchNextPage, hasNextPage }] = useInfiniteQuery(
    getRepays,
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
      <EnhancedTable groups={groups} cells={cells} title="Repays" {...rest} />
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
