import ConversationActionTypes from "./ConversationActionTypes";

const ConversationReducer = (state, action) => {
  switch (action.type) {
    case ConversationActionTypes.CONVERSATION_ADD_PRIVATE_START:
      return {
        ...state,
        isFetching: true,
      };
    case ConversationActionTypes.CONVERSATION_ADD_PRIVATE_SUCCESS:
      return {
        ...state,
        isFetching: false,
      };
    case ConversationActionTypes.CONVERSATION_ADD_PRIVATE_FAILURE:
      return {
        ...state,
        isFetching: false,
      };
    case ConversationActionTypes.CONVERSATION_ADD_GROUP_START:
      return {
        ...state,
        isFetching: true,
      };
    case ConversationActionTypes.CONVERSATION_ADD_GROUP_SUCCESS:
      return {
        ...state,
        groupConversations: [...state.groupConversations, ...action.payload],
        isFetching: false,
      };
    case ConversationActionTypes.CONVERSATION_ADD_GROUP_FAILURE:
      return {
        ...state,
        isFetching: false,
      };
    case ConversationActionTypes.CONVERSATION_GET_USERS_ALL_PRIVATE_START:
      return {
        ...state,
        isFetching: true,
      };
    case ConversationActionTypes.CONVERSATION_GET_USERS_ALL_PRIVATE_SUCCESS:
      return {
        ...state,
        conversations: {
          ...state.conversations,
          privateConversations: action.payload,
        },
        isFetching: false,
      };
    case ConversationActionTypes.CONVERSATION_GET_USERS_ALL_PRIVATE_FAILURE:
      return {
        ...state,
        isFetching: false,
      };
      case ConversationActionTypes.CONVERSATION_GET_USERS_ALL_GROUP_START:
      return {
        ...state,
        isFetching: true,
      };
    case ConversationActionTypes.CONVERSATION_GET_USERS_ALL_GROUP_SUCCESS:
      return {
        ...state,
        conversations: {
          ...state.conversations,
          groupConversations: action.payload,
        },
        isFetching: false,
      };
    case ConversationActionTypes.CONVERSATION_GET_USERS_ALL_GROUP_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default ConversationReducer;
