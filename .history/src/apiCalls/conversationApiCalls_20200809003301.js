import ConversationActionTypes from "../context/conversation/ConversationActionTypes";
import axios from "axios";
import { getUser } from "./userApiCalls";

export const getPrivateConversations = async (
  userId,
  setPrivateConversations,
  dispatch
) => {
  dispatch({
    type: ConversationActionTypes.CONVERSATION_GET_USERS_ALL_PRIVATE_START,
  });

  const conversations = [];
  try {
    await axios.get(`/api/privates/user/${userId}`).then((res) => {
      res.data
        .map(async (r) => {
          await axios.get(`/api/privates/user/${userId}`).then((res) => {
            conversations.push({ ...r, user: res.data });
          });
        })
      dispatch({
        type:
          ConversationActionTypes.CONVERSATION_GET_USERS_ALL_PRIVATE_SUCCESS,
      });
    }).then(console.log(conversations));;
  } catch (error) {
    dispatch({
      type: ConversationActionTypes.CONVERSATION_GET_USERS_ALL_PRIVATE_FAILURE,
      payload: error,
    });
  }
};
