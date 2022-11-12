import React from 'react'
import AccountBody from './accountBody'
import Footer from './Footer'
import NavBar from './header'
import firstpic from "../assests/img/curraccountimg1.png"
import secondpic from "../assests/img/curraccountimg2.png"

const CurrentAccount = () => {
  return (
    <div>
      <NavBar />
      <AccountBody 
      accountType="Current Account"
      firstpic={firstpic}
      secondpic={secondpic}
      />
      <Footer/>
    </div>
  )
}

export default CurrentAccount;