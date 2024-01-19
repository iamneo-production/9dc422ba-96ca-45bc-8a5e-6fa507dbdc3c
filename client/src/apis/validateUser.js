import axios from "axios";
export const ValidateUser = async (username, password) => {
    return await axios({
        method: 'POST',
        url: `https://n-eo-bank.vercel.app/api/user/validateuser`,
        data: {
            username: username,
            password: password
        }
    })
}
