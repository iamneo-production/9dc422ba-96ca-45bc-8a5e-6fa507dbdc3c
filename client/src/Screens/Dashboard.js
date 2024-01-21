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

const Dashboard = ({ notOn, setnotOn, setPayeeAccountNo }) => {
    //hooks
    const { setLoader } = useLoader()
    const { username, authToken } = useAuthContext()
    const { setAccountData, setUserData, setTData, userData, accountData, setExpense, setIncome } = useDataContext()

    //states
    const [dashboardEnable, setDashboaredEnable] = useState({
        opacity: "5%",
        display: "block"
    })

    const fixTransactions = async (transactions, accountNo) => {
        // console.log(transactions);
        const dummy = []
        for (let i = 0; i < transactions.length; i++) {
            const isCredited = transactions[i]?.to === accountNo ? true : false
            const obj = {
                date: transactions[i]?.transferedOn.slice(0, 10),
                time: transactions[i]?.transferedOn.slice(11, 16),
                transID: transactions[i]?._id.toString().slice(5),
                isCredited: isCredited,
                from: transactions[i]?.from,
                amount: transactions[i]?.amount,
                remark: transactions[i]?.remark
            }
            dummy.push(obj)
        }
        setTData(dummy)
        var inc = 0;
        var exp = 0;
        for (let i = 0; i < dummy.length; i++) {
            if (dummy[i].isCredited === true) {
                let val = parseInt(dummy[i].amount);
                inc += val;
            } else {
                let val = parseInt(dummy[i].amount)
                exp += val;
            }
        }
        console.log(inc, exp);
        setIncome(inc);
        setExpense(exp);
        setLoader(false);
    }
    async function transactionFunctions(accountNo) {
        setLoader(true)
        try {
            const res3 = await axios({
                method: 'GET',
                url: `${baseUrl}transaction/trasanctionsummary/${accountNo}`,
            })
            fixTransactions(res3.data.summary.responseSummary, accountNo)
        }
        catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        async function CallApi() {
            setLoader(true)
            try {
                const res1 = await axios({
                    method: 'GET',
                    url: `${baseUrl}account/getaccountdetailsbyusername/${username}`,
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json",
                        "x-auth-token": authToken
                    }
                })
                await transactionFunctions(res1.data.accountDetails.accountNo)
                setAccountData(res1.data.accountDetails)
            }
            catch (err) {
                console.log(err);
            }
            try {
                const res2 = await axios({
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
                setUserData(res2.data[0])

            } catch (e) {
                console.log(e);
            }
            setLoader(false)
        }
        if (accountData === null) {
            console.log(accountData, "data doesn't exits", userData);
            CallApi();
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