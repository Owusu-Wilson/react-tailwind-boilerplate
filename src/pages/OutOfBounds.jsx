import React from "react";

import { Button, Card } from "flowbite-react";

import "./styles.css";
function OutOfBounds() {
  return (
    <div className="w-screen h-screen relative flex flex-1 justify-center items-center">
      <div className="blurred-mask"></div>
      <Card className="flex h-fit justify-center self-center">
        <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Authorization Error
        </h1>
        <p>You do not have the rights to access this page!</p>
      </Card>
    </div>
  );
}

export default OutOfBounds;
