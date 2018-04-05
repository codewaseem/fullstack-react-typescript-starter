import { createActions, handleActions } from "redux-actions";
import { loginUser } from "../shared";
import { saveAuthData } from "../client/utils";
export const {
  loginPending,
  loginSuccess,
  loginFailed,
  logoutSuccess
} = createActions({
  LOGIN_PENDING: undefined,
  LOGIN_SUCCESS: (user) => ({ user }),
  LOGIN_FAILED: undefined,
  LOGOUT_SUCCESS: undefined
});

export const loginUserThunk = (username, password) => {
  return (dispatch) => {
    dispatch(loginPending());
    return loginUser(username, password)
      .then((user) => {
        dispatch(loginSuccess(user));
        saveAuthData(user);
      })
      .catch(() => {
        dispatch(loginFailed());
      });
  };
};

const defaultState = {
  isLoggedIn: false,
  user: null,
  loginFailed: false,
  loginPending: false
};

export const userReducer = handleActions(
  {
    [loginPending](state: any) {
      return {
        ...state,
        isLoggedIn: false,
        loginPending: true,
        loginFailed: false,
        user: null
      };
    }
    ,
    [loginSuccess](state: any, { payload: { user } }: any) {
      return {
        ...state,
        isLoggedIn: true,
        loginPending: false,
        loginFailed: false,
        user
      };
    },
    [loginFailed](state: any) {
      return {
        isLoggedIn: false,
        loginPending: false,
        loginFailed: true,
        user: null
      };
    },
    [logoutSuccess](state: any) {
      return {
        ...defaultState
      };
    }
  },
  defaultState);