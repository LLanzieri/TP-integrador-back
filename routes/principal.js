const express = require('express');
const router = express.Router();

//IMPORTO CONTROLADORES

const controller_principal = require('../controllers/controller_principal');
const controller_usuarios = require('../controllers/controller_usuarios');

router.get('/',controller_principal.mostrar_principal);

// router.get('/', controller_usuarios.login);

module.exports = router;