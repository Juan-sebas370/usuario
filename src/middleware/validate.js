const Joi = require('joi');

const usuarioSchema = Joi.object({
  nombre: Joi.string().required(),
  correo: Joi.string().email().required(),
  contraseña: Joi.string().required()
});

exports.validateUsuario = (req, res, next) => {
  const { error } = usuarioSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  next();
};