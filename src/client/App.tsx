import * as React from "react";
import { Switch, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
// import FourOFour from "./pages/"
import "semantic-ui-css/semantic.min.css";

export default class App extends React.Component {

  public render() {
    return (
      <div>
        <Link to={"/home"}>Home</Link>
        <Switch>
          <Route exact={true} path="/" component={LandingPage} />
          <Route path="/home" component={HomePage} />
          <Route path="/login" component={LoginPage} />
        </Switch>
      </div>
    );
  }
}