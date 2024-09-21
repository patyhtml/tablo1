// models/boardModel.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');  // Import połączenia z bazą danych




// Definicja modelu Board w Sequelize (odpowiednik tabeli w SQL)
const Board = sequelize.define('Board', {
    id: {
        type: DataTypes.INTEGER,
        notNull: true,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    timestamps: false,  // Jeśli nie używasz kolumn `createdAt` i `updatedAt`
});

module.exports = Board;
