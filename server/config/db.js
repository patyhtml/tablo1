// config/db.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('tablo', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql', 
    logging: function () {},
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
    dialectOptions: {
        socketPath: "/tmp/mysql.sock",
    },
    define: {
        paranoid: true
    } 
});  
module.exports = sequelize;




