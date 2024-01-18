import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userName: "home",
  userEmail: "example@google.com",
  userType: "admin", // creator, worker
};
export const currentUserProfileSlice = createSlice({
  name: "userProfile",
  initialState,
  reducers: {
    setUser: (state, action) => {
      console.log("Switch page action called with: ", action.payload);
      state.userName = action.payload.userName;
      state.userEmail = action.payload.userEmail;
      state.userType = action.payload.userType;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUser } = currentUserProfileSlice.actions;

export default currentUserProfileSlice.reducer;
