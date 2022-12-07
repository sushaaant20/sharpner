import React, { Fragment } from "react";
import { Card } from "react-bootstrap";

const Header = () => {
  return (
    <>
      <Card
        bg="secondary"
        style={{
          width: "100%",
          height: "120px",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <h1
          style={{
            fontWeight: "800",
            color: "white",
            marginTop: "30px",
            fontSize: "50px",
            fontFamily: "poppins serif",
          }}
        >
          THE GENERICS
        </h1>
      </Card>
    </>
  );
};

export default Header;
