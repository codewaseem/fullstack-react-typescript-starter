import { buildSchemaObject } from "./utils";

const EventSchema: SchemeDBConfig = {
  name: buildSchemaObject({ label: "Name" }),
  description: buildSchemaObject({ label: "Description" }),
  imageLink: buildSchemaObject({ label: "Image Link" }),
  privateEvent: buildSchemaObject({ label: "Private Event", inputType: "checkbox", schemaType: Boolean, defaultValue: false, required: false }),
  date: buildSchemaObject({ label: "Date", inputType: "date", schemaType: Date }),
  heading1: buildSchemaObject({ label: "Heading 1" }),
  text1: buildSchemaObject({ label: "Text 1" }),
  heading2: buildSchemaObject({ label: "Heading 2" }),
  text2: buildSchemaObject({ label: "Text 2" }),
  heading3: buildSchemaObject({ label: "Heading 3" }),
  text3: buildSchemaObject({ label: "Text 3" }),
  btnText: buildSchemaObject({ label: "Button Text", required: false, defaultValue: "RSVP" }),
  btnLink: buildSchemaObject({ label: "Button Link" }),
};

export default EventSchema;