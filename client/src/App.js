import React, { useState, useEffect } from "react";
import Home from "./components/Home";
import Login from "./components/Login";
import MainServices from "./components/Mainservices";
import Dashboard from "./components/Dashboard";
import SavingsAccount from "./components/SavingsAccount";
import SalaryAccount from "./components/SalaryAccount";
import CurrentAccount from "./components/currentAccount";
import CreateAccount from "./components/openAccount";
import ContactUs from "./components/contactUs";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EditUserDetails from "./components/editAccountDetail.tsx";
import Payment from "./components/payment";
import { useAuthContext } from "./hooks/useAuthContext";
function App() {
  const { username, dispatch } = useAuthContext()
  const storedUsername = window.localStorage.getItem("username")
  // console.log("local storage data: ", storedUsername);
  useEffect(() => {
    if (storedUsername!=null) {
      dispatch({
        type: "LOGIN",
        payload: storedUsername
      })
    }
  }, [username])


  const [loader, setloader] = useState("none")
  const [notOn, setnotOn] = useState({ display: "none" });
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={username != null ? <Dashboard notOn={notOn}
            setnotOn={setnotOn} /> : <Home notOn={notOn} setnotOn={setnotOn} />} />
          <Route exact path="/login" element={<Login
            notOn={notOn}
            setnotOn={setnotOn}
            setloader={setloader}
            loader={loader}
          />} />

          {/* <Route path="/signup" element={<SignUp notOn={notOn} setnotOn={setnotOn}/>} /> */}
          <Route path="/Services" element={<MainServices notOn={notOn} setnotOn={setnotOn} />} />
          <Route path="/Dashboard" element={<Dashboard
            notOn={notOn}
            setnotOn={setnotOn}
          />} />
          <Route exact path="CreateSavingsAccount" element={<SavingsAccount notOn={notOn} setnotOn={setnotOn} />} />
          <Route exact path="CreateSalaryAccount" element={<SalaryAccount notOn={notOn} setnotOn={setnotOn} />} />
          <Route exact path="CreateCurrentAccount" element={<CurrentAccount notOn={notOn} setnotOn={setnotOn} />} />
          <Route path="/OpenAccount" element={<CreateAccount
            notOn={notOn}
            setnotOn={setnotOn}
            setloader={setloader}
            loader={loader}
          />} />
          <Route path="/makepayment" element={<Payment notOn={notOn} setnotOn={setnotOn} loader={loader} setloader={setloader}/>} />
          <Route path="/Contact-us" element={<ContactUs notOn={notOn} setnotOn={setnotOn} />} />
          <Route path="/editAccountDetails" element={<EditUserDetails notOn={notOn} setnotOn={setnotOn} />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
