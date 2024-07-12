import { createSlice } from "@reduxjs/toolkit";
import { Icart } from "../../types";
import {
  addToCart,
  decreaseQuantity,
  deleteFromCart,
  getUserCart,
  increaseQuantity,
} from "./cartApi";

export interface IinitialState {
  cart: Icart[] | null;
  cartFetchedStatus: "idle" | "success" | "fail" | "pending";
  addToCartStatus: "idle" | "success" | "fail" | "pending";
  deleteFromCartStatus: "idle" | "success" | "fail" | "pending";
  increaseQuantityStatus: "idle" | "success" | "fail" | "pending";
  decreaseQuantityStatus: "idle" | "success" | "fail" | "pending";
}

const initialState: IinitialState = {
  cart: null,
  cartFetchedStatus: "idle",
  addToCartStatus: "idle",
  deleteFromCartStatus: "idle",
  increaseQuantityStatus: "idle",
  decreaseQuantityStatus: "idle",
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUserCart.fulfilled, (state, action) => {
        (state.cartFetchedStatus = "success"), (state.cart = action.payload);
      })
      .addCase(getUserCart.rejected, (state) => {
        state.cartFetchedStatus = "fail";
      })
      .addCase(getUserCart.pending, (state) => {
        state.cartFetchedStatus = "pending";
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.addToCartStatus = "success";
        if (state.cart) {
          state.cart = [...state.cart, action.payload];
        }
      })
      .addCase(addToCart.rejected, (state) => {
        state.addToCartStatus = "fail";
      })
      .addCase(addToCart.pending, (state) => {
        state.addToCartStatus = "pending";
      })
      .addCase(deleteFromCart.fulfilled, (state, action) => {
        state.deleteFromCartStatus = "success";
        if (state.cart) {
          const deletedCartIdIndex = state.cart.findIndex(
            (el) => el._id === action.payload._id
          );
          if (deletedCartIdIndex !== -1) {
            state.cart.splice(deletedCartIdIndex, 1);
          }
        }
      })
      .addCase(deleteFromCart.rejected, (state) => {
        state.deleteFromCartStatus = "fail";
      })
      .addCase(deleteFromCart.pending, (state) => {
        state.deleteFromCartStatus = "pending";
      })
      .addCase(increaseQuantity.fulfilled, (state, action) => {
        state.increaseQuantityStatus = "success";
        if (state.cart) {
          const updatedCart = state.cart.map((el) => {
            if (el._id === action.payload._id) {
              el.quantity = action.payload.quantity;
            }
            return el;
          });
          state.cart = updatedCart;
        }
      })
      .addCase(increaseQuantity.rejected, (state) => {
        state.increaseQuantityStatus = "fail";
      })
      .addCase(increaseQuantity.pending, (state) => {
        state.increaseQuantityStatus = "pending";
      })
      .addCase(decreaseQuantity.fulfilled, (state, action) => {
        state.decreaseQuantityStatus = "success";
        if (state.cart) {
          const updatedCart = state.cart.map((el) => {
            if (el._id === action.payload._id) {
              el.quantity = action.payload.quantity;
            }
            return el;
          });
          state.cart = updatedCart;
        }
      })
      .addCase(decreaseQuantity.rejected, (state) => {
        state.decreaseQuantityStatus = "fail";
      })
      .addCase(decreaseQuantity.pending, (state) => {
        state.decreaseQuantityStatus = "pending";
      });
  },
});
export default cartSlice.reducer;
