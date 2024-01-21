import { createContext, useState } from "react";
export const DataContext = createContext({
    userData: null,
    setUserData: null,
    accountData: null,
    setAccountData: null,
    tData: null,
    setTData: null,
    income: null,
    setIncome: null,
    expense: null,
    setExpense: null,
})


export const DataContextProvider = ({ children }) => {
    const [userData, setUserData] = useState(null);
    const [accountData, setAccountData] = useState(null);
    const [tData, setTData] = useState([])
    const [income, setIncome] = useState(0);
    const [expense, setExpense] = useState(0);

    const value = {
        userData,
        setUserData,
        accountData,
        setAccountData,
        tData,
        setTData,
        expense,
        setIncome,
        income,
        setExpense
    }
    return (
        <DataContext.Provider value={value}>
            {children}
        </DataContext.Provider>
    )
}