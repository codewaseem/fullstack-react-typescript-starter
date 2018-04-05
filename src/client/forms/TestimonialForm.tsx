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
    if (!values.testimonial) {
      errors.testimonial = "Required";
    }
    if (!values.name) {
      errors.name = "Required";
    }
    return errors;
  }
};

class GuestForm extends React.Component<any, any> {
  render() {
    const { handleSubmit, pristine, submitting, valid } = this.props;
    return (
      <form onSubmit={handleSubmit} >
        <h2>Testimonial Form</h2>
        <div>
          <label htmlFor="name" >Name</label>
          <Field name="name" component="input" placeholder="Name" />
        </div>
        <div>
          <label htmlFor="imageLink" >Image Link</label>
          <Field name="imageLink" component="input" placeholder="Image" />
        </div>
        <div>
          <label htmlFor="testimonial" >Testimonial</label>
          <Field name="testimonial" component="input" placeholder="Testimonial" />
        </div>
        <button type="submit" disabled={pristine || submitting || !valid}>Save</button>
      </form>
    );
  }
}

export default reduxForm({
  form: "Testimonial",
  validate,
  initialValues: {
    name: "",
    Testimonial: "",
    imageLink: ""
  }
})(GuestForm);