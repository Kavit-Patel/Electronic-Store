import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const registerUser = createAsyncThunk(
  "register/user",
  async (
    userDetails: {
      name: string;
      surname: string;
      email: string;
      password: string;
    },
    { rejectWithValue }
  ) => {
    try {
      console.log("Register");
      const req = await fetch(`${import.meta.env.VITE_API}/api/addNewUser`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userDetails),
      });
      const res = await req.json();
      if (res.success) {
        toast.success(res.message);
        return res.data;
      } else {
        toast.error(res.message);
        throw new Error(res.message);
      }
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : " Internal Server Error ! ";
      return rejectWithValue(errorMessage);
    }
  }
);

export const userLogin = createAsyncThunk(
  "user/login",
  async (
    userDetails: { email: string; password: string },
    { rejectWithValue }
  ) => {
    console.log("LOgin");
    try {
      const req = await fetch(`${import.meta.env.VITE_API}/api/loginUser`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userDetails),
      });
      const res = await req.json();
      if (res.success) {
        toast.success(res.message);
        return res.data;
      } else {
        toast.error(res.data);
        throw new Error(res.message);
      }
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Internal Server Error !";
      return rejectWithValue(errorMessage);
    }
  }
);

export const autoLogin = createAsyncThunk(
  "user/autoLogin",
  async (_, { rejectWithValue }) => {
    try {
      const req = await fetch(
        `${import.meta.env.VITE_API}/api/cookieAutoLogin`,
        {
          credentials: "include",
        }
      );
      const res = await req.json();
      if (res.success) {
        return res.data;
      } else {
        throw new Error(res.message);
      }
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : " Internal Server Error !";
      return rejectWithValue(errorMessage);
    }
  }
);
export const userLogout = createAsyncThunk(
  "user/logout",
  async (_, { rejectWithValue }) => {
    try {
      const req = await fetch(`${import.meta.env.VITE_API}/api/logoutUser`, {
        credentials: "include",
        headers: {
          "Conent-Type": "application/json",
        },
      });
      const res = await req.json();
      if (res.success) {
        toast.success(res.message);
      } else {
        toast.error(res.message);
        throw new Error(res.message);
      }
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : " Insternal Error ";
      return rejectWithValue(errorMessage);
    }
  }
);
