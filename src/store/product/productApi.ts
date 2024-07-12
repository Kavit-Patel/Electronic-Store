// productRouter.post("/addNewProduct", isAdmin, addNewProduct);
// productRouter.get("/getAllProducts", getAllProducts);

import { createAsyncThunk } from "@reduxjs/toolkit";

// productRouter.get("/getSingleProduct/:id", getSingleProduct);
export const getAllProducts = createAsyncThunk(
  "get/products",
  async (_, { rejectWithValue }) => {
    try {
      const req = await fetch(
        `${import.meta.env.VITE_API}/api/getAllProducts`,
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

export const getSingleProduct = createAsyncThunk(
  "get/product",
  async (id: string, { rejectWithValue }) => {
    try {
      const req = await fetch(
        `${import.meta.env.VITE_API}/api/getSingleProduct/${id}`,
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
