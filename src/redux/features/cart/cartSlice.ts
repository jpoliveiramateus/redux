import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Product } from "../../../types/product";

import { CartState } from "./cartTypes";

const initialState: CartState = {
  products: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      const existingProduct = state.products.find(
        (p) => p.id === action.payload.id
      );

      if (existingProduct) {
        state.products = state.products.map((product) =>
          product.id === action.payload.id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        );
      } else {
        state.products.push({
          ...action.payload,
          quantity: 1,
        });
      }
    },
    increaseProductQuantity: (state, action: PayloadAction<number>) => {
      state.products = state.products.map((product) =>
        product.id === action.payload
          ? { ...product, quantity: product.quantity + 1 }
          : product
      );
    },
    decreaseProductQuantity: (state, action: PayloadAction<number>) => {
      state.products = state.products
        .map((product) =>
          product.id === action.payload
            ? { ...product, quantity: product.quantity - 1 }
            : product
        )
        .filter((product) => product.quantity > 0);
    },
  },
});

export const { addProduct, increaseProductQuantity, decreaseProductQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
