import MessageActionTypes from "./MessageActionTypes";

export const messageGetGroupsAllMessagesStart = ( conversation) => ({
    type: MessageActionTypes.MESSAGE_GET_GROUPS_ALL_MESSAGES_START,
  });
  
  export const messageGetGroupsAllMessagesSuccess = (messages) => ({
    type: MessageActionTypes.MESSAGE_GET_GROUPS_ALL_MESSAGES_SUCCESS,
    payload: messages,
  });
  
  export const messageGetGroupsAllMessagesFailure = (error) => ({
    type: MessageActionTypes.MESSAGE_GET_GROUPS_ALL_MESSAGES_FAILURE,
    payload: error,
  });