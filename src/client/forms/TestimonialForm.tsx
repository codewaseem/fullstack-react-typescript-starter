import * as React from "react";

import { Field, reduxForm } from "redux-form";
import { SubmitButton } from "../components";
import { generateReduxFormComponent } from "./formUtils";
import TestimonialSchema from "../../schemaConfigs/testimonialSchema";

export default generateReduxFormComponent("TestimonialForm", TestimonialSchema);