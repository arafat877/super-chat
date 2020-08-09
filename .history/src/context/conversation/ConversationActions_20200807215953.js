import ConversationActionTypes from "./ConversationActionTypes";

export const conversationAddStart = (type,conversation) => ({
  type: ConversationActionTypes.CONVERSATION_ADD_START,
  payload: { type, conversation },
});

export const conversationAddSuccess = (conversation) => ({
  type: ConversationActionTypes.CONVERSATION_ADD_SUCCESS,
  payload: { conversation }
});

export const conversationAddFailure = (error) => ({
  type: ConversationActionTypes.CONVERSATION_ADD_FAILURE,
  payload: error,
});

export const conversationGetPrivateByIdStart = (id) => ({
    type: ConversationActionTypes.CONVERSATION_GET_PRIVATE_BY_ID_START,
    payload: { id },
  });
  
  export const conversationGetPrivateByIdSuccess = (privateConversations) => ({
    type: ConversationActionTypes.CONVERSATION_GET_PRIVATE_BY_ID_SUCCESS,
    payload: { privateConversations }
  });
  
  export const conversationGetPrivateByIdFailure = (error) => ({
    type: ConversationActionTypes.CONVERSATION_GET_PRIVATE_BY_ID_FAILURE,
    payload: error,
  });


