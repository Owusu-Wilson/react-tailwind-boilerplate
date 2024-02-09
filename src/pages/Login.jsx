import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Card, Checkbox, Label, Select, Spinner } from "flowbite-react";
import { TextInput, Button } from "@tremor/react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser, registerWithGoogle } from "./firebase/userAuth";

import Logo from "../assets/logo.png";
function Form() {
  // REDUX STATES
  const CURRENT_USER_TYPE = useSelector(
    (state) => state.currentUserProfile.userType
  );

  // FORM STATES
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleDevLogin = (e) => {
    e.preventDefault();
    setLoading(true);

    navigate(`/${CURRENT_USER_TYPE}`);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    const result = await loginUser(email, password);

    if (result.type === "SUCCESS") {
      console.log("MESSAGE FROM LOGIN ", "Login successful");
      console.log(result);
      // Navigate to a different page after successful login
      navigate(`/${CURRENT_USER_TYPE}`);
    } else {
      setError(result.message);
    }

    setLoading(false);
  };
  const handleGoogleLogin = async () => {
    try {
      // Call the function to perform Google sign-in
      const result = await registerWithGoogle();

      // Check the result type and handle accordingly
      if (result.type === "SUCCESS") {
        console.log(result.message);
        const user = result.user;
        // Do something with the signed-in user
      } else {
        console.error(result.message);
        // Handle the error, if needed
      }
    } catch (error) {
      console.error("Error in googleHandler:", error.message);
      // Handle unexpected errors
    }
  };
  return (
    <form className="flex w-1/4 max-w-xl flex-col gap-4">
      {loading ? (
        <Spinner color="pink" className="mb-2 block self-center" />
      ) : null}
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
          placeholder="Enter Password..."
          type="password"
          required
          value={password}
          onValueChange={(text) => {
            setPassword(text);
          }}
        />
      </div>

      <div className="max-w-md">
        <div className="mb-2 block">
          <Label htmlFor="countries" value="Select User Type" />
        </div>
        <Select
          id="userType"
          required
          value={userType}
          onChange={(e) => setUserType(e.target.value)}
        >
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
        onClick={handleDevLogin}
        disabled={loading}
      >
        {loading ? "Logging in..." : "Login"}
      </Button>
      <Button
        className="bg-custom-orange hover:bg-orange-400 "
        type="submit"
        onClick={handleGoogleLogin}
        disabled={loading}
      >
        {loading ? "Logging in..." : "Sign in with Google"}
      </Button>
      {error && <p className="text-red-500 text-center">{error}</p>}
      <div className="flex flex-1 justify-center flex-row text-gray-600 ">
        <span>OR</span>
      </div>
      <p className="text-center text-custom-blue">I do not have an account</p>
      <Button className="" type="submit" onClick={() => navigate("/register")}>
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
