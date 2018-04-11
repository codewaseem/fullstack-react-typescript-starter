import * as React from "react";

import { Field, reduxForm } from "redux-form";
import { SubmitButton } from "../components";

export const getFieldInfoObj = (label, component = "input", type = "text", required = true, defaultValue = "") => {
  return {
    label,
    type,
    component,
    required,
    defaultValue,
  };
};

export function generateReduxFormComponent(uniqueFormName: string, fieldObjects: SchemeDBConfig) {
  const validate = (values) => {
    const errors: any = {};
    Object.keys(fieldObjects).forEach((key) => {
      if (fieldObjects[key].required && !values[key]) {
        errors[key] = "Required";
      }
    });
    return errors;
  };
  const initialValues = {};
  Object.keys(fieldObjects).forEach((key) => {
    initialValues[key] = fieldObjects[key].defaultValue;
  });
  class WrapperForm extends React.Component<any, any> {
    componentDidMount() {
      this.props.initialize(this.props.initialValues);
    }

    render() {
      const { handleSubmit, pristine, submitting, valid } = this.props;
      return (
        <form onSubmit={handleSubmit} className="p-4 w-full" >
          <div className="w-full flex flex-wrap" >
            {
              Object.keys(fieldObjects).map((field) => {
                return (
                  // tslint:disable-next-line:max-line-length
                  <div key={field} className={`p-2 ${fieldObjects[field].component === "textarea" ? "w-full" : "w-1/2"}`}>
                    <label className="block text-grey text-sm font-bold mb-2" htmlFor={field}>
                      {fieldObjects[field].label}
                    </label>
                    <Field
                      className="focus:shadow-green appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                      name={field}
                      component={fieldObjects[field].component}
                      type={fieldObjects[field].inputType}
                      placeholder={fieldObjects[field].label}
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
  return reduxForm({
    form: uniqueFormName,
    validate,
    initialValues
  })(WrapperForm);
}