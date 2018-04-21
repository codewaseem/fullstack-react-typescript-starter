import { createActions, handleActions } from "redux-actions";
import {
  getPageSetting
  , updatePageSetting
} from "../shared";
import * as _ from "lodash";
export const {
  getSettingsPending,
  getSettingsSuccess,
  getSettingsFailed,
  updateSettingsSuccess,
} = createActions({
  GET_SETTINGS_PENDING: undefined,
  GET_SETTINGS_SUCCESS: (settings) => ({ settings }),
  GET_SETTINGS_FAILED: (message) => ({ message }),
  UPDATE_SETTINGS_SUCCESS: (updatedSettings) => ({ updatedSettings }),
});

export const getPageSettingsThunk = () => {
  return (dispatch) => {
    dispatch(getSettingsPending());
    return getPageSetting()
      .then((settings) => {
        dispatch(getSettingsSuccess(settings));
      })
      .catch((e) => {
        dispatch(getSettingsFailed("FAILED TO GET ARTICLE"));
      });
  };
};

export const updateSettingsThunk = (settings) => {
  return (dispatch) => {
    dispatch(getSettingsPending());
    return updatePageSetting(settings)
      .then((updatedSettings) => {
        dispatch(updateSettingsSuccess(updatedSettings));
      })
      .catch((e) => {
        dispatch(getSettingsFailed("FAILED TO UPDATE THE SETTINGS"));
      });
  };
};

const defaultState = {
  requestPending: false,
  requestFailed: false,
  pageSettings: {},
};

export const settingsReducer = handleActions(
  {
    [getSettingsPending](state: any) {
      return {
        ...state,
        requestPending: true
      };
    },
    [getSettingsSuccess](state: any, { payload: { settings } }: any) {
      return {
        ...state,
        requestPending: false,
        requestFailed: false,
        pageSettings: { ...settings },
      };
    },
    [getSettingsFailed](state: any) {
      return {
        ...state,
        requestFailed: true,
        requestPending: false
      };
    },
    [updateSettingsSuccess](state: any, { payload: { updatedSettings } }: any) {
      // tslint:disable-next-line:triple-equals
      return {
        ...state,
        pageSettings: { ...updatedSettings }
      };
    }
  },
  defaultState
);