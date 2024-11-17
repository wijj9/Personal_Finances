// src/controllers/itemController.js
const Item = require('../data/itemModel');

// Controller to add a new item
const addItem = async (req, res) => {
    try {
        const { date, category, title, value } = req.body;
        const newItem = new Item({ date, category, title, value });
        await newItem.save();
        res.status(201).json({ message: 'Item.js added', item: newItem });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
};

// Controller to get all items
const getItems = async (req, res) => {
    try {
        const items = await Item.find();
        res.status(200).json(items);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
};

// Controller to get items by month
const getItemsByMonth = async (req, res) => {
    try {
        const { month } = req.query;
        const regex = new RegExp(`^${month}`);
        const items = await Item.find({ date: { $regex: regex } });
        res.status(200).json(items);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = { addItem, getItems, getItemsByMonth };
