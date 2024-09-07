// models/planModel.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Plan = sequelize.define('Plan', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    }
}, {
    timestamps: true  // Automatyczne kolumny `createdAt` i `updatedAt`
});

module.exports = Plan;
