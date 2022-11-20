require('dotenv').config();
const { Client } = require('pg');

const getConnection = async () => {
  const client = new Client({
    host: 'localhost',
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });

  await client.connect();
  return client;
};

module.exports = getConnection;
