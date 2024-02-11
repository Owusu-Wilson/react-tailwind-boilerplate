import React, { useState } from "react";
import ChannelCard from "../../components/Creator/ChannelCard";
import { Grid, Pagination, Divider, Slide } from "@mui/material";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import { AddCircle } from "@mui/icons-material";

const ITEMS_PER_PAGE = 5; // Number of items to display per page

const channelList = [
  { name: "Mongo TV", n_subcribers: 12000, content_type: "Tech", key: 1 },
  {
    name: "Delay Kitchen",
    n_subcribers: 12000,
    content_type: "cooking",
    key: 2,
  },
  {
    name: "Slabs creatives",
    n_subcribers: 12000,
    content_type: "design",
    key: 3,
  },
  { name: "Mongo TV", n_subcribers: 12000, content_type: "Tech", key: 4 },
  { name: "Mongo TV", n_subcribers: 12000, content_type: "Tech", key: 5 },
  { name: "Mongo TV", n_subcribers: 12000, content_type: "Tech", key: 6 },
  { name: "Mongo TV", n_subcribers: 12000, content_type: "Tech", key: 7 },
  { name: "Mongo TV", n_subcribers: 12000, content_type: "Tech", key: 8 },
  { name: "Mongo TV", n_subcribers: 12000, content_type: "Tech", key: 9 },
  { name: "Mongo TV", n_subcribers: 12000, content_type: "Tech", key: 10 },
];

function Channels() {
  const [page, setPage] = useState(1);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const startIndex = (page - 1) * ITEMS_PER_PAGE;
  const endIndex = page * ITEMS_PER_PAGE;

  return (
    <div className="flex flex-1 flex-col " style={{}}>
      <h1 className=" text-4xl font-bold mb-4">
        My Channels {` - ${channelList.length}`}
      </h1>
      <Grid
        container
        className="p-3"
        spacing={{ xs: 2 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {channelList.slice(startIndex, endIndex).map((channel, index) => (
          <ChannelCard key={index} channel={channel} />
        ))}
      </Grid>
      {channelList.length > ITEMS_PER_PAGE && (
        <>
          <Divider style={{ width: "100%" }} />
          <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
            <Pagination
              showFirstButton
              showLastButton
              count={Math.ceil(channelList.length / ITEMS_PER_PAGE)}
              page={page}
              onChange={handleChangePage}
              variant="outlined"
              shape="rounded"
              TransitionComponent={Slide}
              TransitionProps={{ direction: "up" }}
              color="primary"
            />
          </Box>
        </>
      )}
      <Box sx={{ marginLeft: "auto", "& > :not(style)": { m: 1 } }}>
        <Fab variant="extended">
          <AddCircle sx={{ mr: 1 }} />
          Add more
        </Fab>
      </Box>
    </div>
  );
}

export default Channels;
