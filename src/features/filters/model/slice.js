import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: undefined,
};

export const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setSearchValue: (state, action) => {
      state.search = action.payload;
    },
  },
});

export const { actions: filterActions } = filterSlice;

export const { reducer: filterReducer } = filterSlice;
