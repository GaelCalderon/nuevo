const express = require('express');
const router = express.Router();
const Producto = require('../models/datos.js');

router.get('/', async (req, res) => {
    try {
        const datos = await Producto.find();
        console.log("los datos son", datos);
        res.render('index.ejs', { datos });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error obteniendo los datos');
    }
});

router.post('/add', async (req, res) => {
    try {
        const nuevoProducto = new Producto(req.body);
        await nuevoProducto.save();
        res.redirect('/');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al agregar el producto');
    }
});

router.get('/del/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const producto = await Producto.findById(id);
        if (!producto) {
            return res.status(404).send('Producto no encontrado');
        }
        await Producto.findByIdAndRemove(id);
        res.redirect('/');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al eliminar el producto');
    }
});

router.post('/upd/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const producto = req.body;
        
        const productoExistente = await Producto.findById(id);
        if (!productoExistente) {
            return res.status(404).send('Producto no encontrado');
        }

        await Producto.findByIdAndUpdate(id, producto);
        res.redirect('/');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al actualizar el producto');
    }
});

module.exports = router;
