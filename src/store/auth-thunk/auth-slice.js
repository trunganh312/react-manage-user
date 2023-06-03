import { createSlice } from "@reduxjs/toolkit";
import { login, register } from "./auth-handlers";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    userInfo: {},
    success: false,
  },
  reducers: {
    logout(state) {
      state.userInfo = {};
      state.success = false;
    },
  },

  extraReducers: {
    [login.fulfilled]: (state, action) => {
      state.userInfo = action.payload;
      state.success = true;
    },
    [login.rejected]: (state, action) => {
      state.userInfo = action.payload;
      state.success = false;
    },
    [register.fulfilled]: (state, action) => {
      state.userInfo = action.payload;
      state.success = true;
    },
  },
});

export default authSlice.reducer;

export const { logout } = authSlice.actions;
