import { BeatLoader } from "react-spinners"
import React from "react"
export const Loader = () => {
    return (
        <div style={{ zIndex: "10", position: "absolute", opacity: "50%", backgroundColor:"grey", width: "100%", height: "700px", display: "block"}}>
            <div style={{display: "flex", justifyContent: "center", alignItems: "center", width:"100%", height:"100%"}}>
                <BeatLoader color="red" size={30} />
            </div>
        </div>
    )
}
