import React, { useState, useEffect } from "react";
import List from "@mui/material/List";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import { AddCircle } from "@mui/icons-material";
import Pagination from "@mui/material/Pagination";
import { Spinner } from "flowbite-react";
import colors from "../../../theme";
import AdminListItem from "../../components/Admin/AdminListItem";
import AddAdminModal from "../../components/Admin/AddAdminModal";
import CongratulationsModal from "../../components/CongratulationsModal";
import ConfirmDeleteModal from "../../components/ConfirmDeleteModal";

const ITEMS_PER_PAGE = 20;

function SuperAdmin() {
  const [page, setPage] = useState(1);
  const [adminsList, setAdminsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isAddAdminModalOpen, setIsAddAdminModalOpen] = useState(false);
  const [showCongratulationsModal, setShowCongratulationsModal] =
    useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8000/admin/");
        if (!response.ok) {
          throw new Error("Failed to fetch admins");
        }
        const data = await response.json();
        console.log("Admins Results:", data);
        setAdminsList(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching admins:", error.message);
      }
    };

    // Fetch data initially
    fetchData();

    // Fetch data every 5 seconds
    const intervalId = setInterval(fetchData, 5000);

    // Clean up the interval to prevent memory leaks
    return () => clearInterval(intervalId);
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const startIndex = (page - 1) * ITEMS_PER_PAGE;
  const endIndex = page * ITEMS_PER_PAGE;

  // event handlers
  const handleAddAdmin = (newAdminData) => {
    // Logic to add admin goes here
    // On successful creation, close the add admin modal
    setIsAddAdminModalOpen(false);
    // Show congratulations modal
    setShowCongratulationsModal(true);
    // You can also fetch the updated list of admins and update state accordingly
  };

  // modal open event handlers
  const handleOpenAddAdminModal = () => {
    setIsAddAdminModalOpen(true);
  };

  const handleCloseAddAdminModal = () => {
    setIsAddAdminModalOpen(false);
  };

  const handleCloseCongratulationsModal = () => {
    setShowCongratulationsModal(false);
  };

  return (
    <div>
      <h1 className="font-bold text-2xl mb-2">Manage Admins</h1>
      <h1 className="font-bold text-2xl mb-2">
        Total Creators: {adminsList.length}
      </h1>
      <Box
        sx={{
          width: "100%",
          height: "80vh",
          overflow: "auto",
        }}
      >
        {loading ? (
          // Render spinner if loading is true
          <Spinner size="small" color="primary" />
        ) : (
          <List
            sx={{
              width: "100%",
              maxWidth: "100%",
              bgcolor: "background.paper",
            }}
          >
            {adminsList.slice(startIndex, endIndex).map((admin, index) => (
              <AdminListItem key={index} admin={admin} />
            ))}
          </List>
        )}
        {!loading && adminsList.length > ITEMS_PER_PAGE && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mt: 2,
            }}
          >
            <Pagination
              count={Math.ceil(adminsList.length / ITEMS_PER_PAGE)}
              page={page}
              onChange={handleChangePage}
              variant="outlined"
              shape="rounded"
            />
          </Box>
        )}

        {!loading && (
          // Render create admin button if loading is false
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              mt: 2,
              mr: 2,
            }}
          >
            <Fab
              variant="extended"
              sx={{ backgroundColor: colors.orange }}
              onClick={handleOpenAddAdminModal}
            >
              <AddCircle sx={{ mr: 1 }} />
              create admin
            </Fab>
          </Box>
        )}
      </Box>

      {/* Add Admin Modal */}
      <AddAdminModal
        isOpen={isAddAdminModalOpen}
        onClose={handleCloseAddAdminModal}
        onAddAdmin={handleAddAdmin}
      />

      {/* Congratulations Modal */}
      <CongratulationsModal
        isOpen={showCongratulationsModal}
        onClose={handleCloseCongratulationsModal}
      />
    </div>
  );
}

export default SuperAdmin;
