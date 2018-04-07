import * as React from "react";
import { Link } from "react-router-dom";
import Header from "./LandingPage/Header";

export default class LandingPage extends React.PureComponent {

  submit = (values) => {
    console.log(values);
  }
  public render() {
    return (
      <Header />
    );
  }
}