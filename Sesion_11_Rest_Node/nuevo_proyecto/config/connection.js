const mysql = require('mysql');
var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'CocaCola.020605',
    database: 'libreria'
})

con.connect((err)=> {
    if(err) {
        throw err;
    }
    console.log("Conectado exitosamente a la BD");
});

module.exports = con;
