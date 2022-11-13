import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
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
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route exact path="/Login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/Services" element={<MainServices />} />
          <Route path="/Dashboard" element={<Dashboard/>}/>
          <Route path="/CreateSavingsAccount" element={<SavingsAccount/>}/>
          <Route path="/CreateSalaryAccount" element={<SalaryAccount/>}/>          
          <Route path="/CreateCurrentAccount" element={<CurrentAccount/>}/>
          <Route path="/OpenAccount" element={<CreateAccount/>}/>
          <Route path="/Contact-us" element={<ContactUs/>}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
