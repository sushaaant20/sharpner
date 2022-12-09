import React from "react";
// import OffCanvas from "../Modal/Modal";
// import Modal from "../Modal/Modal";
// import Header from "../UI/Header";
import CartItem from "./CartItem";
// import Xmodal from "../Modal/Modal";
import { Button, Container } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
const productItems = [
  {
    title: "Colors",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",

    quantity: 2,
  },

  {
    title: "Black and white Colors",

    price: 50,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",

    quantity: 3,
  },

  {
    title: "Yellow and Black Colors",

    price: 70,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",

    quantity: 1,
  },
];

const Cart = (props) => {
  const CartItems = (
    <ul>
      {productItems.map((item) => (
        <CartItem
          key={item.id}
          list={item.id}
          name={item.title}
          price={item.price}
          img={item.imageUrl}
        />
      ))}
    </ul>
  );
  return (
    <Modal
      show={props.showModal}
      onHide={props.closeModal}
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>CART ITEMS</Modal.Title>
      </Modal.Header>
      <Modal.Body>{CartItems}</Modal.Body>
      <Modal.Footer>
        <Container>
          <span>Total = {}</span>
        </Container>
        <Container>
          <Button variant="secondary" onClick={props.closeModal}>
            close
          </Button>
        </Container>
      </Modal.Footer>
    </Modal>
  );
};

export default Cart;
