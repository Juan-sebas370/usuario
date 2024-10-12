const Usuario = require('../models/usuario');

exports.getAllUsuario = async (req, res) => {
    try {
        const usuarios = await Usuario.getAll();
        res.json(usuarios);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener usuarios', error: error.message });
    }
};

exports.getUsuarioById = async (req, res) => {
    try {
        const usuario = await Usuario.getById(req.params.id);
        if (usuario) {
            res.json(usuario);
        } else {
            res.status(404).json({ message: 'Usuario no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el usuario', error: error.message });
    }
};

exports.createUsuario = async (req, res) => {
    try {
        const id = await Usuario.create(req.body);
        res.status(201).json({ id, ...req.body });
    } catch (error) {
        res.status(500).json({ message: 'Error al crear el usuario', error: error.message });
    }
};

exports.updateUsuario = async (req, res) => {
    try {
        const affectedRows = await Usuario.update(req.params.id, req.body);
        if (affectedRows) {
            res.json({ id: req.params.id, ...req.body });
        } else {
            res.status(404).json({ message: 'Usuario no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar el usuario', error: error.message });
    }
};

exports.deleteUsuario = async (req, res) => {
    try {
        const affectedRows = await Usuario.delete(req.params.id);
        if (affectedRows) {
            res.status(204).end();
        } else {
            res.status(404).json({ message: 'Usuario no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el usuario', error: error.message });
    }
};