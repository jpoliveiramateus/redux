import { combineReducers } from "redux";
import { userReducer } from "../features/user/userReducer";
import cartReducer from "../features/cart/cartSlice";

export const rootReducer = combineReducers({
  userReducer,
  cartReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
