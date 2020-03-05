import React from "react";
import "./App.css";
import SideBar from "../../components/Navbar/navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TopBar from "react-bootstrap/Nav";
import {ModalVisibilityContextProvider} from "../../contexts/ModalVisibilityContext";
import RegistrationModal from "../../components/RegistrationModal/RegistrationModal";
import LoginModal from "../../components/LoginModal/LoginModal";
import Balance from "../../components/Balance/Balance";
import Footer from "../../components/Footer/footer";
import {TransactionProvider} from "../../contexts/TransactionContext";
import DashboardChart from "../../components/Charts/DashboardChart";

const colPosition = {span: true, offset: 3};

function App() {
    return (
        <TransactionProvider>
        <ModalVisibilityContextProvider>
            <div className="App">
                <TopBar className="justify-content-center ml-32">
                    <h1 id="topBar-title">Harmoney</h1>
                </TopBar>
                <SideBar/>
                <Container>
                    <Row>
                        <Col
                            lg={colPosition}
                            md={colPosition}
                            sm={colPosition}
                            xl={colPosition}
                            xs={colPosition}
                        >
                            <Balance/>
                        </Col>
                    </Row>
                    <Row>
                        <Col
                            lg={colPosition}
                            md={colPosition}
                            sm={colPosition}
                            xl={colPosition}
                            xs={colPosition}
                        >
                            <DashboardChart/>

                        </Col>
                    </Row>
                </Container>
                <RegistrationModal/>
                <LoginModal/>
                <Footer className="ml-32">
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
                    <br/>
                    Copyright 2020
                </Footer>
            </div>
        </ModalVisibilityContextProvider>
        </TransactionProvider>
    );
}

export default App;
