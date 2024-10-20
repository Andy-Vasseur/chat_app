// Imports
const dataMapper = require("../data/dataMapper");
const jwt = require("jsonwebtoken");

const userController = {
  logInUser: async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    try {
      const result = await dataMapper.logInUser(username, password);

      if (result.length === 0) {
        return res.status(401).json("Invalid credentials");
      }

      const token = jwt.sign(
        { username: result[0].name, userId: result[0].id },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
      );

      res.json({ token });
    } catch (error) {
      res.status(500).json(error.toString());
    }
  },

  createNewUser: async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const confirmPassword = req.body.confirmPassword;

    if (password !== confirmPassword) {
      res.status(400).json("Passwords do not match");
      return;
    }

    try {
      const result = await dataMapper.logInUser(username, password);

      if (result.length === 0) {
        return res.status(401).json("Invalid credentials");
      }

      const token = jwt.sign(
        { username: result[0].name, userId: result[0].id },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
      );

      res.json({ token });
    } catch (error) {
      res.status(500).json(error.toString());
    }
  },
};

// Exports
module.exports = userController;
