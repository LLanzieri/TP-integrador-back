const mongoose = require('mongoose');
let usuarioSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    apellido: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    avatar: { type: String, required: true },
    suscripcion: { type: Boolean, default: false }
    
});

module.exports = mongoose.model('usuario', usuarioSchema);