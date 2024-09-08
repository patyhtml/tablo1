// models/pointModel.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Point = sequelize.define('Point', {
    latitude: {
        type: DataTypes.DOUBLE,
        allowNull: false,
    },
    longitude: {
        type: DataTypes.DOUBLE,
        allowNull: false,
    }
}, {
    timestamps: true  // Automatyczne kolumny `createdAt` i `updatedAt`
});

module.exports = Point;
