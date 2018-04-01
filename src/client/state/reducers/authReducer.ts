import { LOGGING_IN, LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE } from "../actions";

const authReducer = (state = { user: null, isLoggedIn: false, isLoading: false, isError: false }, action) => {
  switch (action.type) {
    case LOGGING_IN: return { ...state, isLoading: true };
    case LOGIN_USER_SUCCESS: return { ...state, isLoading: false, isLoggedIn: true, user: action.user };
    case LOGIN_USER_FAILURE: return { ...state, isLoading: false, isLoggedIn: false, user: null };
    default: return state;
  }
};

export default authReducer;