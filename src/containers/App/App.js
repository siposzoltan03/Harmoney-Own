import React from "react";
import "./App.css";
import SideBar from "../../components/Navbar/navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TopBar from "react-bootstrap/Nav";
import Balance from "../../components/Balance/Balance";

function App() {
    return (
        <div className="App">
            <TopBar className="justify-content-center ml-32 navBar-shadow">
                <h1 id="topBar-title">Harmoney</h1>
            </TopBar>
            <SideBar id="sideBar"/>
            <Container >
                <Row>
                    <Col
                        lg={{ span: true, offset: 3}}
                         md={{ span: true, offset: 3}}
                         sm={{ span: true, offset: 3}}
                         xl={{ span: true, offset: 3}}
                         xs={{ span: true, offset: 3}}
                    >
                        <Balance/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
