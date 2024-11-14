var http = require('http');
var fs = require('fs');
var server = http.createServer();

function mensaje(petic, resp) {
    fs.readFile('index.html', function(err, data) {
        if (err) {
            resp.writeHead(500, { 'Content-Type': 'text/plain' });
            resp.write('Error al cargar la página');
            resp.end();
        } else {
            resp.writeHead(200, { 'Content-Type': 'text/html' });
            resp.write(data);
            resp.end();
        }
    });
}
server.on('request', mensaje);
server.listen(3000, function() {
    console.log('La aplicación está funcionando en el puerto 3000');
});
