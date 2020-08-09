import ConversationActionTypes from "./ConversationActionTypes";

export const conversationAddPrivateStart = ( conversation) => ({
  type: ConversationActionTypes.CONVERSATION_ADD_PRIVATE_START,
  payload: { conversation },
});

export const conversationAddPrivateSuccess = (conversation) => ({
  type: ConversationActionTypes.CONVERSATION_ADD_PRIVATE_SUCCESS,
  payload: { conversation },
});

export const conversationAddPrivateFailure = (error) => ({
  type: ConversationActionTypes.CONVERSATION_ADD_PRIVATE_FAILURE,
  payload: error,
});

export const conversationAddGroupStart = ( conversation) => ({
    type: ConversationActionTypes.CONVERSATION_ADD_GROUP_START,
    payload: { conversation },
  });
  
  export const conversationAddGroupSuccess = (conversation) => ({
    type: ConversationActionTypes.CONVERSATION_ADD_GROUP_SUCCESS,
    payload: { conversation },
  });
  
  export const conversationAddGroupFailure = (error) => ({
    type: ConversationActionTypes.CONVERSATION_ADD_GROUP_FAILURE,
    payload: error,
  });

export const conversationGetPrivateByIdStart = (id) => ({
  type: ConversationActionTypes.CONVERSATION_GET_PRIVATE_BY_ID_START,
  payload: { id },
});

export const conversationGetPrivateByIdSuccess = (privateConversations) => ({
  type: ConversationActionTypes.CONVERSATION_GET_PRIVATE_BY_ID_SUCCESS,
  payload: { privateConversations },
});

export const conversationGetPrivateByIdFailure = (error) => ({
  type: ConversationActionTypes.CONVERSATION_GET_PRIVATE_BY_ID_FAILURE,
  payload: error,
});

export const conversationGetGroupByIdStart = (id) => ({
  type: ConversationActionTypes.CONVERSATION_GET_GROUP_BY_ID_START,
  payload: { id },
});

export const conversationGetGroupByIdSuccess = (groupConversations) => ({
  type: ConversationActionTypes.CONVERSATION_GET_GROUP_BY_ID_SUCCESS,
  payload: { groupConversations },
});

export const conversationGetGroupByIdFailure = (error) => ({
  type: ConversationActionTypes.CONVERSATION_GET_GROUP_BY_ID_FAILURE,
  payload: error,
});

export const conversationGetUsersAllPrivateStart = (userId) => ({
  type: ConversationActionTypes.CONVERSATION_GET_USERS_ALL_PRIVATE_START,
  payload: { userId },
});

export const conversationGetUsersAllPrivateSuccess = (
  privateConversations
) => ({
  type: ConversationActionTypes.CONVERSATION_GET_USERS_ALL_PRIVATE_SUCCESS,
  payload: privateConversations ,
});

export const conversationGetUsersAllPrivateFailure = (error) => ({
  type: ConversationActionTypes.CONVERSATION_GET_USERS_ALL_PRIVATE_FAILURE,
  payload: error,
});

export const conversationGetUsersAllGroupStart = (userId) => ({
  type: ConversationActionTypes.CONVERSATION_GET_USERS_ALL_GROUP_START,
  payload: { userId },
});

export const conversationGetUsersAllGroupSuccess = (groupConversations) => ({
  type: ConversationActionTypes.CONVERSATION_GET_USERS_ALL_GROUP_SUCCESS,
  payload: { groupConversations },
});

export const conversationGetUsersAllGroupFailure = (error) => ({
  type: ConversationActionTypes.CONVERSATION_GET_USERS_ALL_GROUP_FAILURE,
  payload: error,
});

export const conversationAddLastMessageStart = (id, lastMessage) => ({
  type: ConversationActionTypes.CONVERSATION_ADD_LAST_MESSAGE_START,
  payload: { id, lastMessage },
});

export const conversationAddLastMessageSuccess = (conversation) => ({
  type: ConversationActionTypes.CONVERSATION_ADD_LAST_MESSAGE_SUCCESS,
  payload: { conversation },
});

export const conversationAddLastMessageFailure = (error) => ({
  type: ConversationActionTypes.CONVERSATION_ADD_LAST_MESSAGE_FAILURE,
  payload: error,
});

export const conversationLeaveAGroupStart = (id, userId) => ({
  type: ConversationActionTypes.CONVERSATION_LEAVE_A_GROUP_START,
  payload: { id, userId },
});

export const conversationLeaveAGroupSuccess = () => ({
  type: ConversationActionTypes.CONVERSATION_LEAVE_A_GROUP_SUCCESS,
});

export const conversationLeaveAGroupFailure = (error) => ({
  type: ConversationActionTypes.CONVERSATION_LEAVE_A_GROUP_FAILURE,
  payload: error,
});

export const conversationAddPeopleToTheGroupStart = (id, users) => ({
  type: ConversationActionTypes.CONVERSATION_ADD_PEOPLE_TO_THE_GROUP_START,
  payload: { id, users },
});

export const conversationAddPeopleToTheGroupSuccess = (groupConversations) => ({
  type: ConversationActionTypes.CONVERSATION_ADD_PEOPLE_TO_THE_GROUP_SUCCESS,
  payload: groupConversations,
});

export const conversationAddPeopleToTheGroupFailure = (error) => ({
  type: ConversationActionTypes.CONVERSATION_ADD_PEOPLE_TO_THE_GROUP_FAILURE,
  payload: error,
});
