import { connect } from "react-redux";
import { getAllProducts } from "../state/actions";
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
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageProducts);