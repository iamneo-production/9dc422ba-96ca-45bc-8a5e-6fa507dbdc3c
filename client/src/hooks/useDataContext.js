import { DataContext } from "../context/DataContext";
import { useContext } from "react";

export const useDataContext = () => {
    const context = useContext(DataContext)
    if (!context) {
        throw Error("useAuthContext must be used inside an AuthContextProvider")
    }
    return context
}