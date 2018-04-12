import * as React from "react";

import { Field, reduxForm } from "redux-form";
import { SubmitButton } from "../components";
import { generateReduxFormComponent } from "./formUtils";
import ArticleSchema from "../../schemaConfigs/articleSchema";

export default generateReduxFormComponent("ArticleForm", ArticleSchema);