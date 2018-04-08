import * as React from "react";
import { Field, reduxForm } from "redux-form";

const validate = (values) => {
  if (!values) {
    return;
  } else {
    const errors: any = {};
    if (!values.title) {
      errors.title = "Required";
    }
    if (!values.summary) {
      errors.summary = "Required";
    }
    if (!values.imageLink) {
      errors.imageLink = "Required";
    }
    if (!values.fullArticleLink) {
      errors.fullArticleLink = "Required";
    }
    if (!values.date) {
      errors.date = "Required";
    }
    return errors;
  }
};

class ArticlesForm extends React.Component<any, any> {
  componentDidMount() {
    this.props.initialize(this.props.initialValues);
  }
  render() {
    const { handleSubmit, pristine, submitting, valid } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <h2>Article Form</h2>
        <div>
          <label htmlFor="title" >Title</label>
          <Field name="title" component="input" placeholder="Title" />
        </div>

        <div>
          <label htmlFor="imageLink" >Image Link</label>
          <Field name="imageLink" component="input" placeholder="Image Link" />
        </div>
        <div>
          <label htmlFor="summary" >Summary</label>
          <Field name="summary" component="textarea" placeholder="Summary" />
        </div>
        <div>
          <label htmlFor="date" >Date</label>
          <Field name="date" component="input" type="date" placeholder="Date" />
        </div>
        <div>
          <label htmlFor="fullArticleLink">Full Article Link</label>
          <Field name="fullArticleLink" component="input" placeholder="RSVP Link" />
        </div>
        <button type="submit" disabled={pristine || submitting || !valid}>Save</button>
      </form>
    );
  }
}

export default reduxForm({
  form: "ArticleForm",
  validate,
  enableReinitialize: true,
  initialValues: {
    title: "",
    summary: "",
    imageLink: "",
    date: "",
    fullArticleLink: ""
  }
})(ArticlesForm);