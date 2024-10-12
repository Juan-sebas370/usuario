const express = require('express');
require('express-async-errors');
const helmet = require('helmet');
const usuarioRoutes = require('./routes/usuarioRoutes');
const errorHandler = require('./middleware/errorHandler');

const app = express();

// Aplicar Helmet para mejorar la seguridad
app.use(helmet());

// Configuraciones específicas de Helmet (opcional)
app.use(helmet.contentSecurityPolicy({ // Es una función de helmet que implementa la política de seguridad de contenido (
  directives: { // Define las reglas que controlan qué recursos pueden ser cargados por la aplicació
    defaultSrc: ["'self'"],// No se permiten recursos externos a menos que se especifiquen explícitamente en otras directivas.
    scriptSrc: ["'self'", "'unsafe-inline'"],// Permite que los scripts sean cargados solo desde la misma aplicación 
    styleSrc: ["'self'", "'unsafe-inline'"],// Similar a scriptSrc, pero para los estilos (CSS).
    imgSrc: ["'self'", "data:", "https:"],// Permite que las imágenes se carguen desde la misma aplicación ('self')
  },
}));

app.use(helmet.referrerPolicy({ policy: 'strict-origin-when-cross-origin' }));

app.use(express.json());

app.use('/api/usuario', usuarioRoutes);

app.use(errorHandler);

module.exports = app;