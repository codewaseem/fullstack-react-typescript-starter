import mongoose from "./mongoose";
import { buildDbSchemaFromConfig } from "./utils";
import { ProductSchemaConfig } from "../../schemaConfigs/productSchema";

const ProductSchema = new mongoose.Schema(buildDbSchemaFromConfig(ProductSchemaConfig));

const Product = mongoose.model("Product", ProductSchema);
export default Product;
