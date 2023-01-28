import { createContext, useReducer } from "react";


export const AuthContext=createContext()
export const authReducer=(state,action)=>{
    switch (action.type){
        case 'LOGIN':
            window.localStorage.setItem("username", action.payload)
            return {username: action.payload}
        case 'LOGOUT':
            window.localStorage.removeItem("username")
            return {username:null}
        default:
            return state
    }
}
export const AuthContextProvider=({children})=>{
    const [state, dispatch]=useReducer(authReducer,{
        username:null
    })
    // console.log('AuthContext state: ',state);
    return(
        <AuthContext.Provider value={{...state, dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}