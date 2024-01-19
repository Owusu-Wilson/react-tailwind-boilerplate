import React from "react";
import { useSelector } from "react-redux";
// PACKAGE IMPORTS
import LoginIllustration from "../assets/login-illustrator.svg";
// import { Button } from "reactstrap";
import { Checkbox, Label, Select } from "flowbite-react";

import { TextInput, Button } from "@tremor/react";

// FILE IMPORTS
import BgImage from "../assets/grad-bg.jpg";
import Logo from "../assets/logo.png";

// ICON IMPORTS

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Form() {
  // REDUX STATES
  const CURRENT_USER_TYPE = useSelector(
    (state) => state.currentUserProfile.userType
  );
  const CURRENT_USER_NAME = useSelector(
    (state) => state.currentUserProfile.userName
  );
  const CURRENT_USER_EMAIL = useSelector(
    (state) => state.currentUserProfile.userEmail
  );
  const [isEyeClosed, setIsEyeClosed] = useState(false);
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate(`/${CURRENT_USER_TYPE}`);
  };

  return (
    <form className="flex w-1/4 max-w-xl flex-col gap-4">
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email2" value="Your email" />
        </div>
        <TextInput
          id="email"
          type="email"
          placeholder="name@flowbite.com"
          required
          shadow
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password2" value="Your password" />
        </div>
        <TextInput
          placeholder="Enter New Password..."
          type="password"
          required
          shadow
        />
      </div>

      <div className="max-w-md">
        <div className="mb-2 block">
          <Label htmlFor="countries" value="Select User Type" />
        </div>
        <Select id="userType" required>
          <option>Creator</option>
          <option>Worker</option>
        </Select>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="agree" />
        <Label htmlFor="agree" className="flex">
          Remember Me &nbsp;
        </Label>
      </div>
      <Button
        className="bg-custom-orange hover:bg-orange-400 "
        type="submit"
        onClick={handleLogin}
      >
        Login
      </Button>
      <div className="flex flex-1 justify-center flex-row text-gray-600 ">
        <span>OR</span>
      </div>
      <p className="text-center text-custom-blue">I do not have an acount</p>
      <Button
        outline
        className=""
        type="submit"
        onClick={() => navigate("/register")}
      >
        Register
      </Button>
    </form>
  );
}
function Login() {
  return (
    <div
      className="flex flex-1 flex-col justify-center items-center w-screen h-screen font-poppins p-20"
      style={{
        backgroundImage: "url('src/assets/gradient.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
      }}
    >
      {/* <!-- Left content goes here --> */}
      <div className=" flex flex-rowjustify-center items-center mb-2 ">
        <img src={Logo} height={40} width={40} className="" />
        <h1 className="text-custom-blue text-5xl font-regular ml-3 p-5">
          You<span className="font-bold">Earn</span>
        </h1>
      </div>
      <h1 className="font-bold text-xl mb-3">Login Into Your Account</h1>
      <Form />
    </div>
  );
}

export default Login;
