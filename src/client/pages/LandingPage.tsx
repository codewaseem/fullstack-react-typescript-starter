import * as React from "react";
import { Link } from "react-router-dom";
import ProductForm from "../forms/LoginForm";

export default class LandingPage extends React.PureComponent {

  submit = (values) => {
    console.log(values);
  }
  public render() {
    return (
      <div>
        <h1>This is landing page</h1>
        <Link to={"/login"}>Login</Link>
        <ProductForm />
      </div>
    );
  }
}