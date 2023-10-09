const sequelize = require('sequelize')
const mysql = require('mysql2')

const connection = new sequelize.Sequelize('capstone', 'root', 'password', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = connection