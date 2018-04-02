import {
  GET_PRODUCTS,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAILURE,
  ADDING_PRODUCT,
  ADD_PRODUCT_SUCCESS
} from "../actions";
export default function productReducer(
  state: any = {
    isLoading: false,
    isError: false,
    products: null
  },
  action: any) {

  switch (action.type) {
    case GET_PRODUCTS: return {
      ...state,
      isLoading: true
    };

    case GET_PRODUCTS_SUCCESS: return {
      ...state,
      isLoading: false,
      productList: [...action.products],
      productMap: action.products.reduce((acc, currentProduct) => ({
        ...acc,
        [currentProduct._id]: currentProduct
        // tslint:disable-next-line:align
      }), {})
    };

    case GET_PRODUCTS_FAILURE: return {
      ...state,
      isLoading: false,
      isError: true
    };
    case ADD_PRODUCT_SUCCESS: return {
      ...state,
      isLoading: false,
      isError: true,
      productList: [...state.productList, action.product],
      productMap: { ...state.productMap, [action.product._id]: action.product }
    };
    default: return state;
  }
}