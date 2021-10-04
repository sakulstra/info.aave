import { useTheme } from "@mui/material/styles"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import IconButton from "@mui/material/IconButton"
import MenuIcon from "@mui/icons-material/Menu"
import Drawer from "@mui/material/Drawer"
import { ResponsiveDrawer } from "./Drawer"
import { useState } from "react"
import { Box, Container } from "@mui/material"
import { makeStyles } from "@mui/styles"

const drawerWidth = 240

const useStyles = makeStyles((theme: any) => ({
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  title: {
    flexGrow: 1,
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    boxSizing: "border-box",
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(2),
    backgroundColor: theme.palette.background.default,
    maxWidth: "calc(100%)",
  },
}))

export function Header({ children }) {
  const classes = useStyles()
  const theme = useTheme()
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title} component="div">
            info.aave (WIP)
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        <Drawer
          sx={{ display: { xs: "block", md: "none" } }}
          variant="temporary"
          anchor={theme.direction === "rtl" ? "right" : "left"}
          open={mobileOpen}
          onClose={handleDrawerToggle}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          <ResponsiveDrawer handleClose={handleDrawerToggle} />
        </Drawer>
        <Drawer
          sx={{ display: { md: "block", xs: "none" } }}
          classes={{
            paper: classes.drawerPaper,
          }}
          variant="permanent"
          open
        >
          <ResponsiveDrawer />
        </Drawer>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Container maxWidth="xl" disableGutters>
          {children}
        </Container>
      </main>
    </Box>
  )
}
