import React from "react";

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: () => {},
  removeItem: () => {},
  message: "CONEEETi",
});

export default CartContext;
