declare module '*.svg' {
    const content: any;
    export default content;
}

interface SchemaFieldConfig {
    label: string;
    inputType?: string;
    component?: any;
    required?: boolean;
    defaultValue?: any;
    schemaType?: any;
}

interface SchemeDBConfig { [key: string]: SchemaFieldConfig }