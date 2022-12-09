import React from "react";

import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import About from "../About/About";
import Store from "../Store/Store";
import Cart from "../Cart/Cart";

const Routees = (handleAddProduct) => {
  return (
    <Routes>
      <Route
        path="/home"
        element={<Home handleAddProduct={handleAddProduct} />}
      />
      <Route path="/" element={<Home handleAddProduct={handleAddProduct} />} />
      <Route path="/about" element={<About />} />
      <Route path="/store" element={<Store />} />
      {/* <Route path="/cart" element={<Cart />} /> */}
    </Routes>
  );
};

export default Routees;
