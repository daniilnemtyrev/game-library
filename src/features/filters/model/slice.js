import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: undefined,
  orderFilter: {
    order: {
      id: undefined,
      name: "",
    },
    direction: true,
  },
  platformsFilter: {
    id: undefined,
    name: "",
  },
};

export const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setSearchValue: (state, action) => {
      state.search = action.payload;
    },
    setOrderFilterValue: (state, action) => {
      state.orderFilter.order = action.payload;
    },
    toggleOrderDirection: (state) => {
      state.orderFilter.direction = !state.orderFilter.direction;
    },
    resetOrderFilters: (state) => {
      state.orderFilter.order = {
        id: undefined,
        name: "",
      };
      state.orderFilter.direction = true;
    },
    setPlatformFilterValue: (state, action) => {
      state.platformsFilter = action.payload;
    },

    resetPlatformFilters: (state) => {
      state.platformsFilter = { id: undefined, name: "" };
    },
  },
});

export const { actions: filterActions } = filterSlice;

export const { reducer: filterReducer } = filterSlice;
