// models/userBoardModel.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const UserBoard = sequelize.define('UserBoard', {
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    boardId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
}, {
    timestamps: true,  // Automatyczne kolumny `createdAt` i `updatedAt`
});

module.exports = UserBoard;
