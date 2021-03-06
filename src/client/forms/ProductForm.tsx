import * as React from "react";

import { Field, reduxForm } from "redux-form";
import { SubmitButton } from "../components";
import { generateReduxFormComponent } from "./formUtils";
import { ProductSchemaConfig } from "../../schemaConfigs/productSchema";

export default generateReduxFormComponent("ProductForm", ProductSchemaConfig);