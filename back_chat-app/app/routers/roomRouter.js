// Imports
const express = require("express");

// Controllers imports
const roomController = require("../controllers/roomController");

// Router
const router = express.Router();

// Routes
router.get("/get", roomController.getAllRooms);
router.get("/get/:id", roomController.getRoomById);
router.post("/create", roomController.createNewRoom);

// Exports
module.exports = router;
