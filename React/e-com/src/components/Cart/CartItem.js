import axios from "axios";
import React, { useContext } from "react";
import { Button, Card, Container } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";

const CartItem = (props, item) => {
  const price = `${Math.floor(props.price).toFixed(2)}`;
  console.log(props);

  return (
    <Container style={{ marginTop: "10px", alignItems: "center" }}>
      <Card
        border="light"
        style={{ width: "45rem", marginLeft: "0%", justifyContent: "center" }}
      >
        <ListGroup as="ol">
          <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start"
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold">
                <img
                  src={props.img}
                  style={{ height: "60px", width: "60px", marginRight: "10px" }}
                ></img>
                {/* <span style={{ marginRight: "5px" }}>{props.list}</span> */}
                <span>{props.name}</span>
              </div>
            </div>
            <h5
              style={{
                fontSize: "15px",

                fontWeight: "lighter",
                marginTop: "15px",
                alignItems: "center",
                marginRight: "30px",
              }}
            >
              {props.quantity} x
            </h5>
            <h5
              style={{
                marginTop: "10px",
                alignItems: "center",
                marginRight: "30px",
              }}
            >
              $ {Number(price)}
            </h5>
            <div style={{ padding: "5px" }}>
              <Button
                size="sm"
                variant="danger"
                style={{ marginRight: "10px" }}
                onClick={props.onAdd}
              >
                +
              </Button>
              <Button size="sm" variant="danger" onClick={props.onRemove}>
                -
              </Button>
            </div>
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </Container>
  );
};

export default CartItem;
