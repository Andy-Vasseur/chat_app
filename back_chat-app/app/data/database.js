// Imports
const { Client } = require("pg");

// Database client
const client = new Client({
  connectionString: process.env.DB_URL,
  ssl: false,
});

// Connection
client.connect();

// Exports
module.exports = client;
