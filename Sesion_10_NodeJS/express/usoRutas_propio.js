
const express = require('express');
const app = express();
const farmaciaRoutes = require('./rutas_propio.js');
app.use('/', farmaciaRoutes);
app.listen(3000, function() {
    console.log('La aplicación está funcionando en el puerto 3000');
});
