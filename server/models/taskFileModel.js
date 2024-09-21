// models/taskFileModel.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const TaskFile = sequelize.define('TaskFile', {
    taskId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    fileId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    },

}, {
    timestamps: false  // Automatyczne kolumny `createdAt` i `updatedAt`
});

module.exports = TaskFile;
