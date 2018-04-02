import {
  getProducts as getProductsRequest, addProduct as addProductRequest,
  updateProduct as updateProductRequest
} from "../../../shared";



export const ADDING_PRODUCT = "ADDING_PRODUCT";

export function addingProduct() {
  return {
    type: ADDING_PRODUCT
  }
}

export const ADD_PRODUCT_SUCCESS = "ADD_PRODUCT_SUCCESS";

export const addProductSuccess = (product) => {
  return {
    type: ADD_PRODUCT_SUCCESS,
    product
  }
}

export const ADD_PRODUCT_FAILURE = "ADD_PRODUCT_FAILURE";

export const addProductFailure = (error) => {
  return {
    type: ADD_PRODUCT_FAILURE,
    error
  }
}

export function addProduct(productDetails) {
  return function (dispatch) {
    dispatch(addingProduct())
    return addProductRequest(productDetails)
      .then((addedProduct) => {
        dispatch(addProductSuccess(addedProduct));
      })
      .catch(() => {
        dispatch(addProductFailure("Failed to add product"));
      });
  }
}

export const UPDATING_PRODUCT = "UPDATING_PRODUCT";

export function updateProductAction() {
  return {
    type: UPDATING_PRODUCT
  }
}

export const updateProduct = (productID, productDetails) => {
  return function (dispatch) {
    console.log("calling this");
    dispatch(updateProductAction());
    return updateProductRequest(productID, productDetails)
      .then((updatedProduct) => {
        dispatch(updateProductSuccess(updatedProduct));
        return updatedProduct;
      })
      .catch(() => {
        dispatch(updateProductFailure("Failed to update product"));
      });
  }
}

export const UPDATE_PRODUCT_SUCCESS = "UPDATE_SUCCESS";

export const updateProductSuccess = (updatedProduct) => {
  return {
    type: UPDATE_PRODUCT_SUCCESS,
    updatedProduct
  }
}

export const UPDATE_PRODUCT_FAILURE = "UPDATE_FAILURE";

export const updateProductFailure = (error) => {
  return {
    type: UPDATE_PRODUCT_FAILURE,
    error
  }
}

export const GET_PRODUCTS = "GET_ALL_PRODUCTS";

export function getAllProductsAction() {
  return {
    type: GET_PRODUCTS
  }
}

export const GET_PRODUCTS_SUCCESS = "GET_PRODUCTS_SUCCESS";

export function getProductsSuccess(products) {
  return {
    type: GET_PRODUCTS_SUCCESS,
    products
  }
}

export const GET_PRODUCTS_FAILURE = "GET_PRODUCTS_FAILURE";

export function getProductsFailure() {
  return {
    type: GET_PRODUCTS_FAILURE
  }
}

export function getAllProducts() {
  return function (dispatch) {
    dispatch(getAllProductsAction());
    return getProductsRequest()
      .then(products => {
        dispatch(getProductsSuccess(products));
      })
      .catch(() => {
        dispatch(getProductsFailure());
      });
  }
}

export const DELETE_PRODUCT = "DELETE_PRODUCT";

export function deleteProduct(productId) {
  return {
    type: DELETE_PRODUCT,
    productId
  }
}