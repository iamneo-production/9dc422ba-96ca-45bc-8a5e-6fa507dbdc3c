import axios from "axios";
import { useAuthContext } from "../hooks/useAuthContext";
const baseUrl = "https://neobank2.vercel.app/api/"
export async function ValidateUser(props) {
    console.log(props);
    return await axios({
        method: "post",
        url: `${baseUrl}user/validateuser`,
        data: props
    })
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