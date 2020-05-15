/** @format */

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SubCategorySchema = new Schema({
  name: { type: String, unique: true, lowercase: true },
  category: { type: Schema.Types.ObjectId, ref: "Category" },
  image: String,
  title: String,
  description: String,
  created: { type: Date, default: Date.now },
});

module.exports = mongoose.model("SubCategory", SubCategorySchema);
