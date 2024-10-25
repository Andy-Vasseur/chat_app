// Imports
const express = require("express");

// Routers imports
const userRouter = require("./userRouter");
const roomRouter = require("./roomRouter");
const messageRouter = require("./messageRouter");

// Router
const router = express.Router();

// Routes
router.use("/users", userRouter);
router.use("/rooms", roomRouter);
router.use("/messages", messageRouter);

// Exports
module.exports = router;
