import { configureStore } from "@reduxjs/toolkit";
import { filterReducer } from "features/filters";

export function creacteReduxStore() {
  const store = configureStore({
    reducer: {
      filters: filterReducer,
    },
  });

  return store;
}
