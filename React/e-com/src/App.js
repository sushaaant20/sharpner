import React, { useState } from "react";

import NavBar from "./components/Navbar/Navbar";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Routees from "./components/Routes/Routes";
import XModal from "./components/Modal/Modal";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";

const App = (props) => {
  const [openModal, setOpenModal] = useState(false);

  const showModal = () => {
    setOpenModal(true);
  };
  const hideModal = () => {
    setOpenModal(false);
  };
  const onAdd = () => {
    console.log("OnAddClicked clicked");
  };

  const onRemove = () => {
    console.log("OnRemove Clicked");
  };
  const onCart = () => {
    console.log("cliclk");
  };
  return (
    <Router>
      <NavBar
        showModal={showModal}
        hideModal={hideModal}
        openModal={openModal}
        onAdd={onAdd}
        onRemove={onRemove}
        onCart={onCart}
      />
      {/* <Cart showModal={showModal} hideModal={hideModal} openModal={openModal} /> */}
      <br></br>
      <br></br>
      {/* <Home item={props} onAdd={onAdd} onRemove={onRemove} /> */}
      <Routees item={props} onAdd={onAdd} onRemove={onRemove} />
      {/* <Footer /> */}
    </Router>
  );
};

export default App;
