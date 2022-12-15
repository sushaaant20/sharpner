import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import CartContext from "./cart-context";
import AuthContext from "./auth-contex";

const CartProvider = (props) => {
  const [items, updateItems] = useState([]);

  const authCtx = useContext(AuthContext);
  const email = localStorage.getItem("email");
  const formattedEmail = email.replace(/[^a-zA-Z0-9]/g, "");

  // const onCartClickHander = async () => {
  //   await axios
  //     .get(
  //       `https://crudcrud.com/api/3df8f823cd5f4ceca0027adedf3cc7c6/cart${formattedEmail}`
  //     )
  //     .then((res) => {
  //       console.log(res);
  //       ctx.addItem(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  //   // setReceivedData(response.data[0].elements);
  // };

  useEffect(() => {
    const obj = {
      elements: items,
    };

    axios
      .get(
        `https://crudcrud.com/api/3df8f823cd5f4ceca0027adedf3cc7c6/cart${formattedEmail}`
      )
      .then((res) => {
        if (res.data.length !== 0) {
          const id = res.data[0]._id;
          axios
            .put(
              `https://crudcrud.com/api/3df8f823cd5f4ceca0027adedf3cc7c6/cart${formattedEmail}/${id}`,
              obj
            )
            .then((res) => console.log(res));
        } else {
          axios
            .post(
              `https://crudcrud.com/api/3df8f823cd5f4ceca0027adedf3cc7c6/cart${formattedEmail}`,
              obj
            )
            .then((res) => console.log(res));
        }
      });
  }, [items, formattedEmail]);

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

  const empty = () => {
    updateItems([]);
  };

  const cartContext = {
    items: items,
    email: formattedEmail,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    empty: empty,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
