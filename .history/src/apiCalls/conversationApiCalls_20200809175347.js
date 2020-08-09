import ConversationActionTypes from "../context/conversation/ConversationActionTypes";
import axios from "axios";

export const getPrivateConversations = async (
  userId,
  setPrivateConversations,
  dispatch
) => {
  dispatch({
    type: ConversationActionTypes.CONVERSATION_GET_USERS_ALL_PRIVATE_START,
  });

  const conversations = [];

  const send = (conv)=>{
    dispatch({
      type:
        ConversationActionTypes.CONVERSATION_GET_USERS_ALL_PRIVATE_SUCCESS,
      payload: conv,
    });
  }

  try {
    await axios.get(`/api/privates/user/${userId}`).then((res) => {
      const counter = res.data.length
      console.log(counter)
      res.data.map((r) => {
        const id = r.members.filter((m) => m !== userId)[0];
         axios.get(`/api/users/${id}`).then((res) => {
          r = { ...r, user: res.data };
          conversations.push(r);
          conversations.length === counter && send(conversations)
        });
      });
    });
  } catch (error) {
    dispatch({
      type: ConversationActionTypes.CONVERSATION_GET_USERS_ALL_PRIVATE_FAILURE,
      payload: error,
    });
  }
};

export const getGroupConversations = async (
  userId,
  setGroupConversations,
  dispatch
) => {
  dispatch({
    type: ConversationActionTypes.CONVERSATION_GET_USERS_ALL_GROUP_START,
  });

  const conversations = [];
  const users = [];

  try {
    await axios.get(`/api/groups/user/${userId}`).then((res) => {
      res.data.map((r) => {
        const ids = r.members.filter((m) => m !== userId);
        ids.map((i) => {
          axios.get(`/api/users/${i}`).then((res) => {
            users.push(res.data);
            r = { ...r, users };
            conversations.push(r);
            setGroupConversations(conversations);
          });
        });
      });

      dispatch({
        type: ConversationActionTypes.CONVERSATION_GET_USERS_ALL_GROUP_SUCCESS,
        payload: conversations,
      });
    });
  } catch (error) {
    dispatch({
      type: ConversationActionTypes.CONVERSATION_GET_USERS_ALL_GROUP_FAILURE,
      payload: error,
    });
  }
};
