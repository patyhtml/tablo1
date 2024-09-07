// models/userPlanModel.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const UserPlan = sequelize.define('UserPlan', {
    planName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
}, {
    timestamps: true,  // Automatyczne kolumny `createdAt` i `updatedAt`
});

module.exports = UserPlan;
