import { createTheme } from "@material-ui/core/styles"
import { red } from "@material-ui/core/colors"

export const getTheme = (darkMode: boolean) => {
  return createTheme({
    palette: {
      primary: {
        main: "#b5dcf6",
      },
      secondary: {
        main: "#478a35",
      },
      error: {
        main: red.A400,
      },
      mode: darkMode ? "dark" : "light",
    },
  })
}

export default getTheme(true)
