import * as React from "react";
import { Field, reduxForm } from "redux-form";
import { SubmitButton } from "../components";
import { generateReduxFormComponent } from "./formUtils";
import { UserFields, editPasswordField } from "../../schemaConfigs/userSchema";
const copy = { ...UserFields, password: editPasswordField };

export default generateReduxFormComponent("UserUpdateForm", copy);