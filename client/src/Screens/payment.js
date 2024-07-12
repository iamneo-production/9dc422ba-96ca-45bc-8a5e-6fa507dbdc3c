import React, { useState, useEffect } from "react";

import NavBar from "../components/Global/header";
import Footer from "../components/Global/Footer";
import NotiComp from "../components/Global/notification_component";
import { Loader } from "../components/Global/loader";
import Addpayee from "../components/payment/Addpayee";
import { useDataContext } from "../hooks/useDataContext";
import TransactionStep1 from "../components/payment/TransactionStep1";
import TStep2 from "../components/payment/TStep2";
import { usePaymentStep } from "../hooks/usePaymentStep";
const Payment = ({ notOn, setnotOn, setPayeeAccountNo, payeeAccountNo }) => {
    //hooks
    // console.log(notOn);
    const { accountData, userData } = useDataContext()
    const { setPaymentStep, paymentStep } = usePaymentStep()

    //states
    const [userAccNumber, setUserAccNumber] = useState("");
    const [userPhone, setUserPhone] = useState("")
    const [amount, setAmount] = useState("");
    const [remark, setRemark] = useState("");
    const [data, setData] = useState({})


    useEffect(() => {
        setUserAccNumber(accountData?.accountNo)
        setUserPhone(userData?.phoneNo)
    }, [accountData, userData])

    const totalsteps = 3;

    return (
        <>
            <NavBar setnotOn={setnotOn} />
            <NotiComp
                notOn={notOn} />
            <Loader />
            {
                paymentStep === 1 ?
                    <Addpayee
                        setnotOn={setnotOn}
                        payeeAccountNo={payeeAccountNo}
                        setPayeeAccountNo={setPayeeAccountNo}
                        userAccNumber={userAccNumber}
                        paymentStep={paymentStep}
                        setPaymentStep={setPaymentStep}
                        totalsteps={totalsteps}
                    />
                    :
                    paymentStep === 2 ?
                        <TransactionStep1
                            setnotOn={setnotOn}
                            payeeAccountNo={payeeAccountNo}
                            setData={setData}
                            userAccNumber={userAccNumber}
                            paymentStep={paymentStep}
                            setPaymentStep={setPaymentStep}
                            setAmount={setAmount}
                            setRemark={setRemark}
                            remark={remark}
                            amount={amount}

                        />
                        :
                        paymentStep === 3 ?
                            <TStep2
                                setnotOn={setnotOn}
                                paymentStep={paymentStep}
                                data={data}
                                userPhone={userPhone}
                            />
                            :
                            <div>
                                Error:
                                Page doesn't exists
                            </div>

            }
            <Footer />
        </>
    )
}
export default Payment;