import React from "react";
import "./App.css";
import SideBar from "../../components/Navbar/navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TopBar from "react-bootstrap/Nav";
import Balance from "../../components/Balance/Balance";
import Footer from "../../components/Footer/footer";

const colPosition = { span: true, offset: 3 };

function App() {
  return (
    <div className="App">
      <TopBar className="justify-content-center ml-32">
        <h1 id="topBar-title">Harmoney</h1>
      </TopBar>
      <SideBar />
      <Container>
        <Row>
          <Col
            lg={colPosition}
            md={colPosition}
            sm={colPosition}
            xl={colPosition}
            xs={colPosition}
          >
            <Balance />
          </Col>
        </Row>
      </Container>
      <Footer>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://icons8.com/icons/set/finance-document---v2"
        >
          Finance Document icon
        </a>{" "}
        icon by{" "}
        <a target="_blank" rel="noopener noreferrer" href="https://icons8.com">
          Icons8
        </a>
        <br />
        Copyright 2020
      </Footer>
    </div>
  );
}

export default App;
