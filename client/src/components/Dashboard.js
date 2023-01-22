import React, { useState, useEffect } from "react";
import { Button, Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from "./Footer";
import NavBar from "./header";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai"
import { HiOutlineArrowRight } from 'react-icons/hi'
import "../assests/styling/Dashboard.css"
import { GoGraph } from "react-icons/go"
import { VscGraphLine } from "react-icons/vsc"
import { BsArrowRightSquareFill, BsCashCoin } from "react-icons/bs"
import { PieChart } from "react-minimal-pie-chart";
import Transactions from "./transactions";
import Payment from "./payment";
import BarGraph from "./BarGraph";
import axios from 'axios';
import NotiComp from "./notification_component";
const Dashboard = ({ notOn, setnotOn, data }) => {

    const [income, setIncome] = useState(0);
    const [expense, setexpense] = useState(0);
    let piedata =
        [
            { title: "Income", value: income, color: "#4708b4" },
            { title: "Expense", value: expense, color: "#f97405" }
        ]

    const isCreditedfrom = (item) => {
        if (item.isCredited === true) {
            return ("From: ")
        } else {
            return ("To: ")
        }
    }
    const [accBalance, setaccBalance] = useState(0);
    function updatetType(item) {
        if (item.isCredited === true) {
            return ("green")
        } else {
            return ("red");
        }
    }
    const [graphDuration, setgraphDuration] = useState("Weekly")
    function changeGraphDuration(e) {
        setgraphDuration(e.target.value);
    }
    useEffect(() => {
        let amt = 0;
        let inc = 0;
        let exp = 0;
        for (let i = 0; i < Transactions.length; i++) {
            if (Transactions[i].isCredited === true) {
                let val = parseInt(Transactions[i].amount);
                inc += val;
                amt += val;
            } else {
                let val = parseInt(Transactions[i].amount)
                exp += val;
                amt -= val;
            }
        }
        setIncome(inc);
        setexpense(exp);
        setaccBalance(amt);
    }, []);
    function paymentMode(e) {
        setpayment(1);
    }
    const [userDataFetch, setuserDataFetch] = useState({});
    const [accountData, setaccountData] = useState({});
    const stateData = data;
    // console.log(stateData);
    useEffect(() => {
        if (stateData[0]) {
            axios({
                method: "get",
                url: "http://localhost:8081/bankingapp/api/account/getaccountdetailsbyusername/bt20101019",
            }).then(e => { setaccountData(e.data.accountDetails) })

            axios({
                method: "get",
                url: "http://localhost:8081/bankingapp/api/user/getuserbyusername/bt20101019",
            }).then(e => setuserDataFetch(e.data[0]))
        }
    }, [stateData[0], stateData[2]]);
    const DisplayTransArray = Transactions.slice(Transactions.length - 7, Transactions.length);
    const [payment, setpayment] = useState(0);
    let count = 1;
    console.log(userDataFetch, accountData)
    const [graphType, setgraphType] = useState("bar")
    function changeGraphTypetoBar(e) {
        setgraphType('bar');
    }

    function changeGraphTypetoLine(e) {
        setgraphType('scatter');
    }
    if (payment === 0) {

        return (
            <>
                <NavBar
                    setnotOn={setnotOn}
                />
                <NotiComp
                    notOn={notOn}
                />
                <Container fluid onClick={(e)=>setnotOn({display:"none"})}>
                    <Row className="user-details-row" >
                        <Col md={3} className="title-col-dash">
                            <div className="account-number">
                                Account No. 69426942728720
                            </div>
                        </Col>
                        <Col md={3} className="title-col-dash">
                            <div className="account-holder">
                                Hello, Anuj Awasthi
                            </div>
                        </Col>
                        <Col md={3} className="title-col-dash">
                            <div className="mob-number">
                                Mobile No. 8591941194
                            </div>

                        </Col>
                        <Col md={3} className="title-col-dash">
                            <a href={"/editAccountDetails"} style={{ fontSize: "16px", fontWeight: "bold" }} >
                                Edit Account Detail
                            </a>
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
                                        <div style={{ display: "flex", margin: "auto", textAlign: "center", width: "25%" }}>
                                            <div style={{ width: "40%" }}>
                                                Time
                                            </div>
                                            <div style={{ width: "60%" }}>
                                                Date
                                            </div>
                                        </div>
                                        <div style={{ width: "25%" }}>
                                            Transactions ID
                                        </div>
                                        <div style={{ width: "30%", display: "flex", textAlign: "left" }}>
                                            <div style={{ width: "33%" }}>
                                                Cre/Deb
                                            </div>
                                            <div style={{ width: "33%" }}>
                                                From
                                            </div>
                                            <div style={{ width: "33%" }}>
                                                Amount
                                            </div>
                                        </div>
                                        <div style={{ width: "20%", textAlign: "center" }}>
                                            Remark
                                        </div>
                                    </div>
                                    {DisplayTransArray.map(item => (
                                        <div style={{ display: "flex", margin: "auto" }} key={count++}>
                                            <div style={{ display: "flex", margin: "auto", textAlign: "center", width: "25%" }}>
                                                <div style={{ width: "40%" }}>
                                                    {item.time}
                                                </div>
                                                <div style={{ width: "60%" }}>
                                                    {item.date}
                                                </div>
                                            </div>
                                            <div style={{ width: "25%" }}>
                                                {item.transID}
                                            </div>
                                            <div style={{ width: "30%", display: "flex", textAlign: "left" }}>
                                                <div style={{ width: "33%" }}>
                                                    {isCreditedfrom(item)}
                                                </div>
                                                <div style={{ width: "33%" }}>
                                                    {item.from}
                                                </div>
                                                <div style={{ width: "33%", color: updatetType(item) }}>
                                                    {"Rs. " + item.amount}
                                                </div>
                                            </div>
                                            <div style={{ width: "20%", textAlign: "center" }}>
                                                {item.remark}
                                            </div>
                                        </div>
                                    ))}
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
                                                <PieChart className="piechart" data={piedata} animate={"True"} radius={50} startAngle={270} center={[50, 50]} label={(piedata) => piedata.dataEntry.title} labelStyle={{ fontSize: "9px", backgroundColor: "white" }}>
                                                </PieChart>
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
                            <Button className="sidebar-menu-item" onClick={e => paymentMode(e)} type="button" style={{ backgroundColor: "rgb(16,28,92)", display: "flex", alignItems: "center", width: '80%', margin: "auto", textAlign: "center" }}>
                                <div style={{ width: "90%" }}>
                                    Transfer Money
                                </div>
                                <BsCashCoin />
                            </Button>
                            <div style={{ height: "5%" }}></div>
                            <div className="accBalance">
                                <div>
                                    Account Balance
                                </div>
                                <div>
                                    {"Rs. " + accBalance}
                                </div>
                            </div>
                            <div style={{ height: "5%" }}></div>
                            <div className="investment-chart">
                                <div style={{ border: '1px solid black', backgroundColor: '#f0f4f4', borderRadius: "8px", fontSize: "20px" }}>
                                    INVESTMENT
                                </div>
                                <div>
                                    <ol style={{ marginLeft: "15%", textAlign: "left" }}>
                                        <li>Lorem Ipsum</li>
                                        <li>Donor vhi</li>
                                        <li>Salam Ewaalekum</li>
                                        <li>Qwerty Qwerty</li>
                                        <li>Holopinsss</li>
                                        <li>Mississippi</li>
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
                <div style={{ height: "80px" }}>
                </div>
                <Footer />
            </>
        )
    } else {
        return (
            <>
                <Payment
                    backtodash={setpayment}
                    notOn={notOn}
                    setnotOn={setnotOn}
                />
            </>
        )
    }
}
export default Dashboard;