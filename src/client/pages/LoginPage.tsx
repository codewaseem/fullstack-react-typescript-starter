import * as React from "react";
import { Redirect, Link } from "react-router-dom";
import LoginForm from "../forms/LoginForm";

export default class LoginPage extends React.Component {

  render() {
    return (
      <div className="h-full">
        <div className="absolute abs-center">
          <LoginForm redirectTo="/" />
          <small className="w-full block text-center"><Link to="/admin-login">Login is admin</Link></small>
        </div>
      </div>
    );
  }
}