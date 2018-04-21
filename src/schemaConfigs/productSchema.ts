import { buildSchemaObject } from "./utils";

export const ProductSchemaConfig: SchemeDBConfig = {
  name: buildSchemaObject({ label: "Product Name" }),
  imageLink: buildSchemaObject({ label: "Image Url" }),
  rsvpLink: buildSchemaObject({ label: "RSVP Link" }),
  btnText: buildSchemaObject({ label: "Button Text" }),
  title : buildSchemaObject({ label: "Title"}),
  order: buildSchemaObject({ label: "Display Order" }),
  description: buildSchemaObject({ label: "Description", component: "textarea" }),
};