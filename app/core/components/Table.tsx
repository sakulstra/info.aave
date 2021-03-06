import TableCell from "@mui/material/TableCell"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import TableSortLabel from "@mui/material/TableSortLabel"
import TableContainer from "@mui/material/TableContainer"
import { Paper, Table, TableBody, Toolbar, Typography, Box } from "@mui/material"
import { visuallyHidden } from "@mui/utils"
import Link from "app/core/components/Link"
import { useRouter } from "blitz"
import { Fragment, ReactNode } from "react"

export interface CellConfig<T> {
  id: string
  numeric?: boolean
  sortable?: boolean
  label: string
  getValue?: (obj: T) => string | number | ReactNode
  getLink?: (obj: T) => string
  hideOnDetailView?: boolean
  suffix?: string
}

type EnhancedTableHeadProps = {
  cells: CellConfig<any>[]
  disableSorting?: boolean
  detailView?: boolean
}

export function EnhancedTableHead({ cells, disableSorting, detailView }: EnhancedTableHeadProps) {
  const { push, query } = useRouter()
  const { order, orderBy } = query as { order: "asc" | "desc"; orderBy: string }
  const createSortHandler = (property) => (event) => {
    const newOrder = query.orderBy === property && query.order === "desc" ? "asc" : "desc"
    query.order = newOrder
    query.orderBy = property
    push({ query }, undefined, { shallow: true })
  }

  return (
    <TableHead>
      <TableRow>
        {cells
          .filter((cell) => !detailView || !cell.hideOnDetailView)
          .map((headCell) => (
            <TableCell
              key={headCell.id}
              align={headCell.numeric ? "right" : "left"}
              sortDirection={orderBy === headCell.id ? order : false}
            >
              {!disableSorting && headCell.sortable ? (
                <TableSortLabel
                  active={orderBy === headCell.id}
                  direction={orderBy === headCell.id ? order : "asc"}
                  onClick={createSortHandler(headCell.id)}
                >
                  {headCell.label}
                  {orderBy === headCell.id ? (
                    <Box component="span" sx={visuallyHidden as any}>
                      {order === "desc" ? "sorted descending" : "sorted ascending"}
                    </Box>
                  ) : null}
                </TableSortLabel>
              ) : (
                headCell.label
              )}
            </TableCell>
          ))}
      </TableRow>
    </TableHead>
  )
}

function readableNumber(value: number = 0) {
  if (value === -1) return `-`
  if (Math.abs(value) === 0) return 0
  if (Math.abs(value) < 0.0001)
    return value.toLocaleString("en-US", { minimumFractionDigits: 8, maximumFractionDigits: 8 })
  if (Math.abs(value) < 0.01)
    return value.toLocaleString("en-US", { minimumFractionDigits: 6, maximumFractionDigits: 6 })
  return value.toLocaleString("en-US", { minimumFractionDigits: 4, maximumFractionDigits: 4 })
}

type EnhancedTableRowProps = {
  field: any
  cells: CellConfig<any>[]
  detailView?: boolean
}

export function EnhancedTableRow({ field, cells, detailView }: EnhancedTableRowProps) {
  return (
    <TableRow hover tabIndex={-1}>
      {cells
        .filter((cell) => !detailView || !cell.hideOnDetailView)
        .map((cell) => {
          const value = cell.getValue ? cell.getValue(field) : field[cell.id]
          const formattedValue = cell.numeric ? readableNumber(value) : value
          const href = cell.getLink ? cell.getLink(field) : ""

          return (
            <TableCell align={cell.numeric ? "right" : "left"} key={cell.id}>
              {href ? <Link href={href}>{formattedValue}</Link> : formattedValue}
              {cell.suffix && ` ${cell.suffix}`}
            </TableCell>
          )
        })}
    </TableRow>
  )
}

export type EnhancedTableProps = {
  cells: CellConfig<any>[]
  groups: { items: any[]; count: number }[]
  disableSorting?: boolean
  detailView?: boolean
  title?: string
}

export function EnhancedTable({
  cells,
  groups = [],
  disableSorting,
  detailView,
  title,
}: EnhancedTableProps) {
  return (
    <>
      {title && (
        <Toolbar variant="dense" disableGutters sx={{ mx: 2 }}>
          <Typography variant="h6" id="tableTitle" component="div" sx={{ flexGrow: 1 }}>
            {title}
          </Typography>
          <Typography variant="button">Count {groups?.[0]?.count || "?"}</Typography>
        </Toolbar>
      )}
      <TableContainer component={Paper} sx={{ maxHeight: detailView ? "350px" : undefined }}>
        <Table aria-labelledby="tableTitle" size={"small"} aria-label="enhanced table">
          <EnhancedTableHead
            cells={cells}
            disableSorting={disableSorting}
            detailView={detailView}
          />
          <TableBody>
            {groups.map((group, i) => (
              <Fragment key={i}>
                {group.items.map((item, ix) => (
                  <EnhancedTableRow key={ix} cells={cells} field={item} detailView={detailView} />
                ))}
              </Fragment>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}
