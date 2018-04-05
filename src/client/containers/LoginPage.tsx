import * as React from "react";
import { connect } from "react-redux";
import { LoginPage } from "../pages";
import { loginUserThunk } from "../../store/user";

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFormSubmit: (username, password) => {
      dispatch(loginUserThunk(username, password));
    }
  };
};

const LoginFormContainer = connect(mapStateToProps, mapDispatchToProps)(LoginPage);

export default LoginFormContainer;