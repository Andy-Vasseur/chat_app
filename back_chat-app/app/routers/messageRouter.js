// Imports
const express = require("express");

// Controllers imports
const messageController = require("../controllers/messageController");

// Router
const router = express.Router();

// Routes
router.post("/create", messageController.createNewMessage);

// Exports
module.exports = router;
