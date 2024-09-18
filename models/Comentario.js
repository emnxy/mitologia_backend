const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Comentario = sequelize.define('Comentario', {
    id_historia: {
        type: DataTypes.INTEGER,
        references: {
            model: 'historias',
            key: 'id'
        },
        onDelete: 'CASCADE'
    },
    id_usuario: {
        type: DataTypes.INTEGER,
        references: {
            model: 'usuarios',
            key: 'id'
        },
        onDelete: 'CASCADE'
    },
    comentario: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    data_comentario: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    ultima_atualizacao: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    curtidas: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    status: {
        type: DataTypes.ENUM('ativo', 'inativo', 'moderado'),
        defaultValue: 'ativo'
    }
}, {
    tableName: 'comentarios',
    timestamps: false
});

module.exports = Comentario;
