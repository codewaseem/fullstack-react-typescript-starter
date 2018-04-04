import { createActions, handleActions } from "redux-actions";
import { getPageSections as getPageSectionsRequest, updateAboutSection, updateContactSection } from "../../../shared";
const defaultState = { isLoading: false, isError: false, pageSections: undefined };

export const { getPageSections, getPageSectionsSuccess,
  getPageSectionsFailure, pageSectionSuccess } = createActions({
    GET_PAGE_SECTIONS: undefined,
    GET_PAGE_SECTIONS_SUCCESS: (pageSections) => ({ pageSections }),
    GET_PAGE_SECTIONS_FAILURE: undefined,
    PAGE_SECTION_SUCCESS: (pageSection) => ({ pageSection })
  });

console.log(getPageSections, getPageSectionsSuccess, pageSectionSuccess);

export const reducer = handleActions(
  {
    [getPageSections](state: any) {
      return { ...state, isLoading: true };
    },
    [getPageSectionsSuccess](state: any, { payload: { pageSections } }: any) {
      const sections = pageSections.reduce(
        (acc, section) => {
          return { ...acc, [section.__t]: section };
        },
        {});
      return {
        ...state,
        isLoading: false,
        ...sections
      };
    },
    [getPageSectionsFailure](state: any) {
      return {
        ...state,
        isLoading: false,
        pageSections: undefined,
        isError: true
      };
    }
    ,
    [pageSectionSuccess](state: any, { payload: { pageSection } }: any) {
      console.log("DONE");
      return {
        ...state,
        pageSections: {
          ...state.pageSections,
          [pageSection.__t]: pageSection
        }
      };
    }
  },
  defaultState
);

export const fetchPageSection = () => {
  return async (dispatch) => {
    dispatch(getPageSections());
    return getPageSectionsRequest().then((pageSections) => {
      return dispatch(getPageSectionsSuccess(pageSections));
    }).catch(getPageSectionsFailure);
  };
};

export const updateAboutSectionRequest = (details) => {
  return async (dispatch) => {
    dispatch(getPageSections());
    return updateAboutSection(details).then((updatedSection) => {
      console.log("CALIIN");
      return dispatch(pageSectionSuccess(updatedSection));
    }).catch(getPageSectionsFailure);
  };
};

export const updateContactSectionRequest = (details) => {
  return async (dispatch) => {
    dispatch(getPageSections());
    return updateContactSection(details).then((updatedSection) => {
      return dispatch(pageSectionSuccess(updatedSection));
    }).catch(getPageSectionsFailure);
  };
};