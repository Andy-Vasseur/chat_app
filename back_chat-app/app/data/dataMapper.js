// Imports
const client = require("./database");

const dataMapper = {
  async logInUser(username) {
    const query = {
      text: `SELECT * FROM "users" WHERE name = $1;`,
      values: [username],
    };
    const result = await client.query(query);
    return result.rows;
  },

  async createNewUser(username, hashedPassword) {
    const query = {
      text: `INSERT INTO "users" (name, password) VALUES ($1, $2) RETURNING id;`,
      values: [username, hashedPassword],
    };
    const result = await client.query(query);
    return result.rows;
  },
};

// Exports
module.exports = dataMapper;
