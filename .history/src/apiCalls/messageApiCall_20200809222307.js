import MessageActionTypes from "../context/message/MessageActionTypes";
import axios from "axios";

export const getPrivateConversations = async (groupId, dispatch) => {
  dispatch({
    type: MessageActionTypes.MESSAGE_GET_GROUPS_ALL_MESSAGES_START,
  });

  try {
  } catch (error) {
    dispatch({
      type: MessageActionTypes.MESSAGE_GET_GROUPS_ALL_MESSAGES_FAILURE,
      payload: error,
    });
  }
};
