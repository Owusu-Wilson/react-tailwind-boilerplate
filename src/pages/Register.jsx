import React from "react";
import { Link } from "react-router-dom";
import BgImage from "../assets/grad-bg.jpg";

function Register() {
  return (
    <div className="container p-4" style={{}}>
      {" "}
      <h1 className=" text-7xl font-semibold">Create a New Account</h1>
      <Link to="/login">
        <p>Or Login</p>
      </Link>
    </div>
  );
}

export default Register;
