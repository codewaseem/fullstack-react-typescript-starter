import { getAuthData } from "../client/utils";
import axios from "axios";

function setAuthHeaders() {
  if (window && localStorage) {
    const { token } = getAuthData() || {} as any;
    // tslint:disable-next-line:prefer-conditional-expression
    if (token) {
      axios.defaults.headers.common.Authorization = "Bearer " + token;
    } else {
      axios.defaults.headers.common.Authorization = null;
    }
  }
}

export function loginUser(username: string, password: string) {
  return axios.post("/users/login", {
    username,
    password
  }).then(parseData)
    .then(verifyData);
}

function verifyData(response: any) {
  if (response.success) {
    return response.data;
  } else {
    throw response;
  }
}

function parseData(response: any) {
  return console.log(response) || response.data;
}

export function getProducts() {
  return axios.get("/products/getAll")
    .then(parseData)
    .then(verifyData);
}

export function addProduct(productDetails: any) {
  setAuthHeaders();
  return axios.post("/products/add", {
    productDetails
  }).then(parseData).then(verifyData);
}

export function updateProduct(productID: any, productDetails: any) {
  setAuthHeaders();
  return axios.post("/products/update", {
    productID,
    productDetails
  }).then(parseData).then(verifyData);
}