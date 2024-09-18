const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Midia = sequelize.define('Midia', {
    tipo: {
        type: DataTypes.ENUM('imagem', 'video', 'audio', 'documento'),
        allowNull: false
    },
    caminho: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    descricao: {
        type: DataTypes.TEXT
    },
    id_historia: {
        type: DataTypes.INTEGER,
        references: {
            model: 'historias',
            key: 'id'
        },
        onDelete: 'CASCADE'
    },
    tamanho: {
        type: DataTypes.INTEGER
    },
    formato: {
        type: DataTypes.STRING(10)
    },
    data_upload: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
}, {
    tableName: 'midias',
    timestamps: false
});

module.exports = Midia;
