import React from 'react'
import AccountBody from '../components/Accounts/accountBody'
import Footer from '../components/Global/Footer'
import NavBar from '../components/Global/header'
import firstpic from "../assests/img/familypic.jpg"
import secondpic from "../assests/img/image.png"

const SavingsAccount = ({ notOn, setnotOn }) => {
  return (
    <div>
      <NavBar setnotOn={setnotOn} />
      <AccountBody
        accountType="Savings Account"
        firstpic={firstpic}
        secondpic={secondpic}
        setnotOn={setnotOn}
        notOn={notOn}
      />
      <Footer />
    </div>
  )
}

export default SavingsAccount