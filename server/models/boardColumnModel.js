// models/boardColumnModel.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const BoardColumn = sequelize.define('BoardColumn', {
    id: {
        type: DataTypes.INTEGER,
        notNull: true,
        primaryKey: true,
        autoIncrement: true,
    },
    boardId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    order: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    titleColor: {
        type: DataTypes.STRING,
        allowNull: false,
    }

}, {
    timestamps: false  // Automatyczne kolumny `createdAt` i `updatedAt`
});

module.exports = BoardColumn;
