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
      res.data.map(r=>{
        console.log(r)
    })
      dispatch({
        type:
          ConversationActionTypes.CONVERSATION_GET_USERS_ALL_PRIVATE_SUCCESS,
      });
    });

  } catch (error) {
    dispatch({
      type: ConversationActionTypes.CONVERSATION_GET_USERS_ALL_PRIVATE_FAILURE,
      payload: error,
    });
  }
};