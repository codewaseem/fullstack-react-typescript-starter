import * as React from "react";
import ProductForm from "../forms/ProductForm";
import { ProductsContainer } from "../containers";
import { Route, Switch, withRouter } from "react-router-dom";
import { addProductThunk, updateProductThunk, deleteProductThunk, getProductsThunk } from "../../store/products";
import { connect } from "react-redux";

class ManageProductsPage extends React.Component<any, any> {

  state = {
    selectedProduct: null
  };
  handleEditClick = (id) => {
    this.setState(() => ({ selectedProduct: this.props.productsMap[id] }));
    this.props.history.push(this.props.match.url + "/edit");
  }

  handleUpdate = (product) => {
    this.props.updateProduct(product._id, product).then(() => {
      this.props.history.goBack();
    });
  }

  handleDeleteClick = (id) => {
    this.props.deleteProduct(id);
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
              <h2>All Products</h2>
              <ProductsContainer handleEditClick={this.handleEditClick} handleDeleteClick={this.handleDeleteClick} />
              <hr />
              <h2>Add Product</h2>
              <ProductForm
                onSubmit={this.props.addProduct}
              />
            </div>);
          }}
        />
        <Route
          path={match.url + "/edit"}
          exact={true}
          render={() => {
            console.log(this.state.selectedProduct);
            // tslint:disable-next-line:max-line-length
            return <ProductForm product={this.state.selectedProduct} onSubmit={this.handleUpdate} />;
          }}
        />
      </Switch>
    );
  }
}

const mapStateToProps = ({ productsData }) => {
  return {
    productsList: productsData.productsList,
    productsMap: productsData.productsMap
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getProducts() {
      dispatch(getProductsThunk());
    },
    addProduct(details: any) {
      return dispatch(addProductThunk(details));
    },
    updateProduct(id: any, details: any) {
      return dispatch(updateProductThunk(id, details));
    },
    deleteProduct(id: any) {
      return dispatch(deleteProductThunk(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ManageProductsPage));