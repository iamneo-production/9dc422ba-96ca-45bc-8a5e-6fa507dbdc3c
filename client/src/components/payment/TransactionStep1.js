import React from 'react'
import { StepNaviagtor } from '../CreateAccount/FirstComponent';

const TransactionStep1 = ({ setnotOn, setPaymentStep, paymentStep, userAccNumber, setData, payeeAccountNo, setRemark, setAmount, amount, remark }) => {

    const updateRemark = (e) => {
        setRemark(e.target.value)
    }
    function prevStepPayemnt(e) {
        setPaymentStep(paymentStep - 1);
    }


    const handleAmountChange = event => {
        var result = event.target.value.replace(/\D/g, '');
        setAmount(Number(result));

    }
    const SetPaymentRequest = (e) => {
        e.preventDefault();
        setData({
            from: {
                accountNo: userAccNumber,
                amount: amount.toString()
            },
            to: {
                accountNo: payeeAccountNo,
                amount: amount.toString()
            },
            remark: remark
        })
        setPaymentStep(paymentStep + 1)
    }
    return (
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
                        <StepNaviagtor
                            step={paymentStep}
                            totalsteps={3}
                            prevStep={prevStepPayemnt}
                            backExits={true}
                        />
                    </form>

                </div>
            </div>
        </div>
    )
}

export default TransactionStep1
