import { buildSchemaObject } from "./utils";

const ArticleSchema: SchemeDBConfig = {
  name: buildSchemaObject({ label: "Name" }),
  imageLink: buildSchemaObject({ label: "Image Link" }),
  jobTitle: buildSchemaObject({ label: "Job Title" }),
  description: buildSchemaObject({ label: "Description" }),
  facebookLink: buildSchemaObject({ label: "Facebook Link" }),
  twitter: buildSchemaObject({ label: "Twitter Link" }),
  instagram: buildSchemaObject({ label: "Instagram Link" }),
  linkedIn: buildSchemaObject({ label: "LinkedIn Link" }),
  googleLink: buildSchemaObject({ label: "Google Link" })
};

export default ArticleSchema;