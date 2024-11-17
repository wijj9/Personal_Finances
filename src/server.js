const express = require("express");
const mongoose = require("mongoose");
const Item = require("./models/Item"); // Your Mongoose model for Item.js
const cors = require("cors");

const app = express();

// Middleware to handle JSON request bodies
app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose.connect("mongodb://localhost:27017/finances", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB Connected..."))
    .catch(err => console.log(err));

// Route to handle adding a new item
app.post("/api/items", async (req, res) => {
    try {
        const { category, value, description, date } = req.body;
        const newItem = new Item({ category, value, description, date });
        await newItem.save();
        res.status(201).json(newItem); // Send the saved item back as a response
    } catch (error) {
        console.error("Error adding item:", error);
        res.status(500).send("Server Error");
    }
});

// Server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
