import React from "react";
import { useSelector } from "react-redux";
import OutOfBounds from "../OutOfBounds";

import CreatorLayout from "../../components/Creator/CreatorLayout";
function CreatorAuthRoutes({ children }) {
  const CURRENT_USER_TYPE = useSelector(
    (state) => state.currentUserProfile.userType
  );
  const CURRENT_USER_NAME = useSelector(
    (state) => state.currentUserProfile.userName
  );
  const CURRENT_USER_EMAIL = useSelector(
    (state) => state.currentUserProfile.userEmail
  );
  if (CURRENT_USER_TYPE == "creator") {
    return (
      <>
        {/* <div className="mt-20"> */}
        <div>
          {/* <CreatorHeader /> */}
          <CreatorLayout>{children}</CreatorLayout>
        </div>
      </>
    );
  } else {
    return <OutOfBounds />;
  }
}

export default CreatorAuthRoutes;
