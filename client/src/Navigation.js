import React, { useEffect, useState } from 'react'
import Home from "./Screens/Home";
import Login from "./Screens/Login";
import MainServices from "./Screens/Mainservices";
import Dashboard from "./Screens/Dashboard";
import SavingsAccount from "./Screens/SavingsAccount";
import SalaryAccount from "./Screens/SalaryAccount";
import CurrentAccount from "./Screens/currentAccount";
import CreateAccount from "./Screens/openAccount";
import ContactUs from "./Screens/contactUs";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EditUserDetails from "./Screens/editAccountDetail";
import Payment from "./Screens/payment";
import { useAuthContext } from './hooks/useAuthContext';

const Navigation = () => {
    const { username, dispatch } = useAuthContext()
    const storedUsername = window.localStorage.getItem("username")
    const authToken = window.localStorage.getItem("authToken")
    const [notOn, setnotOn] = useState({ display: "none" });
    const [payeeAccountNo, setPayeeAccountNo] = useState("");


    useEffect(() => {
        if (storedUsername != null) {
            dispatch({
                type: "LOGIN",
                payload: {
                    username: storedUsername,
                    authToken: authToken
                }
            })
            console.log("Reloaded");
        }
    }, [dispatch, storedUsername, username, authToken])
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={username != null ?
                    <Dashboard
                        notOn={notOn}
                        setnotOn={setnotOn}
                        setPayeeAccountNo={setPayeeAccountNo}
                    /> :
                    <Home notOn={notOn} setnotOn={setnotOn} />} />
                {!username && <Route exact path="/login" element={<Login
                    notOn={notOn}
                    setnotOn={setnotOn}
                />} />}

                {/* <Route path="/signup" element={<SignUp notOn={notOn} setnotOn={setnotOn}/>} /> */}
                <Route path="/Services" element={<MainServices notOn={notOn} setnotOn={setnotOn} />} />
                <Route path="/Dashboard" element={
                    <Dashboard
                        notOn={notOn}
                        setnotOn={setnotOn}
                        setPayeeAccountNo={setPayeeAccountNo}
                    />} />
                <Route exact path="CreateSavingsAccount" element={<SavingsAccount notOn={notOn} setnotOn={setnotOn} />} />
                <Route exact path="CreateSalaryAccount" element={<SalaryAccount notOn={notOn} setnotOn={setnotOn} />} />
                <Route exact path="CreateCurrentAccount" element={<CurrentAccount notOn={notOn} setnotOn={setnotOn} />} />
                <Route path="/OpenAccount" element={<CreateAccount
                    notOn={notOn}
                    setnotOn={setnotOn}
                />} />
                <Route path="/makepayment" element={<Payment notOn={notOn} setnotOn={setnotOn}
                    setPayeeAccountNo={setPayeeAccountNo}
                    payeeAccountNo={payeeAccountNo}
                />} />
                <Route path="/Contact-us" element={<ContactUs notOn={notOn} setnotOn={setnotOn} />} />
                <Route path="/editAccountDetails" element={<EditUserDetails />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Navigation
