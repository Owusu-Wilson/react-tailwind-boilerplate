import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userName: "admin",
  userEmail: "admin@admin.com",
  userType: "admin", // creator, worker
};
export const currentuserProfileSlice = createSlice({
  name: "currentUserProfile",
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      console.log("Switch page action called with: ", action.payload);
      console.log("Switch page action called with: ", action.payload);
      state.userName = action.payload.userName;
      state.userEmail = action.payload.userEmail;
      state.userType = action.payload.userType;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCurrentUser } = currentuserProfileSlice.actions;

export default currentuserProfileSlice.reducer;
