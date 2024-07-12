import { createSlice } from "@reduxjs/toolkit";
import { Iproduct } from "../../types";
import { getAllProducts, getSingleProduct } from "./productApi";

export interface IinitialState {
  products: Iproduct[] | null;
  productsFetchedStatus: "idle" | "success" | "pending" | "fail";
  product: Iproduct | null;
  productFetchedStatus: "idle" | "success" | "pending" | "fail";
}

const initialState: IinitialState = {
  products: null,
  productsFetchedStatus: "idle",
  product: null,
  productFetchedStatus: "idle",
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.productsFetchedStatus = "success";
        state.products = action.payload;
      })
      .addCase(getAllProducts.rejected, (state) => {
        state.productsFetchedStatus = "fail";
      })
      .addCase(getAllProducts.pending, (state) => {
        state.productsFetchedStatus = "pending";
      })
      .addCase(getSingleProduct.fulfilled, (state, action) => {
        state.productFetchedStatus = "success";
        state.product = action.payload;
      })
      .addCase(getSingleProduct.rejected, (state) => {
        state.productFetchedStatus = "fail";
      })
      .addCase(getSingleProduct.pending, (state) => {
        state.productFetchedStatus = "pending";
      });
  },
});

export default productSlice.reducer;
