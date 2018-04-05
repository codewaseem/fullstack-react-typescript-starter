import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "./reducers";
import thunk from "redux-thunk";

export default function getStore(initialState: any = {}) {
  return createStore(rootReducer, initialState, applyMiddleware(thunk));
}