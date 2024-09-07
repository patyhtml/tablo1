// models/boardModel.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');  // Import połączenia z bazą danych

// Definicja modelu Board w Sequelize (odpowiednik tabeli w SQL)
const Board = sequelize.define('Board', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Users',  // Zakładam, że masz tabelę "Users"
            key: 'id'
        }
    }
}, {
    timestamps: false,  // Jeśli nie używasz kolumn `createdAt` i `updatedAt`
});

module.exports = Board;
