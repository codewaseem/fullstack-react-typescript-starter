import { createActions, handleActions } from "redux-actions";
import { loginUser, verifyAdmin } from "../shared";
import { saveAuthData } from "../client/utils";
export const {
  loginPending,
  loginSuccess,
  loginFailed,
  logoutSuccess,
  verifyAdminStatus
} = createActions({
  LOGIN_PENDING: undefined,
  LOGIN_SUCCESS: (data) => ({ data }),
  LOGIN_FAILED: undefined,
  LOGOUT_SUCCESS: undefined,
  VERIFY_ADMIN_STATUS: (status) => ({ status })
});

export const verifyAdminThunk = () => {
  return (dispatch) => {
    return verifyAdmin()
      .then(() => {
        dispatch(verifyAdminStatus(true));
      })
      .catch(() => {
        dispatch(verifyAdminStatus(false));
      });
  };
};

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
  token: null,
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
    [loginSuccess](state: any, { payload: { data } }: any) {
      return {
        ...state,
        isLoggedIn: true,
        loginPending: false,
        loginFailed: false,
        user: data.user,
        token: data.token
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
    },
    [verifyAdminStatus](state: any, { payload: { status } }: any) {
      return {
        ...state,
        isAdmin: status,
        adminVerifyRequestMade: true
      };
    }
  },
  defaultState);