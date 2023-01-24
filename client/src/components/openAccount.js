import React from "react";
import Step1 from "./FirstComponent";
import Footer from "./Footer";
import NavBar from "./header";
import "../assests/styling/openAccount.css"
import NotiComp from "./notification_component";
function CreateAccount({data, notOn, setnotOn}) {
    return (
        <>
            <NavBar setnotOn={setnotOn}/>
            <NotiComp
            notOn={notOn}/>
            <div style={{width:"100%", height:"auto"}} onClick={()=>setnotOn({display:"none"})}>
                <div className="form-container-main">
                    <Step1 
                    data= {data}/>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default CreateAccount;