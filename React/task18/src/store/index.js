import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./ui-slice";
import cartSlice from "./cart-slice";

const store = configureStore({
  //settingup root reducer
  reducer: {
    ui: uiSlice.reducer,
    cart: cartSlice.reducer,
  },
});

export default store;
