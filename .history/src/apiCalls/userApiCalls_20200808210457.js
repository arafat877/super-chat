import axios from "axios";

export const getPrivateConversations = async (userId) => {
  try {
    await axios.get(`/api/privates/user/${userId}`).then((res) => res);
  } catch (error) {
      //TODO
  }
};
