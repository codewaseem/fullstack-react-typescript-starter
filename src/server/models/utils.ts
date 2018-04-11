export const buildDbSchemaFromConfig = (config: any) => {
  const schema: any = {};
  Object.keys(config).forEach((field) => {
    schema[field] = {
      type: config[field].schemaType,
      required: config[field].required,
      defaultValue: config[field].defaultValue
    };
  });
  return schema;
};