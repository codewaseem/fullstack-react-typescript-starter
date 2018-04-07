import * as React from "react";
import { ArticleViewList } from "../components";
import { connect } from "react-redux";
import { getArticlesThunk } from "../../store/articles";

class ArticleViewContainer extends React.Component<any, any> {

  componentDidMount() {

  }
  render() {
    // tslint:disable-next-line:max-line-length
    return <ArticleViewList articles={this.props.articles} handleEditClick={this.props.handleEditClick} handleDeleteClick={this.props.handleDeleteClick} />;
  }
}

const mapStateToProps = (store) => {
  return {
    articles: store.articlesData.articlesList
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getArticles: dispatch(getArticlesThunk())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticleViewContainer); 