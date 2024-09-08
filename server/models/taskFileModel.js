// models/taskFileModel.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const TaskFile = sequelize.define('TaskFile', {
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
    timestamps: true  // Automatyczne kolumny `createdAt` i `updatedAt`
});

module.exports = TaskFile;
