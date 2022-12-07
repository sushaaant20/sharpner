import React from "react";
import Header from "../UI/Header";
import Button from "react-bootstrap/Button";
import { Card, Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Home.css";

const Home = (props) => {
  const productsArr = [
    {
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },

    {
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },

    {
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },

    {
      title: "Blue Color",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];

  return (
    <>
      <Header />
      <section
        style={{
          textAlign: "center",
          fontFamily: "Alegreya",
          fontWeight: "500",
        }}
      >
        <h1>MUSIC</h1>
      </section>
      <div
        className="d-flex justify-content-center"
        style={{
          marginLeft: "200px",
          textAlign: "center",
        }}
      >
        <Row className="justify-content-md-center" md={2}>
          {productsArr.map((variant) => (
            <Col>
              <Card
                border="white"
                style={{
                  width: "13rem",
                  background: "white",
                  fontFamily: "Alegreya",
                  fontWeight: "500",
                  padding: "10px",
                }}
                className="mb-2 bg"
              >
                <Card.Header>{variant.title}</Card.Header>
                {/* <Card.Body> */}
                <Card.Img variant="top" src={variant.imageUrl} />
                <Card.Footer>
                  ${variant.price}{" "}
                  <Button
                    variant="outline-secondary"
                    style={{ marginLeft: "20px" }}
                  >
                    Add
                  </Button>
                </Card.Footer>
                {/* </Card.Body> */}
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};

export default Home;
