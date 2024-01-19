import { createContext, useState } from "react";
export const DataContext = createContext({
    userData: null,
    setUserData: null,
    accountData: null,
    setAccountData: null,
})


export const DataContextProvider = ({ children }) => {
    const [userData, setUserData] = useState(null);
    const [accountData, setAccountData] = useState(null);

    const value = {
        userData,
        setUserData,
        accountData,
        setAccountData
    }
    return (
        <DataContext.Provider value={value}>
            {children}
        </DataContext.Provider>
    )
}