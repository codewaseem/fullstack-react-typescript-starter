import * as React from "react";
import ProductView from "./ProductView";

export default class ProductViewList extends React.Component<any, any> {

  render() {
    const { products } = this.props;
    return (
      <div className="flex flex-wrap">
        {
          products.map((product) => {
            return <ProductView
              key={product._id}
              product={product}
              onEditClick={this.props.onEditClick}
              onDeleteClick={this.props.onDeleteClick}
            />;
          })
        }
      </div>
    );
  }
}