import * as React from "react";

import { Field, reduxForm } from "redux-form";
import { SubmitButton } from "../components";
import { generateReduxFormComponent } from "./formUtils";
import PageSettings from "../../schemaConfigs/pageSetting";

export default generateReduxFormComponent("PageSettings", PageSettings);