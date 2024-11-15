var express = require('express');
var app = express();
var mysql = require('mysql');
var bodyParser = require('body-parser');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'CocaCola.020605',
    database: 'libreria'
})

connection.connect(function(err) {
    if (err) {
        console.error('Error al conectar a la base de datos:', err);
        return;
    }
    console.log('Conexión exitosa a la BD');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Creando servidor
var server = app.listen(3000, "127.0.0.1", function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log(`Servidor escuchando en http://${host}:${port}`);
});

//API para extraer los BOOKS
app.get('/books', function(req,res) {
    connection.query('select * from books',function(error,results){
        if (error) throw error;
        res.end(JSON.stringify(results))
    });
});

//API para extraer los libros por ID
app.get('/books/:id', function(req,res){
    connection.query('select * from books where id=?', [req.params.id],
        function(error, results){
            if(error) throw error;
            res.end(JSON.stringify(results))
        }
    );
});