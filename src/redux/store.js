import { configureStore } from "@reduxjs/toolkit";
import currentPageReducer from "./currentPageSlice";
import filterOptionReducer from "./filterOptionSlice";
import currentUserProfileReducer from "./currentUserProfileSlice";

export const store = configureStore({
  reducer: {
    navigation: currentPageReducer,
    filter: filterOptionReducer,
    currentUserProfile: currentUserProfileReducer,
  },
});
