import { connect } from "react-redux";
// import { getAllProducts, addProduct, updateProduct } from "../state/actions";
import { ManageProducts } from "../pages";

const mapStateToProps = (state) => {
  return {
    products: state.products
  };
};

const mapDispatchToProps = (dispatch) => {
  // return {
  //   getProducts: () => {
  //     dispatch(getAllProducts());
  //   },
  //   addProduct: (productDetails: any) => {
  //     dispatch(addProduct(productDetails));
  //   },
  //   updateProduct: (productID, productDetails) => {
  //     console.log("dis");
  //     return dispatch(updateProduct(productID, productDetails));
  //   }
  // };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageProducts);