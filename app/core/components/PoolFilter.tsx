import { useRouter } from "blitz"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import Select from "@mui/material/Select"
import { addresses } from "app/core/constants"

export const POOL_NAME_MAP = {
  [addresses.ADDRESS_PROVIDERS.V2.AAVE]: "Proto",
  [addresses.ADDRESS_PROVIDERS.POLYGON.AAVE]: "Proto (Matic)",
  [addresses.ADDRESS_PROVIDERS.V2.AMM]: "AMM",
  [addresses.ADDRESS_PROVIDERS.AVALANCHE.AAVE]: "Proto (Avalanche)",
}

type ReserveFilterProps = {
  fieldName?: string
  label?: string
}

export function PoolFilter({ fieldName = "poolId", label = "Pool" }: ReserveFilterProps) {
  const { push, query } = useRouter()

  const handleChange = (event) => {
    if (event.target.value) {
      query[fieldName] = event.target.value
    } else {
      delete query[fieldName]
    }
    push({ query }, undefined, { shallow: true })
  }

  return (
    <FormControl variant="outlined" sx={{ marginY: 1, minWidth: 120 }}>
      <InputLabel id="pools-label">{label}</InputLabel>
      <Select
        labelId="pools-label"
        id="pools"
        value={query[fieldName] || ""}
        onChange={handleChange}
        label={label}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {Object.keys(POOL_NAME_MAP).map((pool) => (
          <MenuItem key={pool} value={pool}>
            {POOL_NAME_MAP[pool] || pool}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}
