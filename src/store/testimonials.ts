import { createActions, handleActions } from "redux-actions";
import { getTestimonials, addTestimonial, updateTestimonial, deleteTestimonial } from "../shared";
import * as _ from "lodash";
export const {
  getTestimonialsPending,
  getTestimonialsSuccess,
  getTestimonialsFailed,
  updateTestimonialsSuccess,
  addTestimonialSuccess,
  deleteTestimonialSuccess,
} = createActions({
  GET_TESTIMONIALS_PENDING: undefined,
  GET_TESTIMONIALS_SUCCESS: (testimonials) => ({ testimonials }),
  GET_TESTIMONIALS_FAILED: (message) => ({ message }),
  UPDATE_TESTIMONIAL_SUCCESS: (updatedTestimonial) => ({ updatedTestimonial }),
  ADD_TESTIMONIAL_SUCCESS: (addedTestimonial) => ({ addedTestimonial }),
  DELETE_TESTIMONIAL_SUCCESS: (deletedTestimonial) => ({ deletedTestimonial }),
});

export const getTestimonialsThunk = () => {
  return (dispatch) => {
    dispatch(getTestimonialsPending());
    return getTestimonials()
      .then((testimonials) => {
        dispatch(getTestimonialsSuccess(testimonials));
      })
      .catch((e) => {
        dispatch(getTestimonialsFailed("FAILED TO GET TESTIMONIAL"));
      });
  };
};

export const addTestimonialThunk = (details) => {
  return (dispatch) => {
    dispatch(getTestimonialsPending());
    return addTestimonial(details)
      .then((addedTestimonial) => {
        dispatch(addTestimonialSuccess(addedTestimonial));
      })
      .catch((e) => {
        dispatch(getTestimonialsFailed("FAILED TO ADD THE TESTIMONIAL"));
      });
  };
};

export const updateTestimonialThunk = (id, details) => {
  return (dispatch) => {
    dispatch(getTestimonialsPending());
    return updateTestimonial(id, details)
      .then((updatedTestimonial) => {
        dispatch(updateTestimonialsSuccess(updatedTestimonial));
      })
      .catch((e) => {
        dispatch(getTestimonialsFailed("FAILED TO UPDATE THE TESTIMONIAL"));
      });
  };
};

export const deleteTestimonialThunk = (id) => {
  return (dispatch) => {
    dispatch(getTestimonialsPending());
    return deleteTestimonial(id)
      .then((updatedTestimonial) => {
        dispatch(deleteTestimonialSuccess(updatedTestimonial));
      })
      .catch((e) => {
        dispatch(getTestimonialsFailed("FAILED TO DELETE THE TESTIMONIAL"));
      });
  };
};

const defaultState = {
  requestPending: false,
  requestFailed: false,
  testimonialsList: [],
  testimonialsMap: {},
};

export const testimonialReducer = handleActions(
  {
    [getTestimonialsPending](state: any) {
      return {
        ...state,
        requestPending: true
      };
    },
    [getTestimonialsSuccess](state: any, { payload: { testimonials } }: any) {
      const testimonialsMap = testimonials.reduce(
        (acc, obj) => {
          return { ...acc, [obj._id]: obj };
        },
        {});
      return {
        ...state,
        requestPending: false,
        requestFailed: false,
        testimonialsList: testimonials,
        testimonialsMap
      };
    },
    [getTestimonialsFailed](state: any) {
      return {
        ...state,
        requestFailed: true,
        requestPending: false
      };
    },
    [addTestimonialSuccess](state: any, { payload: { addedTestimonial } }: any) {
      return {
        ...state,
        testimonialsList: [...state.testimonialsList, addedTestimonial],
        testimonialsMap: {
          ...state.testimonialsMap,
          [addedTestimonial._id]: addedTestimonial
        },
        requestPending: false,
        requestFailed: false
      };
    },
    [updateTestimonialsSuccess](state: any, { payload: { updatedTestimonial } }: any) {
      // tslint:disable-next-line:triple-equals
      return {
        ...state,
        testimonialsList: _.map(state.testimonialsList, (obj) => {
          // tslint:disable-next-line:triple-equals
          if (obj._id == updatedTestimonial._id) {
            return updatedTestimonial;
          }
          return obj;
        }),
        testimonialsMap: {
          ...state.testimonialsMap,
          [updatedTestimonial._id]: updatedTestimonial
        }
      };
    },
    [deleteTestimonialSuccess](state: any, { payload: { deletedTestimonial } }: any) {
      const newTestimonialsMap = {
        ...state.testimonialsMap
      };
      delete newTestimonialsMap[deletedTestimonial._id];
      return {
        ...state,
        testimonialsMap: newTestimonialsMap,
        // tslint:disable-next-line:triple-equals
        testimonialsList: _.filter(state.testimonialsList, (obj) => obj._id != deletedTestimonial._id)
      };
    }
  },
  defaultState
);