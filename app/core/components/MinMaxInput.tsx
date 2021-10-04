import React, { useEffect, useState } from "react"
import TextField from "@mui/material/TextField"
import { useRouter } from "blitz"

export function MinMaxInput({ fieldName }) {
  const { replace, query } = useRouter()
  const [minValue, setMinValue] = useState<string>("")
  const [maxValue, setMaxValue] = useState<string>("")

  const handleChange = (fieldName) => (event) => {
    if (event.target.value) {
      query[fieldName] = event.target.value
    } else {
      delete query[fieldName]
    }
    replace({ query }, undefined, { shallow: true })
  }

  useEffect(() => {
    setMinValue((query[`min${fieldName}`] as string) || "")
    setMaxValue((query[`max${fieldName}`] as string) || "")
  }, [])

  return (
    <React.Fragment>
      <TextField
        id={`min-${fieldName}`}
        label={fieldName}
        variant="outlined"
        sx={{ maxWidth: 140 }}
        onChange={(e) => {
          handleChange(`min${fieldName}`)(e)
          setMinValue(e.target.value)
        }}
        type="number"
        value={minValue}
      />
      <span>-</span>
      <TextField
        id={`max-${fieldName}`}
        label={fieldName}
        variant="outlined"
        sx={{ maxWidth: 140 }}
        onChange={(e) => {
          handleChange(`max${fieldName}`)(e)
          setMaxValue(e.target.value)
        }}
        type="number"
        value={maxValue}
      />
    </React.Fragment>
  )
}
