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
  return axios.post("/users/login/", {
    username,
    password
  }).then(parseData)
    .then(verifyData);
}

export function verifyAdmin() {
  setAuthHeaders();
  return axios.post("/users/isAdmin").then(parseData).then(verifyData);
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

export function deleteProduct(id: string) {
  setAuthHeaders();
  return axios.post("/products/delete/", {
    id
  }).then(parseData).then(verifyData);
}

export function getPageSetting() {
  setAuthHeaders();
  return axios.get("/pageSettings/")
    .then(parseData).then(verifyData);
}

export function updatePageSetting(details: any) {
  setAuthHeaders();
  return axios.post("/pageSettings/", {
    details
  }).then(parseData).then(verifyData);
}

export function getAboutUsDetails() {
  return axios.get("/aboutSection").then(parseData).then(verifyData);
}

export function updateAboutUsDetails(details: any) {
  return postRequestForPageSection("/aboutSection/", details);
}

function postRequestForPageSection(sectionPath: string, details: any) {
  setAuthHeaders();
  return axios.post(sectionPath, {
    details
  }).then(parseData).then(verifyData);
}

export function getEvents() {
  setAuthHeaders();
  return axios.get("/events/allEvents")
    .then(parseData)
    .then(verifyData);
}

export function addEvent(details: any) {
  setAuthHeaders();
  return axios.post("/events/add", {
    details
  }).then(parseData).then(verifyData);
}

export function updateEvent(id: any, details: any) {
  setAuthHeaders();
  return axios.post("/events/update", {
    id,
    details
  }).then(parseData).then(verifyData);
}

export function deleteEvent(id: string) {
  setAuthHeaders();
  return axios.post("/events/delete/", {
    id
  }).then(parseData).then(verifyData);
}

export function getGuests() {
  return axios.get("/guests/")
    .then(parseData)
    .then(verifyData);
}

export function addGuest(details: any) {
  setAuthHeaders();
  return axios.post("/guests/add", {
    details
  }).then(parseData).then(verifyData);
}

export function updateGuest(id: any, details: any) {
  setAuthHeaders();
  return axios.post("/guests/update", {
    id,
    details
  }).then(parseData).then(verifyData);
}

export function deleteGuest(id: string) {
  setAuthHeaders();
  return axios.post("/guests/delete/", {
    id
  }).then(parseData).then(verifyData);
}

export function getSponsors() {
  return axios.get("/sponsors/")
    .then(parseData)
    .then(verifyData);
}

export function addSponsor(details: any) {
  setAuthHeaders();
  return axios.post("/sponsors/add", {
    details
  }).then(parseData).then(verifyData);
}

export function updateSponsor(id: any, details: any) {
  setAuthHeaders();
  return axios.post("/sponsors/update", {
    id,
    details
  }).then(parseData).then(verifyData);
}

export function deleteSponsor(id: string) {
  setAuthHeaders();
  return axios.post("/sponsors/delete/", {
    id
  }).then(parseData).then(verifyData);
}

export function getTestimonials() {
  return axios.get("/testimonials/")
    .then(parseData)
    .then(verifyData);
}

export function addTestimonial(details: any) {
  setAuthHeaders();
  return axios.post("/testimonials/add", {
    details
  }).then(parseData).then(verifyData);
}

export function updateTestimonial(id: any, details: any) {
  setAuthHeaders();
  return axios.post("/testimonials/update", {
    id,
    details
  }).then(parseData).then(verifyData);
}

export function deleteTestimonial(id: string) {
  setAuthHeaders();
  return axios.post("/testimonials/delete/", {
    id
  }).then(parseData).then(verifyData);
}

export function getArticles() {
  return axios.get("/articles/")
    .then(parseData)
    .then(verifyData);
}

export function addArticle(details: any) {
  setAuthHeaders();
  return axios.post("/articles/add", {
    details
  }).then(parseData).then(verifyData);
}

export function updateArticle(id: any, details: any) {
  setAuthHeaders();
  return axios.post("/articles/update", {
    id,
    details
  }).then(parseData).then(verifyData);
}

export function deleteArticle(id: string) {
  setAuthHeaders();
  return axios.post("/articles/delete/", {
    id
  }).then(parseData).then(verifyData);
}

export function getUsers() {
  return axios.get("/users/")
    .then(parseData)
    .then(verifyData);
}

export function addUser(details: any) {
  setAuthHeaders();
  return axios.post("/users/add", {
    details
  }).then(parseData).then(verifyData);
}

export function updateUser(id: any, details: any) {
  setAuthHeaders();
  return axios.post("/users/update", {
    id,
    details
  }).then(parseData).then(verifyData);
}

export function deleteUser(id: string) {
  setAuthHeaders();
  return axios.post("/users/delete/", {
    id
  }).then(parseData).then(verifyData);
}