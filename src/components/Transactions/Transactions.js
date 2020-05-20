import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Balance from "../Balance/Balance";
import BalanceChart from "../Charts/BalanceChart";
import ExpenditureChart from "../Charts/ExpenditureChart";
import IncomeChart from "../Charts/IncomeChart";

// import "./Transactions.css";
import TransactionTable from "../TransactionTable/TransactionTable";

const colPosition = {span: true, offset: 3};

function Transactions() {
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
                <Col lg={colPosition}
                     md={colPosition}
                     sm={colPosition}
                     xl={colPosition}
                     xs={colPosition}
                >
                    <TransactionTable/>
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
                </Col>
            </Row>
        </Container>
    );
}

export default Transactions;