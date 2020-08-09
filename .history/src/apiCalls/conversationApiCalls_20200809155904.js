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

  try {
    await axios.get(`/api/privates/user/${userId}`).then((res) => {
      const id = res.data.map((r) => {
        const id = r.members.filter((m) => m !== userId)[0];
        axios.get(`/api/users/${userId}`).then((res) => {
          r = { ...r, user: res.data };
          conversations.push(r);
          setPrivateConversations(conversations);
        });
      });

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

export const getGroupConversations = async (
  userId,
  setGroupConversations,
  dispatch
) => {
  dispatch({
    type: ConversationActionTypes.CONVERSATION_GET_USERS_ALL_GROUP_START,
  });

  const conversations = [];

  try {
    await axios.get(`/api/groups/user/${userId}`).then((res) => {
      const id = res.data.map((r) => {
        const ids = r.members.filter((m) => m !== userId);
        console.log(ids)
        axios.get(`/api/users/${userId}`).then((res) => {
          r = { ...r, user: res.data };
          conversations.push(r);
          setGroupConversations(conversations);
        });
      });

      dispatch({
        type: ConversationActionTypes.CONVERSATION_GET_USERS_ALL_GROUP_SUCCESS,
      });
    });
  } catch (error) {
    dispatch({
      type: ConversationActionTypes.CONVERSATION_GET_USERS_ALL_GROUP_FAILURE,
      payload: error,
    });
  }
};
