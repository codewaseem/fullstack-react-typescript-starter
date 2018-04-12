import { createActions, handleActions } from "redux-actions";
import { getArticles, addArticle, updateArticle, deleteArticle } from "../shared";
import * as _ from "lodash";
export const {
  getArticlesPending,
  getArticlesSuccess,
  getArticlesFailed,
  updateArticleSuccess,
  addArticleSuccess,
  deleteArticleSuccess,
} = createActions({
  GET_ARTICLES_PENDING: undefined,
  GET_ARTICLES_SUCCESS: (articles) => ({ articles }),
  GET_ARTICLES_FAILED: (message) => ({ message }),
  UPDATE_ARTICLE_SUCCESS: (updatedArticle) => ({ updatedArticle }),
  ADD_ARTICLE_SUCCESS: (addedArticle) => ({ addedArticle }),
  DELETE_ARTICLE_SUCCESS: (deletedArticle) => ({ deletedArticle }),
});

export const getArticlesThunk = () => {
  return (dispatch) => {
    dispatch(getArticlesPending());
    return getArticles()
      .then((articles) => {
        dispatch(getArticlesSuccess(articles));
      })
      .catch((e) => {
        dispatch(getArticlesFailed("FAILED TO GET ARTICLE"));
      });
  };
};

export const addArticleThunk = (details) => {
  return (dispatch) => {
    dispatch(getArticlesPending());
    return addArticle(details)
      .then((addedArticle) => {
        dispatch(addArticleSuccess(addedArticle));
      })
      .catch((e) => {
        dispatch(getArticlesFailed("FAILED TO ADD THE ARTICLE"));
      });
  };
};

export const updateArticleThunk = (id, details) => {
  return (dispatch) => {
    dispatch(getArticlesPending());
    return updateArticle(id, details)
      .then((updatedArticle) => {
        dispatch(updateArticleSuccess(updatedArticle));
      })
      .catch((e) => {
        dispatch(getArticlesFailed("FAILED TO UPDATE THE ARTICLE"));
      });
  };
};

export const deleteArticleThunk = (id) => {
  return (dispatch) => {
    dispatch(getArticlesPending());
    return deleteArticle(id)
      .then((updatedArticle) => {
        dispatch(deleteArticleSuccess(updatedArticle));
      })
      .catch((e) => {
        dispatch(getArticlesFailed("FAILED TO DELETE THE ARTICLE"));
      });
  };
};

const defaultState = {
  requestPending: false,
  requestFailed: false,
  articlesList: [],
  articlesMap: {},
};

export const articleReducer = handleActions(
  {
    [getArticlesPending](state: any) {
      return {
        ...state,
        requestPending: true
      };
    },
    [getArticlesSuccess](state: any, { payload: { articles } }: any) {
      const articlesMap = articles.reduce(
        (acc, obj) => {
          return { ...acc, [obj._id]: obj };
        },
        {});
      return {
        ...state,
        requestPending: false,
        requestFailed: false,
        articlesList: articles,
        articlesMap
      };
    },
    [getArticlesFailed](state: any) {
      return {
        ...state,
        requestFailed: true,
        requestPending: false
      };
    },
    [addArticleSuccess](state: any, { payload: { addedArticle } }: any) {
      return {
        ...state,
        articlesList: [...state.articlesList, addedArticle],
        articlesMap: {
          ...state.articlesMap,
          [addedArticle._id]: addedArticle
        },
        requestPending: false,
        requestFailed: false
      };
    },
    [updateArticleSuccess](state: any, { payload: { updatedArticle } }: any) {
      // tslint:disable-next-line:triple-equals
      return {
        ...state,
        articlesList: _.map(state.articlesList, (obj) => {
          // tslint:disable-next-line:triple-equals
          if (obj._id == updatedArticle._id) {
            return updatedArticle;
          }
          return obj;
        }),
        articlesMap: {
          ...state.articlesMap,
          [updatedArticle._id]: updatedArticle
        }
      };
    },
    [deleteArticleSuccess](state: any, { payload: { deletedArticle } }: any) {
      const newArticlesMap = {
        ...state.articlesMap
      };
      delete newArticlesMap[deletedArticle._id];
      return {
        ...state,
        articlesMap: newArticlesMap,
        // tslint:disable-next-line:triple-equals
        articlesList: _.filter(state.articlesList, (obj) => obj._id != deletedArticle._id)
      };
    }
  },
  defaultState
);