import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "./slice";

export const store = configureStore({
  reducer: {
    account: accountReducer,
  },
});
