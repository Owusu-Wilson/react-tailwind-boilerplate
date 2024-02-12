import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

function AddCreatorModal({ isOpen, onClose, onAddCreator }) {
  const [creatorName, setCreatorName] = useState("");

  const [creatorEmail, setCreatorEmail] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/creators/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: creatorName,

          email: creatorEmail,
        }),
      });
      if (!response.ok) {
        throw new Error("Failed to add creator");
      }
      // Reset form fields
      setCreatorName("");

      setCreatorEmail("");
      // Close the modal
      onClose();
      // Trigger callback to update parent component
      onAddCreator();
    } catch (error) {
      console.error("Error adding creator:", error.message);
    }
  };

  return (
    <Modal open={isOpen} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          width: 400,
          bgcolor: "background.paper",
          border: "2px solid #000",
          boxShadow: 24,
          p: 4,
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <h2>Create New Creator</h2>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Creator Name"
            variant="outlined"
            fullWidth
            value={creatorName}
            onChange={(e) => setCreatorName(e.target.value)}
            margin="normal"
            required
          />

          <TextField
            label="Creator Email"
            variant="outlined"
            fullWidth
            value={creatorEmail}
            onChange={(e) => setCreatorEmail(e.target.value)}
            margin="normal"
            required
          />
          <Button type="submit" variant="contained" color="primary">
            Create Creator
          </Button>
        </form>
      </Box>
    </Modal>
  );
}

export default AddCreatorModal;
