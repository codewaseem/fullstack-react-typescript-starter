import * as React from "react";
import { Link } from "react-router-dom";
import ProductForm from "../forms/AboutUsForm";

export default class LandingPage extends React.PureComponent {

  submit = (values) => {
    console.log(values);
  }
  public render() {
    return (
      <div>
        <h1>This is landing page</h1>
        <Link to={"/login"}>Login</Link>
        <ProductForm
          onSubmit={this.submit}
        />
      </div>
    );
  }
}