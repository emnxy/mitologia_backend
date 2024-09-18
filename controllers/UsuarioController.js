const Usuario = require('../models/Usuario');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.registrar = async (req, res) => {
    const { nome, email, senha } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(senha, 10);
        const usuario = await Usuario.create({ nome, email, senha: hashedPassword });
        res.json(usuario);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao registrar usuário' });
    }
};

exports.login = async (req, res) => {
    const { email, senha } = req.body;

    try {
        const usuario = await Usuario.findOne({ where: { email } });
        if (!usuario) {
            return res.status(400).json({ error: 'Usuário não encontrado' });
        }

        const isMatch = await bcrypt.compare(senha, usuario.senha);
        if (!isMatch) {
            return res.status(400).json({ error: 'Senha incorreta' });
        }

        const token = jwt.sign({ id: usuario.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao realizar login' });
    }
};
