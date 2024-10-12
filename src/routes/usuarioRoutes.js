const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');
const { validateUsuario } = require('../middleware/validate');

router.get('/', usuarioController.getAllUsuario);
router.get('/:id', usuarioController.getUsuarioById);
router.post('/', validateUsuario, usuarioController.createUsuario);
router.put('/:id', validateUsuario, usuarioController.updateUsuario);
router.delete('/:id', usuarioController.deleteUsuario);

module.exports = router;