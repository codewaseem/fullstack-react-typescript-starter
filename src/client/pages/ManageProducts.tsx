import * as React from "react";
import ProductForm from "../forms/ProductForm";
import { ProductsContainer } from "../containers";
import { Route, Switch, withRouter } from "react-router-dom";
import { addProductThunk } from "../../store/products";
import { connect } from "react-redux";

class ManageProductsPage extends React.Component<any, any> {
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
              <ProductsContainer />
              <hr />
              <h2>Add Product</h2>
              <ProductForm onSubmit={this.props.addProduct} />
            </div>);
          }}
        />
      </Switch>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addProduct(details: any) {
      dispatch(addProductThunk(details));
    }
  };
};

export default connect(null, mapDispatchToProps)(withRouter(ManageProductsPage));