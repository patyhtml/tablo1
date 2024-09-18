// models/taskModel.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');


const Task = sequelize.define('Task', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    board_column_id: {
        type: DataTypes.INTEGER,
    },
  
  
    projectName: {
        type: DataTypes.STRING(255), // Odpowiada varchar(255)
        allowNull: false
    },
    description: {
        type: DataTypes.STRING(255), // Odpowiada varchar(255)
    },
    priority: {
        type: DataTypes.STRING(255), // Odpowiada varchar(255)
        defaultValue: 'clear'
    },
    startDate: {
        type: DataTypes.DATE, // Odpowiada datetime
        validate: {
            isDate: true
        }
    },
    dueDate: {
        type: DataTypes.DATE, // Odpowiada datetime
        validate: {
            isDate: true
        }
    },
    tag: {
        type: DataTypes.STRING(255), // Odpowiada varchar(255)
    },
    email: {
        type: DataTypes.STRING(255), // Odpowiada varchar(255)
        validate: {
            isEmail: true
        }
    },
    createdAt: {
        type: DataTypes.DATE, // Odpowiada datetime
        allowNull: true
    },
    updatedAt: {
        type: DataTypes.DATE, // Odpowiada datetime
        allowNull: true
    }
}, {
    timestamps: false, // Automatyczne kolumny `createdAt` i `updatedAt`
});

module.exports = Task;
