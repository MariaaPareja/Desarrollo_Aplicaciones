const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    // Configura la ruta al archivo HTML
    const filePath = path.join(__dirname, 'index_propio.html');

    // Lee el archivo HTML
    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Error al cargar la página');
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        }
    });
});

// Configura el servidor para escuchar en el puerto 3000
server.listen(3000, () => {
    console.log('Servidor iniciado en http://localhost:3000');
});
