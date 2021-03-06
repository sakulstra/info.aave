import React, { useEffect, useState } from "react"
import TextField from "@mui/material/TextField"
import DatePicker from "@mui/lab/DatePicker"
import { useRouter } from "blitz"
import { Box } from "@mui/material"
import dayjs from "dayjs"

export function FromToInput({ fieldName }) {
  const { replace, query } = useRouter()
  const [minValue, setMinValue] = useState<Date | null>(null)
  const [maxValue, setMaxValue] = useState<Date | null>(null)

  const handleChange = (fieldName: string) => (value: string | undefined) => {
    if (value) {
      query[fieldName] = value
    } else {
      delete query[fieldName]
    }
    replace({ query }, undefined, { shallow: true })
  }

  useEffect(() => {
    const from = query[`from${fieldName}`] as unknown as number
    const to = query[`to${fieldName}`] as unknown as number
    from && setMinValue(new Date(from * 1000))
    to && setMaxValue(new Date(to * 1000))
  }, [])

  return (
    <>
      <Box>
        <DatePicker
          label="From"
          value={minValue}
          onChange={(newValue: any) => {
            setMinValue(newValue)
            if (maxValue && newValue > maxValue) {
              setMaxValue(null)
              handleChange(`to${fieldName}`)(undefined)
            }
            handleChange(`from${fieldName}`)(newValue?.startOf("day").unix())
          }}
          renderInput={(params) => <TextField {...params} />}
          maxDate={dayjs()}
          disableMaskedInput
        />
      </Box>
      <Box>
        <DatePicker
          label="To"
          value={maxValue}
          onChange={(newValue: any) => {
            setMaxValue(newValue)
            handleChange(`to${fieldName}`)(newValue?.endOf("day").unix())
          }}
          renderInput={(params) => <TextField {...params} />}
          minDate={minValue || undefined}
          maxDate={dayjs()}
        />
      </Box>
    </>
  )
}
