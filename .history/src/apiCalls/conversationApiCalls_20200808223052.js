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
  let conversations;

  try {
    await axios.get(`/api/privates/user/${userId}`).then((res) => {
      conversations = res.data;
      dispatch({
        type:
          ConversationActionTypes.CONVERSATION_GET_USERS_ALL_PRIVATE_SUCCESS,
      });
    });
    let user;
    conversations.map(c=>{
       user = getUser(c._id)
    })
    console.log(user)
  } catch (error) {
    dispatch({
      type: ConversationActionTypes.CONVERSATION_GET_USERS_ALL_PRIVATE_FAILURE,
      payload: error,
    });
  }
};
