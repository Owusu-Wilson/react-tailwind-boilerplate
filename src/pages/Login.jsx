import React from "react";
import { Link } from "react-router-dom";
import BgImage from "../assets/grad-bg.jpg";
import { useSelector } from "react-redux";

function Login() {
  const CURRENT_USER_TYPE = useSelector(
    (state) => state.currentUserProfile.userType
  );
  const CURRENT_USER_NAME = useSelector(
    (state) => state.currentUserProfile.userName
  );
  const CURRENT_USER_EMAIL = useSelector(
    (state) => state.currentUserProfile.userEmail
  );

  return (
    <div className="container p-4" style={{}}>
      {" "}
      <h1 className=" text-7xl font-semibold">Please Login</h1>
      <h1 className=" text-5xl text-red-500 font-semibold">
        Current UserName: {CURRENT_USER_NAME}
      </h1>
      <h1 className=" text-5xl text-red-500 font-semibold">
        Current UserEmail: {CURRENT_USER_EMAIL}
      </h1>
      <h1 className=" text-5xl text-red-500 font-semibold">
        Current UserType: {CURRENT_USER_TYPE}
      </h1>
      <Link to="/register">
        <p>Or Register</p>
      </Link>
      <Link to="/admin">
        <p className="text-2xl p-4">Admin</p>
      </Link>
      <Link to="/creator">
        <p className="text-2xl p-4"> Creator</p>
      </Link>
      <Link to="/worker">
        <p className="text-2xl p-4">Worker</p>
      </Link>
    </div>
  );
}

export default Login;
