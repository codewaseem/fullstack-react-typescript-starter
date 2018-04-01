import { createStore, combineReducers, applyMiddleware } from "redux";
import reducers from "./reducers";
import thunk from "redux-thunk";

export default function getStore(initialState = {}) {
  return createStore(reducers, initialState, applyMiddleware(thunk));
};