/* eslint-disable no-param-reassign */
/* eslint-disable eqeqeq */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: undefined,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userLoggedIn: (state, action) => {
      state.user = action.payload.user;
    },
    userLoggedOut: (state) => {
      state.user = undefined;
      localStorage.clear();
    },
  },
});

export default authSlice.reducer;
export const { userLoggedIn, userLoggedOut } = authSlice.actions;
