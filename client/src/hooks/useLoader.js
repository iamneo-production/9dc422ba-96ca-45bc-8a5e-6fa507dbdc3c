import { useContext } from "react";
import { LoaderContext } from "../context/LoaderContext";

export const useLoader = () => {
    const context = useContext(LoaderContext)
    if (!context) {
        throw Error("Loader must be used inside an LoaderContextProvider")
    }
    return context
}