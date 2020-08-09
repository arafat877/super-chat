import MessageActionTypes from "../context/message/MessageActionTypes";
import axios from "axios";

export const getGroupMessages = async (groupId, dispatch) => {
  dispatch({
    type: MessageActionTypes.MESSAGE_GET_GROUPS_ALL_MESSAGES_START,
  });

  try {
    await axios.get(`/api/messages/group/${groupId}`).then((res) => {
      dispatch({
        type: MessageActionTypes.MESSAGE_GET_GROUPS_ALL_MESSAGES_SUCCESS,
        payload: res.data,
      });
    });
  } catch (error) {
    dispatch({
      type: MessageActionTypes.MESSAGE_GET_GROUPS_ALL_MESSAGES_FAILURE,
      payload: error,
    });
  }
};
