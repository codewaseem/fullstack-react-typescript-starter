import * as React from "react";
import ProductView from "./ProductView";

export default class ProductViewList extends React.Component<any, any> {

  render() {
    const { products } = this.props;
    return (
      <div>
        {
          products.map((product) => {
            return <ProductView
              key={product._id}
              product={product}
              handleEditClick={this.props.handleEditClick}
              handleDeleteClick={this.props.handleDeleteClick}
            />;
          })
        }
      </div>
    );
  }
}