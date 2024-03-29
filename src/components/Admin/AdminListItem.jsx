import * as React from "react";
import { useState } from "react";

import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { ListItemButton } from "@mui/material";
import { DeleteForever } from "@mui/icons-material";
import ConfirmDeleteModal from "../ConfirmDeleteModal";
import { delete_item } from "../../integration/crud-functions";

const BACKEND_URL = "http://localhost:8000/admin/";

function AdminListItem({ admin }) {
  const [showConfirmDeleteModal, setshowConfirmDeleteModal] = useState(false);
  const handleDelete = (item_id) => {
    console.log("About to delete", item_id);
    setshowConfirmDeleteModal(true);
  };
  const handleCloseConfirmDeleteModal = () => {
    setshowConfirmDeleteModal(false);
  };
  const handleConfirmDelete = () => {
    delete_item(admin.id, "admin");
    setshowConfirmDeleteModal(false);
  };

  return (
    <div>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt={`${admin.name}`} src="/src/assets/profile.png" />
        </ListItemAvatar>
        <ListItemText
          primary={`${admin.name} - ${admin.role}`}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              ></Typography>
              {admin.bio}
            </React.Fragment>
          }
        />
        <div className="flex justify-center align-middle self-end bg-blue-800 rounded-md">
          <ListItemButton onClick={() => handleDelete(admin)}>
            <DeleteForever sx={{ color: "white" }} />
            <h1 className="text-white">Delete</h1>
          </ListItemButton>
        </div>
      </ListItem>
      <Divider variant="inset" component="li" />
      <ConfirmDeleteModal
        isOpen={showConfirmDeleteModal}
        onClose={handleCloseConfirmDeleteModal}
        onCOnfirm={handleConfirmDelete}
        item_to_delete={admin.name}
      />
    </div>
  );
}

export default AdminListItem;
