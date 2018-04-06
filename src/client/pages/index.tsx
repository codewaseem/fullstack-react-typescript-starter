import * as Loadable from "react-loadable";
import * as React from "react";
import { Loader } from "../components";

export const LoginPage = Loadable({
  loader: () => import("./LoginPage"),
  loading() {
    return <Loader />;
  }
});

export const AdminLoginPage = Loadable({
  loader: () => import("./AdminLoginPage"),
  loading() {
    return <Loader />;
  }
});