import React, { useState } from 'react'
import axios from 'axios';
import { useAuthContext } from '../../hooks/useAuthContext';
import { useLoader } from '../../hooks/useLoader';
import { StepNaviagtor } from '../CreateAccount/FirstComponent';

const Addpayee = ({ setnotOn, payeeAccountNo, setPayeeAccountNo, userAccNumber, paymentStep, setPaymentStep, totalsteps }) => {
    const { authToken } = useAuthContext()
    const { setLoader } = useLoader();


    const [iFSCcode, setiFSCcode] = useState("");
    const [senderName, setsenderName] = useState("");
    const [errorStyle, seterrorStyle] = useState('none');
    const [accountmaxlim, setaccountmaxlim] = useState(0);

    function confirmAccountNumber(e) {
        if (e.target.value.length === payeeAccountNo.length & e.target.value !== payeeAccountNo) {
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
        setPayeeAccountNo(result);
        setaccountmaxlim(result.length)
    }

    async function addpayee(e) {
        e.preventDefault()
        setLoader(true)
        try {

            const [firstname, lastname] = senderName.split(" ");
            const res = await axios({
                method: "post",
                url: `${process.env.REACT_APP_SERVER}api/account/addpayee`,
                headers: {
                    "Content-Type": "application/json",
                    'x-auth-token': authToken
                },
                data: {
                    accountNo: userAccNumber,
                    payee: {
                        firstname: firstname,
                        lastname: lastname,
                        accountNo: payeeAccountNo
                    }
                }
            })
            console.log(res.status);
            setPaymentStep(paymentStep + 1)
        }
        catch (err) {
            console.log(err)
        }
        finally {
            setLoader(false)
        }
    }

    return (
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
                            <input className="form-input " type={"password"} name="payeeAccountNo" placeholder="Enter Account Number" value={payeeAccountNo} onChange={(e) => handleAccountChange(e)} minLength={"10"} required />
                        </div>
                        <div className="aadharentry">
                            <label className="label">
                                Confirm Account Number*
                            </label>
                            <input className="form-input" type={"text"} name="confirmaccnumber" placeholder="Confirm Account Number" onChange={(e) => confirmAccountNumber(e)} minLength={"10"} maxLength={accountmaxlim} required />
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
                        <StepNaviagtor
                            step={paymentStep}
                            backExits={false}
                            prevStep={null}
                            totalsteps={totalsteps}
                        />
                    </form>

                </div>
            </div>
        </div>
    )
}

export default Addpayee
