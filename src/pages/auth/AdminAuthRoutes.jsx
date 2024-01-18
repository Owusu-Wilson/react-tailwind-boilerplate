import React from "react";
import { useSelector } from "react-redux";
import OutOfBounds from "../OutOfBounds";
function AdminAuthRoutes({ children }) {
  const CURRENT_USER_TYPE = useSelector(
    (state) => state.currentUserProfile.userType
  );
  const CURRENT_USER_NAME = useSelector(
    (state) => state.currentUserProfile.userName
  );
  const CURRENT_USER_EMAIL = useSelector(
    (state) => state.currentUserProfile.userEmail
  );
  if (CURRENT_USER_TYPE == "admin") {
    return { ...children };
  } else {
    return <OutOfBounds />;
  }
}

export default AdminAuthRoutes;
