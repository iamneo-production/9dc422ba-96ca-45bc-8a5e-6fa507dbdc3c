import axios from "axios";
import { useAuthContext } from "../hooks/useAuthContext";
const baseUrl = "https://n-eo-bank.vercel.app/api/"
export async function ValidateUser(props) {
    console.log(props);
    return await axios.post(
        `${baseUrl}/user/validateuser`,props)
}

export async function useUserDetails({ setaccountData, setuserDataFetch }) {
    const { username } = useAuthContext();
    await axios.all([
        axios({
            method: "get",
            url: `${baseUrl}account/getaccountdetailsbyusername/${username}`,


        }).then((res) => { setaccountData(res.data.accountDetails) }).catch((e) => console.log(e)),

        axios.get(`${baseUrl}user/getuserbyusername/ ${username}`)
            .then(e => { setuserDataFetch(e.data[0]) }).catch((e) => console.log(e))
    ])
}