require('dotenv').config();
const { Sequelize } = require('sequelize');

// Se DB_USER e DB_PASSWORD estiverem em branco, Sequelize tentará se conectar sem autenticação
const sequelize = new Sequelize(
    process.env.mitologia,      // Nome do banco de dados
    process.env.root || '',      // Nome de usuário, se não existir, será uma string vazia
    process.env.DB_PASSWORD || '',  // Senha, se não existir, será uma string vazia
    {
        host: process.env.DB_HOST,  // Host do banco de dados (localhost)
        dialect: 'mysql',           // Dialeto a ser usado (MySQL)
    }
);

// Testando a conexão
sequelize.authenticate()
    .then(() => console.log('Database connected...'))
    .catch(err => console.log('Error: ' + err));

module.exports = sequelize;
