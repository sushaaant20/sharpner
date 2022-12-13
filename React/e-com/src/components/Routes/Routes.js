import React from "react";

import { Route, Routes, NavLink } from "react-router-dom";
import Home from "../Home/Home";
import About from "../About/About";
import Store from "../Store/Store";
import Cart from "../Cart/Cart";
import MainHome from "../Home/MainHome";
import { ContactUs } from "../ContactUs/ContactUs";

const Routees = (props) => {
  return (
    <Routes>
      <Route
        path="/home"
        element={
          <MainHome
            item={props}
            onAdd={props.onAdd}
            onRemove={props.onRemove}
          />
        }
      />
      <Route
        path="/"
        element={
          <Home item={props} onAdd={props.onAdd} onRemove={props.onRemove} />
        }
      />
      <Route path="/about" element={<About />} />
      <Route
        path="/store"
        element={
          <Home item={props} onAdd={props.onAdd} onRemove={props.onRemove} />
        }
      />
      <Route path="/cart" element={<Cart />} />
      <Route path="/contactUs" element={<ContactUs />} />
    </Routes>
  );
};

export default Routees;
