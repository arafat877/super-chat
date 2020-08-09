import axios from "axios";

export const getUser = async (userId,p) => {
  try {
     await axios.get(`/api/users/${userId}`).then((res) => {
      p.user = res.data
    });
  } catch (error) {
    //TODO
  }
};
