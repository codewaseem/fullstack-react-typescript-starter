import * as React from "react";
import ArticleForm from "../forms/ArticleForm";
import { ArticlesContainer } from "../containers";
import { Route, Switch, withRouter } from "react-router-dom";
import { addArticleThunk, updateArticleThunk, deleteArticleThunk, getArticlesThunk } from "../../store/articles";
import { connect } from "react-redux";

class ManageArticlesPage extends React.Component<any, any> {

  state = {
    selectedArticle: null,
    isEditing: false,
    isDeleting: false
  };
  handleEditClick = (id) => {
    this.setState(() => ({ selectedArticle: this.props.articlesMap[id] }));
    this.props.history.push(this.props.match.url + "/edit");
  }

  handleUpdate = (article) => {
    this.props.updateArticle(article._id, article).then(() => {
      this.props.history.goBack();
    });
  }

  handleDeleteClick = (id) => {
    this.props.deleteArticle(id);
  }

  render() {
    const { history, match } = this.props;
    return (
      <Switch>
        <Route
          path={match.url}
          exact={true}
          render={() => {
            return (<div>
              <h2>All Articles</h2>
              <ArticlesContainer handleEditClick={this.handleEditClick} handleDeleteClick={this.handleDeleteClick} />
              <hr />
              <h2>Add Article</h2>
              <ArticleForm
                onSubmit={this.props.addArticle}
              />
            </div>);
          }}
        />
        <Route
          path={match.url + "/edit"}
          exact={true}
          render={() => {
            console.log(this.state.selectedArticle);
            // tslint:disable-next-line:max-line-length
            return this.state.selectedArticle && <ArticleForm initialValues={this.state.selectedArticle} onSubmit={this.handleUpdate} />;
          }}
        />
      </Switch>
    );
  }
}

const mapStateToProps = ({ articlesData }) => {
  return {
    articlesList: articlesData.articlesList,
    articlesMap: articlesData.articlesMap
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getArticles() {
      dispatch(getArticlesThunk());
    },
    addArticle(details: any) {
      return dispatch(addArticleThunk(details));
    },
    updateArticle(id: any, details: any) {
      return dispatch(updateArticleThunk(id, details));
    },
    deleteArticle(id: any) {
      return dispatch(deleteArticleThunk(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ManageArticlesPage));