import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import "./NavBar.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Badge from "react-bootstrap/Badge";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Cart from "../Cart/Cart";
import CartContext from "../../store/cart-context";

function NavBar(props) {
  const cartContext = useContext(CartContext);
  let quantity = 0;
  cartContext.items.forEach((item) => {
    quantity = quantity + Number(item.quantity);
  });

  let activeStyle = {
    textDecoration: "underline",
  };

  let activeClassName = "underline";

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
          <NavLink
            to="/home"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            <Nav.Link href="#home">HOME</Nav.Link>
          </NavLink>

          <NavLink
            to="/store"
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }
          >
            <Nav.Link
              href="#features"
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
            >
              STORE
            </Nav.Link>
          </NavLink>

          <NavLink
            to="/about"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            <Nav.Link href="#pricing">ABOUT</Nav.Link>
          </NavLink>

          {/* <Link to="/cart">
            <Nav.Link href="#cart">CART</Nav.Link>
          </Link> */}

          <NavLink to="/contactUs">
            <Nav.Link href="#contactUs">Contact Us</Nav.Link>
          </NavLink>
        </Nav>

        <NavLink>
          <Button
            variant="light"
            onClick={props.showModal}
            style={{ color: "black", fontSize: "15px", cursor: "pointer" }}
          >
            CART
            <Badge bg="danger" style={{ marginLeft: "5px" }}>
              {Number(quantity)}
            </Badge>
          </Button>
        </NavLink>

        {props.openModal && (
          <Cart
            closeModal={props.hideModal}
            showModal={props.showModal}
            onAdd={props.onAdd}
            onRemove={props.onRemove}
          />
        )}
        {/* <Button variant="secondary" onClick={showModal}>
          Cart
        </Button> */}
      </Container>
    </Navbar>
  );
}

export default NavBar;
