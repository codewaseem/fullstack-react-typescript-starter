import { Loader } from "../components";
import * as Loadable from "react-loadable";
import * as React from "react";

export const AdminHome = Loadable({
  loader: () => import("./AdminPage"),
  loading() {
    return <Loader />;
  }
});

export const ManageProductsView = Loadable({
  loader: () => import("./ManageProducts"),
  loading() {
    return <Loader />;
  }
});