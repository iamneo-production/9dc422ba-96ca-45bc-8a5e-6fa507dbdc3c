import React from 'react'
import AccountBody from './accountBody'
import Footer from './Footer'
import NavBar from './header'
import firstpic from "../assests/img/salaAccountimg1.jpg"
import secondpic from "../assests/img/salaaccountimg2.png"

const SalaryAccount = () => {
  return (
    <div>
      <NavBar />
      <AccountBody 
      accountType="Salary Account"
      firstpic={firstpic}
      secondpic={secondpic}
      />
      <Footer/>
    </div>
  )
}

export default SalaryAccount