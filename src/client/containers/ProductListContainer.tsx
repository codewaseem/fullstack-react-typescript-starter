import * as React from "react";
import { ProductViewList } from "../components";
import { connect } from "react-redux";
import { getProductsThunk } from "../../store/products";

class ProductViewContainer extends React.Component<any, any> {

  componentDidMount() {

  }
  render() {
    // tslint:disable-next-line:max-line-length
    return <ProductViewList products={this.props.products} handleEditClick={this.props.handleEditClick} handleDeleteClick={this.props.handleDeleteClick} />;
  }
}

const mapStateToProps = (store) => {
  return {
    products: store.productsData.productsList
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getProducts: dispatch(getProductsThunk())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductViewContainer); 