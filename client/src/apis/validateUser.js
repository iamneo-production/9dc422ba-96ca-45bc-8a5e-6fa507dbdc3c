import axios from "axios";
export const ValidateUser = async (username, password) => {
    return await axios({
        method: 'POST',
        url: `https://neobank-nu.vercel.app/api/user/validateuser`,
        data: {
            username: username,
            password: password
        }
    })
}
