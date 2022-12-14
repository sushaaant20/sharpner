import React, { useContext } from "react";

import { Route, Routes, Navigate } from "react-router-dom";
import Home from "../Home/Home";
import About from "../About/About";
import Cart from "../Cart/Cart";
import MainHome from "../Home/MainHome";
import { ContactUs } from "../ContactUs/ContactUs";
import Products from "../Products/Products";
import Login from "../Login/Login";
import AuthContext from "../../store/auth-contex";
import { Nav } from "react-bootstrap";

const Routees = (props) => {
  const ctx = useContext(AuthContext);
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
      <Route path="/login" element={<Login />} />
      {ctx.isLoggedIn && (
        <Route
          path="/store"
          element={
            <Home item={props} onAdd={props.onAdd} onRemove={props.onRemove} />
          }
        />
      )}
      <Route path="/cart" element={<Cart />} />
      <Route path="/product/:id" element={<Products />} />
      <Route path="/contactUs" element={<ContactUs />} />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
};

export default Routees;
