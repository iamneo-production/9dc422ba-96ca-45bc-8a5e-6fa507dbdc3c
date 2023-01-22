import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { AiFillCaretRight, AiFillCaretLeft } from "react-icons/ai"
import NavBar from "./header";
import Footer from "./Footer";
import axios from 'axios';
const Payment = (props) => {
    const [paymentStep, setpaymentStep] = useState(1);
    const [accountNumber, setaccountNumber] = useState("");
    const [iFSCcode, setiFSCcode] = useState("");
    const [senderName, setsenderName] = useState("");
    const [errorStyle, seterrorStyle] = useState('none');
    const [accountmaxlim, setaccountmaxlim] = useState(0);
    const [amount, setamount] = useState("");

    function nextSteppayment(e) {
        const userAccNumber="69426942728720";
        axios({
            method:"post",
            url:"http://localhost:8081/bankingapp/api/account/addpayee",
            data:{
                accountNo:userAccNumber,
                payee: {
                    firstname: senderName,
                    lastname :"",
                    accountNo: accountNumber
                }
            }
        }).then(e=>console.log(e.status))
        setpaymentStep(paymentStep + 1);
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
    switch (paymentStep) {
        case 1:
            return (
                <><NavBar />
                    <div style={{ width: "100%", height: "auto" }}>
                        <div className="form-container-main">
                            <div className="form-content-box">
                                <div className="text-val">
                                    Fields marked *(star) are MANDATORY.
                                </div>
                                <form method="post" >
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
                                        <input className="form-input" type={"password"} name="confirmaccnumber" placeholder="Confirm Account Number" onChange={(e) => confirmAccountNumber(e)} onPaste={e => e.preventDefault()} minLength={"10"} maxLength={accountmaxlim} required />
                                        <div className="errorMsg" style={{ display: errorStyle }}>Account Numbers Don't Match</div>
                                    </div>
                                    <div className="aadharentry">
                                        <label className="label">
                                            Name*
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
                                        <Button style={{ backgroundColor: "#48842c", width: "100%" }} onClick={e => nextSteppayment(e)}>Next <AiFillCaretRight /></Button>
                                    </div>
                                </form>

                            </div>
                        </div>
                        <Footer />
                    </div>
                </>)

        case 2:
            return (
                <><NavBar />
                    <div style={{ width: "100%", height: "auto" }}>
                        <div className="form-container-main">
                            <div className="form-content-box">
                                <div className="text-val">
                                    Fields marked *(star) are MANDATORY.
                                </div>
                                <form method="post" >
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
                                        <input className="form-input " type={"text"} name="Remark" placeholder="Remarks" onChange={(e) => updateIfsc(e)} />
                                    </div>
                                    <div className="nextbuttonform">
                                        <Button style={{ backgroundColor: "#48842c", width: "30%" }} onClick={e => prevStepPayemnt(e)}><AiFillCaretLeft /> Back</Button>
                                        <div style={{ margin: 'auto' }}>
                                            {paymentStep}/3
                                        </div>
                                        <Button style={{ backgroundColor: "#48842c", width: "30%" }} onClick={e => nextSteppayment(e)}>Next <AiFillCaretRight /></Button>
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
                <><NavBar />
                    <div style={{ width: "100%", height: "auto" }}>
                        <div className="form-container-main">
                            <div className="form-content-box">
                                <div className="text-val">
                                    100% Secure Transanctions
                                </div>
                                <form method="post" >
                                    <div className="aadharentry">
                                        <label className="label">
                                            Transaction PIN*
                                        </label>
                                        <input className="form-input " type={"text"} name="accountnumber" placeholder="Enter Your 6 digit T-PIN" onChange={(e) => (e)} minLength={"6"} maxLength={'6'} required />
                                    </div>
                                    <Button style={{ backgroundColor: "#48842c", width: "35%", margin: "10%" }}>Get OTP</Button>
                                    <div className="aadharentry">
                                        <label className="label">
                                            OTP*
                                        </label>
                                        <input className="form-input " type={"text"} name="ifsc" placeholder="Enter OTP Sent on Your Device" onChange={(e) => updateIfsc(e)} minLength={"10"} required />
                                    </div>
                                    <div className="nextbuttonform">
                                        <div style={{ margin: "30%", width: "30%" }}>
                                            {paymentStep}/3
                                        </div>
                                        <Button style={{ backgroundColor: "#48842c", width: "100%" }} onClick={e=>{props.backtodash(0)}}>Done</Button>
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