const express = require('express');
const router =  express.Router();
const model = require('../models/productos.js')();
const Producto = require('../models/productos.js');

router.get('/',async(req, res) => {
    const datos = await Producto.find();
    console.log(datos);
    res.render('index.ejs'),{
        datos
    }
});

module.exports = router;