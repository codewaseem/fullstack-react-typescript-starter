import { createActions, handleActions } from "redux-actions";
import { getUsers, addUser, updateUser, deleteUser } from "../shared";
import * as _ from "lodash";
export const {
  getUsersPending,
  getUsersSuccess,
  getUsersFailed,
  updateUsersSuccess,
  addUserSuccess,
  deleteUserSuccess,
} = createActions({
  GET_USERS_PENDING: undefined,
  GET_USERS_SUCCESS: (users) => ({ users }),
  GET_USERS_FAILED: (message) => ({ message }),
  UPDATE_USER_SUCCESS: (updatedUser) => ({ updatedUser }),
  ADD_USER_SUCCESS: (addedUser) => ({ addedUser }),
  DELETE_USER_SUCCESS: (deletedUser) => ({ deletedUser }),
});

export const getUsersThunk = () => {
  return (dispatch) => {
    dispatch(getUsersPending());
    return getUsers()
      .then((users) => {
        dispatch(getUsersSuccess(users));
      })
      .catch((e) => {
        dispatch(getUsersFailed("FAILED TO GET USER"));
      });
  };
};

export const addUserThunk = (details) => {
  return (dispatch) => {
    dispatch(getUsersPending());
    return addUser(details)
      .then((addedUser) => {
        dispatch(addUserSuccess(addedUser));
      })
      .catch((e) => {
        dispatch(getUsersFailed("FAILED TO ADD THE USER"));
      });
  };
};

export const updateUserThunk = (id, details) => {
  return (dispatch) => {
    dispatch(getUsersPending());
    return updateUser(id, details)
      .then((updatedUser) => {
        dispatch(updateUsersSuccess(updatedUser));
      })
      .catch((e) => {
        dispatch(getUsersFailed("FAILED TO UPDATE THE USER"));
      });
  };
};

export const deleteUserThunk = (id) => {
  return (dispatch) => {
    dispatch(getUsersPending());
    return deleteUser(id)
      .then((updatedUser) => {
        dispatch(deleteUserSuccess(updatedUser));
      })
      .catch((e) => {
        dispatch(getUsersFailed("FAILED TO DELETE THE USER"));
      });
  };
};

const defaultState = {
  requestPending: false,
  requestFailed: false,
  usersList: [],
  usersMap: {},
};

export const usersReducer = handleActions(
  {
    [getUsersPending](state: any) {
      return {
        ...state,
        requestPending: true
      };
    },
    [getUsersSuccess](state: any, { payload: { users } }: any) {
      const usersMap = users.reduce(
        (acc, obj) => {
          return { ...acc, [obj._id]: obj };
        },
        {});
      return {
        ...state,
        requestPending: false,
        requestFailed: false,
        usersList: users,
        usersMap
      };
    },
    [getUsersFailed](state: any) {
      return {
        ...state,
        requestFailed: true,
        requestPending: false
      };
    },
    [addUserSuccess](state: any, { payload: { addedUser } }: any) {
      return {
        ...state,
        usersList: [...state.usersList, addedUser],
        usersMap: {
          ...state.usersMap,
          [addedUser._id]: addedUser
        },
        requestPending: false,
        requestFailed: false
      };
    },
    [updateUsersSuccess](state: any, { payload: { updatedUser } }: any) {
      // tslint:disable-next-line:triple-equals
      return {
        ...state,
        usersList: _.map(state.usersList, (obj) => {
          // tslint:disable-next-line:triple-equals
          if (obj._id == updatedUser._id) {
            return updatedUser;
          }
          return obj;
        }),
        usersMap: {
          ...state.usersMap,
          [updatedUser._id]: updatedUser
        }
      };
    },
    [deleteUserSuccess](state: any, { payload: { deletedUser } }: any) {
      const newUsersMap = {
        ...state.usersMap
      };
      delete newUsersMap[deletedUser._id];
      return {
        ...state,
        usersMap: newUsersMap,
        // tslint:disable-next-line:triple-equals
        usersList: _.filter(state.usersList, (obj) => obj._id != deletedUser._id)
      };
    }
  },
  defaultState
);