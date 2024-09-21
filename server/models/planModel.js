// models/planModel.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Plan = sequelize.define('Plan', {

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        notNull: true,
        autoIncrement: true,
    },

    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    price: {
    type: DataTypes.INTEGER,
    allowNull: false,
    },

    maxUsers: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    maxBoards: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    maxTasks: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    maxPoints: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    maxStorage: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },

},{
    timestamps: false  // Automatyczne kolumny `createdAt` i `updatedAt`
});

module.exports = Plan;
