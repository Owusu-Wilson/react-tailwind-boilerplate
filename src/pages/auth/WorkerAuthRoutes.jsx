import React from "react";
import { useSelector } from "react-redux";
import OutOfBounds from "../OutOfBounds";

import WorkerLayout from "../../components/Worker/WorkerLayout";
function WorkerAuthRoutes({ children }) {
  const CURRENT_USER_TYPE = useSelector(
    (state) => state.currentUserProfile.userType
  );
  const CURRENT_USER_NAME = useSelector(
    (state) => state.currentUserProfile.userName
  );
  const CURRENT_USER_EMAIL = useSelector(
    (state) => state.currentUserProfile.userEmail
  );
  if (CURRENT_USER_TYPE == "worker") {
    return (
      <>
        {/* <div className="mt-20"> */}
        <div>
          {/* <WorkerHeader /> */}
          <WorkerLayout>{children}</WorkerLayout>
        </div>
      </>
    );
  } else {
    return <OutOfBounds />;
  }
}

export default WorkerAuthRoutes;
