import React from "react";

import { Button, Card } from "flowbite-react";

import "./styles.css";
function PageNotFound() {
  return (
    <div className="w-screen h-screen relative flex flex-1 justify-center items-center">
      <div className="blurred-mask"></div>
      <Card className="flex h-fit justify-center self-center">
        <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          404 Not Found.
        </h1>
        <p>
          The page youre requesting is not available. If this is a problem,
          contact the administrators
        </p>
      </Card>
    </div>
  );
}

export default PageNotFound;
