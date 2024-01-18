import React from "react";
import BgImage from "../assets/grad-bg.jpg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div
      className="container p-4"
      style={{
        fontFamily: "Inter",
        backgroundImage: "../assets/grad-bg.jpg",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {" "}
      <h1 className=" text-7xl font-semibold">This is Home ...</h1>
      <Link to="/login">
        <p>login</p>
      </Link>
    </div>
  );
}

export default Home;
