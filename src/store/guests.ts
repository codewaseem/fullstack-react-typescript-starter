import { createActions, handleActions } from "redux-actions";
import { getGuests, addGuest, updateGuest, deleteGuest } from "../shared";
import * as _ from "lodash";
export const {
  getGuestsPending,
  getGuestsSuccess,
  getGuestsFailed,
  updateGuestSuccess,
  addGuestSuccess,
  deleteGuestSuccess,
} = createActions({
  GET_GUESTS_PENDING: undefined,
  GET_GUESTS_SUCCESS: (guests) => ({ guests }),
  GET_GUESTS_FAILED: (message) => ({ message }),
  UPDATE_GUEST_SUCCESS: (updatedGuest) => ({ updatedGuest }),
  ADD_GUEST_SUCCESS: (addedGuest) => ({ addedGuest }),
  DELETE_GUEST_SUCCESS: (deletedGuest) => ({ deletedGuest }),
});

export const getGuestsThunk = () => {
  return (dispatch) => {
    dispatch(getGuestsPending());
    return getGuests()
      .then((guests) => {
        dispatch(getGuestsSuccess(guests));
      })
      .catch((e) => {
        dispatch(getGuestsFailed("FAILED TO GET GUEST"));
      });
  };
};

export const addGuestThunk = (details) => {
  return (dispatch) => {
    dispatch(getGuestsPending());
    return addGuest(details)
      .then((addedGuest) => {
        dispatch(addGuestSuccess(addedGuest));
      })
      .catch((e) => {
        dispatch(getGuestsFailed("FAILED TO ADD THE GUEST"));
      });
  };
};

export const updateGuestThunk = (id, details) => {
  return (dispatch) => {
    dispatch(getGuestsPending());
    return updateGuest(id, details)
      .then((updatedGuest) => {
        dispatch(updateGuestSuccess(updatedGuest));
      })
      .catch((e) => {
        dispatch(getGuestsFailed("FAILED TO UPDATE THE GUEST"));
      });
  };
};

export const deleteGuestThunk = (id) => {
  return (dispatch) => {
    dispatch(getGuestsPending());
    return deleteGuest(id)
      .then((updatedGuest) => {
        dispatch(deleteGuestSuccess(updatedGuest));
      })
      .catch((e) => {
        dispatch(getGuestsFailed("FAILED TO DELETE THE GUEST"));
      });
  };
};

const defaultState = {
  requestPending: false,
  requestFailed: false,
  guestsList: [],
  guestsMap: {},
};

export const guestReducer = handleActions(
  {
    [getGuestsPending](state: any) {
      return {
        ...state,
        requestPending: true
      };
    },
    [getGuestsSuccess](state: any, { payload: { guests } }: any) {
      const guestsMap = guests.reduce(
        (acc, obj) => {
          return { ...acc, [obj._id]: obj };
        },
        {});
      return {
        ...state,
        requestPending: false,
        requestFailed: false,
        guestsList: guests,
        guestsMap
      };
    },
    [getGuestsFailed](state: any) {
      return {
        ...state,
        requestFailed: true,
        requestPending: false
      };
    },
    [addGuestSuccess](state: any, { payload: { addedGuest } }: any) {
      return {
        ...state,
        guestsList: [...state.guestsList, addedGuest],
        guestsMap: {
          ...state.guestsMap,
          [addedGuest._id]: addedGuest
        },
        requestPending: false,
        requestFailed: false
      };
    },
    [updateGuestSuccess](state: any, { payload: { updatedGuest } }: any) {
      // tslint:disable-next-line:triple-equals
      return {
        ...state,
        guestsList: _.map(state.guestsList, (obj) => {
          // tslint:disable-next-line:triple-equals
          if (obj._id == updatedGuest._id) {
            return updatedGuest;
          }
          return obj;
        }),
        guestsMap: {
          ...state.guestsMap,
          [updatedGuest._id]: updatedGuest
        }
      };
    },
    [deleteGuestSuccess](state: any, { payload: { deletedGuest } }: any) {
      const newGuestsMap = {
        ...state.guestsMap
      };
      delete newGuestsMap[deletedGuest._id];
      return {
        ...state,
        guestsMap: newGuestsMap,
        // tslint:disable-next-line:triple-equals
        guestsList: _.filter(state.guestsList, (obj) => obj._id != deletedGuest._id)
      };
    }
  },
  defaultState
);