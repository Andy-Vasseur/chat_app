// Imports
const express = require("express");

// Routers imports
const userRouter = require("./userRouter");

// Router
const router = express.Router();

// Routes
router.use("/users", userRouter);

// Exports
module.exports = router;
