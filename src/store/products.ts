import { createActions, handleActions } from "redux-actions";
import { getProducts, addProduct, updateProduct, deleteProduct } from "../shared";
import * as _ from "lodash";
export const {
  getProductsPending,
  getProductsSuccess,
  getProductsFailed,
  updateProductSuccess,
  addProductSuccess,
  deleteProductSuccess,
  selectProduct
} = createActions({
  GET_PRODUCTS_PENDING: undefined,
  GET_PRODUCTS_SUCCESS: (products) => ({ products }),
  GET_PRODUCTS_FAILED: (message) => ({ message }),
  UPDATE_PRODUCT_SUCCESS: (updatedProduct) => ({ updatedProduct }),
  ADD_PRODUCT_SUCCESS: (addedProduct) => ({ addedProduct }),
  DELETE_PRODUCT_SUCCESS: (deletedProduct) => ({ deletedProduct }),
  SELECT_PRODUCT: (productId) => ({ productId })
});

export const getProductsThunk = () => {
  return (dispatch) => {
    dispatch(getProductsPending());
    return getProducts()
      .then((products) => {
        dispatch(getProductsSuccess(products));
      })
      .catch((e) => {
        dispatch(getProductsFailed("FAILED TO GET PRODUCT"));
      });
  };
};

export const addProductThunk = (details) => {
  return (dispatch) => {
    dispatch(getProductsPending());
    return addProduct(details)
      .then((addedProduct) => {
        dispatch(addProductSuccess(addedProduct));
      })
      .catch((e) => {
        dispatch(getProductsFailed("FAILED TO ADD THE PRODUCT"));
      });
  };
};

export const updateProductThunk = (id, details) => {
  return (dispatch) => {
    dispatch(getProductsPending());
    return updateProduct(id, details)
      .then((updatedProduct) => {
        dispatch(updateProductSuccess(updatedProduct));
      })
      .catch((e) => {
        dispatch(getProductsFailed("FAILED TO UPDATE THE PRODUCT"));
      });
  };
};

export const deleteProductThunk = (id) => {
  return (dispatch) => {
    dispatch(getProductsPending());
    return deleteProduct(id)
      .then((updatedProduct) => {
        dispatch(deleteProductSuccess(updatedProduct));
      })
      .catch((e) => {
        dispatch(getProductsFailed("FAILED TO DELETE THE PRODUCT"));
      });
  };
};

const defaultState = {
  requestPending: false,
  requestFailed: false,
  productsList: [],
  productsMap: {},
  selectedProductId: null
};

export const productReducer = handleActions(
  {
    [getProductsPending](state: any) {
      return {
        ...state,
        requestPending: true
      };
    },
    [getProductsSuccess](state: any, { payload: { products } }: any) {
      const productsMap = products.reduce(
        (acc, obj) => {
          return { ...acc, [obj._id]: obj };
        },
        {});
      return {
        ...state,
        requestPending: false,
        requestFailed: false,
        productsList: products,
        productsMap
      };
    },
    [getProductsFailed](state: any) {
      return {
        ...state,
        requestFailed: true,
        requestPending: false
      };
    },
    [addProductSuccess](state: any, { payload: { addedProduct } }: any) {
      return {
        ...state,
        productsList: [...state.productsList, addedProduct],
        productsMap: {
          ...state.productsMap,
          [addedProduct._id]: addedProduct
        },
        requestPending: false,
        requestFailed: false
      };
    },
    [updateProductSuccess](state: any, { payload: { updatedProduct } }: any) {
      // tslint:disable-next-line:triple-equals
      return {
        ...state,
        productsList: _.map(state.productsList, (obj) => {
          // tslint:disable-next-line:triple-equals
          if (obj._id == updatedProduct._id) {
            return updatedProduct;
          }
          return obj;
        }),
        productsMap: {
          ...state.productsMap,
          [updatedProduct._id]: updatedProduct
        }
      };
    },
    [deleteProductSuccess](state: any, { payload: { deletedProduct } }: any) {
      const newProductsMap = {
        ...state.productsMap
      };
      delete newProductsMap[deletedProduct._id];
      return {
        ...state,
        productsMap: newProductsMap,
        // tslint:disable-next-line:triple-equals
        productsList: _.filter(state.productsList, (obj) => obj._id != deletedProduct._id)
      };
    }
  },
  defaultState
);