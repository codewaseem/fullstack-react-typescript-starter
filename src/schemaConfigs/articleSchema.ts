import { buildSchemaObject } from "./utils";

const ArticleSchema: SchemeDBConfig = {
  topLine: buildSchemaObject({ label: "Top Line" }),
  middleLine: buildSchemaObject({ label: "Middle Line" }),
  lastLine: buildSchemaObject({ label: "Last Line" }),
  imageLink: buildSchemaObject({ label: "Image Link" }),
  btnText: buildSchemaObject({ label: "Button Text", required: false, defaultValue: "Read More" }),
  btnLink: buildSchemaObject({ label: "Button Link" }),
};

export default ArticleSchema;