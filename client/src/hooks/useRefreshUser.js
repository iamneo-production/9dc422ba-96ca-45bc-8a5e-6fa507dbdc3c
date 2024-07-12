import axios from "axios"
import { useAuthContext } from "./useAuthContext"
import { useDataContext } from "./useDataContext"
import { useLoader } from "./useLoader"


const baseUrl = `${process.env.REACT_APP_SERVER}api/`

export const useRefreshUser = () => {
    const { setLoader } = useLoader()
    const { username, authToken } = useAuthContext()
    const { setAccountData, setUserData, setTData, setExpense, setIncome } = useDataContext()
    async function transactionFunctions(accountNo) {
        const fixTransactions = (transactions, accountNo) => {
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
    const refreshUser = async () => {
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
                    "x-auth-token": authToken
                }
            })
            // console.log(res);
            setUserData(res2.data[0])

        } catch (e) {
            console.log(e);
        }
        setLoader(false)
    }
    return [refreshUser]
}