// Controller
const messageController = {
  createMessage: async (req, res) => {
    try {
      res.send("Hello World!");
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .send(`An error occured with the database :\n${error.message}`);
    }
  },
};

// Exports
module.exports = messageController;
