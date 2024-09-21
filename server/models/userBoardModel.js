// models/userBoardModel.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const UserBoard = sequelize.define('UserBoard', {
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    boardId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    isOwner: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    isInvited: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    }

}, {
    timestamps: false,  // Automatyczne kolumny `createdAt` i `updatedAt`
});

module.exports = UserBoard;
