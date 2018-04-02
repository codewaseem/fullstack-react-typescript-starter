import { getAuthData } from "../client/utils";
import axios from "axios";

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
  return axios.post("/products/add", {
    productDetails
  }).then(parseData).then(verifyData);
}