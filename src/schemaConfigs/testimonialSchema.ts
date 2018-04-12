import { buildSchemaObject } from "./utils";

const TestimonialSchema: SchemeDBConfig = {
  name: buildSchemaObject({ label: "Name" }),
  testimonial: buildSchemaObject({ label: "Testimonial" }),
  imageLink: buildSchemaObject({ label: "Image Link" }),
};

export default TestimonialSchema;