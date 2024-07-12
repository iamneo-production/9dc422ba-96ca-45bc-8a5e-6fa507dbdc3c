import axios from "axios";

export const ValidateUser = async (username, password) => {
    return await axios({
        method: 'POST',
        url: `${process.env.REACT_APP_SERVER}api/user/validateuser`,
        data: {
            username: username,
            password: password
        }
    })
}
