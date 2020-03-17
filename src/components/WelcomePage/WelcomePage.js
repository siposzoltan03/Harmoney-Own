import React from 'react';
import {Container} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./WelcomePage.css"

const colPosition = {span: true, offset: 3};

function WelcomePage(props) {
    return (
        <Container>
            <Row>
                <Col lg={colPosition}
                     md={colPosition}
                     sm={colPosition}
                     xl={colPosition}
                     xs={colPosition}>
                    Welcome!
                </Col>
            </Row>
        </Container>
    );
}

export default WelcomePage;