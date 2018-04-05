import * as React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { loginUserThunk } from "../../store/user";

const validate = (values) => {
  const errors: any = {};
  if (!values.username) {
    errors.username = "Required";
  }
  if (!values.password) {
    errors.password = "Required";
  }
  return errors;
};

export class LoginForm extends React.Component<any, any> {
  render() {
    const { handleSubmit, pristine, submitting, valid } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Email</label>
          <Field name="username" component="input" placeholder="user@drivenSociety.com" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <Field name="password" component="input" type="password" />
        </div>
        <button type="submit" disabled={pristine || submitting || !valid}>Login</button>
      </form>
    );
  }
}

const ReduxLoginForm = reduxForm({
  form: "Login",
  validate,
  initialValues: {
    username: "",
    password: ""
  }
})(LoginForm);

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: ({ username, password }) => {
      dispatch(loginUserThunk(username, password));
    }
  };
};

const LoginFormContainer = connect(mapStateToProps, mapDispatchToProps)(ReduxLoginForm);

export default LoginFormContainer;