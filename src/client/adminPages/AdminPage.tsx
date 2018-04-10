import * as React from "react";
import { Container, Card } from "semantic-ui-react";
import { Link, Route, Switch, withRouter } from "react-router-dom";
import {
  ManageProductsView, ManageAboutUsView, ManageEventsView,
  ManageGuestsView, ManageSponsorsView, ManageTestimonialsView, ManageArticlesView,
  ManageUsersView
} from "./";
import { EnsureAdmin } from "./EnsureIsAdmin";

const adminSections = {
  "/manage_products": ManageProductsView,
  "/manage_about_us": ManageAboutUsView,
  "/manage_events": ManageEventsView,
  "/manage_guests": ManageGuestsView,
  "/manage_sponsors": ManageSponsorsView,
  "/manage_testimonials": ManageTestimonialsView,
  "/manage_articles": ManageArticlesView,
  "/manage_users": ManageUsersView
};

class HomePage extends React.Component<any, any> {

  public render() {
    return (
      <div className="sm:p-4 h-full relative">
        <div className="absolute abs-center w-4/5">
          <Switch>
            {Object.keys(adminSections).map((key) => {
              return <Route key={key} path={this.props.match.url + key} component={adminSections[key]} />;
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
    <div className="flex flex-wrap">
      {Object.keys(adminSections).map((key) => {
        return (
          <div
            key={key}
            className=" group w-full h-32 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 cursor-pointer m-2 "
            onClick={() => history.push(match.url + key)}
          >

            {/*tslint:disable-next-line:max-line-length*/}
            <div className="h-full group-hover:bg-black border-2 border-white bg-white p-4 flex flex-col justify-between leading-normal">
              <div className="group mb-8">
                {/*tslint:disable-next-line:max-line-length */}
                <div className="text-black group-hover:text-white  font-bold text-xl break-words mb-2">{key.slice(1).toUpperCase().split("_").join(" ")}</div>

              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default EnsureAdmin(withRouter(HomePage));