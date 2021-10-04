import * as React from "react"
import Divider from "@mui/material/Divider"
import InboxIcon from "@mui/icons-material/MoveToInbox"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import TwitterIcon from "@mui/icons-material/Twitter"
import Link from "app/core/components/Link"
import { useRouter } from "blitz"
import Toolbar from "@mui/material/Toolbar"

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
  const { route } = useRouter()
  return (
    <div>
      <Toolbar />
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
