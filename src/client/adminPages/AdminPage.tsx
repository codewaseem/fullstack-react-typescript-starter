import * as React from "react";
import { Container, Card } from "semantic-ui-react";
import { Link, Route, Switch, withRouter } from "react-router-dom";
import {
  ManageProductsView, ManageAboutUsView, ManageEventsView,
  ManageGuestsView, ManageSponsorsView, ManageTestimonialsView, ManageArticlesView,
  ManageUsersView
} from "./";

import { MyComponent } from "./NewTest";

import { EnsureAdmin } from "./EnsureIsAdmin";

const adminSections = {
  "/manage_products": {
    component: ManageProductsView,
    name: "Products",
    description: "Manage products displayed on home/header section."
  },
  "/manage_events": {
    component: ManageEventsView,
    name: "Events",
    description: "Manage driven society public and private events."
  },
  "/manage_guests": {
    component: ManageGuestsView,
    name: "Community",
    description: "Manage driven society community/guests."
  },
  "/manage_testimonials": {
    component: ManageTestimonialsView,
    name: "Testimonials",
    description: "Testimonials to be displayed on testimonial section."
  },
  "/manage_articles": {
    component: ManageArticlesView,
    name: "Articles Preview",
    description: "Manage content displayed on 5Senses section."
  },
  "/manage_users": {
    component: ManageUsersView,
    name: "Members",
    description: "Manage driven society members."
  },
  "/manage_about_us": {
    component: ManageAboutUsView,
    name: "About Us Section",
    description: "Manage content display on about us section"
  },
};

class HomePage extends React.Component<any, any> {

  public render() {
    return (
      <div className="sm:p-4 h-full relative">
        <div className="p-4">
          <Switch>
            <Route path={this.props.match.url + "/crud"} component={MyComponent} />
            {Object.keys(adminSections).map((key) => {
              return <Route key={key} path={this.props.match.url + key} component={adminSections[key].component} />;
            })}

            <Route
              // tslint:disable-next-line:jsx-no-multiline-js
              component={AdminItems}
            />
          </Switch>
        </div>
      </div>
    );
  }
}

const AdminItems = ({ match, history }) => {
  return (
    <div className="flex flex-wrap items-stretch justify-center">
      {Object.keys(adminSections).map((key) => {
        const { name, description } = adminSections[key];
        return (
          <div key={key} className="bg-white w-full sm:w-1/3 m-1 shadow-lg rounded-lg overflow-hidden">
            <div className="sm:flex sm:items-center px-6 py-4">
              <div className="text-center sm:text-left sm:flex-grow">
                <div className="mb-4">
                  <p className="text-xl leading-tight text-black">{name}</p>
                  <p className="text-sm leading-tight text-grey-dark">{description}</p>
                </div>
                <div>
                  <button
                    onClick={() => { history.push(match.url + key); }}
                    // tslint:disable-next-line:max-line-length
                    className="text-xs font-semibold rounded-full px-4 py-1 leading-normal bg-white border border-black text-black hover:bg-black hover:text-white"
                  >
                    {"Manage " + name}
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default EnsureAdmin(withRouter(HomePage));