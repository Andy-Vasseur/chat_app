// Imports
const express = require("express");

// Routers imports
const userRouter = require("./userRouter");
const roomRouter = require("./roomRouter");

// Router
const router = express.Router();

// Routes
router.use("/users", userRouter);
router.use("/rooms", roomRouter);

// Exports
module.exports = router;
