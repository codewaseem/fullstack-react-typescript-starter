import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import App from "./client/App";
import getStore from "./store";
import { getAuthData } from "./client/utils";
import { getProductsThunk, deleteProductThunk } from "./store/products";
// tslint:disable-next-line:max-line-length

import "semantic-ui-css/semantic.min.css";

let data;
if ((window as any).__INITIAL_DATA__) {
  data = (window as any).__INITIAL_DATA__;
  if (localStorage && getAuthData()) {
    data.auth = { isLoggedIn: true, user: getAuthData().user };
  }
}

const store = getStore(data);
(window as any).store = store;
(window as any).getProducts = getProductsThunk;
(window as any).deleteProduct = deleteProductThunk;

ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  ,
  document.getElementById("root")
);

if (module.hot) {
  module.hot.accept();
}
