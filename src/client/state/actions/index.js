import { loginUser as loginUserRequest, getProducts as getProductsRequest, addProduct as addProductRequest } from "../../../shared";
import { saveAuthData, clearAuthData } from "../../utils";


export const LOGGING_IN = "LOGIN_USER";
export const loggingIn = () => {
  return {
    type: LOGGING_IN
  }
}

export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";

export const loginUserSuccess = (user) => {
  return {
    type: LOGIN_USER_SUCCESS,
    user
  }
}

export const LOGIN_USER_FAILURE = "LOGIN_USER_FAILURE";

export const loginUserFailure = (error) => {
  return {
    type: LOGIN_USER_FAILURE,
    error
  }
}

export const LOGOUT_USER = "LOGOUT_USER";
export function logoutUserSuccess() {
  return {
    type: LOGOUT_USER
  }
}

export function loginUser(username, password) {
  return function (dispatch) {
    dispatch(loggingIn());
    return loginUserRequest(username, password)
      .then((data) => {
        console.log(data);
        console.log("dispatching");
        dispatch(loginUserSuccess(data.user));
        saveAuthData(data);
      })
      .catch(() => loginUserFailure("Authentication Failed"));
  }
}

export function logoutUser() {
  return function (dispatch) {
    clearAuthData();
    dispatch(logoutUserSuccess());
    return Promise.resolve(true);
  }
}

export const ADDING_PRODUCT = "ADDING_PRODUCT";

export function addingProduct() {
  return {
    type: ADDING_PRODUCT
  }
}

// export function addProduct() {
//   return (dispatch) => {
//     return addProductRequest()
//   }
// }

export const UPDATE_PRODUCT = "UPDATE_PRODUCT";

export function updateProductAction(productID, product) {
  return {
    type: UPDATE_PRODUCT,
    product
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