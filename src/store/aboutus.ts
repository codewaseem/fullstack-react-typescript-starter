import { createActions, handleActions } from "redux-actions";
import { getAboutUsDetails, updateAboutUsDetails } from "../shared";

const {
  getAboutUsSuccess,
  getAboutUsFailed
} = createActions({
  GET_ABOUT_US_SUCCESS: (aboutUsDetails) => ({ aboutUsDetails }),
  GET_ABOUT_US_FAILED: undefined
});

export const getAboutUsThunk = () => {
  return (dispatch) => {
    return getAboutUsDetails().then((details) => {
      dispatch(getAboutUsSuccess(details));
    }).catch(() => {
      dispatch(getAboutUsFailed());
    });
  };
};

export const postAboutUsThunk = (details) => {
  return (dispatch) => {
    return updateAboutUsDetails(details).then((updatedDetails) => {
      dispatch(getAboutUsSuccess(updatedDetails));
    }).catch(() => {
      dispatch(getAboutUsFailed());
    });
  };
};

const defaultState = {
  requestPending: true,
  requestError: false,
  aboutUsDetails: {}
};

export const aboutUsReducer = handleActions(
  {
    [getAboutUsSuccess](state: any, { payload: { aboutUsDetails } }: any) {
      return {
        ...state,
        requestPending: false,
        requestError: false,
        aboutUsDetails
      };
    },
    [getAboutUsFailed](state: any) {
      return {
        ...state,
        requestPending: false,
        requestError: true
      };
    }
  },
  defaultState
);