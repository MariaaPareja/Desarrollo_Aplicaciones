const express = require('express');  
const app = express(); 
const logMiddleware = (req, res, next) => {
    console.log(`[${new Date().toISOString()}] - ${req.method} - ${req.url}`);
    next();
};
const authMiddleware = (req, res, next) => {
    const isAuthenticated = true; //Aquí pondría algún método de autenticación más pro como SHA, etc.
    if (isAuthenticated) {
        console.log('Usuario autenticado');
        next();
    } else {
        res.status(401).send('No autenticado');
    }
};

const permissionsMiddleware = (req, res, next) => {
    const hasPermission = true; //Implementar permisos, etc.
    if (hasPermission) {
        console.log('Permisos concedidos');
        next();
    } else {
        res.status(403).send('Acceso denegado');
    }
};


app.use(logMiddleware); 
app.use(authMiddleware);

app.get('/', (req, res) => {
    res.send('Llegó petición al servidor');
});

app.get('/admin', permissionsMiddleware, (req, res) => {
    res.send('Acceso a la página de administración');
});

app.listen(3000, function() {
    console.log('Servidor en escucha en el puerto 3000');
});
