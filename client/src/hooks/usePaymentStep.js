import { useContext } from "react";
import { PaymentContext } from "../context/PaymentContext";

export const usePaymentStep = () => {
    const context = useContext(PaymentContext)
    if (!context) {
        throw Error("Loader must be used inside an LoaderContextProvider")
    }
    return context
}