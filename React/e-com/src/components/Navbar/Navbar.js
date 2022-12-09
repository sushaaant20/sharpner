import React from "react";
import Container from "react-bootstrap/Container";
import "./NavBar.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Modal from "../Modal/Modal";
import Badge from "react-bootstrap/Badge";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Cart from "../Cart/Cart";

function NavBar(props) {
  return (
    <Navbar expand="lg" variant="dark" bg="dark" fixed="top">
      <Container>
        <Navbar.Brand href="#">The Generics</Navbar.Brand>
        <Nav
          style={{
            color: "white",
            marginLeft: "-90px",
          }}
        >
          <Link to="/home">
            <Nav.Link href="#home">HOME</Nav.Link>
          </Link>

          <Link to="/store">
            <Nav.Link href="#features">STORE</Nav.Link>
          </Link>

          <Link to="/about">
            <Nav.Link href="#pricing">ABOUT</Nav.Link>
          </Link>

          {/* <Link to="/cart">
            <Nav.Link href="#cart">CART</Nav.Link>
          </Link> */}
        </Nav>

        <Link>
          <Button
            variant="light"
            onClick={props.showModal}
            style={{ color: "black", fontSize: "15px", cursor: "pointer" }}
          >
            CART
            <Badge bg="danger" style={{ marginLeft: "5px" }}>
              0
            </Badge>
          </Button>
        </Link>

        {props.openModal && (
          <Cart closeModal={props.hideModal} showModal={props.showModal} />
        )}
        {/* <Button variant="secondary" onClick={showModal}>
          Cart
        </Button> */}
      </Container>
    </Navbar>
  );
}

export default NavBar;
