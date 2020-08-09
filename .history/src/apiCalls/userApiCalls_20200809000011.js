import axios from "axios";

export const getUser = async (userId) => {
  let user;
  try {
    await axios.get(`/api/privates/user/${userId}`).then(res=> user = res.data);
  } catch (error) {
    //TODO
  }
};
