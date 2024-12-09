//Importando paquetes y archivos

var express = require('express');
var app = express();
var db = require('./models/db');
var Router = require('./controllers/routers');

var port = 3000;

app.use('/api',Router);

app.listen(port);
console.log("Ejecutándose en puerto 3000");