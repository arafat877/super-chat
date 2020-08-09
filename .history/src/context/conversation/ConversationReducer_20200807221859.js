import ConversationActionTypes from "./ConversationActionTypes";

const ConversationReducer = (state, action) => {
  switch (action.type) {
    case ConversationActionTypes.AUTH_REGISTER_START:
        return {
          ...state,
          isFetching: true,
        };
    default:
      return state;
  }
};

export default ConversationReducer