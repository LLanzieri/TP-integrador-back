const express = require('express');
const router = express.Router();

// IMPORTO CONTROLADORES
const controller_contacto = require('../controllers/controller_contacto');

// localhost/contacto
router.get('/', controller_contacto.mostrar_contactoVista);
router.post('/', controller_contacto.guardarMensaje);

//localhost/contacto/ayuda
router.get('/ayuda', controller_contacto.faqs);


module.exports = router;