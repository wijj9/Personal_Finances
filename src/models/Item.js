const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
  },
  value: {
    type: Number,
    required: true,
  },
  description: String,
  date: {
    type: String,
    required: true,
  },
});

const Item = mongoose.model("Item", ItemSchema);

module.exports = Item;
