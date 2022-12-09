import React from "react";
import { Button, Card, Container } from "react-bootstrap";
import Badge from "react-bootstrap/Badge";
import ListGroup from "react-bootstrap/ListGroup";

const CartItem = (props) => {
  const price = 0;
  return (
    <Container style={{ marginTop: "0px", alignItems: "center" }}>
      <Card
        border="danger"
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
                  style={{ height: "60px", width: "60px" }}
                ></img>
                <span style={{ marginRight: "5px" }}>{props.list}</span>
                <span>{props.name}</span>
              </div>
            </div>
            <Badge style={{ marginTop: "10px", alignItems: "center" }}>
              $ {props.price}
            </Badge>
            <div style={{ padding: "5px" }}>
              <Button
                size="sm"
                variant="danger"
                style={{ marginRight: "10px" }}
              >
                Add
              </Button>
              <Button size="sm" variant="danger">
                Remove
              </Button>
            </div>
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </Container>
  );
};

export default CartItem;
