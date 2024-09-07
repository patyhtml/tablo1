// models/boardColumnModel.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const BoardColumn = sequelize.define('BoardColumn', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    order: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    boardId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
}, {
    timestamps: true  // Automatyczne kolumny `createdAt` i `updatedAt`
});

module.exports = BoardColumn;
