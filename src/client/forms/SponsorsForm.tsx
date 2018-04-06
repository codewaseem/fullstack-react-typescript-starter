import * as React from "react";
import { Field, reduxForm } from "redux-form";

const validate = (values) => {
  if (!values) {
    return;
  } else {
    const errors: any = {};

    if (!values.imageLink) {
      errors.imageLink = "Required";
    }
    if (!values.name) {
      errors.name = "Required";
    }
    return errors;
  }
};

class SponsorForm extends React.Component<any, any> {
  componentDidMount() {
    this.props.initialize(this.props.initialValues);
  }
  render() {
    const { handleSubmit, pristine, submitting, valid } = this.props;
    return (
      <form onSubmit={handleSubmit} >
        <h2>Sponsors Form</h2>
        <div>
          <label htmlFor="name" >Name</label>
          <Field name="name" component="input" placeholder="Name" />
        </div>
        <div>
          <label htmlFor="imageLink" >Image Link</label>
          <Field name="imageLink" component="input" placeholder="Image" />
        </div>
        <button type="submit" disabled={pristine || submitting || !valid}>Save</button>
      </form>
    );
  }
}

export default reduxForm({
  form: "SponsorForm",
  validate,
  initialValues: {
    name: "",
    imageLink: ""
  }
})(SponsorForm);