const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'farmacia.html'));
});
app.get('/login', function(req, res) {
    res.send(`
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Login - Farmacia</title>
        </head>
        <body>
            <h1>Iniciar Sesión</h1>
            <form action="/login" method="POST">
                <label for="username">Usuario:</label>
                <input type="text" id="username" name="username" required>
                <br><br>
                <label for="password">Contraseña:</label>
                <input type="password" id="password" name="password" required>
                <br><br>
                <button type="submit">Ingresar</button>
            </form>
        </body>
        </html>
    `);
});
app.listen(3000, function() {
    console.log('La aplicación está funcionando en el puerto 3000');
});
