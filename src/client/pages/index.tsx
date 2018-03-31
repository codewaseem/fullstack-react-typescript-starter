import * as Loadable from "react-loadable";
import * as React from "react";

export const Products = Loadable({
  loader: () => import("./ManageProducts"),
  loading() {
    return <div>Loading...</div>;
  }
});