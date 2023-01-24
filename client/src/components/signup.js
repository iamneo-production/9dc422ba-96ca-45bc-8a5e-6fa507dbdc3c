import React from "react";
import Footer from "./Footer";
import NavBar from "./header";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import GoogleButton from 'react-google-button'
import "../assests/styling/Login.css"
import NotiComp from "./notification_component";
function SignUp({ notOn, setnotOn }) {
    return (
        <>
            <NavBar
            setnotOn={setnotOn}
            />
            <NotiComp
            notOn={notOn}
            />
            <div onClick={()=>setnotOn({display:"none"})}>
                <div style={{height:"80px"}}></div>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="email-label">Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" className="login-email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className="password-label">Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" className="password-field" autoComplete="on" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox" style={{ width: "100%", marginLeft: "35.5%" }}>
                        <Form.Check type="checkbox" label="Remember Me" />
                    </Form.Group>
                    <Button variant="primary" type="submit" style={{ width: "30%", marginLeft: "35%", fontSize: "20px", backgroundColor: "#2c8894", marginTop: "20px" }}>
                        Sign Up
                    </Button>
                    {/* <div className="Forget-password" style={{ textAlign: "right", marginRight: "35%", padding: "10px" }}><a href="/">Forget Password? </a> </div> */}

                    <div style={{ display: "flex", marginTop: "20px" }}>
                        <div style={{ width: "13%", height: "2px", marginLeft: "35%", backgroundColor: "black" }}></div>
                        <div style={{ width: "2%", border: "1px solid black", borderRadius: "10px", zIndex: "10", margin: "-10px 1% 10px 1%", textAlign: "center" }}><strong>OR</strong></div>
                        <div style={{ width: "13%", height: "2px", backgroundColor: "black" }}>
                        </div>
                    </div>
                    <div style={{ width: "100%", marginLeft: "35%", marginTop: "30px", marginBottom: "20px" }}>
                        <GoogleButton style={{ width: "30%" }} label="Sign Up with Google" />
                    </div>
                    <div style={{ display: "flex", textAlign: "center", width: "100%", marginLeft: "42%", marginBottom: "20px" }}>
                        <h6>
                            Already Have an Account?
                        </h6>
                        <a href="/Login"> LOGIN</a>

                    </div>
                </Form>

            </div>
            <Footer />
        </>
    )

}
export default SignUp;