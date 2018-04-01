import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import App from "./client/App";
import getStore from "./client/state";

let data;
if ((window as any).__INITIAL_DATA__) {
  data = (window as any).__INITIAL_DATA__;
}

const store = getStore(data);
(window as any).store = store;
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
