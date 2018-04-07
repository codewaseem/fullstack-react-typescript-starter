import { Loader } from "../components";
import * as Loadable from "react-loadable";
import * as React from "react";

export const AdminHome = Loadable({
  loader: () => import("./AdminPage"),
  loading() {
    return <Loader />;
  }
});

export const ManageProductsView = Loadable({
  loader: () => import("./ManageProducts"),
  loading() {
    return <Loader />;
  }
});

export const ManageAboutUsView = Loadable({
  loader: () => import("./ManageAboutSection"),
  loading() {
    return <Loader />;
  }
});

export const ManageEventsView = Loadable({
  loader: () => import("./ManageEvents"),
  loading() {
    return <Loader />;
  }
});

export const ManageGuestsView = Loadable({
  loader: () => import("./ManageGuests"),
  loading() {
    return <Loader />;
  }
});

export const ManageSponsorsView = Loadable({
  loader: () => import("./ManageSponsors"),
  loading() {
    return <Loader />;
  }
});

export const ManageTestimonialsView = Loadable({
  loader: () => import("./ManageTestimonials"),
  loading() {
    return <Loader />;
  }
});

export const ManageArticlesView = Loadable({
  loader: () => import("./ManageArticles"),
  loading() {
    return <Loader />;
  }
});