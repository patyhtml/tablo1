// models/fileModel.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const File = sequelize.define('File', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
    },
    originalName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    path: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    mimeType: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    size: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
}, {
    timestamps: false,  // Automatyczne kolumny `createdAt` i `updatedAt`
});

module.exports = File;
