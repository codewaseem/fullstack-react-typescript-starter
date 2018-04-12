import { buildSchemaObject } from "./utils";

const AboutUsSectionSchema: SchemeDBConfig = {
  heading1: buildSchemaObject({ label: "Thin Line 1" }),
  title1: buildSchemaObject({ label: "Bold Line 1" }),
  description1: buildSchemaObject({ label: "Description 1", component: "textarea" }),
  heading2: buildSchemaObject({ label: "Thin Line 2" }),
  title2: buildSchemaObject({ label: "Bold Line 2" }),
  description2: buildSchemaObject({ label: "Description 2", component: "textarea" }),
  heading3: buildSchemaObject({ label: "Thin Line 3" }),
  title3: buildSchemaObject({ label: "Bold Line 3" }),
  description3: buildSchemaObject({ label: "Description 3", component: "textarea" }),
};

export default AboutUsSectionSchema;