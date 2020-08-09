import axios from "axios";

export const getUser = async (userId) => {
  let user = null;
  try {
    await axios.get(`/api/users/${userId}`)
  } catch (error) {
    //TODO
  }
};
