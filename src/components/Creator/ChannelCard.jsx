import { Image } from "@mui/icons-material";
import { Card } from "flowbite-react";

const imgLink =
  "https://img.freepik.com/premium-vector/culinary-channel-food-tv-logo_18099-1622.jpg";

const imgLink2 =
  "https://1000logos.net/wp-content/uploads/2020/09/Food-Network-Logo.png";
function ChannelCard({ channel }) {
  return (
    // Assume channel is an object with a 'name' property
    <Card
      className=" mb-3 mr-3 flex-row"
      renderImage={() => (
        <img
          style={{
            width: "200px",
            height: "150px",
            objectFit: "cover", // Ensure the image covers the entire space
            maxWidth: "100%", // Ensure the image doesn't exceed the container width
            maxHeight: "100%", // Ensure the image doesn't exceed the container height
          }}
          src={channel.key % 2 === 0 ? imgLink : imgLink2}
          alt={`${channel.name} channel`}
          className="p-4"
        />
      )}
      horizontal
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {channel.name}
      </h5>
      {/* Views */}
      <div className="flex ju">
        <p className="font-normal text-gray-700 dark:text-gray-400 mr-4">
          Total Views
        </p>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {channel.n_subcribers}
        </p>
      </div>
      {/* ======================================= */}
      {/* Subscribers */}
      <div className="flex">
        <p className="font-normal text-gray-700 dark:text-gray-400 mr-4">
          Total Subscribers
        </p>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {channel.n_subcribers}
        </p>
      </div>
      {/* ============================================= */}
    </Card>
  );
}

export default ChannelCard;
