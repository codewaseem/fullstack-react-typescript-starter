import { createActions, handleActions } from "redux-actions";
import { getEvents, addEvent, updateEvent, deleteEvent } from "../shared";
import * as _ from "lodash";
export const {
  getEventsPending,
  getEventsSuccess,
  getEventsFailed,
  updateEventsSuccess,
  addEventSuccess,
  deleteEventSuccess,
} = createActions({
  GET_EVENTS_PENDING: undefined,
  GET_EVENTS_SUCCESS: (events) => ({ events }),
  GET_EVENTS_FAILED: (message) => ({ message }),
  UPDATE_EVENT_SUCCESS: (updatedEvent) => ({ updatedEvent }),
  ADD_EVENT_SUCCESS: (addedEvent) => ({ addedEvent }),
  DELETE_EVENT_SUCCESS: (deletedEvent) => ({ deletedEvent }),
});

export const getEventsThunk = () => {
  return (dispatch) => {
    dispatch(getEventsPending());
    return getEvents()
      .then((events) => {
        dispatch(getEventsSuccess(events));
      })
      .catch((e) => {
        dispatch(getEventsFailed("FAILED TO GET EVENT"));
      });
  };
};

export const addEventThunk = (details) => {
  return (dispatch) => {
    dispatch(getEventsPending());
    return addEvent(details)
      .then((addedEvent) => {
        dispatch(addEventSuccess(addedEvent));
      })
      .catch((e) => {
        dispatch(getEventsFailed("FAILED TO ADD THE EVENT"));
      });
  };
};

export const updateEventThunk = (id, details) => {
  return (dispatch) => {
    dispatch(getEventsPending());
    return updateEvent(id, details)
      .then((updatedEvent) => {
        dispatch(updateEventsSuccess(updatedEvent));
      })
      .catch((e) => {
        dispatch(getEventsFailed("FAILED TO UPDATE THE EVENT"));
      });
  };
};

export const deleteEventThunk = (id) => {
  return (dispatch) => {
    dispatch(getEventsPending());
    return deleteEvent(id)
      .then((updatedEvent) => {
        dispatch(deleteEventSuccess(updatedEvent));
      })
      .catch((e) => {
        dispatch(getEventsFailed("FAILED TO DELETE THE EVENT"));
      });
  };
};

const defaultState = {
  requestPending: false,
  requestFailed: false,
  eventsList: [],
  eventsMap: {},
};

export const eventReducer = handleActions(
  {
    [getEventsPending](state: any) {
      return {
        ...state,
        requestPending: true
      };
    },
    [getEventsSuccess](state: any, { payload: { events } }: any) {
      const eventsMap = events.reduce(
        (acc, obj) => {
          return { ...acc, [obj._id]: obj };
        },
        {});
      return {
        ...state,
        requestPending: false,
        requestFailed: false,
        eventsList: events,
        eventsMap
      };
    },
    [getEventsFailed](state: any) {
      return {
        ...state,
        requestFailed: true,
        requestPending: false
      };
    },
    [addEventSuccess](state: any, { payload: { addedEvent } }: any) {
      return {
        ...state,
        eventsList: [...state.eventsList, addedEvent],
        eventsMap: {
          ...state.eventsMap,
          [addedEvent._id]: addedEvent
        },
        requestPending: false,
        requestFailed: false
      };
    },
    [updateEventsSuccess](state: any, { payload: { updatedEvent } }: any) {
      // tslint:disable-next-line:triple-equals
      return {
        ...state,
        eventsList: _.map(state.eventsList, (obj) => {
          // tslint:disable-next-line:triple-equals
          if (obj._id == updatedEvent._id) {
            return updatedEvent;
          }
          return obj;
        }),
        eventsMap: {
          ...state.eventsMap,
          [updatedEvent._id]: updatedEvent
        }
      };
    },
    [deleteEventSuccess](state: any, { payload: { deletedEvent } }: any) {
      const newEventsMap = {
        ...state.eventsMap
      };
      delete newEventsMap[deletedEvent._id];
      return {
        ...state,
        eventsMap: newEventsMap,
        // tslint:disable-next-line:triple-equals
        eventsList: _.filter(state.eventsList, (obj) => obj._id != deletedEvent._id)
      };
    }
  },
  defaultState
);