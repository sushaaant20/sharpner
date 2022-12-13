import React, { useEffect, useCallback, useRef } from "react";
import Header from "../UI/Header";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { Card, Container } from "react-bootstrap";

export const ContactUs = () => {
  const emailRef = useRef("");
  const nameRef = useRef("");
  const phoneRef = useRef("");

  const sendDataToFireBase = useCallback(async (formData) => {
    try {
      const response = await fetch(
        "https://react-http-a29a5-default-rtdb.asia-southeast1.firebasedatabase.app/form.json",
        {
          method: "POST",
          body: JSON.stringify(formData),
          headers: {
            "Content-Type": "application/JSON",
          },
        }
      );
      const data = await response.json();
    } catch (error) {
      console.log(error);
    }
  });

  const submitFormHandler = (e) => {
    e.preventDefault();
    const data = {
      Email: emailRef.current.value,
      Name: nameRef.current.value,
      Phone: phoneRef.current.value,
    };
    sendDataToFireBase(data);
    console.log("Button Clicked");
  };
  // This function should POST data to the firebase

  return (
    <>
      <Header />
      <Container style={{ marginBottom: "30px" }}>
        <Card>
          <Card.Header>
            <h2 style={{ fontFamily: "sans" }}>Contact us form</h2>
          </Card.Header>
          <Form
            style={{
              marginLeft: "30px",
              fontFamily: "serif",
              marginTop: "20px",
              marginRight: "30px",
              padding: "10px",
            }}
          >
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  ref={emailRef}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Name</Form.Label>
                <Form.Control type="name" placeholder="Name" ref={nameRef} />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="formGridAddress1"
                style={{ marginTop: "10px" }}
              >
                <Form.Label>Phone Number</Form.Label>
                <Form.Control placeholder="91xxxxxx" ref={phoneRef} />
              </Form.Group>

              <Button
                variant="primary"
                type="submit"
                style={{ marginLeft: "80%", width: "90px" }}
                onClick={submitFormHandler}
              >
                Submit
              </Button>
            </Row>
          </Form>
        </Card>
      </Container>
    </>
  );
};
