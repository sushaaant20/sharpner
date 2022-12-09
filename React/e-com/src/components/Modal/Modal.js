import React, { useState } from "react";
import { Container, Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Cart from "../Cart/Cart";

const Xmodal = (props, CartItems) => {
  // const show = props.showModal;
  // // const hide = props.closeModal;
  // const [openModal, setOpenModal] = useState(false);
  // const showModal = () => {
  //   console.log("fucj");
  //   setOpenModal(true);
  // };
  // const hideModal = () => {
  //   console.log("fucj");
  //   setOpenModal(false);

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
      <Modal.Body>
        <Cart />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.closeModal}>
          close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default Xmodal;
