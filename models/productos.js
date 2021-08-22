const mongoose = require('mongoose');
let productoSchema = new mongoose.Schema({
    genero: { type: String, required: true },
    tipo: { type: String, required: true },
    categoria: { type: String, required: true },
    marca: { type: String, required: true },
    talle: {type: String, required: true},
    nombre: { type: String, required: true },
    descrip: { type: String, required: true },
    precio: { type: String, required: true },
    imagenPerfil: { type: String, required: true },
    imagen_1: { type: String, required: false },
    imagen_2: { type: String, required: false },
    imagen_3: { type: String, required: false },
    propietario: { type: String, required: true }
});

module.exports = mongoose.model('producto', productoSchema);