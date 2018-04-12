import * as React from "react";

import { Field, reduxForm } from "redux-form";
import { SubmitButton } from "../components";
import { generateReduxFormComponent } from "./formUtils";
import GuestSchema from "../../schemaConfigs/guestSchema";

export default generateReduxFormComponent("GuestForm", GuestSchema);