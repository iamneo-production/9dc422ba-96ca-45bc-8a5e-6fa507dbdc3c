import React from "react";
import "../assests/styling/services.css"
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NavBar from "../components/Global/header";
import Footer from "../components/Global/Footer";
import ServiceCard from "../components/service/service-card";
import NotiComp from "../components/Global/notification_component";
function MainServices({ notOn, setnotOn }) {
    return (
        <div>
            <NavBar setnotOn={setnotOn} />
            <NotiComp
                notOn={notOn}
            />
            <div onClick={() => setnotOn({ display: "none" })}>
                <div style={{ height: "100px" }}></div>
                <div>
                    <h2 className="services-heading">
                        RBH BANK SERVICES
                    </h2>
                    <div className="Services">

                        <Container fluid className="Service-Grid">
                            <Row className="grid-row">
                                <Col className="service-col1 service-card">
                                    <ServiceCard
                                        title="FD"
                                        desc="Lorem ipsum dolor sit amet. Qui suscipit consequuntur aut sequi voluptatem id sint internos est facilis similique sit repellat fugitm eos exercitationem repudiandae sit cumque molestias? Ut voluptatibus"
                                        link="#"
                                    />
                                </Col>
                                <Col className="service-col2 service-card">
                                    <ServiceCard
                                        title="INSURANCE"
                                        desc="Lorem ipsum dolor sit amet. Qui suscipit consequuntur aut sequi voluptatem id sint internos est facilis similique sit repellat fugitm eos exercitationem repudiandae sit cumque molestias? Ut voluptatibus"
                                        link="#"
                                    />
                                </Col>
                                <Col className="service-col3">
                                    <ServiceCard
                                        title="RTGS"
                                        desc="Lorem ipsum dolor sit amet. Qui suscipit consequuntur aut sequi voluptatem id sint internos est facilis similique sit repellat fugitm eos exercitationem repudiandae sit cumque molestias? Ut voluptatibus"
                                        link="#"
                                    />
                                </Col>
                            </Row>
                            <Row className="grid-row">
                                <Col className="service-col1">
                                    <ServiceCard
                                        title="GOLD"
                                        desc="Lorem ipsum dolor sit amet. Qui suscipit consequuntur aut sequi voluptatem id sint internos est facilis similique sit repellat fugitm eos exercitationem repudiandae sit cumque molestias? Ut voluptatibus"
                                        link="#"
                                    />
                                </Col>
                                <Col className="service-col2">
                                    <ServiceCard
                                        title="RECHARGE"
                                        desc="Lorem ipsum dolor sit amet. Qui suscipit consequuntur aut sequi voluptatem id sint internos est facilis similique sit repellat fugitm eos exercitationem repudiandae sit cumque molestias? Ut voluptatibus"
                                        link="#"
                                    />
                                </Col>
                                <Col className="service-col3">
                                    <ServiceCard
                                        title="NEFT"
                                        desc="Lorem ipsum dolor sit amet. Qui suscipit consequuntur aut sequi voluptatem id sint internos est facilis similique sit repellat fugitm eos exercitationem repudiandae sit cumque molestias? Ut voluptatibus"
                                        link="#"
                                    />
                                </Col>
                            </Row>
                            <Row className="grid-row">
                                <Col className="service-col1">
                                    <ServiceCard
                                        title="LOANS"
                                        desc="Lorem ipsum dolor sit amet. Qui suscipit consequuntur aut sequi voluptatem id sint internos est facilis similique sit repellat fugitm eos exercitationem repudiandae sit cumque molestias? Ut voluptatibus"
                                        link="#"
                                    />
                                </Col>
                                <Col className="service-col2">
                                    <ServiceCard
                                        title="PAYMENTS"
                                        desc="Lorem ipsum dolor sit amet. Qui suscipit consequuntur aut sequi voluptatem id sint internos est facilis similique sit repellat fugitm eos exercitationem repudiandae sit cumque molestias? Ut voluptatibus"
                                        link="#"
                                    />
                                </Col>
                                <Col className="service-col3">
                                    <ServiceCard
                                        title="SIP"
                                        desc="Lorem ipsum dolor sit amet. Qui suscipit consequuntur aut sequi voluptatem id sint internos est facilis similique sit repellat fugitm eos exercitationem repudiandae sit cumque molestias? Ut voluptatibus"
                                        link="#"
                                    />
                                </Col>
                            </Row>
                        </Container>
                    </div>
                    <div style={{ height: "50px" }}></div>
                </div>
            </div>
            <Footer />
        </div>
    )

}
export default MainServices;