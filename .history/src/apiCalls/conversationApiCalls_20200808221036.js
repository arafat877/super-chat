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
  let user1;
  const aa = async (id) => {
    return await getUser(id).then((res) => (user1 = res.data));
  };

  try {
    await axios.get(`/api/privates/user/${userId}`).then((res) => {
      res.data.map((r) => {
        const id = r.members.filter((f) => f.id !== userId)[0];
        const user = aa(id) 
        conversations.push({ ...r, user });
    });
    console.log(conversations[0].user);
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
