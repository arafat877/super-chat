import AuthActionTypes from "../context/auth/AuthActionTypes";
import axios from "axios";

export const registerUser = async (credentials, dispatch) => {
  dispatch({ type: AuthActionTypes.AUTH_REGISTER_START });
  try {
    await axios.post("http://localhost:5000/api/user/register" , credentials).then((res) => {
      console.log(res)
      dispatch({ type: AuthActionTypes.AUTH_REGISTER_SUCCESS });
    });
  } catch (error) {
    dispatch({ type: AuthActionTypes.AUTH_REGISTER_FAILURE, payload: error });
  }
};

export const useLoginUser = async (credentials, dispatch) => {
    dispatch({ type: AuthActionTypes.AUTH_LOGIN_START });
    try {
      await axios.post(process.env.BACKEND_API_URL + "/user/login", credentials).then((res) => {
          console.log(res.data)
        // dispatch({ type: AuthActionTypes.AUTH_LOGIN_SUCCESS, payload: res.data });
      });
    } catch (error) {
      dispatch({ type: AuthActionTypes.AUTH_LOGIN_FAILURE, payload: error });
    }
  };