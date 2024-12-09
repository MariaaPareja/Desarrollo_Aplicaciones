const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./db');
const routes = require('./routes');
require('dotenv').config();

const app = express();

// Conexión a la base de datos
connectDB();

// Middleware
app.use(bodyParser.json());

// Rutas
app.use('/api', routes);

// Servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
