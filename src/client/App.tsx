import * as React from "react";
import { Switch, Route, Link } from "react-router-dom";
import { PrivateRoute } from "./components";
import AdminPage from "./pages/AdminPage";
import LandingPage from "./pages/LandingPage";
import { LoginPage } from "./containers";
// import FourOFour from "./pages/"
import "semantic-ui-css/semantic.min.css";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact={true} path="/" component={LandingPage} />
          <PrivateRoute path="/admin-panel" allow={true} component={AdminPage} />
          <Route path="/login" component={LoginPage} />
        </Switch>
      </div>
    );
  }
}