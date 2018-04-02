import * as React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const PrivateRoute = ({ component: Component, auth, ...rest }) => {
  // tslint:disable-next-line:jsx-wrap-multiline
  return <Route
    {...rest}
    render={(props) => (auth.isLoggedIn ? <Component {...props} /> : <Redirect to="/login" />)}
  />;
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  };
};

export default connect(mapStateToProps, false)(PrivateRoute);