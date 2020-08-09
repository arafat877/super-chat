import axios from "axios";

export const getUser = async (userId, p) => {
  let user;
  try {
    await axios.get(`/api/users/${userId}`).then((res) => {
      user = res.data;
    });
    return user;
  } catch (error) {
    //TODO
  }
};
