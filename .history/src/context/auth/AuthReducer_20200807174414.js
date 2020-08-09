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
        isFetching: true,
      };
    case AuthActionTypes.AUTH_REGISTER_FAILURE:
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
