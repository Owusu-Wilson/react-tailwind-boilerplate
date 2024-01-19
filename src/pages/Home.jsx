import React from "react";
import BgImage from "../assets/grad-bg.jpg";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import LoginIllustration from "../assets/login.svg";
import { Button, Card } from "flowbite-react";

function Home() {
  return (
    <div className="flex flex-1 flex-col w-screen h-screen justify-center items-center  m-5 shadow-md">
      <Card>
        <h1 className="text-7xl font-minggola">Onboarding Screen</h1>
      </Card>
      <Link to="/login">
        <Button className="m-4 text-2xl font-poppins font-normal">Login</Button>
      </Link>
    </div>
  );
}

export default Home;
