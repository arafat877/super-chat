import axios from "axios";

export const getUser = async (userId) => {
  try {
     return await axios.get(`/api/privates/users/${userId}`)
  } catch (error) {
    //TODO
  }
};
