import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Product } from "../../../types/product";
import * as productApi from "../../../api/product.api";

import { CartState } from "./cartTypes";

export const fetchProducts = createAsyncThunk(
  "cart/fetchProducts",
  async () => {
    const response = await productApi.fetchProducts();
    return response.data;
  }
);

const initialState: CartState = {
  products: [],
  selectedProducts: [],
  status: "idle",
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      const existingProduct = state.selectedProducts.find(
        (p) => p.id === action.payload.id
      );

      if (existingProduct) {
        state.selectedProducts = state.selectedProducts.map((product) =>
          product.id === action.payload.id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        );
      } else {
        state.selectedProducts.push({
          ...action.payload,
          quantity: 1,
        });
      }
    },
    removeProduct: (state, action: PayloadAction<number>) => {
      state.selectedProducts = state.selectedProducts.filter(
        (product) => product.id !== action.payload
      );
    },
    increaseProductQuantity: (state, action: PayloadAction<number>) => {
      state.selectedProducts = state.selectedProducts.map((product) =>
        product.id === action.payload
          ? { ...product, quantity: product.quantity + 1 }
          : product
      );
    },
    decreaseProductQuantity: (state, action: PayloadAction<number>) => {
      state.selectedProducts = state.selectedProducts
        .map((product) =>
          product.id === action.payload
            ? { ...product, quantity: product.quantity - 1 }
            : product
        )
        .filter((product) => product.quantity > 0);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload;
      state.status = "succeeded";
    });
    builder.addCase(fetchProducts.rejected, (state) => {
      state.status = "failed";
    });
    builder.addCase(fetchProducts.pending, (state) => {
      state.status = "loading";
    });
  },
});

export const {
  addProduct,
  removeProduct,
  increaseProductQuantity,
  decreaseProductQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
