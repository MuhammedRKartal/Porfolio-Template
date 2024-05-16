"use client";

import { createSlice } from "@reduxjs/toolkit";

export interface InitialPage {
  isInitialHomePage: boolean;
}

const initialState: InitialPage = {
  isInitialHomePage: true,
};

const initialPageSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
    toggleInitialHomePage(state) {
      state.isInitialHomePage = !state.isInitialHomePage;
    },
    setInitialHomePage(state, action) {
      state.isInitialHomePage = action.payload;
    },
    resetInitialPageState() {
      return initialState;
    },
  },
});

export const { toggleInitialHomePage, setInitialHomePage, resetInitialPageState } =
  initialPageSlice.actions;

export default initialPageSlice.reducer;
