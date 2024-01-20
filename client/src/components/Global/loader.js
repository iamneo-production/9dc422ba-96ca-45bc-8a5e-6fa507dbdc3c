import { BeatLoader } from "react-spinners"
import React from "react"
import { useLoader } from "../../hooks/useLoader"
export const Loader = () => {
    const { loader } = useLoader()
    return (
        <div style={{ zIndex: "999", position: "absolute", opacity: "50%", backgroundColor: "grey", width: "100%", height: "700px", display: loader ? "block" : "none" }}>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "100%" }}>
                <BeatLoader color="red" size={30} />
            </div>
        </div>
    )
}
