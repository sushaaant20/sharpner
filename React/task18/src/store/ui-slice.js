import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  //unique Name
  name: "ui",
  initialState: { cartIsVisible: false },
  reducers: {
    //map of methods that represents all the different cases/actions we want to handle with the reducer
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
