// src/data/itemModel.js
const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    date: { type: Date, required: true },
    category: { type: String, required: true },
    title: { type: String, required: true },
    value: { type: Number, required: true },
});

module.exports = mongoose.model('Item', itemSchema);
