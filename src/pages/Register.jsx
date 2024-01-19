import React from "react";
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
  const [isEyeClosed, setIsEyeClosed] = useState(false);
  const navigate = useNavigate();
  const handleRegister = () => {
    alert("Registration Complete");
    navigate("/login");
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
      <div>
        <div className="mb-2 block">
          <Label htmlFor="repeat-password" value="Repeat password" />
        </div>
        <TextInput
          id="repeat-password"
          placeholder="Enter Password Again..."
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
        onClick={handleRegister}
      >
        Create Account
      </Button>
      <div className="flex flex-1 justify-center flex-row text-gray-600 ">
        <span>OR</span>
      </div>
      <p className="text-center text-custom-blue">I already have an acount</p>
      <Button
        outline
        className=""
        type="submit"
        onClick={() => navigate("/login")}
      >
        LogIn Now
      </Button>
    </form>
  );
}
function Register() {
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
      <div className=" flex flex-row justify-center items-center mb-2 ">
        <img src={Logo} height={40} width={40} className="" />
        <h1 className="text-custom-blue text-5xl font-regular">
          You<span className="font-bold">Earn</span>
        </h1>
      </div>
      <h1 className="font-bold text-xl mb-3 text-custom-orange">
        Create a New Account
      </h1>
      <Form />
    </div>
  );
}

export default Register;
