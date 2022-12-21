import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  //unique Name
  name: "ui",
  initialState: { cartIsVisible: false, notification: null },
  reducers: {
    //map of methods that represents all the different cases/actions we want to handle with the reducer
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
