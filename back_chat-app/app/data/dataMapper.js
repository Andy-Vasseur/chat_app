// Imports
const client = require("./database");

// DataMapper
const dataMapper = {
  async logInUser(username, password) {
    const query = {
      text: `SELECT * FROM "users" WHERE name = $1 AND password = $2;`,
      values: [username, password],
    };
    const result = await client.query(query);
    return result.rows;
  },

  async createNewUser(username, password) {
    const query = {
      text: `INSERT INTO "users" (name, password) VALUES ($1, $2);`,
      values: [username, password],
    };
    const result = await client.query(query);
    return result.rows;
  },
};

// Exports
module.exports = dataMapper;
