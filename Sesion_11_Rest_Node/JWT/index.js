const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();

app.get('/api', (req,res) => {
    res.json({
        mensaje: "Esta es la data de clientes"
    });
});

//Cambio método
app.post('/api/posts', verifiToken, (req,res) => {
    jwt.verify(req.token, 'secretkey', (err,authData) => {
        if (err) {
            res.sendStatus(403);
        } else {
            res.json ({
                mensaje: 'Post Creado',
                authData
            });
        }
    });
});

app.post('/api/login', (req,res) => {
    const user = {
        id: 1,
        username: "Maria",
        email: "maria.pareja@ucsm.edu.pe"
    }
    jwt.sign({user}, 'secretkey', {expiresIn: '30s'},
        (err,token) => {res.json({token});}
    );
});

//Función para verificar el token
function verifiToken(req,res,next) {
    const bearerHeader = req.headers['authorization'];
    if (typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1]
        req.token = bearerToken;
        next();
    } else {
        res.sendStatus(403);
    }
}

app.listen(5000, () => console.log("Servidor ejecutándose puerto 5000"))
