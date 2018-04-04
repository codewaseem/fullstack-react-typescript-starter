import { combineReducers } from "redux";
import authReducer from "./authReducer";
import productReducer from "./productReducer";
import { reducer as formReducer } from 'redux-form'
import { reducer as pageSectionReducer } from "../actions/pageSectionActions";
const reducer = combineReducers({
  auth: authReducer,
  products: productReducer,
  form: formReducer,
  pageSections: pageSectionReducer
});

export default reducer;