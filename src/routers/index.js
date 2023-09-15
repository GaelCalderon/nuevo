const express = require('express');
const router =  express.Router();
const model = require('../models/datos.js')();
const Producto = require('../models/datos.js');

router.get('/', async (req, res) => {
    
        const datos = await Producto.find();
        console.log(datos);
        res.render('index.ejs', {
            datos
        });
    } 
);

module.exports = router;