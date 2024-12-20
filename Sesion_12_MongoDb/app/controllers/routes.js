//Importando paquetes y archivos

var express = require('express');
var bodyParser = require('body-parser');
var Product = require('../models/products');
var router = express.Router();

//Configurando el Parser
router.use(bodyParser.urlencoded({extended:true}));
router.use(bodyParser.json());
router.use(function(req,res,next) {
    console.log("request");
    next();
});

//Métodos para manejar db MongoDb node-crud
router.route('/products')
.post(function(req,res) {
    var product = new Product();
    product.name = req.body.name;
    product.amount = req.body.amount;
    product.description = req.body.description;

    product.save(function(error){
        if(error){
            res.status(500).send("Error en el servicio"+error);
        }
        res.json({message: "Producto registrado con éxito"});
    });
})
.get(function(req,res){
    Product.find(function(error,product){
        if(error){
            res.status(500).send("Error en el servicio"+error);
        }
        res.json(products);
    });
});

module.exports = router;