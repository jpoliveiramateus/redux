import { combineReducers } from "redux";
import { userReducer } from "../features/user/userReducer";

export const rootReducer = combineReducers({
  userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
