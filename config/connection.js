<<<<<<< HEAD
// import the Sequelize constructor from the library
=======
>>>>>>> 051c486cc19ed558eca166d80261d7b6a61e01c0
const Sequelize = require('sequelize');

require('dotenv').config();

<<<<<<< HEAD
// create connection to our database, pass in your MySQL information for username and password
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
    host: 'localhost',
    dialect: 'mysql',
    port:3306
=======
// create connection to db
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
>>>>>>> 051c486cc19ed558eca166d80261d7b6a61e01c0
});

module.exports = sequelize;