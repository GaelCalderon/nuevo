const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Producto = new Schema({
    Marca: String,
    Nombre: String,
    Precio: String
})

module.exports = mongoose.model('datos', Producto);