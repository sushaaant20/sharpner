import React from "react";
import { Card } from "react-bootstrap";

import Col from "react-bootstrap/Col";
import ProductitemForm from "./ProductitemForm";

const ProductItem = (props) => {
  const price = `${props.price.toFixed(2)}`;
  return (
    <Col id={props.id}>
      <Card
        border="black"
        label="Amount"
        input={{
          id: "amount_",
        }}
        style={{
          width: "13rem",
          background: "white",
          fontFamily: "Alegreya",
          fontWeight: "500",
          padding: "10px",
        }}
        className="mb-2 bg"
      >
        <Card.Header>{props.name}</Card.Header>
        {/* <Card.Body> */}
        <Card.Img variant="top" src={props.img} />
        <ProductitemForm id={props.id} items={props} price={price} />

        {/* </Card.Body> */}
      </Card>
    </Col>
  );
};

export default ProductItem;
