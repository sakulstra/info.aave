import { Theme } from "@material-ui/core/styles"

declare module "*.module.scss" {
  const content: { [className: string]: string }
  export default content
}

declare module "*.module.css" {
  const content: { [className: string]: string }
  export default content
}

declare module "@material-ui/styles" {
  interface DefaultTheme extends Theme {
    breakpoints: any
  }
}
