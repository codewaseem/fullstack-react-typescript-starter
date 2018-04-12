import * as React from "react";
import ArticleView from "./ArticleView";

export default class ArticleViewList extends React.Component<any, any> {

  render() {
    const { articles } = this.props;
    return (
      <div>
        {articles && articles.length > 0 ?
          articles.map((article) => {
            return <ArticleView
              key={article._id}
              article={article}
              onEditClick={this.props.onEditClick}
              onDeleteClick={this.props.onDeleteClick}
            />;
          })
          :
          <h2 className="m-4">No articles</h2>
        }
      </div>
    );
  }
}