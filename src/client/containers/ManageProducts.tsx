import { connect } from "react-redux";
import { getAllProducts, addProduct } from "../state/actions";
import { ManageProducts } from "../pages";

const mapStateToProps = (state) => {
  return {
    products: state.products
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getProducts: () => {
      dispatch(getAllProducts());
    },
    addProduct: (productDetails: any) => {
      dispatch(addProduct(productDetails));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageProducts);