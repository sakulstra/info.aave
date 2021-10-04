import { Theme } from "@mui/material/styles"

declare module "*.module.scss" {
  const content: { [className: string]: string }
  export default content
}

declare module "*.module.css" {
  const content: { [className: string]: string }
  export default content
}

declare module "@mui/styles" {
  interface DefaultTheme extends Theme {
    breakpoints: any
  }
}
