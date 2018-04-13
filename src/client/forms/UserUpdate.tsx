import * as React from "react";
import { Field, reduxForm } from "redux-form";
import { SubmitButton } from "../components";
import { generateReduxFormComponent } from "./formUtils";
import { UserFields } from "../../schemaConfigs/userSchema";
delete UserFields.password;
export default generateReduxFormComponent("UserUpdateForm", UserFields);