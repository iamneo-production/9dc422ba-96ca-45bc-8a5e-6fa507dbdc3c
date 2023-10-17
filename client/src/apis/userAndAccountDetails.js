import axios from "axios";
import { useAuthContext } from "../hooks/useAuthContext";
const baseUrl = "https://n-eo-bank.vercel.app/api/"
export async function ValidateUser(props) {
    console.log({ props });
    // const send = JSON.stringify(props)
    return axios({
        method: 'POST',
        mode: 'no-cors',
        url: "http://localhost:3000/api/user/validateuser",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        data: {
            username: props.username,
            password: props.password
        }
    }).then(response => { console.log(response); })
        .catch(err => console.log(err));
    // return fetch(
    //     'http://localhost:3000/api/user/validateuser',
    //     {
    //         method: 'POST',
    //         mode: 'no-cors',
    //         headers: new Headers(
    //             {
    //                 "Content-Type": "application/json",
    //                 "Accept": "application/json"
    //             }
    //         ),
    //         body: JSON.stringify({
    //             username: props.username,
    //             password: props.password
    //         }),
    //     }
    // ).then(response => { console.log(response); })
    //     .catch(err => console.log(err))
    // return await axios.post(
    //     `${baseUrl}/user/validateuser`,props)
}

export async function useUserDetails(setAccountData, setUserDataFetch) {
    const { username } = useAuthContext();
    const token = "";
    let res1;
    let res2;
    await axios.all([
        await axios({
            method: 'GET',
            mode: 'no-cors',
            url: `http://localhost:3000/api/account/getaccountdetailsbyusername/${username}`,
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "x-auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImxhaGlyYWt1bWFyYSIsImlhdCI6MTY5NzUzNTY1M30.-7H67o6HF_Wb4ZcMk-gMKzfVMShpFQzbUVmMpKZI33U"
            }
        }).then(response => {
            // console.log({ response });
            res1 = response
        }).catch(err => console.log(err)),


        // axios({
        //     method: "get",
        //     mode: 'no-cors',
        //     url: `${baseUrl}account/getaccountdetailsbyusername/${username}`,
        // }).then((res) => {
        //     console.log({ res });
        //     setaccountData(res.data.accountDetails)
        // }).catch((e) => console.log(e)),
        await axios({
            method: 'GET',
            mode: 'no-cors',
            url: `http://localhost:3000/api/user/getuserbyuserrwg/${username}`,
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