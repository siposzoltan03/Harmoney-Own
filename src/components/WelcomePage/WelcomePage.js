import React from 'react';
import {Container} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./WelcomePage.css"
import expenditures from "../../images/expenditures.jpg";
import income from "../../images/incomes.jpg";
import ratio from "../../images/ratio.jpg";
import transactions from "../../images/transactions.jpg";

const colPosition = {span: true, offset: 3};

function WelcomePage(props) {
    return (
        <Container className="feature-container">
            <Row id="welcome-text" className="feature-row" >
                <Col lg={colPosition}
                     md={colPosition}
                     sm={colPosition}
                     xl={colPosition}
                     xs={colPosition}>
                    <i>"We provide the highest quality of financial management"</i>
                </Col>
            </Row>
            <Row className="feature-row">
                <Col className="feature-text" lg={colPosition}
                     md={colPosition}
                     sm={colPosition}
                     xl={colPosition}
                     xs={colPosition}>
                    <div>
                        You can monitor your expenditures with Harmoney. Provide tags for your expenses
                        so you can examine in real time where all your money goes.
                    </div>
                </Col>
                <Col lg={colPosition}
                     md={colPosition}
                     sm={colPosition}
                     xl={colPosition}
                     xs={colPosition}>
                    <img src={expenditures} alt="expenditures" className="feature-image" />
                </Col>
            </Row>
            <Row className="feature-row">
                <Col lg={colPosition}
                     md={colPosition}
                     sm={colPosition}
                     xl={colPosition}
                     xs={colPosition}>
                    <img src={income} alt="income" className="feature-image" />
                </Col>
                <Col className="feature-text" lg={colPosition}
                     md={colPosition}
                     sm={colPosition}
                     xl={colPosition}
                     xs={colPosition}>
                    <div>
                        Harmony gives you the possibility to see what generates you a fortune!
                    </div>
                </Col>
            </Row>
            <Row className="feature-row">
                <Col className="feature-text" lg={colPosition}
                     md={colPosition}
                     sm={colPosition}
                     xl={colPosition}
                     xs={colPosition}>
                    <div>
                        It is possible to see how much your revenue is relative to your spending.
                        This is a great opportunity to keep our financial decisions in the right balance.
                    </div>
                </Col>
                <Col lg={colPosition}
                     md={colPosition}
                     sm={colPosition}
                     xl={colPosition}
                     xs={colPosition}>
                    <img src={ratio} alt="ratio" className="feature-image" />
                </Col>
            </Row>
            <Row className="feature-row">
                <Col lg={colPosition}
                     md={colPosition}
                     sm={colPosition}
                     xl={colPosition}
                     xs={colPosition}>
                    <img src={transactions} alt="transactions" className="feature-image" />
                </Col>
                <Col className="feature-text" lg={colPosition}
                     md={colPosition}
                     sm={colPosition}
                     xl={colPosition}
                     xs={colPosition}>
                    <div>
                        Record your expenses and income. Harmoney notes for you what financial
                        activities you have done recently.
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default WelcomePage;