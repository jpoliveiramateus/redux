import { RootState } from "../../store/reducer";

export const selectCartProductsCount = (state: RootState) => {
  return state.cartReducer.products.reduce(
    (acc, product) => acc + product.quantity,
    0
  );
};
