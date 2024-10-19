// Imports
const express = require("express");

// Controllers imports
const userController = require("../controllers/userController");

// Router
const router = express.Router();

// Routes
router.get("/auth/login", userController.logInUser);
router.post("/auth/create", userController.createNewUser);

// Exports
module.exports = router;
