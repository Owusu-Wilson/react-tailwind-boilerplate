import React, { useState } from "react";
import CampaignItem from "../../components/Creator/CampaignItem";
import List from "@mui/material/List";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import { AddCircle } from "@mui/icons-material";
import Pagination from "@mui/material/Pagination";

import colors from "../../../theme";

const imgLink =
  "https://img.freepik.com/premium-vector/culinary-channel-food-tv-logo_18099-1622.jpg";

const imgLink2 =
  "https://1000logos.net/wp-content/uploads/2020/09/Food-Network-Logo.png";

const ITEMS_PER_PAGE = 20; // Number of items to display per page
const campaignList = [
  {
    name: "100K Mission",
    channel: { name: "Mongo TV", image: imgLink },
    n_target: 12000,
    target_reached: "Tech",
    key: 1,
  },
  {
    name: "100K Mission",
    channel: { name: "Mongo TV", image: imgLink },
    n_target: 12000,
    target_reached: "Tech",
    key: 2,
  },
  {
    name: "100K Mission",
    channel: { name: "Mongo TV", image: imgLink },
    n_target: 12000,
    target_reached: "Tech",
    key: 3,
  },
  {
    name: "100K Mission",
    channel: { name: "Mongo TV", image: imgLink },
    n_target: 12000,
    target_reached: "Tech",
    key: 4,
  },
  {
    name: "100K Mission",
    channel: { name: "Mongo TV", image: imgLink },
    n_target: 12000,
    target_reached: "Tech",
    key: 5,
  },
  {
    name: "100K Mission",
    channel: { name: "Mongo TV", image: imgLink },
    n_target: 12000,
    target_reached: "Tech",
    key: 6,
  },
  {
    name: "100K Mission",
    channel: { name: "Mongo TV", image: imgLink },
    n_target: 12000,
    target_reached: "Tech",
    key: 7,
  },
  {
    name: "100K Mission",
    channel: { name: "Mongo TV", image: imgLink },
    n_target: 12000,
    target_reached: "Tech",
    key: 7,
  },
  {
    name: "100K Mission",
    channel: { name: "Mongo TV", image: imgLink },
    n_target: 12000,
    target_reached: "Tech",
    key: 7,
  },
  {
    name: "100K Mission",
    channel: { name: "Mongo TV", image: imgLink },
    n_target: 12000,
    target_reached: "Tech",
    key: 7,
  },
  {
    name: "100K Mission",
    channel: { name: "Mongo TV", image: imgLink },
    n_target: 12000,
    target_reached: "Tech",
    key: 7,
  },
  {
    name: "100K Mission",
    channel: { name: "Mongo TV", image: imgLink },
    n_target: 12000,
    target_reached: "Tech",
    key: 7,
  },
  {
    name: "100K Mission",
    channel: { name: "Mongo TV", image: imgLink },
    n_target: 12000,
    target_reached: "Tech",
    key: 7,
  },
  {
    name: "100K Mission",
    channel: { name: "Mongo TV", image: imgLink },
    n_target: 12000,
    target_reached: "Tech",
    key: 7,
  },
  {
    name: "100K Mission",
    channel: { name: "Mongo TV", image: imgLink },
    n_target: 12000,
    target_reached: "Tech",
    key: 7,
  },
  {
    name: "100K Mission",
    channel: { name: "Mongo TV", image: imgLink },
    n_target: 12000,
    target_reached: "Tech",
    key: 7,
  },
  {
    name: "100K Mission",
    channel: { name: "Mongo TV", image: imgLink },
    n_target: 12000,
    target_reached: "Tech",
    key: 7,
  },
  {
    name: "100K Mission",
    channel: { name: "Mongo TV", image: imgLink },
    n_target: 12000,
    target_reached: "Tech",
    key: 7,
  },
  {
    name: "100K Mission",
    channel: { name: "Mongo TV", image: imgLink },
    n_target: 12000,
    target_reached: "Tech",
    key: 7,
  },
  {
    name: "100K Mission",
    channel: { name: "Mongo TV", image: imgLink },
    n_target: 12000,
    target_reached: "Tech",
    key: 7,
  },
  {
    name: "100K Mission",
    channel: { name: "Mongo TV", image: imgLink },
    n_target: 12000,
    target_reached: "Tech",
    key: 7,
  },
  {
    name: "100K Mission",
    channel: { name: "Mongo TV", image: imgLink },
    n_target: 12000,
    target_reached: "Tech",
    key: 7,
  },
  {
    name: "100K Mission",
    channel: { name: "Mongo TV", image: imgLink },
    n_target: 12000,
    target_reached: "Tech",
    key: 7,
  },
  {
    name: "100K Mission",
    channel: { name: "Mongo TV", image: imgLink },
    n_target: 12000,
    target_reached: "Tech",
    key: 7,
  },
  {
    name: "100K Mission",
    channel: { name: "Mongo TV", image: imgLink },
    n_target: 12000,
    target_reached: "Tech",
    key: 7,
  },
  {
    name: "100K Mission",
    channel: { name: "Mongo TV", image: imgLink },
    n_target: 12000,
    target_reached: "Tech",
    key: 7,
  },
  {
    name: "100K Mission",
    channel: { name: "Mongo TV", image: imgLink },
    n_target: 12000,
    target_reached: "Tech",
    key: 7,
  },
  {
    name: "100K Mission",
    channel: { name: "Mongo TV", image: imgLink },
    n_target: 12000,
    target_reached: "Tech",
    key: 7,
  },
  {
    name: "100K Mission",
    channel: { name: "Mongo TV", image: imgLink },
    n_target: 12000,
    target_reached: "Tech",
    key: 7,
  },
  {
    name: "100K Mission",
    channel: { name: "Mongo TV", image: imgLink },
    n_target: 12000,
    target_reached: "Tech",
    key: 7,
  },
  {
    name: "100K Mission",
    channel: { name: "Mongo TV", image: imgLink },
    n_target: 12000,
    target_reached: "Tech",
    key: 7,
  },
  {
    name: "100K Mission",
    channel: { name: "Mongo TV", image: imgLink },
    n_target: 12000,
    target_reached: "Tech",
    key: 7,
  },
  {
    name: "100K Mission",
    channel: { name: "Mongo TV", image: imgLink },
    n_target: 12000,
    target_reached: "Tech",
    key: 7,
  },
  {
    name: "100K Mission",
    channel: { name: "Mongo TV", image: imgLink },
    n_target: 12000,
    target_reached: "Tech",
    key: 7,
  },
  {
    name: "100K Mission",
    channel: { name: "Mongo TV", image: imgLink },
    n_target: 12000,
    target_reached: "Tech",
    key: 7,
  },
  {
    name: "100K Mission",
    channel: { name: "Mongo TV", image: imgLink },
    n_target: 12000,
    target_reached: "Tech",
    key: 7,
  },
  {
    name: "100K Mission",
    channel: { name: "Mongo TV", image: imgLink },
    n_target: 12000,
    target_reached: "Tech",
    key: 7,
  },
  {
    name: "100K Mission",
    channel: { name: "Mongo TV", image: imgLink },
    n_target: 12000,
    target_reached: "Tech",
    key: 7,
  },
  {
    name: "100K Mission",
    channel: { name: "Mongo TV", image: imgLink },
    n_target: 12000,
    target_reached: "Tech",
    key: 7,
  },
  {
    name: "100K Mission",
    channel: { name: "Mongo TV", image: imgLink },
    n_target: 12000,
    target_reached: "Tech",
    key: 7,
  },
  {
    name: "100K Mission",
    channel: { name: "Mongo TV", image: imgLink },
    n_target: 12000,
    target_reached: "Tech",
    key: 7,
  },
  {
    name: "100K Mission",
    channel: { name: "Mongo TV", image: imgLink },
    n_target: 12000,
    target_reached: "Tech",
    key: 7,
  },
  {
    name: "100K Mission",
    channel: { name: "Mongo TV", image: imgLink },
    n_target: 12000,
    target_reached: "Tech",
    key: 7,
  },
  {
    name: "100K Mission",
    channel: { name: "Mongo TV", image: imgLink },
    n_target: 12000,
    target_reached: "Tech",
    key: 7,
  },
  {
    name: "100K Mission",
    channel: { name: "Mongo TV", image: imgLink },
    n_target: 12000,
    target_reached: "Tech",
    key: 7,
  },
  {
    name: "100K Mission",
    channel: { name: "Mongo TV", image: imgLink },
    n_target: 12000,
    target_reached: "Tech",
    key: 7,
  },
  {
    name: "100K Mission",
    channel: { name: "Mongo TV", image: imgLink },
    n_target: 12000,
    target_reached: "Tech",
    key: 7,
  },
  {
    name: "100K Mission",
    channel: { name: "Mongo TV", image: imgLink },
    n_target: 12000,
    target_reached: "Tech",
    key: 7,
  },
  {
    name: "100K Mission",
    channel: { name: "Mongo TV", image: imgLink },
    n_target: 12000,
    target_reached: "Tech",
    key: 7,
  },
  {
    name: "100K Mission",
    channel: { name: "Mongo TV", image: imgLink },
    n_target: 12000,
    target_reached: "Tech",
    key: 7,
  },
  {
    name: "100K Mission",
    channel: { name: "Mongo TV", image: imgLink },
    n_target: 12000,
    target_reached: "Tech",
    key: 7,
  },
  {
    name: "100K Mission",
    channel: { name: "Mongo TV", image: imgLink },
    n_target: 12000,
    target_reached: "Tech",
    key: 7,
  },
  {
    name: "100K Mission",
    channel: { name: "Mongo TV", image: imgLink },
    n_target: 12000,
    target_reached: "Tech",
    key: 7,
  },
  {
    name: "100K Mission",
    channel: { name: "Mongo TV", image: imgLink },
    n_target: 12000,
    target_reached: "Tech",
    key: 7,
  },
  {
    name: "100K Mission",
    channel: { name: "Mongo TV", image: imgLink },
    n_target: 12000,
    target_reached: "Tech",
    key: 7,
  },
  {
    name: "100K Mission",
    channel: { name: "Mongo TV", image: imgLink },
    n_target: 12000,
    target_reached: "Tech",
    key: 7,
  },
  {
    name: "100K Mission",
    channel: { name: "Mongo TV", image: imgLink },
    n_target: 12000,
    target_reached: "Tech",
    key: 7,
  },
  {
    name: "100K Mission",
    channel: { name: "Mongo TV", image: imgLink },
    n_target: 12000,
    target_reached: "Tech",
    key: 7,
  },
  {
    name: "100K Mission",
    channel: { name: "Mongo TV", image: imgLink },
    n_target: 12000,
    target_reached: "Tech",
    key: 7,
  },
  {
    name: "100K Mission",
    channel: { name: "Mongo TV", image: imgLink },
    n_target: 12000,
    target_reached: "Tech",
    key: 7,
  },
  {
    name: "100K Mission",
    channel: { name: "Mongo TV", image: imgLink },
    n_target: 12000,
    target_reached: "Tech",
    key: 7,
  },
  {
    name: "100K Mission",
    channel: { name: "Mongo TV", image: imgLink },
    n_target: 12000,
    target_reached: "Tech",
    key: 7,
  },
  {
    name: "100K Mission",
    channel: { name: "Mongo TV", image: imgLink },
    n_target: 12000,
    target_reached: "Tech",
    key: 7,
  },
  {
    name: "100K Mission",
    channel: { name: "Mongo TV", image: imgLink },
    n_target: 12000,
    target_reached: "Tech",
    key: 7,
  },
  {
    name: "100K Mission",
    channel: { name: "Mongo TV", image: imgLink },
    n_target: 12000,
    target_reached: "Tech",
    key: 7,
  },
  {
    name: "100K Mission",
    channel: { name: "Mongo TV", image: imgLink },
    n_target: 12000,
    target_reached: "Tech",
    key: 7,
  },
  {
    name: "100K Mission",
    channel: { name: "Mongo TV", image: imgLink },
    n_target: 12000,
    target_reached: "Tech",
    key: 7,
  },
  {
    name: "100K Mission",
    channel: { name: "Mongo TV", image: imgLink },
    n_target: 12000,
    target_reached: "Tech",
    key: 7,
  },
  {
    name: "100K Mission",
    channel: { name: "Mongo TV", image: imgLink },
    n_target: 12000,
    target_reached: "Tech",
    key: 7,
  },
  {
    name: "100K Mission",
    channel: { name: "Mongo TV", image: imgLink },
    n_target: 12000,
    target_reached: "Tech",
    key: 7,
  },
  {
    name: "100K Mission",
    channel: { name: "Mongo TV", image: imgLink },
    n_target: 12000,
    target_reached: "Tech",
    key: 7,
  },
  {
    name: "100K Mission",
    channel: { name: "Mongo TV", image: imgLink },
    n_target: 12000,
    target_reached: "Tech",
    key: 7,
  },
  {
    name: "100K Mission",
    channel: { name: "Mongo TV", image: imgLink },
    n_target: 12000,
    target_reached: "Tech",
    key: 7,
  },
  {
    name: "100K Mission",
    channel: { name: "Mongo TV", image: imgLink },
    n_target: 12000,
    target_reached: "Tech",
    key: 7,
  },
  {
    name: "100K Mission",
    channel: { name: "Mongo TV", image: imgLink },
    n_target: 12000,
    target_reached: "Tech",
    key: 7,
  },
  {
    name: "100K Mission",
    channel: { name: "Mongo TV", image: imgLink },
    n_target: 12000,
    target_reached: "Tech",
    key: 7,
  },
  {
    name: "100K Mission",
    channel: { name: "Mongo TV", image: imgLink },
    n_target: 12000,
    target_reached: "Tech",
    key: 7,
  },
  {
    name: "100K Mission",
    channel: { name: "Mongo TV", image: imgLink },
    n_target: 12000,
    target_reached: "Tech",
    key: 7,
  },
  {
    name: "100K Mission",
    channel: { name: "Mongo TV", image: imgLink },
    n_target: 12000,
    target_reached: "Tech",
    key: 7,
  },
  {
    name: "100K Mission",
    channel: { name: "Mongo TV", image: imgLink },
    n_target: 12000,
    target_reached: "Tech",
    key: 7,
  },
  {
    name: "100K Mission",
    channel: { name: "Mongo TV", image: imgLink },
    n_target: 12000,
    target_reached: "Tech",
    key: 7,
  },
  {
    name: "100K Mission",
    channel: { name: "Mongo TV", image: imgLink },
    n_target: 12000,
    target_reached: "Tech",
    key: 7,
  },
  {
    name: "100K Mission",
    channel: { name: "Mongo TV", image: imgLink },
    n_target: 12000,
    target_reached: "Tech",
    key: 7,
  },
  {
    name: "100K Mission",
    channel: { name: "Mongo TV", image: imgLink },
    n_target: 12000,
    target_reached: "Tech",
    key: 7,
  },
  {
    name: "100K Mission",
    channel: { name: "Mongo TV", image: imgLink },
    n_target: 12000,
    target_reached: "Tech",
    key: 7,
  },
  {
    name: "100K Mission",
    channel: { name: "Mongo TV", image: imgLink },
    n_target: 12000,
    target_reached: "Tech",
    key: 7,
  },
  {
    name: "100K Mission",
    channel: { name: "Mongo TV", image: imgLink },
    n_target: 12000,
    target_reached: "Tech",
    key: 7,
  },
  {
    name: "100K Mission",
    channel: { name: "Mongo TV", image: imgLink },
    n_target: 12000,
    target_reached: "Tech",
    key: 7,
  },
  {
    name: "100K Mission",
    channel: { name: "Mongo TV", image: imgLink },
    n_target: 12000,
    target_reached: "Tech",
    key: 7,
  },
  {
    name: "100K Mission",
    channel: { name: "Mongo TV", image: imgLink },
    n_target: 12000,
    target_reached: "Tech",
    key: 7,
  },
  {
    name: "100K Mission",
    channel: { name: "Mongo TV", image: imgLink },
    n_target: 12000,
    target_reached: "Tech",
    key: 7,
  },
  {
    name: "100K Mission",
    channel: { name: "Mongo TV", image: imgLink },
    n_target: 12000,
    target_reached: "Tech",
    key: 7,
  },
  {
    name: "100K Mission",
    channel: { name: "Mongo TV", image: imgLink },
    n_target: 12000,
    target_reached: "Tech",
    key: 7,
  },
  {
    name: "100K Mission",
    channel: { name: "Mongo TV", image: imgLink },
    n_target: 12000,
    target_reached: "Tech",
    key: 7,
  },
  {
    name: "100K Mission",
    channel: { name: "Mongo TV", image: imgLink },
    n_target: 12000,
    target_reached: "Tech",
    key: 7,
  },
  {
    name: "100K Mission",
    channel: { name: "Mongo TV", image: imgLink },
    n_target: 12000,
    target_reached: "Tech",
    key: 7,
  },
  {
    name: "100K Mission",
    channel: { name: "Mongo TV", image: imgLink },
    n_target: 12000,
    target_reached: "Tech",
    key: 7,
  },
  {
    name: "100K Mission",
    channel: { name: "Mongo TV", image: imgLink },
    n_target: 12000,
    target_reached: "Tech",
    key: 7,
  },
  {
    name: "100K Mission",
    channel: { name: "Mongo TV", image: imgLink },
    n_target: 12000,
    target_reached: "Tech",
    key: 7,
  },
  {
    name: "100K Mission",
    channel: { name: "Mongo TV", image: imgLink },
    n_target: 12000,
    target_reached: "Tech",
    key: 7,
  },
  {
    name: "100K Mission",
    channel: { name: "Mongo TV", image: imgLink },
    n_target: 12000,
    target_reached: "Tech",
    key: 7,
  },
  {
    name: "100K Mission",
    channel: { name: "Mongo TV", image: imgLink },
    n_target: 12000,
    target_reached: "Tech",
    key: 7,
  },
  {
    name: "100K Mission",
    channel: { name: "Mongo TV", image: imgLink },
    n_target: 12000,
    target_reached: "Tech",
    key: 7,
  },
  {
    name: "100K Mission",
    channel: { name: "Mongo TV", image: imgLink },
    n_target: 12000,
    target_reached: "Tech",
    key: 7,
  },
  {
    name: "100K Mission",
    channel: { name: "Mongo TV", image: imgLink },
    n_target: 12000,
    target_reached: "Tech",
    key: 7,
  },
  {
    name: "100K Mission",
    channel: { name: "Mongo TV", image: imgLink },
    n_target: 12000,
    target_reached: "Tech",
    key: 7,
  },
  {
    name: "100K Mission",
    channel: { name: "Mongo TV", image: imgLink },
    n_target: 12000,
    target_reached: "Tech",
    key: 7,
  },
  {
    name: "100K Mission",
    channel: { name: "Mongo TV", image: imgLink },
    n_target: 12000,
    target_reached: "Tech",
    key: 7,
  },
  {
    name: "100K Mission",
    channel: { name: "Mongo TV", image: imgLink },
    n_target: 12000,
    target_reached: "Tech",
    key: 7,
  },
  {
    name: "100K Mission",
    channel: { name: "Mongo TV", image: imgLink },
    n_target: 12000,
    target_reached: "Tech",
    key: 7,
  },
  {
    name: "100K Mission",
    channel: { name: "Mongo TV", image: imgLink },
    n_target: 12000,
    target_reached: "Tech",
    key: 7,
  },
  {
    name: "100K Mission",
    channel: { name: "Mongo TV", image: imgLink },
    n_target: 12000,
    target_reached: "Tech",
    key: 7,
  },
  {
    name: "100K Mission",
    channel: { name: "Mongo TV", image: imgLink },
    n_target: 12000,
    target_reached: "Tech",
    key: 7,
  },
  {
    name: "100K Mission",
    channel: { name: "Mongo TV", image: imgLink },
    n_target: 12000,
    target_reached: "Tech",
    key: 7,
  },
  {
    name: "100K Mission",
    channel: { name: "Mongo TV", image: imgLink },
    n_target: 12000,
    target_reached: "Tech",
    key: 7,
  },
  {
    name: "100K Mission",
    channel: { name: "Mongo TV", image: imgLink },
    n_target: 12000,
    target_reached: "Tech",
    key: 7,
  },
  {
    name: "100K Mission",
    channel: { name: "Mongo TV", image: imgLink },
    n_target: 12000,
    target_reached: "Tech",
    key: 7,
  },
  {
    name: "100K Mission",
    channel: { name: "Mongo TV", image: imgLink },
    n_target: 12000,
    target_reached: "Tech",
    key: 7,
  },
];

function Campaigns() {
  const [page, setPage] = useState(1);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const startIndex = (page - 1) * ITEMS_PER_PAGE;
  const endIndex = page * ITEMS_PER_PAGE;

  return (
    <Box
      sx={{
        width: "100%",
        height: "80vh",
        overflow: "auto",
        borderWidth: "5px",
        borderColor: "black",
      }}
    >
      <List
        sx={{
          width: "100%",
          maxWidth: "100%",
          bgcolor: "background.paper",
        }}
      >
        {campaignList
          .slice(startIndex, endIndex)
          .map((campaign_item, index) => (
            <CampaignItem key={index} item={campaign_item} />
          ))}
      </List>
      {campaignList.length > ITEMS_PER_PAGE && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: 2,
          }}
        >
          <Pagination
            count={Math.ceil(campaignList.length / ITEMS_PER_PAGE)}
            page={page}
            onChange={handleChangePage}
            variant="outlined"
            shape="rounded"
          />
        </Box>
      )}

      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end", // Align the button to the right
          mt: 2,
          mr: 2, // Add some margin to separate from the scrollbar
        }}
      >
        <Fab variant="extended" sx={{ backgroundColor: colors.orange }}>
          <AddCircle sx={{ mr: 1 }} />
          create campaign
        </Fab>
      </Box>
    </Box>
  );
}

export default Campaigns;
