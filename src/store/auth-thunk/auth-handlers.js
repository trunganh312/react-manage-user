import { createAsyncThunk } from "@reduxjs/toolkit";
import { requestLogin, requestRegister } from "../auth/auth-requests";

export const login = createAsyncThunk("auth/login", async (payload) => {
  const response = await requestLogin(payload);
  return response.user;
});

export const register = createAsyncThunk("auth/register", async (payload) => {
  console.log(payload);
  const response = await requestRegister(payload);
  return response.user;
});
