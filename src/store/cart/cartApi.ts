// cartRouter.get("/getUserCart/:userId", getUserCart);
// cartRouter.get("/addToCart/:userId/:productId", addToCart);
// cartRouter.get("/increaseQuantity/:userId/:cartId", increaseQuantity);
// cartRouter.get("/decreaseQuantity/:userId/:cartId", decreaseQuantity);
// cartRouter.get("/removeItem/:userId/:cartId", removeItem);
// cartRouter.post("/syncCartWithLs/:userId", syncCartWithLs);
// cartRouter.post("/syncQuantityWithLs/:userId", syncQuantityWithLs);

import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const getUserCart = createAsyncThunk(
  "get/cart",
  async (userId: string, { rejectWithValue }) => {
    try {
      const req = await fetch(
        `${import.meta.env.VITE_API}/api/getUserCart/${userId}`,
        {
          credentials: "include",
        }
      );
      const res = await req.json();
      if (res.success) {
        return res.response;
      } else {
        throw new Error(res.message);
      }
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Internal Server Error !";
      return rejectWithValue(errorMessage);
    }
  }
);
export const addToCart = createAsyncThunk(
  "add/cart",
  async (
    { userId, productId }: { userId: string; productId: string },
    { rejectWithValue }
  ) => {
    try {
      const req = await fetch(
        `${import.meta.env.VITE_API}/api/addToCart/${userId}/${productId}`,
        {
          credentials: "include",
        }
      );
      const res = await req.json();
      if (res.success) {
        toast.success(res.message);
        return res.response;
      } else {
        toast.error(res.message);
        throw new Error(res.message);
      }
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Internal Server Error !";
      return rejectWithValue(errorMessage);
    }
  }
);
export const deleteFromCart = createAsyncThunk(
  "delete/cart",
  async (
    { userId, cartId }: { userId: string; cartId: string },
    { rejectWithValue }
  ) => {
    try {
      const req = await fetch(
        `${import.meta.env.VITE_API}/api/removeItem/${userId}/${cartId}`,
        {
          credentials: "include",
        }
      );
      const res = await req.json();
      if (res.success) {
        toast.success(res.message);
        return res.response;
      } else {
        toast.error(res.message);
        throw new Error(res.message);
      }
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Internal Server Error !";
      return rejectWithValue(errorMessage);
    }
  }
);
export const increaseQuantity = createAsyncThunk(
  "inc/quantity",
  async (
    { userId, cartId }: { userId: string; cartId: string },
    { rejectWithValue }
  ) => {
    try {
      const req = await fetch(
        `${import.meta.env.VITE_API}/api/increaseQuantity/${userId}/${cartId}`,
        {
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const res = await req.json();
      if (res.success) {
        toast.success(res.message);
        return res.response;
      } else {
        toast.error(res.message);
        throw new Error(res.message);
      }
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Internal Server Error !";
      return rejectWithValue(errorMessage);
    }
  }
);
export const decreaseQuantity = createAsyncThunk(
  "dec/quantity",
  async (
    { userId, cartId }: { userId: string; cartId: string },
    { rejectWithValue }
  ) => {
    try {
      const req = await fetch(
        `${import.meta.env.VITE_API}/api/decreaseQuantity/${userId}/${cartId}`,
        {
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const res = await req.json();
      if (res.success) {
        return res.response;
      } else {
        throw new Error(res.message);
      }
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Internal Server Error !";
      return rejectWithValue(errorMessage);
    }
  }
);
