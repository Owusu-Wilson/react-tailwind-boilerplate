import React, { useState } from "react";
import { Checkbox, Label, Select, Spinner } from "flowbite-react";
import { TextInput, Button } from "@tremor/react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "./firebase/userAuth";
import Logo from "../assets/logo.png";

function Form() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isEmailExist, setIsEmailExist] = useState(false);
  const [isInvalidEmail, setIsInvalidEmail] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const result = await registerUser(email, password);

    if (result.type === "SUCCESS") {
      console.log("MESSAGE FROM REGISTER ", "Sign Up of new user successful");

      // Navigate to a different page after successful registration
      navigate("/login");
    } else {
      // Handle registration error
      if (result.error.code === "auth/email-already-in-use") {
        setIsEmailExist(true);
      } else if (result.error.code === "auth/invalid-email") {
        setIsInvalidEmail(true);
      }
      console.error("REGISTRATION FAILED", result.error);
    }

    setIsLoading(false);
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
          value={email}
          onValueChange={(text) => {
            setEmail(text);
          }}
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
          value={password}
          onValueChange={(text) => {
            setPassword(text);
          }}
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
      {isLoading && (
        /* Use your Flowbite spinner component here */
        <Spinner size={60} />
      )}
      <Button
        className="bg-custom-orange hover:bg-orange-400 "
        type="submit"
        onClick={handleRegister}
        disabled={isLoading}
      >
        Create Account
      </Button>
      {isEmailExist && (
        <p className="text-red-500 text-sm mt-2">
          This email is already registered. Please use a different email.
        </p>
      )}
      {isInvalidEmail && (
        <p className="text-red-500 text-sm mt-2">
          This email is Invalid. Please check and try again.
        </p>
      )}
      <div className="flex flex-1 justify-center flex-row text-gray-600 ">
        <span>OR</span>
      </div>
      <p className="text-center text-custom-blue">I already have an account</p>
      <Link to="/login">
        <Button outline className="mt-2">
          Log In Now
        </Button>
      </Link>
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
