import React, { useEffect, useState } from "react";

import Footer from "../components/Global/Footer";
import NavBar from "../components/Global/header";
import NotiComp from "../components/Global/notification_component";
import AccessAlert from "../components/Dashboard/AccessAlert";
import { Loader } from "../components/Global/loader";
import DashboardContainer from "../components/Dashboard/Container";
import { useAuthContext } from "../hooks/useAuthContext";
import axios from 'axios';
import { useDataContext } from "../hooks/useDataContext";
import { useLoader } from "../hooks/useLoader";

const baseUrl = "https://neobank-nu.vercel.app/api/"

const Dashboard = ({ notOn, setnotOn }) => {
    //hooks
    const { setLoader } = useLoader()
    const { username, authToken } = useAuthContext()
    const { setAccountData, setUserData } = useDataContext()

    //states

    const [dashboardEnable, setDashboaredEnable] = useState({
        opacity: "5%",
        display: "block"
    })
    useEffect(() => {
        async function CallApi() {
            setLoader(true)
            try {
                const res = await axios({
                    method: 'GET',
                    url: `${baseUrl}account/getaccountdetailsbyusername/${username}`,
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json",
                        "x-auth-token": authToken
                    }
                })
                // console.log(res);
                setAccountData(res.data.accountDetails)
            }
            catch (err) {
                console.log(err);
            }
            try {
                const res = await axios({
                    method: 'GET',
                    mode: 'no-cors',
                    url: `${baseUrl}user/getuserbyuserrwg/${username}`,
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json",
                        "x-auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImxhaGlyYWt1bWFyYSIsImlhdCI6MTY5NzUzNTY1M30.-7H67o6HF_Wb4ZcMk-gMKzfVMShpFQzbUVmMpKZI33U"
                    }
                })
                // console.log(res);
                setUserData(res.data[0])

            } catch (e) {
                console.log(e);
            }
            if (username) {
                setDashboaredEnable({
                    opacity: "100",
                    display: "none"
                })

            } else if (!username) {
                setDashboaredEnable({
                    opacity: "5%",
                    display: "block"
                })
            }
            setLoader(false)
        }
        CallApi();

    }, [])



    return (
        <>
            <NavBar
                setnotOn={setnotOn}
            />
            <Loader />
            <AccessAlert
                dashboardEnable={dashboardEnable}
            />
            <NotiComp
                notOn={notOn}
            />
            <DashboardContainer
                dashboardEnable={dashboardEnable}
                setDashboaredEnable={setDashboaredEnable}
                setnotOn={setnotOn}
            />
            <div style={{ height: "80px" }}>
            </div>
            <Footer />
        </>
    )
}
export default Dashboard;