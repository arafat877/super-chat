import axios from "axios";

export const getUser = async (userId) => {
  try {
    await axios.get(`/api/privates/user/${userId}`).then((res) => res.data);
  } catch (error) {
      //TODO
  }
};
