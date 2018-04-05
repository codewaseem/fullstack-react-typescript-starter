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
    if (!values.jobTitle) {
      errors.jobTitle = "Required";
    }
    if (!values.name) {
      errors.name = "Required";
    }
    if (!values.description) {
      errors.description = "Required";
    }
    return errors;
  }
};

class GuestForm extends React.Component<any, any> {
  render() {
    const { handleSubmit, pristine, submitting, valid } = this.props;
    return (
      <form onSubmit={handleSubmit} >
        <h2>Guest Form</h2>
        <div>
          <label htmlFor="name" >Name</label>
          <Field name="name" component="input" placeholder="Name" />
        </div>
        <div>
          <label htmlFor="imageLink" >Image Link</label>
          <Field name="imageLink" component="input" placeholder="Image" />
        </div>
        <div>
          <label htmlFor="jobTitle" >Job Title</label>
          <Field name="jobTitle" component="input" placeholder="Job Title" />
        </div>
        <div>
          <label htmlFor="description" >Description</label>
          <Field name="description" component="textarea" placeholder="Description" />
        </div>
        <div>
          <label htmlFor="socialLinks.facebook">facebook</label>
          <Field name="socialLinks.facebook" component="input" placeholder="Facebook Link" />
        </div>
        <div>
          <label htmlFor="socialLinks.twitter">twitter</label>
          <Field name="socialLinks.twitter" component="input" placeholder="Twitter Link" />
        </div>
        <div>
          <label htmlFor="socialLinks.instagram">instagram</label>
          <Field name="socialLinks.instagram" component="input" placeholder="Instagram Link" />
        </div>
        <div>
          <label htmlFor="socialLinks.linkedIn">linkedIn</label>
          <Field name="socialLinks.linkedIn" component="input" placeholder="LinkedIn Link" />
        </div>
        <div>
          <label htmlFor="socialLinks.google">google</label>
          <Field name="socialLinks.google" component="input" placeholder="Google+ Link" />
        </div>
        <button type="submit" disabled={pristine || submitting || !valid}>Save</button>
      </form>
    );
  }
}

export default reduxForm({
  form: "Guests",
  validate,
  initialValues: {
    name: "",
    imageLink: "",
    jobTitle: "",
    description: "",
    socialLinks: {
      facebook: "",
      twitter: "",
      instagram: "",
      linkedIn: "",
      google: ""
    }
  }
})(GuestForm);