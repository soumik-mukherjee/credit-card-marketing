import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from '@material-ui/core/CssBaseline';
import {
  SimpleMuiAppBar,
  PermanentClippedMuiDrawerMenu as DrawerMenu,
} from "@project/ui-components";

const useStyles = makeStyles((theme) => ({
  appShellRoot: {
    display: "flex",
  },

  content: {
    flexGrow: 1,
    padding: theme.spacing(3),

  },
}));

export default function DemoAppShell({
  onAppBarUserBtnClick,
  appBarTitle,
  appBarUserBtnLabel,
  onHomeItemClicked,
  onMyAccountItemClicked,
  onMyProfileItemClicked,
  children
}) {
  const classes = useStyles();

  const handleUserButtonClick = () => {
    onAppBarUserBtnClick();
  };

  return (
    <div className={classes.appShellRoot}>
         <CssBaseline />
      <SimpleMuiAppBar
        title={appBarTitle}
        userName={appBarUserBtnLabel}
        onUserButtonClick={handleUserButtonClick}
      />
      <DrawerMenu
        onHomeItemClicked={onHomeItemClicked}
        onMyAccountItemClicked={onMyAccountItemClicked}
        onMyProfileItemClicked={onMyProfileItemClicked}
      />
      <main className={classes.content}>
      <Toolbar />
        {children}
      </main>
    </div>
  );
}
