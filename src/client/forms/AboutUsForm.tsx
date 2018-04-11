import * as React from "react";
import { Field, reduxForm } from "redux-form";

const validate = (values) => {
  const errors: any = {
    sectionOne: {},
    sectionTwo: {},
    sectionThree: {}
  };
  if (!values) {
    return;
  }

  if (values.sectionOne) {
    if (!values.sectionOne.heading) {
      errors.sectionOne.heading = "Required";
    }
    if (!values.sectionOne.title) {
      errors.sectionOne.title = "Required";
    }
    if (!values.sectionOne.description) {
      errors.sectionOne.description = "Required";
    }
  }
  if (values.sectionTwo) {
    if (!values.sectionTwo.heading) {
      errors.sectionTwo.heading = "Required";
    }
    if (!values.sectionTwo.title) {
      errors.sectionTwo.title = "Required";
    }
    if (!values.sectionTwo.description) {
      errors.sectionTwo.description = "Required";
    }
  }
  if (values.sectionThree) {
    if (!values.sectionThree.heading) {
      errors.sectionThree.heading = "Required";
    }
    if (!values.sectionThree.title) {
      errors.sectionThree.title = "Required";
    }
    if (!values.sectionThree.description) {
      errors.sectionThree.description = "Required";
    }
  }
  return errors;
};

class AboutUsForm extends React.Component<any, any> {
  componentDidMount() {
    this.props.initialize(this.props.initialValues);
  }
  
  render() {
    console.log(this.props.initialValues);
    const { handleSubmit, pristine, submitting, valid } = this.props;
    return (
      <form onSubmit={handleSubmit} >
        <h2>About Us Form</h2>

        <div>
          <h3>Section One</h3>
          <div>
            <label>Heading</label>
            <Field name="sectionOne.heading" component="input" type="text" placeholder="Heading 1" />
          </div>
          <div>
            <label>Title</label>
            <Field name="sectionOne.title" component="input" type="text" placeholder="Title 1" />
          </div>
          <div>
            <label>Description</label>
            <Field name="sectionOne.description" component="textarea" placeholder="Description 1" />
          </div>
        </div>
        <div>
          <h3>Section Two</h3>
          <div>
            <label>Heading</label>
            <Field name="sectionTwo.heading" component="input" type="text" placeholder="Heading 2" />
          </div>
          <div>
            <label>Title</label>
            <Field name="sectionTwo.title" component="input" type="text" placeholder="Title 2" />
          </div>
          <div>
            <label>Description</label>
            <Field name="sectionTwo.description" component="textarea" type="textarea" placeholder="Description 2" />
          </div>
        </div>
        <div>
          <h3>Section Three</h3>
          <div>
            <label>Heading</label>
            <Field name="sectionThree.heading" component="input" type="text" placeholder="Heading 3" />
          </div>
          <div>
            <label>Title</label>
            <Field name="sectionThree.title" component="input" type="text" placeholder="Title 3" />
          </div>
          <div>
            <label>Description</label>
            <Field name="sectionThree.description" component="textarea" placeholder="Description 3" />
          </div>
        </div>
        <button type="submit" disabled={pristine || submitting || !valid}>Save</button>
      </form>
    );
  }
}

const defaultAboutSection = {
  heading: "",
  title: "",
  description: ""
};

export default reduxForm({
  form: "AboutUs",
  validate,
  initialValues: {
    sectionOne: defaultAboutSection,
    sectionTwo: defaultAboutSection,
    sectionThree: defaultAboutSection
  }
})(AboutUsForm);