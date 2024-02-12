import * as React from "react";
import { useState } from "react";

import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { ListItemButton } from "@mui/material";

function CustomListItem({
  primaryText,
  secondaryText,
  sideIconButton,
  buttonIcon,
  buttonText,
  onClick,
}) {
  return (
    <div>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt={primaryText} src="/src/assets/profile.png" />
        </ListItemAvatar>
        <ListItemText
          primary={primaryText}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              ></Typography>
              {secondaryText}
            </React.Fragment>
          }
        />
        {sideIconButton ? (
          <div className="flex justify-center align-middle self-end bg-blue-800 rounded-md">
            <ListItemButton onClick={onClick}>
              {buttonIcon}
              <h1 className="text-white">{buttonText}</h1>
            </ListItemButton>
          </div>
        ) : null}
      </ListItem>
      <Divider variant="inset" component="li" />
    </div>
  );
}

export default CustomListItem;
