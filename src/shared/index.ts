import { getAuthData } from "../client/utils";
import axios from "axios";

export function loginUser(username: string, password: string) {
  return axios.post("/users/login", {
    username,
    password
  }).then((response) => console.log(response) || response.data)
    .then((response) => {
      if (response.success) {
        return response.data;
      } else {
        throw response;
      }
    });
}