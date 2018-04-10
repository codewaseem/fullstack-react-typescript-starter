import * as React from "react";
import { Field, reduxForm } from "redux-form";
import { SubmitButton } from "../components";

const getFieldInfoObj = (label, component = "input", type = "text", required = true, defaultValue = "") => {
  return {
    label,
    type,
    component,
    required,
    defaultValue,
  };
};

const UserFields = {
  firstName: getFieldInfoObj("First Name"),
  lastName: getFieldInfoObj("Last Name"),
  username: getFieldInfoObj("Email", "input", "email"),
  password: getFieldInfoObj("Password", "input", "password"),
  dob: getFieldInfoObj("DOB", "input", "date", false),
  phoneNumber: getFieldInfoObj("Phone", "input", "number", false),
  jobTitle: getFieldInfoObj("Job Title", "input", "text", false),
  fbLink: getFieldInfoObj("Facebook Profile", "input", "text", false),
  twitterLink: getFieldInfoObj("Twitter Profile", "input", "text", false),
  instagramLink: getFieldInfoObj("Instagram Profile", "input", "text", false),
  address: getFieldInfoObj("Address", "textarea", "text", false),
  personalInfo: getFieldInfoObj("Personal Info/Interest", "textarea", "text", false),
};

const validate = (values) => {
  const errors: any = {};
  Object.keys(UserFields).forEach((key) => {
    if (UserFields[key].required && !values[key]) {
      errors[key] = "Required";
    }
  });
  return errors;
};

class UserRegistrationForm extends React.Component<any, any> {
  componentDidMount() {
    this.props.initialize(this.props.initialValues);
  }

  render() {
    const { handleSubmit, pristine, submitting, valid } = this.props;
    return (
      <form onSubmit={handleSubmit} className="p-4" >
        <div className="w-full flex flex-wrap" >
          {
            Object.keys(UserFields).map((field) => {
              return (
                <div key={field} className="w-1/3 mr-2 mb-2">
                  <label className="block text-grey text-sm font-bold mb-2" htmlFor={field}>
                    {UserFields[field].label}
                  </label>
                  <Field
                    className="focus:shadow-green appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                    name={field}
                    component={UserFields[field].component}
                    type={UserFields[field].type}
                    placeholder={UserFields[field].label}
                  />
                </div>
              );
            })
          }
        </div>
        <SubmitButton pristine={pristine} submitting={submitting} valid={valid} />
      </form>
    );
  }
}

const initialValues = {};
Object.keys(UserFields).forEach((key) => {
  initialValues[key] = UserFields[key].defaultValue;
});

export default reduxForm({
  form: "RegisterUser",
  validate,
  initialValues
})(UserRegistrationForm);