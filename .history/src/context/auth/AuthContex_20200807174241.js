import React, { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
  currenUuser: {
    _id: null,
    token:null,
    name: null,
    email: null,
    profilePicture: null,
    createdAt: null
  },
  isFetching: false,
  error: null,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

    return (
        <AuthContext.Provider value={{
            currentUser: state.currentUser,
            isFetching: state.isFetching,
            error:state.error,
            dispatch
        }}>
            {children}
        </AuthContext.Provider>
    )
}
