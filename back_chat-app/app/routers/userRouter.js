// Imports
const express = require("express");

// Controllers imports
const userController = require("../controllers/userController");

// Router
const router = express.Router();

// Routes
router.get("/create", userController.createNewUser);

// Exports
module.exports = router;
