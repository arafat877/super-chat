import axios from "axios";

export const getUser = async (userId) => {
  try {
    return await axios.get(`/api/users/${userId}`)
  } catch (error) {
    //TODO
  }
};
