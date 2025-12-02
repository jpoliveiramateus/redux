import { rootReducer } from "./reducer";
import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type AppDispatch = typeof store.dispatch;
