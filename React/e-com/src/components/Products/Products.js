import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card, Container, Button } from "react-bootstrap";
import Header from "../UI/Header";
import data from "../Data/Data";

const Products = () => {
  const params = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    getProduct();
  }, []);
  const getProduct = () => {
    const newproduct = data.find((data) => data.id === parseInt(params.id));
    console.log(newproduct);
    setProduct(newproduct);
  };

  return (
    <React.Fragment>
      <Header />
      <Card style={{ width: "18rem", marginLeft: "40%" }}>
        <Card.Img variant="top" src={product.imageUrl} />
        <Card.Body>
          <Card.Title>
            <h5>{product.title}</h5>
          </Card.Title>
          <Card.Text>
            <h5>${product.price}</h5>
          </Card.Text>
        </Card.Body>
      </Card>
    </React.Fragment>
  );
};

export default Products;
