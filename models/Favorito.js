const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Favorito = sequelize.define('Favorito', {
    id_usuario: {
        type: DataTypes.INTEGER,
        references: {
            model: 'usuarios',
            key: 'id'
        },
        onDelete: 'CASCADE'
    },
    id_historia: {
        type: DataTypes.INTEGER,
        references: {
            model: 'historias',
            key: 'id'
        },
        onDelete: 'CASCADE'
    },
    data_adicao: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
}, {
    tableName: 'favoritos',
    timestamps: false
});

module.exports = Favorito;
