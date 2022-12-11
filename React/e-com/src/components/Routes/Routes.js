import React from "react";

import { Route, Routes, NavLink } from "react-router-dom";
import Home from "../Home/Home";
import About from "../About/About";
import Store from "../Store/Store";
import Cart from "../Cart/Cart";

const Routees = (props) => {
  return (
    <Routes>
      <Route
        path="/home"
        element={
          <Home item={props} onAdd={props.onAdd} onRemove={props.onRemove} />
        }
      />
      <Route
        path="/"
        element={
          <Home item={props} onAdd={props.onAdd} onRemove={props.onRemove} />
        }
      />
      <Route path="/about" element={<About />} />
      <Route path="/store" element={<Store />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};

export default Routees;
