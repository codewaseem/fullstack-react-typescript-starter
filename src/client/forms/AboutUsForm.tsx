import * as React from "react";

import { Field, reduxForm } from "redux-form";
import { SubmitButton } from "../components";
import { generateReduxFormComponent } from "./formUtils";
import AboutUsSchema from "../../schemaConfigs/aboutUsSection";

export default generateReduxFormComponent("AboutUs", AboutUsSchema);