const express = require('express');
const router = express.Router();
router.get('/', function(req, res) {
    res.send(`
        <h1>Bienvenido a la Farmacia Salud</h1>
        <p>Encuentra los mejores productos para tu salud y bienestar.</p>
    `);
});
router.get('/login', function(req, res) {
    res.send(`
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
    `);
});
router.get('/productos', function(req, res) {
    res.send(`
        <h1>Catálogo de Productos</h1>
        <ul>
            <li>Paracetamol - $1.50</li>
            <li>Ibuprofeno - $2.00</li>
            <li>Vitamina C - $0.80</li>
            <li>Antihistamínico - $3.00</li>
        </ul>
    `);
});
router.get('/productos/compra', function(req, res) {
    res.send(`
        <h1>Compra de Productos</h1>
        <p>Aquí puedes seleccionar y comprar los productos que necesitas.</p>
    `);
});

module.exports = router;