import React from "react";
import Footer from "./Footer";
import NavBar from "./header";
import "../assests/styling/contact.css"
function ContactUs() {
    return (
        <>
            <NavBar />
            <div style={{ width: "100%" }}>
                <div className="contact-box">
                    <div style={{padding:"1%"}}>
                        <h1 style={{fontSize:"60px", fontWeight:"bolder"}}>
                            We're Here
                        </h1>
                        <p style={{ color: "white" }}>
                            Our Door is always open for a good cup of coffee
                        </p>
                    </div>
                    <div style={{ display: "flex", backgroundColor: "#9ccc74", width: "90%", margin: "auto", border: "1px solid black", borderRadius: "20px", padding: "2%", marginTop:"5%"}}>
                        <div style={{ fontSize: "40px", width: "20%", color: "yellow", textShadow: "1px 1px black" }}>
                            Let's Talk
                        </div>
                        <div style={{ margin: "auto", width: "60%", height: "100%" }}>
                            <input type={"email"} placeholder="Enter Your Email" style={{ width: '100%', height: "50px", backgroundColor: "#e8ec9c", borderRadius: "10px", textAlign: "center", fontWeight: "bolder", fontSize: "20px" }} />
                        </div>
                    </div>
                    <div style={{ display: "flex", marginTop:"10%", marginBottom:"5%" }}>
                        <div className="contact-type">
                            <a href="#" style={{color:"white"}}>
                                Chat <br/>with US
                            </a>
                        </div>
                        <div className="contact-type">
                            <a href="#" style={{color:"white"}}>
                                Request<br/> Callback
                            </a>
                        </div>
                        <div className="contact-type">
                        <a href="#" style={{color:"white"}}>
                                Connect<br/> with us
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