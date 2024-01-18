import { createContext, useReducer } from "react";


export const AuthContext = createContext()
export const authReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            window.localStorage.setItem("username", action.payload.username)
            window.localStorage.setItem("username", action.payload.authToken)

            return {
                username: action.payload,
                authToken: action.payload.authToken

            }
        case 'LOGOUT':
            window.localStorage.removeItem("username");
            return { username: null, authToken: null }
        default:
            return state
    }
}
export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, {
        username: null,
        authToken: null
    })
    return (
        <AuthContext.Provider value={{ ...state, dispatch }}>
            {children}
        </AuthContext.Provider>
    )
}