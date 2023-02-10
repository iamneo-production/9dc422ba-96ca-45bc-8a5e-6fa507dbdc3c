import axios from "axios";
import { useAuthContext } from "../hooks/useAuthContext";

export async function useUserDetails({setaccountData, setuserDataFetch}) {
    const baseUrl="https://neobank2.vercel.app/bankingapp/api/"
    const {username} = useAuthContext();
    await axios.all([
        axios({
            method: "get",
            url: `${baseUrl}account/getaccountdetailsbyusername/${username}`,


        }).then((res) => { setaccountData(res.data.accountDetails) }).catch((e) => console.log(e)),

        axios.get(`${baseUrl}user/getuserbyusername/ ${username}`)
            .then(e => { setuserDataFetch(e.data[0]) }).catch((e) => console.log(e))
    ])
}