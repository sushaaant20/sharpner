import React, { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [items, updateItems] = useState([]);

  const addItemToCartHandler = (item) => {
    updateItems([...items, item]);
    console.log("Inside ", CartContext);
  };

  const removeItemFromCartHandler = (item) => {
    console.log("removed", items);
    const newItemArr = [...items];
    newItemArr.forEach((element, index) => {
      if (item.id === element.id) {
        newItemArr.splice(index, 1);
      }
    });
    updateItems(newItemArr);
  };

  const cartContext = {
    items: items,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
