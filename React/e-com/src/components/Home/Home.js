import React, { useContext } from "react";
import Header from "../UI/Header";
import "./Home.css";
import ProductItem from "./ProductItem";
import Row from "react-bootstrap/Row";

const PRODUCT_DATA = [
  {
    id: 1,
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },

  {
    id: 2,
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },

  {
    id: 3,
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },

  {
    id: 4,
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

const Home = (props) => {
  const productList = PRODUCT_DATA.map((item) => (
    <ProductItem
      key={item.id}
      id={item.id}
      name={item.title}
      price={item.price}
      img={item.imageUrl}
    />
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
