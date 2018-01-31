const Sequelize = require('sequelize')
const db = require('../db')

const Pet = db.define('pet', {
  name: Sequelize.STRING,
  age: Sequelize.INTEGER,
  color: Sequelize.STRING
}, {
  timestamps: false
})

module.exports = Pet
