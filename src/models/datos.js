const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Producto = new Schema({
    marca: String,
    nombre: String,
    precio: String
})
Producto.methods.update = async function (data) {
    await this.updateOne({ _id: this._id }, data);
};

module.exports = mongoose.model('datos', Producto);