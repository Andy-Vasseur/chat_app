// Imports
const dataMapper = require("../data/dataMapper");

const userController = {
  logInUser: async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    try {
      const result = await dataMapper.logInUser(username, password);
      res.json(result);
    } catch (error) {
      res.status(500).json(error.toString());
    }
  },

  createNewUser: async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const confirmPassword = req.body.confirmPassword;
    console.log(username, password, confirmPassword);

    if (password !== confirmPassword) {
      res.status(400).json("Passwords do not match");
      return;
    }

    try {
      const result = await dataMapper.createNewUser(username, password);
      res.json(result);
    } catch (error) {
      res.status(500).json(error.toString());
    }
  },
};

// Exports
module.exports = userController;
