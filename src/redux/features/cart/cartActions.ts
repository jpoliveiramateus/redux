import { Product } from "../../../types/product";
import {
  AddProductAction,
  CartActionType,
  DecreaseProductQuantityAction,
  IncreaseProductQuantityAction,
  RemoveProductAction,
} from "./cartTypes";

export const addProduct = (product: Product): AddProductAction => {
  return {
    type: CartActionType.ADD_PRODUCT,
    payload: product,
  };
};

export const removeProduct = (productId: number): RemoveProductAction => {
  return {
    type: CartActionType.REMOVE_PRODUCT,
    payload: productId,
  };
};

export const increaseProductQuantity = (
  productId: number
): IncreaseProductQuantityAction => {
  return {
    type: CartActionType.INCREASE_PRODUCT_QUANTITY,
    payload: productId,
  };
};

export const decreaseProductQuantity = (
  productId: number
): DecreaseProductQuantityAction => {
  return {
    type: CartActionType.DECREASE_PRODUCT_QUANTITY,
    payload: productId,
  };
};
