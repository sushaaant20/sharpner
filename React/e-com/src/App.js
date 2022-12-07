import React, { Fragment } from "react";
import Home from "./components/Home/Home";

import NavBar from "./components/Navbar/Navbar";
import "./App.css";

const App = (props) => {
  return (
    <>
      <NavBar />
      <br></br>
      <br></br>
      <Home />
    </>
  );
};

export default App;
