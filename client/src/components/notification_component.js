import Notification from "./notification";
import React from "react";
const NotiComp = ({ notOn }) => {
    var count = 0;
    return (
        <>
            <div style={{height:"15%"}}></div>
            <div style={{ width: '20%', position: 'absolute', backgroundColor: "white", zIndex: "100", marginLeft: "60%", marginTop: "-110px", border: "2px solid black", display: notOn.display }}>
                <div>
                    {Notification.map(item => (
                        <div key={count++} style={{ display: 'flex', fontSize: "14px", width: "100%", border: "0.5px solid grey", padding: "2%" }}>
                            <div>
                                {item.content}
                            </div>
                            <a href="/">Know More</a>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
export default NotiComp;
