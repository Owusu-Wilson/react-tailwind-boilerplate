import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const ConfirmDeleteModal = ({ isOpen, onClose, onCOnfirm, item_to_delete }) => {
  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{
        borderRadius: 20,
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
        }}
      >
        {/* <img
          style={{
            width: "200px",
            height: "150px",
            objectFit: "cover", // Ensure the image covers the entire space
            maxWidth: "100%", // Ensure the image doesn't exceed the container width
            maxHeight: "100%", // Ensure the image doesn't exceed the container height
          }}
          src="https://t4.ftcdn.net/jpg/05/19/11/19/360_F_519111983_c8UDZWAMpgHNOrn0bKkbPJCSziy7ze9m.jpg"
          alt="confetti"
          className="p-4"
        /> */}
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Confirm Deletion
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Do you want to delete{" "}
          <span className="font-bold italic"> {item_to_delete}</span>
        </Typography>
        <Button onClick={onCOnfirm} sx={{ mt: 2 }}>
          Confirm
        </Button>
        <Button onClick={onClose} sx={{ mt: 2 }}>
          Cancel
        </Button>
      </Box>
    </Modal>
  );
};

export default ConfirmDeleteModal;
