// models/userModel.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    avatarId: {
        type: DataTypes.INTEGER,
        notNull: true,
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
        notNull: true,
    },
    subscribe: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    agree: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: true,
    },

    updatedAt: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    fieldList: {
        type: DataTypes.DATE,
        allowNull: true,
    },

}, {
    timestamps: false,  // Automatyczne kolumny `createdAt` i `updatedAt`
});

module.exports = User;
