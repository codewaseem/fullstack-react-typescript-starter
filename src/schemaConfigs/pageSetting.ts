import { buildSchemaObject } from "./utils";

const PageSetting: SchemeDBConfig = {
  logoUrl: buildSchemaObject({ label: "Logo Url" }),
  contactSectionPhoto: buildSchemaObject({ label: "Contact Section Photo" })
};

export default PageSetting;