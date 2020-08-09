import axios from "axios";

const getUser = async (userId) => {
  let user;
  try {
    await axios.get(`/api/privates/user/${userId}`);
  } catch (error) {
    //TODO
  }
};
