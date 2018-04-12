import { createActions, handleActions } from "redux-actions";
import { getSponsors, addSponsor, updateSponsor, deleteSponsor } from "../shared";
import * as _ from "lodash";
export const {
  getSponsorsPending,
  getSponsorsSuccess,
  getSponsorsFailed,
  updateSponsorSuccess,
  addSponsorSuccess,
  deleteSponsorSuccess,
} = createActions({
  GET_SPONSORS_PENDING: undefined,
  GET_SPONSORS_SUCCESS: (sponsors) => ({ sponsors }),
  GET_SPONSORS_FAILED: (message) => ({ message }),
  UPDATE_SPONSOR_SUCCESS: (updatedSponsor) => ({ updatedSponsor }),
  ADD_SPONSOR_SUCCESS: (addedSponsor) => ({ addedSponsor }),
  DELETE_SPONSOR_SUCCESS: (deletedSponsor) => ({ deletedSponsor }),
});

export const getSponsorsThunk = () => {
  return (dispatch) => {
    dispatch(getSponsorsPending());
    return getSponsors()
      .then((sponsors) => {
        dispatch(getSponsorsSuccess(sponsors));
      })
      .catch((e) => {
        dispatch(getSponsorsFailed("FAILED TO GET SPONSOR"));
      });
  };
};

export const addSponsorThunk = (details) => {
  return (dispatch) => {
    dispatch(getSponsorsPending());
    return addSponsor(details)
      .then((addedSponsor) => {
        dispatch(addSponsorSuccess(addedSponsor));
      })
      .catch((e) => {
        dispatch(getSponsorsFailed("FAILED TO ADD THE SPONSOR"));
      });
  };
};

export const updateSponsorThunk = (id, details) => {
  return (dispatch) => {
    dispatch(getSponsorsPending());
    return updateSponsor(id, details)
      .then((updatedSponsor) => {
        dispatch(updateSponsorSuccess(updatedSponsor));
      })
      .catch((e) => {
        dispatch(getSponsorsFailed("FAILED TO UPDATE THE SPONSOR"));
      });
  };
};

export const deleteSponsorThunk = (id) => {
  return (dispatch) => {
    dispatch(getSponsorsPending());
    return deleteSponsor(id)
      .then((updatedSponsor) => {
        dispatch(deleteSponsorSuccess(updatedSponsor));
      })
      .catch((e) => {
        dispatch(getSponsorsFailed("FAILED TO DELETE THE SPONSOR"));
      });
  };
};

const defaultState = {
  requestPending: false,
  requestFailed: false,
  sponsorsList: [],
  sponsorsMap: {},
};

export const sponsorReducer = handleActions(
  {
    [getSponsorsPending](state: any) {
      return {
        ...state,
        requestPending: true
      };
    },
    [getSponsorsSuccess](state: any, { payload: { sponsors } }: any) {
      const sponsorsMap = sponsors.reduce(
        (acc, obj) => {
          return { ...acc, [obj._id]: obj };
        },
        {});
      return {
        ...state,
        requestPending: false,
        requestFailed: false,
        sponsorsList: sponsors,
        sponsorsMap
      };
    },
    [getSponsorsFailed](state: any) {
      return {
        ...state,
        requestFailed: true,
        requestPending: false
      };
    },
    [addSponsorSuccess](state: any, { payload: { addedSponsor } }: any) {
      return {
        ...state,
        sponsorsList: [...state.sponsorsList, addedSponsor],
        sponsorsMap: {
          ...state.sponsorsMap,
          [addedSponsor._id]: addedSponsor
        },
        requestPending: false,
        requestFailed: false
      };
    },
    [updateSponsorSuccess](state: any, { payload: { updatedSponsor } }: any) {
      // tslint:disable-next-line:triple-equals
      return {
        ...state,
        sponsorsList: _.map(state.sponsorsList, (obj) => {
          console.log(updatedSponsor, obj);
          // tslint:disable-next-line:triple-equals
          if (obj._id == updatedSponsor._id) {
            return updatedSponsor;
          }
          return obj;
        }),
        sponsorsMap: {
          ...state.sponsorsMap,
          [updatedSponsor._id]: updatedSponsor
        }
      };
    },
    [deleteSponsorSuccess](state: any, { payload: { deletedSponsor } }: any) {
      const newSponsorsMap = {
        ...state.sponsorsMap
      };
      delete newSponsorsMap[deletedSponsor._id];
      return {
        ...state,
        sponsorsMap: newSponsorsMap,
        // tslint:disable-next-line:triple-equals
        sponsorsList: _.filter(state.sponsorsList, (obj) => obj._id != deletedSponsor._id)
      };
    }
  },
  defaultState
);