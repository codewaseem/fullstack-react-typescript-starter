import { combineReducers } from "redux";
import { userReducer } from "./user";
import { reducer as formReducer } from "redux-form";
import { productReducer } from "./products";
export const rootReducer = combineReducers({
  auth: userReducer,
  productsData: productReducer,
  form: formReducer
});