import axios from "axios";

const getUser = async (userId) => {
  let user;
  try {
    await axios.get(`/api/privates/user/${userId}`).then(res=> user = res.data);
    return user;
  } catch (error) {
    //TODO
  }
};
