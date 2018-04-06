import { combineReducers } from "redux";
import { userReducer } from "./user";
import { reducer as formReducer } from "redux-form";
import { productReducer } from "./products";
import { aboutUsReducer } from "./aboutus";
import { eventReducer } from "./events";
import { guestReducer } from "./guests";

export const rootReducer = combineReducers({
  auth: userReducer,
  productsData: productReducer,
  aboutUsData: aboutUsReducer,
  eventsData: eventReducer,
  guestsData : guestReducer,
  form: formReducer
});