import MessageActionTypes from "./MessageActionTypes";

const MessageReducer = (state, action) => {
  switch (action.type) {
    case MessageActionTypes.MESSAGE_GET_GROUPS_ALL_MESSAGES_START:
      return {
        ...state,
        isFetching: true,
      };
    case MessageActionTypes.MESSAGE_GET_GROUPS_ALL_MESSAGES_SUCCESS:
      return {
        ...state,
        messages: action.payload,
        isFetching: false,
      };
    case MessageActionTypes.MESSAGE_GET_GROUPS_ALL_MESSAGES_FAILURE:
      return {
        ...state,
        isFetching: false,
      };
    default:
      return state;
  }
};

export default MessageReducer;
