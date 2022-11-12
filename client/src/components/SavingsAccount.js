import React from 'react'
import AccountBody from './accountBody'
import Footer from './Footer'
import NavBar from './header'
import firstpic from "../assests/img/familypic.jpg"
import secondpic from "../assests/img/image.png"

const SavingsAccount = () => {
  return (
    <div>
      <NavBar />
      <AccountBody 
      accountType="Savings Account"
      firstpic={firstpic}
      secondpic={secondpic}
      />
      <Footer/>
    </div>
  )
}

export default SavingsAccount