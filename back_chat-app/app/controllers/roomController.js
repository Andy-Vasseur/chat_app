// Imports
const dataMapper = require("../data/dataMapper");

const roomController = {
  getAllRooms: async (req, res) => {
    try {
      const rooms = await dataMapper.getRooms();
      res.json(rooms);
    } catch (error) {
      console.error(error);
      res.status(500).json(error);
    }
  },

  getRoomById: async (req, res) => {
    const { id } = req.params;
    try {
      const room = await dataMapper.roomById(id);
      res.json(room);
    } catch (error) {
      console.error(error);
      res.status(500).json(error);
    }
  },

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
