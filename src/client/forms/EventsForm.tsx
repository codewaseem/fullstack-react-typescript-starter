import * as React from "react";
import { Field, reduxForm } from "redux-form";

const validate = (values) => {
  if (!values) {
    return;
  } else {
    const errors: any = {
      fieldOne: {},
      fieldTwo: {},
      fieldThree: {}
    };
    if (!values.name) {
      errors.name = "Required";
    }

    if (!values.description) {
      errors.description = "Required";
    }
    if (!values.date) {
      errors.date = "Required";
    }
    if (!values.rsvp_link) {
      errors.rsvp_link = "Required";
    }
    if (!values.fieldOne || !values.fieldOne.heading) {
      errors.fieldOne.heading = "Required";
    }
    if (!values.fieldTwo || !values.fieldTwo.heading) {
      errors.fieldTwo.heading = "Required";
    }
    if (!values.fieldThree || !values.fieldThree.heading) {
      errors.fieldThree.heading = "Required";
    }
    if (!values.fieldOne || !values.fieldOne.text) {
      errors.fieldOne.text = "Required";
    }
    if (!values.fieldTwo || !values.fieldTwo.text) {
      errors.fieldTwo.text = "Required";
    }
    if (!values.fieldThree || !values.fieldThree.text) {
      errors.fieldThree.text = "Required";
    }
    return errors;
  }
};

class EventsForm extends React.Component<any, any> {
  render() {
    const { handleSubmit, pristine, submitting, valid } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" >Name</label>
          <Field name="name" component="input" placeholder="Name" />
        </div>
        <div>
          <label htmlFor="title" >Title</label>
          <Field name="title" component="input" placeholder="Title" />
        </div>
        <div>
          <label htmlFor="privateEvent" >Private? </label>
          <Field name="privateEvent" component="input" type="checkbox" />
        </div>
        <div>
          <label htmlFor="description" >Description</label>
          <Field name="description" component="textarea" placeholder="Description" />
        </div>
        <div>
          <label htmlFor="date" >Date</label>
          <Field name="date" component="input" type="date" placeholder="Date" />
        </div>
        <div>
          <label htmlFor="rsvp_link">RSVP Link</label>
          <Field name="rsvp_link" component="input" placeholder="RSVP Link" />
        </div>
        <div>
          <h3>Field One</h3>
          <div>
            <label htmlFor="fieldOne.heading">Heading One</label>
            <Field name="fieldOne.heading" component="input" placeholder="Heading One" />
          </div>
          <div>
            <label htmlFor="fieldOne.text">Text One</label>
            <Field name="fieldOne.text" component="input" placeholder="Text One" />
          </div>
        </div>
        <div>
          <h3>Field Two</h3>
          <div>
            <label htmlFor="fieldTwo.heading">Heading Two</label>
            <Field name="fieldTwo.heading" component="input" placeholder="Heading Two" />
          </div>
          <div>
            <label htmlFor="fieldTwo.text">Text One</label>
            <Field name="fieldTwo.text" component="input" placeholder="Text Two" />
          </div>
        </div>
        <div>
          <h3>Field Three</h3>
          <div>
            <label htmlFor="fieldThree.heading">Heading Three</label>
            <Field name="fieldThree.heading" component="input" placeholder="Heading Three" />
          </div>
          <div>
            <label htmlFor="fieldThree.text">Text Three</label>
            <Field name="fieldThree.text" component="input" placeholder="Text Three" />
          </div>
        </div>
        <button type="submit" disabled={pristine || submitting || !valid}>Save</button>
      </form>
    );
  }
}

export default reduxForm({
  form: "EventForm",
  validate,
  initialValues: {
    name: "",
    title: "",
    description: "",
    privateEvent: true
  }
})(EventsForm);