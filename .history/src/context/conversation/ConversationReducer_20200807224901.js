import ConversationActionTypes from "./ConversationActionTypes";

const ConversationReducer = (state, action) => {
  switch (action.type) {
    case ConversationActionTypes.CONVERSATION_ADD_START:
      return {
        ...state,
        isFetching: true,
      };
    case ConversationActionTypes.CONVERSATION_ADD_SUCCESS:
      return {
        ...state,
        isFetching: false,
      };
    case ConversationActionTypes.CONVERSATION_ADD_FAILURE:
      return {
        ...state,
        isFetching: false,
      };
    default:
      return state;
  }
};

export default ConversationReducer;
