import * as React from "react";
import { Field, reduxForm } from "redux-form";

const validate = (values) => {
  if (!values) {
    return;
  } else {
    const errors: any = {
      eventSection: {},
      guestSection: {},
      testimonialSection: {},
      sponsorSection: {},
      contactSection: {}
    };
    if (!values.pageTitle) {
      errors.pageTitle = "Required";
    }
    if (!values.pageLogoUrl) {
      errors.pageLogoUrl = "Required";
    }
    if (values.eventSection) {
      if (!values.eventSection.name) {
        errors.eventSection.name = "Required";
      }
      if (!values.eventSection.title) {
        errors.eventSection.title = "Required";
      }
    }
    if (values.guestSection) {
      if (!values.guestSection.name) {
        errors.guestSection.name = "Required";
      }
      if (!values.guestSection.title) {
        errors.guestSection.title = "Required";
      }
    }
    if (values.testimonialSection) {
      if (!values.testimonialSection.name) {
        errors.testimonialSection.name = "Required";
      }
      if (!values.testimonialSection.title) {
        errors.testimonialSection.title = "Required";
      }
    }
    if (values.sponsorSection) {
      if (!values.sponsorSection.name) {
        errors.sponsorSection.name = "Required";
      }
      if (!values.sponsorSection.title) {
        errors.sponsorSection.title = "Required";
      }
      if (!values.sponsorSection.mailTo) {
        errors.sponsorSection.mailTo = "Required";
      }
    }
    if (values.contactSection) {
      if (!values.contactSection.name) {
        errors.contactSection.name = "Required";
      }
      if (!values.contactSection.mailTo) {
        errors.contactSection.mailTo = "Required";
      }
    }
    return errors;
  }

};

class PageSettingsForm extends React.Component<any, any> {
  render() {
    const { handleSubmit, pristine, submitting, valid } = this.props;
    return (
      <form onSubmit={handleSubmit} >
        <h2>Page Settings Form</h2>
        <div>
          <label htmlFor="pageTitle">Page Title</label>
          <Field component="input" name="pageTitle" type="text" />
        </div>
        <div>
          <label htmlFor="pageLogoUrl">Logo Url </label>
          <Field component="input" name="pageLogoUrl" type="text" />
        </div>
        <div>
          <h3>Social Media Links</h3>
          <div>
            <label htmlFor="socialLinks.facebook">Facebook Link </label>
            <Field component="input" name="socialLinks.facebook" type="text" />
          </div>
          <div>
            <label htmlFor="socialLinks.twitter">twitter Link </label>
            <Field component="input" name="socialLinks.twitter" type="text" />
          </div>
          <div>
            <label htmlFor="socialLinks.google">google+ Link </label>
            <Field component="input" name="socialLinks.google" type="text" />
          </div>
          <div>
            <label htmlFor="socialLinks.linkedIn">linkedIn Link </label>
            <Field component="input" name="socialLinks.linkedIn" type="text" />
          </div>
          <div>
            <label htmlFor="socialLinks.instagram">instagram Link </label>
            <Field component="input" name="socialLinks.instagram" type="text" />
          </div>
        </div>
        <div>
          <h3>Event Section</h3>
          <div>
            <label htmlFor="eventSection.name">Name</label>
            <Field component="input" name="eventSection.name" type="text" />
          </div>
          <div>
            <label htmlFor="eventSection.title">Title</label>
            <Field component="input" name="eventSection.title" />
          </div>
          <div>
            <label htmlFor="eventSection.isShown">Is Shown?</label>
            <Field component="input" type="checkbox" name="eventSection.isShown" />
          </div>
          <div>
            <label htmlFor="eventSection.isLinked">Is Linked To Navigation</label>
            <Field component="input" type="checkbox" name="eventSection.isLinked" />
          </div>
        </div>
        <div>
          <h3>Guest Section</h3>
          <div>
            <label htmlFor="guestSection.name">Name</label>
            <Field component="input" name="guestSection.name" />
          </div>
          <div>
            <label htmlFor="guestSection.title">Title</label>
            <Field component="input" name="guestSection.title" />
          </div>
          <div>
            <label htmlFor="guestSection.isShown">Is Shown?</label>
            <Field component="input" type="checkbox" name="guestSection.isShown" />
          </div>
          <div>
            <label htmlFor="guestSection.isLinked">Is Linked To Navigation</label>
            <Field component="input" type="checkbox" name="guestSection.isLinked" />
          </div>
        </div>
        <div>
          <h3>Testimonial Section</h3>
          <div>
            <label htmlFor="testimonialSection.name">Name</label>
            <Field component="input" name="testimonialSection.name" />
          </div>
          <div>
            <label htmlFor="testimonialSection.title">Title</label>
            <Field component="input" name="testimonialSection.title" />
          </div>
          <div>
            <label htmlFor="testimonialSection.isShown">Is Shown?</label>
            <Field component="input" type="checkbox" name="testimonialSection.isShown" />
          </div>
          <div>
            <label htmlFor="testimonialSection.isLinked">Is Linked To Navigation</label>
            <Field component="input" type="checkbox" name="testimonialSection.isLinked" />
          </div>
        </div>
        <div>
          <h3>Sponsor Section</h3>
          <div>
            <label htmlFor="sponsorSection.name">Name</label>
            <Field component="input" name="sponsorSection.name" />
          </div>
          <div>
            <label htmlFor="sponsorSection.title">Title</label>
            <Field component="input" type="text" name="sponsorSection.title" />
          </div>
          <div>
            <label htmlFor="sponsorSection.isShown">Is Shown?</label>
            <Field component="input" type="checkbox" name="sponsorSection.isShown" />
          </div>
          <div>
            <label htmlFor="sponsorSection.isLinked">Is Linked To Navigation</label>
            <Field component="input" type="checkbox" name="sponsorSection.isLinked" />
          </div>
          <div>
            <label htmlFor="sponsorSection.mailTo">Sponsor's Mail To</label>
            <Field component="input" type="email" name="sponsorSection.mailTo" />
          </div>
        </div>
        <div>
          <h3>Contact Section</h3>
          <div>
            <label htmlFor="contactSection.name">Name</label>
            <Field component="input" name="contactSection.name" />
          </div>
          <div>
            <label htmlFor="contactSection.isShown">Is Shown?</label>
            <Field component="input" type="checkbox" name="contactSection.isShown" />
          </div>
          <div>
            <label htmlFor="contactSection.isLinked">Is Linked To Navigation</label>
            <Field component="input" type="checkbox" name="contactSection.isLinked" />
          </div>
          <div>
            <label htmlFor="contactSection.mailTo">Sponsor's Mail To</label>
            <Field component="input" type="email" name="contactSection.mailTo" />
          </div>
        </div>
        <button type="submit" disabled={pristine || submitting || !valid}>Save</button>
      </form>
    );
  }
}

export default reduxForm({
  form: "PageSettings",
  validate,
  initialValues: {
    pageTitle: "",
    pageLogoUrl: "",
    socialLinks: {
      facebook: "",
      google: "",
      twitter: "twitter",
      linkedIn: "",
      instagram: ""
    },
    eventSection: {
      name: "",
      title: "",
      isShown: true,
      isLinked: true
    },
    guestSection: {
      name: "",
      title: "",
      isShown: true,
      isLinked: true
    },
    testimonialSection: {
      name: "",
      title: "",
      isShown: true,
      isLinked: true
    },
    sponsorSection: {
      name: "",
      title: "",
      isShown: true,
      isLinked: true
    },
    contactSection: {
      name: "",
      title: "",
      isShown: true,
      isLinked: true
    }
  }
})(PageSettingsForm);