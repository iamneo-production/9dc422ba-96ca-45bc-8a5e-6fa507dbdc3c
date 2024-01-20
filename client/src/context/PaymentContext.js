import { createContext, useState } from "react";
export const PaymentContext = createContext({
    paymentStep: null,
    setPaymentStep: null
})


export const PaymentContextProvider = ({ children }) => {
    const [paymentStep, setPaymentStep] = useState(1);

    const value = {
        paymentStep,
        setPaymentStep
    }
    return (
        <PaymentContext.Provider value={value}>
            {children}
        </PaymentContext.Provider>
    )
}