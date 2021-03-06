import { combineReducers } from "redux";
import { userReducer } from "./user";
import { reducer as formReducer } from "redux-form";
import { productReducer } from "./products";
import { aboutUsReducer } from "./aboutus";
import { eventReducer } from "./events";
import { guestReducer } from "./guests";
import { sponsorReducer } from "./sponsors";
import { testimonialReducer } from "./testimonials";
import { articleReducer } from "./articles";
import { usersReducer } from "./users";
import { settingsReducer } from "./pagesetting";

export const rootReducer = combineReducers({
  pageSettingsData: settingsReducer,
  auth: userReducer,
  productsData: productReducer,
  aboutUsData: aboutUsReducer,
  eventsData: eventReducer,
  guestsData: guestReducer,
  sponsorsData: sponsorReducer,
  testimonialsData: testimonialReducer,
  articlesData: articleReducer,
  usersData: usersReducer,
  form: formReducer,
});