import Axios from "axios";

export const clientAxios = Axios.create({
  // baseURL : "https://infinite-mesa-64934.herokuapp.com"
  baseURL : "" ,
  headers : {
    "Access-Control-Allow-Origin": "*"
  }
});