import React, { useState } from "react";
import Home from "./components/Home/Home";

import NavBar from "./components/Navbar/Navbar";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Routees from "./components//Routes/Routes";
import Cart from "./components/Cart/Cart";
import { Modal } from "react-bootstrap";
import XModal from "./components/Modal/Modal";

const App = (props) => {
  const [openModal, setOpenModal] = useState(false);

  const showModal = () => {
    console.log("fucj");
    setOpenModal(true);
  };
  const hideModal = () => {
    console.log("fucj");
    setOpenModal(false);
  };
  const handleAddProduct = (variant) => {
    console.log("button clicked", variant);
  };

  return (
    <Router>
      <NavBar
        showModal={showModal}
        hideModal={hideModal}
        openModal={openModal}
      />
      <XModal />
      {/* <Cart showModal={showModal} hideModal={hideModal} openModal={openModal} /> */}
      <br></br>
      <br></br>
      <Routees handleAddProduct={handleAddProduct} />
    </Router>
  );
};

export default App;
