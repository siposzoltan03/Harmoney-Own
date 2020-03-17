import React from "react";
import "./App.css";
import SideBar from "../../components/Navbar/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TopBar from "react-bootstrap/Nav";
import {ModalVisibilityContextProvider} from "../../contexts/ModalVisibilityContext";
import ModalContainer from "../ModalContainer/ModalContainer";
import Balance from "../../components/Balance/Balance";
import TransactionsList from "../../components/TransactionsList/TransactionsList";
import Footer from "../../components/Footer/Footer";
import {TransactionProvider} from "../../contexts/TransactionContext";
import DashboardChart from "../../components/Charts/DashboardChart";
import { UserProvider } from "../../contexts/UserContext";
import User from "../../components/User/User";

const colPosition = {span: true, offset: 3};

function App() {
    return (
        <TransactionProvider>
        <UserProvider>
        <ModalVisibilityContextProvider>
            <div className="App">
                <TopBar className="justify-content-center ml-32">
                    <h1 id="topBar-title">Harmoney</h1>
                    <User/>
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
                        <Col
                            lg={colPosition}
                            md={colPosition}
                            sm={colPosition}
                            xl={colPosition}
                            xs={colPosition}
                        >
                            <TransactionsList />
                        </Col>
                    </Row>
                </Container>
                <ModalContainer/>
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
        </UserProvider>
        </TransactionProvider>
    );
}

export default App;
