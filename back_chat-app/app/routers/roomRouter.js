// Imports
const express = require("express");

// Controllers imports
const roomController = require("../controllers/roomController");

// Router
const router = express.Router();

// Routes
router.post("/create", roomController.createNewRoom);

// Exports
module.exports = router;
