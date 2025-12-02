import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "../../store/reducer";

// export const selectCartProductsCount = (state: RootState) => {
//   return state.cartReducer.products.reduce(
//     (acc, product) => acc + product.quantity,
//     0
//   );
// };

const cartProducts = (state: RootState) => state.cartReducer.selectedProducts;

// Selector memoizado - só recalcula se os produtos mudarem
export const selectSelectedProductsCount = createSelector(
  [cartProducts],
  (products) => products.reduce((acc, product) => acc + product.quantity, 0)
);

export const selectSelectedProductsTotalPrice = createSelector(
  [cartProducts],
  (products) =>
    products.reduce((acc, product) => acc + product.price * product.quantity, 0)
);
