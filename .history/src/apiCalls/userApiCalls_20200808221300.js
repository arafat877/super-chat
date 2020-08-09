import axios from "axios";

export const getUser = async (userId) => {
  let user;
  try {
    await axios.get(`/api/users/${userId}`).then(function (result) {
      user = result;
    });
  } catch (error) {
    //TODO
  }

  return user;
};
