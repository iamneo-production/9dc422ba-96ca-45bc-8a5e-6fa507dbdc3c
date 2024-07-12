import React, { useEffect, useState } from "react";
import Footer from "../components/Global/Footer";
import NavBar from "../components/Global/header";
import NotiComp from "../components/Global/notification_component";
import AccessAlert from "../components/Dashboard/AccessAlert";
import { Loader } from "../components/Global/loader";
import DashboardContainer from "../components/Dashboard/Container";
import { useAuthContext } from "../hooks/useAuthContext";
import { useDataContext } from "../hooks/useDataContext";
import { useRefreshUser } from "../hooks/useRefreshUser";


const Dashboard = ({ notOn, setnotOn, setPayeeAccountNo }) => {
    //hooks
    const { username } = useAuthContext()
    const { userData, accountData } = useDataContext()
    const [refreshUser] = useRefreshUser()

    //states
    const [dashboardEnable, setDashboaredEnable] = useState({
        opacity: "5%",
        display: "block"
    })



    useEffect(() => {
        const reload = async () => {
            await refreshUser()
        }
        if (accountData === null) {
            console.log(accountData, "data doesn't exits", userData);
            reload();
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

        // eslint-disable-next-line
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
                setnotOn={setnotOn}
                setPayeeAccountNo={setPayeeAccountNo}
            />
            <div style={{ height: "100px" }}>
            </div>
            <Footer />
        </>
    )
}
export default Dashboard;