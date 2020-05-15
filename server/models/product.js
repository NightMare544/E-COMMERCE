/** @format */

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ProductSchema = new Schema(
  {
    name: { type: String, unique: true, lowercase: true },
    category: { type: Schema.Types.ObjectId, ref: "Category" },
    subcategory: { type: Schema.Types.ObjectId, ref: "SubCategory" },
    owner: { type: Schema.Types.ObjectId, ref: "User" },
    image: String,
    title: String,
    description: String,
    price: Number,
    color: String,
    weight: Number,
    crated: { type: Date, default: Date.now },
  },
  {
    toObject: { virtuals: true },
    toJSON: { virtuals: true },
  }
);
module.exports = mongoose.model("Product", ProductSchema);
