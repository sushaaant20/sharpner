import { Fragment } from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";
import { Editor } from "react-draft-wysiwyg";
import { Card } from "react-bootstrap";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import ComposeMail from "../Mailbox/ComposeMail";

function Home() {
  const navigate = useNavigate();
  let email = localStorage.getItem("email");
  const logOutHandler = () => {
    console.log("localstorage cleared");
    localStorage.clear();
    navigate("/", { replace: true });
  };
  return (
    <Fragment>
      <Navbar bg="dark" style={{ padding: "10px", marginBottom: "10px" }}>
        <Container>
          <Navbar.Brand href="#home" className="text-white">
            MAILBOX CLIENT
          </Navbar.Brand>
          <Navbar.Collapse className="justify-content-end text-white">
            <Navbar.Text className="text-white">
              Signed in as :{"    "}
              <p>{email}</p>
            </Navbar.Text>
            <Button
              style={{ marginLeft: "20px", marginRight: "-90px" }}
              onClick={logOutHandler}
            >
              Logout
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <ComposeMail />
    </Fragment>
  );
}

export default Home;
