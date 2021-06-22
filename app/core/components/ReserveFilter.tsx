import { useQuery, useRouter } from "blitz"
import uniqBy from "lodash/uniqBy"
import { styled } from "@material-ui/styles"
import InputLabel from "@material-ui/core/InputLabel"
import MenuItem from "@material-ui/core/MenuItem"
import FormControl from "@material-ui/core/FormControl"
import Select from "@material-ui/core/Select"
import getReserveSymbols from "app/reserves/queries/getReserveSymbols"
import { useEffect } from "react"

const CustomFormControl = styled(FormControl)(({ theme }: any) => ({
  margin: theme.spacing(1),
  minWidth: 120,
}))

type ReserveFilterProps = {
  fieldName?: string
  label?: string
}

export function ReserveFilter({
  fieldName = "underlyingAsset",
  label = "Reserve",
}: ReserveFilterProps) {
  const [data] = useQuery(getReserveSymbols, {}, { cacheTime: 100000 })
  const { push, query } = useRouter()

  const currentAsset = query[fieldName]
  const uniqueAssets: { poolId: string; underlyingAsset: string; symbol: string }[] = uniqBy(
    data.reserves.filter((reserve) => {
      if (!query.poolId) return true
      if (query.poolId === reserve.poolId) return true
      return false
    }),
    "underlyingAsset"
  )

  const handleChange = (event) => {
    if (event.target.value) {
      query[fieldName] = event.target.value
    } else {
      delete query[fieldName]
    }
    push({ query }, undefined, { shallow: true })
  }

  useEffect(() => {
    if (currentAsset && !uniqueAssets.find((u) => u.underlyingAsset === currentAsset)) {
      delete query[fieldName]
      push({ query }, undefined, { shallow: true })
    }
  }, [currentAsset])

  return (
    <CustomFormControl variant="outlined">
      <InputLabel id="reserves-label">{label}</InputLabel>
      <Select
        labelId="reserves-label"
        id="reserves"
        value={query[fieldName] || ""}
        onChange={handleChange}
        label={label}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {uniqueAssets.map((reserve) => (
          <MenuItem key={reserve.underlyingAsset} value={reserve.underlyingAsset}>
            {reserve.symbol}
          </MenuItem>
        ))}
      </Select>
    </CustomFormControl>
  )
}
