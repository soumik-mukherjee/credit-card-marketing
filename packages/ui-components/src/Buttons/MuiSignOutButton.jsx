import React from "react";
import Button from "@material-ui/core/Button";
import ExitToAppOutlinedIcon from "@material-ui/icons/ExitToAppOutlined";

const MuiSignOutButton = ({ color, disabled, onSignOutClick, size }) => {
  return (
    <Button
      variant="contained"
      color={color}
      disabled={disabled}
      onClick={onSignOutClick}
      size={size}
      startIcon={<ExitToAppOutlinedIcon />}
    >
      Sign Out
    </Button>
  );
};

export default MuiSignOutButton
