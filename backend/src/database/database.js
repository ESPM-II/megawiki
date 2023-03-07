const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://postgres:enlaces666@localhost:5432/megawiki');
module.exports = sequelize;