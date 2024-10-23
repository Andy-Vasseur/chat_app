// Imports
const dataMapper = require("../data/dataMapper");

const roomController = {
  createNewRoom: async (req, res) => {
    const { name } = req.body;
    try {
      const room = await dataMapper.createRoom(name);
      res.json(room);
    } catch (error) {
      console.error(error);
      res.status(500).json(error);
    }
  },
};

// Exports
module.exports = roomController;
