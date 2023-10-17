import axios from "axios";
import { useAuthContext } from "../hooks/useAuthContext";
const baseUrl = "https://n-eo-bank.vercel.app/api/"
export async function ValidateUser(props) {
    console.log(props);
    return fetch(
        'https://n-eo-bank.vercel.app/api/user/validateuser',
        {
            method: 'POST',
            mode: 'no-cors',
            headers: new Headers(
                {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                }
            ),
            body: JSON.stringify(
                props
            )
        }
    ).then(response => { console.log(response); })
        .catch(err => console.log(err))
    // return await axios.post(
    //     `${baseUrl}/user/validateuser`,props)
}

export async function useUserDetails({ setaccountData, setuserDataFetch }) {
    const { username } = useAuthContext();
    await axios.all([
        axios({
            method: "get",
            mode: 'no-cors',
            url: `${baseUrl}account/getaccountdetailsbyusername/${username}`,
        }).then((res) => {
            console.log({ res });
            setaccountData(res.data.accountDetails)
        }).catch((e) => console.log(e)),

        axios.get(`${baseUrl}user/getuserbyusername/ ${username}`)
            .then(e => {
                console.log({ e });
                setuserDataFetch(e.data[0])
            }).catch((e) => console.log(e))
    ])
}