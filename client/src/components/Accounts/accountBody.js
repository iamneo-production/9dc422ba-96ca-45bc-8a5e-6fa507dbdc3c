import React from 'react'
import { Button } from 'react-bootstrap'
import "../../assests/styling/AccountBody.css"
import NotiComp from '../Global/notification_component'
import ReviewSlider from './reviewSlider'


const AccountBody = (props) => {
  var acctype = props.accountType;
  const words = acctype.split(" ");
  acctype = acctype.toUpperCase();
  const { notOn, setnotOn } = props
  return (
    <div>
      <NotiComp
        notOn={notOn} />
      <div onClick={() => setnotOn({ display: "none" })}>
        <div >
          <div >
            <div className='get-started-container'>
              <h2 className='get-started-text'>
                LET'S GET STARTED WITH  YOUR {acctype}
              </h2>
            </div>
          </div>
        </div>
        <div>
          <div className='accountPage-firstCol'>
            <div style={{ width: "55%" }}>
              <img className='img' src={props.firstpic} alt={"Accountpic"} />
            </div>
            <div className='firstCol-textContent'>
              <div>
                Open a Digital {props.accountType} With Your Pan Card & Aadhar Card
              </div>
              <Button href='/OpenAccount' variant='light' style={{ color: "Red", fontWeight: "bolder", fontSize: "25px", margin: "auto" }}>
                OPEN NOW
              </Button>
              <a className='TermsandConditions' href='/'>
                Terms and Conditions<span style={{ color: "red" }}>*</span>
              </a>
            </div>
          </div>
        </div>
        <div style={{ marginTop: "2%" }}>
          <div className='accountPage-secondCol'>
            <div style={{ width: "50%" }}>
              <img className='img' src={props.secondpic} alt={"Accountpic"} />
            </div>
            <div className='secondCol-textContent'>
              <div>
                In the Internet age, almost everything is digital, including your bank account. RBH Bank’s Digital {props.accountType} is the best thing to happen to customers, and it has made banking easier than ever.
                <br />
                <br />
                All you need to open a Digital {props.accountType} is your Aadhaar number and PAN number. Don’t hesitate any more: apply for Digital {props.accountType} now.
                <br />
                <br />
                Here’s what you get with RBH Bank’s Digital {words[0]} Bank Account:
                <ul>
                  <li>No charges on non-maintenance of balances*</li>
                  <li>Instant and paperless</li>
                  <li>Higher interest rates</li>
                  <li>Anytime banking</li>
                </ul>
              </div>
              <Button href={"/OpenAccount"} variant='info' style={{ color: "black", fontWeight: "bolder", fontSize: "25px", margin: "auto" }}>
                OPEN NOW
              </Button>
            </div>
          </div>
        </div>
        <div style={{ height: "10%" }}>
          <div style={{ width: "90%", margin: "auto", marginTop: "2%" }}>
            <div className='reviewsandRating'>
              Reviews And Rating
            </div>
          </div>
        </div>
        <div>
          <div className='accountPage-thirdCol'>
            <div className='reviewslider'>
              <ReviewSlider />
            </div>
            <div className='thirdCol-textContent'>
              <h3>
                Documentation
              </h3>
              <p>

                To apply for Digital {props.accountType}, you will need to provide some documentation to prove your identity, age, and address. Some of the mandatory documents that you need will include
                <ol>
                  <li>PAN card</li>
                  <li>Aadhaar card</li>
                </ol>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AccountBody