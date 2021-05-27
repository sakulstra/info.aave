import * as React from "react"
import Divider from "@material-ui/core/Divider"
import InboxIcon from "@material-ui/icons/MoveToInbox"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import TwitterIcon from "@material-ui/icons/Twitter"
import { makeStyles } from "@material-ui/core/styles"
import Link from "app/core/components/Link"
import { useRouter } from "blitz"

const useStyles = makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
}))

const LINKS = [
  { href: "/", icon: InboxIcon, text: "Dashboard" },
  { href: "/reserves", icon: InboxIcon, text: "Reserves" },
  { href: "/users", text: "Users" },
  { href: "/user-reserves", icon: InboxIcon, text: "User Reserves" },
  { href: "/liquidations", icon: InboxIcon, text: "Liquidations" },
  { href: "/flash-loans", icon: InboxIcon, text: "Flash loans" },
  { href: "/borrows", icon: InboxIcon, text: "Borrows" },
  { href: "/repays", icon: InboxIcon, text: "Repays" },
  { href: "/deposits", icon: InboxIcon, text: "Deposits" },
  { href: "/withdrawals", icon: InboxIcon, text: "Withdrawals" },
] as const

type ResponsiveDrawerProps = {
  handleClose?: () => void
}

export function ResponsiveDrawer({ handleClose }: ResponsiveDrawerProps) {
  const classes = useStyles()
  const { route } = useRouter()
  return (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        {LINKS.map((link) => (
          <ListItem
            button
            key={link.href}
            href={link.href}
            component={Link}
            selected={route === link.href}
            onClick={handleClose}
          >
            <ListItemText primary={link.text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <div />
      <List>
        <ListItem button component={Link} href="https://twitter.com/sakulstra" target="__BLANK">
          <ListItemIcon>
            <TwitterIcon />
          </ListItemIcon>
        </ListItem>
      </List>
    </div>
  )
}