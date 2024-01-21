import React, { useEffect, useState } from 'react'
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai"
import { HiOutlineArrowRight } from 'react-icons/hi'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button, Container } from "react-bootstrap";
import { GoGraph } from "react-icons/go"
import { VscGraphLine } from "react-icons/vsc"
import { BsArrowRightSquareFill } from "react-icons/bs"
import BarGraph from "./BarGraph";
import { Link, useNavigate } from "react-router-dom";
import "../../assests/styling/Dashboard.css"
// import Transactions from "../../assests/data/transactions";
import { useDataContext } from '../../hooks/useDataContext';
import { usePaymentStep } from '../../hooks/usePaymentStep';
import PIECHART from './PieChart';




const DashboardContainer = ({ dashboardEnable, setnotOn, setPayeeAccountNo }) => {
    //hooks
    const { userData, accountData, tData, income, expense } = useDataContext()
    const { setPaymentStep } = usePaymentStep()
    let navigate = useNavigate();

    //states
    const [graphDuration, setgraphDuration] = useState("Weekly")
    const [graphType, setgraphType] = useState("bar")
    const [piedata, setPiedata] = useState([
        { title: "Income", value: income, color: "#4708b4" },
        { title: "Expense", value: expense, color: "#f97405" }
    ])

    useEffect(() => {
        setPiedata([
            { title: "Income", value: income, color: "#4708b4" },
            { title: "Expense", value: expense, color: "#f97405" }
        ])
    }, [income, expense])
    const isCreditedfrom = (item) => {
        if (item.isCredited === true) {
            return ("From: ")
        } else {
            return ("To: ")
        }
    }


    function updatetType(item) {
        if (item.isCredited === true) {
            return ("green")
        } else {
            return ("red");
        }
    }
    function changeGraphDuration(e) {
        setgraphDuration(e.target.value);
    }

    function changeGraphTypetoBar(e) {
        setgraphType('bar');
    }

    function changeGraphTypetoLine(e) {
        setgraphType('scatter');
    }

    function navigateToPaymentIfPayeeExist() {
        setPaymentStep(2);
        navigate("/makepayment");
    }




    return (
        <Container style={{ opacity: dashboardEnable.opacity, zIndex: "2", position: "relative" }} fluid onClick={(e) => setnotOn({ display: "none" })}>
            <Row className="user-details-row" >
                <Col md={3} className="title-col-dash">
                    <div className="account-number">
                        {`Account No. ` + accountData?.accountNo

                        }
                    </div>
                </Col>
                <Col md={3} className="title-col-dash">
                    <div className="account-holder">
                        Hello, {userData?.firstname + " " + userData?.lastname}
                    </div>
                </Col>
                <Col md={3} className="title-col-dash">
                    <div className="mob-number">
                        Mobile No. {userData?.phoneNo}
                    </div>

                </Col>
                <Col md={3} className="title-col-dash">
                    <Link to={"/editAccountDetails"} style={{ fontSize: "16px", fontWeight: "bold" }} >
                        Edit Account Detail
                    </Link>
                </Col>
            </Row>
            <Row style={{ height: "1400px" }}>
                <Col md={8} style={{ zIndex: "1" }}>
                    <div className="transaction-display">
                        <div style={{ display: "flex", marginTop: ".5%", height: "12%" }}>
                            <h5 style={{ marginLeft: "2%", fontWeight: "bold" }}>
                                Latest Transactions
                            </h5>
                            <div style={{ marginLeft: "auto", marginRight: "2%" }}>
                                <BsArrowRightSquareFill color="#2c8894" size={"30px"} />
                            </div>
                        </div>
                        <div className="transaction-content">
                            <div style={{ display: "flex", margin: "auto", marginBottom: "2%" }}>
                                <div style={{ display: "flex", margin: "auto", textAlign: "center", width: "20%" }}>
                                    <div style={{ width: "40%" }}>
                                        Time
                                    </div>
                                    <div style={{ width: "60%" }}>
                                        Date
                                    </div>
                                </div>
                                <div style={{ width: "20%", textAlign: 'center' }}>
                                    Transactions ID
                                </div>
                                <div style={{ width: "40%", display: "flex", textAlign: "center" }}>
                                    <div style={{ width: "20%" }}>
                                        Cre/Deb
                                    </div>
                                    <div style={{ width: "50%" }}>
                                        From(Account Num.)
                                    </div>
                                    <div style={{ width: "30%" }}>
                                        Amount(Rs)
                                    </div>
                                </div>
                                <div style={{ width: "20%", textAlign: "center" }}>
                                    Remark
                                </div>
                            </div>
                            {tData.slice(0, 8).map((item, index) => (
                                <div style={{ display: "flex", margin: "auto" }} key={index}>
                                    <div style={{ display: "flex", textAlign: "center", width: "20%" }}>
                                        <div style={{ width: "40%" }}>
                                            {item.time}
                                        </div>
                                        <div style={{ width: "60%" }}>
                                            {item.date}
                                        </div>
                                    </div>
                                    <div style={{ width: "20%", textAlign: 'center' }}>
                                        {item.transID}
                                    </div>
                                    <div style={{ width: "40%", display: "flex", textAlign: "center" }}>
                                        <div style={{ width: "20%" }}>
                                            {isCreditedfrom(item)}
                                        </div>
                                        <div style={{ width: "50%" }}>
                                            {item.from}
                                        </div>
                                        <div style={{ width: "33%", color: updatetType(item) }}>
                                            {item.amount}
                                        </div>
                                    </div>
                                    <div style={{ width: "20%", textAlign: "center" }}>
                                        {item.remark}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="show-more-transactions">
                            <Button type="submit" style={{ width: "150px", display: "flex", alignItems: "center", color: 'black', fontWeight: 'bold' }}>
                                <div style={{ width: "70%" }}>
                                    See More
                                </div>
                                <HiOutlineArrowRight style={{ marginLeft: "auto", marginRight: "2%" }} />
                            </Button>
                        </div>
                    </div>

                    <div className="financial-chart">
                        <div style={{ display: "flex", marginTop: ".5%", height: "7%" }}>
                            <h5 style={{ marginLeft: "2%", fontWeight: "bold" }}>
                                Financial Chart
                            </h5>
                            <select className="financial-chart-period" onChange={e => changeGraphDuration(e)}>
                                <option value={"Weekly"} >Weekly</option>
                                <option value={"Monthly"}>Monthly</option>
                                <option value={"Annualy"} defaultValue>Annualy</option>
                            </select>
                            <div className="graph-icons" >
                                <div style={{ width: "100%", height: "45%", border: "1px solid black", marginTop: "0px" }} onClick={e => changeGraphTypetoBar(e)}>
                                    <GoGraph size={"100%"} />
                                </div>
                                <div style={{ height: "10%" }}>

                                </div>
                                <div style={{ width: "100%", height: "45%", border: "1px solid black", alignItems: "center" }} onClick={e => changeGraphTypetoLine(e)}>
                                    <VscGraphLine size={"100%"} />
                                </div>
                            </div>
                        </div>
                        <div className="transaction-content">
                            <BarGraph
                                duration={graphDuration}
                                type={graphType}
                                Transanctions={tData}
                            />
                        </div>
                        <div className="show-more-transactions">
                            <Button type="submit" style={{ width: "150px", display: "flex", alignItems: "center" }}>
                                <div style={{ width: "70%" }}>
                                    See More
                                </div>
                                <HiOutlineArrowRight style={{ marginLeft: "auto", marginRight: "2%" }} />
                            </Button>
                        </div>
                    </div>

                    <div className="cashflow">
                        <div style={{ display: "flex", marginTop: ".5%", height: "10%" }}>
                            <h5 style={{ marginLeft: "2%", fontWeight: "bold" }}>
                                Cashflow
                            </h5>
                            <div style={{ marginLeft: "auto", marginRight: "2%" }}>
                                <BsArrowRightSquareFill color="#2c8894" className="cashflow-more" size={"30px"} />
                            </div>
                        </div>
                        <div style={{ height: "90%", display: "flex" }}>

                            <div style={{ height: "100%", width: "100%" }}>
                                <div className="stat-and-pie-container" style={{ marginLeft: "1px", backgroundColor: "#fffcec", display: "flex", height: "95%" }}>
                                    <div style={{ width: "70%" }}>
                                        <PIECHART
                                            piedata={piedata}
                                        />
                                    </div>
                                    <div className="stat-display" style={{ display: "flex", flexDirection: "column", alignItems: "center", marginLeft: "auto", marginRight: "5px", width: "auto" }}>
                                        <div style={{ height: "auto", border: "2px solid #4708b4", borderRadius: "10px", width: "100%", margin: "auto", color: "#4708b4", display: "flex" }}>
                                            <div style={{ display: "flex", alignItems: "center" }}>
                                                <AiOutlineArrowDown className="aerrow" color="#4708b4" size={40} />
                                            </div>
                                            <div style={{ textAlign: "center", width: "auto", margin: "auto" }}>
                                                <div style={{ fontWeight: "bolder", fontSize: "auto" }}>
                                                    {"Rs." + piedata[0].value}
                                                </div>
                                                <div>
                                                    <div>
                                                        {piedata[0].title}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div style={{ border: "2px solid #4708b4", borderRadius: "10px", width: "100%", margin: "auto", color: "#f97405", display: "flex", marginTop: "5%" }}>
                                            <div style={{ display: "flex", alignItems: "center" }}>
                                                <AiOutlineArrowUp className="aerrow" color="#f97405" size={40} />
                                            </div>
                                            <div style={{ textAlign: "center", width: "100%", margin: "auto" }}>
                                                <div style={{ fontWeight: "bolder" }}>
                                                    {"Rs." + piedata[1].value}
                                                </div>
                                                <div>
                                                    <div>
                                                        {piedata[1].title}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div style={{ width: "30%", display: 'flex', flexDirection: "column", alignItems: "center", justifyContent: "center", fontSize: "auto", textAlign: "center", height: "auto" }}>
                                <div className="expense-over-time" style={{ fontSize: "20px", fontWeight: "bolder", marginTop: "auto" }}>
                                    Daily
                                    <div>
                                        {"Rs." + (piedata[1].value / 30).toFixed(2)}
                                    </div>
                                </div >
                                <div className="expense-over-time" style={{ fontSize: "20px", fontWeight: "bolder", marginTop: "auto" }}>
                                    Weekly
                                    <div>
                                        {"Rs." + piedata[1].value / 4}
                                    </div>
                                </div>
                                <div className="expense-over-time" style={{ fontSize: "20px", fontWeight: "bolder", marginTop: "auto" }}>
                                    Monthly
                                    <div>
                                        {"Rs." + piedata[1].value}
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </Col>
                <Col md={4} style={{ zIndex: "1" }}>
                    <div style={{ height: "2%" }}></div>
                    <Link to={"/makepayment"} style={{ textDecoration: "none" }}>
                        <Button className="sidebar-menu-item" style={{ backgroundColor: "rgb(16,28,92)", display: "flex", alignItems: "center", width: '80%', margin: "auto", textAlign: "center" }}>
                            <div style={{ width: "90%" }}>
                                Transfer Money
                            </div>
                        </Button>
                    </Link>
                    <div style={{ height: "5%" }}></div>
                    <div className="accBalance">
                        <div>
                            Account Balance
                        </div>
                        <div>
                            {"Rs. " + accountData?.closingBalance}
                        </div>
                    </div>
                    <div style={{ height: "5%" }}></div>
                    <div className="investment-chart">
                        <div style={{ border: '1px solid black', backgroundColor: '#f0f4f4', borderRadius: "8px", fontSize: "20px" }}>
                            Payee List
                        </div>
                        <div>
                            <ol style={{ marginLeft: "15%", textAlign: "left" }}>
                                {
                                    accountData?.payees.map((item, index) => (
                                        <li key={index} onClick={() => {
                                            setPayeeAccountNo(item.accountNo)
                                            navigateToPaymentIfPayeeExist()
                                        }}>
                                            {item.firstname + " " + item.lastname}
                                        </li>
                                    ))
                                }
                            </ol>
                        </div>
                    </div>
                    <div style={{ height: "5%" }}></div>
                    <div className="investment-chart">
                        <div style={{ border: '1px solid black', backgroundColor: '#f0f4f4', borderRadius: "8px", fontSize: "22px" }}>
                            IMPORTANT ANNOUNCEMENTS
                        </div>
                        <div style={{ textAlign: "centre", fontWeight: "lighter" }}>
                            Lorem ipsum dolor sit amet. Qui suscipit consequuntur
                            <br />
                            <br />
                            Aaut sequi voluptatem id sint internos est facilis similique sit repellat fugitm
                            <br />
                            <br />
                            eos exercitationem repudiandae sit cumque molestias? Ut voluptatibus
                            <br />
                            <br />
                            sugduf vcyec eygfe8 gegyfg e gft7e8 fegfegfe
                        </div>
                    </div>
                    <div style={{ height: "5%" }}></div>
                    <div id="extra-feature" className="investment-chart">
                        <h2><a href="/">Report Fraud</a></h2>
                        <h2><a href="/">Customer Care</a></h2>
                        <h2><a href="/">FAQs</a></h2>
                        <h2><a href="##">Blogs</a></h2>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default DashboardContainer
