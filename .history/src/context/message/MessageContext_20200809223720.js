import React, { createContext, useReducer } from "react";
import MessageReducer from "./MessageReducer";

const INITIAL_STATE = {
  messages: [],
  isFetching: false,
  error: null,
};

export const MessageContext = createContext(INITIAL_STATE);

export const MessageContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(MessageReducer, INITIAL_STATE);

  return (
    <MessageContext.Provider
      value={{
        messages: state.messages,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </MessageContext.Provider>
  );
};
