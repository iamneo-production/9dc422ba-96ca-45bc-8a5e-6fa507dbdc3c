import { createContext, useState } from "react";
export const LoaderContext = createContext({
    loader: null,
    setLoader: null
})


export const LoaderContextProvider = ({ children }) => {
    const [loader, setLoader] = useState(false);

    const value = {
        loader,
        setLoader
    }
    return (
        <LoaderContext.Provider value={value}>
            {children}
        </LoaderContext.Provider>
    )
}