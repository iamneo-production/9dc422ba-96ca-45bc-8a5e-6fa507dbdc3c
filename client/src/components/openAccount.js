import React, { useState, useEffect } from "react";
import Step1 from "./FirstComponent";
import Footer from "./Footer";
import NavBar from "./header";
import { Alert } from "@mui/material";
import "../assests/styling/openAccount.css"
import NotiComp from "./notification_component";
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