const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Usuario = sequelize.define('Usuario', {
    nome: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true
    },
    senha: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    tipo_usuario: {
        type: DataTypes.ENUM('usuario', 'dev'),
        defaultValue: 'usuario'
    }
}, {
    tableName: 'usuarios',
    timestamps: false
});

module.exports = Usuario;
