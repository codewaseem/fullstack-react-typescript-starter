import mongoose from "./mongoose";

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image_url: {
    type: String,
    required: true
  },
  rsvp_link: {
    type: String,
    required: true
  },
  btn_txt: {
    type: String,
    required: true
  },
  order: {
    type: Number,
    default: 1
  },
  details: {},
  date: Date,
  location: Date
});

const Product = mongoose.model("Product", ProductSchema);
export default Product;
