const {Sequelize} = require('sequelize');

DB_NAME = process.env.DB_NAME;
DB_USER = process.env.DB_USER;
DB_PASS = process.env.DB_PASS;

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
    host: 'localhost',
    dialect: 'mysql'
});


module.exports = sequelize;