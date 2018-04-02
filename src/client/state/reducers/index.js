import { combineReducers } from "redux";
import authReducer from "./authReducer";
import productReducer from "./productReducer";

const reducer = combineReducers({
  auth: authReducer,
  products: productReducer
});

export default reducer;