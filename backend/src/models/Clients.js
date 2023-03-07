const DataTypes = require('sequelize');
const sequelize = require('../database/database.js');

const clients = sequelize.define('clients', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING
    }
});

module.exports = clients;