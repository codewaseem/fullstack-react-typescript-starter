import * as React from "react";
import { Redirect } from "react-router-dom";
import LoginForm from "../forms/LoginForm";

export default class LoginPage extends React.Component {

  render() {
    return (
      <div className="h-full">
        <div className="absolute abs-center">
          <h2 className="text-center text-white p-2">Admin Login</h2>
          <LoginForm redirectTo="/admin-panel" />
        </div>
      </div>
    );
  }
}