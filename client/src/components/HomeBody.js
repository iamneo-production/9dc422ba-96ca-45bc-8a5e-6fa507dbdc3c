import React from "react";
import { useState } from "react";
import "../assests/styling/Home.css"
import "../assests/styling/GetStartedPopUp.css"
import Slideshow from "./HomeSlider";
import { Button } from "react-bootstrap";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
import NotiComp from "./notification_component";

function HomeBody({notOn,setnotOn}) {
    const style = {
        display: "none",
        opacity: "100%",
    }
    const [isclick, setIsclick] = useState(0);
    const [popUpStyle, setpopUpStyle] = useState(style)

    function handleclick(e) {
        if (isclick === 0) {
            setIsclick(1);
            setpopUpStyle({ display: "block", opacity: "10%" });
        }

    }
    function getBackStyle(e) {
        setIsclick(0);
        setpopUpStyle({ display: "none", opacity: "100%" })
    }

    function hideNoti(e){
        setnotOn({display:"none"})
    }
    return (
        <>
            <div style={{ width: "100%", height: "100px" }} onClick={e=>hideNoti(e)}></div>
            <div className="main-box" style={{ display: popUpStyle.display }}>
                <div className="content-box">
                    <Link to={"CreateSavingsAccount"} className="GetStartedType">
                        <Button variant="success" className="GetStartedTypeBtn" >
                            SAVINGS ACCOUNT
                        </Button>
                    </Link>
                    <Link to={"CreateSalaryAccount"} className="GetStartedType">

                        <Button variant="success" className="GetStartedTypeBtn">
                            SALARY ACCOUNT
                        </Button>
                    </Link>
                    <Link to={"CreateCurrentAccount"} className="GetStartedType">

                        <Button variant="success" className="GetStartedTypeBtn">
                            CURRENT ACCOUNT
                        </Button>
                    </Link>
                    <div style={{ fontSize: "20px", fontWeight: "bold", height: "10%", marginRight: "10%", marginLeft: "auto", cursor: "pointer" }} onClick={(e) => getBackStyle(e)}>
                        <BsArrowLeft />
                        Back
                    </div>
                </div>
            </div>
            <NotiComp
            notOn={notOn}
            />

            <div style={{ opacity: popUpStyle.opacity }} onClick={e=>hideNoti(e)}>
                <div style={{ display: "flex" }}>
                    <div style={{ marginLeft: "100px", width: "50%" }}>
                        <div className="greetings-home">
                            Say Hello,
                        </div>
                        <div className="intro-home">
                            YOUR BEST PARTNER IN DIGITAL BANKING ECOSYSTEM
                        </div>
                        <p className="home-text">
                            Start your Digital Savings Account today with India’s most sincere digital bank!
                            <br />
                            <br />
                            RBH Bank offers a Digital Savings Account with no account opening charges or minimum balance requirements. Keep upto Rs. 2 lac of deposits and enjoy benefits.
                        </p>
                    </div>
                    <div style={{ marginRight: "100px" }}>
                        <Slideshow />
                    </div>
                </div>
                <div style={{ display: "flex" }}>
                    <div style={{ marginLeft: "100px" }}>
                        <button className="registerButton" onClick={(e) => handleclick(e)} >
                            Get Stated Here
                        </button>
                        <div className="button-shadow">
                        </div>

                    </div>
                    <div className="scroll-top-div">
                        <button className="scroll-top" >
                            Scroll to Top
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default HomeBody;