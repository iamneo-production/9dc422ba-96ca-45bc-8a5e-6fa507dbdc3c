import React, { useState } from "react";
import Footer from "../components/Global/Footer";
import NavBar from "../components/Global/header";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import GoogleButton from 'react-google-button'
import "../assests/styling/Login.css"
import { useNavigate } from "react-router-dom";
import NotiComp from "../components/Global/notification_component";
import { CreateAccountPopup } from "../components/Accounts/CreateAccountPopUp";
import { Loader } from "../components/Global/loader";
import { useAuthContext } from "../hooks/useAuthContext";
import { ValidateUser } from "../apis/validateUser";

import { BiShow } from 'react-icons/bi'
import { BiHide } from "react-icons/bi";
import { useLoader } from "../hooks/useLoader";
function Login({ notOn, setnotOn }) {

    const { setLoader } = useLoader()
    const { dispatch } = useAuthContext();
    let navigate = useNavigate();
    function navigateToDashoard() {
        navigate("/");
    }
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    const [showpass, setshowpass] = useState("password");
    const PassLogo = showpass === "text" ? BiHide : BiShow;

    const handlePass = () => {
        if (showpass === "password") {
            setshowpass("text");
        } else {
            setshowpass("password");
        }
    }
    function changeUsername(e) {
        setusername(e.target.value);
    }
    function changepass(e) {
        setpassword(e.target.value);
    }
    const setCredentials = async (e) => {
        e.preventDefault()

        try {
            setLoader(true);
            const res = await ValidateUser(username, password)
            console.log("succcessfully logged in");

            dispatch({
                type: "LOGIN",
                payload: {
                    username: username,
                    authToken: res.data['x-auth-token']
                },
            })
            navigateToDashoard()
        }
        catch (err) {
            alert("Something Went Wrong! ", err)
        } finally {
            setLoader(false)

        }

    }
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

    return (
        <>
            <NavBar setnotOn={setnotOn} />
            <Loader />

            <div className="main-box mt-7" style={{ display: popUpStyle.display }}>
                <CreateAccountPopup
                    getBackStyle={getBackStyle}
                />
            </div>
            <div style={{ opacity: popUpStyle.opacity }}>
                <NotiComp
                    notOn={notOn}
                />
                <div onClick={() => setnotOn({ display: "none" })}>
                    <div style={{ height: "80px" }} ></div>
                    <Form onSubmit={(e) => setCredentials(e)}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className="email-label">Email Username</Form.Label>
                            <Form.Control type="text" placeholder="Enter your username" className="login-email" onChange={(e) => changeUsername(e)} required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label className="password-label">Password</Form.Label>
                            <div style={{ display: "flex", alignItems: "center" }}>
                                <Form.Control type={showpass} placeholder="Password" className="password-field" value={password} onChange={(e) => changepass(e)} suggested="current-paasword" autoComplete="on" required />
                                <PassLogo onClick={() => handlePass()} size={20}
                                    className="absolute right-[36%]"
                                />
                            </div>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox" style={{ width: "100%", marginLeft: "35.5%" }}>
                            <Form.Check type="checkbox" label="Remember Me" />
                        </Form.Group>
                        <Button variant="primary" type="submit" style={{ width: "30%", marginLeft: "35%", fontSize: "20px", backgroundColor: "#2c8894", marginTop: "20px" }}>
                            Submit
                        </Button>
                        <div className="Forget-password" style={{ textAlign: "right", marginRight: "35%", padding: "10px" }}><a href="/">Forget Password? </a> </div>

                        <div style={{ display: "flex", marginTop: "20px" }}>
                            <div style={{ width: "13%", height: "2px", marginLeft: "35%", backgroundColor: "black" }}></div>
                            <div style={{ width: "2%", border: "1px solid black", borderRadius: "10px", zIndex: "10", margin: "-10px 1% 10px 1%", textAlign: "center" }}><strong>OR</strong></div>
                            <div style={{ width: "13%", height: "2px", backgroundColor: "black" }}>
                            </div>
                        </div>
                        <div style={{ width: "100%", marginLeft: "35%", marginTop: "30px", marginBottom: "20px" }}>
                            <GoogleButton style={{ width: "30%" }} />
                        </div>
                        <div className="create-account-pop" onClick={(e) => handleclick(e)}>
                            <h6>
                                Need an Account?
                            </h6>
                            <div style={{ width: "5px" }}></div>
                            <p>Create One.</p>

                        </div>
                    </Form>

                </div>
                <Footer />
            </div>

        </>
    )

}
export default Login;