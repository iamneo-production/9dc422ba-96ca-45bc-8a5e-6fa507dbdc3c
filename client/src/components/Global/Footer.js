import React from "react";
import "../../assests/styling/Footer.css"
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SocialFlow from "./socialIcons";
function Footer() {
    return (
        <>
            <div style={{ heigth: "50px", backgroundColor: "#4094ec", color: "white", textAlign: "center", fontSize: "30px" }}>JOIN THE DIGITAL REVOLUTION WITH NEO BANK</div>

            <div className="footer">

                <Container fluid className="footer-grid">
                    <Row className="footer-grid-row-title">
                        <Col className="col1"><a href="/">EXPLORE</a></Col>
                        <Col className="col2"><a href="/">CALCULATORS</a></Col>
                        <Col className="col3"><a href="/">RATES & CHARGES</a></Col>
                        <Col className="col4"><a href="/">OTHERS</a> </Col>
                    </Row>
                    <Row className="footer-grid-row-empty">
                        <Col className="col1"><a href="/"> Investor Relations</a></Col>
                        <Col className="col2"><a href="/"> Personal Loan EMI Calculator</a></Col>
                        <Col className="col3"><a href="/"> Interest rates</a></Col>
                        <Col className="col4"><a href="/"> Customer Care</a></Col>
                    </Row>
                    <Row className="footer-grid-row">
                        <Col className="col1"><a href="/"> Regulatory Disclosure Section</a></Col>
                        <Col className="col2"><a href="/"> Car Loan EMI Calculator</a></Col>
                        <Col className="col3"><a href="/"> Service Charges and Fees</a></Col>
                        <Col className="col4"><a href="/"> Notice Board</a></Col>
                    </Row>
                    <Row className="footer-grid-row">
                        <Col className="col1"><a href="/"> Safe Banking</a></Col>
                        <Col className="col2"><a href="/"> Two Wheeler Loan EMI Calculator</a></Col>
                        <Col className="col3"><a href="/"> </a></Col>
                        <Col className="col4"><a href="/"> Complaints</a></Col>
                    </Row>
                    <Row className="footer-grid-row">
                        <Col className="col1"><a href="/"> RBI Kehta Hai</a></Col>
                        <Col className="col2"><a href="/"> Home Loan EMI Calculator</a></Col>
                        <Col className="col3"><a href="/"><strong>INITIATIVES</strong> </a></Col>
                        <Col className="col4"><a href="/"> About Us</a></Col>
                    </Row>
                    <Row className="footer-grid-row">
                        <Col className="col1"><a href="/"> RBI: Beware of Fictitious Offers </a></Col>
                        <Col className="col2"><a href="/"> Recurring Deposit EMI Calculator</a></Col>
                        <Col className="col3"><a href="/"> </a></Col>
                        <Col className="col4"><a href="/"> Account Activation</a></Col>
                    </Row>
                    <Row className="footer-grid-row">
                        <Col className="col1"><a href="/"> Money Transfer To India</a></Col>
                        <Col className="col2"><a href="/"> Fixed Deposit EMI Calculator</a></Col>
                        <Col className="col3"><a href="/"> Debt Service</a></Col>
                        <Col className="col4"><a href="/"> FAQs</a></Col>
                    </Row>
                    <Row className="footer-grid-row">
                        <Col className="col1"><a href="/"> Internet Banking</a></Col>
                        <Col className="col2"><a href="/"> More Calculators</a></Col>
                        <Col className="col3"><a href="/"> Blogs</a></Col>
                        <Col className="col4"><a href="/"><strong>GET SOCIAL</strong> </a></Col>
                    </Row>
                    <Row className="footer-grid-row">
                        <Col className="col1"><a href="/"> Mobile Banking</a></Col>
                        <Col className="col2"><a href="/"> </a></Col>
                        <Col className="col3"><a href="/"> Fraud Prevention</a></Col>
                        <Col className="col4"><a href="/">

                            <SocialFlow />
                        </a></Col>
                    </Row>
                </Container>
                <div style={{ height: "50px" }}></div>
            </div>

        </>

    );
}

export default Footer;
