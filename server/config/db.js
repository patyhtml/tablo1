// config/db.js
const { Pool } = require('pg');

// Konfiguracja połączenia z bazą danych PostgreSQL
const pool = new Pool({
  user: 'your_username',     // Nazwa użytkownika bazy danych
  host: 'localhost',         // Adres hosta (zwykle localhost dla bazy lokalnej)
  database: 'your_database', // Nazwa bazy danych
  password: 'your_password', // Hasło do bazy danych
  port: 5432,                // Domyślny port PostgreSQL
});

module.exports = pool;
// config/db.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('your_database', 'your_username', 'your_password', {
    host: 'localhost',
    dialect: 'postgres',  // Określasz, że używasz PostgreSQL
});

module.exports = sequelize;
