const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'mitologia'
});

connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    return;
  }
  console.log('Conectado ao banco de dados.');
});
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Conexão com o banco de dados estabelecida.');
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
