import React from "react";
import { Button, Card } from "react-bootstrap";
import Header from "../UI/Header";
import Table from "react-bootstrap/Table";

const MainHome = () => {
  return (
    <>
      <Header />
      <Card>
        <Card.Header
          style={{
            fontFamily: "sans",
            borderColor: "white",
            backgroundColor: "white",
          }}
        >
          <h1
            style={{
              justifyContent: "center",
              alignItems: "center",
              alignContent: "center",
              marginLeft: "600px",
            }}
          >
            TOURS
          </h1>
        </Card.Header>
        <Card.Body>
          <Table
            style={{
              fontFamily: "sans-serif",
              marginLeft: "440px",
              width: "35rem",
              backgroundColor: "white",
              display: "flex",
              justifyContent: "space-evenly",
            }}
          >
            <tbody
              style={{
                justifyContent: "space-between",
              }}
            >
              <tr>
                <td>Jul 16</td>
                <td>Detroit</td>
                <td>DTE ENERGY MUSIC THEATRE</td>
                <td>
                  <Button style={{ fontSize: "11px" }}>Buy Tickets</Button>
                </td>
              </tr>
              <tr>
                <td>Jul 19</td>
                <td>New Jersy</td>
                <td>BUDWEISER STAGE</td>
                <td>
                  <Button style={{ fontSize: "11px" }}>Buy Tickets</Button>
                </td>
              </tr>
              <tr>
                <td>Jul 22</td>
                <td>Manhattan</td>
                <td>JIGGY LUBE LIVE</td>
                <td>
                  <Button style={{ fontSize: "11px" }}>Buy Tickets</Button>
                </td>
              </tr>
              <tr>
                <td>Jul 29</td>
                <td>New York</td>
                <td>AK-CHIN PAVILION</td>
                <td>
                  <Button style={{ fontSize: "11px" }}>Buy Tickets</Button>
                </td>
              </tr>
              <tr>
                <td>Aug 02</td>
                <td>Austen</td>
                <td>T-MOBILE ARENA</td>
                <td>
                  <Button style={{ fontSize: "11px" }}>Buy Tickets</Button>
                </td>
              </tr>
              <tr>
                <td>Aug 07</td>
                <td>Miami</td>
                <td>CONCORD PAVILION</td>
                <td>
                  <Button style={{ fontSize: "11px" }}>Buy Tickets</Button>
                </td>
              </tr>
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </>
  );
};

export default MainHome;
