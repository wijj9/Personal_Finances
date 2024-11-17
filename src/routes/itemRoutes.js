// src/routes/itemRoutes.js
const express = require('express');
const router = express.Router();
const { addItem, getItems, getItemsByMonth } = require('../controllers/itemController');

// Route to add a new item
router.post('/add-item', addItem);

// Route to get all items
router.get('/items', getItems);

// Route to get items by month
router.get('/items-by-month', getItemsByMonth);

module.exports = router;
