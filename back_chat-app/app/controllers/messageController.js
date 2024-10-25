// Imports
const dataMapper = require("../data/dataMapper");

const messageController = {
  createNewMessage: async (req, res) => {
    const message = req.body.message;
    const roomId = req.body.room_id;
    const userId = req.body.user_id;
    console.log(`Message: ${message}, Room ID: ${roomId}, User ID: ${userId}`);
    try {
      const newMessage = await dataMapper.createMessage(
        message,
        roomId,
        userId
      );
      res.json(newMessage);
    } catch (error) {
      console.error(error);
      res.status(500).json(error);
    }
  },
};

// Exports
module.exports = messageController;
