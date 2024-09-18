// models/pointModel.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Point = sequelize.define('Point', {
    cord_x: {
        type: DataTypes.DOUBLE,
        allowNull: false,
    },
    cord_y: {
        type: DataTypes.DOUBLE,
        allowNull: false,
    },
    title: {
        type: DataTypes.STRING,
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
