import * as React from "react";
import { Link } from "react-router-dom";

export default class LandingPage extends React.PureComponent {

  public render() {
    return (
      <div>
        <h1>This is landing page</h1>
        <Link to={"/login"}>Login</Link>
      </div>
    );
  }
}