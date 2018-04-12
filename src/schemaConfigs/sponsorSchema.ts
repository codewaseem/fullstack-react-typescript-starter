import { buildSchemaObject } from "./utils";

const SponsorSchemaConfig: SchemeDBConfig = {
  name: buildSchemaObject({ label: "Sponsor Name" }),
  imageLink: buildSchemaObject({ label: "Image Url" })
};

export default SponsorSchemaConfig;