import Container from "react-bootstrap/Container";
import "./NavBar.css";
import { BsFillBagFill } from "react-icons/bs";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function NavBar() {
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
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        <BsFillBagFill
          style={{ color: "white", fontSize: "20px", cursor: "pointer" }}
        />
      </Container>
    </Navbar>
  );
}

export default NavBar;
