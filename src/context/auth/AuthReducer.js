import AuthActionTypes from "./AuthActionTypes";

const AuthReducer = (state, action) => {
  switch (action.type) {
    case AuthActionTypes.AUTH_REGISTER_START:
      return {
        ...state,
        isFetching: true,
      };
    case AuthActionTypes.AUTH_REGISTER_SUCCESS:
      return {
        ...state,
        isFetching: false,
      };
    case AuthActionTypes.AUTH_REGISTER_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    case AuthActionTypes.AUTH_LOGIN_START:
      return {
        ...state,
        isFetching: true,
      };
    case AuthActionTypes.AUTH_LOGIN_SUCCESS:
      return {
        ...state,
        currentUser: { ...state.currentUser, ...action.payload },
        isFetching: false,
      };
    case AuthActionTypes.AUTH_LOGIN_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
      case AuthActionTypes.AUTH_LOGOUT_START:
        return {
          ...state,
          isFetching: true,
        };
      case AuthActionTypes.AUTH_LOGOUT_SUCCESS:
        return {
          ...state,
          isFetching: false,
        };
      case AuthActionTypes.AUTH_LOGOUT_FAILURE:
        return {
          ...state,
          isFetching: false,
          error: action.payload,
        };
    default:
      return state;
  }
};

export default AuthReducer;
