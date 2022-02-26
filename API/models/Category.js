//Imports
const mongoose = require("mongoose");
//Schema for categories
const CategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
//export
module.exports = mongoose.model("Category", CategorySchema);
