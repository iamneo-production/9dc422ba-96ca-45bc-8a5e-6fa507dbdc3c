import React, { useState, useEffect } from "react";

import NavBar from "../components/Global/header";
import Footer from "../components/Global/Footer";
import NotiComp from "../components/Global/notification_component";
import { Loader } from "../components/Global/loader";
import Addpayee from "../components/payment/Addpayee";
import { useDataContext } from "../hooks/useDataContext";
import TransactionStep1 from "../components/payment/TransactionStep1";
import TStep2 from "../components/payment/TStep2";
const Payment = ({ notOn, setnotOn }) => {
    //hooks
    // console.log(notOn);
    const { accountData } = useDataContext()

    //states
    const [payeeAccountNo, setPayeeAccountNo] = useState("");
    const [userAccNumber, setUserAccNumber] = useState("");
    const [paymentStep, setPaymentStep] = useState(1);
    const [amount, setAmount] = useState("");
    const [remark, setRemark] = useState("");
    const [data, setData] = useState({})


    useEffect(() => {
        setUserAccNumber(accountData?.accountNo)
        console.log(accountData);
    }, [accountData])




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
                                payeeAccountNo={payeeAccountNo}
                                setData={setData}
                                userAccNumber={userAccNumber}
                                paymentStep={paymentStep}
                                setPaymentStep={setPaymentStep}
                                setAmount={setAmount}
                                setRemark={setRemark}
                                remark={remark}
                                amount={amount}
                                data={data}
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