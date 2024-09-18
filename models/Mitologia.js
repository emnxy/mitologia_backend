const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Mitologia = sequelize.define('Mitologia', {
    nome: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    descricao: {
        type: DataTypes.TEXT
    },
    origem: {
        type: DataTypes.STRING(100)
    },
    periodo_historico: {
        type: DataTypes.STRING(100)
    },
    quantidade_deuses: {
        type: DataTypes.INTEGER
    },
    texto_sagrado: {
        type: DataTypes.STRING(255)
    },
    mitologia_principal: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    simbolo_principal: {
        type: DataTypes.STRING(100)
    },
    criador: {
        type: DataTypes.STRING(100)
    },
    data_criacao: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    ultima_atualizacao: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
}, {
    tableName: 'mitologias',
    timestamps: false
});

module.exports = Mitologia;
