import { buildSchemaObject } from "./utils";

export const UserFields: SchemeDBConfig = {
  firstName: buildSchemaObject({ label: "First Name" }),
  lastName: buildSchemaObject({ label: "Last Name" }),
  username: buildSchemaObject({ label: "Email", inputType: "email" }),
  password: buildSchemaObject({ label: "Password", inputType: "password" }),
  dob: buildSchemaObject({ label: "DOB", inputType: "date", required: false }),
  profilePicUrl: buildSchemaObject({ label: "Profile Pic Url", required: false }),
  phoneNumber: buildSchemaObject({ label: "Phone", required: false }),
  jobTitle: buildSchemaObject({ label: "Job Title", required: false }),
  fbLink: buildSchemaObject({ label: "Facebook Profile", required: false }),
  twitterLink: buildSchemaObject({ label: "Twitter Profile", required: false }),
  instagramLink: buildSchemaObject({ label: "Instagram Profile", required: false }),
  address: buildSchemaObject({ label: "Address", component: "textarea", required: false }),
  personalInfo: buildSchemaObject({ label: "Personal Info/Interest", component: "textarea", required: false }),
};
