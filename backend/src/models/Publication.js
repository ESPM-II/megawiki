const DataTypes = require('sequelize');
const sequelize = require('../database/database.js');

const publication = sequelize.define('publication', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    cliente: {
        type: DataTypes.STRING 
    },
    titulo: {
        type: DataTypes.STRING
    },
    descripcion: {
        type: DataTypes.STRING
        
    }

}
);

module.exports = publication;