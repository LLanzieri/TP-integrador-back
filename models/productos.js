const mongoose = require('mongoose');
let productoSchema = new mongoose.Schema({
    genero: { type: String, required: true },
    tipo: { type: String, required: true },
    categoria: { type: String, required: true },
    marca: { type: String, required: true },
    nombre: { type: String, required: true },
    descrip: { type: String, required: true },
    precio: { type: String, required: true },
    imagen: { type: String, required: true },
});

module.exports = mongoose.model('producto', productoSchema);