import React, { useState } from "react";
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
function App() {
  const [issignedIn, setissignIn] = useState(true);
  const [username, setusername] = useState("");
  const [loader, setloader] = useState("none")
  const val = [issignedIn, setissignIn, username, setusername];
  const [notOn, setnotOn] = useState({ display: "none" });
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home notOn={notOn} setnotOn={setnotOn} />} />
          <Route exact path="/login" element={<Login
            data={val}
            notOn={notOn}
            setnotOn={setnotOn}
            setloader={setloader}
            loader={loader}
          />} />

          {/* <Route path="/signup" element={<SignUp notOn={notOn} setnotOn={setnotOn}/>} /> */}
          <Route path="/Services" element={<MainServices notOn={notOn} setnotOn={setnotOn} />} />
          <Route path="/Dashboard" element={<Dashboard
            data={val}
            notOn={notOn}
            setnotOn={setnotOn}
          />} />
          <Route exact path="CreateSavingsAccount" element={<SavingsAccount notOn={notOn} setnotOn={setnotOn} />} />
          <Route exact path="CreateSalaryAccount" element={<SalaryAccount notOn={notOn} setnotOn={setnotOn} />} />
          <Route exact path="CreateCurrentAccount" element={<CurrentAccount notOn={notOn} setnotOn={setnotOn} />} />
          <Route path="/OpenAccount" element={<CreateAccount
            data={val}
            notOn={notOn} setnotOn={setnotOn}
          />} />
          <Route path="/makepayment" element={<Payment notOn={notOn} setnotOn={setnotOn} />} />
          <Route path="/Contact-us" element={<ContactUs notOn={notOn} setnotOn={setnotOn} />} />
          <Route path="/editAccountDetails" element={<EditUserDetails notOn={notOn} setnotOn={setnotOn} />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
