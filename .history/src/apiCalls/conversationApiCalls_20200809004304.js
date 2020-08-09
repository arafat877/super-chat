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

  const getU = async (conv, conv2) => {
    conv2.map(async (c) => {
      await axios.get(`/api/users/${userId}`).then((res) => {
        conv.push({ ...c, user: res.data });
      });
    });
  };

  try {
    await axios
      .get(`/api/privates/user/${userId}`)
      .then(async (res) => {
        // res.data.map(async (r) => {
        //   await axios.get(`/api/users/${userId}`).then((res) => {
        //     conversations.push({ ...r, user: res.data });
        //   });
        // });
        await getU(conversations, res.data).then(console.log("baban"))
        dispatch({
          type:
            ConversationActionTypes.CONVERSATION_GET_USERS_ALL_PRIVATE_SUCCESS,
        });
      })
      .then(console.log("anan"));
  } catch (error) {
    dispatch({
      type: ConversationActionTypes.CONVERSATION_GET_USERS_ALL_PRIVATE_FAILURE,
      payload: error,
    });
  }
};
