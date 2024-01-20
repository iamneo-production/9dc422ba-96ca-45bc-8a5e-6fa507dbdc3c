import React, { useState } from 'react'
import { Button } from "react-bootstrap";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useLoader } from '../../hooks/useLoader';
import { useAuthContext } from '../../hooks/useAuthContext';

const TStep2 = ({ setnotOn, amount, payeeAccountNo, userAccNumber, remark, data, paymentStep }) => {

    const { setLoader } = useLoader()
    const { authToken } = useAuthContext();
    const [tpin, setTpin] = useState("");

    const updatetpin = (e) => {
        setTpin(e.target.value)
    }
    const navigate = useNavigate()
    const navigatetoDashboard = () => {
        navigate("/dashboard")
    }


    const makepayment = (e) => {
        e.preventDefault();
        async function transaction() {
            if (tpin === "112233") {
                setLoader(true)
                try {
                    console.log(data);
                    const res1 = await axios({
                        method: "post",
                        url: "https://neobank-nu.vercel.app/api/account/transferamount",
                        data: data,
                        headers: {
                            "content-Type": "application/json",
                            'x-auth-token': authToken
                        }
                    })
                    console.log(res1.status);
                    alert("Payment Successful");
                    navigatetoDashboard();
                }
                catch (err) {
                    alert("Couldn't process the transaction try again")
                }
                finally {
                    setLoader(false)
                }
            }
            else {
                alert("Incorrect T-Pin")
            }
        }
        transaction()
    }

    return (
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
                            <input className="form-input " type={"text"} name="payeeAccountNo" placeholder="Enter Your 6 digit T-PIN" onChange={(e) => updatetpin(e)} minLength={"6"} maxLength={'6'} required />
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
        </div>
    )
}

export default TStep2
