import { getAuthData } from "../client/utils";
import { clientAxios as axios } from "./axios";

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
  return axios.get("/products/")
    .then(parseData)
    .then(verifyData);
}

export function addProduct(details: any) {
  setAuthHeaders();
  return axios.post("/products/add", {
    details
  }).then(parseData).then(verifyData);
}

export function updateProduct(id: any, details: any) {
  setAuthHeaders();
  return axios.post("/products/update", {
    id,
    details
  }).then(parseData).then(verifyData);
}

export function getPageSections() {
  setAuthHeaders();
  return axios.get("/pageSettings/")
    .then(parseData).then(verifyData);
}

export function updateAboutSection(details: any) {
  return postRequestForPageSection("/aboutSection/", details);
}

function postRequestForPageSection(sectionPath: string, details: any) {
  setAuthHeaders();
  return axios.post(sectionPath, {
    details
  }).then(parseData).then(verifyData);
}
