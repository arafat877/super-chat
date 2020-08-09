import React, { createContext, useReducer } from "react";
import ConversationReducer from "./ConversationReducer";

const INITIAL_STATE = {
  conversations: {
    privateConversations:[],
    groupConversations:[],
  },
  isFetching: false,
  error: null,
};

export const ConversationContext = createContext(INITIAL_STATE);

export const ConversationContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ConversationReducer, INITIAL_STATE);

  return (
    <ConversationContext.Provider
      value={{
        conversations: state.conversations,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </ConversationContext.Provider>
  );
};
