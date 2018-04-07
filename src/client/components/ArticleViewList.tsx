import * as React from "react";
import ArticleView from "./ArticleView";

export default class ArticleViewList extends React.Component<any, any> {

  render() {
    const { articles } = this.props;
    return (
      <div>
        {
          articles.map((article) => {
            return <ArticleView
              key={article._id}
              article={article}
              handleEditClick={this.props.handleEditClick}
              handleDeleteClick={this.props.handleDeleteClick}
            />;
          })
        }
      </div>
    );
  }
}