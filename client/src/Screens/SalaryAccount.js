import React from 'react'
import AccountBody from '../components/Accounts/accountBody'
import Footer from '../components/Global/Footer'
import NavBar from '../components/Global/header'
import firstpic from "../assests/img/salaAccountimg1.jpg"
import secondpic from "../assests/img/salaaccountimg2.png"

const SalaryAccount = ({ notOn, setnotOn }) => {
  return (
    <div>
      <NavBar setnotOn={setnotOn} />
      <AccountBody
        accountType="Salary Account"
        firstpic={firstpic}
        secondpic={secondpic}
        setnotOn={setnotOn}
        notOn={notOn}
      />
      <Footer />
    </div>
  )
}

export default SalaryAccount