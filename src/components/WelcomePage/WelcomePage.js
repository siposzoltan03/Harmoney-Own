import React from 'react';
import {Container} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./WelcomePage.css"
import Card from "react-bootstrap/Card";

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
                    <Card>
                        <Card.Header as="h1">Welcome</Card.Header>
                        <Card.Body>
                            <Card.Title>Lórem Ipse</Card.Title>
                            <Card.Text>
                                Lórum ipse mint gyatos lező bulás, elsősorban egy főző fűző. A fordéka után így a
                                csikáriák csingítették a kordozás runcik klitás bá ' pingos zendra tronát. Holóriával
                                moccannak továbbá a téző ceánynak, akik öntő mékfelettel vartozással meretin padékot
                                kutámlnak a keztet rajzsaihoz. Öntő vasárnap (bogadázás 14.30) lefág kodál érségbe.
                                Bályka 20-án 18 parságkor a zugád rátságában gyező csikszeglit bozik érség hámozás
                                rekésze. Bályka artennáján a gyomos böregek macska áranára sugatja az anka folherű
                                szitort. A karos az anka kozáltban lesz kb. 13,30 parságkor. Bályka artennáján a
                                dítérdés szinus bőgő hajogás haságomában bitanja meg a statás csonyos hatos csalan klás
                                tudságát a gyomos gulis musta SE.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default WelcomePage;