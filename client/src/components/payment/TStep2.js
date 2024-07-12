import React, { useState } from 'react'
import { Button } from "react-bootstrap";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useLoader } from '../../hooks/useLoader';
import { useAuthContext } from '../../hooks/useAuthContext';
import { useRefreshUser } from '../../hooks/useRefreshUser';
import { StepNaviagtor } from '../CreateAccount/FirstComponent';

const TStep2 = ({ setnotOn, data, paymentStep, userPhone }) => {

    const { setLoader } = useLoader()
    const { authToken } = useAuthContext();
    const [tpin, setTpin] = useState("");
    const [otp, setOtp] = useState("");
    const [refreshUser] = useRefreshUser()

    const updatetpin = (e) => {
        setTpin(e.target.value)
    }
    const navigate = useNavigate()
    const navigatetoDashboard = () => {
        navigate("/dashboard")
    }

    async function OTPgenerate() {
        if (tpin === "112233") {
            setLoader(true)
            try {
                const res1 = await axios({
                    method: "post",
                    url: `${process.env.REACT_APP_SERVER}api/account/sendOtp`,
                    data: {
                        "phoneNo": "8591941194"
                    },
                    headers: {
                        "content-Type": "application/json",
                        'x-auth-token': authToken
                    }
                })
                console.log(res1.status);
                alert("Otp Sent!!")
            }
            catch (err) {
                alert("Failed to generate OTP")
            }
            finally {
                setLoader(false)
            }
        }
        else {
            alert("Incorrect T-Pin")
        }
    }

    const transaction = async () => {
        setLoader(true)
        try {
            console.log(data);
            const res1 = await axios({
                method: "post",
                url: `${process.env.REACT_APP_SERVER}api/account/transferamount`,
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
            throw TypeError(err)
        }
        finally {
            setLoader(false)
        }
    }

    const verifyOTP = async () => {
        setLoader(true)
        try {
            const res1 = await axios({
                method: "post",
                url: `${process.env.REACT_APP_SERVER}api/account/verifyOtp`,
                data: {
                    phoneNo: "8591941194",
                    otp: otp
                },
                headers: {
                    "content-Type": "application/json",
                    'x-auth-token': authToken
                }
            })
            if (res1.status === 200) {
                alert("OTP verified!!")
            } else {
                console.log(res1.statusText);
            }
        }
        catch (err) {
            throw TypeError(err);
        } finally {
            setLoader(false)
        }
    }

    const makepayment = (e) => {
        e.preventDefault();
        setLoader(true)
        async function pay() {
            try {
                await verifyOTP();
                await transaction();
                await refreshUser();
            }
            catch (err) {
                alert("Failed to verify OTP")
            }
        }
        pay()
        setLoader(false)
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
                            <input className="form-input " type={"text"} name="T-pin" placeholder="Enter Your 6 digit T-PIN" onChange={(e) => updatetpin(e)} minLength={"6"} maxLength={'6'} required />
                        </div>
                        <Button onClick={OTPgenerate} style={{ backgroundColor: "#48842c", width: "35%", margin: "10%" }}>Get OTP</Button>
                        <div className="aadharentry">
                            <label className="label">
                                OTP*
                            </label>
                            <input className="form-input " type={"text"} name="OTP" placeholder="Enter OTP Sent on Your Device" onChange={(e) => setOtp(e.target.value)} minLength={6} maxLength={6} required />
                        </div>
                        <StepNaviagtor
                            step={paymentStep}
                            totalsteps={3}
                            prevStep={null}
                            backExits={false}
                        />
                    </form>

                </div>
            </div>
        </div>
    )
}

export default TStep2
