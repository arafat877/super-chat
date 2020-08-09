import axios from "axios";

export const getUser = async (userId) => {
  let user;
  try {
    await axios.get(`/api/users/${userId}`).then((res) => {
        return user
    });
  } catch (error) {
    //TODO
  }
};
