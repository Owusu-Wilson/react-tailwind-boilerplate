import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

function AddAdminModal({ isOpen, onClose, onAddAdmin }) {
  const [adminName, setAdminName] = useState("");
  const [adminRole, setAdminRole] = useState("");
  const [adminBio, setAdminBio] = useState("");
  const [adminEmail, setAdminEmail] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/admin/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: adminName,
          role: adminRole,
          bio: adminBio,
          email: adminEmail, // Include email in the request body
        }),
      });
      if (!response.ok) {
        throw new Error("Failed to add admin");
      }
      // Reset form fields
      setAdminName("");
      setAdminRole("");
      setAdminBio("");
      setAdminEmail("");
      // Close the modal
      onClose();
      // Trigger callback to update parent component
      onAddAdmin();
    } catch (error) {
      console.error("Error adding admin:", error.message);
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
        <h2>Create New Admin</h2>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Admin Name"
            variant="outlined"
            fullWidth
            value={adminName}
            onChange={(e) => setAdminName(e.target.value)}
            margin="normal"
            required
          />
          <TextField
            label="Admin Role"
            variant="outlined"
            fullWidth
            value={adminRole}
            onChange={(e) => setAdminRole(e.target.value)}
            margin="normal"
            required
          />
          <TextField
            label="Admin Bio"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            value={adminBio}
            onChange={(e) => setAdminBio(e.target.value)}
            margin="normal"
            required
          />
          <TextField
            label="Admin Email"
            variant="outlined"
            fullWidth
            value={adminEmail}
            onChange={(e) => setAdminEmail(e.target.value)}
            margin="normal"
            required
          />
          <Button type="submit" variant="contained" color="primary">
            Create Admin
          </Button>
        </form>
      </Box>
    </Modal>
  );
}

export default AddAdminModal;
