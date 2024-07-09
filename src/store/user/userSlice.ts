import { createSlice } from "@reduxjs/toolkit";
import { Iuser } from "../../types";
import { autoLogin, registerUser, userLogin, userLogout } from "./userApi";

export interface IinitialState {
  user: Iuser | null;
  status: "idle" | "success" | "pending" | "fail";
}

const initialState: IinitialState = {
  user: null,
  status: "idle",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.fulfilled, (state, action) => {
        state.status = "success";
        state.user = action.payload;
      })
      .addCase(registerUser.rejected, (state) => {
        state.status = "fail";
      })
      .addCase(registerUser.pending, (state) => {
        state.status = "pending";
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.status = "success";
        state.user = action.payload;
      })
      .addCase(userLogin.rejected, (state) => {
        state.status = "fail";
      })
      .addCase(userLogin.pending, (state) => {
        state.status = "pending";
      })
      .addCase(autoLogin.fulfilled, (state, action) => {
        state.status = "success";
        state.user = action.payload;
      })
      .addCase(autoLogin.rejected, (state) => {
        state.status = "fail";
      })
      .addCase(autoLogin.pending, (state) => {
        state.status = "pending";
      })
      .addCase(userLogout.fulfilled, (state) => {
        console.log("slice out success");
        state.status = "idle";
        state.user = null;
      })
      .addCase(userLogout.rejected, (state) => {
        console.log("slice out fail");
        state.status = "fail";
      })
      .addCase(userLogout.pending, (state) => {
        console.log("slice out pending");
        state.status = "pending";
      });
  },
});

export default userSlice.reducer;
