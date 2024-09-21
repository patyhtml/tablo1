// models/userModel.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        notNull: true,
        primaryKey: true,
        autoIncrement: true,
    },
    avatarId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
 
}, {
    timestamps: false,  // Automatyczne kolumny `createdAt` i `updatedAt`
});

module.exports = User;
