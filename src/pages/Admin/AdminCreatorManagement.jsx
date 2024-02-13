import React, { useState, useEffect } from "react";
import List from "@mui/material/List";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import { AddCircle } from "@mui/icons-material";
import Pagination from "@mui/material/Pagination";
import { Spinner } from "flowbite-react";
import colors from "../../../theme";
import AdminListItem from "../../components/Admin/AdminListItem";
import AddCreatorModal from "../../components/Admin/AddCreatorModal";
import CongratulationsModal from "../../components/CongratulationsModal";
import CustomListItem from "../../components/CustomListItem";
import { fetch_items } from "../../integration/crud-functions";
const ITEMS_PER_PAGE = 20;

function AdminCreatorManagement() {
  const [page, setPage] = useState(1);
  const [creatorsList, setCreatorsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isAddCreatorModalOpen, setIsAddCreatorModalOpen] = useState(false);
  const [showCongratulationsModal, setShowCongratulationsModal] =
    useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch_items("creators"); // Use fetch_items function from CRUD module
        console.log("Creators Results:", data);
        setCreatorsList(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching creators:", error.message);
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

  const handleOpenAddCreatorModal = () => {
    setIsAddCreatorModalOpen(true);
  };

  const handleCloseAddCreatorModal = () => {
    setIsAddCreatorModalOpen(false);
  };

  const handleAddCreator = (newCreatorData) => {
    // Logic to add creator goes here
    // On successful creation, close the add creator modal
    setIsAddCreatorModalOpen(false);
    // Show congratulations modal
    setShowCongratulationsModal(true);
    // You can also fetch the updated list of creators and update state accordingly
  };

  const handleCloseCongratulationsModal = () => {
    setShowCongratulationsModal(false);
  };

  return (
    <div>
      <h1 className="font-bold text-2xl mb-2">Manage Creators</h1>
      <h1 className="font-bold text-2xl mb-2">
        Total Creators: {creatorsList.length}
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
            {creatorsList.slice(startIndex, endIndex).map((creator, index) => (
              <CustomListItem
                key={index}
                primaryText={creator.name}
                secondaryText={creator.email}
              />
            ))}
          </List>
        )}
        {!loading && creatorsList.length > ITEMS_PER_PAGE && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mt: 2,
            }}
          >
            <Pagination
              count={Math.ceil(creatorsList.length / ITEMS_PER_PAGE)}
              page={page}
              onChange={handleChangePage}
              variant="outlined"
              shape="rounded"
            />
          </Box>
        )}

        {!loading && (
          // Render create creator button if loading is false
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
              onClick={handleOpenAddCreatorModal}
            >
              <AddCircle sx={{ mr: 1 }} />
              create creator
            </Fab>
          </Box>
        )}
      </Box>

      {/* Add Creator Modal */}
      <AddCreatorModal
        isOpen={isAddCreatorModalOpen}
        onClose={handleCloseAddCreatorModal}
        onAddCreator={handleAddCreator}
      />

      {/* Congratulations Modal */}
      <CongratulationsModal
        isOpen={showCongratulationsModal}
        onClose={handleCloseCongratulationsModal}
      />
    </div>
  );
}

export default AdminCreatorManagement;
