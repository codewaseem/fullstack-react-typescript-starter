import * as React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { loginUserThunk } from "../../store/user";
import { withRouter } from "react-router-dom";

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

class LoginForm extends React.Component<any, any> {
  render() {
    const { handleSubmit, pristine, submitting, valid, auth, redirectTo, history } = this.props;
    if (auth.isLoggedIn && redirectTo) {
      history.push(redirectTo);
    }
    return (
      <div className=" max-w-xs shadow-lg">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mx-auto" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="username">
              Email
            </label>
            <Field
              className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
              name="username"
              component="input"
              placeholder="user@drivenSociety.com"
            />
          </div>
          <div className="mb-6">
            <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            {/* <input
              className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
              id="password"
              type="password"
              placeholder="******************"
            /> */}
            <Field
              className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
              name="password"
              component="input"
              type="password"
            />
            {false ? <p className="text-red text-xs italic">Please choose a password.</p> : ""}
          </div>
          <div className="flex items-center justify-between">
            <button
              // tslint:disable-next-line:max-line-length
              className="border-2 border-black bg-black hover:bg-white hover:text-black text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Sign In
            </button>
            <a className="inline-block align-baseline font-bold text-sm text-black hover:text-blue-darker" href="#">
              Forgot Password?
            </a>
          </div>
        </form>
        <p className="text-center text-grey text-xs">
          ©2018 DrivenSociety. All rights reserved.
        </p>
      </div>
    );
  }
}

const withRouterLoginForm = withRouter(LoginForm);

const ReduxLoginForm = reduxForm({
  form: "Login",
  validate,
  initialValues: {
    username: "",
    password: ""
  }
})(withRouterLoginForm);

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
      // <form onSubmit={handleSubmit}>
      //   <div>
      //     <label htmlFor="username">Email</label>
      //     <Field name="username" component="input" placeholder="user@drivenSociety.com" />
      //   </div>
      //   <div>
      //     <label htmlFor="password">Password</label>
      //     <Field name="password" component="input" type="password" />
      //   </div>
      //   <button type="submit" disabled={pristine || submitting || !valid}>Login</button>
      // </form>