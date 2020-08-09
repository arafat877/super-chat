import axios from "axios";

export const getUser = async (userId) => {
  let user;
  try {
    return await axios.get(`/api/privates/user/${userId}`)
  } catch (error) {
    //TODO
  }
};
