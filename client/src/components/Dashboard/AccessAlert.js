import React from 'react'
import { Alert } from "@mui/lab";
import { Link } from "react-router-dom";

const AccessAlert = ({ dashboardEnable }) => {
    return (
        <div style={{ display: dashboardEnable.display, position: "fixed", zIndex: "100", width: "100%", height: "500px" }}>
            <div style={{ width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Alert style={{ width: "300px", height: "200px" }} variant="filled" severity="info">
                    <Link to={"/login"} style={{ color: "white", fontSize: "30px" }}>
                        To Check your Dashboard Kindly Login
                    </Link>
                </Alert>
            </div>
        </div>
    )
}

export default AccessAlert