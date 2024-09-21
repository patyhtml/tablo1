// models/pointModel.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Point = sequelize.define('Point', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        notNull: true,
        primaryKey: true,
    },
    taskId: {
        type: DataTypes.INTEGER,   
    },
    userId: {
        type: DataTypes.INTEGER,   
    },

    cordX: {
        type: DataTypes.DOUBLE,
        allowNull: false,
    },
    cordY: {
        type: DataTypes.DOUBLE,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    createdAt: {
        type: DataTypes.DATE,
            allowNull: true,
        },
    description: {
        type: DataTypes.STRING,
        allowNull: true,
    }
}, {
    timestamps: false  // Automatyczne kolumny `createdAt` i `updatedAt`
});

module.exports = Point;
