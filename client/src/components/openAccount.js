import React from "react";
import Step1 from "./FirstComponent";
import Footer from "./Footer";
import NavBar from "./header";
import "../assests/styling/openAccount.css"
function CreateAccount() {
    return (
        <>
            <NavBar />
            <div style={{width:"100%", height:"auto"}}>
                <div className="form-container-main">
                    <Step1 />
                </div>
            </div>
            <Footer />
        </>
    )
}
export default CreateAccount;