const mongoose = require('mongoose');
let contactoSchema = new mongoose.Schema({
    nya: { type: String, required: true },
    email: { type: String, required: true },
    mensaje: { type: String, required: true },
});

module.exports = mongoose.model('mensaje', contactoSchema);