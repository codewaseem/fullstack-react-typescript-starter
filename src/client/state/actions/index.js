import { loginUser as loginUserRequest } from "../../../shared";
import { saveAuthData, clearAuthData } from "../../utils";


export const LOGGING_IN = "LOGIN_USER";
export const loggingIn = () => {
  return {
    type: LOGGING_IN
  }
}

export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";

export const loginUserSuccess = (user) => {
  return {
    type: LOGIN_USER_SUCCESS,
    user
  }
}

export const LOGIN_USER_FAILURE = "LOGIN_USER_FAILURE";

export const loginUserFailure = (error) => {
  return {
    type: LOGIN_USER_FAILURE,
    error
  }
}

export const LOGOUT_USER = "LOGOUT_USER";
export function logoutUserSuccess() {
  return {
    type: LOGOUT_USER
  }
}

export function loginUser(username, password) {
  return function (dispatch) {
    dispatch(loggingIn());
    return loginUserRequest(username, password)
      .then((data) => {
        console.log(data);
        console.log("dispatching");
        dispatch(loginUserSuccess(data.user));
        saveAuthData(data);
      })
      .catch(() => loginUserFailure("Authentication Failed"));
  }
}

export function logoutUser() {
  return function (dispatch) {
    clearAuthData();
    dispatch(logoutUserSuccess());
    return Promise.resolve(true);
  }
}