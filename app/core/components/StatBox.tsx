import { Paper, Typography } from "@material-ui/core"

type StatBoxProps = {
  value: number
  title: string
}

export function StatBox({ value, title }: StatBoxProps) {
  return (
    <Paper elevation={3} square sx={{ paddingX: 2, paddingY: 1 }}>
      <Typography variant="h5" align="center">
        {value.toLocaleString("en")}
      </Typography>
      <Typography color="textSecondary" align="center">
        {title}
      </Typography>
    </Paper>
  )
}
