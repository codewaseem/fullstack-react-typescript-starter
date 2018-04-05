import { combineReducers } from "redux";
import { userReducer } from "./user";
import { reducer as formReducer } from "redux-form";

export const rootReducer = combineReducers({
  auth: userReducer,
  form: formReducer
});