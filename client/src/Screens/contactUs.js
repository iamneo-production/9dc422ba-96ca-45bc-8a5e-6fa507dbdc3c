import React from "react";
import Footer from "../components/Global/Footer";
import NavBar from "../components/Global/header";
import "../assests/styling/contact.css"
import { Button } from "@mui/material";
import NotiComp from "../components/Global/notification_component";
function ContactUs({ notOn, setnotOn }) {
    return (
        <>
            <NavBar
                setnotOn={setnotOn}
            />
            <NotiComp
                notOn={notOn}
            />
            <div style={{ padding: "3%" }} onClick={() => setnotOn({ display: "none" })}>
                <div className="contact-box" >
                    <div style={{ padding: "1%" }}>
                        <h1 style={{ fontSize: "60px", fontWeight: "bolder" }}>
                            We're Here
                        </h1>
                        <p style={{ color: "white" }}>
                            Our Door is always open for a good cup of coffee
                        </p>
                    </div>
                    <div style={{ display: "flex", backgroundColor: "#9ccc74", width: "90%", margin: "auto", border: "1px solid black", borderRadius: "20px", padding: "2%", marginTop: "5%" }}>
                        <div style={{ fontSize: "40px", width: "20%", color: "yellow", textShadow: "1px 1px black" }}>
                            Let's Talk
                        </div>
                        <div style={{ width: "80%", display: 'flex', flexDirection: "column", justifyContent: 'center', alignItems: 'center' }}>
                            <div style={{ margin: "auto", width: "90%", height: "100%" }}>
                                <input type={"email"} placeholder="Enter Your Email" style={{ width: '100%', height: "50px", backgroundColor: "#e8ec9c", borderRadius: "10px", textAlign: "center", fontWeight: "bolder", fontSize: "20px" }} />
                            </div>
                            <Button variant="contained" style={{ width: "30%" }}>Submit</Button>
                        </div>
                    </div>
                    <div style={{ display: "flex", marginTop: "10%", marginBottom: "5%" }}>
                        <div className="contact-type">
                            <a href="/" style={{ color: "white" }}>
                                Chat <br />with US
                            </a>
                        </div>
                        <div className="contact-type">
                            <a href="/" style={{ color: "white" }}>
                                Request<br /> Callback
                            </a>
                        </div>
                        <div className="contact-type">
                            <a href="/" style={{ color: "white" }}>
                                Connect<br /> with us
                            </a>
                        </div>

                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default ContactUs;