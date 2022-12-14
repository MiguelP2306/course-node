require('dotenv').config();

const config = {
  env: process.env.NODE_ENV || 'devolopment',
  port: process.env.PORT || 3000,
  dbUser: process.env.DB_USER,
  dbName: process.env.DB_NAME,
  dbPassword: process.env.DB_PASSWORD,
  dbHost: process.env.DB_HOST,
  dbPort: process.env.DB_PORT,
};

module.exports = { config };
