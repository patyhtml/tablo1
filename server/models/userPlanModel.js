// models/userPlanModel.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const UserPlan = sequelize.define('UserPlan', {
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    }, 
    planId: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    },
    startedAt: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    endedAt: {
        type: DataTypes.DATE,
        allowNull: false,
    }
}, {
    timestamps: false,  // Automatyczne kolumny `createdAt` i `updatedAt`
});

module.exports = UserPlan;
