import { createContext, useReducer } from "react";


export const AuthContext = createContext()

export const authReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            window.sessionStorage.setItem('username', action.payload.username);
            window.sessionStorage.setItem('authToken', action.payload.authToken);

            return {
                username: action.payload.username,
                authToken: action.payload.authToken

            }
        case 'LOGOUT':
            window.sessionStorage.removeItem("username");
            window.sessionStorage.removeItem("authToken")
            return { username: null, authToken: null }
        default:
            return state
    }
}
export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, {
        username: window.sessionStorage.getItem('username') || null,
        authToken: window.sessionStorage.getItem('authToken') || null
    })
    return (
        <AuthContext.Provider value={{ ...state, dispatch }}>
            {children}
        </AuthContext.Provider>
    )
}