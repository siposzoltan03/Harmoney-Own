import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Balance from "../Balance/Balance";
import BalanceChart from "../Charts/BalanceChart";
import ExpenditureChart from "../Charts/ExpenditureChart";
import TransactionsList from "../TransactionsList/TransactionsList";
import IncomeChart from "../Charts/IncomeChart";

import "./Dashboard.css";

const colPosition = {span: true, offset: 3};

function Dashboard() {
    return (
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
                    <BalanceChart/>
                    <ExpenditureChart/>
                    <IncomeChart/>
                </Col>
                <Col
                    lg={colPosition}
                    md={colPosition}
                    sm={colPosition}
                    xl={colPosition}
                    xs={colPosition}
                >
                    <TransactionsList/>
                </Col>
            </Row>
        </Container>
    );
}

export default Dashboard;