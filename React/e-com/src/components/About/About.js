import React from "react";
import { Card } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";
import Image from "react-bootstrap/Image";
import Header from "../UI/Header";

const About = () => {
  return (
    <>
      <Header />
      <Card
        variant="light"
        style={{
          textAlign: "center",
          fontFamily: "sans",
          borderColor: "white",
          justifyContent: " ",
        }}
      >
        <CardHeader style={{ fontWeight: "bold" }}>ABOUT PAGE</CardHeader>
        <Card.Body
          style={{
            textAlign: "center",
            fontFamily: "sans",
            borderColor: "white",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Card.Img
            src="https://prasadyash2411.github.io/ecom-website/img/Band%20Members.png"
            style={{
              height: "200px",
              width: "200px",
              marginLeft: "10%",
              paddingTop: "0px",
            }}
          ></Card.Img>
          <Card.Text
            style={{
              borderColor: "white",
              fontFamily: "sans",
              marginLeft: "30px",
              width: "50rem",
              textAlign: "right",
            }}
          >
            Lorem ipsum carrots enhanced rebates. Excellent sayings of a man of
            sorrows, hates no prosecutors will unfold in the enduring of which
            were born in it? Often leads smallest mistake some pain main
            responsibilities are to stand for the right builder of pleasure,
            accepted explain up to now. , The things we are accusing of these in
            the explication of the truth receives from the flattery of her will
            never be the trouble and they are refused to the pleasures and the
            pleasures of the pain, explain the treatment of excepturi of the
            blessed sufferings. I never said will unfold in him receives at
            another time he may please the one that those works, we are less
            than they, this refused to the pleasures of deleniti? Those are!
            Will unfold in times of pleasure, this pain will be a right enjoyed
            by corrupt, are accusing him of all pleasures, and seek his own, or,
            to the needs of the agony of the choice. We hate the fellow. Lorem
            ipsum dolor, sit amet consectetur rebates. The distinction, that
            arise from or to. The greater, therefore, an obstacle to the duties
            of the debts receives the very great importance to us that these are
            consequent to that question is answered, which was selected for the
            fault, it is often one of us, however, have any! Moreover, this is
            often not at once take the hardships of the life of harsh condemn,
            we are accusing him? Him whom something large cisterns.
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default About;
