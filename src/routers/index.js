const express = require('express');
const router =  express.Router();
const model = require('../models/productos.js')();
const Producto = require('../models/productos.js');

router.get('/', async (req, res) => {
    try {
        const datos = await Producto.find();
        console.log(datos);
        res.render('index.ejs', {
            datos
        });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error en el servidor');
    }
});

module.exports = router;