import * as React from "react";
import { Field, reduxForm } from "redux-form";

const validate = (values) => {
  const errors: any = {};

  return errors;
};

class UserRegistrationForm extends React.Component<any, any> {

  render() {
    const { handleSubmit, pristine, submitting, valid } = this.props;
    return (
      <form onSubmit={handleSubmit} >
        <h2>Register User</h2>
        <button type="submit" disabled={pristine || submitting || !valid}>Save</button>
      </form>
    );
  }
}

const defaultAboutSection = {

};

export default reduxForm({
  form: "RegisterUser",
  validate,
  initialValues: {
  }
})(UserRegistrationForm);