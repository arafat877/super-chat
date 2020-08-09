import AuthActionTypes from "../context/auth/AuthActionTypes";
import axios from "axios";
import { useHistory } from "react-router-dom";

const history = useHistory();

export const registerUser = async (credentials, dispatch) => {
  dispatch({ type: AuthActionTypes.AUTH_REGISTER_START });
  try {
    await axios.post("/api/user/register", credentials).then((res) => {
      dispatch({ type: AuthActionTypes.AUTH_REGISTER_SUCCESS });
    });
  } catch (error) {
    dispatch({ type: AuthActionTypes.AUTH_REGISTER_FAILURE, payload: error });
  }
};

export const loginUser = async (credentials, dispatch) => {
  dispatch({ type: AuthActionTypes.AUTH_LOGIN_START });
  try {
    await axios.post("/api/user/login", credentials).then((res) => {
      dispatch({ type: AuthActionTypes.AUTH_LOGIN_SUCCESS, payload: res.data });
      history.push("/chat");
    });
  } catch (error) {
    dispatch({ type: AuthActionTypes.AUTH_LOGIN_FAILURE, payload: error });
  }
};
