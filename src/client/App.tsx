import * as React from "react";
import { Switch, Route, Link } from "react-router-dom";
import { PrivateRoute } from "./components";
import { AdminHome } from "./adminPages";
import LandingPage from "./pages/LandingPage";
import { LoginPage, AdminLoginPage } from "./pages";
// import FourOFour from "./pages/"
import "semantic-ui-css/semantic.min.css";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact={true} path="/" component={LandingPage} />
          <PrivateRoute path="/admin-panel" component={AdminHome} />
          <Route path="/login" component={LoginPage} />
          <Route path="/admin-login" component={AdminLoginPage} />
        </Switch>
      </div>
    );
  }
}