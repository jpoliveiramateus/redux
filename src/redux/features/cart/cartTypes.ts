import { Product } from "../../../types/product";

export type CartProduct = Product & {
  quantity: number;
};

export type CartState = {
  products: CartProduct[];
};

export enum CartActionType {
  ADD_PRODUCT = "cart/addProduct",
  INCREASE_PRODUCT_QUANTITY = "cart/increaseProductQuantity",
  DECREASE_PRODUCT_QUANTITY = "cart/decreaseProductQuantity",
}

export type AddProductAction = {
  type: CartActionType.ADD_PRODUCT;
  payload: Product;
};

export type IncreaseProductQuantityAction = {
  type: CartActionType.INCREASE_PRODUCT_QUANTITY;
  payload: number;
};

export type DecreaseProductQuantityAction = {
  type: CartActionType.DECREASE_PRODUCT_QUANTITY;
  payload: number;
};

export type CartAction =
  | AddProductAction
  | IncreaseProductQuantityAction
  | DecreaseProductQuantityAction;
