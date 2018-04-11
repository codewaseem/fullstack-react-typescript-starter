import { crudViewMaker } from "../containers";
import { getArticlesThunk, updateArticleThunk, deleteArticleThunk, addArticleThunk } from "../../store/articles";
import { ArticleViewList } from "../components";
import * as React from "react";
import ArticleForm from "../forms/ArticleForm";
const MyComponent = crudViewMaker({
  // tslint:disable-next-line:max-line-length
  viewComponent: ({ itemList, ...props }) => <ArticleViewList articles={itemList} {...props} />,
  extractListFromStore: (store) => store.articlesData.articlesList,
  extractMapFromStore: (store) => store.articlesData.articlesMap,
  addFormComponent: ArticleForm,
  editFormComponent: ArticleForm,
  crudThunks: {
    get: getArticlesThunk,
    add: addArticleThunk,
    update: updateArticleThunk,
    delete: deleteArticleThunk
  }
});

export default MyComponent;