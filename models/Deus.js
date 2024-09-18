const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Deus = sequelize.define('Deus', {
    nome: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    descricao: {
        type: DataTypes.TEXT
    },
    simbolo: {
        type: DataTypes.STRING(100)
    },
    dominio: {
        type: DataTypes.STRING(100)
    },
    id_mitologia: {
        type: DataTypes.INTEGER,
        references: {
            model: 'mitologias',
            key: 'id'
        },
        onDelete: 'CASCADE'
    },
    parentesco: {
        type: DataTypes.TEXT
    },
    caracteristicas: {
        type: DataTypes.STRING(255)
    },
    animal_sagrado: {
        type: DataTypes.STRING(100)
    },
    cor_sagrada: {
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
    tableName: 'deuses',
    timestamps: false
});

module.exports = Deus;
