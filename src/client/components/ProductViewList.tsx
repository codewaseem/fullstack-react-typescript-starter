import * as React from "react";
import ProductView from "./ProductView";

export default class ProductViewList extends React.Component<any, any> {

  render() {
    const { products } = this.props;
    return (
      <div className="w-full text-center text-black">
        <h2>Products</h2>
        <div className="flex flex-wrap">
          {products && products.length > 0 ?
            products.map((product) => {
              return <ProductView
                key={product._id}
                product={product}
                onEditClick={this.props.onEditClick}
                onDeleteClick={this.props.onDeleteClick}
              />;
            })
            :
            <h4 className="mt-8 text-white">No Products Found</h4>
          }
        </div>
      </div>
    );
  }
}