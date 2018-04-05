import * as Loadable from "react-loadable";
import * as React from "react";

import Loader from "./Loader";

export const ProductViewList = Loadable({
  loader: () => import("./ProductViewList"),
  loading() {
    return (<Loader />);
  }
});

export { default as Loader } from "./Loader";
export { default as PrivateRoute } from "./PrivateRoute";