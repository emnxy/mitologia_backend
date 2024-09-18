const express = require('express');
const router = express.Router();
const UsuarioController = require('../controllers/UsuarioController');

// Rota para registrar usuários
router.post('/register', UsuarioController.registrar);

// Rota para login de usuários
router.post('/login', UsuarioController.login);

module.exports = router;
