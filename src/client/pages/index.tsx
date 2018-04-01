import * as Loadable from "react-loadable";
import * as React from "react";

export const Products = Loadable({
  loader: () => import("./ManageProducts"),
  loading() {
    return <div>Loading...</div>;
  }
});

export const LoginPage = Loadable({
  loader: () => import("./LoginPage"),
  loading() {
    return <div>Loading...</div>;
  }
});