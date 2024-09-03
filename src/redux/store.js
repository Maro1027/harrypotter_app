import { configureStore } from "@reduxjs/toolkit";
import prsonReducer from "./personSlice";

export const store = configureStore({
  reducer: {
    persons: prsonReducer,
  },
});
