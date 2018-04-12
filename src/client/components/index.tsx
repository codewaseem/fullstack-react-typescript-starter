import * as Loadable from "react-loadable";
import * as React from "react";

import Loader from "./Loader";

export const ProductViewList = Loadable({
  loader: () => import("./ProductViewList"),
  loading() {
    return (<Loader />);
  }
});

export const EventViewList = Loadable({
  loader: () => import("./EventViewList"),
  loading() {
    return (<Loader />);
  }
});

export const GuestViewList = Loadable({
  loader: () => import("./GuestViewList"),
  loading() {
    return (<Loader />);
  }
});

export const SponsorViewList = Loadable({
  loader: () => import("./SponsorViewList"),
  loading() {
    return (<Loader />);
  }
});

export const TestimonialViewList = Loadable({
  loader: () => import("./TestimonialViewList"),
  loading() {
    return (<Loader />);
  }
});

export const ArticleViewList = Loadable({
  loader: () => import("./ArticleViewList"),
  loading() {
    return (<Loader />);
  }
});

export const UserViewList = Loadable({
  loader: () => import("./UserViewList"),
  loading() {
    return (<Loader />);
  }
});

export const AboutUsView = Loadable({
  loader: () => import("./AboutUs"),
  loading() {
    return (<Loader />);
  }
});

export {default as SubmitButton} from "./SubmitButton";
export { default as Loader } from "./Loader";
export { default as PrivateRoute } from "./PrivateRoute";