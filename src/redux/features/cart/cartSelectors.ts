import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "../../store/reducer";

// export const selectCartProductsCount = (state: RootState) => {
//   return state.cartReducer.products.reduce(
//     (acc, product) => acc + product.quantity,
//     0
//   );
// };

const selectCartProducts = (state: RootState) => state.cartReducer.products;

// Selector memoizado - só recalcula se os produtos mudarem
export const selectCartProductsCount = createSelector(
  [selectCartProducts],
  (products) => products.reduce((acc, product) => acc + product.quantity, 0)
);

export const selectCartProductsTotalPrice = createSelector(
  [selectCartProducts],
  (products) =>
    products.reduce((acc, product) => acc + product.price * product.quantity, 0)
);
