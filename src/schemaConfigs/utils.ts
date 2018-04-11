export const buildSchemaObject = (
  { label,
    component = "input",
    inputType = "text",
    required = true,
    defaultValue = "",
    schemaType = String }: SchemaFieldConfig

) => {
  return {
    label,
    inputType,
    component,
    required,
    defaultValue,
    schemaType
  };
};