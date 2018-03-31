import * as React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, allow, ...rest }) => {
  return <Route
    {...rest}
    render={(props) => (allow ? <Component {...props} /> : <Redirect to="/login" />)}
  />;
};

export default PrivateRoute;