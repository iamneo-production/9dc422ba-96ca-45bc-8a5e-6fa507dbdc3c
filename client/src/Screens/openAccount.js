import React, { useState } from "react";
import Step1 from "../components/CreateAccount/FirstComponent";
import Footer from "../components/Global/Footer";
import NavBar from "../components/Global/header";
import Alert from "@mui/material/Alert";
import { Loader } from "../components/Global/loader";
import "../assests/styling/openAccount.css"
import NotiComp from "../components/Global/notification_component";
function CreateAccount({ data, notOn, setnotOn }) {

    const [errmsg, seterrmsg] = useState("hidden");
    const [errmsgText, seterrmsgText] = useState("")
    if (errmsg === "visible") {
        setTimeout(() => seterrmsg("hidden"), 3000)
    }

    return (
        <>
            <NavBar setnotOn={setnotOn} />
            <NotiComp
                notOn={notOn}
            />
            <Loader />
            <div style={{ width: "100%", height: "45px", marginTop: "5px", visibility: errmsg }}>
                <Alert style={{ width: "20%", float: "right", marginRight: "2%" }} variant="filled" severity="error">{errmsgText}</Alert>
            </div>

            <div style={{ width: "100%", height: "auto" }} onClick={() => setnotOn({ display: "none" })}>
                <div className="form-container-main">
                    <Step1
                        setmsg={seterrmsg}
                        setText={seterrmsgText}
                        data={data}
                    />
                </div>
            </div>
            <Footer />
        </>
    )
}
export default CreateAccount;