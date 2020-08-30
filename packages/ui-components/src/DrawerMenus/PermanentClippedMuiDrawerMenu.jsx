import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HomeIcon from '@material-ui/icons/Home';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import AccountBoxIcon from '@material-ui/icons/AccountBox';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    background: theme.palette.primary.dark,
  },
  drawerContainer: {
    overflow: "auto",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  itemPrimary: {
    color: theme.palette.primary.contrastText,
  },
  drawerDividerLight: {
    backgroundColor: theme.palette.primary.contrastText,
    height: theme.spacing(0.1),
  },
}));

export default function PermanentClippedMuiDrawerMenu({
  onHomeItemClicked,
  onMyAccountItemClicked,
  onMyProfileItemClicked,
}) {
  const classes = useStyles();

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <Toolbar />
      <div className={classes.drawerContainer}>
        <List>
          <ListItem button key="home" onClick={onHomeItemClicked}>
            <ListItemIcon>
              <HomeIcon
                color="primary"
                classes={{ colorPrimary: classes.itemPrimary }}
              />
            </ListItemIcon>
            <ListItemText
              primary="Home"
              classes={{ primary: classes.itemPrimary }}
            />
          </ListItem>
          <ListItem button key="myAccount" onClick={onMyAccountItemClicked}>
            <ListItemIcon>
              <CreditCardIcon
                color="primary"
                classes={{ colorPrimary: classes.itemPrimary }}
              />
            </ListItemIcon>
            <ListItemText
              primary="My Account"
              classes={{ primary: classes.itemPrimary }}
            />
          </ListItem>
        </List>
        <Divider light={true} classes={{ light: classes.drawerDividerLight }} />
        <List>
          <ListItem button key="myProfile" onClick={onMyProfileItemClicked}>
            <ListItemIcon>
              <AccountBoxIcon
                color="primary"
                classes={{ colorPrimary: classes.itemPrimary }}
              />
            </ListItemIcon>
            <ListItemText
              primary="My Profile"
              classes={{ primary: classes.itemPrimary }}
            />
          </ListItem>
        </List>
      </div>
    </Drawer>
  );
}
