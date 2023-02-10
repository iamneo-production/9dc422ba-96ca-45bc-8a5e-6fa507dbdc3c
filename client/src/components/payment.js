import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { AiFillCaretRight, AiFillCaretLeft } from "react-icons/ai"
import NavBar from "./header";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import NotiComp from "./notification_component";
import { useAuthContext } from "../hooks/useAuthContext";
import { Loader } from "./loader";
const Payment = ({ notOn, setnotOn, loader, setloader }) => {
    const { username } = useAuthContext();
    const [userAccNumber, setuserAccNumber] = useState("");
    useEffect(() => {
        async function getAccNumber() {
            await axios.get("https://neobank-backend.vercel.app/bankingapp/api/account/getaccountdetailsbyusername/" + username)
                .then((res) => {
                    // console.log(res.data.accountDetails);
                    if (!res.data.accountDetails) {
                        getAccNumber();
                    }
                    setuserAccNumber(res.data.accountDetails.accountNo)
                })
                .catch((err) => {
                    console.log(err);
                })
        }
        getAccNumber();
    }, [])
    // console.log(userAccNumber);
    const [paymentStep, setpaymentStep] = useState(1);
    const [accountNumber, setaccountNumber] = useState("");
    const [iFSCcode, setiFSCcode] = useState("");
    const [senderName, setsenderName] = useState("");
    const [errorStyle, seterrorStyle] = useState('none');
    const [accountmaxlim, setaccountmaxlim] = useState(0);
    const [amount, setamount] = useState("");
    const [tpin, settpin] = useState("")
    const [remark, setremark] = useState("")
    const updateRemark = (e) => {
        setremark(e.target.value)
    }
    const updatetpin = (e) => {
        settpin(e.target.value)
    }
    async function addpayee(e) {
        e.preventDefault()
        const [firstname, lastname] = senderName.split(" ");
        await axios({
            method: "post",
            url: "https://neobank2.vercel.app/bankingapp/api/account/addpayee",
            data: {
                accountNo: userAccNumber,
                payee: {
                    firstname: firstname,
                    lastname: lastname,
                    accountNo: accountNumber
                }
            }
        })
            .then(e => console.log(e.status))
            .then(() => setpaymentStep(paymentStep + 1)).catch((err) => console.log(err))
    }
    function prevStepPayemnt(e) {
        setpaymentStep(paymentStep - 1);
    }

    function confirmAccountNumber(e) {
        if (e.target.value.length === accountNumber.length & e.target.value !== accountNumber) {
            seterrorStyle("block")
        } else {
            seterrorStyle('none');
        }
    }
    function updateIfsc(e) {
        const ifsc = e.target.value.toUpperCase();
        setiFSCcode(ifsc);
    }
    function updatename(e) {
        setsenderName(e.target.value.toUpperCase())
    }
    const handleAccountChange = event => {
        var result = event.target.value.replace(/\D/g, '');
        setaccountNumber(result);
        setaccountmaxlim(result.length)
    }
    const handleAmountChange = event => {
        var result = event.target.value.replace(/\D/g, '');
        setamount(Number(result));

    }
    const [data, setdata] = useState({})
    const SetPaymentRequest = (e) => {
        e.preventDefault();
        setdata({
            from: {
                accountNo: userAccNumber,
                amount: amount
            },
            to: {
                accountNo: accountNumber,
                amount: amount
            },
            remark: remark
        })
        setpaymentStep(paymentStep + 1)
    }
    const navigate = useNavigate()
    const navigatetoDashboard = () => {
        navigate("/dashboard")
    }
    const makepayment = (e) => {
        e.preventDefault();
        async function transaction() {
            if (tpin === "112233") {
                setloader("display")
                let date = new Date()
                date = date.toISOString().substring(0, 10)
                await axios.all([
                    axios.post("https://neobank-backend.vercel.app/bankingapp/api/account/transferamount", {
                        data
                    })
                        .then((res) => console.log(res))
                        .then(() => {
                            alert("Payment Successful")
                            setTimeout(() => navigatetoDashboard(), 2000)
                        })
                        .catch(e => { console.log(e); }),

                    axios.post(`http://localhost:8081/bankingapp/api/transaction/logTransactionSummary`, {
                        data: {
                            amount: amount,
                            transferedOn: date,
                            to: accountNumber,
                            from: userAccNumber,
                            remark: remark
                        }
                    }).then((res) => {
                        setloader("none");
                        console.log(res)
                    }).catch((err) => console.log(err)
                    )
                ])
            }
        }
        transaction()
    }
    switch (paymentStep) {
        case 1:
            return (
                <>
                    <NavBar setnotOn={setnotOn} />
                    <NotiComp
                        notOn={notOn} />
                    <div style={{ width: "100%", height: "auto" }} onClick={() => setnotOn({ display: "none" })}>
                        <div className="form-container-main">
                            <div className="form-content-box">
                                <div className="text-val">
                                    Fields marked *(star) are MANDATORY.
                                </div>
                                <form onSubmit={e => addpayee(e)}>
                                    <div className="aadharentry">
                                        <label className="label">
                                            Account Number*
                                        </label>
                                        <input className="form-input " type={"text"} name="accountnumber" placeholder="Enter Account Number" value={accountNumber} onChange={(e) => handleAccountChange(e)} minLength={"10"} required />
                                    </div>
                                    <div className="aadharentry">
                                        <label className="label">
                                            Confirm Account Number*
                                        </label>
                                        <input className="form-input" type={"password"} name="confirmaccnumber" placeholder="Confirm Account Number" onChange={(e) => confirmAccountNumber(e)} minLength={"10"} maxLength={accountmaxlim} required />
                                        <div className="errorMsg" style={{ display: errorStyle }}>Account Numbers Don't Match</div>
                                    </div>
                                    <div className="aadharentry">
                                        <label className="label">
                                            Full Name*
                                        </label>
                                        <input className="form-input " type={"text"} name="Name" placeholder="Enter Sender's Name" value={senderName} onChange={(e) => updatename(e)} required />
                                    </div>
                                    <div className="aadharentry">
                                        <label className="label">
                                            IFSC*
                                        </label>
                                        <input className="form-input " type={"text"} name="ifsc" placeholder="Enter IFSC COde" value={iFSCcode} onChange={(e) => updateIfsc(e)} minLength={"11"} maxLength={'11'} required />
                                    </div>
                                    <div className="nextbuttonform">
                                        <div style={{ margin: "30%", width: "30%" }}>
                                            {paymentStep}/3
                                        </div>
                                        <Button type="submit" style={{ backgroundColor: "#48842c", width: "100%" }}>Next <AiFillCaretRight /></Button>
                                    </div>
                                </form>

                            </div>
                        </div>
                        <Footer />
                    </div>
                </>)

        case 2:
            return (
                <>
                    <NavBar setnotOn={setnotOn} />
                    <NotiComp
                        notOn={notOn} />
                    <div style={{ width: "100%", height: "auto" }} onClick={() => setnotOn({ display: "none" })}>
                        <div className="form-container-main">
                            <div className="form-content-box">
                                <div className="text-val">
                                    Fields marked *(star) are MANDATORY.
                                </div>
                                <form onSubmit={(e) => SetPaymentRequest(e)}>
                                    <div className="aadharentry">
                                        <label className="label">
                                            Amount*
                                        </label>
                                        <input className="form-input " type={"text"} name="Amount" placeholder="Enter Amount" value={amount} onChange={(e) => handleAmountChange(e)} required />
                                    </div>
                                    <div className="aadharentry">
                                        <label className="label">
                                            Remark (optional)
                                        </label>
                                        <input className="form-input " type={"text"} name="Remark" placeholder="Remarks" value={remark} onChange={(e) => updateRemark(e)} />
                                    </div>
                                    <div className="nextbuttonform">
                                        <Button style={{ backgroundColor: "#48842c", width: "30%" }} onClick={e => prevStepPayemnt(e)}><AiFillCaretLeft /> Back</Button>
                                        <div style={{ margin: 'auto' }}>
                                            {paymentStep}/3
                                        </div>
                                        <Button type="submit" style={{ backgroundColor: "#48842c", width: "30%" }}>Next <AiFillCaretRight /></Button>
                                    </div>
                                </form>

                            </div>
                        </div>
                        <Footer />
                    </div>
                </>)
        // break;
        case 3:
            return (
                <>
                    <NavBar setnotOn={setnotOn} />
                    <Loader
                        loader={loader} />
                    <NotiComp
                        notOn={notOn} />
                    <div style={{ width: "100%", height: "auto" }} onClick={() => setnotOn({ display: "none" })}>
                        <div className="form-container-main">
                            <div className="form-content-box">
                                <div className="text-val">
                                    100% Secure Transanctions
                                </div>
                                <form onSubmit={(e) => makepayment(e)} >
                                    <div className="aadharentry">
                                        <label className="label">
                                            Transaction PIN*
                                        </label>
                                        <input className="form-input " type={"text"} name="accountnumber" placeholder="Enter Your 6 digit T-PIN" onChange={(e) => updatetpin(e)} minLength={"6"} maxLength={'6'} required />
                                    </div>
                                    <Button style={{ backgroundColor: "#48842c", width: "35%", margin: "10%" }}>Get OTP</Button>
                                    <div className="aadharentry">
                                        <label className="label">
                                            OTP*
                                        </label>
                                        <input className="form-input " type={"text"} name="ifsc" placeholder="Enter OTP Sent on Your Device" onChange={(e) => (e)} minLength={6} maxLength={6} required />
                                    </div>
                                    <div className="nextbuttonform">
                                        <div style={{ margin: "30%", width: "30%" }}>
                                            {paymentStep}/3
                                        </div>
                                        <Button type="submit" style={{ backgroundColor: "#48842c", width: "100%" }} >Done</Button>
                                    </div>
                                </form>

                            </div>
                        </div>
                        <Footer />
                    </div>
                </>)
        default:
            break;
    }

}
export default Payment;