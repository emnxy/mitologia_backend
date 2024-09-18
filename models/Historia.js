const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Historia = sequelize.define('Historia', {
    titulo: {
        type: DataTypes.STRING(200),
        allowNull: false
    },
    conteudo: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    id_mitologia: {
        type: DataTypes.INTEGER,
        references: {
            model: 'mitologias',
            key: 'id'
        },
        onDelete: 'CASCADE'
    },
    autor: {
        type: DataTypes.STRING(100)
    },
    fonte: {
        type: DataTypes.STRING(255)
    },
    data_publicacao: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    ultima_atualizacao: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    visualizacoes: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    classificacao_etaria: {
        type: DataTypes.ENUM('Livre', '10+', '12+', '16+', '18+')
    }
}, {
    tableName: 'historias',
    timestamps: false
});

module.exports = Historia;
