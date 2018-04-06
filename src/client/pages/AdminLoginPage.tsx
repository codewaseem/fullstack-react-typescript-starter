import * as React from "react";
import { Redirect } from "react-router-dom";
import LoginForm from "../forms/LoginForm";

export default class LoginPage extends React.Component {

  render() {
    return (
      <div>
        <LoginForm redirectTo="/admin-panel" />
      </div>
    );
  }
}