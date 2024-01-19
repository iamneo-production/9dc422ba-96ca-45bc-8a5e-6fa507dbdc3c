import React from "react";
import "../../assests/styling/why.css"
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
function Services() {
    return (
        <div data-testid="service-test">
            <div style={{ height: "100px" }}></div>
            <div >

                <h2 className="services-head">
                    Our Services
                </h2>
                <div className="services">

                    <Container fluid className="grid">
                        <Row className="grid-row">
                            <Col className="service-col1"><a href="/"> FD</a></Col>
                            <Col className="service-col2"><a href="/"> INSURANCE</a></Col>
                            <Col className="service-col3"><a href="/"> RTGS</a></Col>
                        </Row>
                        <Row className="grid-row">
                            <Col className="service-col1"><a href="/"> GOLD</a></Col>
                            <Col className="service-col2"><a href="/"> RECHARGE</a></Col>
                            <Col className="service-col3"><a href="/"> NEFT</a></Col>
                        </Row>
                        <Row className="grid-row">
                            <Col className="service-col1"><a href="/"> LOANS</a></Col>
                            <Col className="service-col2"><a href="/"> PAYMENTS</a></Col>
                            <Col className="service-col3"><a href="/"> SIP</a></Col>
                        </Row>
                    </Container>
                </div>
                <div style={{ height: "50px" }}></div>
            </div>
        </div>
    )

}
export default Services;