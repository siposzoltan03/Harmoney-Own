import React from "react";
import "./App.css";
import SideBar from "../../components/Navbar/navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TopBar from "react-bootstrap/Nav";
import {TransactionProvider} from "../../contexts/TransactionContext";

function App() {
    return (
        <TransactionProvider>
            <div className="App">
                <TopBar className="justify-content-center ml-64 navBar-shadow">
                    <h1 id="topBar-title">HarMoney</h1>
                </TopBar>
                <SideBar/>
                <Container>
                    <Row>
                        <Col lg={true}>
                        </Col>
                    </Row>
                </Container>
            </div>
        </TransactionProvider>
    );
}

export default App;
