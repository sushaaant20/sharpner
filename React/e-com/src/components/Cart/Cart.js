import React, { useContext } from "react";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

const Cart = (props) => {
  const ctx = useContext(CartContext);
  const hasItems = ctx.items.length > 0;

  console.log("CART =>" + props);

  let totalAmount = 0;
  ctx.items.forEach((item) => {
    Math.floor((totalAmount = totalAmount + item.price * item.quantity));
  });

  const cartItemAddHandler = (item) => {
    ctx.addItem({ ...item, quantity: 1 });
    console.log(item);
  };
  const cartItemRemoveHandler = (item) => {
    ctx.removeItem(item);
  };

  const cartItems = (
    <ul>
      {ctx.items.map((item) => (
        <CartItem
          key={item.key}
          id={item.id}
          name={item.name}
          price={item.price}
          quantity={item.quantity}
          img={item.img}
          item={props}
          onRemove={cartItemRemoveHandler.bind(null, item)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );
  return (
    <Modal
      show={props.showModal}
      onHide={props.closeModal}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>CART ITEMS</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Modal.Title
          style={{
            fontSize: "20px",
            fontSize: "19px",
            fontWeight: "200",
            display: "flex",
            justifyContent: "right",
            marginRight: "90px",
          }}
        >
          <span
            style={{
              marginRight: "20px",
            }}
          >
            Quantity
          </span>
          <span
            style={{
              marginRight: "20px",
            }}
          >
            Amount
          </span>
        </Modal.Title>
        {cartItems}
      </Modal.Body>
      <Modal.Footer
        style={{
          justifyContent: "space-between",
        }}
      >
        <span
          style={{
            marginLeft: "20px",
            fontWeight: "800",
            fontSize: "20px",
          }}
        >
          Total = {Number(totalAmount)}
        </span>
        <Button
          style={{
            marginLeft: "450px",
          }}
          variant="primary"
          onClick={props.closeModal}
        >
          Close
        </Button>

        {hasItems && (
          <Button
            style={{
              marginLeft: "-10px",
            }}
            variant="danger"
          >
            Order
          </Button>
        )}
      </Modal.Footer>
    </Modal>
  );
};

export default Cart;
