const express = require('express');
const router = express.Router();
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/imgs/avatars');
    },
    filename: (req, file, cb) => {
        console.log(file);
        let nombreImg = file.originalname;
        //reemplazo espacios en blanco en caso de que la imagen los tenga en el nombre
        if (nombreImg.includes(' ')) {
            nombreImg = nombreImg.split(' ');
            nombreImg = nombreImg.join('_');
        }
        cb(null, file.fieldname + '-' + nombreImg);
    }
});

const upload = multer({ storage: storage });

// IMPORTO CONTROLADORES
const controller_usuarios = require('../controllers/controller_usuarios');

// localhost/usuario/crear_cuenta
router.get('/crear_cuenta', controller_usuarios.mostrar_crearCuentaView);
router.post('/crear_cuenta', upload.single('myfile'), controller_usuarios.guardarNuevoUsuario);

// localhost/usuarios/iniciar_sesion
router.get('/iniciar_sesion', controller_usuarios.mostrar_iniciarSesionView);
router.post('/iniciar_sesion', controller_usuarios.login);

// localhost/usuarios/recuperar_pass
router.get('/recuperar_pass', controller_usuarios.mostrar_recuperarPassView);

//localhost/usuarios/cerrar_sesion
router.get('/cerrar_sesion', controller_usuarios.cerrarSesion);


module.exports = router;