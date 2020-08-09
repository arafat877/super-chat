import AuthActionTypes from "./AuthActionTypes";

//REGISTER USER
export const authRegisterStart = (credentials) => ({
  type: AuthActionTypes.AUTH_REGISTER_START,
  payload: { credentials },
});

export const authRegisterSuccess = () => ({
  type: AuthActionTypes.AUTH_REGISTER_SUCCESS,
});

export const authRegisterFailure = (error) => ({
  type: AuthActionTypes.AUTH_REGISTER_FAILURE,
  payload: error,
});

//LOGIN USER
export const authLoginStart = (credentials) => ({
  type: AuthActionTypes.AUTH_LOGIN_START,
  payload: { credentials },
});

export const authLoginSuccess = (user) => ({
  type: AuthActionTypes.AUTH_LOGIN_SUCCESS,
  payload: user,
});

export const authLoginFailure = (error) => ({
  type: AuthActionTypes.AUTH_LOGIN_FAILURE,
  payload: error,
});

//LOGOUT USER
export const authLogoutStart = (credentials) => ({
  type: AuthActionTypes.AUTH_LOGOUT_START,
  payload: { credentials },
});

export const authLogoutSuccess = () => ({
  type: AuthActionTypes.AUTH_LOGOUT_SUCCESS,
});

export const authLogoutFailure = (error) => ({
  type: AuthActionTypes.AUTH_LOGOUT_FAILURE,
  payload: error,
});
