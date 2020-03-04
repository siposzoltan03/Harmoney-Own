import React from "react";
import "./App.css";
import SideBar from "../../components/Navbar/navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TopBar from "react-bootstrap/Nav";
import { ModalVisibilityContextProvider } from "../../contexts/ModalVisibilityContext";
import RegistrationModal from "../../components/RegistrationModal/RegistrationModal";

function App() {
  return (
    <ModalVisibilityContextProvider>
      <div className="App">
        <TopBar className="justify-content-center ml-64 navBar-shadow">
          <h1 id="topBar-title">HarMoney</h1>
        </TopBar>
        <SideBar />
        <Container>
          <Row>
            <Col lg={true}></Col>
          </Row>
        </Container>
        <RegistrationModal/>
      </div>
    </ModalVisibilityContextProvider>
  );
}

export default App;
