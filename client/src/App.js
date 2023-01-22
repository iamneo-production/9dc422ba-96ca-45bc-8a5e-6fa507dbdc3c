import React, { useState } from "react";
import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/signup";
import MainServices from "./components/Mainservices";
import Dashboard from "./components/Dashboard";
import SavingsAccount from "./components/SavingsAccount";
import SalaryAccount from "./components/SalaryAccount";
import CurrentAccount from "./components/currentAccount";
import CreateAccount from "./components/openAccount";
import ContactUs from "./components/contactUs";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EditUserDetails from "./components/editAccountDetail.tsx";
function App() {
  const [issignedIn, setissignIn]=useState(false);
  const [username, setusername]=useState("");
  const val=[issignedIn, setissignIn, username, setusername];
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route exact path="/Login" element={<Login 
          data={val}
          />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/Services" element={<MainServices />} />
          <Route path="/Dashboard" element={<Dashboard
          data={val}
          />}/>
          <Route path="/CreateSavingsAccount" element={<SavingsAccount/>}/>
          <Route path="/CreateSalaryAccount" element={<SalaryAccount/>}/>          
          <Route path="/CreateCurrentAccount" element={<CurrentAccount/>}/>
          <Route path="/OpenAccount" element={<CreateAccount 
          data={val}
          />}/>
          <Route path="/Contact-us" element={<ContactUs/>}/>
          <Route path="/editAccountDetails" element={<EditUserDetails/>}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
