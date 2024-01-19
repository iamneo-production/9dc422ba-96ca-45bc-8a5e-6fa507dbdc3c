import axios from "axios";
import { useAuthContext } from "../hooks/useAuthContext";
const baseUrl = "https://n-eo-bank.vercel.app/api/"
export const ValidateUser = async (username, password) => {
    console.log(username, password);
    return await axios({
        method: 'POST',

        url: `https://n-eo-bank.vercel.app/api/user/validateuser`,
        data: {
            username: username,
            password: password
        }
    })
}


export const useUserDetails = async (setAccountData, setUserDataFetch) => {
    const { username, authToken } = useAuthContext();
    let res1;
    let res2;
    await axios.all([
        await axios({
            method: 'GET',
            mode: 'no-cors',
            url: `${baseUrl}account/getaccountdetailsbyusername/${username}`,
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "x-auth-token": authToken
            }
        }).then(response => {
            // console.log({ response });
            res1 = response
        }).catch(err => console.log(err)),


        await axios({
            method: 'GET',
            mode: 'no-cors',
            url: `${baseUrl}user/getuserbyuserrwg/${username}`,
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "x-auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImxhaGlyYWt1bWFyYSIsImlhdCI6MTY5NzUzNTY1M30.-7H67o6HF_Wb4ZcMk-gMKzfVMShpFQzbUVmMpKZI33U"
            }
        }).then(response => {
            // console.log(response);
            res2 = response
        }).catch(err => console.log(err))
    ])
    // console.log(res2);
    setAccountData(res1.data.accountDetails);
    setUserDataFetch(res2.data[0])
}