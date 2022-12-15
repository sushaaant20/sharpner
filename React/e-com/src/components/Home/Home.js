import React, { useContext } from "react";
import Header from "../UI/Header";
import "./Home.css";
import ProductItem from "./ProductItem";
import Row from "react-bootstrap/Row";
import { NavLink } from "react-router-dom";
import data from "../Data/Data";

const Home = (props) => {
  const productList = data.map((item) => (
    <NavLink to={`/product/${item.id}`}>
      <ProductItem
        key={item.id}
        id={item.id}
        name={item.title}
        price={item.price}
        img={item.imageUrl}
      />
    </NavLink>
  ));
  return (
    <>
      <Header />
      <section
        style={{
          textAlign: "center",
          fontFamily: "Alegreya",
          fontWeight: "500",
        }}
      >
        <h1>MUSIC</h1>
      </section>
      <div
        className="d-flex justify-content-center"
        style={{
          marginLeft: "200px",
          textAlign: "center",
        }}
      >
        <Row className="justify-content-md-center" md={2}>
          {productList}
        </Row>
      </div>
    </>
  );
};

export default Home;
