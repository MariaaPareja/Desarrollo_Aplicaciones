var mysql = require('mysql'); 
var conexion = mysql.createConnection({
    host:'localhost', 
    port: 3306, 
    database: 'farmacia', 
    user: 'root', 
    password: 'CocaCola.020605', 
}); 
 
conexion.connect(function(err){ 
    if(err){ 
        console.log("Error de conexion"+ err.stack); 
        return; 
    } 
    console.log("Conectado al ID "+conexion.threadId); 
}); 
 
conexion.query(`
    SELECT productos.id_producto, productos.nombre AS nombre_producto, productos.descripcion, productos.precio, productos.stock, productos.fecha_vencimiento,
           proveedores.nombre AS nombre_proveedor, proveedores.contacto, proveedores.telefono, proveedores.direccion
    FROM productos
    JOIN proveedores ON productos.id_proveedor = proveedores.id_proveedor
`, (error, results) => {
    if(error) 
        throw error; 
    results.forEach(element => { 
        console.log(element); 
    }); 
}); 
 
conexion.end();